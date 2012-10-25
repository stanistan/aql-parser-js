
var _ = require('underscore');

function toProto(o, fn, name) {
  o.prototype[name] = fn;
};

function inherit(from, f, methods) {

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

  return f;
}

var Type = inherit(
    {}
  , function() { }
  , {
        isa: function(t) {
          return this instanceof t;
        }
    }
);

exports.inherit = inherit;
exports.Type = Type;
