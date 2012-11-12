
var _ = require('underscore')
  , u = require('./utils')
  , inherit = u.inherit
  , Type = u.Type;

var Token = inherit('Token', Type
  , function(n) { this.value = n; }
  , {   toJSON: function() { return this.value; }
      , hasTableName: function() {
          return typeof this.value == 'string'
            ? this.value.indexOf('.') > 0
            : true;
        }
      , withTableName: function(table) {
          return this.hasTableName() ? this.value : table + '.' + this.value;
        }
      , getSQL: function(table) {
          return this.withTableName(table);
        }
    }
);

var LitToken = inherit('LitToken', Token, null
  , { getSQL: rtValue }
);

var BoolToken = inherit('BoolToken', LitToken);

var StarToken = inherit('StarToken', LitToken, null
  , { getSQL: rVal('*') }
);

var NullToken = inherit('NullToken', LitToken, null
  , { getSQL: rVal('null') }
);

var Sel = inherit('Sel', Type);

var Expr = inherit('Expr', Sel
  , function(value) {
      this.value = value;
    }
  , {   getSQL: function(table) {
          return getSQL(table, this.value);
        }
    }
);

var NegExpr = inherit('NegExpr', Expr, null
  , {   getSQL: function(table) {
          return j(' ', 'not', this.value.getSQL(table));
        }
    }
);

var CaseWhen = inherit('CaseWhen', Expr
  , function(col, conds, els) {
      this.col = col || '';
      this.conds = conds;
      this.els = els || '';
    }
  , {   getSQL: function(table) {
          var s = getSQLt(table);
          return j(' ', 'case', s(this.col), this.conds.map(s).join(' '), s(this.els), 'end');
        }
    }
);

var ElseExpr = inherit('ElseExpr', Expr, null
  , {   getSQL: function(table) {
          return j(' ', 'else', getSQL(table, this.value));
        }
    }
);

var CondExpr = inherit('CondExpr', Expr
  , function(when, then) {
      this.when = when;
      this.then = then;
    }
  , {   getSQL: function(table) {
          var s = withTable(getSQL, table)
          return j(' ', 'when', getSQL(table, this.when), 'then', getSQL(table, this.then))
        }
    }
);

var FnExpr = inherit('FnExpr', Expr
  , function(name, args) {
      this.name = name;
      this.args = args;
    }
  , {   getSQL: function(table) {
          return j('', this.name, '(', this.args.map(getSQLt(table)).join(', '), ')');
        }
    }
);

var ExprExpr = inherit('ExprExpr', Expr
    , function(op, left, right) {
        this.operation = op;
        this.left = left;
        this.right = right;
      }
    , {   getSQL: function(table) {
            var s = getSQLt(table);
            return j(' ', s(this.left), this.operation.toLowerCase(), s(this.right));
          }
      }
);

var ArithExpr = inherit('ArithExpr', ExprExpr);
var CombExpr = inherit('CombExpr', ExprExpr);
var EqExpr = inherit('EqExpr', ExprExpr);

var Field = inherit('Field', Sel
  , function(name, alias) {
      this.name = name;
      this.alias = alias || '';
    }
  , {   getSQL: function(table) {
          var extra = this.alias ? ' as ' + this.alias.value : '';
          return getSQL(table, this.name) + extra;
        }
    }
);

var Ref = inherit('Ref', Sel
  , function(name, id) {
      this.name = name;
      this.id = id || null;
    }
);

var SingleRef = inherit('SingleRef', Ref);
var PluralRef = inherit('PluralRef', Ref);

var Query = inherit('Query', Sel
  , function(tables) {
      this.tables = tables || [];
    }
  , {
        getSQL: function(options) {

          // options should have contraints, callbacks, etc

          var fields = this.tables.map(function(t) { return t.getFieldsAsSQL().join(', '); })
            , from = this.tables[0].getFrom()
            , joins = _.chain(this.tables)
                       .rest()
                       .map(function(t) { return t.getJoin(); })
                       .value()
                       .join(' ')
                       .trim()
            , where = this.getWhere() || null
            , order_by = this.getOrderBy() || null
            , group_by = this.getGroupBy() || null
            , having = this.getHaving() || null
            , limit = this.getLimit() || null
            , offset = this.getOffset() || null
            ;

          return compact([  'select'
                  , compact(fields).join(', ')
                  , from
                  , joins
                  , where ? 'where ' + where : ''
                  , group_by ? 'GROUP BY ' + group_by : ''
                  , having ? 'having ' + having : ''
                  , order_by ? 'order by ' + order_by : ''
                  , limit ? 'limit ' + limit : ''
                  , offset ? 'offset ' + offset : ''
                ]).join(' ');
        }
      , getWhere: function() {
          return concatj(' and ', this.mapTablesFn('getWhereSQL'));
        }
      , getOrderBy: function() {
          return concatj(', ', this.mapTablesFn('getOrderBySQL'));
        }
      , getGroupBy: function() {
          return concatj(', ', this.mapTablesFn('getGroupBySQL'));
        }
      , getHaving: function() {
          return concatj(' and ', this.mapTablesFn('getHavingSQL'))
        }
      , getLimit: function() {
          return _.last(compact(this.mapTablesFn('getLimitSQL')));
        }
      , getOffset: function() {
          return _.last(compact(this.mapTablesFn('getOffsetSQL')));
        }
      , mapTables: function(f) {
          return this.tables.map(f);
        }
      , mapTablesFn: function(f_name) {
          return this.mapTables(function(t) {
            return t[f_name]();
          });
        }
      , mapTablesProp: function(prop) {
          return this.mapTables(function(t) {
            return t[prop];
          });
        }
    }
);

