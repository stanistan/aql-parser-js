/* AQL Grammar */

%lex
%%

\s*\n\s*          { /* ignore */ }
"{"               { return 'LBR'; }
"}"               { return 'RBR'; }
"("               { return 'LPAREN'; }
")"               { return 'RPAREN'; }
"as"              { return 'AS'; }
"on"              { return 'ON'; }
","               { return 'COMMA'; }
[a-zA-Z][\w_]*    { return 'VAR'; }
\s+               { /* */ }
<<EOF>>           { return 'EOF'; }
/lex

%right LBR

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
    %{ $$ = { table_def: $table_decl, body: $body }; %}
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
  | . %{ $$ = {}; %}
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
  | aliased_name
    %{ $$ = { field: $1 }; %}
  ;

expr
  : LPAREN term RPAREN { $$ = $2; }
  ;

join
  : term
    { $$ = $1; }
  ;

aliased_name
  : term AS term
    %{ $$ = {name: $term1, alias: $term2 }; %}
  | term
    %{ $$ = {name: $term}; %}
  ;

term
  : VAR { $$ = yytext; }
  ;
