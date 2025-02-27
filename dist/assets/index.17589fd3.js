import{b9 as on,bb as xr,bc as Cr}from"./index.df77b574.js";import{d as Ar,e as Br,f as Tr,h as kr,c as Sr,j as Nr,i as Rr,k as Ir,l as Lr,n as Ur,o as Fr,p as Mr,q as Pr,t as Dr,g as Or,u as $r,v as zr,w as Hr,x as Wr,b as qr,y as Yr,z as Vr,s as Kr,a as Qr,r as Jr,m as Gr,A as Xr,B as jr,C as Zr,D as eo}from"./mobile.16e250bc.js";function to(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(o,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const an="https://registry.walletconnect.com";function no(){return an+"/api/v2/wallets"}function ro(){return an+"/api/v2/dapps"}function ln(e,t="mobile"){var n;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:(n=e.image_url.sm)!==null&&n!==void 0?n:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function oo(e,t="mobile"){return Object.values(e).filter(n=>!!n[t].universal||!!n[t].native).map(n=>ln(n,t))}const io=Object.freeze(Object.defineProperty({__proto__:null,detectEnv:Ar,detectOS:Br,isAndroid:Tr,isIOS:kr,isMobile:Sr,isNode:Nr,isBrowser:Rr,getFromWindow:Ir,getFromWindowOrThrow:Lr,getDocumentOrThrow:Ur,getDocument:Fr,getNavigatorOrThrow:Mr,getNavigator:Pr,getLocationOrThrow:Dr,getLocation:Or,getCryptoOrThrow:$r,getCrypto:zr,getLocalStorageOrThrow:Hr,getLocalStorage:Wr,getClientMeta:qr,safeJsonParse:Yr,safeJsonStringify:Vr,setLocal:Kr,getLocal:Qr,removeLocal:Jr,mobileLinkChoiceKey:Gr,formatIOSMobile:Xr,saveMobileLinkInfo:jr,getMobileRegistryEntry:Zr,getMobileLinkRegistry:eo,getWalletRegistryUrl:no,getDappRegistryUrl:ro,formatMobileRegistryEntry:ln,formatMobileRegistry:oo},Symbol.toStringTag,{value:"Module"})),ao=on(io);var Ce={},lo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},un={},oe={},uo={}.toString,ut=Array.isArray||function(e){return uo.call(e)=="[object Array]"},co=ut;function fo(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},e.foo()===42}catch{return!1}}R.TYPED_ARRAY_SUPPORT=fo();var Nt=R.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function R(e,t,n){return!R.TYPED_ARRAY_SUPPORT&&!(this instanceof R)?new R(e,t,n):typeof e=="number"?cn(this,e):vo(this,e,t,n)}R.TYPED_ARRAY_SUPPORT&&(R.prototype.__proto__=Uint8Array.prototype,R.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&R[Symbol.species]===R&&Object.defineProperty(R,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}));function ct(e){if(e>=Nt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Nt.toString(16)+" bytes");return e|0}function so(e){return e!==e}function ce(e,t){var n;return R.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(t),n.__proto__=R.prototype):(n=e,n===null&&(n=new R(t)),n.length=t),n}function cn(e,t){var n=ce(e,t<0?0:ct(t)|0);if(!R.TYPED_ARRAY_SUPPORT)for(var o=0;o<t;++o)n[o]=0;return n}function ho(e,t){var n=sn(t)|0,o=ce(e,n),a=o.write(t);return a!==n&&(o=o.slice(0,a)),o}function je(e,t){for(var n=t.length<0?0:ct(t.length)|0,o=ce(e,n),a=0;a<n;a+=1)o[a]=t[a]&255;return o}function po(e,t,n,o){if(n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(o||0))throw new RangeError("'length' is out of bounds");var a;return n===void 0&&o===void 0?a=new Uint8Array(t):o===void 0?a=new Uint8Array(t,n):a=new Uint8Array(t,n,o),R.TYPED_ARRAY_SUPPORT?a.__proto__=R.prototype:a=je(e,a),a}function _o(e,t){if(R.isBuffer(t)){var n=ct(t.length)|0,o=ce(e,n);return o.length===0||t.copy(o,0,0,n),o}if(t){if(typeof ArrayBuffer<"u"&&t.buffer instanceof ArrayBuffer||"length"in t)return typeof t.length!="number"||so(t.length)?ce(e,0):je(e,t);if(t.type==="Buffer"&&Array.isArray(t.data))return je(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function fn(e,t){t=t||1/0;for(var n,o=e.length,a=null,l=[],f=0;f<o;++f){if(n=e.charCodeAt(f),n>55295&&n<57344){if(!a){if(n>56319){(t-=3)>-1&&l.push(239,191,189);continue}else if(f+1===o){(t-=3)>-1&&l.push(239,191,189);continue}a=n;continue}if(n<56320){(t-=3)>-1&&l.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(t-=3)>-1&&l.push(239,191,189);if(a=null,n<128){if((t-=1)<0)break;l.push(n)}else if(n<2048){if((t-=2)<0)break;l.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;l.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;l.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return l}function sn(e){if(R.isBuffer(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;return t===0?0:fn(e).length}function go(e,t,n,o){for(var a=0;a<o&&!(a+n>=t.length||a>=e.length);++a)t[a+n]=e[a];return a}function mo(e,t,n,o){return go(fn(t,e.length-n),e,n,o)}function vo(e,t,n,o){if(typeof t=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer?po(e,t,n,o):typeof t=="string"?ho(e,t):_o(e,t)}R.prototype.write=function(t,n,o){n===void 0?(o=this.length,n=0):o===void 0&&typeof n=="string"?(o=this.length,n=0):isFinite(n)&&(n=n|0,isFinite(o)?o=o|0:o=void 0);var a=this.length-n;if((o===void 0||o>a)&&(o=a),t.length>0&&(o<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return mo(this,t,n,o)};R.prototype.slice=function(t,n){var o=this.length;t=~~t,n=n===void 0?o:~~n,t<0?(t+=o,t<0&&(t=0)):t>o&&(t=o),n<0?(n+=o,n<0&&(n=0)):n>o&&(n=o),n<t&&(n=t);var a;if(R.TYPED_ARRAY_SUPPORT)a=this.subarray(t,n),a.__proto__=R.prototype;else{var l=n-t;a=new R(l,void 0);for(var f=0;f<l;++f)a[f]=this[f+t]}return a};R.prototype.copy=function(t,n,o,a){if(o||(o=0),!a&&a!==0&&(a=this.length),n>=t.length&&(n=t.length),n||(n=0),a>0&&a<o&&(a=o),a===o||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("sourceStart out of bounds");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),t.length-n<a-o&&(a=t.length-n+o);var l=a-o,f;if(this===t&&o<n&&n<a)for(f=l-1;f>=0;--f)t[f+n]=this[f+o];else if(l<1e3||!R.TYPED_ARRAY_SUPPORT)for(f=0;f<l;++f)t[f+n]=this[f+o];else Uint8Array.prototype.set.call(t,this.subarray(o,o+l),n);return l};R.prototype.fill=function(t,n,o){if(typeof t=="string"){if(typeof n=="string"?(n=0,o=this.length):typeof o=="string"&&(o=this.length),t.length===1){var a=t.charCodeAt(0);a<256&&(t=a)}}else typeof t=="number"&&(t=t&255);if(n<0||this.length<n||this.length<o)throw new RangeError("Out of range index");if(o<=n)return this;n=n>>>0,o=o===void 0?this.length:o>>>0,t||(t=0);var l;if(typeof t=="number")for(l=n;l<o;++l)this[l]=t;else{var f=R.isBuffer(t)?t:new R(t),u=f.length;for(l=0;l<o-n;++l)this[l+n]=f[l%u]}return this};R.concat=function(t,n){if(!co(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return ce(null,0);var o;if(n===void 0)for(n=0,o=0;o<t.length;++o)n+=t[o].length;var a=cn(null,n),l=0;for(o=0;o<t.length;++o){var f=t[o];if(!R.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(a,l),l+=f.length}return a};R.byteLength=sn;R.prototype._isBuffer=!0;R.isBuffer=function(t){return!!(t!=null&&t._isBuffer)};oe.alloc=function(e){var t=new R(e);return t.fill(0),t};oe.from=function(e){return new R(e)};var K={},ft,wo=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];K.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};K.getSymbolTotalCodewords=function(t){return wo[t]};K.getBCHDigit=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t};K.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ft=t};K.isKanjiModeEnabled=function(){return typeof ft<"u"};K.toSJIS=function(t){return ft(t)};var Pe={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");var o=n.toLowerCase();switch(o){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,a){if(e.isValid(o))return o;try{return t(o)}catch{return a}}})(Pe);function hn(){this.buffer=[],this.length=0}hn.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var yo=hn,Rt=oe;function Ae(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=Rt.alloc(e*e),this.reservedBit=Rt.alloc(e*e)}Ae.prototype.set=function(e,t,n,o){var a=e*this.size+t;this.data[a]=n,o&&(this.reservedBit[a]=!0)};Ae.prototype.get=function(e,t){return this.data[e*this.size+t]};Ae.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};Ae.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var bo=Ae,dn={};(function(e){var t=K.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];for(var a=Math.floor(o/7)+2,l=t(o),f=l===145?26:Math.ceil((l-13)/(2*a-2))*2,u=[l-7],d=1;d<a-1;d++)u[d]=u[d-1]-f;return u.push(6),u.reverse()},e.getPositions=function(o){for(var a=[],l=e.getRowColCoords(o),f=l.length,u=0;u<f;u++)for(var d=0;d<f;d++)u===0&&d===0||u===0&&d===f-1||u===f-1&&d===0||a.push([l[u],l[d]]);return a}})(dn);var pn={},Eo=K.getSymbolSize,It=7;pn.getPositions=function(t){var n=Eo(t);return[[0,0],[n-It,0],[0,n-It]]};var _n={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(a){return a!=null&&a!==""&&!isNaN(a)&&a>=0&&a<=7},e.from=function(a){return e.isValid(a)?parseInt(a,10):void 0},e.getPenaltyN1=function(a){for(var l=a.size,f=0,u=0,d=0,_=null,h=null,v=0;v<l;v++){u=d=0,_=h=null;for(var A=0;A<l;A++){var k=a.get(v,A);k===_?u++:(u>=5&&(f+=t.N1+(u-5)),_=k,u=1),k=a.get(A,v),k===h?d++:(d>=5&&(f+=t.N1+(d-5)),h=k,d=1)}u>=5&&(f+=t.N1+(u-5)),d>=5&&(f+=t.N1+(d-5))}return f},e.getPenaltyN2=function(a){for(var l=a.size,f=0,u=0;u<l-1;u++)for(var d=0;d<l-1;d++){var _=a.get(u,d)+a.get(u,d+1)+a.get(u+1,d)+a.get(u+1,d+1);(_===4||_===0)&&f++}return f*t.N2},e.getPenaltyN3=function(a){for(var l=a.size,f=0,u=0,d=0,_=0;_<l;_++){u=d=0;for(var h=0;h<l;h++)u=u<<1&2047|a.get(_,h),h>=10&&(u===1488||u===93)&&f++,d=d<<1&2047|a.get(h,_),h>=10&&(d===1488||d===93)&&f++}return f*t.N3},e.getPenaltyN4=function(a){for(var l=0,f=a.data.length,u=0;u<f;u++)l+=a.data[u];var d=Math.abs(Math.ceil(l*100/f/5)-10);return d*t.N4};function n(o,a,l){switch(o){case e.Patterns.PATTERN000:return(a+l)%2===0;case e.Patterns.PATTERN001:return a%2===0;case e.Patterns.PATTERN010:return l%3===0;case e.Patterns.PATTERN011:return(a+l)%3===0;case e.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(l/3))%2===0;case e.Patterns.PATTERN101:return a*l%2+a*l%3===0;case e.Patterns.PATTERN110:return(a*l%2+a*l%3)%2===0;case e.Patterns.PATTERN111:return(a*l%3+(a+l)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(a,l){for(var f=l.size,u=0;u<f;u++)for(var d=0;d<f;d++)l.isReserved(d,u)||l.xor(d,u,n(a,d,u))},e.getBestMask=function(a,l){for(var f=Object.keys(e.Patterns).length,u=0,d=1/0,_=0;_<f;_++){l(_),e.applyMask(_,a);var h=e.getPenaltyN1(a)+e.getPenaltyN2(a)+e.getPenaltyN3(a)+e.getPenaltyN4(a);e.applyMask(_,a),h<d&&(d=h,u=_)}return u}})(_n);var De={},ne=Pe,Se=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ne=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];De.getBlocksCount=function(t,n){switch(n){case ne.L:return Se[(t-1)*4+0];case ne.M:return Se[(t-1)*4+1];case ne.Q:return Se[(t-1)*4+2];case ne.H:return Se[(t-1)*4+3];default:return}};De.getTotalCodewordsCount=function(t,n){switch(n){case ne.L:return Ne[(t-1)*4+0];case ne.M:return Ne[(t-1)*4+1];case ne.Q:return Ne[(t-1)*4+2];case ne.H:return Ne[(t-1)*4+3];default:return}};var gn={},Oe={},mn=oe,ve=mn.alloc(512),Ie=mn.alloc(256);(function(){for(var t=1,n=0;n<255;n++)ve[n]=t,Ie[t]=n,t<<=1,t&256&&(t^=285);for(n=255;n<512;n++)ve[n]=ve[n-255]})();Oe.log=function(t){if(t<1)throw new Error("log("+t+")");return Ie[t]};Oe.exp=function(t){return ve[t]};Oe.mul=function(t,n){return t===0||n===0?0:ve[Ie[t]+Ie[n]]};(function(e){var t=oe,n=Oe;e.mul=function(a,l){for(var f=t.alloc(a.length+l.length-1),u=0;u<a.length;u++)for(var d=0;d<l.length;d++)f[u+d]^=n.mul(a[u],l[d]);return f},e.mod=function(a,l){for(var f=t.from(a);f.length-l.length>=0;){for(var u=f[0],d=0;d<l.length;d++)f[d]^=n.mul(l[d],u);for(var _=0;_<f.length&&f[_]===0;)_++;f=f.slice(_)}return f},e.generateECPolynomial=function(a){for(var l=t.from([1]),f=0;f<a;f++)l=e.mul(l,[1,n.exp(f)]);return l}})(gn);var vn={};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){var t=xr(),n=Cr(),o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=u,e.SlowBuffer=x,e.INSPECT_MAX_BYTES=50;var a=2147483647;e.kMaxLength=a,u.TYPED_ARRAY_SUPPORT=l(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function l(){try{var c=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(c,r),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function f(c){if(c>a)throw new RangeError('The value "'+c+'" is invalid for option "size"');var r=new Uint8Array(c);return Object.setPrototypeOf(r,u.prototype),r}function u(c,r,i){if(typeof c=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v(c)}return d(c,r,i)}u.poolSize=8192;function d(c,r,i){if(typeof c=="string")return A(c,r);if(ArrayBuffer.isView(c))return y(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(G(c,ArrayBuffer)||c&&G(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(G(c,SharedArrayBuffer)||c&&G(c.buffer,SharedArrayBuffer)))return B(c,r,i);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=c.valueOf&&c.valueOf();if(s!=null&&s!==c)return u.from(s,r,i);var p=T(c);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),r,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,r,i){return d(c,r,i)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function _(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function h(c,r,i){return _(c),c<=0?f(c):r!==void 0?typeof i=="string"?f(c).fill(r,i):f(c).fill(r):f(c)}u.alloc=function(c,r,i){return h(c,r,i)};function v(c){return _(c),f(c<0?0:C(c)|0)}u.allocUnsafe=function(c){return v(c)},u.allocUnsafeSlow=function(c){return v(c)};function A(c,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var i=E(c,r)|0,s=f(i),p=s.write(c,r);return p!==i&&(s=s.slice(0,p)),s}function k(c){for(var r=c.length<0?0:C(c.length)|0,i=f(r),s=0;s<r;s+=1)i[s]=c[s]&255;return i}function y(c){if(G(c,Uint8Array)){var r=new Uint8Array(c);return B(r.buffer,r.byteOffset,r.byteLength)}return k(c)}function B(c,r,i){if(r<0||c.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<r+(i||0))throw new RangeError('"length" is outside of buffer bounds');var s;return r===void 0&&i===void 0?s=new Uint8Array(c):i===void 0?s=new Uint8Array(c,r):s=new Uint8Array(c,r,i),Object.setPrototypeOf(s,u.prototype),s}function T(c){if(u.isBuffer(c)){var r=C(c.length)|0,i=f(r);return i.length===0||c.copy(i,0,0,r),i}if(c.length!==void 0)return typeof c.length!="number"||qe(c.length)?f(0):k(c);if(c.type==="Buffer"&&Array.isArray(c.data))return k(c.data)}function C(c){if(c>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return c|0}function x(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,i){if(G(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),G(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(r)||!u.isBuffer(i))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===i)return 0;for(var s=r.length,p=i.length,g=0,m=Math.min(s,p);g<m;++g)if(r[g]!==i[g]){s=r[g],p=i[g];break}return s<p?-1:p<s?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,i){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var s;if(i===void 0)for(i=0,s=0;s<r.length;++s)i+=r[s].length;var p=u.allocUnsafe(i),g=0;for(s=0;s<r.length;++s){var m=r[s];if(G(m,Uint8Array))g+m.length>p.length?u.from(m).copy(p,g):Uint8Array.prototype.set.call(p,m,g);else if(u.isBuffer(m))m.copy(p,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=m.length}return p};function E(c,r){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||G(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);var i=c.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&i===0)return 0;for(var p=!1;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return We(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return Tt(c).length;default:if(p)return s?-1:We(c).length;r=(""+r).toLowerCase(),p=!0}}u.byteLength=E;function w(c,r,i){var s=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,r>>>=0,i<=r))return"";for(c||(c="utf8");;)switch(c){case"hex":return gr(this,r,i);case"utf8":case"utf-8":return ae(this,r,i);case"ascii":return pr(this,r,i);case"latin1":case"binary":return _r(this,r,i);case"base64":return V(this,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mr(this,r,i);default:if(s)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),s=!0}}u.prototype._isBuffer=!0;function N(c,r,i){var s=c[r];c[r]=c[i],c[i]=s}u.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<r;i+=2)N(this,i,i+1);return this},u.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<r;i+=4)N(this,i,i+3),N(this,i+1,i+2);return this},u.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<r;i+=8)N(this,i,i+7),N(this,i+1,i+6),N(this,i+2,i+5),N(this,i+3,i+4);return this},u.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?ae(this,0,r):w.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){var r="",i=e.INSPECT_MAX_BYTES;return r=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(r+=" ... "),"<Buffer "+r+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(r,i,s,p,g){if(G(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(i===void 0&&(i=0),s===void 0&&(s=r?r.length:0),p===void 0&&(p=0),g===void 0&&(g=this.length),i<0||s>r.length||p<0||g>this.length)throw new RangeError("out of range index");if(p>=g&&i>=s)return 0;if(p>=g)return-1;if(i>=s)return 1;if(i>>>=0,s>>>=0,p>>>=0,g>>>=0,this===r)return 0;for(var m=g-p,I=s-i,U=Math.min(m,I),P=this.slice(p,g),H=r.slice(i,s),D=0;D<U;++D)if(P[D]!==H[D]){m=P[D],I=H[D];break}return m<I?-1:I<m?1:0};function F(c,r,i,s,p){if(c.length===0)return-1;if(typeof i=="string"?(s=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,qe(i)&&(i=p?0:c.length-1),i<0&&(i=c.length+i),i>=c.length){if(p)return-1;i=c.length-1}else if(i<0)if(p)i=0;else return-1;if(typeof r=="string"&&(r=u.from(r,s)),u.isBuffer(r))return r.length===0?-1:L(c,r,i,s,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(c,r,i):Uint8Array.prototype.lastIndexOf.call(c,r,i):L(c,[r],i,s,p);throw new TypeError("val must be string, number or Buffer")}function L(c,r,i,s,p){var g=1,m=c.length,I=r.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(c.length<2||r.length<2)return-1;g=2,m/=2,I/=2,i/=2}function U(kt,St){return g===1?kt[St]:kt.readUInt16BE(St*g)}var P;if(p){var H=-1;for(P=i;P<m;P++)if(U(c,P)===U(r,H===-1?0:P-H)){if(H===-1&&(H=P),P-H+1===I)return H*g}else H!==-1&&(P-=P-H),H=-1}else for(i+I>m&&(i=m-I),P=i;P>=0;P--){for(var D=!0,ke=0;ke<I;ke++)if(U(c,P+ke)!==U(r,ke)){D=!1;break}if(D)return P}return-1}u.prototype.includes=function(r,i,s){return this.indexOf(r,i,s)!==-1},u.prototype.indexOf=function(r,i,s){return F(this,r,i,s,!0)},u.prototype.lastIndexOf=function(r,i,s){return F(this,r,i,s,!1)};function M(c,r,i,s){i=Number(i)||0;var p=c.length-i;s?(s=Number(s),s>p&&(s=p)):s=p;var g=r.length;s>g/2&&(s=g/2);for(var m=0;m<s;++m){var I=parseInt(r.substr(m*2,2),16);if(qe(I))return m;c[i+m]=I}return m}function z(c,r,i,s){return Te(We(r,c.length-i),c,i,s)}function O(c,r,i,s){return Te(yr(r),c,i,s)}function j(c,r,i,s){return Te(Tt(r),c,i,s)}function Q(c,r,i,s){return Te(br(r,c.length-i),c,i,s)}u.prototype.write=function(r,i,s,p){if(i===void 0)p="utf8",s=this.length,i=0;else if(s===void 0&&typeof i=="string")p=i,s=this.length,i=0;else if(isFinite(i))i=i>>>0,isFinite(s)?(s=s>>>0,p===void 0&&(p="utf8")):(p=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var g=this.length-i;if((s===void 0||s>g)&&(s=g),r.length>0&&(s<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");for(var m=!1;;)switch(p){case"hex":return M(this,r,i,s);case"utf8":case"utf-8":return z(this,r,i,s);case"ascii":case"latin1":case"binary":return O(this,r,i,s);case"base64":return j(this,r,i,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Q(this,r,i,s);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function V(c,r,i){return r===0&&i===c.length?t.fromByteArray(c):t.fromByteArray(c.slice(r,i))}function ae(c,r,i){i=Math.min(c.length,i);for(var s=[],p=r;p<i;){var g=c[p],m=null,I=g>239?4:g>223?3:g>191?2:1;if(p+I<=i){var U,P,H,D;switch(I){case 1:g<128&&(m=g);break;case 2:U=c[p+1],(U&192)===128&&(D=(g&31)<<6|U&63,D>127&&(m=D));break;case 3:U=c[p+1],P=c[p+2],(U&192)===128&&(P&192)===128&&(D=(g&15)<<12|(U&63)<<6|P&63,D>2047&&(D<55296||D>57343)&&(m=D));break;case 4:U=c[p+1],P=c[p+2],H=c[p+3],(U&192)===128&&(P&192)===128&&(H&192)===128&&(D=(g&15)<<18|(U&63)<<12|(P&63)<<6|H&63,D>65535&&D<1114112&&(m=D))}}m===null?(m=65533,I=1):m>65535&&(m-=65536,s.push(m>>>10&1023|55296),m=56320|m&1023),s.push(m),p+=I}return me(s)}var ge=4096;function me(c){var r=c.length;if(r<=ge)return String.fromCharCode.apply(String,c);for(var i="",s=0;s<r;)i+=String.fromCharCode.apply(String,c.slice(s,s+=ge));return i}function pr(c,r,i){var s="";i=Math.min(c.length,i);for(var p=r;p<i;++p)s+=String.fromCharCode(c[p]&127);return s}function _r(c,r,i){var s="";i=Math.min(c.length,i);for(var p=r;p<i;++p)s+=String.fromCharCode(c[p]);return s}function gr(c,r,i){var s=c.length;(!r||r<0)&&(r=0),(!i||i<0||i>s)&&(i=s);for(var p="",g=r;g<i;++g)p+=Er[c[g]];return p}function mr(c,r,i){for(var s=c.slice(r,i),p="",g=0;g<s.length-1;g+=2)p+=String.fromCharCode(s[g]+s[g+1]*256);return p}u.prototype.slice=function(r,i){var s=this.length;r=~~r,i=i===void 0?s:~~i,r<0?(r+=s,r<0&&(r=0)):r>s&&(r=s),i<0?(i+=s,i<0&&(i=0)):i>s&&(i=s),i<r&&(i=r);var p=this.subarray(r,i);return Object.setPrototypeOf(p,u.prototype),p};function $(c,r,i){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+r>i)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,i,s){r=r>>>0,i=i>>>0,s||$(r,i,this.length);for(var p=this[r],g=1,m=0;++m<i&&(g*=256);)p+=this[r+m]*g;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,i,s){r=r>>>0,i=i>>>0,s||$(r,i,this.length);for(var p=this[r+--i],g=1;i>0&&(g*=256);)p+=this[r+--i]*g;return p},u.prototype.readUint8=u.prototype.readUInt8=function(r,i){return r=r>>>0,i||$(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,i){return r=r>>>0,i||$(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,i){return r=r>>>0,i||$(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,i){return r=r>>>0,i||$(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,i){return r=r>>>0,i||$(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readIntLE=function(r,i,s){r=r>>>0,i=i>>>0,s||$(r,i,this.length);for(var p=this[r],g=1,m=0;++m<i&&(g*=256);)p+=this[r+m]*g;return g*=128,p>=g&&(p-=Math.pow(2,8*i)),p},u.prototype.readIntBE=function(r,i,s){r=r>>>0,i=i>>>0,s||$(r,i,this.length);for(var p=i,g=1,m=this[r+--p];p>0&&(g*=256);)m+=this[r+--p]*g;return g*=128,m>=g&&(m-=Math.pow(2,8*i)),m},u.prototype.readInt8=function(r,i){return r=r>>>0,i||$(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,i){r=r>>>0,i||$(r,2,this.length);var s=this[r]|this[r+1]<<8;return s&32768?s|4294901760:s},u.prototype.readInt16BE=function(r,i){r=r>>>0,i||$(r,2,this.length);var s=this[r+1]|this[r]<<8;return s&32768?s|4294901760:s},u.prototype.readInt32LE=function(r,i){return r=r>>>0,i||$(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,i){return r=r>>>0,i||$(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readFloatLE=function(r,i){return r=r>>>0,i||$(r,4,this.length),n.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,i){return r=r>>>0,i||$(r,4,this.length),n.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,i){return r=r>>>0,i||$(r,8,this.length),n.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,i){return r=r>>>0,i||$(r,8,this.length),n.read(this,r,!1,52,8)};function W(c,r,i,s,p,g){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<g)throw new RangeError('"value" argument is out of bounds');if(i+s>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,i,s,p){if(r=+r,i=i>>>0,s=s>>>0,!p){var g=Math.pow(2,8*s)-1;W(this,r,i,s,g,0)}var m=1,I=0;for(this[i]=r&255;++I<s&&(m*=256);)this[i+I]=r/m&255;return i+s},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,i,s,p){if(r=+r,i=i>>>0,s=s>>>0,!p){var g=Math.pow(2,8*s)-1;W(this,r,i,s,g,0)}var m=s-1,I=1;for(this[i+m]=r&255;--m>=0&&(I*=256);)this[i+m]=r/I&255;return i+s},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,1,255,0),this[i]=r&255,i+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,2,65535,0),this[i]=r&255,this[i+1]=r>>>8,i+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,2,65535,0),this[i]=r>>>8,this[i+1]=r&255,i+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,4,4294967295,0),this[i+3]=r>>>24,this[i+2]=r>>>16,this[i+1]=r>>>8,this[i]=r&255,i+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,4,4294967295,0),this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255,i+4},u.prototype.writeIntLE=function(r,i,s,p){if(r=+r,i=i>>>0,!p){var g=Math.pow(2,8*s-1);W(this,r,i,s,g-1,-g)}var m=0,I=1,U=0;for(this[i]=r&255;++m<s&&(I*=256);)r<0&&U===0&&this[i+m-1]!==0&&(U=1),this[i+m]=(r/I>>0)-U&255;return i+s},u.prototype.writeIntBE=function(r,i,s,p){if(r=+r,i=i>>>0,!p){var g=Math.pow(2,8*s-1);W(this,r,i,s,g-1,-g)}var m=s-1,I=1,U=0;for(this[i+m]=r&255;--m>=0&&(I*=256);)r<0&&U===0&&this[i+m+1]!==0&&(U=1),this[i+m]=(r/I>>0)-U&255;return i+s},u.prototype.writeInt8=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,1,127,-128),r<0&&(r=255+r+1),this[i]=r&255,i+1},u.prototype.writeInt16LE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,2,32767,-32768),this[i]=r&255,this[i+1]=r>>>8,i+2},u.prototype.writeInt16BE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,2,32767,-32768),this[i]=r>>>8,this[i+1]=r&255,i+2},u.prototype.writeInt32LE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,4,2147483647,-2147483648),this[i]=r&255,this[i+1]=r>>>8,this[i+2]=r>>>16,this[i+3]=r>>>24,i+4},u.prototype.writeInt32BE=function(r,i,s){return r=+r,i=i>>>0,s||W(this,r,i,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255,i+4};function Ct(c,r,i,s,p,g){if(i+s>c.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function At(c,r,i,s,p){return r=+r,i=i>>>0,p||Ct(c,r,i,4),n.write(c,r,i,s,23,4),i+4}u.prototype.writeFloatLE=function(r,i,s){return At(this,r,i,!0,s)},u.prototype.writeFloatBE=function(r,i,s){return At(this,r,i,!1,s)};function Bt(c,r,i,s,p){return r=+r,i=i>>>0,p||Ct(c,r,i,8),n.write(c,r,i,s,52,8),i+8}u.prototype.writeDoubleLE=function(r,i,s){return Bt(this,r,i,!0,s)},u.prototype.writeDoubleBE=function(r,i,s){return Bt(this,r,i,!1,s)},u.prototype.copy=function(r,i,s,p){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(s||(s=0),!p&&p!==0&&(p=this.length),i>=r.length&&(i=r.length),i||(i=0),p>0&&p<s&&(p=s),p===s||r.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),r.length-i<p-s&&(p=r.length-i+s);var g=p-s;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(i,s,p):Uint8Array.prototype.set.call(r,this.subarray(s,p),i),g},u.prototype.fill=function(r,i,s,p){if(typeof r=="string"){if(typeof i=="string"?(p=i,i=0,s=this.length):typeof s=="string"&&(p=s,s=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(r.length===1){var g=r.charCodeAt(0);(p==="utf8"&&g<128||p==="latin1")&&(r=g)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(i<0||this.length<i||this.length<s)throw new RangeError("Out of range index");if(s<=i)return this;i=i>>>0,s=s===void 0?this.length:s>>>0,r||(r=0);var m;if(typeof r=="number")for(m=i;m<s;++m)this[m]=r;else{var I=u.isBuffer(r)?r:u.from(r,p),U=I.length;if(U===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(m=0;m<s-i;++m)this[m+i]=I[m%U]}return this};var vr=/[^+/0-9A-Za-z-_]/g;function wr(c){if(c=c.split("=")[0],c=c.trim().replace(vr,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function We(c,r){r=r||1/0;for(var i,s=c.length,p=null,g=[],m=0;m<s;++m){if(i=c.charCodeAt(m),i>55295&&i<57344){if(!p){if(i>56319){(r-=3)>-1&&g.push(239,191,189);continue}else if(m+1===s){(r-=3)>-1&&g.push(239,191,189);continue}p=i;continue}if(i<56320){(r-=3)>-1&&g.push(239,191,189),p=i;continue}i=(p-55296<<10|i-56320)+65536}else p&&(r-=3)>-1&&g.push(239,191,189);if(p=null,i<128){if((r-=1)<0)break;g.push(i)}else if(i<2048){if((r-=2)<0)break;g.push(i>>6|192,i&63|128)}else if(i<65536){if((r-=3)<0)break;g.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((r-=4)<0)break;g.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return g}function yr(c){for(var r=[],i=0;i<c.length;++i)r.push(c.charCodeAt(i)&255);return r}function br(c,r){for(var i,s,p,g=[],m=0;m<c.length&&!((r-=2)<0);++m)i=c.charCodeAt(m),s=i>>8,p=i%256,g.push(p),g.push(s);return g}function Tt(c){return t.toByteArray(wr(c))}function Te(c,r,i,s){for(var p=0;p<s&&!(p+i>=r.length||p>=c.length);++p)r[p+i]=c[p];return p}function G(c,r){return c instanceof r||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===r.name}function qe(c){return c!==c}var Er=function(){for(var c="0123456789abcdef",r=new Array(256),i=0;i<16;++i)for(var s=i*16,p=0;p<16;++p)r[s+p]=c[i]+c[p];return r}()})(vn);var Lt=oe,wn=gn,xo=vn.Buffer;function st(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}st.prototype.initialize=function(t){this.degree=t,this.genPoly=wn.generateECPolynomial(this.degree)};st.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=Lt.alloc(this.degree),o=xo.concat([t,n],t.length+this.degree),a=wn.mod(o,this.genPoly),l=this.degree-a.length;if(l>0){var f=Lt.alloc(this.degree);return a.copy(f,l),f}return a};var Co=st,yn={},ie={},ht={};ht.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var X={},bn="[0-9]+",Ao="[A-Z $%*+\\-./:]+",be="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";be=be.replace(/u/g,"\\u");var Bo="(?:(?![A-Z0-9 $%*+\\-./:]|"+be+`)(?:.|[\r
]))+`;X.KANJI=new RegExp(be,"g");X.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");X.BYTE=new RegExp(Bo,"g");X.NUMERIC=new RegExp(bn,"g");X.ALPHANUMERIC=new RegExp(Ao,"g");var To=new RegExp("^"+be+"$"),ko=new RegExp("^"+bn+"$"),So=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");X.testKanji=function(t){return To.test(t)};X.testNumeric=function(t){return ko.test(t)};X.testAlphanumeric=function(t){return So.test(t)};(function(e){var t=ht,n=X;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(l,f){if(!l.ccBits)throw new Error("Invalid mode: "+l);if(!t.isValid(f))throw new Error("Invalid version: "+f);return f>=1&&f<10?l.ccBits[0]:f<27?l.ccBits[1]:l.ccBits[2]},e.getBestModeForData=function(l){return n.testNumeric(l)?e.NUMERIC:n.testAlphanumeric(l)?e.ALPHANUMERIC:n.testKanji(l)?e.KANJI:e.BYTE},e.toString=function(l){if(l&&l.id)return l.id;throw new Error("Invalid mode")},e.isValid=function(l){return l&&l.bit&&l.ccBits};function o(a){if(typeof a!="string")throw new Error("Param is not a string");var l=a.toLowerCase();switch(l){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+a)}}e.from=function(l,f){if(e.isValid(l))return l;try{return o(l)}catch{return f}}})(ie);(function(e){var t=K,n=De,o=Pe,a=ie,l=ht,f=ut,u=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,d=t.getBCHDigit(u);function _(k,y,B){for(var T=1;T<=40;T++)if(y<=e.getCapacity(T,B,k))return T}function h(k,y){return a.getCharCountIndicator(k,y)+4}function v(k,y){var B=0;return k.forEach(function(T){var C=h(T.mode,y);B+=C+T.getBitsLength()}),B}function A(k,y){for(var B=1;B<=40;B++){var T=v(k,B);if(T<=e.getCapacity(B,y,a.MIXED))return B}}e.from=function(y,B){return l.isValid(y)?parseInt(y,10):B},e.getCapacity=function(y,B,T){if(!l.isValid(y))throw new Error("Invalid QR Code version");typeof T>"u"&&(T=a.BYTE);var C=t.getSymbolTotalCodewords(y),x=n.getTotalCodewordsCount(y,B),E=(C-x)*8;if(T===a.MIXED)return E;var w=E-h(T,y);switch(T){case a.NUMERIC:return Math.floor(w/10*3);case a.ALPHANUMERIC:return Math.floor(w/11*2);case a.KANJI:return Math.floor(w/13);case a.BYTE:default:return Math.floor(w/8)}},e.getBestVersionForData=function(y,B){var T,C=o.from(B,o.M);if(f(y)){if(y.length>1)return A(y,C);if(y.length===0)return 1;T=y[0]}else T=y;return _(T.mode,T.getLength(),C)},e.getEncodedBits=function(y){if(!l.isValid(y)||y<7)throw new Error("Invalid QR Code version");for(var B=y<<12;t.getBCHDigit(B)-d>=0;)B^=u<<t.getBCHDigit(B)-d;return y<<12|B}})(yn);var En={},Ze=K,xn=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,No=1<<14|1<<12|1<<10|1<<4|1<<1,Ut=Ze.getBCHDigit(xn);En.getEncodedBits=function(t,n){for(var o=t.bit<<3|n,a=o<<10;Ze.getBCHDigit(a)-Ut>=0;)a^=xn<<Ze.getBCHDigit(a)-Ut;return(o<<10|a)^No};var Cn={},Ro=ie;function fe(e){this.mode=Ro.NUMERIC,this.data=e.toString()}fe.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};fe.prototype.getLength=function(){return this.data.length};fe.prototype.getBitsLength=function(){return fe.getBitsLength(this.data.length)};fe.prototype.write=function(t){var n,o,a;for(n=0;n+3<=this.data.length;n+=3)o=this.data.substr(n,3),a=parseInt(o,10),t.put(a,10);var l=this.data.length-n;l>0&&(o=this.data.substr(n),a=parseInt(o,10),t.put(a,l*3+1))};var Io=fe,Lo=ie,Ye=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function se(e){this.mode=Lo.ALPHANUMERIC,this.data=e}se.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};se.prototype.getLength=function(){return this.data.length};se.prototype.getBitsLength=function(){return se.getBitsLength(this.data.length)};se.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var o=Ye.indexOf(this.data[n])*45;o+=Ye.indexOf(this.data[n+1]),t.put(o,11)}this.data.length%2&&t.put(Ye.indexOf(this.data[n]),6)};var Uo=se,Fo=oe,Mo=ie;function he(e){this.mode=Mo.BYTE,this.data=Fo.from(e)}he.getBitsLength=function(t){return t*8};he.prototype.getLength=function(){return this.data.length};he.prototype.getBitsLength=function(){return he.getBitsLength(this.data.length)};he.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var Po=he,Do=ie,Oo=K;function de(e){this.mode=Do.KANJI,this.data=e}de.getBitsLength=function(t){return t*13};de.prototype.getLength=function(){return this.data.length};de.prototype.getBitsLength=function(){return de.getBitsLength(this.data.length)};de.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=Oo.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var $o=de,An={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,o,a){var l={},f={};f[o]=0;var u=t.PriorityQueue.make();u.push(o,0);for(var d,_,h,v,A,k,y,B,T;!u.empty();){d=u.pop(),_=d.value,v=d.cost,A=n[_]||{};for(h in A)A.hasOwnProperty(h)&&(k=A[h],y=v+k,B=f[h],T=typeof f[h]>"u",(T||B>y)&&(f[h]=y,u.push(h,y),l[h]=_))}if(typeof a<"u"&&typeof f[a]>"u"){var C=["Could not find a path from ",o," to ",a,"."].join("");throw new Error(C)}return l},extract_shortest_path_from_predecessor_list:function(n,o){for(var a=[],l=o;l;)a.push(l),n[l],l=n[l];return a.reverse(),a},find_path:function(n,o,a){var l=t.single_source_shortest_paths(n,o,a);return t.extract_shortest_path_from_predecessor_list(l,a)},PriorityQueue:{make:function(n){var o=t.PriorityQueue,a={},l;n=n||{};for(l in o)o.hasOwnProperty(l)&&(a[l]=o[l]);return a.queue=[],a.sorter=n.sorter||o.default_sorter,a},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var a={value:n,cost:o};this.queue.push(a),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(An);(function(e){var t=ie,n=Io,o=Uo,a=Po,l=$o,f=X,u=K,d=An.exports;function _(C){return unescape(encodeURIComponent(C)).length}function h(C,x,E){for(var w=[],N;(N=C.exec(E))!==null;)w.push({data:N[0],index:N.index,mode:x,length:N[0].length});return w}function v(C){var x=h(f.NUMERIC,t.NUMERIC,C),E=h(f.ALPHANUMERIC,t.ALPHANUMERIC,C),w,N;u.isKanjiModeEnabled()?(w=h(f.BYTE,t.BYTE,C),N=h(f.KANJI,t.KANJI,C)):(w=h(f.BYTE_KANJI,t.BYTE,C),N=[]);var F=x.concat(E,w,N);return F.sort(function(L,M){return L.index-M.index}).map(function(L){return{data:L.data,mode:L.mode,length:L.length}})}function A(C,x){switch(x){case t.NUMERIC:return n.getBitsLength(C);case t.ALPHANUMERIC:return o.getBitsLength(C);case t.KANJI:return l.getBitsLength(C);case t.BYTE:return a.getBitsLength(C)}}function k(C){return C.reduce(function(x,E){var w=x.length-1>=0?x[x.length-1]:null;return w&&w.mode===E.mode?(x[x.length-1].data+=E.data,x):(x.push(E),x)},[])}function y(C){for(var x=[],E=0;E<C.length;E++){var w=C[E];switch(w.mode){case t.NUMERIC:x.push([w,{data:w.data,mode:t.ALPHANUMERIC,length:w.length},{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.ALPHANUMERIC:x.push([w,{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.KANJI:x.push([w,{data:w.data,mode:t.BYTE,length:_(w.data)}]);break;case t.BYTE:x.push([{data:w.data,mode:t.BYTE,length:_(w.data)}])}}return x}function B(C,x){for(var E={},w={start:{}},N=["start"],F=0;F<C.length;F++){for(var L=C[F],M=[],z=0;z<L.length;z++){var O=L[z],j=""+F+z;M.push(j),E[j]={node:O,lastCount:0},w[j]={};for(var Q=0;Q<N.length;Q++){var V=N[Q];E[V]&&E[V].node.mode===O.mode?(w[V][j]=A(E[V].lastCount+O.length,O.mode)-A(E[V].lastCount,O.mode),E[V].lastCount+=O.length):(E[V]&&(E[V].lastCount=O.length),w[V][j]=A(O.length,O.mode)+4+t.getCharCountIndicator(O.mode,x))}}N=M}for(Q=0;Q<N.length;Q++)w[N[Q]].end=0;return{map:w,table:E}}function T(C,x){var E,w=t.getBestModeForData(C);if(E=t.from(x,w),E!==t.BYTE&&E.bit<w.bit)throw new Error('"'+C+'" cannot be encoded with mode '+t.toString(E)+`.
 Suggested mode is: `+t.toString(w));switch(E===t.KANJI&&!u.isKanjiModeEnabled()&&(E=t.BYTE),E){case t.NUMERIC:return new n(C);case t.ALPHANUMERIC:return new o(C);case t.KANJI:return new l(C);case t.BYTE:return new a(C)}}e.fromArray=function(x){return x.reduce(function(E,w){return typeof w=="string"?E.push(T(w,null)):w.data&&E.push(T(w.data,w.mode)),E},[])},e.fromString=function(x,E){for(var w=v(x,u.isKanjiModeEnabled()),N=y(w),F=B(N,E),L=d.find_path(F.map,"start","end"),M=[],z=1;z<L.length-1;z++)M.push(F.table[L[z]].node);return e.fromArray(k(M))},e.rawSplit=function(x){return e.fromArray(v(x,u.isKanjiModeEnabled()))}})(Cn);var Ft=oe,$e=K,Ve=Pe,zo=yo,Ho=bo,Wo=dn,qo=pn,et=_n,tt=De,Yo=Co,Le=yn,Vo=En,Ko=ie,Ke=Cn,Qo=ut;function Jo(e,t){for(var n=e.size,o=qo.getPositions(t),a=0;a<o.length;a++)for(var l=o[a][0],f=o[a][1],u=-1;u<=7;u++)if(!(l+u<=-1||n<=l+u))for(var d=-1;d<=7;d++)f+d<=-1||n<=f+d||(u>=0&&u<=6&&(d===0||d===6)||d>=0&&d<=6&&(u===0||u===6)||u>=2&&u<=4&&d>=2&&d<=4?e.set(l+u,f+d,!0,!0):e.set(l+u,f+d,!1,!0))}function Go(e){for(var t=e.size,n=8;n<t-8;n++){var o=n%2===0;e.set(n,6,o,!0),e.set(6,n,o,!0)}}function Xo(e,t){for(var n=Wo.getPositions(t),o=0;o<n.length;o++)for(var a=n[o][0],l=n[o][1],f=-2;f<=2;f++)for(var u=-2;u<=2;u++)f===-2||f===2||u===-2||u===2||f===0&&u===0?e.set(a+f,l+u,!0,!0):e.set(a+f,l+u,!1,!0)}function jo(e,t){for(var n=e.size,o=Le.getEncodedBits(t),a,l,f,u=0;u<18;u++)a=Math.floor(u/3),l=u%3+n-8-3,f=(o>>u&1)===1,e.set(a,l,f,!0),e.set(l,a,f,!0)}function Qe(e,t,n){var o=e.size,a=Vo.getEncodedBits(t,n),l,f;for(l=0;l<15;l++)f=(a>>l&1)===1,l<6?e.set(l,8,f,!0):l<8?e.set(l+1,8,f,!0):e.set(o-15+l,8,f,!0),l<8?e.set(8,o-l-1,f,!0):l<9?e.set(8,15-l-1+1,f,!0):e.set(8,15-l-1,f,!0);e.set(o-8,8,1,!0)}function Zo(e,t){for(var n=e.size,o=-1,a=n-1,l=7,f=0,u=n-1;u>0;u-=2)for(u===6&&u--;;){for(var d=0;d<2;d++)if(!e.isReserved(a,u-d)){var _=!1;f<t.length&&(_=(t[f]>>>l&1)===1),e.set(a,u-d,_),l--,l===-1&&(f++,l=7)}if(a+=o,a<0||n<=a){a-=o,o=-o;break}}}function ei(e,t,n){var o=new zo;n.forEach(function(_){o.put(_.mode.bit,4),o.put(_.getLength(),Ko.getCharCountIndicator(_.mode,e)),_.write(o)});var a=$e.getSymbolTotalCodewords(e),l=tt.getTotalCodewordsCount(e,t),f=(a-l)*8;for(o.getLengthInBits()+4<=f&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);for(var u=(f-o.getLengthInBits())/8,d=0;d<u;d++)o.put(d%2?17:236,8);return ti(o,e,t)}function ti(e,t,n){for(var o=$e.getSymbolTotalCodewords(t),a=tt.getTotalCodewordsCount(t,n),l=o-a,f=tt.getBlocksCount(t,n),u=o%f,d=f-u,_=Math.floor(o/f),h=Math.floor(l/f),v=h+1,A=_-h,k=new Yo(A),y=0,B=new Array(f),T=new Array(f),C=0,x=Ft.from(e.buffer),E=0;E<f;E++){var w=E<d?h:v;B[E]=x.slice(y,y+w),T[E]=k.encode(B[E]),y+=w,C=Math.max(C,w)}var N=Ft.alloc(o),F=0,L,M;for(L=0;L<C;L++)for(M=0;M<f;M++)L<B[M].length&&(N[F++]=B[M][L]);for(L=0;L<A;L++)for(M=0;M<f;M++)N[F++]=T[M][L];return N}function ni(e,t,n,o){var a;if(Qo(e))a=Ke.fromArray(e);else if(typeof e=="string"){var l=t;if(!l){var f=Ke.rawSplit(e);l=Le.getBestVersionForData(f,n)}a=Ke.fromString(e,l||40)}else throw new Error("Invalid data");var u=Le.getBestVersionForData(a,n);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=u;else if(t<u)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+u+`.
`);var d=ei(t,n,a),_=$e.getSymbolSize(t),h=new Ho(_);return Jo(h,t),Go(h),Xo(h,t),Qe(h,n,0),t>=7&&jo(h,t),Zo(h,d),isNaN(o)&&(o=et.getBestMask(h,Qe.bind(null,h,n))),et.applyMask(o,h),Qe(h,n,o),{modules:h,version:t,errorCorrectionLevel:n,maskPattern:o,segments:a}}un.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");var o=Ve.M,a,l;return typeof n<"u"&&(o=Ve.from(n.errorCorrectionLevel,Ve.M),a=Le.from(n.version),l=et.from(n.maskPattern),n.toSJISFunc&&$e.setToSJISFunction(n.toSJISFunc)),ni(t,a,o,l)};var Bn={},dt={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");var o=n.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+n);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(l){return[l,l]}))),o.length===6&&o.push("F","F");var a=parseInt(o.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:a&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});var a=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,l=o.width&&o.width>=21?o.width:void 0,f=o.scale||4;return{width:l,scale:l?4:f,margin:a,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,a){return a.width&&a.width>=o+a.margin*2?a.width/(o+a.margin*2):a.scale},e.getImageWidth=function(o,a){var l=e.getScale(o,a);return Math.floor((o+a.margin*2)*l)},e.qrToImageData=function(o,a,l){for(var f=a.modules.size,u=a.modules.data,d=e.getScale(f,l),_=Math.floor((f+l.margin*2)*d),h=l.margin*d,v=[l.color.light,l.color.dark],A=0;A<_;A++)for(var k=0;k<_;k++){var y=(A*_+k)*4,B=l.color.light;if(A>=h&&k>=h&&A<_-h&&k<_-h){var T=Math.floor((A-h)/d),C=Math.floor((k-h)/d);B=v[u[T*f+C]?1:0]}o[y++]=B.r,o[y++]=B.g,o[y++]=B.b,o[y]=B.a}}})(dt);(function(e){var t=dt;function n(a,l,f){a.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=f,l.width=f,l.style.height=f+"px",l.style.width=f+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(l,f,u){var d=u,_=f;typeof d>"u"&&(!f||!f.getContext)&&(d=f,f=void 0),f||(_=o()),d=t.getOptions(d);var h=t.getImageWidth(l.modules.size,d),v=_.getContext("2d"),A=v.createImageData(h,h);return t.qrToImageData(A.data,l,d),n(v,_,h),v.putImageData(A,0,0),_},e.renderToDataURL=function(l,f,u){var d=u;typeof d>"u"&&(!f||!f.getContext)&&(d=f,f=void 0),d||(d={});var _=e.render(l,f,d),h=d.type||"image/png",v=d.rendererOpts||{};return _.toDataURL(h,v.quality)}})(Bn);var Tn={},ri=dt;function Mt(e,t){var n=e.a/255,o=t+'="'+e.hex+'"';return n<1?o+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function Je(e,t,n){var o=e+t;return typeof n<"u"&&(o+=" "+n),o}function oi(e,t,n){for(var o="",a=0,l=!1,f=0,u=0;u<e.length;u++){var d=Math.floor(u%t),_=Math.floor(u/t);!d&&!l&&(l=!0),e[u]?(f++,u>0&&d>0&&e[u-1]||(o+=l?Je("M",d+n,.5+_+n):Je("m",a,0),a=0,l=!1),d+1<t&&e[u+1]||(o+=Je("h",f),f=0)):a++}return o}Tn.render=function(t,n,o){var a=ri.getOptions(n),l=t.modules.size,f=t.modules.data,u=l+a.margin*2,d=a.color.light.a?"<path "+Mt(a.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",_="<path "+Mt(a.color.dark,"stroke")+' d="'+oi(f,l,a.margin)+'"/>',h='viewBox="0 0 '+u+" "+u+'"',v=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",A='<svg xmlns="http://www.w3.org/2000/svg" '+v+h+' shape-rendering="crispEdges">'+d+_+`</svg>
`;return typeof o=="function"&&o(null,A),A};var ii=lo,nt=un,kn=Bn,ai=Tn;function pt(e,t,n,o,a){var l=[].slice.call(arguments,1),f=l.length,u=typeof l[f-1]=="function";if(!u&&!ii())throw new Error("Callback required as last argument");if(u){if(f<2)throw new Error("Too few arguments provided");f===2?(a=n,n=t,t=o=void 0):f===3&&(t.getContext&&typeof a>"u"?(a=o,o=void 0):(a=o,o=n,n=t,t=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(n=t,t=o=void 0):f===2&&!t.getContext&&(o=n,n=t,t=void 0),new Promise(function(_,h){try{var v=nt.create(n,o);_(e(v,t,o))}catch(A){h(A)}})}try{var d=nt.create(n,o);a(null,e(d,t,o))}catch(_){a(_)}}Ce.create=nt.create;Ce.toCanvas=pt.bind(null,kn.render);Ce.toDataURL=pt.bind(null,kn.renderToDataURL);Ce.toString=pt.bind(null,function(e,t,n){return ai.render(e,n)});var li=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(a){e.addRange(a)}),t&&t.focus()}},ui=li,Pt={"text/plain":"Text","text/html":"Url",default:"Text"},ci="Copy to clipboard: #{key}, Enter";function fi(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function si(e,t){var n,o,a,l,f,u,d=!1;t||(t={}),n=t.debug||!1;try{a=ui(),l=document.createRange(),f=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(h){if(h.stopPropagation(),t.format)if(h.preventDefault(),typeof h.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var v=Pt[t.format]||Pt.default;window.clipboardData.setData(v,e)}else h.clipboardData.clearData(),h.clipboardData.setData(t.format,e);t.onCopy&&(h.preventDefault(),t.onCopy(h.clipboardData))}),document.body.appendChild(u),l.selectNodeContents(u),f.addRange(l);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");d=!0}catch(h){n&&console.error("unable to copy using execCommand: ",h),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(v){n&&console.error("unable to copy using clipboardData: ",v),n&&console.error("falling back to prompt"),o=fi("message"in t?t.message:ci),window.prompt(o,e)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(l):f.removeAllRanges()),u&&document.body.removeChild(u),a()}return d}var hi=si,S,we,_t,Sn,Dt,gt,Nn,ee={},ze=[],di=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function Z(e,t){for(var n in t)e[n]=t[n];return e}function Rn(e){var t=e.parentNode;t&&t.removeChild(e)}function te(e,t,n){var o,a=arguments,l={};for(o in t)o!=="key"&&o!=="ref"&&(l[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(a[o]);if(n!=null&&(l.children=n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return Ue(e,l,t&&t.key,t&&t.ref,null)}function Ue(e,t,n,o,a){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a};return a==null&&(l.__v=l),S.vnode&&S.vnode(l),l}function In(){return{}}function Be(e){return e.children}function J(e,t){this.props=e,this.context=t}function Ee(e,t){if(t==null)return e.__?Ee(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ee(e):null}function Ln(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ln(e)}}function Re(e){(!e.__d&&(e.__d=!0)&&we.push(e)&&!_t++||Dt!==S.debounceRendering)&&((Dt=S.debounceRendering)||Sn)(pi)}function pi(){for(var e;_t=we.length;)e=we.sort(function(t,n){return t.__v.__b-n.__v.__b}),we=[],e.some(function(t){var n,o,a,l,f,u,d;t.__d&&(u=(f=(n=t).__v).__e,(d=n.__P)&&(o=[],(a=Z({},f)).__v=a,l=mt(d,f,a,n.__n,d.ownerSVGElement!==void 0,null,o,u??Ee(f)),Fn(o,f),l!=u&&Ln(f)))})}function Un(e,t,n,o,a,l,f,u,d){var _,h,v,A,k,y,B,T=n&&n.__k||ze,C=T.length;if(u==ee&&(u=l!=null?l[0]:C?Ee(n,0):null),_=0,t.__k=re(t.__k,function(x){if(x!=null){if(x.__=t,x.__b=t.__b+1,(v=T[_])===null||v&&x.key==v.key&&x.type===v.type)T[_]=void 0;else for(h=0;h<C;h++){if((v=T[h])&&x.key==v.key&&x.type===v.type){T[h]=void 0;break}v=null}if(A=mt(e,x,v=v||ee,o,a,l,f,u,d),(h=x.ref)&&v.ref!=h&&(B||(B=[]),v.ref&&B.push(v.ref,null,x),B.push(h,x.__c||A,x)),A!=null){var E;if(y==null&&(y=A),x.__d!==void 0)E=x.__d,x.__d=void 0;else if(l==v||A!=u||A.parentNode==null){e:if(u==null||u.parentNode!==e)e.appendChild(A),E=null;else{for(k=u,h=0;(k=k.nextSibling)&&h<C;h+=2)if(k==A)break e;e.insertBefore(A,u),E=u}t.type=="option"&&(e.value="")}u=E!==void 0?E:A.nextSibling,typeof t.type=="function"&&(t.__d=u)}else u&&v.__e==u&&u.parentNode!=e&&(u=Ee(v))}return _++,x}),t.__e=y,l!=null&&typeof t.type!="function")for(_=l.length;_--;)l[_]!=null&&Rn(l[_]);for(_=C;_--;)T[_]!=null&&ye(T[_],T[_]);if(B)for(_=0;_<B.length;_++)Mn(B[_],B[++_],B[++_])}function re(e,t,n){if(n==null&&(n=[]),e==null||typeof e=="boolean")t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)re(e[o],t,n);else n.push(t?t(typeof e=="string"||typeof e=="number"?Ue(null,e,null,null,e):e.__e!=null||e.__c!=null?Ue(e.type,e.props,e.key,null,e.__v):e):e);return n}function _i(e,t,n,o,a){var l;for(l in n)l==="children"||l==="key"||l in t||Fe(e,l,null,n[l],o);for(l in t)a&&typeof t[l]!="function"||l==="children"||l==="key"||l==="value"||l==="checked"||n[l]===t[l]||Fe(e,l,t[l],n[l],o)}function Ot(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=typeof n=="number"&&di.test(t)===!1?n+"px":n??""}function Fe(e,t,n,o,a){var l,f,u,d,_;if(a?t==="className"&&(t="class"):t==="class"&&(t="className"),t==="style")if(l=e.style,typeof n=="string")l.cssText=n;else{if(typeof o=="string"&&(l.cssText="",o=null),o)for(d in o)n&&d in n||Ot(l,d,"");if(n)for(_ in n)o&&n[_]===o[_]||Ot(l,_,n[_])}else t[0]==="o"&&t[1]==="n"?(f=t!==(t=t.replace(/Capture$/,"")),u=t.toLowerCase(),t=(u in e?u:t).slice(2),n?(o||e.addEventListener(t,$t,f),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,$t,f)):t!=="list"&&t!=="tagName"&&t!=="form"&&t!=="type"&&t!=="size"&&!a&&t in e?e[t]=n??"":typeof n!="function"&&t!=="dangerouslySetInnerHTML"&&(t!==(t=t.replace(/^xlink:?/,""))?n==null||n===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function $t(e){this.l[e.type](S.event?S.event(e):e)}function mt(e,t,n,o,a,l,f,u,d){var _,h,v,A,k,y,B,T,C,x,E=t.type;if(t.constructor!==void 0)return null;(_=S.__b)&&_(t);try{e:if(typeof E=="function"){if(T=t.props,C=(_=E.contextType)&&o[_.__c],x=_?C?C.props.value:_.__:o,n.__c?B=(h=t.__c=n.__c).__=h.__E:("prototype"in E&&E.prototype.render?t.__c=h=new E(T,x):(t.__c=h=new J(T,x),h.constructor=E,h.render=mi),C&&C.sub(h),h.props=T,h.state||(h.state={}),h.context=x,h.__n=o,v=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),E.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Z({},h.__s)),Z(h.__s,E.getDerivedStateFromProps(T,h.__s))),A=h.props,k=h.state,v)E.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(E.getDerivedStateFromProps==null&&T!==A&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(T,x),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(T,h.__s,x)===!1||t.__v===n.__v&&!h.__){for(h.props=T,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,h.__h.length&&f.push(h),_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__=t);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(T,h.__s,x),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(A,k,y)})}h.context=x,h.props=T,h.state=h.__s,(_=S.__r)&&_(t),h.__d=!1,h.__v=t,h.__P=e,_=h.render(h.props,h.state,h.context),t.__k=_!=null&&_.type==Be&&_.key==null?_.props.children:Array.isArray(_)?_:[_],h.getChildContext!=null&&(o=Z(Z({},o),h.getChildContext())),v||h.getSnapshotBeforeUpdate==null||(y=h.getSnapshotBeforeUpdate(A,k)),Un(e,t,n,o,a,l,f,u,d),h.base=t.__e,h.__h.length&&f.push(h),B&&(h.__E=h.__=null),h.__e=!1}else l==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=gi(n.__e,t,n,o,a,l,f,d);(_=S.diffed)&&_(t)}catch(w){t.__v=null,S.__e(w,t,n)}return t.__e}function Fn(e,t){S.__c&&S.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){S.__e(o,n.__v)}})}function gi(e,t,n,o,a,l,f,u){var d,_,h,v,A,k=n.props,y=t.props;if(a=t.type==="svg"||a,l!=null){for(d=0;d<l.length;d++)if((_=l[d])!=null&&((t.type===null?_.nodeType===3:_.localName===t.type)||e==_)){e=_,l[d]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(y);e=a?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,y.is&&{is:y.is}),l=null,u=!1}if(t.type===null)k!==y&&e.data!=y&&(e.data=y);else{if(l!=null&&(l=ze.slice.call(e.childNodes)),h=(k=n.props||ee).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,!u){if(k===ee)for(k={},A=0;A<e.attributes.length;A++)k[e.attributes[A].name]=e.attributes[A].value;(v||h)&&(v&&h&&v.__html==h.__html||(e.innerHTML=v&&v.__html||""))}_i(e,y,k,a,u),v?t.__k=[]:(t.__k=t.props.children,Un(e,t,n,o,t.type!=="foreignObject"&&a,l,f,ee,u)),u||("value"in y&&(d=y.value)!==void 0&&d!==e.value&&Fe(e,"value",d,k.value,!1),"checked"in y&&(d=y.checked)!==void 0&&d!==e.checked&&Fe(e,"checked",d,k.checked,!1))}return e}function Mn(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){S.__e(o,n)}}function ye(e,t,n){var o,a,l;if(S.unmount&&S.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Mn(o,null,t)),n||typeof e.type=="function"||(n=(a=e.__e)!=null),e.__e=e.__d=void 0,(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(f){S.__e(f,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&ye(o[l],t,n);a!=null&&Rn(a)}function mi(e,t,n){return this.constructor(e,n)}function xe(e,t,n){var o,a,l;S.__&&S.__(e,t),a=(o=n===gt)?null:n&&n.__k||t.__k,e=te(Be,null,[e]),l=[],mt(t,(o?t:n||t).__k=e,a||ee,ee,t.ownerSVGElement!==void 0,n&&!o?[n]:a?null:ze.slice.call(t.childNodes),l,n||ee,o),Fn(l,e)}function Pn(e,t){xe(e,t,gt)}function vi(e,t){var n,o;for(o in t=Z(Z({},e.props),t),arguments.length>2&&(t.children=ze.slice.call(arguments,2)),n={},t)o!=="key"&&o!=="ref"&&(n[o]=t[o]);return Ue(e.type,n,t.key||e.key,t.ref||e.ref,null)}function Dn(e){var t={},n={__c:"__cC"+Nn++,__:e,Consumer:function(o,a){return o.children(a)},Provider:function(o){var a,l=this;return this.getChildContext||(a=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(f){l.props.value!==f.value&&a.some(function(u){u.context=f.value,Re(u)})},this.sub=function(f){a.push(f);var u=f.componentWillUnmount;f.componentWillUnmount=function(){a.splice(a.indexOf(f),1),u&&u.call(f)}}),o.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}S={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&n.constructor.getDerivedStateFromError!=null&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),n.componentDidCatch!=null&&(o=!0,n.componentDidCatch(e)),o)return Re(n.__E=n)}catch(a){e=a}throw e}},J.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(n,this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Re(this))},J.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Re(this))},J.prototype.render=Be,we=[],_t=0,Sn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,gt=ee,Nn=0;var le,Y,zt,pe=0,rt=[],Ht=S.__r,Wt=S.diffed,qt=S.__c,Yt=S.unmount;function _e(e,t){S.__h&&S.__h(Y,e,pe||t),pe=0;var n=Y.__H||(Y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function vt(e){return pe=1,wt(Yn,e)}function wt(e,t,n){var o=_e(le++,2);return o.__c||(o.__c=Y,o.__=[n?n(t):Yn(void 0,t),function(a){var l=e(o.__[0],a);o.__[0]!==l&&(o.__[0]=l,o.__c.setState({}))}]),o.__}function On(e,t){var n=_e(le++,3);!S.__s&&bt(n.__H,t)&&(n.__=e,n.__H=t,Y.__H.__h.push(n))}function yt(e,t){var n=_e(le++,4);!S.__s&&bt(n.__H,t)&&(n.__=e,n.__H=t,Y.__h.push(n))}function $n(e){return pe=5,He(function(){return{current:e}},[])}function zn(e,t,n){pe=6,yt(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function He(e,t){var n=_e(le++,7);return bt(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function Hn(e,t){return pe=8,He(function(){return e},t)}function Wn(e){var t=Y.context[e.__c],n=_e(le++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(Y)),t.props.value):e.__}function qn(e,t){S.useDebugValue&&S.useDebugValue(t?t(e):e)}function wi(e){var t=_e(le++,10),n=vt();return t.__=e,Y.componentDidCatch||(Y.componentDidCatch=function(o){t.__&&t.__(o),n[1](o)}),[n[0],function(){n[1](void 0)}]}function yi(){rt.some(function(e){if(e.__P)try{e.__H.__h.forEach(ot),e.__H.__h.forEach(it),e.__H.__h=[]}catch(t){return e.__H.__h=[],S.__e(t,e.__v),!0}}),rt=[]}function ot(e){e.t&&e.t()}function it(e){var t=e.__();typeof t=="function"&&(e.t=t)}function bt(e,t){return!e||t.some(function(n,o){return n!==e[o]})}function Yn(e,t){return typeof t=="function"?t(e):t}S.__r=function(e){Ht&&Ht(e),le=0,(Y=e.__c).__H&&(Y.__H.__h.forEach(ot),Y.__H.__h.forEach(it),Y.__H.__h=[])},S.diffed=function(e){Wt&&Wt(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(rt.push(t)!==1&&zt===S.requestAnimationFrame||((zt=S.requestAnimationFrame)||function(o){var a,l=function(){clearTimeout(f),cancelAnimationFrame(a),setTimeout(o)},f=setTimeout(l,100);typeof window<"u"&&(a=requestAnimationFrame(l))})(yi))}},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ot),n.__h=n.__h.filter(function(o){return!o.__||it(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],S.__e(o,n.__v)}}),qt&&qt(e,t)},S.unmount=function(e){Yt&&Yt(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach(function(o){return o.t&&o.t()})}catch(o){S.__e(o,t.__v)}}};function Et(e,t){for(var n in t)e[n]=t[n];return e}function at(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}var Vn=function(e){var t,n;function o(a){var l;return(l=e.call(this,a)||this).isPureReactComponent=!0,l}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.shouldComponentUpdate=function(a,l){return at(this.props,a)||at(this.state,l)},o}(J);function Kn(e,t){function n(a){var l=this.props.ref,f=l==a.ref;return!f&&l&&(l.call?l(null):l.current=null),t?!t(this.props,a)||!f:at(this.props,a)}function o(a){return this.shouldComponentUpdate=n,te(e,Et({},a))}return o.prototype.isReactComponent=!0,o.displayName="Memo("+(e.displayName||e.name)+")",o.t=!0,o}var Vt=S.__b;function Qn(e){function t(n){var o=Et({},n);return delete o.ref,e(o,n.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}S.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Vt&&Vt(e)};var Kt=function(e,t){return e?re(e).reduce(function(n,o,a){return n.concat(t(o,a))},[]):null},Jn={map:Kt,forEach:Kt,count:function(e){return e?re(e).length:0},only:function(e){if((e=re(e)).length!==1)throw new Error("Children.only() expects only one child.");return e[0]},toArray:re},bi=S.__e;function Gn(e){return e&&((e=Et({},e)).__c=null,e.__k=e.__k&&e.__k.map(Gn)),e}function Me(){this.__u=0,this.o=null,this.__b=null}function Xn(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function jn(e){var t,n,o;function a(l){if(t||(t=e()).then(function(f){n=f.default||f},function(f){o=f}),o)throw o;if(!n)throw t;return te(n,l)}return a.displayName="Lazy",a.t=!0,a}function ue(){this.i=null,this.l=null}S.__e=function(e,t,n){if(e.then){for(var o,a=t;a=a.__;)if((o=a.__c)&&o.__c)return o.__c(e,t.__c)}bi(e,t,n)},(Me.prototype=new J).__c=function(e,t){var n=this;n.o==null&&(n.o=[]),n.o.push(t);var o=Xn(n.__v),a=!1,l=function(){a||(a=!0,o?o(f):f())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){l(),t.__c&&t.__c()};var f=function(){var u;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});u=n.o.pop();)u.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(l,l)},Me.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Gn(this.__b),this.__b=null),[te(J,null,t.u?null:e.children),t.u&&e.fallback]};var Qt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(ue.prototype=new J).u=function(e){var t=this,n=Xn(t.__v),o=t.l.get(e);return o[0]++,function(a){var l=function(){t.props.revealOrder?(o.push(a),Qt(t,e,o)):a()};n?n(l):l()}},ue.prototype.render=function(e){this.i=null,this.l=new Map;var t=re(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ue.prototype.componentDidUpdate=ue.prototype.componentDidMount=function(){var e=this;e.l.forEach(function(t,n){Qt(e,n,t)})};var Ei=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},e}();function xi(e){var t=this,n=e.container,o=te(Ei,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),ye(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,xe(o,n),t.__k=n.__k):(t.v=document.createTextNode(""),Pn("",n),n.appendChild(t.v),t.p=!0,t.s=n,xe(o,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),ye(t.h)),t.h=o,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),ye(t.h)},null}function Zn(e,t){return te(xi,{vnode:e,container:t})}var Jt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;J.prototype.isReactComponent={};var er=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103;function lt(e,t,n){if(t.__k==null)for(;t.firstChild;)t.removeChild(t.firstChild);return xe(e,t),typeof n=="function"&&n(),e?e.__c:null}function Ci(e,t,n){return Pn(e,t),typeof n=="function"&&n(),e?e.__c:null}var Gt=S.event;function Ge(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}S.event=function(e){Gt&&(e=Gt(e)),e.persist=function(){};var t=!1,n=!1,o=e.stopPropagation;e.stopPropagation=function(){o.call(e),t=!0};var a=e.preventDefault;return e.preventDefault=function(){a.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var Xt={configurable:!0,get:function(){return this.class}},jt=S.vnode;S.vnode=function(e){e.$$typeof=er;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(Xt.enumerable="className"in n,n.className!=null&&(n.class=n.className),Object.defineProperty(n,"className",Xt)),typeof t!="function"){var o,a,l;for(l in n.defaultValue&&n.value!==void 0&&(n.value||n.value===0||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&t==="select"&&(re(n.children).forEach(function(f){n.value.indexOf(f.props.value)!=-1&&(f.props.selected=!0)}),delete n.value),n)if(o=Jt.test(l))break;if(o)for(l in a=e.props={},n)a[Jt.test(l)?l.replace(/[A-Z0-9]/,"-$&").toLowerCase():l]=n[l]}(function(f){var u=e.type,d=e.props;if(d&&typeof u=="string"){var _={};for(var h in d)/^on(Ani|Tra|Tou)/.test(h)&&(d[h.toLowerCase()]=d[h],delete d[h]),_[h.toLowerCase()]=h;if(_.ondoubleclick&&(d.ondblclick=d[_.ondoubleclick],delete d[_.ondoubleclick]),_.onbeforeinput&&(d.onbeforeinput=d[_.onbeforeinput],delete d[_.onbeforeinput]),_.onchange&&(u==="textarea"||u.toLowerCase()==="input"&&!/^fil|che|ra/i.test(d.type))){var v=_.oninput||"oninput";d[v]||(d[v]=d[_.onchange],delete d[_.onchange])}}})(),typeof t=="function"&&!t.m&&t.prototype&&(Ge(t.prototype,"componentWillMount"),Ge(t.prototype,"componentWillReceiveProps"),Ge(t.prototype,"componentWillUpdate"),t.m=!0)}jt&&jt(e)};var Ai="16.8.0";function tr(e){return te.bind(null,e)}function xt(e){return!!e&&e.$$typeof===er}function nr(e){return xt(e)?vi.apply(null,arguments):e}function rr(e){return!!e.__k&&(xe(null,e),!0)}function or(e){return e&&(e.base||e.nodeType===1&&e)||null}var ir=function(e,t){return e(t)};const Bi={useState:vt,useReducer:wt,useEffect:On,useLayoutEffect:yt,useRef:$n,useImperativeHandle:zn,useMemo:He,useCallback:Hn,useContext:Wn,useDebugValue:qn,version:"16.8.0",Children:Jn,render:lt,hydrate:lt,unmountComponentAtNode:rr,createPortal:Zn,createElement:te,createContext:Dn,createFactory:tr,cloneElement:nr,createRef:In,Fragment:Be,isValidElement:xt,findDOMNode:or,Component:J,PureComponent:Vn,memo:Kn,forwardRef:Qn,unstable_batchedUpdates:ir,Suspense:Me,SuspenseList:ue,lazy:jn},Ti=Object.freeze(Object.defineProperty({__proto__:null,default:Bi,version:Ai,Children:Jn,render:lt,hydrate:Ci,unmountComponentAtNode:rr,createPortal:Zn,createFactory:tr,cloneElement:nr,isValidElement:xt,findDOMNode:or,PureComponent:Vn,memo:Kn,forwardRef:Qn,unstable_batchedUpdates:ir,Suspense:Me,SuspenseList:ue,lazy:jn,createElement:te,createContext:Dn,createRef:In,Fragment:Be,Component:J,useState:vt,useReducer:wt,useEffect:On,useLayoutEffect:yt,useRef:$n,useImperativeHandle:zn,useMemo:He,useCallback:Hn,useContext:Wn,useDebugValue:qn,useErrorBoundary:wi},Symbol.toStringTag,{value:"Module"})),ki=on(Ti);function ar(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var q=ao,lr=ar(Ce),Si=ar(hi),b=ki;function Ni(e){lr.toString(e,{type:"terminal"}).then(console.log)}var Ri=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`,Ii="data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",Li="WalletConnect",Ui=300,Fi="rgb(64, 153, 255)",ur="walletconnect-wrapper",Zt="walletconnect-style-sheet",cr="walletconnect-qrcode-modal",Mi="walletconnect-qrcode-close",fr="walletconnect-qrcode-text",Pi="walletconnect-connect-button";function Di(e){return b.createElement("div",{className:"walletconnect-modal__header"},b.createElement("img",{src:Ii,className:"walletconnect-modal__headerLogo"}),b.createElement("p",null,Li),b.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:e.onClose},b.createElement("div",{id:Mi,className:"walletconnect-modal__close__icon"},b.createElement("div",{className:"walletconnect-modal__close__line1"}),b.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Oi(e){return b.createElement("a",{className:"walletconnect-connect__button",href:e.href,id:Pi+"-"+e.name,onClick:e.onClick,rel:"noopener noreferrer",style:{backgroundColor:e.color},target:"_blank"},e.name)}var $i="data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";function zi(e){var t=e.color,n=e.href,o=e.name,a=e.logo,l=e.onClick;return b.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:l,rel:"noopener noreferrer",target:"_blank"},b.createElement("h3",{className:"walletconnect-modal__base__row__h3"},o),b.createElement("div",{className:"walletconnect-modal__base__row__right"},b.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+a+"') "+t,backgroundSize:"100%"}}),b.createElement("img",{src:$i,className:"walletconnect-modal__base__row__right__caret"})))}function Hi(e){var t=e.color,n=e.href,o=e.name,a=e.logo,l=e.onClick,f=window.innerWidth<768?(o.length>8?2.5:2.7)+"vw":"inherit";return b.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:l,rel:"noopener noreferrer",target:"_blank"},b.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+a+"') "+t,backgroundSize:"100%"}}),b.createElement("div",{style:{fontSize:f},className:"walletconnect-connect__button__text"},o))}var Wi=5,Xe=12;function qi(e){var t=q.isAndroid(),n=b.useState(""),o=n[0],a=n[1],l=b.useState(""),f=l[0],u=l[1],d=b.useState(1),_=d[0],h=d[1],v=f?e.links.filter(function(w){return w.name.toLowerCase().includes(f.toLowerCase())}):e.links,A=e.errorMessage,k=f||v.length>Wi,y=Math.ceil(v.length/Xe),B=[(_-1)*Xe+1,_*Xe],T=v.length?v.filter(function(w,N){return N+1>=B[0]&&N+1<=B[1]}):[],C=!t&&y>1,x=void 0;function E(w){a(w.target.value),clearTimeout(x),w.target.value?x=setTimeout(function(){u(w.target.value),h(1)},1e3):(a(""),u(""),h(1))}return b.createElement("div",null,b.createElement("p",{id:fr,className:"walletconnect-qrcode__text"},t?e.text.connect_mobile_wallet:e.text.choose_preferred_wallet),!t&&b.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:o,onChange:E}),b.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(t?"__android":k&&v.length?"__wrap":"")},t?b.createElement(Oi,{name:e.text.connect,color:Fi,href:e.uri,onClick:b.useCallback(function(){q.saveMobileLinkInfo({name:"Unknown",href:e.uri})},[])}):T.length?T.map(function(w){var N=w.color,F=w.name,L=w.shortName,M=w.logo,z=q.formatIOSMobile(e.uri,w),O=b.useCallback(function(){q.saveMobileLinkInfo({name:F,href:z})},[T]);return k?b.createElement(Hi,{color:N,href:z,name:L||F,logo:M,onClick:O}):b.createElement(zi,{color:N,href:z,name:F,logo:M,onClick:O})}):b.createElement(b.Fragment,null,b.createElement("p",null,A.length?e.errorMessage:!!e.links.length&&!v.length?e.text.no_wallets_found:e.text.loading))),C&&b.createElement("div",{className:"walletconnect-modal__footer"},Array(y).fill(0).map(function(w,N){var F=N+1,L=_===F;return b.createElement("a",{style:{margin:"auto 10px",fontWeight:L?"bold":"normal"},onClick:function(){return h(F)}},F)})))}function Yi(e){var t=!!e.message.trim();return b.createElement("div",{className:"walletconnect-qrcode__notification"+(t?" notification__show":"")},e.message)}var Vi=function(e){try{var t="";return Promise.resolve(lr.toString(e,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(t=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),t})}catch(n){return Promise.reject(n)}};function Ki(e){var t=b.useState(""),n=t[0],o=t[1],a=b.useState(""),l=a[0],f=a[1];b.useEffect(function(){try{return Promise.resolve(Vi(e.uri)).then(function(d){f(d)})}catch(d){Promise.reject(d)}},[]);var u=function(){var d=Si(e.uri);d?(o(e.text.copied_to_clipboard),setInterval(function(){return o("")},1200)):(o("Error"),setInterval(function(){return o("")},1200))};return b.createElement("div",null,b.createElement("p",{id:fr,className:"walletconnect-qrcode__text"},e.text.scan_qrcode_with_wallet),b.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),b.createElement("div",{className:"walletconnect-modal__footer"},b.createElement("a",{onClick:u},e.text.copy_to_clipboard)),b.createElement(Yi,{message:n}))}var en={id:"23138217b046ae8d9d07e62b3337fb288c4445f92f64be067809cd0a8f9454b9",name:"Pera Wallet",homepage:"https://perawallet.app",chains:["algorand"],image_id:"1765f9aa-f99e-414e-826b-6b570d480999",image_url:{sm:"https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",md:"https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",lg:"https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png"},app:{browser:"",ios:"https://apps.apple.com/us/app/algorand-wallet/id1459898525",android:"https://play.google.com/store/apps/details?id=com.algorand.android",mac:"",windows:"",linux:""},mobile:{native:"algorand-wc:",universal:""},desktop:{native:"",universal:""},metadata:{shortName:"Pera Wallet",colors:{primary:"rgb(255, 238, 85)",secondary:""}}},sr={};sr[en.id]=en;function Qi(e){var t=q.isAndroid(),n=q.isMobile(),o=n?e.qrcodeModalOptions&&e.qrcodeModalOptions.mobileLinks?e.qrcodeModalOptions.mobileLinks:void 0:e.qrcodeModalOptions&&e.qrcodeModalOptions.desktopLinks?e.qrcodeModalOptions.desktopLinks:void 0,a=b.useState(!1),l=a[0],f=a[1],u=b.useState(!1),d=u[0],_=u[1],h=b.useState(!n),v=h[0],A=h[1],k={mobile:n,text:e.text,uri:e.uri,qrcodeModalOptions:e.qrcodeModalOptions},y=b.useState(""),B=y[0],T=y[1],C=b.useState(!1),x=C[0],E=C[1],w=b.useState([]),N=w[0],F=w[1],L=b.useState(""),M=L[0],z=L[1],O=function(){d||l||o&&!o.length||N.length>0||b.useEffect(function(){var Q=function(){try{if(t)return Promise.resolve();f(!0);try{var V=n?"mobile":"desktop",ae=q.getMobileLinkRegistry(q.formatMobileRegistry(sr,V),o);f(!1),_(!0),z(ae.length?"":e.text.no_supported_wallets),F(ae);var ge=ae.length===1;ge&&(T(q.formatIOSMobile(e.uri,ae[0])),A(!0)),E(ge)}catch(me){f(!1),_(!0),z(e.text.something_went_wrong),console.error(me)}return Promise.resolve()}catch(me){return Promise.reject(me)}};Q()})};O();var j=n?v:!v;return b.createElement("div",{id:cr,className:"walletconnect-qrcode__base animated fadeIn"},b.createElement("div",{className:"walletconnect-modal__base"},b.createElement(Di,{onClose:e.onClose}),x&&v?b.createElement("div",{className:"walletconnect-modal__single_wallet"},b.createElement("a",{onClick:function(){return q.saveMobileLinkInfo({name:N[0].name,href:B})},href:B,rel:"noopener noreferrer",target:"_blank"},e.text.connect_with+" "+(x?N[0].name:"")+" \u203A")):t||l||!l&&N.length?b.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(j?" right__selected":"")},b.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?b.createElement(b.Fragment,null,b.createElement("a",{onClick:function(){return A(!1),O()}},e.text.mobile),b.createElement("a",{onClick:function(){return A(!0)}},e.text.qrcode)):b.createElement(b.Fragment,null,b.createElement("a",{onClick:function(){return A(!0)}},e.text.qrcode),b.createElement("a",{onClick:function(){return A(!1),O()}},e.text.desktop))):null,b.createElement("div",null,v||!t&&!l&&!N.length?b.createElement(Ki,Object.assign({},k)):b.createElement(qi,Object.assign({},k,{links:N,errorMessage:M})))))}var Ji={choose_preferred_wallet:"W\xE4hle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterst\xFCtzten Wallet",no_wallets_found:"keine Wallet gefunden"},Gi={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Xi={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera m\xF3vil",scan_qrcode_with_wallet:"Escanea el c\xF3digo QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo sali\xF3 mal",no_supported_wallets:"Todav\xEDa no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},ji={choose_preferred_wallet:"Choisissez votre portefeuille pr\xE9f\xE9r\xE9",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copi\xE9!",connect_with:"Connectez-vous \xE0 l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourn\xE9",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouv\xE9"},Zi={choose_preferred_wallet:"\uC6D0\uD558\uB294 \uC9C0\uAC11\uC744 \uC120\uD0DD\uD558\uC138\uC694",connect_mobile_wallet:"\uBAA8\uBC14\uC77C \uC9C0\uAC11\uACFC \uC5F0\uACB0",scan_qrcode_with_wallet:"WalletConnect \uC9C0\uC6D0 \uC9C0\uAC11\uC5D0\uC11C QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD558\uC138\uC694",connect:"\uC5F0\uACB0",qrcode:"QR \uCF54\uB4DC",mobile:"\uBAA8\uBC14\uC77C",desktop:"\uB370\uC2A4\uD06C\uD0D1",copy_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",copied_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",connect_with:"\uC640 \uC5F0\uACB0\uD558\uB2E4",loading:"\uB85C\uB4DC \uC911...",something_went_wrong:"\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",no_supported_wallets:"\uC544\uC9C1 \uC9C0\uC6D0\uB418\uB294 \uC9C0\uAC11\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",no_wallets_found:"\uC9C0\uAC11\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"},ea={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se \xE0 carteira m\xF3vel",scan_qrcode_with_wallet:"Ler o c\xF3digo QR com uma carteira compat\xEDvel com WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda n\xE3o h\xE1 carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},ta={choose_preferred_wallet:"\u9009\u62E9\u4F60\u7684\u94B1\u5305",connect_mobile_wallet:"\u8FDE\u63A5\u81F3\u79FB\u52A8\u7AEF\u94B1\u5305",scan_qrcode_with_wallet:"\u4F7F\u7528\u517C\u5BB9 WalletConnect \u7684\u94B1\u5305\u626B\u63CF\u4E8C\u7EF4\u7801",connect:"\u8FDE\u63A5",qrcode:"\u4E8C\u7EF4\u7801",mobile:"\u79FB\u52A8",desktop:"\u684C\u9762",copy_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F",copied_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F\uFF01",connect_with:"\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8FDE\u63A5",loading:"\u6B63\u5728\u52A0\u8F7D...",something_went_wrong:"\u51FA\u4E86\u95EE\u9898",no_supported_wallets:"\u76EE\u524D\u8FD8\u6CA1\u6709\u652F\u6301\u7684\u94B1\u5305",no_wallets_found:"\u6CA1\u6709\u627E\u5230\u94B1\u5305"},na={choose_preferred_wallet:"\u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",connect_mobile_wallet:"\u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0648\u0635\u0644 \u0634\u0648\u06CC\u062F",scan_qrcode_with_wallet:"\u06A9\u062F QR \u0631\u0627 \u0628\u0627 \u06CC\u06A9 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06A9\u0646 \u06A9\u0646\u06CC\u062F",connect:"\u0627\u062A\u0635\u0627\u0644",qrcode:"\u06A9\u062F QR",mobile:"\u0633\u06CC\u0627\u0631",desktop:"\u062F\u0633\u06A9\u062A\u0627\u067E",copy_to_clipboard:"\u06A9\u067E\u06CC \u0628\u0647 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F",copied_to_clipboard:"\u062F\u0631 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F \u06A9\u067E\u06CC \u0634\u062F!",connect_with:"\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627",loading:"...\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",something_went_wrong:"\u0645\u0634\u06A9\u0644\u06CC \u067E\u06CC\u0634 \u0622\u0645\u062F",no_supported_wallets:"\u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",no_wallets_found:"\u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F"},tn={de:Ji,en:Gi,es:Xi,fr:ji,ko:Zi,pt:ea,zh:ta,fa:na};function ra(){var e=q.getDocumentOrThrow(),t=e.getElementById(Zt);t&&e.head.removeChild(t);var n=e.createElement("style");n.setAttribute("id",Zt),n.innerText=Ri,e.head.appendChild(n)}function oa(){var e=q.getDocumentOrThrow(),t=e.createElement("div");return t.setAttribute("id",ur),e.body.appendChild(t),t}function hr(){var e=q.getDocumentOrThrow(),t=e.getElementById(cr);t&&(t.className=t.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=e.getElementById(ur);n&&e.body.removeChild(n)},Ui))}function ia(e){return function(){hr(),e&&e()}}function aa(){var e=q.getNavigatorOrThrow().language.split("-")[0]||"en";return tn[e]||tn.en}function la(e,t,n){ra();var o=oa();b.render(b.createElement(Qi,{text:aa(),uri:e,onClose:ia(t),qrcodeModalOptions:n}),o)}function ua(){hr()}var nn="algorand";function ca(e,t){if(t==null||t){var n=new URL(e);if(!n.searchParams.has(nn))return n.searchParams.set(nn,"true"),n.toString()}return e}function fa(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)===-1&&(n[o]=e[o]);return n}var dr=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function sa(e,t,n){var o=n||{},a=o.addAlgorandMarkerToUri,l=fa(o,["addAlgorandMarkerToUri"]),f=l;e=ca(e,a),console.log(e),dr()?Ni(e):la(e,t,f)}function ha(){dr()||ua()}var da={open:sa,close:ha},rn=da;const ga=to({__proto__:null,default:rn},[rn]);export{ga as i};
