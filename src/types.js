
var _ = require('underscore')
  , u = require('./utils');

var pathPrefix = './types/'
  , pathTo = function(name) {
      return pathPrefix + name;
    }
  , getRequired = _.compose(require, pathTo);

var typeFiles = [
    'tokens'
  , 'sel'
  , 'exprs'
  , 'fields'
  , 'table'
  , 'query'
];

var types = _.chain(typeFiles).map(getRequired).reduce(u.extend).value();

exports.types = types;
exports.inherits = _.bind(u.inheritsTypes, null, types);
exports = _.extend(exports, types);
