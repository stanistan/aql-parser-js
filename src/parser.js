/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"queries":6,"COMMA":7,"table_defs":8,"table_def":9,"table_decl":10,"LBR":11,"body":12,"RBR":13,"VAR":14,"AS":15,"ON":16,"expr":17,"fields":18,"clauses":19,"by_expr":20,"ORD":21,"by_exprs":22,"where":23,"group_by":24,"having":25,"order_by":26,"limit":27,"offset":28,"WHERE":29,"GROUP_BY":30,"HAVING":31,"ORDER_BY":32,"LIMIT":33,"OFFSET":34,"field":35,"ref":36,"alias":37,"aliased_name":38,"STAR":39,"literal":40,"exprs":41,"MINUS":42,"PLUS":43,"DIV":44,"EQ":45,"LIKE":46,"ILIKE":47,"TILDE":48,"AND":49,"OR":50,"IN":51,"LPAREN":52,"RPAREN":53,"or_dotted":54,"LBRACKET":55,"RBRACKET_PL":56,"RBRACKET":57,"PERIOD":58,"STRING_LITERAL_S":59,"STRING_LITERAL_D":60,"NUM":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"COMMA",11:"LBR",13:"RBR",14:"VAR",15:"AS",16:"ON",21:"ORD",29:"WHERE",30:"GROUP_BY",31:"HAVING",32:"ORDER_BY",33:"LIMIT",34:"OFFSET",39:"STAR",42:"MINUS",43:"PLUS",44:"DIV",45:"EQ",46:"LIKE",47:"ILIKE",48:"TILDE",49:"AND",50:"OR",51:"IN",52:"LPAREN",53:"RPAREN",55:"LBRACKET",56:"RBRACKET_PL",57:"RBRACKET",58:"PERIOD",59:"STRING_LITERAL_S",60:"STRING_LITERAL_D",61:"NUM"},
productions_: [0,[3,2],[6,3],[6,1],[4,1],[8,2],[8,1],[9,4],[9,4],[10,5],[10,3],[10,3],[10,1],[12,4],[12,2],[12,1],[12,2],[12,1],[12,0],[20,2],[20,1],[22,3],[22,1],[19,6],[23,2],[23,0],[24,2],[24,0],[25,2],[25,0],[26,2],[26,0],[27,2],[27,0],[28,2],[28,0],[18,3],[18,1],[35,3],[35,1],[35,3],[35,1],[35,1],[37,1],[37,1],[41,3],[41,1],[41,1],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,5],[17,5],[17,4],[17,3],[17,1],[17,1],[36,6],[36,3],[36,6],[36,3],[38,3],[38,1],[54,3],[54,1],[40,1],[40,1],[40,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 3: this.$ = [$$[$0]]; 
break;
case 4: this.$ = new t.Query($$[$0]); 
break;
case 5: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 6: this.$ = [$$[$0]]; 
break;
case 7: this.$ = new t.Table($$[$0-3].name, $$[$0-1].selects, $$[$0-1].clauses, $$[$0-1].posts, $$[$0-3]); 
break;
case 8: this.$ = new t.Table($$[$0-3], $$[$0-1].selects, $$[$0-1].clauses, $$[$0-1].post, {}); 
break;
case 9: this.$ = { name: $$[$0-4], alias: $$[$0-2], join: $$[$0] }; 
break;
case 10: this.$ = { name: $$[$0-2], join: $$[$0] }; 
break;
case 11: this.$ = { name: $$[$0-2], alias: $$[$0] }; 
break;
case 12: this.$ = { name: $$[$0] }; 
break;
case 13: this.$ = { selects: $$[$0-3], post: $$[$0-1], clauses: $$[$0] }; 
break;
case 14: this.$ = { selects: $$[$0-1], post: [], clauses: $$[$0] }; 
break;
case 15: this.$ = { selects: $$[$0], post: [], clauses: [] }; 
break;
case 16: this.$ = { selects: [], post: $$[$0-1], clauses: $$[$0] }; 
break;
case 17: this.$ = { selects: [], post: [], clauses: $$[$0] }; 
break;
case 18: this.$ = { selects: [], post: [], clauses: [] }; 
break;
case 19: this.$ = [$$[$0-1]]; this.$.push($$[$0]); 
break;
case 20: this.$ = [$$[$0]]; 
break;
case 21: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 22: this.$ = [$$[$0]]; 
break;
case 23:
        this.$ = {
            where: $$[$0-5]
          , group_by: $$[$0-4]
          , having: $$[$0-3]
          , order_by: $$[$0-2]
          , limit: $$[$0-1]
          , offset: $$[$0]
        };
    
break;
case 24: this.$ = $$[$0]; 
break;
case 25: this.$ = []; 
break;
case 26: this.$ = $$[$0]; 
break;
case 27: this.$ = []; 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = []; 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = []; 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = -1; 
break;
case 34: this.$ = $$[$0]; 
break;
case 35: this.$ = 0; 
break;
case 36: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 37: this.$ = [$$[$0]]; 
break;
case 38: this.$ = $$[$0-2]; this.$.alias = $$[$0]; 
break;
case 39: this.$ = $$[$0]; 
break;
case 40: this.$ = new t.Expr($$[$0-2], $$[$0]); 
break;
case 41: this.$ = new t.Field($$[$0].name, $$[$0].alias); 
break;
case 42: this.$ = '*'; 
break;
case 43: this.$ = $$[$0]; 
break;
case 44: this.$ = $$[$0]; 
break;
case 45: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 46: this.$ = [$$[$0]]; 
break;
case 47: this.$ = [$$[$0]]; 
break;
case 48: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 49: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 50: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 51: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 52: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 53: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 54: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 55: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 56: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 57: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 58: this.$ = [$$[$0-4], 'in', $$[$0-1]]; 
break;
case 59: this.$ = [$$[$0-4], 'in', $$[$0-1]]; 
break;
case 60:this.$ = [$$[$0-3], $$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 61: this.$ = [$$[$0-1]]; 
break;
case 62: this.$ = $$[$0]; 
break;
case 63: this.$ = $$[$0]; 
break;
case 64: this.$ = new t.PluralRef($$[$0-4], $$[$0-2]); 
break;
case 65: this.$ = new t.PluralRef($$[$0-1]); 
break;
case 66: this.$ = new t.SingleRef($$[$0-4], $$[$0-2]); 
break;
case 67: this.$ = new t.SingleRef($$[$0-1]); 
break;
case 68: this.$ = {name: $$[$0-2], alias: $$[$0] }; 
break;
case 69: this.$ = {name: $$[$0]}; 
break;
case 70: this.$ = $$[$0-2] + '.' + $$[$0]; 
break;
case 71: this.$ = $$[$0]; 
break;
case 72: this.$ = $$[$0]; 
break;
case 73: this.$ = $$[$0]; 
break;
case 74: this.$ = parseFloat($$[$0], 10); 
break;
}
},
table: [{3:1,4:2,8:3,9:4,10:5,14:[1,6]},{1:[3]},{5:[1,7]},{5:[2,4],7:[2,4],9:8,10:5,13:[2,4],14:[1,6],29:[2,4],30:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],53:[2,4]},{5:[2,6],7:[2,6],13:[2,6],14:[2,6],29:[2,6],30:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],53:[2,6]},{11:[1,9]},{11:[1,10],15:[1,11],16:[1,12]},{1:[2,1]},{5:[2,5],7:[2,5],13:[2,5],14:[2,5],29:[2,5],30:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],53:[2,5]},{4:18,6:15,8:3,9:4,10:5,12:13,13:[2,18],14:[1,26],17:21,18:14,19:16,23:19,29:[1,24],30:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],35:17,36:20,38:22,39:[1,23],40:29,52:[1,27],54:28,55:[1,25],59:[1,30],60:[1,31],61:[1,32]},{4:18,6:15,8:3,9:4,10:5,12:33,13:[2,18],14:[1,26],17:21,18:14,19:16,23:19,29:[1,24],30:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],35:17,36:20,38:22,39:[1,23],40:29,52:[1,27],54:28,55:[1,25],59:[1,30],60:[1,31],61:[1,32]},{14:[1,34]},{14:[1,36],17:35,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{13:[1,37]},{7:[1,38],13:[2,15],19:39,23:19,29:[1,24],30:[2,25],31:[2,25],32:[2,25],33:[2,25],34:[2,25]},{7:[1,41],13:[2,25],19:40,23:19,29:[1,24],30:[2,25],31:[2,25],32:[2,25],33:[2,25],34:[2,25]},{13:[2,17]},{7:[2,37],13:[2,37],29:[2,37],30:[2,37],31:[2,37],32:[2,37],33:[2,37],34:[2,37]},{7:[2,3],13:[2,3],29:[2,3],30:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3]},{13:[2,27],24:42,30:[1,43],31:[2,27],32:[2,27],33:[2,27],34:[2,27]},{7:[2,39],13:[2,39],15:[1,44],29:[2,39],30:[2,39],31:[2,39],32:[2,39],33:[2,39],34:[2,39]},{15:[1,45],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{7:[2,41],13:[2,41],29:[2,41],30:[2,41],31:[2,41],32:[2,41],33:[2,41],34:[2,41]},{7:[2,42],13:[2,42],29:[2,42],30:[2,42],31:[2,42],32:[2,42],33:[2,42],34:[2,42]},{14:[1,36],17:57,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,58]},{7:[2,69],11:[1,10],13:[2,69],15:[1,60],16:[1,12],29:[2,69],30:[2,69],31:[2,69],32:[2,69],33:[2,69],34:[2,69],39:[2,69],42:[2,69],43:[2,69],44:[2,69],45:[2,69],46:[2,69],47:[2,69],48:[2,69],49:[2,69],50:[2,69],51:[2,69],52:[1,59],58:[1,61]},{14:[1,36],17:62,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{7:[2,62],11:[2,62],13:[2,62],15:[2,62],21:[2,62],29:[2,62],30:[2,62],31:[2,62],32:[2,62],33:[2,62],34:[2,62],39:[2,62],42:[2,62],43:[2,62],44:[2,62],45:[2,62],46:[2,62],47:[2,62],48:[2,62],49:[2,62],50:[2,62],51:[2,62],53:[2,62]},{7:[2,63],11:[2,63],13:[2,63],15:[2,63],21:[2,63],29:[2,63],30:[2,63],31:[2,63],32:[2,63],33:[2,63],34:[2,63],39:[2,63],42:[2,63],43:[2,63],44:[2,63],45:[2,63],46:[2,63],47:[2,63],48:[2,63],49:[2,63],50:[2,63],51:[2,63],53:[2,63]},{7:[2,72],11:[2,72],13:[2,72],15:[2,72],21:[2,72],29:[2,72],30:[2,72],31:[2,72],32:[2,72],33:[2,72],34:[2,72],39:[2,72],42:[2,72],43:[2,72],44:[2,72],45:[2,72],46:[2,72],47:[2,72],48:[2,72],49:[2,72],50:[2,72],51:[2,72],53:[2,72]},{7:[2,73],11:[2,73],13:[2,73],15:[2,73],21:[2,73],29:[2,73],30:[2,73],31:[2,73],32:[2,73],33:[2,73],34:[2,73],39:[2,73],42:[2,73],43:[2,73],44:[2,73],45:[2,73],46:[2,73],47:[2,73],48:[2,73],49:[2,73],50:[2,73],51:[2,73],53:[2,73]},{7:[2,74],11:[2,74],13:[2,74],15:[2,74],21:[2,74],29:[2,74],30:[2,74],31:[2,74],32:[2,74],33:[2,74],34:[2,74],39:[2,74],42:[2,74],43:[2,74],44:[2,74],45:[2,74],46:[2,74],47:[2,74],48:[2,74],49:[2,74],50:[2,74],51:[2,74],53:[2,74]},{13:[1,63]},{11:[2,11],16:[1,64]},{11:[2,10],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{7:[2,71],11:[2,71],13:[2,71],15:[2,71],21:[2,71],29:[2,71],30:[2,71],31:[2,71],32:[2,71],33:[2,71],34:[2,71],39:[2,71],42:[2,71],43:[2,71],44:[2,71],45:[2,71],46:[2,71],47:[2,71],48:[2,71],49:[2,71],50:[2,71],51:[2,71],52:[1,59],53:[2,71],58:[1,61]},{5:[2,7],7:[2,7],13:[2,7],14:[2,7],29:[2,7],30:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],53:[2,7]},{4:18,6:65,8:3,9:4,10:5,14:[1,26],17:21,35:66,36:20,38:22,39:[1,23],40:29,52:[1,27],54:28,55:[1,25],59:[1,30],60:[1,31],61:[1,32]},{13:[2,14]},{13:[2,16]},{4:67,8:3,9:4,10:5,14:[1,6]},{13:[2,29],25:68,31:[1,69],32:[2,29],33:[2,29],34:[2,29]},{14:[1,36],17:72,20:71,22:70,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:73,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,76],37:74,40:75,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:77,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:78,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:79,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:80,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:81,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:82,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:83,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:84,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:85,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,36],17:86,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{52:[1,87]},{13:[2,24],30:[2,24],31:[2,24],32:[2,24],33:[2,24],34:[2,24],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{52:[1,88],56:[1,89],57:[1,90]},{14:[1,36],17:92,39:[1,93],40:29,41:91,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,95],37:94,40:75,59:[1,30],60:[1,31],61:[1,32]},{14:[1,96]},{39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56],53:[1,97]},{5:[2,8],7:[2,8],13:[2,8],14:[2,8],29:[2,8],30:[2,8],31:[2,8],32:[2,8],33:[2,8],34:[2,8],53:[2,8]},{14:[1,36],17:98,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{7:[1,41],13:[2,25],19:99,23:19,29:[1,24],30:[2,25],31:[2,25],32:[2,25],33:[2,25],34:[2,25]},{7:[2,36],13:[2,36],29:[2,36],30:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36]},{7:[2,2],13:[2,2],29:[2,2],30:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2]},{13:[2,31],26:100,32:[1,101],33:[2,31],34:[2,31]},{14:[1,36],17:102,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{7:[1,103],13:[2,26],31:[2,26],32:[2,26],33:[2,26],34:[2,26]},{7:[2,22],13:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[2,22]},{7:[2,20],13:[2,20],21:[1,104],31:[2,20],32:[2,20],33:[2,20],34:[2,20],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{7:[2,38],13:[2,38],29:[2,38],30:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{7:[2,40],13:[2,40],29:[2,40],30:[2,40],31:[2,40],32:[2,40],33:[2,40],34:[2,40]},{7:[2,43],13:[2,43],29:[2,43],30:[2,43],31:[2,43],32:[2,43],33:[2,43],34:[2,43]},{7:[2,44],13:[2,44],29:[2,44],30:[2,44],31:[2,44],32:[2,44],33:[2,44],34:[2,44]},{7:[2,48],11:[2,48],13:[2,48],15:[2,48],21:[2,48],29:[2,48],30:[2,48],31:[2,48],32:[2,48],33:[2,48],34:[2,48],39:[2,48],42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[1,53],49:[2,48],50:[2,48],51:[1,56],53:[2,48]},{7:[2,49],11:[2,49],13:[2,49],15:[2,49],21:[2,49],29:[2,49],30:[2,49],31:[2,49],32:[2,49],33:[2,49],34:[2,49],39:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[1,53],49:[2,49],50:[2,49],51:[1,56],53:[2,49]},{7:[2,50],11:[2,50],13:[2,50],15:[2,50],21:[2,50],29:[2,50],30:[2,50],31:[2,50],32:[2,50],33:[2,50],34:[2,50],39:[2,50],42:[1,46],43:[1,47],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[1,53],49:[2,50],50:[2,50],51:[1,56],53:[2,50]},{7:[2,51],11:[2,51],13:[2,51],15:[2,51],21:[2,51],29:[2,51],30:[2,51],31:[2,51],32:[2,51],33:[2,51],34:[2,51],39:[2,51],42:[1,46],43:[1,47],44:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[1,53],49:[2,51],50:[2,51],51:[1,56],53:[2,51]},{7:[2,52],11:[2,52],13:[2,52],15:[2,52],21:[2,52],29:[2,52],30:[2,52],31:[2,52],32:[2,52],33:[2,52],34:[2,52],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[2,52],46:[2,52],47:[2,52],48:[1,53],49:[2,52],50:[2,52],51:[1,56],53:[2,52]},{7:[2,53],11:[2,53],13:[2,53],15:[2,53],21:[2,53],29:[2,53],30:[2,53],31:[2,53],32:[2,53],33:[2,53],34:[2,53],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[2,53],46:[2,53],47:[2,53],48:[1,53],49:[2,53],50:[2,53],51:[1,56],53:[2,53]},{7:[2,54],11:[2,54],13:[2,54],15:[2,54],21:[2,54],29:[2,54],30:[2,54],31:[2,54],32:[2,54],33:[2,54],34:[2,54],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[2,54],46:[2,54],47:[2,54],48:[1,53],49:[2,54],50:[2,54],51:[1,56],53:[2,54]},{7:[2,55],11:[2,55],13:[2,55],15:[2,55],21:[2,55],29:[2,55],30:[2,55],31:[2,55],32:[2,55],33:[2,55],34:[2,55],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56],53:[2,55]},{7:[2,56],11:[2,56],13:[2,56],15:[2,56],21:[2,56],29:[2,56],30:[2,56],31:[2,56],32:[2,56],33:[2,56],34:[2,56],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[2,56],50:[2,56],51:[1,56],53:[2,56]},{7:[2,57],11:[2,57],13:[2,57],15:[2,57],21:[2,57],29:[2,57],30:[2,57],31:[2,57],32:[2,57],33:[2,57],34:[2,57],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[2,57],50:[2,57],51:[1,56],53:[2,57]},{4:105,8:3,9:4,10:5,14:[1,107],17:92,39:[1,93],40:29,41:106,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{14:[1,109],54:108},{7:[2,65],13:[2,65],15:[2,65],29:[2,65],30:[2,65],31:[2,65],32:[2,65],33:[2,65],34:[2,65]},{7:[2,67],13:[2,67],15:[2,67],29:[2,67],30:[2,67],31:[2,67],32:[2,67],33:[2,67],34:[2,67]},{7:[1,111],53:[1,110]},{7:[2,46],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56],53:[2,46]},{7:[2,47],53:[2,47]},{7:[2,68],13:[2,68],29:[2,68],30:[2,68],31:[2,68],32:[2,68],33:[2,68],34:[2,68]},{7:[2,44],11:[2,11],13:[2,44],16:[1,64],29:[2,44],30:[2,44],31:[2,44],32:[2,44],33:[2,44],34:[2,44]},{7:[2,70],11:[2,70],13:[2,70],15:[2,70],21:[2,70],29:[2,70],30:[2,70],31:[2,70],32:[2,70],33:[2,70],34:[2,70],39:[2,70],42:[2,70],43:[2,70],44:[2,70],45:[2,70],46:[2,70],47:[2,70],48:[2,70],49:[2,70],50:[2,70],51:[2,70],53:[2,70]},{7:[2,61],11:[2,61],13:[2,61],15:[2,61],21:[2,61],29:[2,61],30:[2,61],31:[2,61],32:[2,61],33:[2,61],34:[2,61],39:[2,61],42:[2,61],43:[2,61],44:[2,61],45:[2,61],46:[2,61],47:[2,61],48:[2,61],49:[2,61],50:[2,61],51:[2,61],53:[2,61]},{11:[2,9],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{13:[2,13]},{13:[2,33],27:112,33:[1,113],34:[2,33]},{14:[1,36],17:72,20:71,22:114,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{13:[2,28],32:[2,28],33:[2,28],34:[2,28],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{14:[1,36],17:72,20:115,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{7:[2,19],13:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19]},{53:[1,116]},{7:[1,111],53:[1,117]},{7:[2,71],11:[1,10],15:[1,11],16:[1,12],39:[2,71],42:[2,71],43:[2,71],44:[2,71],45:[2,71],46:[2,71],47:[2,71],48:[2,71],49:[2,71],50:[2,71],51:[2,71],52:[1,59],53:[2,71],58:[1,61]},{53:[1,118]},{53:[2,71],58:[1,61]},{7:[2,60],11:[2,60],13:[2,60],15:[2,60],21:[2,60],29:[2,60],30:[2,60],31:[2,60],32:[2,60],33:[2,60],34:[2,60],39:[2,60],42:[2,60],43:[2,60],44:[2,60],45:[2,60],46:[2,60],47:[2,60],48:[2,60],49:[2,60],50:[2,60],51:[2,60],53:[2,60]},{14:[1,36],17:119,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{13:[2,35],28:120,34:[1,121]},{14:[1,36],17:122,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{7:[1,103],13:[2,30],33:[2,30],34:[2,30]},{7:[2,21],13:[2,21],31:[2,21],32:[2,21],33:[2,21],34:[2,21]},{7:[2,58],11:[2,58],13:[2,58],15:[2,58],21:[2,58],29:[2,58],30:[2,58],31:[2,58],32:[2,58],33:[2,58],34:[2,58],39:[2,58],42:[2,58],43:[2,58],44:[2,58],45:[2,58],46:[2,58],47:[2,58],48:[2,58],49:[2,58],50:[2,58],51:[2,58],53:[2,58]},{7:[2,59],11:[2,59],13:[2,59],15:[2,59],21:[2,59],29:[2,59],30:[2,59],31:[2,59],32:[2,59],33:[2,59],34:[2,59],39:[2,59],42:[2,59],43:[2,59],44:[2,59],45:[2,59],46:[2,59],47:[2,59],48:[2,59],49:[2,59],50:[2,59],51:[2,59],53:[2,59]},{56:[1,123],57:[1,124]},{7:[2,45],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56],53:[2,45]},{13:[2,23]},{14:[1,36],17:125,40:29,52:[1,27],54:28,59:[1,30],60:[1,31],61:[1,32]},{13:[2,32],34:[2,32],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]},{7:[2,64],13:[2,64],15:[2,64],29:[2,64],30:[2,64],31:[2,64],32:[2,64],33:[2,64],34:[2,64]},{7:[2,66],13:[2,66],15:[2,66],29:[2,66],30:[2,66],31:[2,66],32:[2,66],33:[2,66],34:[2,66]},{13:[2,34],39:[1,48],42:[1,46],43:[1,47],44:[1,49],45:[1,50],46:[1,51],47:[1,52],48:[1,53],49:[1,54],50:[1,55],51:[1,56]}],
defaultActions: {7:[2,1],16:[2,17],39:[2,14],40:[2,16],99:[2,13],120:[2,23]},
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
case 1: return 60; 
break;
case 2: return 59; 
break;
case 3: return 11; 
break;
case 4: return 13; 
break;
case 5: return 52; 
break;
case 6: return 53; 
break;
case 7: return 55; 
break;
case 8: return 56; 
break;
case 9: return 57; 
break;
case 10: return 58; 
break;
case 11: return 7; 
break;
case 12: return 48; 
break;
case 13: return 39; 
break;
case 14: return 42; 
break;
case 15: return 43; 
break;
case 16: return 44; 
break;
case 17: return 51; 
break;
case 18: return 45; 
break;
case 19: return 46; 
break;
case 20: return 47; 
break;
case 21: return 49; 
break;
case 22: return 50; 
break;
case 23: return 15; 
break;
case 24: return 16; 
break;
case 25: return 21; 
break;
case 26: return 29; 
break;
case 27: return 32; 
break;
case 28: return 33; 
break;
case 29: return 30; 
break;
case 30: return 34; 
break;
case 31: return 31; 
break;
case 32: return 61; 
break;
case 33: return 14; 
break;
case 34: /* */ 
break;
case 35: return 5; 
break;
case 36:console.log(yy_.yytext);
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/i,/^(?:[\w]?"(\\.|[^\\"])*")/i,/^(?:[\w]?'(\\.|[^\\'])*')/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\]s)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?:~)/i,/^(?:\*)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\/)/i,/^(?:in)/i,/^(?:=)/i,/^(?:like)/i,/^(?:ilike)/i,/^(?:and)/i,/^(?:or)/i,/^(?:as)/i,/^(?:on)/i,/^(?:(asc|desc))/i,/^(?:where)/i,/^(?:order by)/i,/^(?:limit)/i,/^(?:group by)/i,/^(?:offset)/i,/^(?:having)/i,/^(?:[0-9][0-9.]*)/i,/^(?:[a-zA-Z][\w_]*)/i,/^(?:\s+)/i,/^(?:$)/i,/^(?:.)/i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"inclusive":true}};
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