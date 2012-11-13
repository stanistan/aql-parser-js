
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types');

var parse = _.bind(parser.parse, parser);

describe('getting a list of fields', function() {

  var q = 'table { field, friend, bozo as clown } table2 { something, a - b as diff }'
    , re = parse(q);

  it('returns an array aliases', function() {
    expect(re.getAliases()).toEqual(['field', 'friend', 'clown', 'something', 'diff']);
  });

  it('returns an array of aliases ignoring expressions', function() {
    expect(re.getFieldAliases()).toEqual(['field', 'friend', 'clown', 'something']);
  });

  it('should should give you a map of alias->field for FIELDS', function() {

    var e = {
        field: 'table.field'
      , friend: 'table.friend'
      , clown: 'table.bozo'
      , something: 'table2.something'
    };

    expect(re.getFieldInfo()).toEqual(e);

  });

});
