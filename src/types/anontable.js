
var Table = require('./table').Table
  , inherit = require('../utils').inherit;

var AnonTable = inherit('AnonTable', Table
  , function(selects, clauses, post) {
      this.primary = true;
      this.name = '';
      this.selects = selects || [];
      this.clauses = clauses || {};
      this.post = post || [];
    }
  , {
        getFrom: function() { return ''; }
      , getJoin: function() { return ''; }
    }
);

exports.AnonTable = AnonTable;
