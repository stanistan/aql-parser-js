
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types')
  , parse = function(text) {
      return parser.parse(text);
    };

var query = 'table as fre { \
  a - b as difference, "something" as aliased \
  where id = 1 and (thing = 0 or thing is null) \
 } ';
var re = parse(query);
console.log(JSON.stringify(re, null, 2));
console.log(query);
console.log(re.getSQL());

