%options flex case-insensitive

tt  [a-zA-Z][\w_]*
dg  [0-9]
dgd [0-9.]

%%

\s*\n\s*                  /* ignore */

[\w]?\"(\\.|[^\\"])*\"    return 'STRING_LITERAL_D';
[\w]?\'(\\.|[^\\'])*\'    return 'STRING_LITERAL_S';

"{"                       return 'LBR';
"}"                       return 'RBR';
"("                       return 'LPAREN';
")"                       return 'RPAREN';
"["                       return 'LBRACKET';
"]s"                      return 'RBRACKET_PL';
"]"                       return 'RBRACKET';
"."                       return 'PERIOD';
","                       return 'COMMA';
"~"                       return 'TILDE';
"||"                      return 'CONCAT';

("true"|"false")          return 'BOOL';
"null"                    return 'NULL';
"not"                     return 'NOT';

"distinct"                return 'DISTINCT';

"*"                       return 'STAR';
"-"                       return 'MINUS';
"+"                       return 'PLUS';
"/"                       return 'DIV';

"case"                    return 'CASE';
"when"                    return 'WHEN';
"then"                    return 'THEN';
"else"                    return 'ELSE';
"end"                     return 'END';

"in"                      return 'IN';
">="                      return 'GTE';
"<="                      return 'LTE';
">"                       return 'GT';
"<"                       return 'LT';
"="                       return 'EQ';
"like"                    return 'LIKE';
"ilike"                   return 'ILIKE';
"and"                     return 'AND';
"is"                      return 'IS';
"or"                      return 'OR';

"interval"                return 'INTERVAL';

"as"                      return 'AS';
"on"                      return 'ON';

("asc"|"desc")            return 'ORD';

"where"                   return 'WHERE';
"order by"                return 'ORDER_BY';
"limit"                   return 'LIMIT';
"group by"                return 'GROUP_BY';
"offset"                  return 'OFFSET';
"having"                  return 'HAVING';

{tt}"."{tt}               return 'DOTTED_VAR';
{tt}                      return 'VAR';
{dg}{dgd}*                return 'NUM';

\s+                       /* */
<<EOF>>                   return 'EOF';
.                         return 'INVALID';
