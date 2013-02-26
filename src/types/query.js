var _ = require('underscore')
  , u = require('../utils')
  , inherit = u.inherit
  , Sel = require('./sel').Sel
  , ut = require('./utils');

var CLAUSES = ['where', 'group_by', 'having', 'order_by', 'limit', 'offset']
  , DEFAULT_JOIN = 'left';

var Query = inherit('Query', Sel
  , function(tables) {
      this.tables = tables || [];
      this.tables[0].primary = true;
    }
  , {
        getSQL: function(options) {
          var f = function(t) { return t.getFieldsAsSQL().join(', '); }
            , j = function(t) { return t.getJoin(); }
            , clauseOpts;

          // parse options, this deletes clause keys from the options object
          options = this.constructOptions(options || {}, arguments);
          clauseOpts = this.prepClauseOpts(options);
          this.applyOptionsToQuery(options);

          var fields = this.tables.map(f)
            , from = this.tables[0].getFrom()
            , joins = _.rest(_.clone(this.tables)).map(j).join(' ').trim()
            , clauseStrings = this.getClauseStrings(clauseOpts, true);

          var re = [
            , 'select'
            , u.compact(this.getDistinct(this.tables[0])).join(' ').trim()
            , u.compact(fields).join(', ')
            , from
            , joins
          ].concat(clauseStrings);

          return u.compact(re).join(' ');
        }
      , constructOptions: function(opts, rest_args) {

          var options = _.extend(opts || {}, _.reduce(u.slice(rest_args, 1), u.extend, {}));

          options.constraints = u.arrArrayify(2, options.constraints || []);
          options.fields = options.fields || function() { return {} };
          options.joinType = options.joinType || DEFAULT_JOIN;

          return options;
        }
      , prepClauseOpts: function(options) {
          var cl = {};
          CLAUSES.forEach(function(a) {
            cl[a] = u.slice(u.arrayify(options[a] || []));
            delete options[a];
          });
          return cl;
        }
      , applyOptionsToQuery: function(opts) {
          this.options = opts;
          this.tables.map(function(t) {
            t.options = opts;
          });
        }
      , getClauseStrings: function(opts, only_val) {
          var query = this
            , vals = CLAUSES.map(function(c) {
                var parsed = query[u.getCamelize(c)](opts[c]) || null
                  , val = parsed ? [c.replace(/_/g, ' '), parsed].join(' ') : '';

                return !!only_val ? val : _.object([c], [val]);
              });

          return !!only_val ? vals : _.reduce(vals, u.extend, {});
        }
      , getDistinct: function(primary_table) {
          var opt = primary_table.getTableOptions()
            , dis = _.isArray(this.distinct)
                  ? u.j(' ', 'on', ut.getSQL(opt, this.distinct))
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
          return ut.getSQLt(this.getPrimaryTableOpts());
        }
      , fs: function() {
          return _.bind(ut.orField, null, this.getFieldInfo());
        }
      , clauseSettings: function(glue) {
          return {
              glue: glue || null
            , sql: this.gs()
            , orField: this.fs()
          };
        }
      , getWhere: function(where) {
          var s = { glue: ' and ', combine: ut.combineSingleExpr };
          return this.mapTablesFnClause('getWhereSQL', s, where);
        }
      , getOrderBy: function(order_by) {
          var s = { glue: ', ', combine: ut.combineByExpr }
          return this.mapTablesFnClause('getOrderBySQL', s, order_by);
        }
      , getGroupBy: function(group_by) {
          var s = { glue: ', ', combine: ut.combineByExpr }
          return this.mapTablesFnClause('getGroupBySQL', s, group_by);
        }
      , getHaving: function(having) {
          var s = { glue: ' and ', combine: ut.combineSingleExpr };
          return this.mapTablesFnClause('getHavingSQL', s, having);
        }
      , getLimit: function(limit) {
          var s = { combine: ut.combineReplaceExpr };
          return this.foldTablesFnClause('getLimitSQL', s, limit);
        }
      , getOffset: function(offset) {
          var s = { combine: ut.combineReplaceExpr };
          return this.foldTablesFnClause('getOffsetSQL', s, offset);
        }
      , mapTables: function(f) {
          return this.tables.map(f);
        }
      , mapTablesFnClause: function(f_name, settings, data) {
          return u.concatj(settings.glue, this._withFnAndClause(f_name, settings, data));
        }
      , foldTablesFnClause: function(f_name, settings, data) {
          return _.last(u.compact(this._withFnAndClause(f_name, settings, data)));
        }
      , _withFnAndClause: function(f_name, settings, data) {
          var opts = this.clauseSettings(settings.glue);
          return this.mapTablesFn(f_name).concat(ut.withClause(opts, settings.combine, data));
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

exports.Query = Query;
