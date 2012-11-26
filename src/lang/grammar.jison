%{

/* AQL Grammar */

var t = require('./types')
  , _ = require('underscore');

function makeBody() {
  var args = [].slice.call(arguments)
    , defs = { selects: [], posts: [], clauses: [] };
  return _.extend.apply(null, args);
}

%}

%left MINUS PLUS
%left STAR DIV
%right OR AND
%left EQ LIKE ILIKE IN GTE GT LTE LT IS CONCAT
%left NOT
%left VAR AS ON
%left INTERVAL

%start statement

%%

statement
  : query EOF { return $query; }
  ;

query
  : table_defs -> new t.Query($table_defs)
  | distinct_e table_defs -> _.extend(new t.Query($table_defs), { distinct: $distinct_e })
  ;

distinct_e
  : DISTINCT -> true
  | DISTINCT ON LPAREN es RPAREN -> $es
  ;

queries
  : query COMMA queries -> [$1].concat($3)
  | query               -> [$1]
  ;

table_defs
  : table_def table_defs  -> [$1].concat($2)
  | table_def             -> [$1]
  ;

table_def
  : table_decl body
    -> new t.Table($1.name, $body.selects, $body.clauses, $body.posts, $1)
  | VAR body
    -> new t.Table($1, $body.selects, $body.clauses, $body.posts)
  ;

body
  : LBR table_inner RBR -> $table_inner
  | LBR RBR             -> {}
  ;

table_decl
  : VAR AS VAR ON e -> { name: $1, alias: $3, join: $e }
  | VAR ON e        -> { name: $1, join: $e }
  | VAR AS VAR      -> { name: $1, alias: $3 }
  ;

table_inner
  : fields_or_queries clauses -> makeBody($1, { clauses: $2 })
  | fields_or_queries         -> makeBody($1)
  | clauses                   -> makeBody({ clauses: $1 })
  ;

fields_or_queries
  : queries         -> { posts: $queries }
  | fields queries  -> { selects: $fields, posts: $queries }
  | fields          -> { selects: $fields }
  ;

fields
  : field COMMA fields  -> [$1].concat($3)
  | field               -> [$1]
  ;

field
  : e AS alias    -> new t.Field($e, $alias)
  | e             -> new t.Field($e)
  | ref           -> $ref
  | ref AS alias  -> _.extend($ref, { alias: $alias })
  | STAR          -> new t.Field(new t.StarToken('*'))
  ;

ref
  : LBRACKET VAR LPAREN or_dotted RPAREN RBRACKET_PL
    -> new t.PluralRef($2, $4)
  | LBRACKET VAR RBRACKET_PL
    -> new t.PluralRef($2, null)
  | LBRACKET VAR LPAREN or_dotted RPAREN RBRACKET
    -> new t.SingleRef($2, $4)
  | LBRACKET VAR RBRACKET
    -> new t.SingleRef($2)
  ;

or_dotted
  : DOTTED_VAR  -> new t.Token($1)
  | VAR         -> new t.Token($1)
  ;

alias
  : literal -> $1
  | VAR     -> new t.Token($1)
  ;

literal
  : STRING_LITERAL_S  -> new t.LitToken($1)
  | STRING_LITERAL_D  -> new t.LitToken($1)
  | NUM               -> new t.LitToken(parseFloat($1, 10))
  ;

by_e
  : e ORD -> [$1, $2]
  | e     -> [$1]
  ;

by_es
  : by_e COMMA by_es  -> [$1].concat($3)
  | by_e              -> [$1]
  ;

es
  : e COMMA es  -> [$1].concat($3)
  | e           -> [$1]
  | STAR        -> [new t.StarToken()]
  | query       -> [$1]
  ;

e
  : literal               -> $1
  | case_when             -> $1
  | VAR                   -> new t.Token($1)
  | DOTTED_VAR            -> new t.Token($1)
  | BOOL                  -> new t.BoolToken($1)
  | NULL                  -> new t.NullToken()
  | LPAREN es RPAREN      -> $2
  | NOT e                 -> new t.NegExpr($2)
  | VAR LPAREN es RPAREN  -> new t.FnExpr($1, $es)
  | VAR LPAREN RPAREN     -> new t.FnExpr($1);
  | INTERVAL e            -> new t.CombExpr('', new t.LitToken('interval'), $2)
  | e MINUS e             -> new t.ArithExpr('-', $1, $3)
  | e PLUS e              -> new t.ArithExpr('+', $1, $3)
  | e STAR e              -> new t.ArithExpr('*', $1, $3)
  | e DIV e               -> new t.ArithExpr('/', $1, $3)
  | e AND e               -> new t.CombExpr('AND', $1, $3)
  | e CONCAT e            -> new t.CombExpr('||', $1, $3)
  | e OR e                -> new t.CombExpr('OR', $1, $3)
  | e ILIKE e             -> new t.EqExpr('ILIKE', $1, $3)
  | e LIKE e              -> new t.EqExpr('LIKE', $1, $3)
  | e EQ e                -> new t.EqExpr($2, $1, $3)
  | e GTE e               -> new t.EqExpr($2, $1, $3)
  | e LTE e               -> new t.EqExpr($2, $1, $3)
  | e GT e                -> new t.EqExpr($2, $1, $3)
  | e LT e                -> new t.EqExpr($2, $1, $3)
  | e IS e                -> new t.EqExpr($2, $1, $3)
  | e IN e                -> new t.EqExpr($2, $1, $3)
  ;

case_when
  : CASE e conds else END     -> new t.CaseWhen($e, $conds, $else)
  | CASE e conds END          -> new t.CaseWhen($e, $conds)
  | CASE conds else END       -> new t.CaseWhen(null, $conds, $else)
  | CASE conds END            -> new t.CaseWhen(null, $conds)
  ;

else
  : ELSE e -> new t.ElseExpr($2)
  ;

conds
  : cond conds  -> [$1].concat($2)
  | cond        -> [$1]
  ;

cond
  : WHEN e THEN e -> new t.CondExpr($2, $4)
  ;

clauses
  : where -> $where
  ;

where
  : WHERE e group_by  -> _.extend({ where: $2 }, $group_by)
  | WHERE e           -> { where: $2 }
  | group_by          -> $group_by
  ;

group_by
  : GROUP_BY by_es having -> _.extend({ group_by: $2 }, $having)
  | GROUP_BY by_es        -> { group_by: $2 }
  | having                -> $having
  ;

having
  : HAVING e order_by -> _.extend({ having: $2 }, $order_by)
  | HAVING e          -> { having: $2 }
  | order_by          -> $order_by
  ;

order_by
  : ORDER_BY by_es limit  -> _.extend({ order_by: $2 }, $limit)
  | ORDER_BY by_es        -> { order_by: $2 }
  | limit                 -> $limit
  ;

limit
  : LIMIT e offset -> _.extend({ limit: $2 }, $offset)
  | LIMIT e        -> { limit: $2 }
  | offset         -> $offset
  ;

offset
  : OFFSET e -> { offset: $2 }
  ;

%%
