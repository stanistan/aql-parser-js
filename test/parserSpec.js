
var parser = require('./../src/parser.js')
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

    it('should have a first field name equal to field', function() {
      expect(s.isa(t.Field)).toBe(true);
      expect(s.name).toEqual('field');
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
