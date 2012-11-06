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

%lex

%options flex case-insensitive

tt  [a-zA-Z][\w_]*
dg  [0-9]
dgd [0-9.]

%%

\s*\n\s*                  { /* ignore */ }

[\w]?\"(\\.|[^\\"])*\"    { return 'STRING_LITERAL_D'; }
[\w]?\'(\\.|[^\\'])*\'    { return 'STRING_LITERAL_S'; }

"{"                       { return 'LBR'; }
"}"                       { return 'RBR'; }
"("                       { return 'LPAREN'; }
")"                       { return 'RPAREN'; }
"["                       { return 'LBRACKET'; }
"]s"                      { return 'RBRACKET_PL'; }
"]"                       { return 'RBRACKET'; }
"."                       { return 'PERIOD'; }
","                       { return 'COMMA'; }
"~"                       { return 'TILDE'; }

"*"                       { return 'STAR'; }
"-"                       { return 'MINUS'; }
"+"                       { return 'PLUS'; }
"/"                       { return 'DIV'; }

"in"                      { return 'IN'; }
"="                       { return 'EQ'; }
"like"                    { return 'LIKE'; }
"ilike"                   { return 'ILIKE'; }
"and"                     { return 'AND'; }
"or"                      { return 'OR'; }

"as"                      { return 'AS'; }
"on"                      { return 'ON'; }

("asc"|"desc")            { return 'ORD'; }

"where"                   { return 'WHERE'; }
"order by"                { return 'ORDER_BY'; }
"limit"                   { return 'LIMIT'; }
"group by"                { return 'GROUP_BY'; }
"offset"                  { return 'OFFSET'; }
"having"                  { return 'HAVING'; }

{tt}"."{tt}               { return 'DOTTED_VAR'; }
{tt}                      { return 'VAR'; }
{dg}{dgd}*                { return 'NUM'; }

\s+                       { /* */  }
<<EOF>>                   { return 'EOF'; }
.                         { return 'INVALID'; }
/lex

%left MINUS PLUS
%left STAR DIV
%left AND OR
%left EQ LIKE ILIKE IN
%left VAR AS ON

%start statement

%ebnf

%%

statement
  : query EOF
    { return $query; }
  ;

query
  : table_defs -> new t.Query($table_defs)
  ;

queries
  : query COMMA queries -> [$1].concat($3)
  | query -> [$1];
  ;

table_defs
  : table_def table_defs -> [$1].concat($2)
  | table_def -> [$1]
  ;

table_def
  : table_decl body
    -> new t.Table($1.name, $body.selects, $body.clauses, $body.posts, $1)
  | VAR body
    -> new t.Table($1, $body.selects, $body.clauses, $body.posts)
  ;

body
  : LBR table_inner RBR -> $table_inner
  | LBR RBR -> {}
  ;

table_decl
  : VAR AS VAR ON e -> { name: $1, alias: $3, join: $e }
  | VAR ON e -> { name: $1, join: $e }
  | VAR AS VAR -> { name: $1, alias: $3 }
  ;

table_inner
  : fields_or_queries clauses -> makeBody($1, { clauses: $2 })
  | fields_or_queries -> makeBody($1)
  | clauses -> makeBody({ clauses: $1 })
  ;

fields_or_queries
  : queries -> { posts: $queries }
  | fields queries -> { selects: $fields, posts: $queries }
  | fields -> { selects: $fields }
  ;

fields
  : field COMMA fields -> [$1].concat($3)
  | field -> [$1]
  ;

field
  : e AS alias -> new t.Field($e, $alias)
  | e -> new t.Field($e)
  | ref -> $ref
  | ref AS alias { $ref.alias = $alias; $$ = $ref; }
  | STAR -> '*'
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
  : DOTTED_VAR -> $1
  | VAR -> $1
  ;

alias
  : literal -> $1
  | VAR -> $1
  ;

literal
  : STRING_LITERAL_S -> $1
  | STRING_LITERAL_D -> $1
  | NUM -> parseFloat($1, 10)
  ;

by_e
  : e ORD -> [$1, $2]
  | e -> [$1]
  ;

by_es
  : by_e COMMA by_es -> [$1].concat($3)
  | by_e -> [$1]
  ;

es
  : e COMMA es -> [$1].concat($3)
  | e -> [$1]
  | STAR -> [$1]
  | query -> [$1]
  ;

