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
  , 't { field where id in (t { }) and active = 1 and name like "%thing" limit 10 }' +
    'b on b.t_id = t.id { other }'

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
