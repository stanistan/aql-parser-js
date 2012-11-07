
var _ = require('underscore');

// helper for accessing "hidden" properties of the prototype -- prefixed by \-__\
var pos = toObjectPrefix(['s', 'n'], '-__');

function inherit(n, from, f, methods) {

  methods = methods || {};
  from = (function(f) {
    return _.isFunction(f) ? new f() : f;
  }(from || function() { }));

  if (!_.isFunction(f)) {
    throw "cannot inherit to a non-function.";
  }

  if (!_.isObject(from)) {
    throw "cannot inherit from a non object.";
  }

  if (!_.isObject(methods)) {
    throw "methods needs to be an object.";
  }

  var to = _.bind(toProto, null, f);

  f.prototype = from;
  f.prototype.constructor = f;
  _.each(methods, to);

  f.prototype[pos.n] = n;
  f.prototype[pos.s] = from;

  return f;
}

var Type = inherit('Type', {}
  , function() { }
  , {   isa: function(t) { return this instanceof t; }
      , getTypeName: function() { return this[pos.n]; }
      , toString: function() { return '[' + this.getTypeName() + ']'; }
      , toJSON: function() { return _.extend(this, { type: this.getTypeName() }); } }
);

function toProto(o, fn, name) {
  o.prototype[name] = fn;
};

function inheritsTypes(types, type) {

  var isa = function(v, k) { return !type.isa(v) || [k, v]; }
    , ul = function(t) { return _.chain(types).map(isa).filter(_.isArray).value(); }
    , l = function(t) { return ul(_.isFunction(t) ? new t('a') : t).length; }
    , sort = _.compose(l, _.first);

  return _.chain(ul(type)).sortBy(sort).reverse().object().value();
};

function toObject(els, cb) {
  var k = function(s) { return [s, cb(s)]; };
  return _.chain(els).map(k).object().value();
}

function toObjectPrefix(els, prefix) {
  return toObject(els, function(e) { return prefix + e; });
}

exports.inheritsTypes = inheritsTypes;
exports.inherit = inherit;
exports.Type = Type;
