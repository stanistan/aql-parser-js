
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types')
  , parse = function(text) {
      return parser.parse(text);
    };

var query = '\
    table as fre { \
      a, \
      case a when 1 then "one" else "two" end as difference, \
      "something" as aliased\
    }';
var re = parse(query);
console.log(JSON.stringify(re, null, 2));

// console.log(query);
// console.log('------')
console.log(re.getSQL());

// console.log(re.tables.map(function(t) { return t.getAliases(); }))
