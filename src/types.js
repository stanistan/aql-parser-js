
var _ = require('underscore')
  , u = require('./utils')
  , inherit = u.inherit
  , Type = u.Type
  , isType = u.isType
  , j = u.j
  , jarr = u.jarr;

var Token = inherit('Token', Type
  , function(n) { this.value = n; }
  , {   hasTableName: function() {
          return typeof this.value == 'string'
            ? this.value.indexOf('.') > 0
            : true;
        }
      , withTableName: function(opts) {
          return this.hasTableName() ? this.value : opts.table + '.' + this.value;
        }
      , getSQL: function(opts) {
          return this.withTableName(opts);
        }
    }
);

var LitToken = inherit('LitToken', Token, null
  , { getSQL: rtValue }
);

var BoolToken = inherit('BoolToken', LitToken);

var StarToken = inherit('StarToken', LitToken, null
  , { getSQL: rVal('*') }
);

var NullToken = inherit('NullToken', LitToken, null
  , { getSQL: rVal('null') }
);

var Sel = inherit('Sel', Type);

var Expr = inherit('Expr', Sel
  , function(value) {
      this.value = value;
    }
  , {   getSQL: function(opts) {
          return getSQL(opts, this.value);
        }
    }
);

var NegExpr = inherit('NegExpr', Expr, null
  , {   getSQL: function(opts) {
          return j(' ', 'not', this.value.getSQL(opts));
        }
    }
);

var CaseWhen = inherit('CaseWhen', Expr
  , function(col, conds, els) {
      this.col = col || '';
      this.conds = conds;
      this.els = els || '';
    }
  , {   getSQL: function(opts) {
          var s = getSQLt(opts);
          return j(' ', 'case', s(this.col), this.conds.map(s).join(' '), s(this.els), 'end');
        }
    }
);

var ElseExpr = inherit('ElseExpr', Expr, null
  , {   getSQL: function(opts) {
          return j(' ', 'else', getSQL(opts, this.value));
        }
    }
);

var CondExpr = inherit('CondExpr', Expr
  , function(when, then) {
      this.when = when;
      this.then = then;
    }
  , {   getSQL: function(opts) {
          var s = withOpts(getSQL, opts)
          return j(' ', 'when', s(this.when), 'then', s(this.then))
        }
    }
);

var FnExpr = inherit('FnExpr', Expr
  , function(name, args) {
      this.name = name;
      this.args = args || [];
    }
  , {   getSQL: function(opts) {
          return j('', this.name, '(', this.args.map(getSQLt(opts)).join(', '), ')');
        }
    }
);

var ExprExpr = inherit('ExprExpr', Expr
    , function(op, left, right) {
        this.operation = op;
        this.left = left;
        this.right = right;
      }
    , {   getSQL: function(opts) {
            var s = getSQLt(opts);
            return j(' ', s(this.left), this.operation.toLowerCase(), s(this.right));
          }
      }
);

var ArithExpr = inherit('ArithExpr', ExprExpr);
var CombExpr = inherit('CombExpr', ExprExpr);
var EqExpr = inherit('EqExpr', ExprExpr);

var Field = inherit('Field', Sel
  , function(name, alias) {
      this.name = name;
      this.alias = alias || '';
    }
  , {   getSQL: function(opts) {
          var extra = this.alias ? ' as ' + this.alias.value : '';
          return getSQL(opts, this.name) + extra;
        }
    }
);

var Ref = inherit('Ref', Sel
  , function(name, id) {
      this.name = name;
      this.id = id || null;
    }
);

var SingleRef = inherit('SingleRef', Ref);
var PluralRef = inherit('PluralRef', Ref);

