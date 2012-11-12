
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types');

describe('basic query', function() {

  var runner = [
      [   'empty body works'
        , 'something { }'
        , 'select from something' ]
    , [   'lexically scope field'
        , 'table { field }'
        , 'select table.field from table' ]
    , [   'multiple fields'
        , 'table { field1, field2 }'
        , 'select table.field1, table.field2 from table' ]
    , [   'works with aliases'
        , 'table { field1 as some_alias }'
        , 'select table.field1 as some_alias from table' ]
    , [   'works with strings'
        , 'abc { "something" as something }'
        , 'select "something" as something from abc' ]
    , [   'works with a table alias'
        , 'table as table_alias { id as my_renamed_id }'
        , 'select table_alias.id as my_renamed_id from table as table_alias' ]
    , [   'has expression "scoping"'
        , 'artist { count(name) as c }'
        , 'select count(artist.name) as c from artist' ]
  ];

  runTests(runner);

});

describe('joins', function() {

  var runner = [
      [   'you can have multiple table declarations'
        , 'table1 { field } \
           table2 { } '
        , 'select table1.field from table1 left join table2' ]
    , [   'you can provide joins'
        , 'account { name } \
           address on account.id = address.account_id { }'
        , 'select account.name \
           from account \
           left join address on account.id = address.account_id' ]
    , [   'joins have lexical scope to the current table declaration'
        , 'account { id } \
           address on account.id = account_id { a }'
        , 'select account.id, \
           address.a \
           from account \
           left join address on account.id = address.account_id' ]
    ,  [  'joins AND aliases'
        , 'a { id } \
           b as d on a.id = a_id { }'
        , 'select a.id from a left join b as d on a.id = d.a_id' ]
    ,  [  'three tables'
        , 'a { } \
           b on a.id = a_id { } \
           c on b.id = b_id { }'
        , 'select from a \
           left join b on a.id = b.a_id \
           left join c on b.id = c.b_id' ]
  ];

  runTests(runner);

});

// descibe('')

function runTests(arr) {
  arr.forEach(function(t) {
    runFor.apply(null, t);
  });
}

function runFor(descr, q, r) {
  it(descr, function() {
    qr(q, r);
  });
}

function qr(query, result) {
  expect(sql(query)).toEqual(result.replace(/[\r\n]|\s+/g, ' '));
}

function sql(query) {
  return parse(query).getSQL();
}

function parse(query) {
  return parser.parse(query);
}
