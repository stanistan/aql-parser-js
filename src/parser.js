/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"table_defs":6,"queries":7,"COMMA":8,"subq":9,"table_def":10,"table_decl":11,"LBR":12,"body":13,"RBR":14,"VAR":15,"AS":16,"ON":17,"expr":18,"fields":19,"clauses":20,"by_expr":21,"ORD":22,"epxr":23,"by_exprs":24,"where":25,"group_by":26,"having":27,"order_by":28,"limit":29,"offset":30,"WHERE":31,"GROUP_BY":32,"HAVING":33,"ORDER_BY":34,"LIMIT":35,"OFFSET":36,"field":37,"ref":38,"aliased_name":39,"literals":40,"literal":41,"IN":42,"LPAREN":43,"RPAREN":44,"EQ":45,"LIKE":46,"ILIKE":47,"TILDE":48,"AND":49,"OR":50,"or_dotted":51,"LBRACKET":52,"RBRACKET_PL":53,"RBRACKET":54,"PERIOD":55,"STRING_LITERAL_S":56,"STRING_LITERAL_D":57,"NUM":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"COMMA",9:"subq",12:"LBR",14:"RBR",15:"VAR",16:"AS",17:"ON",22:"ORD",23:"epxr",31:"WHERE",32:"GROUP_BY",33:"HAVING",34:"ORDER_BY",35:"LIMIT",36:"OFFSET",42:"IN",43:"LPAREN",44:"RPAREN",45:"EQ",46:"LIKE",47:"ILIKE",48:"TILDE",49:"AND",50:"OR",52:"LBRACKET",53:"RBRACKET_PL",54:"RBRACKET",55:"PERIOD",56:"STRING_LITERAL_S",57:"STRING_LITERAL_D",58:"NUM"},
productions_: [0,[3,2],[4,1],[7,3],[7,1],[6,2],[6,1],[10,4],[11,5],[11,3],[11,3],[11,1],[13,2],[13,1],[13,1],[13,0],[21,2],[21,1],[24,3],[24,1],[20,6],[25,2],[25,0],[26,2],[26,0],[27,2],[27,0],[28,2],[28,0],[29,2],[29,0],[30,2],[30,0],[19,3],[19,1],[37,3],[37,3],[37,1],[37,1],[40,3],[40,1],[18,5],[18,5],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,1],[18,1],[38,6],[38,3],[38,6],[38,3],[39,3],[39,1],[51,3],[51,1],[41,1],[41,1],[41,1]],
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
case 7: this.$ = new t.Table($$[$0-3].name, $$[$0-1].selects, $$[$0-1].clauses, $$[$0-3]); 
break;
case 8: this.$ = { name: $$[$0-4], alias: $$[$0-2], join: $$[$0] }; 
break;
case 9: this.$ = { name: $$[$0-2], join: $$[$0] }; 
break;
case 10: this.$ = { name: $$[$0-2], alias: $$[$0] }; 
break;
case 11: this.$ = { name: $$[$0] }; 
break;
case 12: this.$ = { selects: $$[$0-1], clauses: $$[$0] }; 
break;
case 13: this.$ = { selects: $$[$0] }; 
break;
case 14: this.$ = { clauses: $$[$0] }; 
break;
case 15: this.$ = {}; 
break;
case 16: this.$ = [$$[$0-1]]; this.$.push($$[$0]); 
break;
case 17: this.$ = [$$[$0]]; 
break;
case 18: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 19: this.$ = [$$[$0]]; 
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
case 35: this.$ = new t.Expr($$[$0-2], $$[$0]); 
break;
case 36: this.$ = $$[$0-2]; this.$.alias = $$[$0]; 
break;
case 37: this.$ = $$[$0]; 
break;
case 38: this.$ = new t.Field($$[$0].name, $$[$0].alias); 
break;
case 39: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 40:this.$ = [$$[$0]]; 
break;
case 41: this.$ = [$$[$0-4], 'in', $$[$0-1]]; 
break;
case 42: this.$ = [$$[$0-4], 'in', $$[$0-1]]; 
break;
case 43: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 44: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 45: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 46: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 47: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 48: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 49: this.$ = [$$[$0-1]]; 
break;
case 50: this.$ = $$[$0]; 
break;
case 51: this.$ = $$[$0]; 
break;
case 52: this.$ = new t.PluralRef($$[$0-4], $$[$0-2]); 
break;
case 53: this.$ = new t.PluralRef($$[$0-1]); 
break;
case 54: this.$ = new t.SingleRef($$[$0-4], $$[$0-2]); 
break;
case 55: this.$ = new t.SingleRef($$[$0-1]); 
break;
case 56: this.$ = {name: $$[$0-2], alias: $$[$0] }; 
break;
case 57: this.$ = {name: $$[$0]}; 
break;
case 58: this.$ = $$[$0-2] + '.' + $$[$0]; 
break;
case 59: this.$ = $$[$0]; 
break;
case 60: this.$ = $$[$0]; 
break;
case 61: this.$ = $$[$0]; 
break;
case 62: this.$ = parseFloat($$[$0], 10); 
break;
}
},
table: [{3:1,4:2,6:3,10:4,11:5,15:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2],10:8,11:5,15:[1,6],44:[2,2]},{5:[2,6],15:[2,6],44:[2,6]},{12:[1,9]},{12:[2,11],16:[1,10],17:[1,11]},{1:[2,1]},{5:[2,5],15:[2,5],44:[2,5]},{13:12,14:[2,15],15:[1,25],18:17,19:13,20:14,25:16,31:[1,20],32:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15],37:15,38:18,39:19,41:23,43:[1,21],51:22,52:[1,24],56:[1,26],57:[1,27],58:[1,28]},{15:[1,29]},{15:[1,31],18:30,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{14:[1,32]},{8:[1,34],14:[2,13],20:33,25:16,31:[1,20],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22]},{14:[2,14]},{8:[2,34],14:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34]},{14:[2,24],26:35,32:[1,36],33:[2,24],34:[2,24],35:[2,24],36:[2,24]},{16:[1,37],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{8:[2,37],14:[2,37],16:[1,45],31:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37]},{8:[2,38],14:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38]},{15:[1,31],18:46,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:47,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{8:[2,50],12:[2,50],14:[2,50],16:[2,50],22:[2,50],31:[2,50],32:[2,50],33:[2,50],34:[2,50],35:[2,50],36:[2,50],42:[2,50],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],50:[2,50]},{8:[2,51],12:[2,51],14:[2,51],16:[2,51],22:[2,51],31:[2,51],32:[2,51],33:[2,51],34:[2,51],35:[2,51],36:[2,51],42:[2,51],44:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[2,51],49:[2,51],50:[2,51]},{15:[1,48]},{8:[2,57],14:[2,57],16:[1,49],31:[2,57],32:[2,57],33:[2,57],34:[2,57],35:[2,57],36:[2,57],42:[2,57],45:[2,57],46:[2,57],47:[2,57],48:[2,57],49:[2,57],50:[2,57],55:[1,50]},{8:[2,60],12:[2,60],14:[2,60],16:[2,60],22:[2,60],31:[2,60],32:[2,60],33:[2,60],34:[2,60],35:[2,60],36:[2,60],42:[2,60],44:[2,60],45:[2,60],46:[2,60],47:[2,60],48:[2,60],49:[2,60],50:[2,60]},{8:[2,61],12:[2,61],14:[2,61],16:[2,61],22:[2,61],31:[2,61],32:[2,61],33:[2,61],34:[2,61],35:[2,61],36:[2,61],42:[2,61],44:[2,61],45:[2,61],46:[2,61],47:[2,61],48:[2,61],49:[2,61],50:[2,61]},{8:[2,62],12:[2,62],14:[2,62],16:[2,62],22:[2,62],31:[2,62],32:[2,62],33:[2,62],34:[2,62],35:[2,62],36:[2,62],42:[2,62],44:[2,62],45:[2,62],46:[2,62],47:[2,62],48:[2,62],49:[2,62],50:[2,62]},{12:[2,10],17:[1,51]},{12:[2,9],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{8:[2,59],12:[2,59],14:[2,59],16:[2,59],22:[2,59],31:[2,59],32:[2,59],33:[2,59],34:[2,59],35:[2,59],36:[2,59],42:[2,59],44:[2,59],45:[2,59],46:[2,59],47:[2,59],48:[2,59],49:[2,59],50:[2,59],55:[1,50]},{5:[2,7],15:[2,7],44:[2,7]},{14:[2,12]},{15:[1,25],18:17,37:52,38:18,39:19,41:23,43:[1,21],51:22,52:[1,24],56:[1,26],57:[1,27],58:[1,28]},{14:[2,26],27:53,33:[1,54],34:[2,26],35:[2,26],36:[2,26]},{15:[1,31],18:57,21:56,23:[1,58],24:55,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:59,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{43:[1,60]},{15:[1,31],18:61,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:62,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:63,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:64,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:65,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:66,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{15:[1,31],18:67,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{14:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{42:[1,38],44:[1,68],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{43:[1,69],53:[1,70],54:[1,71]},{15:[1,72]},{15:[1,73]},{15:[1,31],18:74,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{8:[2,33],14:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33]},{14:[2,28],28:75,34:[1,76],35:[2,28],36:[2,28]},{15:[1,31],18:77,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{8:[1,78],14:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23]},{8:[2,19],14:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19]},{22:[1,79],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{8:[2,17],14:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17]},{8:[2,35],14:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{4:81,6:3,10:4,11:5,15:[1,6],40:80,41:82,56:[1,26],57:[1,27],58:[1,28]},{8:[2,43],12:[2,43],14:[2,43],16:[2,43],22:[2,43],31:[2,43],32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],42:[1,38],44:[2,43],45:[2,43],46:[2,43],47:[2,43],48:[1,42],49:[2,43],50:[2,43]},{8:[2,44],12:[2,44],14:[2,44],16:[2,44],22:[2,44],31:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],42:[1,38],44:[2,44],45:[2,44],46:[2,44],47:[2,44],48:[1,42],49:[2,44],50:[2,44]},{8:[2,45],12:[2,45],14:[2,45],16:[2,45],22:[2,45],31:[2,45],32:[2,45],33:[2,45],34:[2,45],35:[2,45],36:[2,45],42:[1,38],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[1,42],49:[2,45],50:[2,45]},{8:[2,46],12:[2,46],14:[2,46],16:[2,46],22:[2,46],31:[2,46],32:[2,46],33:[2,46],34:[2,46],35:[2,46],36:[2,46],42:[1,38],44:[2,46],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{8:[2,47],12:[2,47],14:[2,47],16:[2,47],22:[2,47],31:[2,47],32:[2,47],33:[2,47],34:[2,47],35:[2,47],36:[2,47],42:[1,38],44:[2,47],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[2,47],50:[2,47]},{8:[2,48],12:[2,48],14:[2,48],16:[2,48],22:[2,48],31:[2,48],32:[2,48],33:[2,48],34:[2,48],35:[2,48],36:[2,48],42:[1,38],44:[2,48],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[2,48],50:[2,48]},{8:[2,36],14:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{8:[2,49],12:[2,49],14:[2,49],16:[2,49],22:[2,49],31:[2,49],32:[2,49],33:[2,49],34:[2,49],35:[2,49],36:[2,49],42:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],50:[2,49]},{15:[1,31],51:83},{8:[2,53],14:[2,53],16:[2,53],31:[2,53],32:[2,53],33:[2,53],34:[2,53],35:[2,53],36:[2,53]},{8:[2,55],14:[2,55],16:[2,55],31:[2,55],32:[2,55],33:[2,55],34:[2,55],35:[2,55],36:[2,55]},{8:[2,56],14:[2,56],31:[2,56],32:[2,56],33:[2,56],34:[2,56],35:[2,56],36:[2,56]},{8:[2,58],12:[2,58],14:[2,58],16:[2,58],22:[2,58],31:[2,58],32:[2,58],33:[2,58],34:[2,58],35:[2,58],36:[2,58],42:[2,58],44:[2,58],45:[2,58],46:[2,58],47:[2,58],48:[2,58],49:[2,58],50:[2,58]},{12:[2,8],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{14:[2,30],29:84,35:[1,85],36:[2,30]},{15:[1,31],18:57,21:56,23:[1,58],24:86,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{14:[2,25],34:[2,25],35:[2,25],36:[2,25],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{15:[1,31],18:57,21:87,23:[1,58],41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{8:[2,16],14:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16]},{8:[1,89],44:[1,88]},{44:[1,90]},{8:[2,40],44:[2,40]},{44:[1,91]},{14:[2,32],30:92,36:[1,93]},{15:[1,31],18:94,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{8:[1,78],14:[2,27],35:[2,27],36:[2,27]},{8:[2,18],14:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18]},{8:[2,41],12:[2,41],14:[2,41],16:[2,41],22:[2,41],31:[2,41],32:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],42:[2,41],44:[2,41],45:[2,41],46:[2,41],47:[2,41],48:[2,41],49:[2,41],50:[2,41]},{41:95,56:[1,26],57:[1,27],58:[1,28]},{8:[2,42],12:[2,42],14:[2,42],16:[2,42],22:[2,42],31:[2,42],32:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],42:[2,42],44:[2,42],45:[2,42],46:[2,42],47:[2,42],48:[2,42],49:[2,42],50:[2,42]},{53:[1,96],54:[1,97]},{14:[2,20]},{15:[1,31],18:98,41:23,43:[1,21],51:22,56:[1,26],57:[1,27],58:[1,28]},{14:[2,29],36:[2,29],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]},{8:[2,39],44:[2,39]},{8:[2,52],14:[2,52],16:[2,52],31:[2,52],32:[2,52],33:[2,52],34:[2,52],35:[2,52],36:[2,52]},{8:[2,54],14:[2,54],16:[2,54],31:[2,54],32:[2,54],33:[2,54],34:[2,54],35:[2,54],36:[2,54]},{14:[2,31],42:[1,38],45:[1,39],46:[1,40],47:[1,41],48:[1,42],49:[1,43],50:[1,44]}],
defaultActions: {7:[2,1],14:[2,14],33:[2,12],92:[2,20]},
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
case 1: return 57; 
break;
case 2: return 56; 
break;
case 3: return 12; 
break;
case 4: return 14; 
break;
case 5: return 43; 
break;
case 6: return 44; 
break;
case 7: return 52; 
break;
case 8: return 53; 
break;
case 9: return 54; 
break;
case 10: return 55; 
break;
case 11: return 8; 
break;
case 12: return 48; 
break;
case 13: return 42; 
break;
case 14: return 45; 
break;
case 15: return 46; 
break;
case 16: return 47; 
break;
case 17: return 49; 
break;
case 18: return 50; 
break;
case 19: return 16; 
break;
case 20: return 17; 
break;
case 21: return 22; 
break;
case 22: return 31; 
break;
case 23: return 34; 
break;
case 24: return 35; 
break;
case 25: return 32; 
break;
case 26: return 36; 
break;
case 27: return 33; 
break;
case 28: return 58; 
break;
case 29: return 15; 
break;
case 30: /* */ 
break;
case 31: return 5; 
break;
case 32:console.log(yy_.yytext);
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/i,/^(?:[\w]?"(\\.|[^\\"])*")/i,/^(?:[\w]?'(\\.|[^\\'])*')/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\]s)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?:~)/i,/^(?:in)/i,/^(?:=)/i,/^(?:like)/i,/^(?:ilike)/i,/^(?:and)/i,/^(?:or)/i,/^(?:as)/i,/^(?:on)/i,/^(?:(asc|desc))/i,/^(?:where)/i,/^(?:order by)/i,/^(?:limit)/i,/^(?:group by)/i,/^(?:offset)/i,/^(?:having)/i,/^(?:[0-9][0-9.]*)/i,/^(?:[a-zA-Z][\w_]*)/i,/^(?:\s+)/i,/^(?:$)/i,/^(?:.)/i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":true}};
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