(this.webpackJsonpjnck=this.webpackJsonpjnck||[]).push([[95],{822:function(n,e,t){!function(n){"use strict";n.defineMode("sieve",(function(n){function e(n){for(var e={},t=n.split(" "),r=0;r<t.length;++r)e[t[r]]=!0;return e}var t=e("if elsif else stop require"),r=e("true false not"),i=n.indentUnit;function u(n,e){var i=n.next();if("/"==i&&n.eat("*"))return e.tokenize=l,l(n,e);if("#"===i)return n.skipToEnd(),"comment";if('"'==i)return e.tokenize=a(i),e.tokenize(n,e);if("("==i)return e._indent.push("("),e._indent.push("{"),null;if("{"===i)return e._indent.push("{"),null;if(")"==i&&(e._indent.pop(),e._indent.pop()),"}"===i)return e._indent.pop(),null;if(","==i)return null;if(";"==i)return null;if(/[{}\(\),;]/.test(i))return null;if(/\d/.test(i))return n.eatWhile(/[\d]/),n.eat(/[KkMmGg]/),"number";if(":"==i)return n.eatWhile(/[a-zA-Z_]/),n.eatWhile(/[a-zA-Z0-9_]/),"operator";n.eatWhile(/\w/);var u=n.current();return"text"==u&&n.eat(":")?(e.tokenize=o,"string"):t.propertyIsEnumerable(u)?"keyword":r.propertyIsEnumerable(u)?"atom":null}function o(n,e){return e._multiLineString=!0,n.sol()?("."==n.next()&&n.eol()&&(e._multiLineString=!1,e.tokenize=u),"string"):(n.eatSpace(),"#"==n.peek()?(n.skipToEnd(),"comment"):(n.skipToEnd(),"string"))}function l(n,e){for(var t,r=!1;null!=(t=n.next());){if(r&&"/"==t){e.tokenize=u;break}r="*"==t}return"comment"}function a(n){return function(e,t){for(var r,i=!1;null!=(r=e.next())&&(r!=n||i);)i=!i&&"\\"==r;return i||(t.tokenize=u),"string"}}return{startState:function(n){return{tokenize:u,baseIndent:n||0,_indent:[]}},token:function(n,e){return n.eatSpace()?null:(e.tokenize||u)(n,e)},indent:function(n,e){var t=n._indent.length;return e&&"}"==e[0]&&t--,t<0&&(t=0),t*i},electricChars:"}"}})),n.defineMIME("application/sieve","sieve")}(t(61))}}]);
//# sourceMappingURL=95.3a146fa5.chunk.js.map