e
  : literal               -> $1
  | VAR                   -> $1
  | DOTTED_VAR            -> $1
  | LPAREN es RPAREN      -> $2
  | VAR LPAREN es RPAREN  -> new t.FnExpr($1, $es)
  | e MINUS e             -> new t.ArithExpr('-', $1, $3)
  | e PLUS e              -> new t.ArithExpr('+', $1, $3)
  | e STAR e              -> new t.ArithExpr('*', $1, $3)
  | e DIV e               -> new t.ArithExpr('/', $1, $3)
  | e AND e               -> new t.CombExpr('AND', $1, $3)
  | e OR e                -> new t.CombExpr('OR', $1, $3)
  | e ILIKE e             -> new t.CombExpr('ILIKE', $1, $3)
  | e LIKE e              -> new t.CombExpr('LIKE', $1, $3)
  | e EQ e                -> new t.CombExpr('EQ', $1, $3)
  | e IN e                -> new t.CombExpr('IN', $1, $3)
  ;

clauses
  : where group_by having order_by limit offset
    { $$ = { where: $where
           , group_by: $group_by
           , having: $having
           , order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | where group_by having order_by limit
    { $$ = { where: $where
           , group_by: $group_by
           , having: $having
           , order_by: $order_by
           , limit: $limit }; }
  | where group_by having order_by
    { $$ = { where: $where
           , group_by: $group_by
           , having: $having
           , order_by: $order_by }; }
  | where group_by having
    { $$ = { where: $where
           , group_by: $group_by
           , having: $having }; }
  | where group_by
    { $$ = { where: $where
           , group_by: $group_by }; }
  | where
    { $$ = { where: $where }; }
  | where having order_by limit offset
    { $$ = { where: $where
           , having: $having
           , order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | where having order_by limit
    { $$ = { where: $where
           , having: $having
           , order_by: $order_by
           , limit: $limit }; }
  | where having order_by
    { $$ = { where: $where
           , having: $having
           , order_by: $order_by }; }
  | where having
    { $$ = { where: $where
           , having: $having }; }
  | where order_by limit offset
    { $$ = { where: $where
           , order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | where order_by limit
    { $$ = { where: $where
           , order_by: $order_by
           , limit: $limit }; }
  | where order_by offset
    { $$ = { where: $where
           , order_by: $order_by
           , offset: $offset }; }
  | where order_by
    { $$ = { where: $where
           , order_by: $order_by }; }
  | where limit offset
    { $$ = { where: $where
           , limit: $limit
           , offset: $offset }; }
  | where limit
    { $$ = { where: $where
           , limit: $limit }; }
  | where offset
    { $$ = { where: $where
           , offset: $offset }; }
  | group_by having order_by limit offset
    { $$ = { group_by: $group_by
           , having: $having
           , order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | group_by having order_by limit
    { $$ = { group_by: $group_by
           , having: $having
           , order_by: $order_by
           , limit: $limit }; }
  | group_by having order_by
    { $$ = { group_by: $group_by
           , having: $having
           , order_by: $order_by }; }
  | group_by having
    { $$ = { group_by: $group_by
           , having: $having }; }
  | group_by
    { $$ = { group_by: $group_by }; }
  | group_by order_by limit offset
    { $$ = { group_by: $group_by
           , order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | group_by order_by limit
    { $$ = { group_by: $group_by
           , order_by: $order_by
           , limit: $limit }; }
  | group_by order_by
    { $$ = { group_by: $group_by
           , order_by: $order_by }; }
  | group_by limit offset
    { $$ = { wroup_by: $group_by
           , limit: $limit
           , offset: $offset }; }
  | group_by limit
    { $$ = { group_by: $group_by
           , limit: $limit }; }
  | group_by offset
    { $$ = { group_by: $group_by
           , offset: $offset }; }
  | having order_by limit offset
    { $$ = { having: $having
           , order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | having order_by limit
    { $$ = { having: $having
           , order_by: $order_by
           , limit: $limit }; }
  | having order_by
    { $$ = { having: $having
           , order_by: $order_by }; }
  | having
    { $$ = { having: $having }; }
  | having limit offset
    { $$ = { having: $having
           , limit: $limit
           , offset: $offset }; }
  | having limit
    { $$ = { having: $having
           , limit: $limit }; }
  | having offset
    { $$ = { having: $having
           , offset: $offset }; }
  | order_by limit offset
    { $$ = { order_by: $order_by
           , limit: $limit
           , offset: $offset }; }
  | order_by limit
    { $$ = { order_by: $order_by
           , limit: $limit }; }
  | order_by
    { $$ = { order_by: $order_by }; }
  | order_by offset
    { $$ = { order_by: $order_by
           , offset: $offset }; }
  | limit offset
    { $$ = { limit: $limit
           , offset: $offset }; }
  | limit
    { $$ = { limit: $limit }; }
  | offset
    { $$ = { offset: $offset }; }
  ;

where
  : WHERE e -> $2
  ;

group_by
  : GROUP_BY by_es -> $2
  ;

having
  : HAVING e -> $2
  ;

order_by
  : ORDER_BY by_es -> $2
  ;

limit
  : LIMIT e -> $2
  ;

offset
  : OFFSET e -> $2
  ;

%%
