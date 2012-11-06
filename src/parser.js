/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"table_defs":6,"queries":7,"COMMA":8,"table_def":9,"table_decl":10,"LBR":11,"body":12,"RBR":13,"VAR":14,"AS":15,"ON":16,"e":17,"fields_or_queries":18,"clauses":19,"fields":20,"field":21,"alias":22,"ref":23,"STAR":24,"or_dotted":25,"DOTTED_VAR":26,"LBRACKET":27,"LPAREN":28,"RPAREN":29,"RBRACKET_PL":30,"RBRACKET":31,"literal":32,"STRING_LITERAL_S":33,"STRING_LITERAL_D":34,"NUM":35,"by_e":36,"ORD":37,"by_es":38,"es":39,"MINUS":40,"PLUS":41,"DIV":42,"AND":43,"OR":44,"ILIKE":45,"LIKE":46,"EQ":47,"IN":48,"where":49,"group_by":50,"having":51,"order_by":52,"limit":53,"offset":54,"WHERE":55,"GROUP_BY":56,"HAVING":57,"ORDER_BY":58,"LIMIT":59,"OFFSET":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"COMMA",11:"LBR",13:"RBR",14:"VAR",15:"AS",16:"ON",24:"STAR",26:"DOTTED_VAR",27:"LBRACKET",28:"LPAREN",29:"RPAREN",30:"RBRACKET_PL",31:"RBRACKET",33:"STRING_LITERAL_S",34:"STRING_LITERAL_D",35:"NUM",37:"ORD",40:"MINUS",41:"PLUS",42:"DIV",43:"AND",44:"OR",45:"ILIKE",46:"LIKE",47:"EQ",48:"IN",55:"WHERE",56:"GROUP_BY",57:"HAVING",58:"ORDER_BY",59:"LIMIT",60:"OFFSET"},
productions_: [0,[3,2],[4,1],[7,3],[7,1],[6,2],[6,1],[9,4],[9,3],[10,5],[10,3],[10,3],[10,1],[12,2],[12,1],[12,1],[18,2],[18,1],[20,3],[20,1],[21,3],[21,1],[21,1],[21,3],[21,1],[25,1],[25,1],[23,6],[23,3],[23,6],[23,3],[22,1],[22,1],[32,1],[32,1],[32,1],[36,2],[36,1],[38,3],[38,1],[39,3],[39,1],[39,1],[17,1],[17,1],[17,1],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[19,6],[19,5],[19,4],[19,3],[19,2],[19,1],[19,5],[19,4],[19,3],[19,2],[19,4],[19,3],[19,3],[19,2],[19,3],[19,2],[19,2],[19,5],[19,4],[19,3],[19,2],[19,1],[19,4],[19,3],[19,2],[19,3],[19,2],[19,2],[19,4],[19,3],[19,2],[19,1],[19,3],[19,2],[19,2],[19,3],[19,2],[19,1],[19,2],[19,2],[19,1],[19,1],[49,2],[50,2],[51,2],[52,2],[53,2],[54,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new t.Query($$[$0]); 
break;
case 3: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 4: this.$ = [$$[$0]]; 
break;
case 5: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 6: this.$ = [$$[$0]]; 
break;
case 7:
      this.$ = new t.Table(
          $$[$0-3].name
        , $$[$0-1].selects
        , $$[$0-1].clauses
        , $$[$0-1].posts
        , $$[$0-3]
      );
    
break;
case 8: this.$ = new t.Table($$[$0-2].name, [], [], [], $$[$0-2]); 
break;
case 9: this.$ = { name: $$[$0-4], alias: $$[$0-2], join: $$[$0] }; 
break;
case 10: this.$ = { name: $$[$0-2], join: $$[$0] }; 
break;
case 11: this.$ = { name: $$[$0-2], alias: $$[$0] }; 
break;
case 12: this.$ = { name: $$[$0] }; 
break;
case 13: this.$ = makeBody($$[$0-1], { clauses: $$[$0] }); 
break;
case 14: this.$ = makeBody($$[$0]); 
break;
case 15: this.$ = makeBody({ clauses: $$[$0] }); 
break;
case 16: this.$ = { selects: $$[$0-1], posts: $$[$0] }; 
break;
case 17: this.$ = { selects: $$[$0] }; 
break;
case 18: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 19: this.$ = [$$[$0]]; 
break;
case 20: this.$ = new t.Field($$[$0-2], $$[$0]); 
break;
case 21: this.$ = new t.Field($$[$0]); 
break;
case 22: this.$ = $$[$0]; 
break;
case 23: $$[$0-2].alias = $$[$0]; this.$ = $$[$0-2]; 
break;
case 24: this.$ = '*'; 
break;
case 25: this.$ = $$[$0]; 
break;
case 26: this.$ = $$[$0]; 
break;
case 27: this.$ = new t.PluralRef($$[$0-4], $$[$0-2]); 
break;
case 28: this.$ = new t.PluralRef($$[$0-1], null); 
break;
case 29: this.$ = new t.SingleRef($$[$0-4], $$[$0-2]); 
break;
case 30: this.$ = new t.SingleRef($$[$0-1]); 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0]; 
break;
case 34: this.$ = $$[$0]; 
break;
case 35: this.$ = parseFloat($$[$0], 10); 
break;
case 36: this.$ = [$$[$0-1], $$[$0]]; 
break;
case 37: this.$ = [$$[$0]]; 
break;
case 38: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 39: this.$ = [$$[$0]]; 
break;
case 40: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 41: this.$ = [$$[$0]]; 
break;
case 42: this.$ = [$$[$0]]; 
break;
case 43: this.$ = $$[$0]; 
break;
case 44: this.$ = $$[$0]; 
break;
case 45: this.$ = $$[$0]; 
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
case 57: this.$ = { where: $$[$0-5]
           , group_by: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 58: this.$ = { where: $$[$0-4]
           , group_by: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 59: this.$ = { where: $$[$0-3]
           , group_by: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 60: this.$ = { where: $$[$0-2]
           , group_by: $$[$0-1]
           , having: $$[$0] }; 
break;
case 61: this.$ = { where: $$[$0-1]
           , group_by: $$[$0] }; 
break;
case 62: this.$ = { where: $$[$0] }; 
break;
case 63: this.$ = { where: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 64: this.$ = { where: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 65: this.$ = { where: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 66: this.$ = { where: $$[$0-1]
           , having: $$[$0] }; 
break;
case 67: this.$ = { where: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 68: this.$ = { where: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 69: this.$ = { where: $$[$0-2]
           , order_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 70: this.$ = { where: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 71: this.$ = { where: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 72: this.$ = { where: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 73: this.$ = { where: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 74: this.$ = { group_by: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 75: this.$ = { group_by: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 76: this.$ = { group_by: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 77: this.$ = { group_by: $$[$0-1]
           , having: $$[$0] }; 
break;
case 78: this.$ = { group_by: $$[$0] }; 
break;
case 79: this.$ = { group_by: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 80: this.$ = { group_by: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 81: this.$ = { group_by: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 82: this.$ = { wroup_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 83: this.$ = { group_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 84: this.$ = { group_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 85: this.$ = { having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 86: this.$ = { having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 87: this.$ = { having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 88: this.$ = { having: $$[$0] }; 
break;
case 89: this.$ = { having: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 90: this.$ = { having: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 91: this.$ = { having: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 92: this.$ = { order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 93: this.$ = { order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 94: this.$ = { order_by: $$[$0] }; 
break;
case 95: this.$ = { order_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 96: this.$ = { limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 97: this.$ = { limit: $$[$0] }; 
break;
case 98: this.$ = { offset: $$[$0] }; 
break;
case 99: this.$ = $$[$0]; 
break;
case 100: this.$ = $$[$0]; 
break;
case 101: this.$ = $$[$0]; 
break;
case 102: this.$ = $$[$0]; 
break;
case 103: this.$ = $$[$0]; 
break;
case 104: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,6:3,9:4,10:5,14:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2],8:[2,2],13:[2,2],55:[2,2],56:[2,2],57:[2,2],58:[2,2],59:[2,2],60:[2,2]},{5:[2,6],6:8,8:[2,6],9:4,10:5,13:[2,6],14:[1,6],55:[2,6],56:[2,6],57:[2,6],58:[2,6],59:[2,6],60:[2,6]},{11:[1,9]},{11:[2,12],15:[1,10],16:[1,11]},{1:[2,1]},{5:[2,5],8:[2,5],13:[2,5],55:[2,5],56:[2,5],57:[2,5],58:[2,5],59:[2,5],60:[2,5]},{12:12,13:[1,13],14:[1,34],17:30,18:14,19:15,20:16,21:23,23:31,24:[1,32],26:[1,35],27:[1,37],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40],49:17,50:18,51:19,52:20,53:21,54:22,55:[1,24],56:[1,25],57:[1,26],58:[1,27],59:[1,28],60:[1,29]},{14:[1,41]},{14:[1,34],17:42,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{13:[1,43]},{5:[2,8],8:[2,8],13:[2,8],14:[2,8],55:[2,8],56:[2,8],57:[2,8],58:[2,8],59:[2,8],60:[2,8]},{13:[2,14],19:44,49:17,50:18,51:19,52:20,53:21,54:22,55:[1,24],56:[1,25],57:[1,26],58:[1,27],59:[1,28],60:[1,29]},{13:[2,15]},{4:46,6:3,7:45,9:4,10:5,13:[2,17],14:[1,6],55:[2,17],56:[2,17],57:[2,17],58:[2,17],59:[2,17],60:[2,17]},{13:[2,62],50:47,51:48,52:49,53:50,54:51,56:[1,25],57:[1,26],58:[1,27],59:[1,28],60:[1,29]},{13:[2,78],51:52,52:53,53:54,54:55,57:[1,26],58:[1,27],59:[1,28],60:[1,29]},{13:[2,88],52:56,53:57,54:58,58:[1,27],59:[1,28],60:[1,29]},{13:[2,94],53:59,54:60,59:[1,28],60:[1,29]},{13:[2,97],54:61,60:[1,29]},{13:[2,98]},{8:[1,62],13:[2,19],14:[2,19],55:[2,19],56:[2,19],57:[2,19],58:[2,19],59:[2,19],60:[2,19]},{14:[1,34],17:63,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:66,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40],36:65,38:64},{14:[1,34],17:67,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:66,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40],36:65,38:68},{14:[1,34],17:69,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:70,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{8:[2,21],13:[2,21],14:[2,21],15:[1,71],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,21],56:[2,21],57:[2,21],58:[2,21],59:[2,21],60:[2,21]},{8:[2,22],13:[2,22],14:[2,22],15:[1,82],55:[2,22],56:[2,22],57:[2,22],58:[2,22],59:[2,22],60:[2,22]},{8:[2,24],13:[2,24],14:[2,24],55:[2,24],56:[2,24],57:[2,24],58:[2,24],59:[2,24],60:[2,24]},{8:[2,43],11:[2,43],13:[2,43],14:[2,43],15:[2,43],24:[2,43],29:[2,43],37:[2,43],40:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43],45:[2,43],46:[2,43],47:[2,43],48:[2,43],55:[2,43],56:[2,43],57:[2,43],58:[2,43],59:[2,43],60:[2,43]},{8:[2,44],11:[2,44],13:[2,44],14:[2,44],15:[2,44],24:[2,44],29:[2,44],37:[2,44],40:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44],45:[2,44],46:[2,44],47:[2,44],48:[2,44],55:[2,44],56:[2,44],57:[2,44],58:[2,44],59:[2,44],60:[2,44]},{8:[2,45],11:[2,45],13:[2,45],14:[2,45],15:[2,45],24:[2,45],29:[2,45],37:[2,45],40:[2,45],41:[2,45],42:[2,45],43:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45],55:[2,45],56:[2,45],57:[2,45],58:[2,45],59:[2,45],60:[2,45]},{14:[1,34],17:84,24:[1,85],26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40],39:83},{14:[1,86]},{8:[2,33],11:[2,33],13:[2,33],14:[2,33],15:[2,33],24:[2,33],29:[2,33],37:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],46:[2,33],47:[2,33],48:[2,33],55:[2,33],56:[2,33],57:[2,33],58:[2,33],59:[2,33],60:[2,33]},{8:[2,34],11:[2,34],13:[2,34],14:[2,34],15:[2,34],24:[2,34],29:[2,34],37:[2,34],40:[2,34],41:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],47:[2,34],48:[2,34],55:[2,34],56:[2,34],57:[2,34],58:[2,34],59:[2,34],60:[2,34]},{8:[2,35],11:[2,35],13:[2,35],14:[2,35],15:[2,35],24:[2,35],29:[2,35],37:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],47:[2,35],48:[2,35],55:[2,35],56:[2,35],57:[2,35],58:[2,35],59:[2,35],60:[2,35]},{11:[2,11],16:[1,87]},{11:[2,10],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81]},{5:[2,7],8:[2,7],13:[2,7],14:[2,7],55:[2,7],56:[2,7],57:[2,7],58:[2,7],59:[2,7],60:[2,7]},{13:[2,13]},{13:[2,16],55:[2,16],56:[2,16],57:[2,16],58:[2,16],59:[2,16],60:[2,16]},{8:[1,88],13:[2,4],55:[2,4],56:[2,4],57:[2,4],58:[2,4],59:[2,4],60:[2,4]},{13:[2,61],51:89,57:[1,26]},{13:[2,66],52:90,58:[1,27]},{13:[2,70],53:91,54:92,59:[1,28],60:[1,29]},{13:[2,72],54:93,60:[1,29]},{13:[2,73]},{13:[2,77],52:94,58:[1,27]},{13:[2,81],53:95,59:[1,28]},{13:[2,83],54:96,60:[1,29]},{13:[2,84]},{13:[2,87],53:97,59:[1,28]},{13:[2,90],54:98,60:[1,29]},{13:[2,91]},{13:[2,93],54:99,60:[1,29]},{13:[2,95]},{13:[2,96]},{14:[1,34],17:30,20:100,21:23,23:31,24:[1,32],26:[1,35],27:[1,37],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{13:[2,99],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],56:[2,99],57:[2,99],58:[2,99],59:[2,99],60:[2,99]},{13:[2,100],57:[2,100],58:[2,100],59:[2,100],60:[2,100]},{8:[1,101],13:[2,39],57:[2,39],58:[2,39],59:[2,39],60:[2,39]},{8:[2,37],13:[2,37],24:[1,74],37:[1,102],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],57:[2,37],58:[2,37],59:[2,37],60:[2,37]},{13:[2,101],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],58:[2,101],59:[2,101],60:[2,101]},{13:[2,102],59:[2,102],60:[2,102]},{13:[2,103],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],60:[2,103]},{13:[2,104],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81]},{14:[1,105],22:103,32:104,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:106,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:107,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:108,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:109,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:110,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:111,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:112,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:113,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:114,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,34],17:115,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{14:[1,105],22:116,32:104,33:[1,38],34:[1,39],35:[1,40]},{29:[1,117]},{8:[1,118],24:[1,74],29:[2,41],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81]},{29:[2,42]},{28:[1,119],30:[1,120],31:[1,121]},{14:[1,34],17:122,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40]},{4:46,6:3,7:123,9:4,10:5,14:[1,6]},{13:[2,60],52:124,58:[1,27]},{13:[2,65],53:125,59:[1,28]},{13:[2,68],54:126,60:[1,29]},{13:[2,69]},{13:[2,71]},{13:[2,76],53:127,59:[1,28]},{13:[2,80],54:128,60:[1,29]},{13:[2,82]},{13:[2,86],54:129,60:[1,29]},{13:[2,89]},{13:[2,92]},{13:[2,18],14:[2,18],55:[2,18],56:[2,18],57:[2,18],58:[2,18],59:[2,18],60:[2,18]},{14:[1,34],17:66,26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40],36:65,38:130},{8:[2,36],13:[2,36],57:[2,36],58:[2,36],59:[2,36],60:[2,36]},{8:[2,20],13:[2,20],14:[2,20],55:[2,20],56:[2,20],57:[2,20],58:[2,20],59:[2,20],60:[2,20]},{8:[2,31],13:[2,31],14:[2,31],55:[2,31],56:[2,31],57:[2,31],58:[2,31],59:[2,31],60:[2,31]},{8:[2,32],13:[2,32],14:[2,32],55:[2,32],56:[2,32],57:[2,32],58:[2,32],59:[2,32],60:[2,32]},{8:[2,47],11:[2,47],13:[2,47],14:[2,47],15:[2,47],24:[1,74],29:[2,47],37:[2,47],40:[2,47],41:[2,47],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,47],56:[2,47],57:[2,47],58:[2,47],59:[2,47],60:[2,47]},{8:[2,48],11:[2,48],13:[2,48],14:[2,48],15:[2,48],24:[1,74],29:[2,48],37:[2,48],40:[2,48],41:[2,48],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,48],56:[2,48],57:[2,48],58:[2,48],59:[2,48],60:[2,48]},{8:[2,49],11:[2,49],13:[2,49],14:[2,49],15:[2,49],24:[2,49],29:[2,49],37:[2,49],40:[2,49],41:[2,49],42:[2,49],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,49],56:[2,49],57:[2,49],58:[2,49],59:[2,49],60:[2,49]},{8:[2,50],11:[2,50],13:[2,50],14:[2,50],15:[2,50],24:[2,50],29:[2,50],37:[2,50],40:[2,50],41:[2,50],42:[2,50],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,50],56:[2,50],57:[2,50],58:[2,50],59:[2,50],60:[2,50]},{8:[2,51],11:[2,51],13:[2,51],14:[2,51],15:[2,51],24:[2,51],29:[2,51],37:[2,51],40:[2,51],41:[2,51],42:[2,51],43:[2,51],44:[2,51],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,51],56:[2,51],57:[2,51],58:[2,51],59:[2,51],60:[2,51]},{8:[2,52],11:[2,52],13:[2,52],14:[2,52],15:[2,52],24:[2,52],29:[2,52],37:[2,52],40:[2,52],41:[2,52],42:[2,52],43:[2,52],44:[2,52],45:[1,78],46:[1,79],47:[1,80],48:[1,81],55:[2,52],56:[2,52],57:[2,52],58:[2,52],59:[2,52],60:[2,52]},{8:[2,53],11:[2,53],13:[2,53],14:[2,53],15:[2,53],24:[2,53],29:[2,53],37:[2,53],40:[2,53],41:[2,53],42:[2,53],43:[2,53],44:[2,53],45:[2,53],46:[2,53],47:[2,53],48:[2,53],55:[2,53],56:[2,53],57:[2,53],58:[2,53],59:[2,53],60:[2,53]},{8:[2,54],11:[2,54],13:[2,54],14:[2,54],15:[2,54],24:[2,54],29:[2,54],37:[2,54],40:[2,54],41:[2,54],42:[2,54],43:[2,54],44:[2,54],45:[2,54],46:[2,54],47:[2,54],48:[2,54],55:[2,54],56:[2,54],57:[2,54],58:[2,54],59:[2,54],60:[2,54]},{8:[2,55],11:[2,55],13:[2,55],14:[2,55],15:[2,55],24:[2,55],29:[2,55],37:[2,55],40:[2,55],41:[2,55],42:[2,55],43:[2,55],44:[2,55],45:[2,55],46:[2,55],47:[2,55],48:[2,55],55:[2,55],56:[2,55],57:[2,55],58:[2,55],59:[2,55],60:[2,55]},{8:[2,56],11:[2,56],13:[2,56],14:[2,56],15:[2,56],24:[2,56],29:[2,56],37:[2,56],40:[2,56],41:[2,56],42:[2,56],43:[2,56],44:[2,56],45:[2,56],46:[2,56],47:[2,56],48:[2,56],55:[2,56],56:[2,56],57:[2,56],58:[2,56],59:[2,56],60:[2,56]},{8:[2,23],13:[2,23],14:[2,23],55:[2,23],56:[2,23],57:[2,23],58:[2,23],59:[2,23],60:[2,23]},{8:[2,46],11:[2,46],13:[2,46],14:[2,46],15:[2,46],24:[2,46],29:[2,46],37:[2,46],40:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46],55:[2,46],56:[2,46],57:[2,46],58:[2,46],59:[2,46],60:[2,46]},{14:[1,34],17:84,24:[1,85],26:[1,35],28:[1,36],32:33,33:[1,38],34:[1,39],35:[1,40],39:131},{14:[1,134],25:132,26:[1,133]},{8:[2,28],13:[2,28],14:[2,28],15:[2,28],55:[2,28],56:[2,28],57:[2,28],58:[2,28],59:[2,28],60:[2,28]},{8:[2,30],13:[2,30],14:[2,30],15:[2,30],55:[2,30],56:[2,30],57:[2,30],58:[2,30],59:[2,30],60:[2,30]},{11:[2,9],24:[1,74],40:[1,72],41:[1,73],42:[1,75],43:[1,76],44:[1,77],45:[1,78],46:[1,79],47:[1,80],48:[1,81]},{13:[2,3],55:[2,3],56:[2,3],57:[2,3],58:[2,3],59:[2,3],60:[2,3]},{13:[2,59],53:135,59:[1,28]},{13:[2,64],54:136,60:[1,29]},{13:[2,67]},{13:[2,75],54:137,60:[1,29]},{13:[2,79]},{13:[2,85]},{13:[2,38],57:[2,38],58:[2,38],59:[2,38],60:[2,38]},{29:[2,40]},{29:[1,138]},{29:[2,25]},{29:[2,26]},{13:[2,58],54:139,60:[1,29]},{13:[2,63]},{13:[2,74]},{30:[1,140],31:[1,141]},{13:[2,57]},{8:[2,27],13:[2,27],14:[2,27],15:[2,27],55:[2,27],56:[2,27],57:[2,27],58:[2,27],59:[2,27],60:[2,27]},{8:[2,29],13:[2,29],14:[2,29],15:[2,29],55:[2,29],56:[2,29],57:[2,29],58:[2,29],59:[2,29],60:[2,29]}],
defaultActions: {7:[2,1],15:[2,15],22:[2,98],44:[2,13],51:[2,73],55:[2,84],58:[2,91],60:[2,95],61:[2,96],85:[2,42],92:[2,69],93:[2,71],96:[2,82],98:[2,89],99:[2,92],126:[2,67],128:[2,79],129:[2,85],131:[2,40],133:[2,25],134:[2,26],136:[2,63],137:[2,74],139:[2,57]},
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


/* AQL Grammar */

var t = require('./types')
  , _ = require('underscore');

function makeBody() {
  var args = [].slice.call(arguments)
    , defs = { selects: [], posts: [], clauses: [] };
  return _.extend.apply(null, args);
}


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
case 1: return 34; 
break;
case 2: return 33; 
break;
case 3: return 11; 
break;
case 4: return 13; 
break;
case 5: return 28; 
break;
case 6: return 29; 
break;
case 7: return 27; 
break;
case 8: return 30; 
break;
case 9: return 31; 
break;
case 10: return 'PERIOD'; 
break;
case 11: return 8; 
break;
case 12: return 'TILDE'; 
break;
case 13: return 24; 
break;
case 14: return 40; 
break;
case 15: return 41; 
break;
case 16: return 42; 
break;
case 17: return 48; 
break;
case 18: return 47; 
break;
case 19: return 46; 
break;
case 20: return 45; 
break;
case 21: return 43; 
break;
case 22: return 44; 
break;
case 23: return 15; 
break;
case 24: return 16; 
break;
case 25: return 37; 
break;
case 26: return 55; 
break;
case 27: return 58; 
break;
case 28: return 59; 
break;
case 29: return 56; 
break;
case 30: return 60; 
break;
case 31: return 57; 
break;
case 32: return 26; 
break;
case 33: return 14; 
break;
case 34: return 35; 
break;
case 35: /* */  
break;
case 36: return 5; 
break;
case 37:console.log(yy_.yytext);
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/i,/^(?:[\w]?"(\\.|[^\\"])*")/i,/^(?:[\w]?'(\\.|[^\\'])*')/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\]s)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?:~)/i,/^(?:\*)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\/)/i,/^(?:in)/i,/^(?:=)/i,/^(?:like)/i,/^(?:ilike)/i,/^(?:and)/i,/^(?:or)/i,/^(?:as)/i,/^(?:on)/i,/^(?:(asc|desc))/i,/^(?:where)/i,/^(?:order by)/i,/^(?:limit)/i,/^(?:group by)/i,/^(?:offset)/i,/^(?:having)/i,/^(?:([a-zA-Z][\w_]*)\.([a-zA-Z][\w_]*))/i,/^(?:([a-zA-Z][\w_]*))/i,/^(?:([0-9])([0-9.])*)/i,/^(?:\s+)/i,/^(?:$)/i,/^(?:.)/i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"inclusive":true}};
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