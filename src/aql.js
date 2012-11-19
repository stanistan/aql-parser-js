
var p = require('./parser')
  , _ = require('underscore');

exports.parse = parse;
exports.Parser = Parser;

function Parser(opts) {
  this.opts = opts || {};
}

Parser.prototype.parse = function(s) {
  var re = parse(s), f = re.getSQL;
  re.getSQL = _.bind(f, re, this.opts);
  return re;
};

function parse(s) {
  return p.parse(s);
}
