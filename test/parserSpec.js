
var parser = require('./../src/parser.js')
  , _ = require('underscore')
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
    });

    it('query definition should have an array of tables', function() {
      expect(_.isArray(re.query)).toBe(true);
      re.query.forEach(function(t) {
        expect(_.isObject(t)).toBe(true);
        expect(_.isObject(t.table)).toBe(true);
      });
    });

    var t = re.query[0].table;

    it('should have a table name', function() {
      expect(t.table_def.name).toEqual("table");
    });

    it('should have a body with select', function() {
      expect(_.isObject(t.body)).toBe(true);
    });

    var s = t.body.select;

    it('select should have an array of objects', function() {
      expect(_.isArray(s)).toBe(true);
      expect(s[0].field.name).toEqual('field');
    });

  });

});

var aliased = parsed.slice(1);

aliased.forEach(function(re) {

  describe('table aliases alias', function() {
    it('should equal table name + _alias', function() {
      re.query.forEach(function(t) {
        expect(t.table.table_def.alias).toBe(t.table.table_def.name + '_alias');
      });
    });
  });

});
