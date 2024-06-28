import{_ as ze,u as Ue,r as ge,e as Q,f,B as Se,h as ie,C as _e,D as Ie,E as Te,i as Ae,k as Ee,l as we,n as Me,c as J,j as Le,t as Ce,v as Ne,x as Pe,a as Be}from"./Bn8s6ksr.js";import{u as qe}from"./Ct7qimw6.js";import{c as je,g as Ke}from"./BosuxZz1.js";var Fe={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(ue,xe){(function(me,b){ue.exports=b()})(je,function me(){var b=typeof self<"u"?self:typeof window<"u"?window:b!==void 0?b:{},G=!b.document&&!!b.postMessage,ve=b.IS_PAPA_WORKER||!1,he={},de=0,u={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(l(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!l(e.transform)&&e.transform,e.worker&&u.WORKERS_SUPPORTED){var n=function(){if(!u.WORKERS_SUPPORTED)return!1;var d=(L=b.URL||b.webkitURL||null,C=me.toString(),u.BLOB_URL||(u.BLOB_URL=L.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",C,")();"],{type:"text/javascript"})))),c=new b.Worker(d),L,C;return c.onmessage=Re,c.id=de++,he[c.id]=c}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=l(e.step),e.chunk=l(e.chunk),e.complete=l(e.complete),e.error=l(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return u.NODE_STREAM_INPUT,typeof t=="string"?(t=function(d){return d.charCodeAt(0)===65279?d.slice(1):d}(t),s=e.download?new le(e):new se(e)):t.readable===!0&&l(t.read)&&l(t.on)?s=new ce(e):(b.File&&t instanceof File||t instanceof Object)&&(s=new X(e)),s.stream(t)},unparse:function(t,e){var r=!1,n=!0,s=",",d=`\r
`,c='"',L=c+c,C=!1,a=null,R=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||u.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(C=e.skipEmptyLines),typeof e.newline=="string"&&(d=e.newline),typeof e.quoteChar=="string"&&(c=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(L=e.escapeChar+c),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(R=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var h=new RegExp(ee(c),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return H(null,t,C);if(typeof t[0]=="object")return H(a||Object.keys(t[0]),t,C)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),H(t.fields||[],t.data||[],C);throw new Error("Unable to serialize unrecognized input");function H(i,y,U){var x="";typeof i=="string"&&(i=JSON.parse(i)),typeof y=="string"&&(y=JSON.parse(y));var F=Array.isArray(i)&&0<i.length,T=!Array.isArray(y[0]);if(F&&n){for(var A=0;A<i.length;A++)0<A&&(x+=s),x+=z(i[A],A);0<y.length&&(x+=d)}for(var o=0;o<y.length;o++){var g=F?i.length:y[o].length,E=!1,S=F?Object.keys(y[o]).length===0:y[o].length===0;if(U&&!F&&(E=U==="greedy"?y[o].join("").trim()==="":y[o].length===1&&y[o][0].length===0),U==="greedy"&&F){for(var m=[],M=0;M<g;M++){var O=T?i[M]:M;m.push(y[o][O])}E=m.join("").trim()===""}if(!E){for(var v=0;v<g;v++){0<v&&!S&&(x+=s);var $=F&&T?i[v]:v;x+=z(y[o][$],v)}o<y.length-1&&(!U||0<g&&!S)&&(x+=d)}}return x}function z(i,y){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var U=!1;R&&typeof i=="string"&&R.test(i)&&(i="'"+i,U=!0);var x=i.toString().replace(h,L);return(U=U||r===!0||typeof r=="function"&&r(i,y)||Array.isArray(r)&&r[y]||function(F,T){for(var A=0;A<T.length;A++)if(-1<F.indexOf(T[A]))return!0;return!1}(x,u.BAD_DELIMITERS)||-1<x.indexOf(s)||x.charAt(0)===" "||x.charAt(x.length-1)===" ")?c+x+c:x}}};if(u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!G&&!!b.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=fe,u.ParserHandle=ye,u.NetworkStreamer=le,u.FileStreamer=X,u.StringStreamer=se,u.ReadableStreamStreamer=ce,b.jQuery){var P=b.jQuery;P.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(d){if(!(P(this).prop("tagName").toUpperCase()==="INPUT"&&P(this).attr("type").toLowerCase()==="file"&&b.FileReader)||!this.files||this.files.length===0)return!0;for(var c=0;c<this.files.length;c++)r.push({file:this.files[c],inputElem:this,instanceConfig:P.extend({},e)})}),n(),this;function n(){if(r.length!==0){var d,c,L,C,a=r[0];if(l(t.before)){var R=t.before(a.file,a.inputElem);if(typeof R=="object"){if(R.action==="abort")return d="AbortError",c=a.file,L=a.inputElem,C=R.reason,void(l(t.error)&&t.error({name:d},c,L,C));if(R.action==="skip")return void s();typeof R.config=="object"&&(a.instanceConfig=P.extend(a.instanceConfig,R.config))}else if(R==="skip")return void s()}var h=a.instanceConfig.complete;a.instanceConfig.complete=function(H){l(h)&&h(H,a.file,a.inputElem),s()},u.parse(a.file,a.instanceConfig)}else l(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function W(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=I(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new ye(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&l(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var d=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var c=d.meta.cursor;this._finished||(this._partialLine=s.substring(c-this._baseIndex),this._baseIndex=c),d&&d.data&&(this._rowCount+=d.data.length);var L=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(ve)b.postMessage({results:d,workerId:u.WORKER_ID,finished:L});else if(l(this._config.chunk)&&!r){if(this._config.chunk(d,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);d=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(d.data),this._completeResults.errors=this._completeResults.errors.concat(d.errors),this._completeResults.meta=d.meta),this._completed||!L||!l(this._config.complete)||d&&d.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),L||d&&d.meta.paused||this._nextChunk(),d}this._halted=!0},this._sendError=function(e){l(this._config.error)?this._config.error(e):ve&&this._config.error&&b.postMessage({workerId:u.WORKER_ID,error:e,finished:!1})}}function le(t){var e;(t=t||{}).chunkSize||(t.chunkSize=u.RemoteChunkSize),W.call(this,t),this._nextChunk=G?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),G||(e.onload=p(this._chunkLoaded,this),e.onerror=p(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!G),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(d){this._chunkError(d.message)}G&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function X(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=u.LocalChunkSize),W.call(this,t);var n=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,n?((e=new FileReader).onload=p(this._chunkLoaded,this),e.onerror=p(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var d=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,d)}var c=e.readAsText(s,this._config.encoding);n||this._chunkLoaded({target:{result:c}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function se(t){var e;W.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function ce(t){W.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){W.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){W.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=p(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(d){this._streamError(d)}},this),this._streamError=p(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=p(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=p(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ye(t){var e,r,n,s=Math.pow(2,53),d=-s,c=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,L=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,C=this,a=0,R=0,h=!1,H=!1,z=[],i={data:[],errors:[],meta:{}};if(l(t.step)){var y=t.step;t.step=function(o){if(i=o,F())x();else{if(x(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(i.data=i.data[0],y(i,C))}}}function U(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function x(){return i&&n&&(A("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!U(o)})),F()&&function(){if(!i)return;function o(E,S){l(t.transformHeader)&&(E=t.transformHeader(E,S)),z.push(E)}if(Array.isArray(i.data[0])){for(var g=0;F()&&g<i.data.length;g++)i.data[g].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(E,S){var m,M=t.header?{}:[];for(m=0;m<E.length;m++){var O=m,v=E[m];t.header&&(O=m>=z.length?"__parsed_extra":z[m]),t.transform&&(v=t.transform(v,O)),v=T(O,v),O==="__parsed_extra"?(M[O]=M[O]||[],M[O].push(v)):M[O]=v}return t.header&&(m>z.length?A("FieldMismatch","TooManyFields","Too many fields: expected "+z.length+" fields but parsed "+m,R+S):m<z.length&&A("FieldMismatch","TooFewFields","Too few fields: expected "+z.length+" fields but parsed "+m,R+S)),M}var g=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),g=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=z),R+=g,i}()}function F(){return t.header&&z.length===0}function T(o,g){return E=o,t.dynamicTypingFunction&&t.dynamicTyping[E]===void 0&&(t.dynamicTyping[E]=t.dynamicTypingFunction(E)),(t.dynamicTyping[E]||t.dynamicTyping)===!0?g==="true"||g==="TRUE"||g!=="false"&&g!=="FALSE"&&(function(S){if(c.test(S)){var m=parseFloat(S);if(d<m&&m<s)return!0}return!1}(g)?parseFloat(g):L.test(g)?new Date(g):g===""?null:g):g;var E}function A(o,g,E,S){var m={type:o,code:g,message:E};S!==void 0&&(m.row=S),i.errors.push(m)}this.parse=function(o,g,E){var S=t.quoteChar||'"';if(t.newline||(t.newline=function(O,v){O=O.substring(0,1048576);var $=new RegExp(ee(v)+"([^]*?)"+ee(v),"gm"),B=(O=O.replace($,"")).split("\r"),V=O.split(`
`),Z=1<V.length&&V[0].length<B[0].length;if(B.length===1||Z)return`
`;for(var q=0,w=0;w<B.length;w++)B[w][0]===`
`&&q++;return q>=B.length/2?`\r
`:"\r"}(o,S)),n=!1,t.delimiter)l(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var m=function(O,v,$,B,V){var Z,q,w,D;V=V||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ae=0;ae<V.length;ae++){var _=V[ae],pe=0,Y=0,oe=0;w=void 0;for(var te=new fe({comments:B,delimiter:_,newline:v,preview:10}).parse(O),re=0;re<te.data.length;re++)if($&&U(te.data[re]))oe++;else{var ne=te.data[re].length;Y+=ne,w!==void 0?0<ne&&(pe+=Math.abs(ne-w),w=ne):w=ne}0<te.data.length&&(Y/=te.data.length-oe),(q===void 0||pe<=q)&&(D===void 0||D<Y)&&1.99<Y&&(q=pe,Z=_,D=Y)}return{successful:!!(t.delimiter=Z),bestDelimiter:Z}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);m.successful?t.delimiter=m.bestDelimiter:(n=!0,t.delimiter=u.DefaultDelimiter),i.meta.delimiter=t.delimiter}var M=I(t);return t.preview&&t.header&&M.preview++,e=o,r=new fe(M),i=r.parse(e,g,E),x(),h?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,r.abort(),e=l(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){C.streamer._halted?(h=!1,C.streamer.parseChunk(e,!0)):setTimeout(C.resume,3)},this.aborted=function(){return H},this.abort=function(){H=!0,r.abort(),i.meta.aborted=!0,l(t.complete)&&t.complete(i),e=""}}function ee(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fe(t){var e,r=(t=t||{}).delimiter,n=t.newline,s=t.comments,d=t.step,c=t.preview,L=t.fastMode,C=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(C=t.escapeChar),(typeof r!="string"||-1<u.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<u.BAD_DELIMITERS.indexOf(s))&&(s=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var a=0,R=!1;this.parse=function(h,H,z){if(typeof h!="string")throw new Error("Input must be a string");var i=h.length,y=r.length,U=n.length,x=s.length,F=l(d),T=[],A=[],o=[],g=a=0;if(!h)return j();if(t.header&&!H){var E=h.split(n)[0].split(r),S=[],m={},M=!1;for(var O in E){var v=E[O];l(t.transformHeader)&&(v=t.transformHeader(v,O));var $=v,B=m[v]||0;for(0<B&&(M=!0,$=v+"_"+B),m[v]=B+1;S.includes($);)$=$+"_"+B;S.push($)}if(M){var V=h.split(n);V[0]=S.join(r),h=V.join(n)}}if(L||L!==!1&&h.indexOf(e)===-1){for(var Z=h.split(n),q=0;q<Z.length;q++){if(o=Z[q],a+=o.length,q!==Z.length-1)a+=n.length;else if(z)return j();if(!s||o.substring(0,x)!==s){if(F){if(T=[],oe(o.split(r)),ke(),R)return j()}else oe(o.split(r));if(c&&c<=q)return T=T.slice(0,c),j(!0)}}return j()}for(var w=h.indexOf(r,a),D=h.indexOf(n,a),ae=new RegExp(ee(C)+ee(e),"g"),_=h.indexOf(e,a);;)if(h[a]!==e)if(s&&o.length===0&&h.substring(a,a+x)===s){if(D===-1)return j();a=D+U,D=h.indexOf(n,a),w=h.indexOf(r,a)}else if(w!==-1&&(w<D||D===-1))o.push(h.substring(a,w)),a=w+y,w=h.indexOf(r,a);else{if(D===-1)break;if(o.push(h.substring(a,D)),ne(D+U),F&&(ke(),R))return j();if(c&&T.length>=c)return j(!0)}else for(_=a,a++;;){if((_=h.indexOf(e,_+1))===-1)return z||A.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:T.length,index:a}),re();if(_===i-1)return re(h.substring(a,_).replace(ae,e));if(e!==C||h[_+1]!==C){if(e===C||_===0||h[_-1]!==C){w!==-1&&w<_+1&&(w=h.indexOf(r,_+1)),D!==-1&&D<_+1&&(D=h.indexOf(n,_+1));var pe=te(D===-1?w:Math.min(w,D));if(h.substr(_+1+pe,y)===r){o.push(h.substring(a,_).replace(ae,e)),h[a=_+1+pe+y]!==e&&(_=h.indexOf(e,a)),w=h.indexOf(r,a),D=h.indexOf(n,a);break}var Y=te(D);if(h.substring(_+1+Y,_+1+Y+U)===n){if(o.push(h.substring(a,_).replace(ae,e)),ne(_+1+Y+U),w=h.indexOf(r,a),_=h.indexOf(e,a),F&&(ke(),R))return j();if(c&&T.length>=c)return j(!0);break}A.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:T.length,index:a}),_++}}else _++}return re();function oe(K){T.push(K),g=a}function te(K){var De=0;if(K!==-1){var Oe=h.substring(_+1,K);Oe&&Oe.trim()===""&&(De=Oe.length)}return De}function re(K){return z||(K===void 0&&(K=h.substring(a)),o.push(K),a=i,oe(o),F&&ke()),j()}function ne(K){a=K,oe(o),o=[],D=h.indexOf(n,a)}function j(K){return{data:T,errors:A,meta:{delimiter:r,linebreak:n,aborted:R,truncated:!!K,cursor:g+(H||0)}}}function ke(){d(j()),T=[],A=[]}},this.abort=function(){R=!0},this.getCharIndex=function(){return a}}function Re(t){var e=t.data,r=he[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){n=!0,be(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:k,resume:k};if(l(r.userStep)){for(var d=0;d<e.results.data.length&&(r.userStep({data:e.results.data[d],errors:e.results.errors,meta:e.results.meta},s),!n);d++);delete e.results}else l(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!n&&be(e.workerId,e.results)}function be(t,e){var r=he[t];l(r.userComplete)&&r.userComplete(e),r.terminate(),delete he[t]}function k(){throw new Error("Not implemented.")}function I(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=I(t[r]);return e}function p(t,e){return function(){t.apply(e,arguments)}}function l(t){return typeof t=="function"}return ve&&(b.onmessage=function(t){var e=t.data;if(u.WORKER_ID===void 0&&e&&(u.WORKER_ID=e.workerId),typeof e.input=="string")b.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0});else if(b.File&&e.input instanceof File||e.input instanceof Object){var r=u.parse(e.input,e.config);r&&b.postMessage({workerId:u.WORKER_ID,results:r,finished:!0})}}),(le.prototype=Object.create(W.prototype)).constructor=le,(X.prototype=Object.create(W.prototype)).constructor=X,(se.prototype=Object.create(se.prototype)).constructor=se,(ce.prototype=Object.create(W.prototype)).constructor=ce,u})})(Fe);var We=Fe.exports;const He=Ke(We),N=ue=>(Ne("data-v-f1a26adb"),ue=ue(),Pe(),ue),$e=N(()=>f("h1",{class:"text-3xl font-bold mb-4"},"Админ панель",-1)),Ve={class:"mb-8"},Qe=N(()=>f("h2",{class:"text-xl font-semibold mb-2"},"Группы",-1)),Je={class:"mb-4"},Ge=N(()=>f("h3",{class:"text-lg font-medium mb-2"},"Добавить группу",-1)),Ze={class:"flex items-center mb-2"},Ye=N(()=>f("label",{for:"groupName",class:"mr-2"},"Название:",-1)),Xe=N(()=>f("button",{type:"submit",class:"px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"},"Добавить ",-1)),et=N(()=>f("h3",{class:"text-lg font-medium mb-2"},"Список групп",-1)),tt=["onClick"],rt=N(()=>f("h2",{class:"text-xl font-semibold mb-2"},"Пользователи",-1)),nt={class:"mb-4"},it=N(()=>f("h3",{class:"text-lg font-medium mb-2"},"Добавить пользователя",-1)),st={class:"flex items-center mb-2"},at=N(()=>f("label",{for:"userName",class:"mr-2"},"Имя:",-1)),ot=N(()=>f("button",{type:"submit",class:"px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"},"Добавить ",-1)),ut=N(()=>f("h3",{class:"text-lg font-medium mb-2"},"Список пользователей",-1)),ht=["onClick"],dt=N(()=>f("h2",null,"Импорт пользователей из CSV",-1)),lt={key:0,class:"csv-data"},ct=N(()=>f("h2",null,"Данные из CSV файла:",-1)),ft={__name:"admins",setup(ue){qe({title:"Админ панель"});const xe=Be(),me=Ue("token"),b=ge([]),G=ge(""),ve=()=>{},he=k=>{},de=ge([]),u=ge(""),P=ge(!1),W=async()=>{try{const k=await fetch(`${xe.apiUrl}/users`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${me.value}`},body:JSON.stringify({name:u.value})});if(!k.ok)throw new Error("Failed to add user");const I=await k.json();de.value.push(I),u.value=""}catch(k){console.error("Error adding user:",k)}},le=async k=>{try{if(!(await fetch(`${xe.apiUrl}/users/${k}`,{method:"DELETE",headers:{Authorization:`Bearer ${me.value}`}})).ok)throw new Error("Failed to delete user");de.value=de.value.filter(p=>p.id!==k)}catch(I){console.error("Error deleting user:",I)}},X=ge([]),se=k=>{X.value=k},ce=k=>{console.error("Error importing CSV file:",k)},ye=k=>new Promise((I,p)=>{He.parse(k,{header:!0,complete:l=>{I(l.data)},error:l=>{p(l)}})}),ee=k=>{k.preventDefault(),P.value=!0},fe=async k=>{var p;k.preventDefault(),P.value=!1;const I=(p=k.dataTransfer)==null?void 0:p.files[0];if(I)try{const l=await ye(I);se(l)}catch(l){ce(l)}},Re=()=>{P.value=!1},be=()=>{P.value=!1};return(k,I)=>(J(),Q("div",{class:"main-content adminPanel",onDragover:_e(ee,["prevent"]),onDrop:_e(fe,["prevent"])},[$e,f("div",{class:Se(["overlay",{active:ie(P)}])},null,2),f("div",Ve,[Qe,f("div",Je,[Ge,f("form",{onSubmit:_e(ve,["prevent"])},[f("div",Ze,[Ye,Ie(f("input",{type:"text",id:"groupName","onUpdate:modelValue":I[0]||(I[0]=p=>Ae(G)?G.value=p:null),class:"rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[Te,ie(G)]])]),Xe],32)]),f("div",null,[et,f("ul",null,[(J(!0),Q(Ee,null,we(ie(b),p=>(J(),Q("li",{key:p.id,class:"mb-2"},[Le(Ce(p.name)+" ",1),f("button",{onClick:l=>he(p.id),class:"ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"},"Удалить ",8,tt)]))),128))])])]),f("div",null,[rt,f("div",nt,[it,f("form",{onSubmit:_e(W,["prevent"])},[f("div",st,[at,Ie(f("input",{type:"text",id:"userName","onUpdate:modelValue":I[1]||(I[1]=p=>Ae(u)?u.value=p:null),class:"rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[Te,ie(u)]])]),ot],32)]),f("div",null,[ut,f("ul",null,[(J(!0),Q(Ee,null,we(ie(de),p=>(J(),Q("li",{key:p.id,class:"mb-2"},[Le(Ce(p.name)+" ",1),f("button",{onClick:l=>le(p.id),class:"ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"},"Удалить ",8,ht)]))),128))])]),f("div",{class:Se(["csv-dropzone",{highlighted:ie(P)}])},[dt,f("div",{class:"drop-zone",onDragover:_e(ee,["prevent"]),onDrop:_e(fe,["prevent"]),onDragleave:Re,onDragend:be},"> Перетащите файл сюда или нажмите для выбора ",32)],2),ie(X).length>0?(J(),Q("div",lt,[ct,f("ul",null,[(J(!0),Q(Ee,null,we(ie(X),(p,l)=>(J(),Q("li",{key:l},[(J(!0),Q(Ee,null,we(p,(t,e)=>(J(),Q("span",{key:e},Ce(e)+": "+Ce(t),1))),128))]))),128))])])):Me("",!0)])],32))}},mt=ze(ft,[["__scopeId","data-v-f1a26adb"]]);export{mt as default};
