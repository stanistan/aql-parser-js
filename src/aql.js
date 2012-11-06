/* Jison generated parser */
var aql = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"table_defs":6,"table_def":7,"table_decl":8,"LBR":9,"body":10,"RBR":11,"VAR":12,"AS":13,"ON":14,"e":15,"expr":16,"fields":17,"clauses":18,"where":19,"group_by":20,"having":21,"order_by":22,"limit":23,"offset":24,"WHERE":25,"WHITESPACE":26,"GROUP_BY":27,"by_es":28,"HAVING":29,"ORDER_BY":30,"LIMIT":31,"OFFSET":32,"field":33,"COMMA":34,"alias":35,"literal":36,"STRING_LITERAL_S":37,"STRING_LITERAL_D":38,"NUM":39,"by_e":40,"ORD":41,"DOTTED_VAR":42,"LPAREN":43,"RPAREN":44,"MINUS":45,"PLUS":46,"STAR":47,"DIV":48,"AND":49,"OR":50,"ILIKE":51,"LIKE":52,"EQ":53,"es":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"LBR",11:"RBR",12:"VAR",13:"AS",14:"ON",16:"expr",25:"WHERE",26:"WHITESPACE",27:"GROUP_BY",29:"HAVING",30:"ORDER_BY",31:"LIMIT",32:"OFFSET",34:"COMMA",37:"STRING_LITERAL_S",38:"STRING_LITERAL_D",39:"NUM",41:"ORD",42:"DOTTED_VAR",43:"LPAREN",44:"RPAREN",45:"MINUS",46:"PLUS",47:"STAR",48:"DIV",49:"AND",50:"OR",51:"ILIKE",52:"LIKE",53:"EQ"},
productions_: [0,[3,2],[4,1],[6,2],[6,1],[7,4],[8,5],[8,3],[8,3],[8,1],[10,2],[10,1],[10,1],[18,6],[19,2],[19,1],[20,2],[20,1],[21,2],[21,1],[22,2],[22,1],[23,2],[23,1],[24,2],[24,1],[17,3],[17,1],[33,3],[33,1],[35,1],[35,1],[36,1],[36,1],[36,1],[40,2],[40,1],[28,3],[28,1],[15,1],[15,1],[15,1],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,4],[54,2],[54,1],[54,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new t.Query($$[$0]); 
break;
case 3: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 4: this.$ = [$$[$0]]; 
break;
case 5:
      this.$ = new t.Table(
          $$[$0-3].name
        , $$[$0-1].selects
        , $$[$0-1].clauses
        , $$[$0-1].posts
        , $$[$0-3]
      );
    
break;
case 6: this.$ = { name: $$[$0-4], alias: $$[$0-2], join: expr }; 
break;
case 7: this.$ = { name: $$[$0-2], join: $$[$0] }; 
break;
case 8: this.$ = { name: $$[$0-2], alias: $$[$0] }; 
break;
case 9: this.$ = { name: $$[$0] }; 
break;
case 10: this.$ = { selects: $$[$0-1],  clauses: $$[$0] }; 
break;
case 11: this.$ = { selects: [],  clauses: $$[$0] }; 
break;
case 12: this.$ = { selects: $$[$0],  clauses: [] }; 
break;
case 13:
       this.$ = {
            where: $$[$0-5]
          , group_by: $$[$0-4]
          , having: $$[$0-3]
          , order_by: $$[$0-2]
          , limit: $$[$0-1]
          , offset: $$[$0]
        };
    
break;
case 14: this.$ = $$[$0]; 
break;
case 15: this.$ = []; 
break;
case 16: this.$ = $$[$0]; 
break;
case 17: this.$ = []; 
break;
case 18: this.$ = $$[$0]; 
break;
case 19: this.$ = []; 
break;
case 20: this.$ = $$[$0]; 
break;
case 21: this.$ = []; 
break;
case 22: this.$ = $$[$0]; 
break;
case 23: this.$ = []; 
break;
case 24: this.$ = $$[$0]; 
break;
case 25: this.$ = []; 
break;
case 26: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 27: this.$ = [$$[$0]]; 
break;
case 28: this.$ = {field: $$[$0-2], alias: $$[$0]}; 
break;
case 29: this.$ = {field: $$[$0]}; 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0]; 
break;
case 34: this.$ = parseFloat($$[$0], 10); 
break;
case 39: this.$ = $$[$0]; 
break;
case 40: this.$ = $$[$0]; 
break;
case 41: this.$ = $$[$0]; 
break;
case 42: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
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
case 49: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 50: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 51: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 52: this.$ = [$$[$0-3], $$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 53: this.$ = [$$[$0-1], $$[$0]]; 
break;
case 54: this.$ = [$$[$0]]; 
break;
case 55: this.$ = [$$[$0]]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,12:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2]},{5:[2,4],6:8,7:4,8:5,12:[1,6]},{9:[1,9]},{9:[2,9],13:[1,10],14:[1,11]},{1:[2,1]},{5:[2,3]},{10:12,12:[1,21],15:17,17:13,18:14,19:16,25:[1,18],26:[1,19],33:15,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,27]},{16:[1,28]},{11:[1,29]},{11:[2,12],18:30,19:16,25:[1,18],26:[1,19]},{11:[2,11]},{11:[2,27],25:[2,27],26:[2,27],34:[1,31]},{20:32,26:[1,34],27:[1,33]},{11:[2,29],13:[1,35],25:[2,29],26:[2,29],34:[2,29],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{12:[1,21],15:45,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{26:[2,15],27:[2,15]},{9:[2,39],11:[2,39],12:[2,39],13:[2,39],25:[2,39],26:[2,39],27:[2,39],29:[2,39],30:[2,39],31:[2,39],32:[2,39],34:[2,39],37:[2,39],38:[2,39],39:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39],45:[2,39],46:[2,39],47:[2,39],48:[2,39],49:[2,39],50:[2,39],51:[2,39],52:[2,39],53:[2,39]},{9:[2,40],11:[2,40],12:[2,40],13:[2,40],25:[2,40],26:[2,40],27:[2,40],29:[2,40],30:[2,40],31:[2,40],32:[2,40],34:[2,40],37:[2,40],38:[2,40],39:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40],45:[2,40],46:[2,40],47:[2,40],48:[2,40],49:[2,40],50:[2,40],51:[2,40],52:[2,40],53:[2,40]},{9:[2,41],11:[2,41],12:[2,41],13:[2,41],25:[2,41],26:[2,41],27:[2,41],29:[2,41],30:[2,41],31:[2,41],32:[2,41],34:[2,41],37:[2,41],38:[2,41],39:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41],46:[2,41],47:[2,41],48:[2,41],49:[2,41],50:[2,41],51:[2,41],52:[2,41],53:[2,41]},{12:[1,21],15:47,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{9:[2,32],11:[2,32],12:[2,32],13:[2,32],25:[2,32],26:[2,32],27:[2,32],29:[2,32],30:[2,32],31:[2,32],32:[2,32],34:[2,32],37:[2,32],38:[2,32],39:[2,32],41:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],46:[2,32],47:[2,32],48:[2,32],49:[2,32],50:[2,32],51:[2,32],52:[2,32],53:[2,32]},{9:[2,33],11:[2,33],12:[2,33],13:[2,33],25:[2,33],26:[2,33],27:[2,33],29:[2,33],30:[2,33],31:[2,33],32:[2,33],34:[2,33],37:[2,33],38:[2,33],39:[2,33],41:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],46:[2,33],47:[2,33],48:[2,33],49:[2,33],50:[2,33],51:[2,33],52:[2,33],53:[2,33]},{9:[2,34],11:[2,34],12:[2,34],13:[2,34],25:[2,34],26:[2,34],27:[2,34],29:[2,34],30:[2,34],31:[2,34],32:[2,34],34:[2,34],37:[2,34],38:[2,34],39:[2,34],41:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],47:[2,34],48:[2,34],49:[2,34],50:[2,34],51:[2,34],52:[2,34],53:[2,34]},{9:[2,8],14:[1,48]},{9:[2,7]},{5:[2,5],12:[2,5]},{11:[2,10]},{12:[1,21],15:17,17:49,33:15,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{21:50,26:[1,52],29:[1,51]},{12:[1,21],15:55,28:53,36:20,37:[1,24],38:[1,25],39:[1,26],40:54,42:[1,22],43:[1,23]},{26:[2,17],29:[2,17]},{12:[1,58],35:56,36:57,37:[1,24],38:[1,25],39:[1,26]},{12:[1,21],15:59,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:60,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:61,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:62,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:63,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:64,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:65,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:66,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{12:[1,21],15:67,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{26:[2,14],27:[2,14],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{12:[1,21],15:69,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23],47:[1,70],54:68},{44:[1,71],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{12:[1,21],15:72,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{11:[2,26],25:[2,26],26:[2,26]},{22:73,26:[1,75],30:[1,74]},{12:[1,21],15:76,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{26:[2,19],30:[2,19]},{26:[2,16],29:[2,16]},{26:[2,38],29:[2,38],31:[2,38],34:[1,77]},{26:[2,36],29:[2,36],31:[2,36],34:[2,36],41:[1,78],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{11:[2,28],25:[2,28],26:[2,28],34:[2,28]},{11:[2,30],25:[2,30],26:[2,30],34:[2,30]},{11:[2,31],25:[2,31],26:[2,31],34:[2,31]},{9:[2,43],11:[2,43],12:[2,43],13:[2,43],25:[2,43],26:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],32:[2,43],34:[2,43],37:[2,43],38:[2,43],39:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43],45:[2,43],46:[2,43],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{9:[2,44],11:[2,44],12:[2,44],13:[2,44],25:[2,44],26:[2,44],27:[2,44],29:[2,44],30:[2,44],31:[2,44],32:[2,44],34:[2,44],37:[2,44],38:[2,44],39:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44],45:[2,44],46:[2,44],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{9:[2,45],11:[2,45],12:[2,45],13:[2,45],25:[2,45],26:[2,45],27:[2,45],29:[2,45],30:[2,45],31:[2,45],32:[2,45],34:[2,45],37:[2,45],38:[2,45],39:[2,45],41:[2,45],42:[2,45],43:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{9:[2,46],11:[2,46],12:[2,46],13:[2,46],25:[2,46],26:[2,46],27:[2,46],29:[2,46],30:[2,46],31:[2,46],32:[2,46],34:[2,46],37:[2,46],38:[2,46],39:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{9:[2,47],11:[2,47],12:[2,47],13:[2,47],25:[2,47],26:[2,47],27:[2,47],29:[2,47],30:[2,47],31:[2,47],32:[2,47],34:[2,47],37:[2,47],38:[2,47],39:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47],48:[2,47],49:[2,47],50:[2,47],51:[1,42],52:[1,43],53:[1,44]},{9:[2,48],11:[2,48],12:[2,48],13:[2,48],25:[2,48],26:[2,48],27:[2,48],29:[2,48],30:[2,48],31:[2,48],32:[2,48],34:[2,48],37:[2,48],38:[2,48],39:[2,48],41:[2,48],42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[2,48],49:[2,48],50:[2,48],51:[1,42],52:[1,43],53:[1,44]},{9:[2,49],11:[2,49],12:[2,49],13:[2,49],25:[2,49],26:[2,49],27:[2,49],29:[2,49],30:[2,49],31:[2,49],32:[2,49],34:[2,49],37:[2,49],38:[2,49],39:[2,49],41:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],50:[2,49],51:[2,49],52:[2,49],53:[2,49]},{9:[2,50],11:[2,50],12:[2,50],13:[2,50],25:[2,50],26:[2,50],27:[2,50],29:[2,50],30:[2,50],31:[2,50],32:[2,50],34:[2,50],37:[2,50],38:[2,50],39:[2,50],41:[2,50],42:[2,50],43:[2,50],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],50:[2,50],51:[2,50],52:[2,50],53:[2,50]},{9:[2,51],11:[2,51],12:[2,51],13:[2,51],25:[2,51],26:[2,51],27:[2,51],29:[2,51],30:[2,51],31:[2,51],32:[2,51],34:[2,51],37:[2,51],38:[2,51],39:[2,51],41:[2,51],42:[2,51],43:[2,51],44:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[2,51],49:[2,51],50:[2,51],51:[2,51],52:[2,51],53:[2,51]},{44:[1,79]},{12:[1,21],15:69,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23],44:[2,54],45:[1,36],46:[1,37],47:[1,81],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44],54:80},{44:[2,55]},{9:[2,42],11:[2,42],12:[2,42],13:[2,42],25:[2,42],26:[2,42],27:[2,42],29:[2,42],30:[2,42],31:[2,42],32:[2,42],34:[2,42],37:[2,42],38:[2,42],39:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42],45:[2,42],46:[2,42],47:[2,42],48:[2,42],49:[2,42],50:[2,42],51:[2,42],52:[2,42],53:[2,42]},{9:[2,6],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{23:82,26:[1,84],31:[1,83]},{12:[1,21],15:55,28:85,36:20,37:[1,24],38:[1,25],39:[1,26],40:54,42:[1,22],43:[1,23]},{26:[2,21],31:[2,21]},{26:[2,18],30:[2,18],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{12:[1,21],15:55,28:86,36:20,37:[1,24],38:[1,25],39:[1,26],40:54,42:[1,22],43:[1,23]},{26:[2,35],29:[2,35],31:[2,35],34:[2,35]},{9:[2,52],11:[2,52],12:[2,52],13:[2,52],25:[2,52],26:[2,52],27:[2,52],29:[2,52],30:[2,52],31:[2,52],32:[2,52],34:[2,52],37:[2,52],38:[2,52],39:[2,52],41:[2,52],42:[2,52],43:[2,52],44:[2,52],45:[2,52],46:[2,52],47:[2,52],48:[2,52],49:[2,52],50:[2,52],51:[2,52],52:[2,52],53:[2,52]},{44:[2,53]},{12:[1,21],15:61,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23],44:[2,55]},{24:87,26:[1,89],32:[1,88]},{12:[1,21],15:90,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{26:[2,23],32:[2,23]},{26:[2,20],31:[2,20]},{26:[2,37],29:[2,37],31:[2,37]},{11:[2,13]},{12:[1,21],15:91,36:20,37:[1,24],38:[1,25],39:[1,26],42:[1,22],43:[1,23]},{11:[2,25]},{26:[2,22],32:[2,22],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]},{11:[2,24],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],51:[1,42],52:[1,43],53:[1,44]}],
defaultActions: {3:[2,2],7:[2,1],8:[2,3],14:[2,11],28:[2,7],30:[2,10],70:[2,55],80:[2,53],87:[2,13],89:[2,25]},
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
case 0: /* ignore */ return 26; 
break;
case 1: return 38; 
break;
case 2: return 37; 
break;
case 3: return 9; 
break;
case 4: return 11; 
break;
case 5: return 43; 
break;
case 6: return 44; 
break;
case 7: return 'LBRACKET'; 
break;
case 8: return 'RBRACKET_PL'; 
break;
case 9: return 'RBRACKET'; 
break;
case 10: return 'PERIOD'; 
break;
case 11: return 34; 
break;
case 12: return 'TILDE'; 
break;
case 13: return 47; 
break;
case 14: return 45; 
break;
case 15: return 46; 
break;
case 16: return 48; 
break;
case 17: return 'IN'; 
break;
case 18: return 53; 
break;
case 19: return 52; 
break;
case 20: return 51; 
break;
case 21: return 49; 
break;
case 22: return 50; 
break;
case 23: return 13; 
break;
case 24: return 14; 
break;
case 25: return 41; 
break;
case 26: return 25; 
break;
case 27: return 30; 
break;
case 28: return 31; 
break;
case 29: return 27; 
break;
case 30: return 32; 
break;
case 31: return 29; 
break;
case 32: return 42; 
break;
case 33: return 12; 
break;
case 34: return 39; 
break;
case 35: /* */  
break;
case 36: return 5; 
break;
case 37:console.log(yy_.yytext);
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/i,/^(?:[\w]?"(\\.|[^\\"])*")/i,/^(?:[\w]?'(\\.|[^\\'])*')/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\]s)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?:~)/i,/^(?:\*)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\/)/i,/^(?:in)/i,/^(?:=)/i,/^(?:like)/i,/^(?:ilike)/i,/^(?:and)/i,/^(?:or)/i,/^(?:as)/i,/^(?:on)/i,/^(?:(asc|desc))/i,/^(?:where)/i,/^(?:order by)/i,/^(?:limit)/i,/^(?:group by)/i,/^(?:offset)/i,/^(?:having)/i,/^(?:[a-zA-Z][\w_]*\.[a-zA-Z][\w_]*)/i,/^(?:[a-zA-Z][\w_]*)/i,/^(?:[0-9][0-9.]*)/i,/^(?:\s+)/i,/^(?:$)/i,/^(?:.)/i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = aql;
exports.Parser = aql.Parser;
exports.parse = function () { return aql.parse.apply(aql, arguments); }
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