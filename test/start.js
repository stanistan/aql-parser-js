var parser = require('./../src/aql.js').parser;

var tests = [
    // 'abc { def }'
  // , 'abc { def as something } '
  // , 'abc as def { something }'
  // , 'abc on something { fra }'
  // , 'abc { def } table2 { content }'
  // , 'asdfa { [sub(a.id)] as ssubs, somefield }'
  // , 'abc { def as def2, a as a2, (df3) as asdf0 }'
  // , 'table { regular, field, [ab], [som]s, abc on smoe {}, q2 { field } }'
  // , 't { id, subt { field } }'
  // , 't { where id = 1 order by name asc, b desc }'
  , ' t as table { \
          some_field \
          where \
            active = 1 \
            and id in (1, 2, 3) \
            and t.e_id in ( e { id as id } ) \
      }'

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
