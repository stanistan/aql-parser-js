var _ = require('underscore')
  , u = require('../utils')
  , ut = require('./utils')
  , tokens = require('./tokens')
  , Field = require('./fields').Field
  , Sel = require('./sel').Sel
  , Type = u.Type
  , inherit = u.inherit;

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
            return new Field(new tokens.Token(k), new tokens.LitToken(v));
          });
        }
      , _getFields: function() {
          return this.selects.filter(function(t) { return t.isa(Field); });
        }
      , _getFieldsNotExpr: function() {
          return this._getFields().filter(ut.notExpr);
        }
      , _getFieldsExpr: function() {
          return _.difference(this._getFields(), this._getFieldsNotExpr());
        }
      , getTableOptions: function() {
          return _.extend(this.options || {}, { table: this.alias || this.name });
        }
      , getWhereSQL: function() {
          var constraint = this.primary ? this.options.constraints : []
            , wh = ut.withConstraint(constraint || [], this.clauses.where);
          return wh ? wh.getSQL(this.getTableOptions()) : '';
        }
      , getOrderBySQL: function() {
          return this.mapByClauseSQL('order_by');
        }
      , gs: function() {
          return ut.getSQLt(this.getTableOptions());
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
          return this._getFields().map(ut.orAlias);
        }
      , getFieldAliases: function() {
          return u.compact(this._getFieldsNotExpr().map(ut.orAlias));
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
          var j = ut.withConstraint(constraint, this.join);
          return u.jarr(' ', u.compact([
              this.name
            , this.alias ? 'as ' + this.alias : false
            , j ? 'on ' + j.getSQL(this.getTableOptions()) : false
          ]));
        }
      , getDeclPrefix: function(prefix, constraint) {
          return u.j(' ', prefix, this.getDeclaration(constraint));
        }
    }
);

exports.Table = Table;
