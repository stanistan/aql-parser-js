
var aql = require('./../src/aql');

describe('constraints', function() {

  var opts = {
    constraints: ['active', 1]
  };

  it('should work with one!', function() {
    var s = 'artist { name } label { thing }'
    expect(sql(s)).toEqual('select artist.name, label.thing from artist left join label on label.active = 1 where artist.active = 1');
  });

  it('should merge with other where conditoins', function() {
    var s = 'artist { name where bio is not null } label { thing }'
      , r = 'select artist.name, label.thing from artist left join label on label.active = 1 where artist.active = 1 and artist.bio is not null';

    expect(sql(s)).toEqual(r);
  });

});


var sql = withConstraint(['active', 1]);

function withConstraint(c) {
  return function(t) {
    return aql.parse(t).getSQL({ constraints: c });
  }
}
