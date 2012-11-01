/* AQL Grammar */

%lex

%options flex case-insensitive

%%

\s*\n\s*                  { /* ignore */ }

"'"                       { return 'SQUOTE'; }
"\""                      { return 'DQUOTE'; }
[0-9][0-9.]*              { return 'NUM'; }
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
"~"                       { return 'TILDE'; }
"in"                      { return 'IN'; }
"="                       { return 'EQ'; }
"as"                      { return 'AS'; }
"on"                      { return 'ON'; }
"and"                     { return 'AND'; }
"or"                      { return 'OR'; }
"like"                    { return 'LIKE'; }
"ilike"                   { return 'ILIKE'; }
"where"                   { return 'WHERE'; }
"order by"                { return 'ORDER_BY'; }
"limit"                   { return 'LIMIT'; }
"group by"                { return 'GROUP_BY'; }
"offset"                  { return 'OFFSET'; }
"having"                  { return 'HAVING'; }
","                       { return 'COMMA'; }
[a-zA-Z][\w_]*            { return 'VAR'; }
\s+                       { /* */ }
<<EOF>>                   { return 'EOF'; }
/lex

%left LIKE ILIKE OFFSET
%left AND OR

%start statement

%%

statement
  : query EOF
    %{ return $query; %}
  ;

query
  : table_defs
    %{ $$ = new t.Query($1); %}
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
    %{ $$ = new t.Table($table_decl.name, $body.select, $body.clauses, $table_decl); %}
  ;

table_decl
  : aliased_name ON expr
    { $$ = $aliased_name; $$.join = $expr; }
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

by_expr
  : expr ORD
    { $$ = $1; $$.push($2); }
  | epxr
    { $$ = $1; }
  ;

by_exprs
  : by_exprs COMMA by_expr
    { $$ = [$1, $3]; }
  | by_expr
    { $$ = $1; }
  ;

exprs
  : exprs COMMA expr
    { $$ = [$1, $3]; }
  | expr
    { $$ = $1; }
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
  : group_by by_exprs
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
  : ORDER_BY expr
    { $$ = $2; }
  | .
    { $$ = []; }
  ;

limit
  : LIMIT expr
    { $$ = $2; }
  | .
    { $$ = []; }
  ;

offset
  : OFFSET expr
    { $$ = $2; }
  | .
    { $$ = []; }
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
  : LPAREN expr RPAREN { $$ = [$1, $2, $3]; }
  | LPAREN query RPAREN { $$ = $2; }
  | expr comb expr { $$ = [$1, $2, $3]; }
  | expr comp expr { $$ = [$1, $2, $3]; }
  | or_dotted { $$ = $1; }
  | literal { $$ = $1; }
  ;

comp
  : EQ { $$ = $1 }
  | LIKE { $$ = $1 }
  | ILIKE { $$ = $1 }
  | TILDE { $$ = $1 }
  | IN { $$ = $1; }
  ;

comb
  : AND { $$ = $1 }
  | OR { $$ = $1 }
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

literal
  : STRING_LITERAL_S { $$ = $1; }
  | STRING_LITERAL_D { $$ = $1; }
  | NUM { $$ = $1 }
  ;

term
  : VAR { $$ = yytext; }
  | literal { $$ = $1; }

  ;

%%

var t = require('./types');
