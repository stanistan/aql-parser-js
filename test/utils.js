
var aql = require('./../src/aql.js')
  , _ = require('underscore');

exports.sql = sql;
exports.compare = compare;
exports.prepWhiteSpace = prepWhiteSpace;
exports.runFor = runFor;
exports.runTests = runTests;
exports.runWithOpts = runWithOpts;

function sql(options, query) {
    return aql.parse(query).getSQL(options || {});
}

function compare(f, query, result) {
  expect(f(query)).toEqual(prepWhiteSpace(result));
}

function prepWhiteSpace(s) {
  return s.replace(/[\r\n]|\s+/g, ' ');
}

function runFor(f, descr, query, result) {
  it(descr, function() {
    compare(f, query, result);
  });
}

function runTests(f, tests) {
  tests.forEach(function(t) {
    runFor.apply(null, [].concat.apply([f], t));
  });
}

function runWithOpts(opts) {
  return _.bind(runTests, null, _.bind(sql, null, opts || {}));
}
