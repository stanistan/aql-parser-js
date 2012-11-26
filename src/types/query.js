var _ = require('underscore')
  , u = require('../utils')
  , inherit = u.inherit
  , Sel = require('./sel').Sel
  , ut = require('./utils');

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
