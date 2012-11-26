
var inherit = require('../utils').inherit
  , extend = require('underscore').extend
  , getSQL = require('./utils').getSQL
  , Sel = require('./sel').Sel;

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

exports = extend(exports, {
    Ref: Ref
  , SingleRef: SingleRef
  , PluralRef: PluralRef
  , Field: Field
});
