/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"table_defs":6,"queries":7,"COMMA":8,"subq":9,"table_def":10,"table_decl":11,"LBR":12,"body":13,"RBR":14,"aliased_name":15,"ON":16,"expr":17,"fields":18,"clauses":19,"by_expr":20,"ORD":21,"epxr":22,"by_exprs":23,"exprs":24,"where":25,"group_by":26,"having":27,"order_by":28,"limit":29,"offset":30,"WHERE":31,"GROUP_BY":32,"HAVING":33,"ORDER_BY":34,"LIMIT":35,"OFFSET":36,"field":37,"AS":38,"term":39,"ref":40,"LPAREN":41,"RPAREN":42,"comb":43,"comp":44,"or_dotted":45,"literal":46,"EQ":47,"LIKE":48,"ILIKE":49,"TILDE":50,"IN":51,"AND":52,"OR":53,"LBRACKET":54,"RBRACKET_PL":55,"RBRACKET":56,"VAR":57,"dotted_term":58,"PERIOD":59,"STRING_LITERAL_S":60,"STRING_LITERAL_D":61,"NUM":62,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"COMMA",9:"subq",12:"LBR",14:"RBR",16:"ON",21:"ORD",22:"epxr",31:"WHERE",32:"GROUP_BY",33:"HAVING",34:"ORDER_BY",35:"LIMIT",36:"OFFSET",38:"AS",41:"LPAREN",42:"RPAREN",47:"EQ",48:"LIKE",49:"ILIKE",50:"TILDE",51:"IN",52:"AND",53:"OR",54:"LBRACKET",55:"RBRACKET_PL",56:"RBRACKET",57:"VAR",59:"PERIOD",60:"STRING_LITERAL_S",61:"STRING_LITERAL_D",62:"NUM"},
productions_: [0,[3,2],[4,1],[7,3],[7,1],[6,2],[6,1],[10,4],[11,3],[11,1],[13,2],[13,1],[13,1],[13,0],[20,2],[20,1],[23,3],[23,1],[24,3],[24,1],[19,6],[25,2],[25,0],[26,2],[26,0],[27,2],[27,0],[28,2],[28,0],[29,2],[29,0],[30,2],[30,0],[18,3],[18,1],[37,1],[37,3],[37,3],[37,1],[37,1],[17,3],[17,3],[17,3],[17,3],[17,1],[17,1],[44,1],[44,1],[44,1],[44,1],[44,1],[43,1],[43,1],[40,6],[40,3],[40,6],[40,3],[15,3],[15,1],[45,1],[45,1],[58,3],[46,1],[46,1],[46,1],[39,1],[39,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new t.Query($$[$0]); 
break;
case 3: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 4: this.$ = [$$[$0]]; 
break;
case 5: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 6: this.$ = [$$[$0]]; 
break;
case 7: this.$ = new t.Table($$[$0-3].name, $$[$0-1].select, $$[$0-1].clauses, $$[$0-3]); 
break;
case 8: this.$ = $$[$0-2]; this.$.join = $$[$0]; 
break;
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = { selects: $$[$0-1], clauses: $$[$0] }; 
break;
case 11: this.$ = { select: $$[$0] }; 
break;
case 12: this.$ = { clauses: $$[$0] }; 
break;
case 13: this.$ = {}; 
break;
case 14: this.$ = [$$[$0-1]]; this.$.push($$[$0]); 
break;
case 15: this.$ = [$$[$0]]; 
break;
case 16: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 17: this.$ = [$$[$0]]; 
break;
case 18: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 19: this.$ = $$[$0]; 
break;
case 20:
        this.$ = {
            where: $$[$0-5]
          , group_by: $$[$0-4]
          , having: $$[$0-3]
          , order_by: $$[$0-2]
          , limit: $$[$0-1]
          , offset: $$[$0]
        };
    
break;
case 21: this.$ = $$[$0]; 
break;
case 22: this.$ = []; 
break;
case 23: this.$ = $$[$0]; 
break;
case 24: this.$ = []; 
break;
case 25: this.$ = $$[$0]; 
break;
case 26: this.$ = []; 
break;
case 27: this.$ = $$[$0]; 
break;
case 28: this.$ = []; 
break;
case 29: this.$ = $$[$0]; 
break;
case 30: this.$ = []; 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = []; 
break;
case 33: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 34: this.$ = [$$[$0]]; 
break;
case 35: this.$ = { postqueries: $$[$0]}; 
break;
case 36: this.$ = new t.Expr($$[$0-2], $$[$0]); 
break;
case 37: this.$ = $$[$0-2]; this.$.alias = $$[$0]; 
break;
case 38: this.$ = $$[$0]; 
break;
case 39: this.$ = new t.Field($$[$0].name, $$[$0].alias); 
break;
case 40: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 41: this.$ = $$[$0-1]; 
break;
case 42: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 43: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 44: this.$ = $$[$0]; 
break;
case 45: this.$ = $$[$0]; 
break;
case 46: this.$ = $$[$0] 
break;
case 47: this.$ = $$[$0] 
break;
case 48: this.$ = $$[$0] 
break;
case 49: this.$ = $$[$0] 
break;
case 50: this.$ = $$[$0]; 
break;
case 51: this.$ = $$[$0] 
break;
case 52: this.$ = $$[$0] 
break;
case 53: this.$ = new t.PluralRef($$[$0-4], $$[$0-2]); 
break;
case 54: this.$ = new t.PluralRef($$[$0-1]); 
break;
case 55: this.$ = new t.SingleRef($$[$0-4], $$[$0-2]); 
break;
case 56: this.$ = new t.SingleRef($$[$0-1]); 
break;
case 57: this.$ = {name: $$[$0-2], alias: $$[$0] }; 
break;
case 58: this.$ = {name: $$[$0]}; 
break;
case 59: this.$ = $$[$0]; 
break;
case 60: this.$ = $$[$0]; 
break;
case 61: this.$ = $$[$0-2] + '.' + $$[$0]; 
break;
case 62: this.$ = $$[$0]; 
break;
case 63: this.$ = $$[$0]; 
break;
case 64: this.$ = $$[$0] 
break;
case 65: this.$ = $$[$0]; 
break;
case 66: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,6:3,10:4,11:5,15:6,57:[1,7]},{1:[3]},{5:[1,8]},{5:[2,2],8:[2,2],10:9,11:5,14:[2,2],15:6,31:[2,2],32:[2,2],33:[2,2],34:[2,2],35:[2,2],36:[2,2],42:[2,2],57:[1,7]},{5:[2,6],8:[2,6],14:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],35:[2,6],36:[2,6],42:[2,6],57:[2,6]},{12:[1,10]},{12:[2,9],16:[1,11]},{12:[2,58],16:[2,58],38:[1,12]},{1:[2,1]},{5:[2,5],8:[2,5],14:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],35:[2,5],36:[2,5],42:[2,5],57:[2,5]},{7:18,9:[1,23],13:13,14:[2,13],15:21,17:19,18:14,19:15,25:17,31:[1,22],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],37:16,40:20,41:[1,24],45:25,46:26,54:[1,27],57:[1,28],58:29,60:[1,30],61:[1,31],62:[1,32]},{17:33,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{57:[1,35]},{14:[1,36]},{8:[1,38],14:[2,11],19:37,25:17,31:[1,22],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22]},{14:[2,12]},{8:[2,34],14:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34]},{14:[2,24],26:39,32:[1,40],33:[2,24],34:[2,24],35:[2,24],36:[2,24]},{8:[1,41],14:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35]},{38:[1,42],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{8:[2,38],14:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],38:[1,52]},{8:[2,39],14:[2,39],31:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39]},{17:53,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{8:[2,4],14:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],35:[2,4],36:[2,4]},{4:55,6:3,10:4,11:5,15:6,17:54,41:[1,24],45:25,46:26,57:[1,28],58:29,60:[1,30],61:[1,31],62:[1,32]},{12:[2,44],14:[2,44],21:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],38:[2,44],42:[2,44],47:[2,44],48:[2,44],49:[2,44],50:[2,44],51:[2,44],52:[2,44],53:[2,44]},{12:[2,45],14:[2,45],21:[2,45],32:[2,45],33:[2,45],34:[2,45],35:[2,45],36:[2,45],38:[2,45],42:[2,45],47:[2,45],48:[2,45],49:[2,45],50:[2,45],51:[2,45],52:[2,45],53:[2,45]},{39:56,46:58,57:[1,57],60:[1,30],61:[1,31],62:[1,32]},{8:[2,58],12:[2,58],14:[2,58],16:[2,58],31:[2,58],32:[2,58],33:[2,58],34:[2,58],35:[2,58],36:[2,58],38:[1,12],42:[2,58],47:[2,58],48:[2,58],49:[2,58],50:[2,58],51:[2,58],52:[2,58],53:[2,58],59:[1,59]},{12:[2,59],14:[2,59],21:[2,59],32:[2,59],33:[2,59],34:[2,59],35:[2,59],36:[2,59],38:[2,59],42:[2,59],47:[2,59],48:[2,59],49:[2,59],50:[2,59],51:[2,59],52:[2,59],53:[2,59]},{8:[2,62],12:[2,62],14:[2,62],21:[2,62],31:[2,62],32:[2,62],33:[2,62],34:[2,62],35:[2,62],36:[2,62],38:[2,62],41:[2,62],42:[2,62],47:[2,62],48:[2,62],49:[2,62],50:[2,62],51:[2,62],52:[2,62],53:[2,62],55:[2,62],56:[2,62]},{8:[2,63],12:[2,63],14:[2,63],21:[2,63],31:[2,63],32:[2,63],33:[2,63],34:[2,63],35:[2,63],36:[2,63],38:[2,63],41:[2,63],42:[2,63],47:[2,63],48:[2,63],49:[2,63],50:[2,63],51:[2,63],52:[2,63],53:[2,63],55:[2,63],56:[2,63]},{8:[2,64],12:[2,64],14:[2,64],21:[2,64],31:[2,64],32:[2,64],33:[2,64],34:[2,64],35:[2,64],36:[2,64],38:[2,64],41:[2,64],42:[2,64],47:[2,64],48:[2,64],49:[2,64],50:[2,64],51:[2,64],52:[2,64],53:[2,64],55:[2,64],56:[2,64]},{12:[2,8],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{12:[2,60],14:[2,60],21:[2,60],32:[2,60],33:[2,60],34:[2,60],35:[2,60],36:[2,60],38:[2,60],42:[2,60],47:[2,60],48:[2,60],49:[2,60],50:[2,60],51:[2,60],52:[2,60],53:[2,60],59:[1,59]},{8:[2,57],12:[2,57],14:[2,57],16:[2,57],31:[2,57],32:[2,57],33:[2,57],34:[2,57],35:[2,57],36:[2,57]},{5:[2,7],8:[2,7],14:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],35:[2,7],36:[2,7],42:[2,7],57:[2,7]},{14:[2,10]},{7:18,9:[1,23],15:21,17:19,37:60,40:20,41:[1,24],45:25,46:26,54:[1,27],57:[1,28],58:29,60:[1,30],61:[1,31],62:[1,32]},{14:[2,26],27:61,33:[1,62],34:[2,26],35:[2,26],36:[2,26]},{17:65,20:64,22:[1,66],23:63,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{4:67,6:3,10:4,11:5,15:6,57:[1,7]},{39:68,46:58,57:[1,57],60:[1,30],61:[1,31],62:[1,32]},{17:69,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{17:70,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{41:[2,51],57:[2,51],60:[2,51],61:[2,51],62:[2,51]},{41:[2,52],57:[2,52],60:[2,52],61:[2,52],62:[2,52]},{41:[2,46],57:[2,46],60:[2,46],61:[2,46],62:[2,46]},{41:[2,47],57:[2,47],60:[2,47],61:[2,47],62:[2,47]},{41:[2,48],57:[2,48],60:[2,48],61:[2,48],62:[2,48]},{41:[2,49],57:[2,49],60:[2,49],61:[2,49],62:[2,49]},{41:[2,50],57:[2,50],60:[2,50],61:[2,50],62:[2,50]},{39:71,46:58,57:[1,57],60:[1,30],61:[1,31],62:[1,32]},{14:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{42:[1,72],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{42:[1,73]},{41:[1,74],55:[1,75],56:[1,76]},{8:[2,65],14:[2,65],31:[2,65],32:[2,65],33:[2,65],34:[2,65],35:[2,65],36:[2,65],41:[2,65],55:[2,65],56:[2,65]},{8:[2,66],14:[2,66],31:[2,66],32:[2,66],33:[2,66],34:[2,66],35:[2,66],36:[2,66],41:[2,66],55:[2,66],56:[2,66]},{57:[1,77]},{8:[2,33],14:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33]},{14:[2,28],28:78,34:[1,79],35:[2,28],36:[2,28]},{17:80,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{8:[1,81],14:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23]},{8:[2,17],14:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17]},{21:[1,82],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{8:[2,15],14:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15]},{8:[2,3],14:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3],35:[2,3],36:[2,3]},{8:[2,36],14:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36]},{12:[2,42],14:[2,42],21:[2,42],32:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],38:[2,42],42:[2,42],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{12:[2,43],14:[2,43],21:[2,43],32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],38:[2,43],42:[2,43],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{8:[2,37],14:[2,37],31:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37]},{12:[2,40],14:[2,40],21:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],38:[2,40],42:[2,40],47:[2,40],48:[2,40],49:[2,40],50:[2,40],51:[2,40],52:[2,40],53:[2,40]},{12:[2,41],14:[2,41],21:[2,41],32:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],38:[2,41],42:[2,41],47:[2,41],48:[2,41],49:[2,41],50:[2,41],51:[2,41],52:[2,41],53:[2,41]},{45:83,57:[1,34],58:29},{8:[2,54],14:[2,54],31:[2,54],32:[2,54],33:[2,54],34:[2,54],35:[2,54],36:[2,54],38:[2,54]},{8:[2,56],14:[2,56],31:[2,56],32:[2,56],33:[2,56],34:[2,56],35:[2,56],36:[2,56],38:[2,56]},{12:[2,61],14:[2,61],21:[2,61],32:[2,61],33:[2,61],34:[2,61],35:[2,61],36:[2,61],38:[2,61],42:[2,61],47:[2,61],48:[2,61],49:[2,61],50:[2,61],51:[2,61],52:[2,61],53:[2,61]},{14:[2,30],29:84,35:[1,85],36:[2,30]},{17:65,20:64,22:[1,66],23:86,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{14:[2,25],34:[2,25],35:[2,25],36:[2,25],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{17:65,20:87,22:[1,66],41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{8:[2,14],14:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14]},{42:[1,88]},{14:[2,32],30:89,36:[1,90]},{17:91,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{8:[1,81],14:[2,27],35:[2,27],36:[2,27]},{8:[2,16],14:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16]},{55:[1,92],56:[1,93]},{14:[2,20]},{17:94,41:[1,24],45:25,46:26,57:[1,34],58:29,60:[1,30],61:[1,31],62:[1,32]},{14:[2,29],36:[2,29],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]},{8:[2,53],14:[2,53],31:[2,53],32:[2,53],33:[2,53],34:[2,53],35:[2,53],36:[2,53],38:[2,53]},{8:[2,55],14:[2,55],31:[2,55],32:[2,55],33:[2,55],34:[2,55],35:[2,55],36:[2,55],38:[2,55]},{14:[2,31],43:43,44:44,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,45],53:[1,46]}],
defaultActions: {8:[2,1],15:[2,12],37:[2,10],89:[2,20]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};


