
var parser = require('./../src/parser')
  , _ = require('underscore')
  , t = require('./../src/types')
  , parse = function(text) {
      return parser.parse(text);
    };

var queries = [
    'table { field }'
  , 'table as table_alias { field }'
  , 'table AS table_alias { field } '
  , 'table as table_alias { field } table2 as table2_alias { }'
  , 'table as table_alias { field as field_alias }'
  , 'table as table_alias { field as field_alias, [sub], [sub2(this_id)]s as something }'
];

var parsed = queries.map(parse);

parsed.forEach(function(re, k) {

  describe('basic test: ' + queries[k], function() {

    it('should be an object', function() {
      expect(_.isObject(re)).toBe(true);
      expect(t.isType(re)).toBe(true);
    });

    it('query definition should have an array of tables', function() {
      expect(_.isArray(re.tables)).toBe(true);
      re.tables.forEach(function(a) {
        expect(_.isObject(a)).toBe(true);
        expect(t.isType(a)).toBe(true);
        expect(a.isa(t.Table)).toBe(true);
      });
    });

    var a = re.tables[0];

    it('should have a table name', function() {
      expect(a.name).toEqual("table");
    });

    it('select should have an array of objects', function() {
      expect(_.isArray(a.selects)).toBe(true);
    });

    var s = a.selects[0];

    it('should be a Field type', function() {
      expect(s.isa(t.Field)).toBe(true);
    });

    it('should contain a Token as a name', function() {
      expect(s.name.isa(t.Token)).toBe(true);
    });

    it('that token should have a value', function() {
      expect(s.name.value).toEqual('field');
    });

  });

});

var aliased = parsed.slice(1);

aliased.forEach(function(re) {

  describe('table aliases alias', function() {
    it('should equal table name + _alias', function() {
      re.tables.forEach(function(table) {
        expect(table.alias).toBe(table.name + '_alias');
      });
    });
  });

});

describe('should be a field/ref', function() {

  var ref = parsed[5]
    , s = ref.tables[0].selects
    , a = s[1]
    , b = s[2];

  it('should have two sels', function() {
    expect(_.isArray(s)).toBe(true);
    expect(s.length).toEqual(3);
  });

  it('is a ref type', function() {
    expect(a.isa(t.Ref)).toBe(true);
    expect(a.isa(t.SingleRef)).toBe(true);
  });

  it('is a plural ref type', function() {
    expect(b.isa(t.Ref)).toBe(true);
    expect(b.isa(t.PluralRef)).toBe(true);
  });

  it('should have properties', function() {
    expect(a.name).toEqual('sub');
    expect(a.alias).toEqual('');
    expect(a.id).toBe(null);

    expect(b.name).toEqual('sub2');
    expect(b.alias.value).toEqual('something');
    expect(b.id.value).toEqual('this_id');
  });

});