var Query = inherit('Query', Sel
  , function(tables) {
      this.tables = tables || [];
      this.tables[0].primary = true;
    }
  , {
        getSQL: function(options) {

          options = _.extend(options || {}, _.reduce(u.slice(arguments, 1), u.extend, {}));
          options.constraints = u.arrArrayify(2, options.constraints || []);
          options.fields = options.fields || function() { return {} };
          options.joinType = options.joinType || 'left';

          var clauses = ['where', 'order_by', 'group_by', 'having', 'limit', 'offset'];

          var cl = {};
          clauses.forEach(function(a) {
            cl[a] = u.slice(u.arrayify(options[a] || []));
            delete options[a];
          });

          this.options = options;
          this.tables.map(function(t) {
            t.options = options;
          });

          var f = function(t) { return t.getFieldsAsSQL().join(', '); }
            , j = function(t) { return t.getJoin(); };

          var fields    = this.tables.map(f)
            , from      = this.tables[0].getFrom()
            , joins     = _.rest(_.clone(this.tables)).map(j).join(' ').trim()
            , where     = this.getWhere(cl.where)       || null
            , order_by  = this.getOrderBy(cl.order_by)  || null
            , group_by  = this.getGroupBy(cl.group_by)  || null
            , having    = this.getHaving(cl.having)     || null
            , limit     = this.getLimit(cl.limit)       || null
            , offset    = this.getOffset(cl.offset)     || null;


          var re = [
            , 'select'
            , u.compact(this.getDistinct(this.tables[0])).join(' ').trim()
            , u.compact(fields).join(', ')
            , from
            , joins
            , where     ? 'where '    + where     : ''
            , group_by  ? 'group by ' + group_by  : ''
            , having    ? 'having '   + having    : ''
            , order_by  ? 'order by ' + order_by  : ''
            , limit     ? 'limit '    + limit     : ''
            , offset    ? 'offset '   + offset    : ''
          ];

          return u.compact(re).join(' ');

        }
      , getDistinct: function(primary_table) {
          var opt = primary_table.getTableOptions()
            , dis = _.isArray(this.distinct)
                  ? j(' ', 'on', getSQL(opt, this.distinct))
                  : null;
          return this.distinct ? ['distinct', dis ] : [];
        }
      , getJSON: function() {
          return JSON.stringify(this);
        }
      , getFieldInfo: function() {
          return this.mapTablesFn('getFieldInfo').reduce(u.extend, {});
        }
      , getAliases: function() {
          return u.concat(this.mapTablesFn('getAliases'));
        }
      , getFieldAliases: function() {
          return u.concat(this.mapTablesFn('getFieldAliases'));
        }
      , getPrimaryTableOpts: function() {
          return this.tables[0].getTableOptions();
        }
      , gs: function() {
          return getSQLt(this.getPrimaryTableOpts());
        }
      , fs: function() {
          return _.bind(orField, null, this.getFieldInfo());
        }
      , clauseSettings: function(glue, end) {
          return {
              glue: glue
            , sql: this.gs()
            , orField: this.fs()
            , end: end || _.identity
          };
        }
      , getWhere: function(where) {
          var s = { glue: ' and ', combine: combineWhere };
          return this.mapTablesFnClause('getWhereSQL', s, where);
        }
      , getOrderBy: function(order_by) {
          var s = { glue: ', ', combine: combineOrder }
          return this.mapTablesFnClause('getOrderBySQL', s, order_by);
        }
      , getGroupBy: function(group_by) {
          return u.concatj(', ', this.mapTablesFn('getGroupBySQL'));
        }
      , getHaving: function(having) {
          return u.concatj(' and ', this.mapTablesFn('getHavingSQL'))
        }
      , getLimit: function(limit) {
          return _.last(u.compact(this.mapTablesFn('getLimitSQL')));
        }
      , getOffset: function(offset) {
          return _.last(u.compact(this.mapTablesFn('getOffsetSQL')));
        }
      , mapTables: function(f) {
          return this.tables.map(f);
        }
      , mapTablesFnClause: function(f_name, settings, data) {
          var opts = this.clauseSettings(settings.glue);
          return u.concatj(
              settings.glue
            , this.mapTablesFn(f_name).concat(withClause(opts, settings.combine, data))
          );
        }
      , mapTablesFn: function(f_name) {
          var args = u.slice(arguments, 1);
          return this.mapTables(function(t) {
            return t[f_name].apply(t, args);
          });
        }
      , mapTablesProp: function(prop) {
          return this.mapTables(function(t) {
            return t[prop];
          });
        }
    }
);

