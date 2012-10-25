/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"query":3,"subq":4,"EOF":5,"table_defs":6,"queries":7,"COMMA":8,"table_def":9,"table_decl":10,"LBR":11,"body":12,"RBR":13,"aliased_name":14,"ON":15,"join":16,"fields":17,"clauses":18,"field":19,"expr":20,"AS":21,"term":22,"ref":23,"LPAREN":24,"RPAREN":25,"LBRACKET":26,"RBRACKET_PL":27,"RBRACKET":28,"VAR":29,"PERIOD":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"COMMA",11:"LBR",13:"RBR",15:"ON",18:"clauses",21:"AS",24:"LPAREN",25:"RPAREN",26:"LBRACKET",27:"RBRACKET_PL",28:"RBRACKET",29:"VAR",30:"PERIOD"},
productions_: [0,[3,2],[4,1],[7,3],[7,1],[6,2],[6,1],[9,4],[10,3],[10,1],[12,2],[12,1],[12,1],[12,0],[17,3],[17,1],[19,1],[19,3],[19,3],[19,1],[19,1],[20,3],[23,6],[23,3],[23,6],[23,3],[16,1],[14,3],[14,1],[22,3],[22,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = { query: $$[$0] }; 
break;
case 3: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 4: this.$ = [$$[$0]]; 
break;
case 5: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 6: this.$ = [$$[$0]]; 
break;
case 7: this.$ = { table: { table_def: $$[$0-3], body: $$[$0-1] } }; 
break;
case 8: this.$ = $$[$0-2]; this.$.join = $$[$0]; 
break;
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = {select: $$[$0-1], clauses: $$[$0] }; 
break;
case 11: this.$ = {select: $$[$0] }; 
break;
case 12: this.$ = { clauses: $$[$0] }; 
break;
case 13: this.$ = {}; 
break;
case 14: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 15: this.$ = [$$[$0]]; 
break;
case 16: this.$ = { postqueries: $$[$0]}; 
break;
case 17: this.$ = { field: { expr: $$[$0-2], alias: $$[$0] } }; 
break;
case 18: this.$ = { field: { ref: $$[$0-2], alias: $$[$0]} }; 
break;
case 19: this.$ = { field: { ref: $$[$0] }}; 
break;
case 20: this.$ = { field: $$[$0] }; 
break;
case 21: this.$ = $$[$0-1]; 
break;
case 22: this.$ = ['plural', $$[$0-4], 'id', $$[$0-2]]; 
break;
case 23: this.$ = ['plural', $$[$0-1]]; 
break;
case 24: this.$ = ['single', $$[$0-4], 'id', $$[$0-2]]; 
break;
case 25: this.$ = ['single', $$[$0-1]]; 
break;
case 26: this.$ = $$[$0]; 
break;
case 27: this.$ = {name: $$[$0-2], alias: $$[$0] }; 
break;
case 28: this.$ = {name: $$[$0]}; 
break;
case 29: this.$ = $$[$0-2] + '.' + $$[$0]; 
break;
case 30: this.$ = yytext; 
break;
}
},
table: [{3:1,4:2,6:3,9:4,10:5,14:6,22:7,29:[1,8]},{1:[3]},{5:[1,9]},{5:[2,2],8:[2,2],9:10,10:5,13:[2,2],14:6,18:[2,2],22:7,29:[1,8]},{5:[2,6],8:[2,6],13:[2,6],18:[2,6],29:[2,6]},{11:[1,11]},{11:[2,9],15:[1,12]},{8:[2,28],11:[2,28],13:[2,28],15:[2,28],18:[2,28],21:[1,13]},{8:[2,30],11:[2,30],13:[2,30],15:[2,30],18:[2,30],21:[2,30],24:[2,30],25:[2,30],27:[2,30],28:[2,30],30:[1,14]},{1:[2,1]},{5:[2,5],8:[2,5],13:[2,5],18:[2,5],29:[2,5]},{4:23,6:3,7:19,9:4,10:5,12:15,13:[2,13],14:22,17:16,18:[1,17],19:18,20:20,22:7,23:21,24:[1,24],26:[1,25],29:[1,8]},{16:26,22:27,29:[1,8]},{22:28,29:[1,8]},{29:[1,29]},{13:[1,30]},{8:[1,32],13:[2,11],18:[1,31]},{13:[2,12]},{8:[2,15],13:[2,15],18:[2,15]},{8:[1,33],13:[2,16],18:[2,16]},{21:[1,34]},{8:[2,19],13:[2,19],18:[2,19],21:[1,35]},{8:[2,20],11:[2,20],13:[2,20],15:[1,12],18:[2,20]},{8:[2,4],13:[2,4],18:[2,4]},{22:36,29:[1,8]},{22:37,29:[1,8]},{11:[2,8]},{11:[2,26]},{8:[2,27],11:[2,27],13:[2,27],15:[2,27],18:[2,27]},{8:[2,29],11:[2,29],13:[2,29],15:[2,29],18:[2,29],21:[2,29],24:[2,29],25:[2,29],27:[2,29],28:[2,29]},{5:[2,7],8:[2,7],13:[2,7],18:[2,7],29:[2,7]},{13:[2,10]},{4:23,6:3,7:19,9:4,10:5,14:22,19:38,20:20,22:7,23:21,24:[1,24],26:[1,25],29:[1,8]},{4:39,6:3,9:4,10:5,14:6,22:7,29:[1,8]},{22:40,29:[1,8]},{22:41,29:[1,8]},{25:[1,42]},{24:[1,43],27:[1,44],28:[1,45]},{8:[2,14],13:[2,14],18:[2,14]},{8:[2,3],13:[2,3],18:[2,3]},{8:[2,17],13:[2,17],18:[2,17]},{8:[2,18],13:[2,18],18:[2,18]},{21:[2,21]},{22:46,29:[1,8]},{8:[2,23],13:[2,23],18:[2,23],21:[2,23]},{8:[2,25],13:[2,25],18:[2,25],21:[2,25]},{25:[1,47]},{27:[1,48],28:[1,49]},{8:[2,22],13:[2,22],18:[2,22],21:[2,22]},{8:[2,24],13:[2,24],18:[2,24],21:[2,24]}],
defaultActions: {9:[2,1],17:[2,12],26:[2,8],27:[2,26],31:[2,10],42:[2,21]},
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
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: /* ignore */ 
break;
case 1: return 11; 
break;
case 2: return 13; 
break;
case 3: return 24; 
break;
case 4: return 25; 
break;
case 5: return 26; 
break;
case 6: return 27; 
break;
case 7: return 28; 
break;
case 8: return 30; 
break;
case 9: return 21; 
break;
case 10: return 15; 
break;
case 11: return 8; 
break;
case 12: return 29; 
break;
case 13: /* */ 
break;
case 14: return 5; 
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\]s\b)/,/^(?:\])/,/^(?:\.)/,/^(?:as\b)/,/^(?:on\b)/,/^(?:,)/,/^(?:[a-zA-Z][\w_]*)/,/^(?:\s+)/,/^(?:$)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}};
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