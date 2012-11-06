/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"query":4,"EOF":5,"table_defs":6,"table_def":7,"table_decl":8,"LBR":9,"body":10,"RBR":11,"VAR":12,"AS":13,"ON":14,"e":15,"fields":16,"clauses":17,"where":18,"group_by":19,"having":20,"order_by":21,"limit":22,"offset":23,"WHERE":24,"GROUP_BY":25,"by_es":26,"HAVING":27,"ORDER_BY":28,"LIMIT":29,"OFFSET":30,"field":31,"COMMA":32,"alias":33,"literal":34,"STRING_LITERAL_S":35,"STRING_LITERAL_D":36,"NUM":37,"by_e":38,"ORD":39,"DOTTED_VAR":40,"LPAREN":41,"es":42,"RPAREN":43,"MINUS":44,"PLUS":45,"STAR":46,"DIV":47,"AND":48,"OR":49,"ILIKE":50,"LIKE":51,"EQ":52,"IN":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"LBR",11:"RBR",12:"VAR",13:"AS",14:"ON",24:"WHERE",25:"GROUP_BY",27:"HAVING",28:"ORDER_BY",29:"LIMIT",30:"OFFSET",32:"COMMA",35:"STRING_LITERAL_S",36:"STRING_LITERAL_D",37:"NUM",39:"ORD",40:"DOTTED_VAR",41:"LPAREN",43:"RPAREN",44:"MINUS",45:"PLUS",46:"STAR",47:"DIV",48:"AND",49:"OR",50:"ILIKE",51:"LIKE",52:"EQ",53:"IN"},
productions_: [0,[3,2],[4,1],[6,2],[6,1],[7,4],[8,5],[8,3],[8,3],[8,1],[10,2],[10,1],[10,1],[17,6],[17,5],[17,4],[17,3],[17,2],[17,1],[17,5],[17,4],[17,3],[17,2],[17,4],[17,3],[17,3],[17,2],[17,3],[17,2],[17,2],[17,5],[17,4],[17,3],[17,2],[17,1],[17,4],[17,3],[17,2],[17,3],[17,2],[17,2],[17,4],[17,3],[17,2],[17,1],[17,3],[17,2],[17,2],[17,3],[17,2],[17,1],[17,2],[17,2],[17,1],[17,1],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[16,3],[16,1],[31,3],[31,1],[33,1],[33,1],[34,1],[34,1],[34,1],[38,2],[38,1],[26,3],[26,1],[15,1],[15,1],[15,1],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[42,3],[42,1],[42,1]],
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
case 6: this.$ = { name: $$[$0-4], alias: $$[$0-2], join: $$[$0] }; 
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
case 13: this.$ = { where: $$[$0-5]
           , group_by: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 14: this.$ = { where: $$[$0-4]
           , group_by: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 15: this.$ = { where: $$[$0-3]
           , group_by: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 16: this.$ = { where: $$[$0-2]
           , group_by: $$[$0-1]
           , having: $$[$0] }; 
break;
case 17: this.$ = { where: $$[$0-1]
           , group_by: $$[$0] }; 
break;
case 18: this.$ = { where: $$[$0] }; 
break;
case 19: this.$ = { where: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 20: this.$ = { where: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 21: this.$ = { where: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 22: this.$ = { where: $$[$0-1]
           , having: $$[$0] }; 
break;
case 23: this.$ = { where: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 24: this.$ = { where: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 25: this.$ = { where: $$[$0-2]
           , order_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 26: this.$ = { where: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 27: this.$ = { where: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 28: this.$ = { where: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 29: this.$ = { where: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 30: this.$ = { group_by: $$[$0-4]
           , having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 31: this.$ = { group_by: $$[$0-3]
           , having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 32: this.$ = { group_by: $$[$0-2]
           , having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 33: this.$ = { group_by: $$[$0-1]
           , having: $$[$0] }; 
break;
case 34: this.$ = { group_by: $$[$0] }; 
break;
case 35: this.$ = { group_by: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 36: this.$ = { group_by: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 37: this.$ = { group_by: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 38: this.$ = { wroup_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 39: this.$ = { group_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 40: this.$ = { group_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 41: this.$ = { having: $$[$0-3]
           , order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 42: this.$ = { having: $$[$0-2]
           , order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 43: this.$ = { having: $$[$0-1]
           , order_by: $$[$0] }; 
break;
case 44: this.$ = { having: $$[$0] }; 
break;
case 45: this.$ = { having: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 46: this.$ = { having: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 47: this.$ = { having: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 48: this.$ = { order_by: $$[$0-2]
           , limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 49: this.$ = { order_by: $$[$0-1]
           , limit: $$[$0] }; 
break;
case 50: this.$ = { order_by: $$[$0] }; 
break;
case 51: this.$ = { order_by: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 52: this.$ = { limit: $$[$0-1]
           , offset: $$[$0] }; 
break;
case 53: this.$ = { limit: $$[$0] }; 
break;
case 54: this.$ = { offset: $$[$0] }; 
break;
case 55: this.$ = $$[$0]; 
break;
case 56: this.$ = $$[$0]; 
break;
case 57: this.$ = $$[$0]; 
break;
case 58: this.$ = $$[$0]; 
break;
case 59: this.$ = $$[$0]; 
break;
case 60: this.$ = $$[$0]; 
break;
case 61: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 62: this.$ = [$$[$0]]; 
break;
case 63: this.$ = {field: $$[$0-2], alias: $$[$0]}; 
break;
case 64: this.$ = {field: $$[$0]}; 
break;
case 65: this.$ = $$[$0]; 
break;
case 66: this.$ = $$[$0]; 
break;
case 67: this.$ = $$[$0]; 
break;
case 68: this.$ = $$[$0]; 
break;
case 69: this.$ = parseFloat($$[$0], 10); 
break;
case 70: this.$ = [$$[$0-1], $$[$0]]; 
break;
case 71: this.$ = [$$[$0]]; 
break;
case 72: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 73: this.$ = [$$[$0]]; 
break;
case 74: this.$ = $$[$0]; 
break;
case 75: this.$ = $$[$0]; 
break;
case 76: this.$ = $$[$0]; 
break;
case 77: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 78: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 79: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 80: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 81: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 82: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 83: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 84: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 85: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 86: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 87: this.$ = [$$[$0-2], $$[$0-1], $$[$0]]; 
break;
case 88: this.$ = [$$[$0-2]].concat($$[$0]); 
break;
case 89: this.$ = [$$[$0]]; 
break;
case 90: this.$ = [$$[$0]]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,12:[1,6]},{1:[3]},{5:[1,7]},{5:[2,2]},{5:[2,4],6:8,7:4,8:5,12:[1,6]},{9:[1,9]},{9:[2,9],13:[1,10],14:[1,11]},{1:[2,1]},{5:[2,3]},{10:12,12:[1,30],15:22,16:13,17:14,18:16,19:17,20:18,21:19,22:20,23:21,24:[1,23],25:[1,24],27:[1,25],28:[1,26],29:[1,27],30:[1,28],31:15,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,36]},{12:[1,30],15:37,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{11:[1,38]},{11:[2,12],17:39,18:16,19:17,20:18,21:19,22:20,23:21,24:[1,23],25:[1,24],27:[1,25],28:[1,26],29:[1,27],30:[1,28]},{11:[2,11]},{11:[2,62],24:[2,62],25:[2,62],27:[2,62],28:[2,62],29:[2,62],30:[2,62],32:[1,40]},{11:[2,18],19:41,20:42,21:43,22:44,23:45,25:[1,24],27:[1,25],28:[1,26],29:[1,27],30:[1,28]},{11:[2,34],20:46,21:47,22:48,23:49,27:[1,25],28:[1,26],29:[1,27],30:[1,28]},{11:[2,44],21:50,22:51,23:52,28:[1,26],29:[1,27],30:[1,28]},{11:[2,50],22:53,23:54,29:[1,27],30:[1,28]},{11:[2,53],23:55,30:[1,28]},{11:[2,54]},{11:[2,64],13:[1,56],24:[2,64],25:[2,64],27:[2,64],28:[2,64],29:[2,64],30:[2,64],32:[2,64],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{12:[1,30],15:67,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:70,26:68,34:29,35:[1,33],36:[1,34],37:[1,35],38:69,40:[1,31],41:[1,32]},{12:[1,30],15:71,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:70,26:72,34:29,35:[1,33],36:[1,34],37:[1,35],38:69,40:[1,31],41:[1,32]},{12:[1,30],15:73,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:74,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{9:[2,74],11:[2,74],13:[2,74],24:[2,74],25:[2,74],27:[2,74],28:[2,74],29:[2,74],30:[2,74],32:[2,74],39:[2,74],43:[2,74],44:[2,74],45:[2,74],46:[2,74],47:[2,74],48:[2,74],49:[2,74],50:[2,74],51:[2,74],52:[2,74],53:[2,74]},{9:[2,75],11:[2,75],13:[2,75],24:[2,75],25:[2,75],27:[2,75],28:[2,75],29:[2,75],30:[2,75],32:[2,75],39:[2,75],43:[2,75],44:[2,75],45:[2,75],46:[2,75],47:[2,75],48:[2,75],49:[2,75],50:[2,75],51:[2,75],52:[2,75],53:[2,75]},{9:[2,76],11:[2,76],13:[2,76],24:[2,76],25:[2,76],27:[2,76],28:[2,76],29:[2,76],30:[2,76],32:[2,76],39:[2,76],43:[2,76],44:[2,76],45:[2,76],46:[2,76],47:[2,76],48:[2,76],49:[2,76],50:[2,76],51:[2,76],52:[2,76],53:[2,76]},{12:[1,30],15:76,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32],42:75,46:[1,77]},{9:[2,67],11:[2,67],13:[2,67],24:[2,67],25:[2,67],27:[2,67],28:[2,67],29:[2,67],30:[2,67],32:[2,67],39:[2,67],43:[2,67],44:[2,67],45:[2,67],46:[2,67],47:[2,67],48:[2,67],49:[2,67],50:[2,67],51:[2,67],52:[2,67],53:[2,67]},{9:[2,68],11:[2,68],13:[2,68],24:[2,68],25:[2,68],27:[2,68],28:[2,68],29:[2,68],30:[2,68],32:[2,68],39:[2,68],43:[2,68],44:[2,68],45:[2,68],46:[2,68],47:[2,68],48:[2,68],49:[2,68],50:[2,68],51:[2,68],52:[2,68],53:[2,68]},{9:[2,69],11:[2,69],13:[2,69],24:[2,69],25:[2,69],27:[2,69],28:[2,69],29:[2,69],30:[2,69],32:[2,69],39:[2,69],43:[2,69],44:[2,69],45:[2,69],46:[2,69],47:[2,69],48:[2,69],49:[2,69],50:[2,69],51:[2,69],52:[2,69],53:[2,69]},{9:[2,8],14:[1,78]},{9:[2,7],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{5:[2,5],12:[2,5]},{11:[2,10]},{12:[1,30],15:22,16:79,31:15,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{11:[2,17],20:80,27:[1,25]},{11:[2,22],21:81,28:[1,26]},{11:[2,26],22:82,23:83,29:[1,27],30:[1,28]},{11:[2,28],23:84,30:[1,28]},{11:[2,29]},{11:[2,33],21:85,28:[1,26]},{11:[2,37],22:86,29:[1,27]},{11:[2,39],23:87,30:[1,28]},{11:[2,40]},{11:[2,43],22:88,29:[1,27]},{11:[2,46],23:89,30:[1,28]},{11:[2,47]},{11:[2,49],23:90,30:[1,28]},{11:[2,51]},{11:[2,52]},{12:[1,93],33:91,34:92,35:[1,33],36:[1,34],37:[1,35]},{12:[1,30],15:94,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:95,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:96,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:97,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:98,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:99,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:100,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:101,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:102,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{12:[1,30],15:103,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{11:[2,55],25:[2,55],27:[2,55],28:[2,55],29:[2,55],30:[2,55],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{11:[2,56],27:[2,56],28:[2,56],29:[2,56],30:[2,56]},{11:[2,73],27:[2,73],28:[2,73],29:[2,73],30:[2,73],32:[1,104]},{11:[2,71],27:[2,71],28:[2,71],29:[2,71],30:[2,71],32:[2,71],39:[1,105],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{11:[2,57],28:[2,57],29:[2,57],30:[2,57],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{11:[2,58],29:[2,58],30:[2,58]},{11:[2,59],30:[2,59],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{11:[2,60],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{43:[1,106]},{32:[1,107],43:[2,89],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{43:[2,90]},{12:[1,30],15:108,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32]},{11:[2,61],24:[2,61],25:[2,61],27:[2,61],28:[2,61],29:[2,61],30:[2,61]},{11:[2,16],21:109,28:[1,26]},{11:[2,21],22:110,29:[1,27]},{11:[2,24],23:111,30:[1,28]},{11:[2,25]},{11:[2,27]},{11:[2,32],22:112,29:[1,27]},{11:[2,36],23:113,30:[1,28]},{11:[2,38]},{11:[2,42],23:114,30:[1,28]},{11:[2,45]},{11:[2,48]},{11:[2,63],24:[2,63],25:[2,63],27:[2,63],28:[2,63],29:[2,63],30:[2,63],32:[2,63]},{11:[2,65],24:[2,65],25:[2,65],27:[2,65],28:[2,65],29:[2,65],30:[2,65],32:[2,65]},{11:[2,66],24:[2,66],25:[2,66],27:[2,66],28:[2,66],29:[2,66],30:[2,66],32:[2,66]},{9:[2,78],11:[2,78],13:[2,78],24:[2,78],25:[2,78],27:[2,78],28:[2,78],29:[2,78],30:[2,78],32:[2,78],39:[2,78],43:[2,78],44:[2,78],45:[2,78],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{9:[2,79],11:[2,79],13:[2,79],24:[2,79],25:[2,79],27:[2,79],28:[2,79],29:[2,79],30:[2,79],32:[2,79],39:[2,79],43:[2,79],44:[2,79],45:[2,79],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{9:[2,80],11:[2,80],13:[2,80],24:[2,80],25:[2,80],27:[2,80],28:[2,80],29:[2,80],30:[2,80],32:[2,80],39:[2,80],43:[2,80],44:[2,80],45:[2,80],46:[2,80],47:[2,80],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{9:[2,81],11:[2,81],13:[2,81],24:[2,81],25:[2,81],27:[2,81],28:[2,81],29:[2,81],30:[2,81],32:[2,81],39:[2,81],43:[2,81],44:[2,81],45:[2,81],46:[2,81],47:[2,81],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{9:[2,82],11:[2,82],13:[2,82],24:[2,82],25:[2,82],27:[2,82],28:[2,82],29:[2,82],30:[2,82],32:[2,82],39:[2,82],43:[2,82],44:[2,82],45:[2,82],46:[2,82],47:[2,82],48:[2,82],49:[2,82],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{9:[2,83],11:[2,83],13:[2,83],24:[2,83],25:[2,83],27:[2,83],28:[2,83],29:[2,83],30:[2,83],32:[2,83],39:[2,83],43:[2,83],44:[2,83],45:[2,83],46:[2,83],47:[2,83],48:[2,83],49:[2,83],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{9:[2,84],11:[2,84],13:[2,84],24:[2,84],25:[2,84],27:[2,84],28:[2,84],29:[2,84],30:[2,84],32:[2,84],39:[2,84],43:[2,84],44:[2,84],45:[2,84],46:[2,84],47:[2,84],48:[2,84],49:[2,84],50:[2,84],51:[2,84],52:[2,84],53:[2,84]},{9:[2,85],11:[2,85],13:[2,85],24:[2,85],25:[2,85],27:[2,85],28:[2,85],29:[2,85],30:[2,85],32:[2,85],39:[2,85],43:[2,85],44:[2,85],45:[2,85],46:[2,85],47:[2,85],48:[2,85],49:[2,85],50:[2,85],51:[2,85],52:[2,85],53:[2,85]},{9:[2,86],11:[2,86],13:[2,86],24:[2,86],25:[2,86],27:[2,86],28:[2,86],29:[2,86],30:[2,86],32:[2,86],39:[2,86],43:[2,86],44:[2,86],45:[2,86],46:[2,86],47:[2,86],48:[2,86],49:[2,86],50:[2,86],51:[2,86],52:[2,86],53:[2,86]},{9:[2,87],11:[2,87],13:[2,87],24:[2,87],25:[2,87],27:[2,87],28:[2,87],29:[2,87],30:[2,87],32:[2,87],39:[2,87],43:[2,87],44:[2,87],45:[2,87],46:[2,87],47:[2,87],48:[2,87],49:[2,87],50:[2,87],51:[2,87],52:[2,87],53:[2,87]},{12:[1,30],15:70,26:115,34:29,35:[1,33],36:[1,34],37:[1,35],38:69,40:[1,31],41:[1,32]},{11:[2,70],27:[2,70],28:[2,70],29:[2,70],30:[2,70],32:[2,70]},{9:[2,77],11:[2,77],13:[2,77],24:[2,77],25:[2,77],27:[2,77],28:[2,77],29:[2,77],30:[2,77],32:[2,77],39:[2,77],43:[2,77],44:[2,77],45:[2,77],46:[2,77],47:[2,77],48:[2,77],49:[2,77],50:[2,77],51:[2,77],52:[2,77],53:[2,77]},{12:[1,30],15:76,34:29,35:[1,33],36:[1,34],37:[1,35],40:[1,31],41:[1,32],42:116,46:[1,77]},{9:[2,6],44:[1,57],45:[1,58],46:[1,59],47:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66]},{11:[2,15],22:117,29:[1,27]},{11:[2,20],23:118,30:[1,28]},{11:[2,23]},{11:[2,31],23:119,30:[1,28]},{11:[2,35]},{11:[2,41]},{11:[2,72],27:[2,72],28:[2,72],29:[2,72],30:[2,72]},{43:[2,88]},{11:[2,14],23:120,30:[1,28]},{11:[2,19]},{11:[2,30]},{11:[2,13]}],
defaultActions: {3:[2,2],7:[2,1],8:[2,3],14:[2,11],21:[2,54],39:[2,10],45:[2,29],49:[2,40],52:[2,47],54:[2,51],55:[2,52],77:[2,90],83:[2,25],84:[2,27],87:[2,38],89:[2,45],90:[2,48],111:[2,23],113:[2,35],114:[2,41],116:[2,88],118:[2,19],119:[2,30],120:[2,13]},
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
case 1: return 36; 
break;
case 2: return 35; 
break;
case 3: return 9; 
break;
case 4: return 11; 
break;
case 5: return 41; 
break;
case 6: return 43; 
break;
case 7: return 'LBRACKET'; 
break;
case 8: return 'RBRACKET_PL'; 
break;
case 9: return 'RBRACKET'; 
break;
case 10: return 'PERIOD'; 
break;
case 11: return 32; 
break;
case 12: return 'TILDE'; 
break;
case 13: return 46; 
break;
case 14: return 44; 
break;
case 15: return 45; 
break;
case 16: return 47; 
break;
case 17: return 53; 
break;
case 18: return 52; 
break;
case 19: return 51; 
break;
case 20: return 50; 
break;
case 21: return 48; 
break;
case 22: return 49; 
break;
case 23: return 13; 
break;
case 24: return 14; 
break;
case 25: return 39; 
break;
case 26: return 24; 
break;
case 27: return 28; 
break;
case 28: return 29; 
break;
case 29: return 25; 
break;
case 30: return 30; 
break;
case 31: return 27; 
break;
case 32: return 40; 
break;
case 33: return 12; 
break;
case 34: return 37; 
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