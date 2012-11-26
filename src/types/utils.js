
var _ = require('underscore')
  , exprs = require('./exprs')
  , tokens = require('./tokens')
  , u = require('../utils');

var getSQLt = _.bind(withOpts, null, getSQL);

exports = _.extend(exports, {
    withConstraint: withConstraint
  , pairToEqExpr: pairToEqExpr
  , andExpr: andExpr
  , notExpr: notExpr
  , orAlias: orAlias
  , rVal: rVal
  , rtValue: rtValue
  , getSQL: getSQL
  , getSQLt: getSQLt
  , withOpts: withOpts
  , orField: orField
  , combineSingleExpr: combineSingleExpr
  , combineByExpr: combineByExpr
  , combineReplaceExpr: combineReplaceExpr
  , withClause: withClause
  , checkEachClause: checkEachClause
});

function withConstraint(constraint, expression) {
  constraint = prepConstraint(constraint);
  return !constraint
    ? expression
    : (!!expression ? andExpr(constraint, expression) : constraint);
}

function prepConstraint(constraint) {
  var exps = u.compact(constraint).map(pairToEqExpr);
  return !!exps.length ? exps.reduce(andExpr) : null;
}

function pairToEqExpr(arr) {
  return toEqExpr(arr[0], arr[1]);
}

function andExpr(l, r) {
  return new exprs.CombExpr('and', l, r);
}

function toEqExpr(k, v, comb) {
  return new exprs.EqExpr(
      comb || '='
    , new tokens.Token(k)
    , new tokens.LitToken( typeof v === 'string' ? "'" + v + "'" : v )
  );
}

function notExpr(t) {
  return !t.name.isa(exprs.Expr);
}

function orAlias(t) {
  return t.alias ? t.alias.value : t.name.value;
}

function rVal(val) {
  return _.bind(rtValue, { value: val });
}

function rtValue() {
  return this.value;
}

function getSQL(opts, thing) {
  if (_.isArray(thing)) {
    return '(' + thing.map(getSQLt(opts)).join(', ') + ')'
  }

  if (_.isBoolean(thing)) {
    return '';
  }

  if (!u.isType(thing)) {
    return thing;
  }

  return thing.getSQL(opts);
}

function withOpts(f, opts) {
  return _.bind(f, null, opts);
}

function orField(fields, t) {
  return (t in fields) ? fields[t] : t;
};

function combineSingleExpr(opts, arr) {
  var c = arr.length === 3 ? arr[1] : '=';
  return opts.sql(toEqExpr(opts.orField(arr[0]), _.last(arr), c));
}

function combineByExpr(opts, arr) {
  arr[0] = opts.sql(new tokens.Token(opts.orField(arr[0])));
  return u.concatj(' ', arr)
}

function combineReplaceExpr(opts, arr) {
  return _.last(arr);
}

function withClause(opts, combine, data) {

  var glue = opts.glue
    , gluer = glue ? _.bind(u.concatj, null, glue) : _.last
    , checkEach = _.bind(checkEachClause, null, opts, gluer, combine);

  return !!data.length ? data.map(checkEach) : [];
}

function checkEachClause(opts, gluer, combine, el) {

  if (_.isObject(el) && !_.isArray(el) && !u.isType(el)) {
    return gluer(_.pairs(el).map(_.bind(checkEachClause, null, opts, gluer, combine)));
  }

  if (_.isString(el) || _.isNumber(el)) {
    return el;
  }

  if (_.isArray(el)) {
    return combine(opts, el);
  }

  return opts.sql(el);
}
