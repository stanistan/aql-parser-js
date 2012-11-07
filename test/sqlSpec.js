
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types')
  , parse = function(text) {
      return parser.parse(text);
    };

var query = 'table { \
  a - b as difference, "something" as aliased \
  where id = 1 \
 } \
 table2 on table.id = table_id { field where id in (t { count(*) }) }';
var re = parse(query);
console.log(JSON.stringify(re, null, 2));
console.log(query);
console.log(re.getSQL());

