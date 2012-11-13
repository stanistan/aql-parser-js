
var u = require('./../src/utils')
  , _ = require('underscore');

// types and inheritence are checked in typeSpec

describe('compact', function() {

  it('should work the same as _.compact', function() {
    var t = ['a', null, false, 'b'];
    expect(u.compact(t)).toEqual(['a', 'b']);
    expect(u.compact(t)).toEqual(_.compact(t));
  });

  it('should allow zeros', function() {
    var t = ['a', null, false, 'b', 0];
    expect(u.compact(t)).toEqual(['a', 'b', 0]);
  });

});

describe('concat', function() {
  var arr = [[1], [2], [3], [[4, 5]]];
  it('should work like apply concat', function() {
    expect(u.concat(arr)).toEqual([].concat.apply([], arr));
  });
  it('should not flatten completely', function() {
    expect(u.concat(arr)).toEqual([1, 2, 3, [4, 5]]);
  });
});

describe('unshift', function() {
  it('should do unshift', function() {
    expect(u.unshift([1, 2], 3)).toEqual([3, 1, 2]);
  });
  it('should do this by copy, not modifying the original array', function() {

    var a = [1, 2]
      , b = _.clone(a);
    expect(u.unshift(a, 3)).not.toEqual(a);

    // this is different from built in unshift;
    expect(b.unshift(3)).toEqual(3);
    expect(b).toEqual([3, 1, 2]);
  });
});

describe('j', function() {
  it('is a trimmed join, with glue as the first arg', function() {
    expect(u.j(', ', 1, 2, 3)).toEqual([1, 2, 3].join(', '))
  });
  it('clears out falsey values but not ZERO', function() {
    expect(u.j('--', "", "something", false, "else", 0)).toEqual("something--else--0");
  });
});

describe('jarr', function() {
  it('is like j, but separate args', function() {
    expect(u.jarr('--', ['a', 'b', 'c'])).toEqual(u.j('--', 'a', 'b', 'c'));
  });
});

describe('extend', function() {
  it('is the same as _.extend, but no extra args, only (2)', function() {
    var a = {b: 1}
      , c = {d: 2};
    expect(u.extend(a, c)).toEqual(_.extend(a, c));
    expect(u.extend(a, c)).toEqual({b: 1, d: 2});
  });
  it('is good to use in reduce', function() {
    var a = [{a: 1}, {b: 2}, {c: 3}];
    expect(a.reduce(u.extend)).toEqual({a:1, b:2, c:3});
  });
});

describe('arrayify', function() {
  it('always returns an array', function() {
    expect(u.arrayify(1)).toEqual([1]);
    expect(u.arrayify([1])).toEqual([1]);
  });
});

describe('partition', function() {
  it('partitions an array', function() {
    expect(u.partition([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(u.partition([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(u.partition([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    expect(u.partition([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
  it('adds the rest to a separate piece', function() {
    expect(u.partition([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });
});

describe('arrArrayify', function() {
  it('makes sure we have a nested array', function() {
    expect(u.arrArrayify(2, [1, 2, 3, 4, 5, 6])).toEqual([[1, 2], [3, 4], [5, 6]])
    expect(u.arrArrayify(2, [[1, 2]])).toEqual([[1, 2]]);
  });
});
