(this.webpackJsonpjnck=this.webpackJsonpjnck||[]).push([[21],{766:function(e,t,n){!function(e){"use strict";var t="from",n=new RegExp("^(\\s*)\\b("+t+")\\b","i"),r=["run","cmd","entrypoint","shell"],o=new RegExp("^(\\s*)("+r.join("|")+")(\\s+\\[)","i"),a="expose",l=new RegExp("^(\\s*)("+a+")(\\s+)","i"),s=["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"],i="("+[t,a].concat(r).concat(s).join("|")+")",d=new RegExp("^(\\s*)"+i+"(\\s*)(#.*)?$","i"),c=new RegExp("^(\\s*)"+i+"(\\s+)","i");e.defineSimpleMode("dockerfile",{start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:n,token:[null,"keyword"],sol:!0,next:"from"},{regex:d,token:[null,"keyword",null,"error"],sol:!0},{regex:o,token:[null,"keyword",null],sol:!0,next:"array"},{regex:l,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:c,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],meta:{lineComment:"#"}}),e.defineMIME("text/x-dockerfile","dockerfile")}(n(62),n(868))},868:function(e,t,n){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}function o(e,o){(e.next||e.push)&&t(o,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function a(e,t){return function(n,r){if(r.pending){var o=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=o.text.length,o.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var a=r.local.endToken||null;return r.local=r.localState=null,a}var l;return a=r.local.mode.token(n,r.localState),r.local.endScan&&(l=r.local.endScan.exec(n.current()))&&(n.pos=n.start+l.index),a}for(var i=e[r.state],d=0;d<i.length;d++){var c=i[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){c.data.next?r.state=c.data.next:c.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=c.data.push):c.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),c.data.mode&&s(t,r,c.data.mode,c.token),c.data.indent&&r.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&r.indent.pop();var p=c.token;if(p&&p.apply&&(p=p(u)),u.length>2&&c.token&&"string"!=typeof c.token){r.pending=[];for(var g=2;g<u.length;g++)u[g]&&r.pending.push({text:u[g],token:c.token[g-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),p[0]}return p&&p.join?p[0]:p}}return n.next(),null}}function l(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!l(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function s(t,r,o,a){var s;if(o.persistent)for(var i=r.persistentStates;i&&!s;i=i.next)(o.spec?l(o.spec,i.spec):o.mode==i.mode)&&(s=i);var d=s?s.mode:o.mode||e.getMode(t,o.spec),c=s?s.state:e.startState(d);o.persistent&&!s&&(r.persistentStates={mode:d,spec:o.spec,state:c,next:r.persistentStates}),r.localState=c,r.local={mode:d,end:o.end&&n(o.end),endScan:o.end&&!1!==o.forceEnd&&n(o.end,!1),endToken:a&&a.join?a[a.length-1]:a}}function i(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function d(t,n){return function(r,o,a){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,o,a);if(null==r.indent||r.local||n.dontIndentStates&&i(r.state,n.dontIndentStates)>-1)return e.Pass;var l=r.indent.length-1,s=t[r.state];e:for(;;){for(var d=0;d<s.length;d++){var c=s[d];if(c.data.dedent&&!1!==c.data.dedentIfLineStart){var u=c.regex.exec(o);if(u&&u[0]){l--,(c.next||c.push)&&(s=t[c.next||c.push]),o=o.slice(u[0].length);continue e}}}break}return l<0?0:r.indent[l]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,r){t(r,"start");var l={},s=r.meta||{},i=!1;for(var c in r)if(c!=s&&r.hasOwnProperty(c))for(var u=l[c]=[],p=r[c],g=0;g<p.length;g++){var f=p[g];u.push(new o(f,r)),(f.indent||f.dedent)&&(i=!0)}var x={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:i?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:a(l,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:d(l,s)};if(s)for(var k in s)s.hasOwnProperty(k)&&(x[k]=s[k]);return x}}(n(62))}}]);
//# sourceMappingURL=21.6145b95d.chunk.js.map