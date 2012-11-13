
var parser = require('./parser');

exports.parse = parse;

function parse(s) {
  return parser.parse(s);
}
