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
"offset"                  { return 'OFFSET'; }
"having"                  { return 'HAVING'; }
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
    %{ $$ = new t.Query($1); %}
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
    %{ $$ = new t.Table($table_decl.name, $body.select, $body.clauses, $table_decl); %}
  ;

table_decl
  : aliased_name ON join
    { $$ = $aliased_name; $$.join = $join; }
  | aliased_name
    { $$ = $aliased_name; }
  ;

body
  : fields clauses
    %{ $$ = { selects: $fields, clauses: $clauses }; %}
  | fields
    %{ $$ = { select: $fields }; %}
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
    { $$ = new t.Expr($1, $3); }
  | ref AS term
    { $$ = $1; $$.alias = $3; }
  | ref
    { $$ = $1; }
  | aliased_name
    { $$ = new t.Field($1.name, $1.alias); }
  ;

expr
  : LPAREN or_dotted RPAREN { $$ = '(' + $2 + ')'; }
  ;

ref
  : LBRACKET term LPAREN or_dotted RPAREN RBRACKET_PL
    { $$ = new t.PluralRef($2, $4); }
  | LBRACKET term RBRACKET_PL
    { $$ = new t.PluralRef($2); }
  | LBRACKET term LPAREN or_dotted RPAREN RBRACKET
    { $$ = new t.SingleRef($2, $4); }
  | LBRACKET term RBRACKET
    { $$ = new t.SingleRef($2); }
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

var t = require('./types');
