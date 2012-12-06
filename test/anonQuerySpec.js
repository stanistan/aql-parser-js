
var aql = require('../src/aql')
  , u = require('./utils');

var runner = u.runWithOpts();

describe('anonymous queries', function() {

  var tests = [
      [   'it should parse anonymous statements!'
        , '-> { now() }'
        , 'select now()' ]
    , [   'it should allow for multiple fields'
        , '-> { now() as time, "something" as label }'
        , 'select now() as time, "something" as label' ]
    , [   'it should not lexically scope, let SQL throw this error'
        , '-> { name }'
        , 'select name' ]
    , [   'agg functions and things'
        , " -> { row_to_json(row('a', 'b', 1, 2)) }"
        , "select row_to_json(row('a', 'b', 1, 2))" ]
  ];

  runner(tests);

});
