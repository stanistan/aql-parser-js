/* AQL Grammar */

%lex

%options flex case-insensitive

%%

\s*\n\s*                  { /* ignore */ return 'WHITESPACE'; }

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
%left AND OR IN
%left EQ LIKE ILIKE
%left LPAREN
%left VAR
%left AS
%left COMMA
%left WHERE
%left GROUP_BY
%left HAVING
%left ORDER_BY
%left LIMIT
%left OFFSET

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
    %{ $$ = { name: $1, alias: $3, join: $expr }; %}
  | VAR ON expr
    %{ $$ = { name: $1, join: $expr }; %}
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
    {
       $$ = {
            where: $1
          , group_by: $2
          , having: $3
          , order_by: $4
          , limit: $5
          , offset: $6
        };
    }
  ;

where
  : WHERE e
    { $$ = $2; }
  | WHITESPACE { $$ = []; }
  ;

group_by
  : GROUP_BY by_es
    { $$ = $2; }
  | WHITESPACE { $$ = []; }
  ;

having
  : HAVING e
    { $$ = $2; }
  | WHITESPACE { $$ = []; }
  ;

order_by
  : ORDER_BY by_es
    { $$ = $2; }
  | WHITESPACE { $$ = []; }
  ;

limit
  : LIMIT e
    { $$ = $2; }
  | WHITESPACE { $$ = []; }
  ;

offset
  : OFFSET e
    { $$ = $2; }
  | WHITESPACE { $$ = []; }
  ;

fields
  : field COMMA fields
    { $$ = [$1].concat($3); }
  | field
    { $$ = [$1]; }
  ;

field
  : e AS alias { $$ = {field: $e, alias: $alias}; }
  | e { $$ = {field: $e}; }
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
  : e ORD
  | e
  ;

by_es
  : by_e COMMA by_es
  | by_e
  ;

e
  : literal { $$ = $1; }
  | VAR { $$ = $1; }
  | DOTTED_VAR { $$ = $1; }
  | LPAREN e RPAREN { $$ = [$1, $2, $3]; }
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