var Table = inherit('Table', Type
  , function(name, selects, clauses, post, extra) {
      this.primary = false;
      this.merge(_.extend(
          {   name: name
            , alias: null
            , join: null
            , selects: selects || []
            , post: post || []
            , clauses: clauses || [] }
        , extra || {}
      ));
    }
  , {   getFieldsAsSQL: function() {
          var fs = u.concat([this.getDefaultFields(), this._getFields()]);
          return u.compact(fs).map(this.gs());
        }
      , getDefaultFields: function() {
          return _.map(this.options.fields(this), function(v, k) {
            return new Field(new Token(k), new LitToken(v));
          });
        }
      , _getFields: function() {
          return this.selects.filter(function(t) { return t.isa(Field); });
        }
      , _getFieldsNotExpr: function() {
          return this._getFields().filter(notExpr);
        }
      , _getFieldsExpr: function() {
          return _.difference(this._getFields(), this._getFieldsNotExpr());
        }
      , getTableOptions: function() {
          return _.extend(this.options || {}, { table: this.alias || this.name });
        }
      , getWhereSQL: function() {
          var constraint = this.primary ? this.options.constraints : []
            , wh = withConstraint(constraint || [], this.clauses.where);
          return wh ? wh.getSQL(this.getTableOptions()) : '';
        }
      , getOrderBySQL: function() {
          return this.mapByClauseSQL('order_by');
        }
      , gs: function() {
          return getSQLt(this.getTableOptions());
        }
      , getGroupBySQL: function() {
          return this.mapByClauseSQL('group_by');
        }
      , mapByClause: function(clause, f) {
          return u.compact(this.clauses[clause] || []).map(f);
        }
      , mapByClauseSQL: function(clause) {
          var s = this.gs();
          return this.mapByClause(clause, function(e) {
            return u.compact(u.arrayify(e).map(s)).join(' ');
          });
        }
      , getFrom: function() {
          return this.getDeclPrefix('from');
        }
      , getJoin: function() {
          return this.getDeclPrefix(
              this.options.joinType + ' join'
            , this.options.constraints || []
          );
        }
      , getFieldInfo: function() {
          return _.object(this.getFieldAliases(), this.getFieldNames());
        }
      , getFieldNames: function() {
          var s = this.gs()
            , f = function(t) { return s(t.name); };
          return u.compact(this._getFieldsNotExpr().map(f));
       }
      , getAliases: function() {
          return this._getFields().map(orAlias);
        }
      , getFieldAliases: function() {
          return u.compact(this._getFieldsNotExpr().map(orAlias));
        }
      , getHavingSQL: function() {
          return this.applyToClauseSQL('having');
        }
      , getLimitSQL: function() {
          return this.applyToClauseSQL('limit');
        }
      , getOffsetSQL: function() {
          return this.applyToClauseSQL('offset');
        }
      , applyToClause: function(clause, f) {
          var args = u.slice(arguments, 2)
            , cl = this.clauses[clause];
          return cl ? cl[f].apply(cl, args) : '';
        }
      , applyToClauseSQL: function(clause) {
          return this.applyToClause(clause, 'getSQL', this.getTableOptions());
        }
      , getDeclaration: function(constraint) {
          var j = withConstraint(constraint, this.join);
          return jarr(' ', u.compact([
              this.name
            , this.alias ? 'as ' + this.alias : false
            , j ? 'on ' + j.getSQL(this.getTableOptions()) : false
          ]));
        }
      , getDeclPrefix: function(prefix, constraint) {
          return j(' ', prefix, this.getDeclaration(constraint));
        }
    }
);

// helpers

var getSQLt = _.bind(withOpts, null, getSQL);

function withConstraint(constraint, expression) {
  constraint = prepConstraint(constraint);
  return !constraint ? expression
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
  return new CombExpr('and', l, r);
}

function toEqExpr(k, v, comb) {
  return new EqExpr(
      comb || '='
    , new Token(k)
    , new LitToken( typeof v === 'string' ? "'" + v + "'" : v )
  );
}

function notExpr(t) {
  return !t.name.isa(Expr);
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

  if (!isType(thing)) {
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

function combineWhere(opts, arr) {
  var c = arr.length === 3 ? arr[1] : '=';
  return opts.sql(toEqExpr(opts.orField(arr[0]), _.last(arr), c));
}

function combineOrder(opts, arr) {
  arr[0] = opts.sql(new Token(opts.orField(arr[0])));
  return u.concatj(' ', arr)
}

function withClause(opts, combine, data) {

  var glue = opts.glue
    , gluer = _.bind(u.concatj, null, glue);

  return !!data.length ? data.map(checkEach) : [];

  function checkEach(el) {

    if (_.isObject(el) && !_.isArray(el) && !isType(el)) {
      return gluer(_.pairs(el).map(checkEach));
    }

    if (_.isString(el)) {
      return el;
    }

    if (_.isArray(el)) {
      return combine(opts, el);
    }

    return opts.sql(a);
  }

}

var types = {
    Token: Token
  , Field: Field
  , Ref: Ref
  , SingleRef: SingleRef
  , PluralRef: PluralRef
  , Query: Query
  , Table: Table
  , Sel: Sel
  , Expr: Expr
  , FnExpr: FnExpr
  , ArithExpr: ArithExpr
  , CombExpr: CombExpr
  , ExprExpr: ExprExpr
  , EqExpr: EqExpr
  , NegExpr: NegExpr
  , BoolToken: BoolToken
  , NullToken: NullToken
  , StarToken: StarToken
  , LitToken: LitToken
  , CaseWhen: CaseWhen
  , CondExpr: CondExpr
  , ElseExpr: ElseExpr
};

// and out.

exports.types = types;
exports.inherits = _.bind(u.inheritsTypes, null, types);
exports = _.extend(exports, types);
