
var t = require('./../src/types')
  , u = require('./../src/utils')
  , _ = require('underscore');

describe('isType', function() {

  var i = t.isType;

  it('should be false for non-objects', function() {
    expect(i(3)).toBe(false);
    expect(i([1])).toBe(false);
    expect(i("string")).toBe(false);
  });

  it('should be false for non-type objects', function() {
    expect(i(new Number(1))).toBe(false);
    expect(i({})).toBe(false);
  });

  it('should be true for types!', function() {
    expect(i(new u.Type)).toBe(true);
  });

});

var ts = ['Field', 'Ref', 'SingleRef', 'PluralRef', 'Query', 'Table', 'Expr', 'Sel'];

describe('parser types', function() {

  var i = t.isType;

  ts.forEach(function(type) {
    it('should all be types!', function() {
      expect(i(new t[type]('some-val'))).toBe(true);
    });
  });

});

describe('type inheritence', function() {

  var arrDifference = function(a) {
    return _.without.apply(_, [ts].concat(a));
  };

  var testArrayAgainstType = function(type, a) {

    a.forEach(function(thing) {

      var text = 'Type: + [' + thing + '] should be of type: ' + type.toString();

      it(text, function() {
        var ins = new t[thing]('something');
        expect(t.isType(ins)).toBe(true);
        expect(ins.isa(type)).toBe(true);
      });

    });

    arrDifference(a).forEach(function(thing) {

      var text = 'Type: + [' + thing + '] should NOT be of type: ' + type.toString();

      it(text, function() {
        var ins = new t[thing]('something');
        expect(t.isType(ins)).toBe(true);
        expect(ins.isa(type)).toBe(false);
      });

    });
  };

  testArrayAgainstType(t.Sel, ['Sel', 'Field', 'Ref', 'SingleRef', 'PluralRef', 'Query', 'Expr']);
  testArrayAgainstType(t.Ref, ['Ref', 'SingleRef', 'PluralRef']);

});
