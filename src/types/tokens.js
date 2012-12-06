
var _ = require('underscore')
  , u = require('../utils')
  , Type = u.Type
  , inherit = u.inherit;

var Token = inherit('Token', Type
  , function(n) {
      this.value = n;
    }
  , {   hasTableName: function() {
          return typeof this.value == 'string'
            ? this.value.indexOf('.') > 0
            : true;
        }
      , withTableName: function(opts) {
          return this.hasTableName() ? this.value : opts.table + '.' + this.value;
        }
      , getSQL: function(opts) {
          return opts.table ? this.withTableName(opts) : this.value;
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

function rVal(val) {
  return _.bind(rtValue, { value: val });
}

function rtValue() {
  return this.value;
}

exports = _.extend(exports, {
    Token: Token
  , LitToken: LitToken
  , BoolToken: BoolToken
  , StarToken: StarToken
  , NullToken: NullToken
});
