/* AQL Grammar */

%lex

%options flex case-insensitive

%%

\s*\n\s*                  { /* ignore */ }
"'"                       { return 'SQUOTE'; }
"\""                      { return 'DQUOTE'; }
[0-9][0-9.]*              { return 'NUM'; }
"{"                       { return 'LBR'; }
"}"                       { return 'RBR'; }
"("                       { return 'LPAREN'; }
")"                       { return 'RPAREN'; }
"["                       { return 'LBRACKET'; }
"]s"                      { return 'RBRACKET_PL'; }
"]"                       { return 'RBRACKET'; }
"."                       { return 'PERIOD'; }
"as"                      { return 'AS'; }
"on"                      { return 'ON'; }
"and"                     { return 'AND'; }
"or"                      { return 'OR'; }
"where"                   { return 'WHERE'; }
"order by"                { return 'ORDER_BY'; }
"limit"                   { return 'LIMIT'; }
"group by"                { return 'GROUP_BY'; }
"like"                    { return 'LIKE'; }
"ilike"                   { return 'ILIKE'; }
"="                       { return 'EQ'; }
","                       { return 'COMMA'; }
[a-zA-Z][\w_]*            { return 'VAR'; }
\s+                       { /* */ }
<<EOF>>                   { return 'EOF'; }
/lex

%start query

%%

query
  : subq EOF
    %{ return $subq; %}
  ;

subq
  : table_defs
    %{ $$ = { query: $1 }; %}
  ;

queries
  : queries COMMA subq
    { $$ = $1; $$.push($3); }
  | subq
    { $$ = [$1]; }
  ;

table_defs
  : table_defs table_def
    { $$ = $table_defs; $$.push($table_def); }
  | table_def
    { $$ = [$table_def]; }
  ;

table_def
  : table_decl LBR body RBR
    %{ $$ = { table: { table_def: $table_decl, body: $body } }; %}
  ;

table_decl
  : aliased_name ON join
    { $$ = $aliased_name; $$.join = $join; }
  | aliased_name
    { $$ = $aliased_name; }
  ;

body
  : fields clauses
    %{ $$ = {select: $fields, clauses: $clauses }; %}
  | fields
    %{ $$ = {select: $fields }; %}
  | clauses
    %{ $$ = { clauses: $clauses }; %}
  | .
    %{ $$ = {}; %}
  ;

fields
  : fields COMMA field
    { $$ = $fields; $$.push($field); }
  | field
    { $$ = [$field]; }
  ;

field
  : queries
    %{ $$ = { postqueries: $1}; %}
  | expr AS term
    %{ $$ = { field: { expr: $expr, alias: $term } }; %}
  | ref AS term
    %{ $$ = { field: { ref: $ref, alias: $term} }; %}
  | ref
    %{ $$ = { field: { ref: $ref }}; %}
  | aliased_name
    %{ $$ = { field: $1 }; %}
  ;

expr
  : LPAREN or_dotted RPAREN { $$ = '(' + $2 + ')'; }
  ;

ref
  : LBRACKET term LPAREN or_dotted RPAREN RBRACKET_PL
    %{ $$ = ['plural', $term, 'id', $or_dotted]; %}
  | LBRACKET term RBRACKET_PL
    { $$ = ['plural', $term]; }
  | LBRACKET term LPAREN or_dotted RPAREN RBRACKET
    { $$ = ['single', $term, 'id', $or_dotted]; }
  | LBRACKET term RBRACKET
    { $$ = ['single', $term]; }
  ;

join
  : term
    { $$ = $1; }
  ;

aliased_name
  : VAR AS VAR
    %{ $$ = {name: $1, alias: $3 }; %}
  | VAR
    %{ $$ = {name: $1}; %}
  ;

or_dotted
  : dotted_term { $$ = $1; }
  | VAR { $$ = $1; }
  ;

dotted_term
  : VAR PERIOD VAR
    { $$ = $1 + '.' + $3; }
  ;

string
  : SQUOTE '.' SQUOTE { $$ = [$2]; }
  | DQUOTE '.' DQUOTE { $$ = [$2]; }
  ;

term
  : VAR { $$ = yytext; }
  | string { $$ = $1; }
  | NAT { $$ = $}
  ;

%%

