
var _ = require('underscore')
  , u = require('./utils')
  , inherit = u.inherit
  , Type = u.Type
  , isType = u.isType
  , j = u.j
  , jarr = u.jarr;

var Token = inherit('Token', Type
  , function(n) { this.value = n; }
  , {   hasTableName: function() {
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

          options = options || {};
          var constraints = u.arrArrayify(2, options.constraints || []);

          var f = function(t) { return t.getFieldsAsSQL().join(', '); }
            , j = function(t) { return t.getJoin(constraints); };

          var fields    = this.tables.map(f)
            , from      = this.tables[0].getFrom()
            , joins     = _.rest(_.clone(this.tables)).map(j).join(' ').trim()
            , where     = this.getWhere(constraints)   || null
            , order_by  = this.getOrderBy() || null
            , group_by  = this.getGroupBy() || null
            , having    = this.getHaving()  || null
            , limit     = this.getLimit()   || null
            , offset    = this.getOffset()  || null;


          var re = [
            , 'select'
            , u.compact(fields).join(', ')
            , from
            , joins
            , where     ? 'where '    + where     : ''
            , group_by  ? 'group by ' + group_by  : ''
            , having    ? 'having '   + having    : ''
            , order_by  ? 'order by ' + order_by  : ''
            , limit     ? 'limit '    + limit     : ''
            , offset    ? 'offset '   + offset    : ''
          ];

          return u.compact(re).join(' ');

        }
      , getJSON: function() {
          return JSON.stringify(this);
        }
      , getFieldInfo: function() {
          return this.mapTablesFn('getFieldInfo').reduce(u.extend, {});
        }
      , getAliases: function() {
          return u.concat(this.mapTablesFn('getAliases'));
        }
      , getFieldAliases: function() {
          return u.concat(this.mapTablesFn('getFieldAliases'));
        }
      , getWhere: function(constraints) {
          // first table with constraints
          var ts = [this.tables[0].getWhereSQL(constraints)];
          return u.concatj(
              ' and '
            , u.concat(ts, _.rest(this.mapTablesFn('getWhereSQL')))
          );
        }
      , getOrderBy: function() {
          return u.concatj(', ', this.mapTablesFn('getOrderBySQL'));
        }
      , getGroupBy: function() {
          return u.concatj(', ', this.mapTablesFn('getGroupBySQL'));
        }
      , getHaving: function() {
          return u.concatj(' and ', this.mapTablesFn('getHavingSQL'))
        }
      , getLimit: function() {
          return _.last(u.compact(this.mapTablesFn('getLimitSQL')));
        }
      , getOffset: function() {
          return _.last(u.compact(this.mapTablesFn('getOffsetSQL')));
        }
      , mapTables: function(f) {
          return this.tables.map(f);
        }
      , mapTablesFn: function(f_name) {
          var args = [].slice.call(arguments, 1);
          return this.mapTables(function(t) {
            return t[f_name].apply(t, args);
          });
        }
      , mapTablesProp: function(prop) {
          return this.mapTables(function(t) {
            return t[prop];
          });
        }
    }
);

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
          return u.compact(this._getFields().map(this.gs()));
        }
      , _getFields: function() {
          return this.selects.filter(function(t) { return t.isa(Field); });
        }
      , _getFieldsNotExpr: function() {
          return this._getFields().filter(notExpr);
        }
      , _getFieldsExpr: function() {
          return _.difference(this._getFields(), this._getFieldsNotExpr());
        }
      , getTableName: function() {
          return this.alias || this.name
        }
      , getWhereSQL: function(constraint) {
          var wh = this.withConstraint(constraint, this.clauses.where);
          return wh ? wh.getSQL(this.getTableName()) : '';
        }
      , getOrderBySQL: function() {
          return this.mapByClauseSQL('order_by');
        }
      , gs: function() {
          return getSQLt(this.getTableName());
        }
      , getGroupBySQL: function() {
          return this.mapByClauseSQL('group_by');
        }
      , mapByClause: function(clause, f) {
          return u.compact(this.clauses[clause] || []).map(f);
        }
      , mapByClauseSQL: function(clause) {
          var s = this.gs();
          return this.mapByClause(clause, function(e) {
            return u.compact(u.arrayify(e).map(s)).join(' ');
          });
        }
      , getFrom: function() {
          return this.getDeclPrefix('from');
        }
      , getJoin: function(constraint) {
          return this.getDeclPrefix('left join', constraint || []);
        }
      , getFieldInfo: function() {
          return _.object(this.getFieldAliases(), this.getFieldNames());
        }
      , getFieldNames: function() {
          var s = this.gs()
            , f = function(t) { return s(t.name); };
          return u.compact(this._getFieldsNotExpr().map(f));
       }
      , getAliases: function() {
          return this._getFields().map(orAlias);
        }
      , getFieldAliases: function() {
          return u.compact(this._getFieldsNotExpr().map(orAlias));
        }
      , getHavingSQL: function() {
          return this.applyToClauseSQL('having');
        }
      , getLimitSQL: function() {
          return this.applyToClauseSQL('limit');
        }
      , getOffsetSQL: function() {
          return this.applyToClauseSQL('offset');
        }
      , applyToClause: function(clause, f) {
          var args = [].slice.call(arguments, 2)
            , cl = this.clauses[clause];
          return cl ? cl[f].apply(cl, args) : '';
        }
      , applyToClauseSQL: function(clause) {
          return this.applyToClause(clause, 'getSQL', this.getTableName());
        }
      , getDeclaration: function(constraint) {
          var j = this.withConstraint(constraint, this.join);
          return jarr(' ', u.compact([
              this.name
            , this.alias ? 'as ' + this.alias : false
            , j ? 'on ' + j.getSQL(this.getTableName()) : false
          ]));
        }
      , getDeclPrefix: function(prefix, constraint) {
          return j(' ', prefix, this.getDeclaration(constraint));
        }
      , withConstraint: function(constraint, e) {
          var c = this.prepConstraint(constraint);
          if (!c) return e;
          return !!e ? new CombExpr('and', c, e) : c;
        }
      , prepConstraint: function(constraint) {
          var exps = u.compact(constraint).map(pairToEqExpr);
          return !!exps.length ? exps.reduce(andExpr) : null;
        }
    }
);

// helpers

var getSQLt = _.bind(withTable, null, getSQL);

function pairToEqExpr(arr) {
  return toEqExpr(arr[0], arr[1]);
}

function andExpr(l, r) {
  return new CombExpr('and', l, r);
}

function toEqExpr(k, v) {
  return new EqExpr(
      '='
    , new Token(k)
    , new LitToken( typeof v === 'string' ? '"' + v + '"' : v )
  );
}

function notExpr(t) {
  return !t.name.isa(Expr);
}

function orAlias(t) {
  return t.alias ? t.alias.value : t.name.value;
}

function rVal(val) {
  return _.bind(rtValue, { value: val });
}

function rtValue() {
  return this.value;
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
