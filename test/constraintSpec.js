
var aql = require('./../src/aql');

describe('constraints', function() {

  it('should work with one!', function() {
    var opts = {
      constraints: ['active', 1]
    };
    var s = 'artist { name } label { thing }'
    expect(aql.parse(s).getSQL(opts)).toEqual('select artist.name, label.thing from artist left join label on label.active = 1 where artist.active = 1');
  });

});
