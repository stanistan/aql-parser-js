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

[0-9][0-9.]*              { return 'NUM'; }
[a-zA-Z][\w_]*            { return 'VAR'; }
\s+                       { /* */ }
<<EOF>>                   { return 'EOF'; }
/lex

%left AND OR
%left EQ LIKE ILIKE

%start statement

%%

statement
  : query EOF
    { return $query; }
  ;

query
  : table_defs
    { $$ = new t.Query($1); }
  ;

queries
  : queries COMMA query
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
    { $$ = new t.Table($table_decl.name, $body.selects, $body.clauses, $table_decl); }
  ;

table_decl
  : VAR AS VAR ON expr
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
    %{ $$ = { selects: $fields, clauses: $clauses }; %}
  | fields
    %{ $$ = { selects: $fields }; %}
  | clauses
    %{ $$ = { clauses: $clauses }; %}
  | .
    %{ $$ = {}; %}
  ;

by_expr
  : expr ORD
    { $$ = [$1]; $$.push($2); }
  | expr
    { $$ = [$1]; }
  ;

by_exprs
  : by_exprs COMMA by_expr
    { $$ = $1; $$.push($3); }
  | by_expr
    { $$ = [$1]; }
  ;

clauses
  : where group_by having order_by limit offset
    %{
        $$ = {
            where: $1
          , group_by: $2
          , having: $3
          , order_by: $4
          , limit: $5
          , offset: $6
        };
    %}
  ;

where
  : WHERE expr
    { $$ = $2; }
  | .
    { $$ = []; }
  ;

group_by
  : GROUP_BY by_exprs
    { $$ = $2; }
  | .
    { $$ = []; }
  ;

having
  : HAVING expr
    { $$ = $2; }
  | .
    { $$ = []; }
  ;

order_by
  : ORDER_BY by_exprs
    { $$ = $2; }
  | .
    { $$ = []; }
  ;

limit
  : LIMIT expr
    { $$ = $2; }
  | .
    { $$ = -1; }
  ;

offset
  : OFFSET expr
    { $$ = $2; }
  | .
    { $$ = 0; }
  ;

fields
  : fields COMMA field
    { $$ = $fields; $$.push($field); }
  | field
    { $$ = [$field]; }
  ;

field
  : expr AS expr
    { $$ = new t.Expr($1, $3); }
  | ref AS expr
    { $$ = $1; $$.alias = $3; }
  | ref
    { $$ = $1; }
  | aliased_name
    { $$ = new t.Field($1.name, $1.alias); }
  ;

literals
  : literals COMMA literal { $$ = $1; $$.push($3); }
  | literal {$$ = [$1]; }
  ;

expr
  : expr IN LPAREN literals RPAREN  { $$ = [$1, 'in', $literals]; }
  | expr IN LPAREN query RPAREN { $$ = [$1, 'in', $query]; }
  | expr EQ expr { $$ = [$1, $2, $3]; }
  | expr LIKE expr { $$ = [$1, $2, $3]; }
  | expr ILIKE expr { $$ = [$1, $2, $3]; }
  | expr TILDE expr { $$ = [$1, $2, $3]; }
  | expr AND expr { $$ = [$1, $2, $3]; }
  | expr OR expr { $$ = [$1, $2, $3]; }
  | LPAREN expr RPAREN { $$ = [$2]; }
  | or_dotted { $$ = $1; }
  | literal { $$ = $1; }
  ;


ref
  : LBRACKET VAR LPAREN or_dotted RPAREN RBRACKET_PL
    { $$ = new t.PluralRef($2, $4); }
  | LBRACKET VAR RBRACKET_PL
    { $$ = new t.PluralRef($2); }
  | LBRACKET VAR LPAREN or_dotted RPAREN RBRACKET
    { $$ = new t.SingleRef($2, $4); }
  | LBRACKET VAR RBRACKET
    { $$ = new t.SingleRef($2); }
  ;

aliased_name
  : VAR AS VAR
    %{ $$ = {name: $1, alias: $3 }; %}
  | VAR
    %{ $$ = {name: $1}; %}
  ;

or_dotted
  : VAR PERIOD VAR
    { $$ = $1 + '.' + $3; }
  | VAR
    { $$ = $1; }
  ;

literal
  : STRING_LITERAL_S { $$ = $1; }
  | STRING_LITERAL_D { $$ = $1; }
  | NUM { $$ = parseFloat($1, 10); }
  ;

%%

var t = require('./types');
