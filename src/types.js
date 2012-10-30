
var _ = require('underscore')
  , u = require('./utils')
  , inherit = u.inherit
  , Type = u.Type;

var Sel = inherit(Type, function() {
  this.alias = '';
});

var Expr = inherit(Sel, function(value, alias) {
  this.value = value;
  this.alias = alias || '';
});

var Field = inherit(Sel, function(name, alias) {
  this.name = name;
  this.alias = alias || '';
});

var Ref = inherit(Sel, function(name, id) {
  this.name = name;
  this.id = id || null;
});

var SingleRef = inherit(Ref, function(name, id) {
  Ref.call(this, name, id);
});

var PluralRef = inherit(Ref, function(name, id) {
  Ref.call(this, name, id);
});

var Query = inherit(Sel, function(tables) {
  this.tables = tables || [];
});

var Table = inherit(Type, function(name, selects, clauses, extra) {
  var t = this;

  if (!name) {
    throw "table must have a name.";
  }

  this.name = name;
  this.alias = '';
  this.join = '';
  this.selects = selects || [];
  this.clauses = clauses || [];

  _.each(extra || {}, function(v, n) { t[n] = v; });
});

var isType = function(t) {
  return t && _.isObject(t) && t instanceof Type;
};

// and out.

exports.Field = Field;
exports.Ref = Ref;
exports.SingleRef = SingleRef;
exports.PluralRef = PluralRef;
exports.Query = Query;
exports.Table = Table;
exports.Expr = Expr;
exports.isType = isType;
