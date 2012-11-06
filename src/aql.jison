/* AQL Grammar */

%lex

%options flex case-insensitive

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

[a-zA-Z][\w_]*"."[a-zA-Z][\w_]* { return 'DOTTED_VAR'; }
[a-zA-Z][\w_]*            { return 'VAR'; }

[0-9][0-9.]*              { return 'NUM'; }

\s+                       { /* */  }

<<EOF>>                   { return 'EOF'; }
/lex

%left MINUS PLUS
%left STAR DIV
%left AND OR
%left EQ LIKE ILIKE IN
%left LPAREN
%left VAR AS
%left COMMA
%left RBR

%start statement

%%

statement
  : query EOF
    { return $query; }
  ;

query
  : table_defs
    { $$ = new t.Query($table_defs); }
  ;

table_defs
  : table_def table_defs
    { $$ = [$1].concat($2); }
  | table_def
    { $$ = [$1]; }
  ;

table_def
  : table_decl LBR body RBR
    {
      $$ = new t.Table(
          $table_decl.name
        , $body.selects
        , $body.clauses
        , $body.posts
        , $table_decl
      );
    }
  ;

table_decl
  : VAR AS VAR ON e
    %{ $$ = { name: $1, alias: $3, join: $e }; %}
  | VAR ON e
    %{ $$ = { name: $1, join: $e }; %}
  | VAR AS VAR
    %{ $$ = { name: $1, alias: $3 }; %}
  | VAR
    %{ $$ = { name: $1 }; %}
  ;

body
  : fields clauses
    { $$ = { selects: $fields,  clauses: $clauses }; }
  | clauses
    { $$ = { selects: [],  clauses: $clauses }; }
  | fields
    { $$ = { selects: $fields,  clauses: [] }; }
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
  : WHERE e
    { $$ = $2; }
  ;

group_by
  : GROUP_BY by_es
    { $$ = $2; }
  ;

having
  : HAVING e
    { $$ = $2; }
  ;

order_by
  : ORDER_BY by_es
    { $$ = $2; }
  ;

limit
  : LIMIT e
    { $$ = $2; }
  ;

offset
  : OFFSET e
    { $$ = $2; }
  ;

fields
  : field COMMA fields
    { $$ = [$1].concat($3); }
  | field
    { $$ = [$1]; }
  ;

field
  : e AS alias { $$ = new t.Field($e, $alias); }
  | e { $$ = new t.Field($e); }
  | ref { $$ = $ref; }
  | ref AS alias { $ref.alias = $alias; $$ = $ref; }
  ;

or_dotted
  : DOTTED_VAR { $$ = $1; }
  | VAR { $$ = $1; }
  ;

ref
  : LBRACKET VAR LPAREN or_dotted RPAREN RBRACKET_PL
    { $$ = new t.PluralRef($2, $4); }
  | LBRACKET VAR RBRACKET_PL
    { $$ = new t.PluralRef($2, null); }
  | LBRACKET VAR LPAREN or_dotted RPAREN RBRACKET
    { $$ = new t.SingleRef($2, $4); }
  | LBRACKET VAR RBRACKET
    { $$ = new t.SingleRef($2); }
  ;

alias
  : literal { $$ = $1; }
  | VAR { $$ = $1; }
  ;

literal
  : STRING_LITERAL_S { $$ = $1; }
  | STRING_LITERAL_D { $$ = $1; }
  | NUM { $$ = parseFloat($1, 10); }
  ;

by_e
  : e ORD { $$ = [$1, $2]; }
  | e { $$ = [$1]; }
  ;

by_es
  : by_e COMMA by_es { $$ = [$1].concat($3); }
  | by_e { $$ = [$1]; }
  ;

e
  : literal { $$ = $1; }
  | VAR { $$ = $1; }
  | DOTTED_VAR { $$ = $1; }
  | LPAREN es RPAREN { $$ = [$1, $2, $3]; }
  | e MINUS e { $$ = [$1, $2, $3]; }
  | e PLUS e { $$ = [$1, $2, $3]; }
  | e STAR e { $$ = [$1, $2, $3]; }
  | e DIV e { $$ = [$1, $2, $3]; }
  | e AND e { $$ = [$1, $2, $3]; }
  | e OR e { $$ = [$1, $2, $3]; }
  | e ILIKE e { $$ = [$1, $2, $3]; }
  | e LIKE e { $$ = [$1, $2, $3]; }
  | e EQ e { $$ = [$1, $2, $3]; }
  | e IN e { $$ = [$1, $2, $3]; }
  ;

es
  : e COMMA es { $$ = [$1].concat($3); }
  | e { $$ = [$1]; }
  | STAR { $$ = [$1]; }
  ;

%%

var t = require('./types');
