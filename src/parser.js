/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"table_defs":6,"queries":7,"COMMA":8,"table_def":9,"table_decl":10,"body":11,"VAR":12,"LBR":13,"table_inner":14,"RBR":15,"AS":16,"ON":17,"e":18,"fields_or_queries":19,"clauses":20,"fields":21,"field":22,"alias":23,"ref":24,"STAR":25,"LBRACKET":26,"LPAREN":27,"or_dotted":28,"RPAREN":29,"RBRACKET_PL":30,"RBRACKET":31,"DOTTED_VAR":32,"literal":33,"STRING_LITERAL_S":34,"STRING_LITERAL_D":35,"NUM":36,"by_e":37,"ORD":38,"by_es":39,"es":40,"MINUS":41,"PLUS":42,"DIV":43,"AND":44,"OR":45,"ILIKE":46,"LIKE":47,"EQ":48,"IN":49,"where":50,"group_by":51,"having":52,"order_by":53,"limit":54,"offset":55,"WHERE":56,"GROUP_BY":57,"HAVING":58,"ORDER_BY":59,"LIMIT":60,"OFFSET":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"COMMA",12:"VAR",13:"LBR",15:"RBR",16:"AS",17:"ON",25:"STAR",26:"LBRACKET",27:"LPAREN",29:"RPAREN",30:"RBRACKET_PL",31:"RBRACKET",32:"DOTTED_VAR",34:"STRING_LITERAL_S",35:"STRING_LITERAL_D",36:"NUM",38:"ORD",41:"MINUS",42:"PLUS",43:"DIV",44:"AND",45:"OR",46:"ILIKE",47:"LIKE",48:"EQ",49:"IN",56:"WHERE",57:"GROUP_BY",58:"HAVING",59:"ORDER_BY",60:"LIMIT",61:"OFFSET"},
productions_: [0,[3,2],[4,1],[7,3],[7,1],[6,2],[6,1],[9,2],[9,2],[11,3],[11,2],[10,5],[10,3],[10,3],[14,2],[14,1],[14,1],[19,1],[19,2],[19,1],[21,3],[21,1],[22,3],[22,1],[22,1],[22,3],[22,1],[24,6],[24,3],[24,6],[24,3],[28,1],[28,1],[23,1],[23,1],[33,1],[33,1],[33,1],[37,2],[37,1],[39,3],[39,1],[40,3],[40,1],[40,1],[40,1],[18,1],[18,1],[18,1],[18,3],[18,4],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[20,6],[20,5],[20,4],[20,3],[20,2],[20,1],[20,5],[20,4],[20,3],[20,2],[20,4],[20,3],[20,3],[20,2],[20,3],[20,2],[20,2],[20,5],[20,4],[20,3],[20,2],[20,1],[20,4],[20,3],[20,2],[20,3],[20,2],[20,2],[20,4],[20,3],[20,2],[20,1],[20,3],[20,2],[20,2],[20,3],[20,2],[20,1],[20,2],[20,2],[20,1],[20,1],[50,2],[51,2],[52,2],[53,2],[54,2],[55,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = new t.Query($$[$0]);
break;
case 3:this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 4:this.$ = [$$[$0]];;
break;
case 5:this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 6:this.$ = [$$[$0]];
break;
case 7:this.$ = new t.Table($$[$0-1].name, $$[$0].selects, $$[$0].clauses, $$[$0].posts, $$[$0-1]);
break;
case 8:this.$ = new t.Table($$[$0-1], $$[$0].selects, $$[$0].clauses, $$[$0].posts);
break;
case 9:this.$ = $$[$0-1];
break;
case 10:this.$ = {};
break;
case 11:this.$ = { name: $$[$0-4], alias: $$[$0-2], join: $$[$0] };
break;
case 12:this.$ = { name: $$[$0-2], join: $$[$0] };
break;
case 13:this.$ = { name: $$[$0-2], alias: $$[$0] };
break;
case 14:this.$ = makeBody($$[$0-1], { clauses: $$[$0] });
break;
case 15:this.$ = makeBody($$[$0]);
break;
case 16:this.$ = makeBody({ clauses: $$[$0] });
break;
case 17:this.$ = { posts: $$[$0] };
break;
case 18:this.$ = { selects: $$[$0-1], posts: $$[$0] };
break;
case 19:this.$ = { selects: $$[$0] };
break;
case 20:this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 21:this.$ = [$$[$0]];
break;
case 22:this.$ = new t.Field($$[$0-2], $$[$0]);
break;
case 23:this.$ = new t.Field($$[$0]);
break;
case 24:this.$ = $$[$0];
break;
case 25: $$[$0-2].alias = $$[$0]; this.$ = $$[$0-2]; 
break;
case 26:this.$ = '*';
break;
case 27:this.$ = new t.PluralRef($$[$0-4], $$[$0-2]);
break;
case 28:this.$ = new t.PluralRef($$[$0-1], null);
break;
case 29:this.$ = new t.SingleRef($$[$0-4], $$[$0-2]);
break;
case 30:this.$ = new t.SingleRef($$[$0-1]);
break;
case 31:this.$ = $$[$0];
break;
case 32:this.$ = $$[$0];
break;
case 33:this.$ = $$[$0];
break;
case 34:this.$ = $$[$0];
break;
case 35:this.$ = $$[$0];
break;
case 36:this.$ = $$[$0];
break;
case 37:this.$ = parseFloat($$[$0], 10);
break;
case 38:this.$ = [$$[$0-1], $$[$0]];
break;
case 39:this.$ = [$$[$0]];
break;
case 40:this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 41:this.$ = [$$[$0]];
break;
case 42:this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 43:this.$ = [$$[$0]];
break;
case 44:this.$ = [$$[$0]];
break;
case 45:this.$ = [$$[$0]];
break;
case 46:this.$ = $$[$0];
break;
case 47:this.$ = $$[$0];
break;
case 48:this.$ = $$[$0];
break;
case 49: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 50: this.$ = [$$[$0-3], $$[$0-2], $$[$0-1]]; 
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
case 58: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 59: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 60: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 61: this.$ = { where: $$[$0-5]
           , group_by: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 62: this.$ = { where: $$[$0-4]
           , group_by: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 63: this.$ = { where: $$[$0-3]
           , group_by: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 64: this.$ = { where: $$[$0-2]
           , group_by: $$[$0-1]
           , having: $$[$0] }; 
break;
case 65: this.$ = { where: $$[$0-1]
           , group_by: $$[$0] }; 
break;
case 66: this.$ = { where: $$[$0] }; 
break;
case 67: this.$ = { where: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 68: this.$ = { where: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 69: this.$ = { where: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 70: this.$ = { where: $$[$0-1]
           , having: $$[$0] }; 
break;
case 71: this.$ = { where: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 72: this.$ = { where: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 73: this.$ = { where: $$[$0-2]
           , order_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 74: this.$ = { where: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 75: this.$ = { where: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 76: this.$ = { where: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 77: this.$ = { where: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 78: this.$ = { group_by: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 79: this.$ = { group_by: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 80: this.$ = { group_by: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 81: this.$ = { group_by: $$[$0-1]
           , having: $$[$0] }; 
break;
case 82: this.$ = { group_by: $$[$0] }; 
break;
case 83: this.$ = { group_by: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 84: this.$ = { group_by: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 85: this.$ = { group_by: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 86: this.$ = { wroup_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 87: this.$ = { group_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 88: this.$ = { group_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 89: this.$ = { having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 90: this.$ = { having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 91: this.$ = { having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 92: this.$ = { having: $$[$0] }; 
break;
case 93: this.$ = { having: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 94: this.$ = { having: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 95: this.$ = { having: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 96: this.$ = { order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 97: this.$ = { order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 98: this.$ = { order_by: $$[$0] }; 
break;
case 99: this.$ = { order_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 100: this.$ = { limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 101: this.$ = { limit: $$[$0] }; 
break;
case 102: this.$ = { offset: $$[$0] }; 
break;
case 103:this.$ = $$[$0];
break;
case 104:this.$ = $$[$0];
break;
case 105:this.$ = $$[$0];
break;
case 106:this.$ = $$[$0];
break;
case 107:this.$ = $$[$0];
break;
case 108:this.$ = $$[$0];
break;
}
},
table: [{3:1,4:2,6:3,9:4,10:5,12:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2],8:[2,2],15:[2,2],29:[2,2],56:[2,2],57:[2,2],58:[2,2],59:[2,2],60:[2,2],61:[2,2]},{5:[2,6],6:8,8:[2,6],9:4,10:5,12:[1,6],15:[2,6],29:[2,6],56:[2,6],57:[2,6],58:[2,6],59:[2,6],60:[2,6],61:[2,6]},{11:9,13:[1,10]},{11:11,13:[1,10],16:[1,12],17:[1,13]},{1:[2,1]},{5:[2,5],8:[2,5],15:[2,5],29:[2,5],56:[2,5],57:[2,5],58:[2,5],59:[2,5],60:[2,5],61:[2,5]},{5:[2,7],8:[2,7],12:[2,7],15:[2,7],29:[2,7],56:[2,7],57:[2,7],58:[2,7],59:[2,7],60:[2,7],61:[2,7]},{4:26,6:3,7:18,9:4,10:5,12:[1,38],14:14,15:[1,15],18:34,19:16,20:17,21:19,22:27,24:35,25:[1,36],26:[1,41],27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],50:20,51:21,52:22,53:23,54:24,55:25,56:[1,28],57:[1,29],58:[1,30],59:[1,31],60:[1,32],61:[1,33]},{5:[2,8],8:[2,8],12:[2,8],15:[2,8],29:[2,8],56:[2,8],57:[2,8],58:[2,8],59:[2,8],60:[2,8],61:[2,8]},{12:[1,45]},{12:[1,47],18:46,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{15:[1,48]},{5:[2,10],8:[2,10],12:[2,10],15:[2,10],29:[2,10],56:[2,10],57:[2,10],58:[2,10],59:[2,10],60:[2,10],61:[2,10]},{15:[2,15],20:49,50:20,51:21,52:22,53:23,54:24,55:25,56:[1,28],57:[1,29],58:[1,30],59:[1,31],60:[1,32],61:[1,33]},{15:[2,16]},{15:[2,17],56:[2,17],57:[2,17],58:[2,17],59:[2,17],60:[2,17],61:[2,17]},{4:26,6:3,7:50,9:4,10:5,12:[1,6],15:[2,19],56:[2,19],57:[2,19],58:[2,19],59:[2,19],60:[2,19],61:[2,19]},{15:[2,66],51:51,52:52,53:53,54:54,55:55,57:[1,29],58:[1,30],59:[1,31],60:[1,32],61:[1,33]},{15:[2,82],52:56,53:57,54:58,55:59,58:[1,30],59:[1,31],60:[1,32],61:[1,33]},{15:[2,92],53:60,54:61,55:62,59:[1,31],60:[1,32],61:[1,33]},{15:[2,98],54:63,55:64,60:[1,32],61:[1,33]},{15:[2,101],55:65,61:[1,33]},{15:[2,102]},{8:[1,66],15:[2,4],56:[2,4],57:[2,4],58:[2,4],59:[2,4],60:[2,4],61:[2,4]},{8:[1,67],12:[2,21],15:[2,21],56:[2,21],57:[2,21],58:[2,21],59:[2,21],60:[2,21],61:[2,21]},{12:[1,47],18:68,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:71,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],37:70,39:69},{12:[1,47],18:72,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:71,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],37:70,39:73},{12:[1,47],18:74,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:75,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{8:[2,23],12:[2,23],15:[2,23],16:[1,76],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,23],57:[2,23],58:[2,23],59:[2,23],60:[2,23],61:[2,23]},{8:[2,24],12:[2,24],15:[2,24],16:[1,87],56:[2,24],57:[2,24],58:[2,24],59:[2,24],60:[2,24],61:[2,24]},{8:[2,26],12:[2,26],15:[2,26],56:[2,26],57:[2,26],58:[2,26],59:[2,26],60:[2,26],61:[2,26]},{8:[2,46],12:[2,46],13:[2,46],15:[2,46],16:[2,46],25:[2,46],29:[2,46],38:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46],49:[2,46],56:[2,46],57:[2,46],58:[2,46],59:[2,46],60:[2,46],61:[2,46]},{8:[2,47],11:11,12:[2,47],13:[1,10],15:[2,47],16:[2,47],17:[1,13],25:[2,47],27:[1,88],29:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47],48:[2,47],49:[2,47],56:[2,47],57:[2,47],58:[2,47],59:[2,47],60:[2,47],61:[2,47]},{8:[2,48],12:[2,48],13:[2,48],15:[2,48],16:[2,48],25:[2,48],29:[2,48],38:[2,48],41:[2,48],42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[2,48],49:[2,48],56:[2,48],57:[2,48],58:[2,48],59:[2,48],60:[2,48],61:[2,48]},{4:92,6:3,9:4,10:5,12:[1,38],18:90,25:[1,91],27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],40:89},{12:[1,93]},{8:[2,35],12:[2,35],13:[2,35],15:[2,35],16:[2,35],25:[2,35],29:[2,35],38:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],47:[2,35],48:[2,35],49:[2,35],56:[2,35],57:[2,35],58:[2,35],59:[2,35],60:[2,35],61:[2,35]},{8:[2,36],12:[2,36],13:[2,36],15:[2,36],16:[2,36],25:[2,36],29:[2,36],38:[2,36],41:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],47:[2,36],48:[2,36],49:[2,36],56:[2,36],57:[2,36],58:[2,36],59:[2,36],60:[2,36],61:[2,36]},{8:[2,37],12:[2,37],13:[2,37],15:[2,37],16:[2,37],25:[2,37],29:[2,37],38:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],47:[2,37],48:[2,37],49:[2,37],56:[2,37],57:[2,37],58:[2,37],59:[2,37],60:[2,37],61:[2,37]},{13:[2,13],17:[1,94]},{13:[2,12],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86]},{8:[2,47],12:[2,47],13:[2,47],15:[2,47],16:[2,47],25:[2,47],27:[1,88],29:[2,47],38:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47],48:[2,47],49:[2,47],56:[2,47],57:[2,47],58:[2,47],59:[2,47],60:[2,47],61:[2,47]},{5:[2,9],8:[2,9],12:[2,9],15:[2,9],29:[2,9],56:[2,9],57:[2,9],58:[2,9],59:[2,9],60:[2,9],61:[2,9]},{15:[2,14]},{15:[2,18],56:[2,18],57:[2,18],58:[2,18],59:[2,18],60:[2,18],61:[2,18]},{15:[2,65],52:95,58:[1,30]},{15:[2,70],53:96,59:[1,31]},{15:[2,74],54:97,55:98,60:[1,32],61:[1,33]},{15:[2,76],55:99,61:[1,33]},{15:[2,77]},{15:[2,81],53:100,59:[1,31]},{15:[2,85],54:101,60:[1,32]},{15:[2,87],55:102,61:[1,33]},{15:[2,88]},{15:[2,91],54:103,60:[1,32]},{15:[2,94],55:104,61:[1,33]},{15:[2,95]},{15:[2,97],55:105,61:[1,33]},{15:[2,99]},{15:[2,100]},{4:26,6:3,7:106,9:4,10:5,12:[1,6]},{12:[1,47],18:34,21:107,22:27,24:35,25:[1,36],26:[1,41],27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{15:[2,103],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],57:[2,103],58:[2,103],59:[2,103],60:[2,103],61:[2,103]},{15:[2,104],58:[2,104],59:[2,104],60:[2,104],61:[2,104]},{8:[1,108],15:[2,41],58:[2,41],59:[2,41],60:[2,41],61:[2,41]},{8:[2,39],15:[2,39],25:[1,79],38:[1,109],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],58:[2,39],59:[2,39],60:[2,39],61:[2,39]},{15:[2,105],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],59:[2,105],60:[2,105],61:[2,105]},{15:[2,106],60:[2,106],61:[2,106]},{15:[2,107],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],61:[2,107]},{15:[2,108],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86]},{12:[1,112],23:110,33:111,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:113,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:114,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:115,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:116,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:117,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:118,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:119,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:120,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:121,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,47],18:122,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{12:[1,112],23:123,33:111,34:[1,42],35:[1,43],36:[1,44]},{4:92,6:3,9:4,10:5,12:[1,38],18:90,25:[1,91],27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],40:124},{29:[1,125]},{8:[1,126],25:[1,79],29:[2,43],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86]},{29:[2,44]},{29:[2,45]},{27:[1,127],30:[1,128],31:[1,129]},{12:[1,47],18:130,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44]},{15:[2,64],53:131,59:[1,31]},{15:[2,69],54:132,60:[1,32]},{15:[2,72],55:133,61:[1,33]},{15:[2,73]},{15:[2,75]},{15:[2,80],54:134,60:[1,32]},{15:[2,84],55:135,61:[1,33]},{15:[2,86]},{15:[2,90],55:136,61:[1,33]},{15:[2,93]},{15:[2,96]},{15:[2,3],56:[2,3],57:[2,3],58:[2,3],59:[2,3],60:[2,3],61:[2,3]},{12:[2,20],15:[2,20],56:[2,20],57:[2,20],58:[2,20],59:[2,20],60:[2,20],61:[2,20]},{12:[1,47],18:71,27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],37:70,39:137},{8:[2,38],15:[2,38],58:[2,38],59:[2,38],60:[2,38],61:[2,38]},{8:[2,22],12:[2,22],15:[2,22],56:[2,22],57:[2,22],58:[2,22],59:[2,22],60:[2,22],61:[2,22]},{8:[2,33],12:[2,33],15:[2,33],56:[2,33],57:[2,33],58:[2,33],59:[2,33],60:[2,33],61:[2,33]},{8:[2,34],12:[2,34],15:[2,34],56:[2,34],57:[2,34],58:[2,34],59:[2,34],60:[2,34],61:[2,34]},{8:[2,51],12:[2,51],13:[2,51],15:[2,51],16:[2,51],25:[1,79],29:[2,51],38:[2,51],41:[2,51],42:[2,51],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,51],57:[2,51],58:[2,51],59:[2,51],60:[2,51],61:[2,51]},{8:[2,52],12:[2,52],13:[2,52],15:[2,52],16:[2,52],25:[1,79],29:[2,52],38:[2,52],41:[2,52],42:[2,52],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,52],57:[2,52],58:[2,52],59:[2,52],60:[2,52],61:[2,52]},{8:[2,53],12:[2,53],13:[2,53],15:[2,53],16:[2,53],25:[2,53],29:[2,53],38:[2,53],41:[2,53],42:[2,53],43:[2,53],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,53],57:[2,53],58:[2,53],59:[2,53],60:[2,53],61:[2,53]},{8:[2,54],12:[2,54],13:[2,54],15:[2,54],16:[2,54],25:[2,54],29:[2,54],38:[2,54],41:[2,54],42:[2,54],43:[2,54],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,54],57:[2,54],58:[2,54],59:[2,54],60:[2,54],61:[2,54]},{8:[2,55],12:[2,55],13:[2,55],15:[2,55],16:[2,55],25:[2,55],29:[2,55],38:[2,55],41:[2,55],42:[2,55],43:[2,55],44:[2,55],45:[2,55],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,55],57:[2,55],58:[2,55],59:[2,55],60:[2,55],61:[2,55]},{8:[2,56],12:[2,56],13:[2,56],15:[2,56],16:[2,56],25:[2,56],29:[2,56],38:[2,56],41:[2,56],42:[2,56],43:[2,56],44:[2,56],45:[2,56],46:[1,83],47:[1,84],48:[1,85],49:[1,86],56:[2,56],57:[2,56],58:[2,56],59:[2,56],60:[2,56],61:[2,56]},{8:[2,57],12:[2,57],13:[2,57],15:[2,57],16:[2,57],25:[2,57],29:[2,57],38:[2,57],41:[2,57],42:[2,57],43:[2,57],44:[2,57],45:[2,57],46:[2,57],47:[2,57],48:[2,57],49:[2,57],56:[2,57],57:[2,57],58:[2,57],59:[2,57],60:[2,57],61:[2,57]},{8:[2,58],12:[2,58],13:[2,58],15:[2,58],16:[2,58],25:[2,58],29:[2,58],38:[2,58],41:[2,58],42:[2,58],43:[2,58],44:[2,58],45:[2,58],46:[2,58],47:[2,58],48:[2,58],49:[2,58],56:[2,58],57:[2,58],58:[2,58],59:[2,58],60:[2,58],61:[2,58]},{8:[2,59],12:[2,59],13:[2,59],15:[2,59],16:[2,59],25:[2,59],29:[2,59],38:[2,59],41:[2,59],42:[2,59],43:[2,59],44:[2,59],45:[2,59],46:[2,59],47:[2,59],48:[2,59],49:[2,59],56:[2,59],57:[2,59],58:[2,59],59:[2,59],60:[2,59],61:[2,59]},{8:[2,60],12:[2,60],13:[2,60],15:[2,60],16:[2,60],25:[2,60],29:[2,60],38:[2,60],41:[2,60],42:[2,60],43:[2,60],44:[2,60],45:[2,60],46:[2,60],47:[2,60],48:[2,60],49:[2,60],56:[2,60],57:[2,60],58:[2,60],59:[2,60],60:[2,60],61:[2,60]},{8:[2,25],12:[2,25],15:[2,25],56:[2,25],57:[2,25],58:[2,25],59:[2,25],60:[2,25],61:[2,25]},{29:[1,138]},{8:[2,49],12:[2,49],13:[2,49],15:[2,49],16:[2,49],25:[2,49],29:[2,49],38:[2,49],41:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],56:[2,49],57:[2,49],58:[2,49],59:[2,49],60:[2,49],61:[2,49]},{4:92,6:3,9:4,10:5,12:[1,38],18:90,25:[1,91],27:[1,40],32:[1,39],33:37,34:[1,42],35:[1,43],36:[1,44],40:139},{12:[1,142],28:140,32:[1,141]},{8:[2,28],12:[2,28],15:[2,28],16:[2,28],56:[2,28],57:[2,28],58:[2,28],59:[2,28],60:[2,28],61:[2,28]},{8:[2,30],12:[2,30],15:[2,30],16:[2,30],56:[2,30],57:[2,30],58:[2,30],59:[2,30],60:[2,30],61:[2,30]},{13:[2,11],25:[1,79],41:[1,77],42:[1,78],43:[1,80],44:[1,81],45:[1,82],46:[1,83],47:[1,84],48:[1,85],49:[1,86]},{15:[2,63],54:143,60:[1,32]},{15:[2,68],55:144,61:[1,33]},{15:[2,71]},{15:[2,79],55:145,61:[1,33]},{15:[2,83]},{15:[2,89]},{15:[2,40],58:[2,40],59:[2,40],60:[2,40],61:[2,40]},{8:[2,50],12:[2,50],13:[2,50],15:[2,50],16:[2,50],25:[2,50],29:[2,50],38:[2,50],41:[2,50],42:[2,50],43:[2,50],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],56:[2,50],57:[2,50],58:[2,50],59:[2,50],60:[2,50],61:[2,50]},{29:[2,42]},{29:[1,146]},{29:[2,31]},{29:[2,32]},{15:[2,62],55:147,61:[1,33]},{15:[2,67]},{15:[2,78]},{30:[1,148],31:[1,149]},{15:[2,61]},{8:[2,27],12:[2,27],15:[2,27],16:[2,27],56:[2,27],57:[2,27],58:[2,27],59:[2,27],60:[2,27],61:[2,27]},{8:[2,29],12:[2,29],15:[2,29],16:[2,29],56:[2,29],57:[2,29],58:[2,29],59:[2,29],60:[2,29],61:[2,29]}],
defaultActions: {7:[2,1],17:[2,16],25:[2,102],49:[2,14],55:[2,77],59:[2,88],62:[2,95],64:[2,99],65:[2,100],91:[2,44],92:[2,45],98:[2,73],99:[2,75],102:[2,86],104:[2,93],105:[2,96],133:[2,71],135:[2,83],136:[2,89],139:[2,42],141:[2,31],142:[2,32],144:[2,67],145:[2,78],147:[2,61]},
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
case 1: return 35; 
break;
case 2: return 34; 
break;
case 3: return 13; 
break;
case 4: return 15; 
break;
case 5: return 27; 
break;
case 6: return 29; 
break;
case 7: return 26; 
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
case 13: return 25; 
break;
case 14: return 41; 
break;
case 15: return 42; 
break;
case 16: return 43; 
break;
case 17: return 49; 
break;
case 18: return 48; 
break;
case 19: return 47; 
break;
case 20: return 46; 
break;
case 21: return 44; 
break;
case 22: return 45; 
break;
case 23: return 16; 
break;
case 24: return 17; 
break;
case 25: return 38; 
break;
case 26: return 56; 
break;
case 27: return 59; 
break;
case 28: return 60; 
break;
case 29: return 57; 
break;
case 30: return 61; 
break;
case 31: return 58; 
break;
case 32: return 32; 
break;
case 33: return 12; 
break;
case 34: return 36; 
break;
case 35: /* */  
break;
case 36: return 5; 
break;
case 37: return 'INVALID'; 
break;
case 38:console.log(yy_.yytext);
break;
}
};
lexer.rules = [/^(?:\s*\n\s*)/i,/^(?:[\w]?"(\\.|[^\\"])*")/i,/^(?:[\w]?'(\\.|[^\\'])*')/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\]s)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?:~)/i,/^(?:\*)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\/)/i,/^(?:in)/i,/^(?:=)/i,/^(?:like)/i,/^(?:ilike)/i,/^(?:and)/i,/^(?:or)/i,/^(?:as)/i,/^(?:on)/i,/^(?:(asc|desc))/i,/^(?:where)/i,/^(?:order by)/i,/^(?:limit)/i,/^(?:group by)/i,/^(?:offset)/i,/^(?:having)/i,/^(?:([a-zA-Z][\w_]*)\.([a-zA-Z][\w_]*))/i,/^(?:([a-zA-Z][\w_]*))/i,/^(?:([0-9])([0-9.])*)/i,/^(?:\s+)/i,/^(?:$)/i,/^(?:.)/i,/^(?:.)/i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":true}};
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