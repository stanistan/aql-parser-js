
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
