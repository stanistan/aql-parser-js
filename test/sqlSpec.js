
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types')
  , parse = function(text) {
      return parser.parse(text);
    };

var query = '\
    table as fre { \
      a - b as difference, \
      "something" as aliased,\
      [abc] \
      where id = 1 \
        and (thing = 0 or thing is null) \
    } \
    table2  { \
      id as diff_id \
      where id in (other_table { id }) \
    }';
// var re = parse(query);
// console.log(JSON.stringify(re, null, 2));

// console.log(query);
// console.log('------')
// console.log(re.getSQL());

// console.log(re.tables.map(function(t) { return t.getAliases(); }))
