
var aql = require('./../src/aql')
  , types = require('./../src/types');

// see the other tests, this is just to make sure that the library is loaded properly
// a "macro" test

describe('make sure that aql works', function() {

  it('should return a query object', function() {
    var q = 'table { id }'
    expect(aql.parse(q).isa(types.Query)).toBe(true);
  });

});

describe('instantiated parser', function() {
  var opts = {
      constraints: ['active', 1]
    , fields: function(t) { return { id: t.name + '_id' }; }
  };

  var p = new aql.Parser(opts);
  it('should override getSQL with a bound version', function() {
    expect(p.parse('table { }').getSQL()).toEqual('select table.id as table_id from table where table.active = 1');
  });

});
