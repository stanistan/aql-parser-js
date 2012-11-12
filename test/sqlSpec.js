
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types');

describe('basic query', function() {

  var runner = [
      [   'empty body works'
        , 'something { }'
        , 'select from something' ]
    , [   'star works as expected'
        , 'table { * }'
        , 'select * from table' ]
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
    , [   'has expression/fn "scoping"'
        , 'artist { count(name) as c }'
        , 'select count(artist.name) as c from artist' ]
    , [   'fns can have multiple args'
        , 'artist { coalesce(name, bio, \'(n/a)\') as thing }'
        , 'select coalesce(artist.name, artist.bio, \'(n/a)\') as thing from artist' ]
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

describe('case when', function() {

  var runner = [
      [   'should work in a basic sense'
        , 'table { case when a = 1 then "one" else "dunno" end as num }'
        , 'select case when table.a = 1 then "one" else "dunno" end as num from table' ]
    , [   'should work as a switch'
        , 'table { case a when 1 then "one" else "dunno" end as num }'
        , 'select case table.a when 1 then "one" else "dunno" end as num from table' ]
    , [   'should work with multiple conds'
        , 'table { \
            a, \
            case a \
              when 1 then "one"\
              when 2 then "two"\
              when 3 then "three"\
              when 4 then "four"\
              else "n/a"\
            end as as_text\
           }'
        , 'select \
            table.a,\
            case table.a\
              when 1 then "one"\
              when 2 then "two"\
              when 3 then "three"\
              when 4 then "four"\
              else "n/a"\
            end as as_text\
           from table' ]
  ];

  runTests(runner);

});

describe('to-sql ignores postqueries and refs', function() {

  var runner = [
      [   'ignores refs'
        , 'a { [b] }'
        , 'select from a' ]
    , [   'ignores aliased refs'
        , 'a { *, [b] as something }'
        , 'select * from a' ]
    , [   'ignores postqueries'
        , 'table { \
              * \
              something { } \
           }'
        ,  'select * from table' ]
  ];

  runTests(runner);

});

describe('where clause and expressions', function() {

  var runner = [
      [   'parses where with scoping'
        , 't { * where id = 1 }'
        , 'select * from t where t.id = 1' ]
    , [   'supports and/or/parens/is/null'
        , 't { id where id > 10 and (other = 0 or other is null) }'
        , 'select t.id from t where t.id > 10 and (t.other = 0 or t.other is null)' ]
    , [   'supports in expression with list'
        , 't { field where id in (1, 2, 3, 4, 5) }'
        , 'select t.field from t where t.id in (1, 2, 3, 4, 5)' ]
    , [   'supports in expression with list strings'
        , 't { something where name in ("Frank", "John", "Stan", "Michael") }'
        , 'select t.something from t where t.name in ("Frank", "John", "Stan", "Michael")' ]
    , [   'supports nested queries for IN expressions (AWW YEAH)'
        , 't { field where f in ( table { thing where something is not null } ) }'
        , 'select t.field from t \
           where t.f in (select table.thing from table where table.something is not null)' ]
  ];

  runTests(runner);

});

describe('order by', function() {

  var runner = [
      [   'basic order by'
        , 't { id order by id }'
        , 'select t.id from t order by t.id' ]
    , [   'with order: asc | desc'
        , 't { id order by name desc }'
        , 'select t.id from t order by t.name desc' ]
    , [   'works with where clause and can have multiple'
        , 't { name where active = 1 order by lname desc, name desc }'
        , 'select t.name from t where t.active = 1 order by t.lname desc, t.name desc' ]
    , [   'multiple tables decls'
        , 't { id order by id } \
           t2 { order by id }'
        , 'select t.id from t left join t2 order by t.id, t2.id' ]
    , [   'can reference other table from inside the clause'
        , 't { id order by id, t2.id } t2 { }'
        , 'select t.id from t left join t2 order by t.id, t2.id' ]
  ];

  runTests(runner);

});

describe('limit', function() {

  var runner = [
      [   'basic limit'
        , 't { limit 10 }'
        , 'select from t limit 10' ]
    , [   'should take the last limit if multiple are specified'
        , 't { limit 10 } t2 { limit 4 }'
        , 'select from t left join t2 limit 4' ]
  ];

  runTests(runner);

});

describe('offset', function() {

  var runner = [
      [   'basic offset'
        , 't { offset 10 }'
        , 'select from t offset 10' ]
    , [   'should take the last offset if multiple are specified'
        , 't { offset 10 } t2 { offset 3 }'
        , 'select from t left join t2 offset 3' ]
  ];

  runTests(runner);

});

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
