
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
  , { getSQL: function() { return this.value; } }
);

var StarToken = inherit('StarToken', Token, null
  , { getSQL: function() { return '*'; } }
);

var BoolToken = inherit('BoolToken', LitToken);

var NullToken = inherit('NullToken', Token, null
  , { getSQL: function() { return 'NULL'; } }
);

var Sel = inherit('Sel', Type, function() {
  this.alias = '';
});

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
          return 'not ' + this.value.getSQL(table);
        }
    }
);

var FnExpr = inherit('FnExpr', Expr
  , function(name, args) {
      this.name = name;
      this.args = args;
    }
  , {   getSQL: function(table) {
          return this.name + '(' + this.args.map(withTable(getSQL, table)) + ')';
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
            return getSQL(table, this.left) +
                   ' ' + this.operation + ' ' +
                   getSQL(table, this.right)
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

var Ref = inherit('Ref', Sel, function(name, id) {
  this.name = name;
  this.id = id || null;
});

var SingleRef = inherit('SingleRef', Ref);
var PluralRef = inherit('PluralRef', Ref);

var Query = inherit('Query', Sel
  , function(tables) {
      this.tables = tables || [];
    }
  , {
        getSQL: function(options) {
          var fields = this.tables.map(function(t) { return t.getFieldsAsSQL().join(',\n '); })
            , from = this.tables[0].getFrom()
            , joins = _.chain(this.tables)
                       .rest()
                       .map(function(t) { return t.getJoin(); })
                       .value()
                       .join(' ')
            , where = this.getWhere() || null
            // , order_by = this.getOrderBy() || null
            // , group_by = this.getGroupBy() || null
            // , having = this.getHaving() || null
            // , limit = this.getLimit() || null
            // , offset = thils.getOffset() || null
            ;

          return [  'SELECT'
                  , fields.join(',\n ')
                  , from
                  , joins
                  , where ? 'WHERE ' + where : ''
                  // , group_by ? 'GROUP BY ' + group_by.join(', ') : ''
                  // , having ? 'HAVING ' + having : ''
                  // , order_by ? 'ORDER BY ' + order_by.join(', ') : ''
                  // , limit ? 'LIMIT ' + limit : ''
                  // , offset ? 'OFFSET ' + offset : ''
                ].join('\n ');
        }
      , getWhere: function() {
          var f = function(t) { return t.getWhereSQL(); }
            , wh = this.tables.map(f);
          return [].concat.apply([], wh).join(' and ');
        }
      , getOrderBy: function() {
          var f = function(t) { return t.getOrderBySQL(); }
            // ,
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
          return _.chain(this.selects)
                  .map(withTable(getSQL, this.getTableName()))
                  .compact()
                  .value();
        }
      , getTableName: function() {
          return this.alias || this.name
        }
      , getWhereSQL: function() {
          return this.clauses.where
            ? this.clauses.where.getSQL(this.getTableName())
            : '';
        }
      , getDeclaration: function() {
          var p = [
              this.name
            , this.alias ? ' as ' + this.alias : false
            , this.join ? ' on ' + this.join.getSQL(this.getTableName()) : false
          ];
          return _.compact(p).join(' ');
        }
      , getFrom: function() {
          return 'FROM ' + this.getDeclaration();
        }
      , getJoin: function() {
          return 'LEFT JOIN ' + this.getDeclaration();
        }
    }
);

function getSQL(table, thing) {
  if (_.isArray(thing)) {
    return '(' + thing.map(withTable(getSQL, table)).join(', ') + ')'
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
};

// and out.

exports.types = types;
exports.inherits = _.bind(u.inheritsTypes, null, types);
exports = _.extend(exports, types);
exports.isType = isType;
