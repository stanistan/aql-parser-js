
var _ = require('underscore')
  , u = require('../utils')
  , Sel = require('./sel').Sel
  , ut = require('./utils')
  , j = u.j
  , inherit = u.inherit
  , getSQL = ut.getSQL
  , getSQLt = ut.getSQLt;

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
          return j(
              ' '
            , 'case'
            , s(this.col)
            , this.conds.map(s).join(' ')
            , s(this.els)
            , 'end'
          );
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
          var s = getSQLt(opts);
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
          return j(
              ''
            , this.name
            , '('
            , this.args.map(getSQLt(opts)).join(', ')
            , ')'
          );
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
            return j(
                ' '
              , s(this.left)
              , this.operation.toLowerCase()
              , s(this.right)
            );
          }
      }
);

var ArithExpr = inherit('ArithExpr', ExprExpr);
var CombExpr = inherit('CombExpr', ExprExpr);
var EqExpr = inherit('EqExpr', ExprExpr);

exports = _.extend(exports, {
    Expr: Expr
  , NegExpr: NegExpr
  , CaseWhen: CaseWhen
  , CondExpr: CondExpr
  , ElseExpr: ElseExpr
  , FnExpr: FnExpr
  , ExprExpr: ExprExpr
  , ArithExpr: ArithExpr
  , CombExpr: CombExpr
  , EqExpr: EqExpr
});