function concat(arr) {
  return [].concat.apply([], arr);
}

function concatj(glue, arr) {
  return j.apply(null, unshift(compact(concat(arr)), glue));
}

function unshift(arr, thing) {
  var a = _.clone(arr);
  a.unshift(thing);
  return a;
}

var Table = inherit('Table', Type
  , function(name, selects, clauses, post, extra) {
      this.merge(_.extend(
          {   name: name
            , alias: null
            , join: null
            , selects: selects || []
            , post: post || []
            , clauses: clauses || [] }
        , extra || {}
      ));
    }
  , {   getFieldsAsSQL: function() {
          return _.chain(this._getFields())
                  .map(withTable(getSQL, this.getTableName()))
                  .compact()
                  .value();
        }
      , _getFields: function() {
          return _.chain(this.selects).filter(function(t) {
            return t.isa(Field);
          });
        }
      , getTableName: function() {
          return this.alias || this.name
        }
      , getWhereSQL: function() {
          return this.clauses.where
            ? this.clauses.where.getSQL(this.getTableName())
            : '';
        }
      , getOrderBySQL: function() {
          var s = getSQLt(this.getTableName())
            , f = function(e) {
                    e = _.isArray(e) ? e : [e];
                    return compact(e.map(s)).join(' ')
                  };
          return this.clauses.order_by
            ? this.clauses.order_by.map(f)
            : [];
        }
      , getGroupBySQL: function() {
          var s = getSQLt(this.getTableName())
            , f = function(e) {
                    e = _.isArray(e) ? e : [e];
                    return compact(e.map(s)).join(' ');
                  };
          return this.clauses.group_by
            ? this.clauses.group_by.map(f)
            : [];
        }
      , getDeclaration: function() {
          var p = [
              this.name
            , this.alias ? 'as ' + this.alias : false
            , this.join ? 'on ' + this.join.getSQL(this.getTableName()) : false
          ];
          return compact(p).join(' ').trim();
        }
      , getFrom: function() {
          return j(' ', 'from', this.getDeclaration()).trim();
        }
      , getJoin: function() {
          return j(' ', 'left join', this.getDeclaration()).trim();
        }
      , getAliases: function() {
          return _.chain(this._getFields())
                  .map(function(t) { return t.alias ? t.alias.value : null; })
                  .compact()
                  .value()
        }
      , getHavingSQL: function() {
          return [];
        }
      , getLimitSQL: function() {
          return this.clauses.limit ? this.clauses.limit.getSQL(this.getTableName()) : '';
        }
      , getOffsetSQL: function() {
          return this.clauses.offset ? this.clauses.offset.getSQL(this.getTableName()) : '';
        }
    }
);

// helpers

var getSQLt = _.bind(withTable, null, getSQL);

function rVal(val) {
  return _.bind(rtValue, { value: val });
}

function rtValue() {
  return this.value;
}

function j(del) {
  return compact([].slice.call(arguments, 1)).join(del).trim();
}

function getSQL(table, thing) {
  if (_.isArray(thing)) {
    return '(' + thing.map(getSQLt(table)).join(', ') + ')'
  }

  if (!isType(thing)) {
    return thing;
  }

  return thing.getSQL(table);
}

function withTable(f, table) {
  return _.bind(f, null, table);
}

function isType(t) {
  return t && _.isObject(t) && t instanceof Type;
};

function compact(arr) {
  return _.filter(arr, function(p) {
    return !!p || p === 0;
  });
}

var types = {
    Token: Token
  , Field: Field
  , Ref: Ref
  , SingleRef: SingleRef
  , PluralRef: PluralRef
  , Query: Query
  , Table: Table
  , Sel: Sel
  , Expr: Expr
  , FnExpr: FnExpr
  , ArithExpr: ArithExpr
  , CombExpr: CombExpr
  , ExprExpr: ExprExpr
  , EqExpr: EqExpr
  , NegExpr: NegExpr
  , BoolToken: BoolToken
  , NullToken: NullToken
  , StarToken: StarToken
  , LitToken: LitToken
  , CaseWhen: CaseWhen
  , CondExpr: CondExpr
  , ElseExpr: ElseExpr
};

// and out.

exports.types = types;
exports.inherits = _.bind(u.inheritsTypes, null, types);
exports = _.extend(exports, types);
exports.isType = isType;
