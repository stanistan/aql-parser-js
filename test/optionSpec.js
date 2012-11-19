
var aql = require('./../src/aql')
  , u = require('./utils');

describe('constraints', function() {

  // the active constraint
  var runTests = u.runWithOpts({ constraints: ['active', 1] });

  var tests = [
      [   'should work with just a talbe'
        , 'artist { name }'
        , 'select artist.name from artist where artist.active = 1' ]
    , [   'should work with a join'
        , 'artist { name } label { thing }'
        , 'select artist.name, label.thing from artist\
           left join label on label.active = 1\
           where artist.active = 1' ]
    , [   'should merge with where conds'
        , 'artist { name where bio is not null }\
           label { thing }'
        , 'select artist.name, label.thing from artist\
           left join label on label.active = 1\
           where artist.active = 1\
           and artist.bio is not null' ]
    , [   'should work with joins provided'
        , 'artist { } label on artist.id = artist_id { }'
        , 'select from artist \
           left join label on label.active = 1 and artist.id = label.artist_id\
           where artist.active = 1' ]
    , [   'conforms to aliases'
        , 'table as a { id } l as b { }'
        , 'select a.id from table as a\
           left join l as b on b.active = 1\
           where a.active = 1' ]
    , [   'passes to subqeries'
        , 'a { field where s in (table { id }) }'
        , 'select a.field from a where a.active = 1 and a.s in \
           (select table.id from table where table.active = 1)' ]
  ];

  runTests(tests);

});

describe('fields', function() {

  // table.id as table_id
  var forTable = function(t) {
    return { id: t.name + '_id' };
  };

  var runTests = u.runWithOpts({ fields: forTable });

  var tests = [
      [   'adds an id field as alias to the query'
        , 'table { }'
        , 'select table.id as table_id from table' ]
    , [   'with join'
        , 'table { } table2 { }'
        , 'select table.id as table_id, table2.id as table2_id\
           from table left join table2' ]
    , [   'in subqueries'
        , 'table { where field_id in (field { }) }'
        , 'select table.id as table_id from table where table.field_id in\
           (select field.id as field_id from field)' ]
  ];

  runTests(tests);

});

describe('constraint AND fields', function() {

  var opts = {
      fields: function(t) {
        return { id: t.name + '_id' };
      }
    , constraints: ['active', 1]
  };

  var tests = [
      [   'one table'
        , 'table { }'
        , 'select table.id as table_id from table where table.active = 1' ]
    , [   'with fields'
        , 'artist { name }'
        , 'select artist.id as artist_id, artist.name from artist where artist.active = 1' ]
    , [   'with fields/where'
        , 'artist { name as artist_name where id >= 20 order by name limit 20 offset 100}'
        , 'select artist.id as artist_id,\
            artist.name as artist_name\
           from artist\
           where artist.active = 1\
           and artist.id >= 20\
           order by artist.name\
           limit 20\
           offset 100' ]
    , [   'with joins as well'
        , 'artist { name } label on artist.id = artist_id { name as label_name }'
        , 'select\
            artist.id as artist_id,\
            artist.name,\
            label.id as label_id,\
            label.name as label_name\
           from artist\
           left join label on label.active = 1 and artist.id = label.artist_id\
           where artist.active = 1' ]
  ];

  u.runWithOpts(opts)(tests);

});

describe('other types of joins!', function() {

  var joins = ['full', 'left', 'outer', 'inner', 'full outer', 'outer left']
    , q = 'a { } b { }';

  joins.forEach(function(type) {
    var t = [ type + ' join', q, 'select from a ' + type + ' join b' ];
    u.runWithOpts({ joinType: type})([t]);
  });

});

describe('with where', function() {

  var q = 'artist { name } label { id }'
    , par = new aql.Parser({constraints: ['active', 1]})
    , p = par.parse(q);

  var wheres = [
      ['artist.name = \'Pink Floyd\' and label.id = 10']
    , ['artist.name = \'Pink Floyd\'', 'label.id = 10']
    , [['artist.name', 'Pink Floyd'], ['label.id', 10]]
    , [['name', 'Pink Floyd'], ['id', 10]]
    , [{ name: 'Pink Floyd' }, { id: 10 }]
    , { name: 'Pink Floyd', id: 10 }
  ];


  var prev = 'select artist.name, \
              label.id from artist \
              left join label on label.active = 1 \
              where artist.active = 1 \
              and artist.name = \'Pink Floyd\' and label.id = 10';
  wheres.forEach(function(wh, i) {
    it('should be the same as the prev clause::' + i, function() {
      var f = function() { return p.getSQL({ where: wh }); };
      u.compare(f, null, prev);
      prev = f();
    });
  });

});
