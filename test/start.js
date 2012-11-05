var parser = require('./../src/aql.js').parser;

var tests = [
    'abc { def }'
  , 'abc { def as something } '
  , 'abc as def { something }'
  , 'abc on something { fra }'
  , 'abc { def } table2 { content }'
  , 'asdfa { [sub(a.id)] as ssubs, somefield }'
  , 'abc { def as def2, a as a2, (df3) as asdf0 }'
  , 'table { regular, field, [ab], [som]s, abc on smoe {} q2 { field }, another { } }'
  , 't { subt { field } }'
  , 't { where id = 1 order by name asc, b desc }'
  , ' t as table { \
          some_field, \
          "a string" as "another string" \
          where \
            active = 1 \
            and id in (1, 2, 3) \
          order by id desc, name \
          offset 100  \
      }'
  , 'table { where id in (another { id }) }'
  , ' artist {\
        artist_type_id,\
        name,\
        bio,\
        [artist_genre(asdf)]s\
      }\
      account_artist as act {\
        artist_id,\
        account_id\
      }'
  , 'table { (a - b) as difference } '
];

var t = function(text) {
  console.log('---');
  console.log('testing:');
  console.log(text);
  console.log('result:');
  console.log(JSON.stringify(parser.parse(text), null, 2));
  // console.log(parser.parse(text));
};

tests.map(t);
