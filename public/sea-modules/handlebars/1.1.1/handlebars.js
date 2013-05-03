define("#handlebars/1.1.1/handlebars",[],function(i,k,t){this.Handlebars={};(function(c){c.VERSION="1.0.rc.1";c.helpers={};c.partials={};c.registerHelper=function(c,a,g){g&&(a.not=g);this.helpers[c]=a};c.registerPartial=function(c,a){this.partials[c]=a};c.registerHelper("helperMissing",function(c){if(2!==arguments.length)throw Error("Could not find property '"+c+"'");});var e=Object.prototype.toString;c.registerHelper("blockHelperMissing",function(b,a){var g=a.inverse||function(){},h=a.fn,p=e.call(b);
"[object Function]"===p&&(b=b.call(this));return!0===b?h(this):!1===b||null==b?g(this):"[object Array]"===p?0<b.length?c.helpers.each(b,a):g(this):h(b)});c.K=function(){};c.createFrame=Object.create||function(b){c.K.prototype=b;b=new c.K;c.K.prototype=null;return b};c.registerHelper("each",function(b,a){var g=a.fn,e=a.inverse,p="",d;a.data&&(d=c.createFrame(a.data));if(b&&0<b.length)for(var e=0,f=b.length;e<f;e++)d&&(d.index=e),p+=g(b[e],{data:d});else p=e(this);return p});c.registerHelper("if",function(b,
a){"[object Function]"===e.call(b)&&(b=b.call(this));return!b||c.Utils.isEmpty(b)?a.inverse(this):a.fn(this)});c.registerHelper("unless",function(b,a){var g=a.fn;a.fn=a.inverse;a.inverse=g;return c.helpers["if"].call(this,b,a)});c.registerHelper("with",function(c,a){return a.fn(c)});c.registerHelper("log",function(b){c.log(b)})})(this.Handlebars);var o=function(){function c(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,
openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,DATA:27,param:28,STRING:29,INTEGER:30,BOOLEAN:31,hashSegments:32,hashSegment:33,ID:34,EQUALS:35,pathSegments:36,SEP:37,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",
24:"OPEN_PARTIAL",27:"DATA",29:"STRING",30:"INTEGER",31:"BOOLEAN",34:"ID",35:"EQUALS",37:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[17,1],[25,2],[25,1],[28,1],[28,1],[28,1],[28,1],[28,1],[26,1],[32,2],[32,1],[33,3],[33,3],[33,3],[33,3],[33,3],[21,1],[36,3],[36,1]],performAction:function(a,g,c,b,d,f){a=f.length-1;switch(d){case 1:return f[a-1];case 2:this.$=new b.ProgramNode(f[a-
2],f[a]);break;case 3:this.$=new b.ProgramNode(f[a]);break;case 4:this.$=new b.ProgramNode([]);break;case 5:this.$=[f[a]];break;case 6:f[a-1].push(f[a]);this.$=f[a-1];break;case 7:this.$=new b.BlockNode(f[a-2],f[a-1].inverse,f[a-1],f[a]);break;case 8:this.$=new b.BlockNode(f[a-2],f[a-1],f[a-1].inverse,f[a]);break;case 9:this.$=f[a];break;case 10:this.$=f[a];break;case 11:this.$=new b.ContentNode(f[a]);break;case 12:this.$=new b.CommentNode(f[a]);break;case 13:this.$=new b.MustacheNode(f[a-1][0],f[a-
1][1]);break;case 14:this.$=new b.MustacheNode(f[a-1][0],f[a-1][1]);break;case 15:this.$=f[a-1];break;case 16:this.$=new b.MustacheNode(f[a-1][0],f[a-1][1]);break;case 17:this.$=new b.MustacheNode(f[a-1][0],f[a-1][1],!0);break;case 18:this.$=new b.PartialNode(f[a-1]);break;case 19:this.$=new b.PartialNode(f[a-2],f[a-1]);break;case 21:this.$=[[f[a-2]].concat(f[a-1]),f[a]];break;case 22:this.$=[[f[a-1]].concat(f[a]),null];break;case 23:this.$=[[f[a-1]],f[a]];break;case 24:this.$=[[f[a]],null];break;
case 25:this.$=[[new b.DataNode(f[a])],null];break;case 26:f[a-1].push(f[a]);this.$=f[a-1];break;case 27:this.$=[f[a]];break;case 28:this.$=f[a];break;case 29:this.$=new b.StringNode(f[a]);break;case 30:this.$=new b.IntegerNode(f[a]);break;case 31:this.$=new b.BooleanNode(f[a]);break;case 32:this.$=new b.DataNode(f[a]);break;case 33:this.$=new b.HashNode(f[a]);break;case 34:f[a-1].push(f[a]);this.$=f[a-1];break;case 35:this.$=[f[a]];break;case 36:this.$=[f[a-2],f[a]];break;case 37:this.$=[f[a-2],
new b.StringNode(f[a])];break;case 38:this.$=[f[a-2],new b.IntegerNode(f[a])];break;case 39:this.$=[f[a-2],new b.BooleanNode(f[a])];break;case 40:this.$=[f[a-2],new b.DataNode(f[a])];break;case 41:this.$=new b.IdNode(f[a]);break;case 42:f[a-2].push(f[a]);this.$=f[a-2];break;case 43:this.$=[f[a]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,
12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],
22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,27:[1,24],34:[1,26],36:25},{17:27,21:23,27:[1,24],34:[1,26],36:25},{17:28,21:23,27:[1,24],34:[1,26],36:25},{17:29,21:23,27:[1,24],34:[1,26],36:25},{21:30,34:[1,26],36:25},{1:[2,1]},{6:31,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,
15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,32],21:23,27:[1,24],34:[1,26],36:25},{10:33,20:[1,34]},{10:35,20:[1,34]},{18:[1,36]},{18:[2,24],21:41,25:37,26:38,27:[1,45],28:39,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,25]},{18:[2,41],27:[2,41],29:[2,41],30:[2,41],31:[2,41],34:[2,41],37:[1,48]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],37:[2,43]},{18:[1,49]},{18:[1,50]},{18:[1,51]},{18:[1,52],21:53,34:[1,
26],36:25},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:54,34:[1,26],36:25},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:41,26:55,27:[1,45],28:56,
29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,23]},{18:[2,27],27:[2,27],29:[2,27],30:[2,27],31:[2,27],34:[2,27]},{18:[2,33],33:57,34:[1,58]},{18:[2,28],27:[2,28],29:[2,28],30:[2,28],31:[2,28],34:[2,28]},{18:[2,29],27:[2,29],29:[2,29],30:[2,29],31:[2,29],34:[2,29]},{18:[2,30],27:[2,30],29:[2,30],30:[2,30],31:[2,30],34:[2,30]},{18:[2,31],27:[2,31],29:[2,31],30:[2,31],31:[2,31],34:[2,31]},{18:[2,32],27:[2,32],29:[2,32],30:[2,32],31:[2,32],34:[2,32]},{18:[2,35],34:[2,35]},{18:[2,43],
27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],35:[1,59],37:[2,43]},{34:[1,60]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,61]},{18:[1,62]},{18:[2,21]},{18:[2,26],27:[2,26],29:[2,
26],30:[2,26],31:[2,26],34:[2,26]},{18:[2,34],34:[2,34]},{35:[1,59]},{21:63,27:[1,67],29:[1,64],30:[1,65],31:[1,66],34:[1,26],36:25},{18:[2,42],27:[2,42],29:[2,42],30:[2,42],31:[2,42],34:[2,42],37:[2,42]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,36],34:[2,36]},{18:[2,37],34:[2,37]},{18:[2,38],34:[2,38]},{18:[2,39],34:[2,39]},{18:[2,40],34:[2,40]}],defaultActions:{16:[2,
1],24:[2,25],38:[2,23],55:[2,21]},parseError:function(a){throw Error(a);},parse:function(a){var g=[0],c=[null],b=[],d=this.table,f="",q=0,e=0,r=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});a=this.lexer.yylloc;b.push(a);var u=this.lexer.options&&this.lexer.options.ranges;"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var j,s,n,l,i={},k,m;;){n=g[g.length-1];
if(this.defaultActions[n])l=this.defaultActions[n];else{if(null===j||"undefined"==typeof j)j=void 0,j=this.lexer.lex()||1,"number"!==typeof j&&(j=this.symbols_[j]||j);l=d[n]&&d[n][j]}if("undefined"===typeof l||!l.length||!l[0]){var o="";if(!r){m=[];for(k in d[n])this.terminals_[k]&&2<k&&m.push("'"+this.terminals_[k]+"'");o=this.lexer.showPosition?"Parse error on line "+(q+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+m.join(", ")+", got '"+(this.terminals_[j]||j)+"'":"Parse error on line "+(q+
1)+": Unexpected "+(1==j?"end of input":"'"+(this.terminals_[j]||j)+"'");this.parseError(o,{text:this.lexer.match,token:this.terminals_[j]||j,line:this.lexer.yylineno,loc:a,expected:m})}}if(l[0]instanceof Array&&1<l.length)throw Error("Parse Error: multiple actions possible at state: "+n+", token: "+j);switch(l[0]){case 1:g.push(j);c.push(this.lexer.yytext);b.push(this.lexer.yylloc);g.push(l[1]);j=null;s?(j=s,s=null):(e=this.lexer.yyleng,f=this.lexer.yytext,q=this.lexer.yylineno,a=this.lexer.yylloc,
0<r&&r--);break;case 2:m=this.productions_[l[1]][1];i.$=c[c.length-m];i._$={first_line:b[b.length-(m||1)].first_line,last_line:b[b.length-1].last_line,first_column:b[b.length-(m||1)].first_column,last_column:b[b.length-1].last_column};u&&(i._$.range=[b[b.length-(m||1)].range[0],b[b.length-1].range[1]]);n=this.performAction.call(i,f,e,q,this.yy,l[1],c,b);if("undefined"!==typeof n)return n;m&&(g=g.slice(0,-2*m),c=c.slice(0,-1*m),b=b.slice(0,-1*m));g.push(this.productions_[l[1]][0]);c.push(i.$);b.push(i._$);
l=d[g[g.length-2]][g[g.length-1]];g.push(l);break;case 3:return!0}}return!0}},b=function(){return{EOF:1,parseError:function(a,b){if(this.yy.parser)this.yy.parser.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};this.options.ranges&&(this.yylloc.range=[0,0]);this.offset=0;return this},
input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.offset++;this.match+=a;this.matched+=a;a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++;this.options.ranges&&this.yylloc.range[1]++;this._input=this._input.slice(1);return a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-b-1);this.offset-=b;a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,
this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===a.length?this.yylloc.first_column:0)+a[a.length-c.length].length-c[0].length:this.yylloc.first_column-b};this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]);return this},more:function(){this._more=!0;return this},
less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(20<a.length?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;20>a.length&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(20<a.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;
this._input||(this.done=!0);var a,b,c;this._more||(this.match=this.yytext="");for(var e=this._currentRules(),d=0;d<e.length;d++)if((b=this._input.match(this.rules[e[d]]))&&(!a||b[0].length>a[0].length))if(a=b,c=d,!this.options.flex)break;if(a){if(b=a[0].match(/(?:\r\n?|\n).*/g))this.yylineno+=b.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-b[b.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+
a[0].length};this.yytext+=a[0];this.match+=a[0];this.matches=a;this.yyleng=this.yytext.length;this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]);this._more=!1;this._input=this._input.slice(a[0].length);this.matched+=a[0];a=this.performAction.call(this,this.yy,this,e[c],this.conditionStack[this.conditionStack.length-1]);this.done&&this._input&&(this.done=!1);if(a)return a}else return""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+
this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!==typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)},options:{},performAction:function(a,b,c){switch(c){case 0:"\\"!==
b.yytext.slice(-1)&&this.begin("mu");"\\"===b.yytext.slice(-1)&&(b.yytext=b.yytext.substr(0,b.yyleng-1),this.begin("emu"));if(b.yytext)return 14;break;case 1:return 14;case 2:return"\\"!==b.yytext.slice(-1)&&this.popState(),"\\"===b.yytext.slice(-1)&&(b.yytext=b.yytext.substr(0,b.yyleng-1)),14;case 3:return 24;case 4:return 16;case 5:return 20;case 6:return 19;case 7:return 19;case 8:return 23;case 9:return 23;case 10:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.popState(),15;case 11:return 22;
case 12:return 35;case 13:return 34;case 14:return 34;case 15:return 37;case 17:return this.popState(),18;case 18:return this.popState(),18;case 19:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),29;case 20:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),29;case 21:return b.yytext=b.yytext.substr(1),27;case 22:return 31;case 23:return 31;case 24:return 30;case 25:return 34;case 26:return b.yytext=b.yytext.substr(1,b.yyleng-2),34;case 27:return"INVALID";case 28:return 5}},
rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,
/^(?:$)/],conditions:{mu:{rules:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],inclusive:!1},emu:{rules:[2],inclusive:!1},INITIAL:{rules:[0,1,28],inclusive:!0}}}}();e.lexer=b;c.prototype=e;e.Parser=c;return new c}();"undefined"!==typeof i&&"undefined"!==typeof k&&(k.parser=o,k.Parser=o.Parser,k.parse=function(){return o.parse.apply(o,arguments)},k.main=function(c){if(!c[1])throw Error("Usage: "+c[0]+" FILE");c="undefined"!==typeof process?i("fs").readFileSync(i("path").resolve(c[1]),
"utf8"):i("file").path(i("file").cwd()).join(c[1]).read({charset:"utf-8"});return k.parser.parse(c)},"undefined"!==typeof t&&i.main===t&&k.main("undefined"!==typeof process?process.argv.slice(1):i("system").args));Handlebars.Parser=o;Handlebars.parse=function(c){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(c)};Handlebars.print=function(c){return(new Handlebars.PrintVisitor).accept(c)};Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(){}};Handlebars.log=function(c,
e){Handlebars.logger.log(c,e)};(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(c,e){this.type="program";this.statements=c;if(e)this.inverse=new Handlebars.AST.ProgramNode(e)};Handlebars.AST.MustacheNode=function(c,e,b){this.type="mustache";this.escaped=!b;this.hash=e;b=this.id=c[0];c=this.params=c.slice(1);this.isHelper=(this.eligibleHelper=b.isSimple)&&(c.length||e)};Handlebars.AST.PartialNode=function(c,e){this.type="partial";this.id=c;this.context=e};Handlebars.AST.BlockNode=
function(c,e,b,a){var g=c.id;if(g.original!==a.original)throw new Handlebars.Exception(g.original+" doesn't match "+a.original);this.type="block";this.mustache=c;this.program=e;if((this.inverse=b)&&!this.program)this.isInverse=true};Handlebars.AST.ContentNode=function(c){this.type="content";this.string=c};Handlebars.AST.HashNode=function(c){this.type="hash";this.pairs=c};Handlebars.AST.IdNode=function(c){this.type="ID";this.original=c.join(".");for(var e=[],b=0,a=0,g=c.length;a<g;a++){var h=c[a];
h===".."?b++:h==="."||h==="this"?this.isScoped=true:e.push(h)}this.parts=e;this.string=e.join(".");this.depth=b;this.isSimple=c.length===1&&!this.isScoped&&b===0};Handlebars.AST.DataNode=function(c){this.type="DATA";this.id=c};Handlebars.AST.StringNode=function(c){this.type="STRING";this.string=c};Handlebars.AST.IntegerNode=function(c){this.type="INTEGER";this.integer=c};Handlebars.AST.BooleanNode=function(c){this.type="BOOLEAN";this.bool=c};Handlebars.AST.CommentNode=function(c){this.type="comment";
this.comment=c}})();Handlebars.Exception=function(c){var e=Error.prototype.constructor.apply(this,arguments),b;for(b in e)e.hasOwnProperty(b)&&(this[b]=e[b]);this.message=e.message};Handlebars.Exception.prototype=Error();Handlebars.SafeString=function(c){this.string=c};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},e=/[&<>"'`]/g,b=/[&<>"'`]/,a=function(a){return c[a]||"&amp;"};
Handlebars.Utils={escapeExpression:function(c){return c instanceof Handlebars.SafeString?c.toString():c==null||c===false?"":!b.test(c)?c:c.replace(e,a)},isEmpty:function(a){return typeof a==="undefined"?true:a===null?true:a===false?true:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?true:false}}})();Handlebars.Compiler=function(){};Handlebars.JavaScriptCompiler=function(){};(function(c,e){c.prototype={compiler:c,disassemble:function(){for(var d=this.opcodes,a,b=[],c,e,g=0,h=d.length;g<
h;g++){a=d[g];if(a.opcode==="DECLARE")b.push("DECLARE "+a.name+"="+a.value);else{c=[];for(var i=0;i<a.args.length;i++){e=a.args[i];typeof e==="string"&&(e='"'+e.replace("\n","\\n")+'"');c.push(e)}b.push(a.opcode+" "+c.join(" "))}}return b.join("\n")},guid:0,compile:function(d,a){this.children=[];this.depths={list:[]};this.options=a;var b=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(b)for(var c in b)this.options.knownHelpers[c]=
b[c];return this.program(d)},accept:function(d){return this[d.type](d)},program:function(d){var d=d.statements,a;this.opcodes=[];for(var b=0,c=d.length;b<c;b++){a=d[b];this[a.type](a)}this.isSimple=c===1;this.depths.list=this.depths.list.sort(function(d,a){return d-a});return this},compileProgram:function(d){var d=(new this.compiler).compile(d,this.options),a=this.guid++,b;this.usePartial=this.usePartial||d.usePartial;this.children[a]=d;for(var c=0,e=d.depths.list.length;c<e;c++){b=d.depths.list[c];
b<2||this.addDepth(b-1)}return a},block:function(d){var a=d.mustache,b=d.program,d=d.inverse;b&&(b=this.compileProgram(b));d&&(d=this.compileProgram(d));var c=this.classifyMustache(a);if(c==="helper")this.helperMustache(a,b,d);else if(c==="simple"){this.simpleMustache(a);this.opcode("pushProgram",b);this.opcode("pushProgram",d);this.opcode("pushLiteral","{}");this.opcode("blockValue")}else{this.ambiguousMustache(a,b,d);this.opcode("pushProgram",b);this.opcode("pushProgram",d);this.opcode("pushLiteral",
"{}");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(d){var d=d.pairs,a,b;this.opcode("push","{}");for(var c=0,e=d.length;c<e;c++){a=d[c];b=a[1];this.accept(b);this.opcode("assignToHash",a[0])}},partial:function(d){var a=d.id;this.usePartial=true;d.context?this.ID(d.context):this.opcode("push","depth0");this.opcode("invokePartial",a.original);this.opcode("append")},content:function(d){this.opcode("appendContent",d.string)},mustache:function(d){var a=this.options,b=this.classifyMustache(d);
b==="simple"?this.simpleMustache(d):b==="helper"?this.helperMustache(d):this.ambiguousMustache(d);d.escaped&&!a.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(d,a,b){var d=d.id,c=d.parts[0];this.opcode("getContext",d.depth);this.opcode("pushProgram",a);this.opcode("pushProgram",b);this.opcode("invokeAmbiguous",c)},simpleMustache:function(d){d=d.id;if(d.type==="DATA")this.DATA(d);else if(d.parts.length)this.ID(d);else{this.addDepth(d.depth);this.opcode("getContext",
d.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperMustache:function(d,a,b){a=this.setupFullMustacheParams(d,a,b);d=d.id.parts[0];if(this.options.knownHelpers[d])this.opcode("invokeKnownHelper",a.length,d);else{if(this.knownHelpersOnly)throw Error("You specified knownHelpersOnly, but used the unknown helper "+d);this.opcode("invokeHelper",a.length,d)}},ID:function(d){this.addDepth(d.depth);this.opcode("getContext",d.depth);d.parts[0]?this.opcode("lookupOnContext",d.parts[0]):
this.opcode("pushContext");for(var a=1,b=d.parts.length;a<b;a++)this.opcode("lookup",d.parts[a])},DATA:function(d){this.options.data=true;this.opcode("lookupData",d.id)},STRING:function(d){this.opcode("pushString",d.string)},INTEGER:function(d){this.opcode("pushLiteral",d.integer)},BOOLEAN:function(d){this.opcode("pushLiteral",d.bool)},comment:function(){},opcode:function(d){this.opcodes.push({opcode:d,args:[].slice.call(arguments,1)})},declare:function(d,a){this.opcodes.push({opcode:"DECLARE",name:d,
value:a})},addDepth:function(d){if(isNaN(d))throw Error("EWOT");if(d!==0&&!this.depths[d]){this.depths[d]=true;this.depths.list.push(d)}},classifyMustache:function(d){var a=d.isHelper,b=d.eligibleHelper,c=this.options;b&&!a&&(c.knownHelpers[d.id.parts[0]]?a=true:c.knownHelpersOnly&&(b=false));return a?"helper":b?"ambiguous":"simple"},pushParams:function(d){for(var a=d.length,b;a--;){b=d[a];if(this.options.stringParams){b.depth&&this.addDepth(b.depth);this.opcode("getContext",b.depth||0);this.opcode("pushStringParam",
b.string)}else this[b.type](b)}},setupMustacheParams:function(d){var a=d.params;this.pushParams(a);d.hash?this.hash(d.hash):this.opcode("pushLiteral","{}");return a},setupFullMustacheParams:function(d,a,b){var c=d.params;this.pushParams(c);this.opcode("pushProgram",a);this.opcode("pushProgram",b);d.hash?this.hash(d.hash):this.opcode("pushLiteral","{}");return c}};var b=function(d){this.value=d};e.prototype={nameLookup:function(d,a){return/^[0-9]+$/.test(a)?d+"["+a+"]":e.isValidJavaScriptVariableName(a)?
d+"."+a:d+"['"+a+"']"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":"buffer += "+a+";"},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,e){this.environment=a;this.options=b||{};Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!c;this.context=c||{programs:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};
this.compileStack=[];this.compileChildren(a,b);a=a.opcodes;this.i=0;for(i=a.length;this.i<i;this.i++){b=a[this.i];b.opcode==="DECLARE"?this[b.name]=b.value:this[b.opcode].apply(this,b.args)}return this.createFunctionContext(e)},nextOpcode:function(){return this.environment.opcodes[this.i+1]},eat:function(){this.i=this.i+1},preamble:function(){var a=[];if(this.isChild)a.push("");else{var b=this.namespace,c="helpers = helpers || "+b+".helpers;";this.environment.usePartial&&(c=c+" partials = partials || "+
b+".partials;");this.options.data&&(c=c+" data = data || {};");a.push(c)}this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer());this.lastContext=0;this.source=a},createFunctionContext:function(a){var b=this.stackVars.concat(this.registers.list);b.length>0&&(this.source[1]=this.source[1]+", "+b.join(", "));if(!this.isChild)for(var c in this.context.aliases)this.source[1]=this.source[1]+", "+c+"="+this.context.aliases[c];this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+
";");this.isChild||(this.source[1]=this.source[1]+("\n"+this.context.programs.join("\n")+"\n"));this.environment.isSimple||this.source.push("return buffer;");b=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];c=0;for(var e=this.environment.depths.list.length;c<e;c++)b.push("depth"+this.environment.depths.list[c]);if(a){b.push(this.source.join("\n  "));return Function.apply(this,b)}a="function "+(this.name||"")+"("+b.join(",")+") {\n  "+this.source.join("\n  ")+"}";
Handlebars.log(Handlebars.logger.DEBUG,a+"\n\n");return a},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);this.replaceStack(function(b){a.splice(1,0,b);return b+" = blockHelperMissing.call("+a.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);var b=this.topStack();a.splice(1,0,b);this.source.push("if (!"+this.lastHelper+
") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }");this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){var a=this.nextOpcode(),b="";this.context.aliases.escapeExpression="this.escapeExpression";if(a&&a.opcode==="appendContent"){b=
" + "+this.quotedString(a.args[0]);this.eat(a)}this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+b))},getContext:function(a){if(this.lastContext!==a)this.lastContext=a},lookupOnContext:function(a){this.pushStack(this.nameLookup("depth"+this.lastContext,a,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(a){return"typeof "+a+" === functionType ? "+
a+"() : "+a})},lookup:function(a){this.replaceStack(function(b){return b+" == null || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")})},lookupData:function(a){this.pushStack(this.nameLookup("data",a,"data"))},pushStringParam:function(a){this.pushStackLiteral("depth"+this.lastContext);this.pushString(a)},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){this.pushStack(a)},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){a!=null?
this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b){this.context.aliases.helperMissing="helpers.helperMissing";var c=this.lastHelper=this.setupHelper(a,b);this.register("foundHelper",c.name);this.pushStack("foundHelper ? foundHelper.call("+c.callParams+") : helperMissing.call("+c.helperMissingParams+")")},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.pushStack(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a){this.context.aliases.functionType=
'"function"';this.pushStackLiteral("{}");var b=this.setupHelper(0,a);this.register("foundHelper",this.lastHelper=this.nameLookup("helpers",a,"helper"));var a=this.nameLookup("depth"+this.lastContext,a,"context"),c=this.nextStack();this.source.push("if (foundHelper) { "+c+" = foundHelper.call("+b.callParams+"); }");this.source.push("else { "+c+" = "+a+"; "+c+" = typeof "+c+" === functionType ? "+c+"() : "+c+"; }")},invokePartial:function(a){a=[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),
"helpers","partials"];this.options.data&&a.push("data");this.context.aliases.self="this";this.pushStack("self.invokePartial("+a.join(", ")+");")},assignToHash:function(a){var b=this.popStack();this.source.push(this.topStack()+"['"+a+"'] = "+b+";")},compiler:e,compileChildren:function(a,b){for(var c=a.children,e,g,h=0,i=c.length;h<i;h++){e=c[h];g=new this.compiler;this.context.programs.push("");var k=this.context.programs.length;e.index=k;e.name="program"+k;this.context.programs[k]=g.compile(e,b,this.context)}},
programExpression:function(a){this.context.aliases.self="this";if(a==null)return"self.noop";for(var b=this.environment.children[a],a=b.depths.list,c=[b.index,b.name,"data"],e=0,g=a.length;e<g;e++){b=a[e];b===1?c.push("depth0"):c.push("depth"+(b-1))}if(a.length===0)return"self.program("+c.join(", ")+")";c.shift();return"self.programWithDepth("+c.join(", ")+")"},register:function(a,b){this.useRegister(a);this.source.push(a+" = "+b+";")},useRegister:function(a){if(!this.registers[a]){this.registers[a]=
true;this.registers.list.push(a)}},pushStackLiteral:function(a){this.compileStack.push(new b(a));return a},pushStack:function(a){this.source.push(this.incrStack()+" = "+a+";");this.compileStack.push("stack"+this.stackSlot);return"stack"+this.stackSlot},replaceStack:function(a){a=a.call(this,this.topStack());this.source.push(this.topStack()+" = "+a+";");return"stack"+this.stackSlot},nextStack:function(){var a=this.incrStack();this.compileStack.push("stack"+this.stackSlot);return a},incrStack:function(){this.stackSlot++;
this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot);return"stack"+this.stackSlot},popStack:function(){var a=this.compileStack.pop();if(a instanceof b)return a.value;this.stackSlot--;return a},topStack:function(){var a=this.compileStack[this.compileStack.length-1];return a instanceof b?a.value:a},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'},setupHelper:function(a,b){var c=[];this.setupParams(a,
c);var e=this.nameLookup("helpers",b,"helper");return{params:c,name:e,callParams:["depth0"].concat(c).join(", "),helperMissingParams:["depth0",this.quotedString(b)].concat(c).join(", ")}},setupParams:function(a,b){var c=[],e=[],g,h;c.push("hash:"+this.popStack());g=this.popStack();if((h=this.popStack())||g){if(!h){this.context.aliases.self="this";h="self.noop"}if(!g){this.context.aliases.self="this";g="self.noop"}c.push("inverse:"+g);c.push("fn:"+h)}for(h=0;h<a;h++){g=this.popStack();b.push(g);this.options.stringParams&&
e.push(this.popStack())}this.options.stringParams&&c.push("contexts:["+e.join(",")+"]");this.options.data&&c.push("data:data");b.push("{"+c.join(",")+"}");return b.join(", ")}};for(var a=["break","else","new","var","case","finally","return","void","catch","for","switch","while","continue","function","this","with","default","if","throw","delete","in","try","do","instanceof","typeof","abstract","enum","int","short","boolean","export","interface","static","byte","extends","long","super","char","final",
"native","synchronized","class","float","package","throws","const","goto","private","transient","debugger","implements","protected","volatile","double","import","public","let","yield"],g=e.RESERVED_WORDS={},h=0,i=a.length;h<i;h++)g[a[h]]=true;e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a)?true:false}})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);Handlebars.precompile=function(c,e){var e=e||{},b=Handlebars.parse(c),b=(new Handlebars.Compiler).compile(b,
e);return(new Handlebars.JavaScriptCompiler).compile(b,e)};Handlebars.compile=function(c,e){var e=e||{},b;return function(a,g){if(!b){var h=Handlebars.parse(c),h=(new Handlebars.Compiler).compile(h,e),h=(new Handlebars.JavaScriptCompiler).compile(h,e,void 0,true);b=Handlebars.template(h)}return b.call(this,a,g)}};Handlebars.VM={template:function(c){var e={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(b,a,c){var e=this.programs[b];
if(c)return Handlebars.VM.program(a,c);e||(e=this.programs[b]=Handlebars.VM.program(a));return e},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(b,a){a=a||{};return c.call(e,Handlebars,b,a.helpers,a.partials,a.data)}},programWithDepth:function(c,e,b){var a=Array.prototype.slice.call(arguments,2);return function(b,h){h=h||{};return c.apply(this,[b,h.data||e].concat(a))}},program:function(c,e){return function(b,a){a=a||{};return c(b,a.data||e)}},noop:function(){return""},
invokePartial:function(c,e,b,a,g,h){a={helpers:a,partials:g,data:h};if(c===void 0)throw new Handlebars.Exception("The partial "+e+" could not be found");if(c instanceof Function)return c(b,a);if(Handlebars.compile){g[e]=Handlebars.compile(c,{data:h!==void 0});return g[e](b,a)}throw new Handlebars.Exception("The partial "+e+" could not be compiled when running in runtime-only mode");}};Handlebars.template=Handlebars.VM.template;return Handlebars});
