var parser = require('./../src/parser')
  , p = function(t) {
      return function() {
        return parser.parse(t);
      };
    };

describe('syntax errors', function() {
  it('should throw an exception if no table declaration', function() {
    expect(p('abcde')).toThrow();
  });
  it('should throw an exception for trailing comma', function() {
    expect(p('abcde { f, }')).toThrow();
  });
});

