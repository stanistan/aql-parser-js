
var _ = require('underscore')
  , u = require('./utils')
  , inherit = u.inherit
  , Type = u.Type;

var Token = inherit('Token', Type
  , function(n) { this.value = n; }
  , { toJSON: function() { return this.value; } }
);

var BoolToken = inherit('BoolToken', Token, function(n) {
  Token.call(this, n);
});

var NullToken = inherit('NullToken', Token, function() {
  this.value = "NULL";
});

var Sel = inherit('Sel', Type, function() {
  this.alias = '';
});

var Expr = inherit('Expr', Sel, function(value, alias) {
  this.value = value;
  this.alias = alias || '';
});

var NegExpr = inherit('NegExpr', Expr, function(value) {
  this.value = value;
});

var FnExpr = inherit('FnExpr', Expr, function(name, args) {
  this.name = name;
  this.args = args;
});

var ExprExpr = inherit('ExprExpr', Expr, function(op, left, right) {
  this.operation = op;
  this.left = left;
  this.right = right;
});

var ArithExpr = inherit('ArithExpr', ExprExpr);
var CombExpr = inherit('CombExpr', ExprExpr);
var EqExpr = inherit('EqExpr', ExprExpr);

var Field = inherit('Field', Sel, function(name, alias) {
  this.name = name;
  this.alias = alias || '';
});

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
);

var Table = inherit('Table', Type, function(name, selects, clauses, post, extra) {
  var t = this;

  if (!name) {
    throw "table must have a name.";
  }

  this.name = name;
  this.alias = '';
  this.join = '';
  this.selects = selects || [];
  this.clauses = clauses || [];
  this.post = post || [];

  _.each(extra || {}, function(v, n) { t[n] = v; });
});

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
  , Expr: Expr
  , Sel: Sel
  , FnExpr: FnExpr
  , ArithExpr: ArithExpr
  , CombExpr: CombExpr
  , EqExpr: EqExpr
  , NegExpr: NegExpr
  , BoolToken: BoolToken
  , NullToken: NullToken
};

// and out.

exports.types = types;
exports.inherits = _.bind(u.inheritsTypes, null, types);
exports = _.extend(exports, types);
exports.isType = isType;
