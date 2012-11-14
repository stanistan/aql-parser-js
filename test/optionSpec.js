
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