var t = require('./types');
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {"flex":true,"case-insensitive":true};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: /* ignore */ 
break;
case 1: return 'SQUOTE'; 
break;
case 2: return 'DQUOTE'; 
break;
case 3: return 62; 
break;
case 4: return 61; 
break;
case 5: return 60; 
break;
case 6: return 12; 
break;
case 7: return 14; 
break;
case 8: return 41; 
break;
case 9: return 42; 
break;
case 10: return 54; 
break;
case 11: return 55; 
break;
case 12: return 56; 
break;
case 13: return 59; 
break;
case 14: return 50; 
break;
case 15: return 51; 
break;
case 16: return 47; 
break;
case 17: return 38; 
break;
case 18: return 16; 
break;
case 19: return 21; 
break;
case 20: return 52; 
break;
case 21: return 53; 
break;
case 22: return 48; 
break;
case 23: return 49; 
break;
case 24: return 31; 
break;
case 25: return 34; 
break;
case 26: return 35; 
break;
case 27: return 32; 
break;
case 28: return 36; 
break;
case 29: return 33; 
break;
case 30: return 8; 
break;
case 31: return 57; 
break;
case 32: /* */ 
break;
case 33: return 5; 
break;
case 34:console.log(yy_.yytext);
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/i,/^(?:')/i,/^(?:")/i,/^(?:[0-9][0-9.]*)/i,/^(?:[\w]?"(\\.|[^\\"])*")/i,/^(?:[\w]?'(\\.|[^\\'])*')/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\]s)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:~)/i,/^(?:in)/i,/^(?:=)/i,/^(?:as)/i,/^(?:on)/i,/^(?:(asc|desc))/i,/^(?:and)/i,/^(?:or)/i,/^(?:like)/i,/^(?:ilike)/i,/^(?:where)/i,/^(?:order by)/i,/^(?:limit)/i,/^(?:group by)/i,/^(?:offset)/i,/^(?:having)/i,/^(?:,)/i,/^(?:[a-zA-Z][\w_]*)/i,/^(?:\s+)/i,/^(?:$)/i,/^(?:.)/i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}