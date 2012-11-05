
var _ = require('underscore')
  , u = require('./utils')
  , inherit = u.inherit
  , Type = u.Type;

var Sel = inherit('Sel', Type, function() {
  this.alias = '';
});

var Expr = inherit('Expr', Sel, function(value, alias) {
  this.value = value;
  this.alias = alias || '';
});

var Field = inherit('Field', Sel, function(name, alias) {
  this.name = name;
  this.alias = alias || '';
});

var Ref = inherit('Ref', Sel, function(name, id) {
  this.name = name;
  this.id = id || null;
});

var SingleRef = inherit('SingleRef', Ref, function(name, id) {
  Ref.call(this, name, id);
});

var PluralRef = inherit('PluralRef', Ref, function(name, id) {
  Ref.call(this, name, id);
});

var Query = inherit('Query', Sel, function(tables) {
  this.tables = tables || [];
});

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

var isType = function(t) {
  return t && _.isObject(t) && t instanceof Type;
};

var types = {
    Field: Field
  , Ref: Ref
  , SingleRef: SingleRef
  , PluralRef: PluralRef
  , Query: Query
  , Table: Table
  , Expr: Expr
  , Sel: Sel
};

// and out.

exports.types = types;
exports.inherits = _.bind(u.inheritsTypes, null, types);
exports = _.extend(exports, types);
exports.isType = isType;
