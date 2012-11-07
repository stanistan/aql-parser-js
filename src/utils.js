
var _ = require('underscore');

// helper for accessing "hidden" properties of the prototype -- prefixed by \-__\
var pos = toObjectPrefix(['s', 'n'], '-__');

function inherit(n, from, f, methods) {

  // defaults
  methods = methods || {};
  from = from || function() { };

  if (!_.isFunction(f)) {

    if (!_.isFunction(from)) {
      throw "cannot inherit to a non-function.";
    }

    // use the parent constructor
    f = function() {
      from.apply(this, [].slice.call(arguments));
    };

  }

  var cont = _.isFunction(from) ? new from() : f;

  if (!_.isObject(cont)) {
    throw "cannot inherit from a non object.";
  }

  if (!_.isObject(methods)) {
    throw "methods needs to be an object.";
  }

  var to = _.bind(toProto, null, f);

  f.prototype = cont;
  f.prototype.constructor = f;
  _.each(methods, to);

  f.prototype[pos.n] = n;
  f.prototype[pos.s] = cont;

  return f;
}

var Type = inherit('Type', {}
  , function() { }
  , {   getTypeName: function() { return this[pos.n]; }
      , isa: function(t) { return this instanceof t; }
      , merge: function(o) { mergeToObject(this, o); }
      , toJSON: function() { return _.extend(this, { type: this.getTypeName() }); }
      , toString: function() { return '[' + this.getTypeName() + ']'; } }
);

function mergeToObject(o, things) {
  _.each(things, attachTo(o));
}

function attachTo(o) {
  return function(value, n) {
    o[n] = value;
  };
}

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
