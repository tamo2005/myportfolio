(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var zf={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Qx(){if(tg)return xo;tg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return xo.Fragment=e,xo.jsx=i,xo.jsxs=i,xo}var ng;function Jx(){return ng||(ng=1,zf.exports=Qx()),zf.exports}var b=Jx(),Bf={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function $x(){if(ig)return st;ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(L,ne,pe){this.props=L,this.context=ne,this.refs=R,this.updater=pe||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=y.prototype;function O(L,ne,pe){this.props=L,this.context=ne,this.refs=R,this.updater=pe||M}var U=O.prototype=new x;U.constructor=O,E(U,y.prototype),U.isPureReactComponent=!0;var C=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function P(L,ne,pe,Se,$,me){return pe=me.ref,{$$typeof:o,type:L,key:ne,ref:pe!==void 0?pe:null,props:me}}function V(L,ne){return P(L.type,ne,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function w(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return ne[pe]})}var G=/\/+/g;function q(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):ne.toString(36)}function j(){}function ae(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(j,j):(L.status="pending",L.then(function(ne){L.status==="pending"&&(L.status="fulfilled",L.value=ne)},function(ne){L.status==="pending"&&(L.status="rejected",L.reason=ne)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ie(L,ne,pe,Se,$){var me=typeof L;(me==="undefined"||me==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(me){case"bigint":case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case o:case e:be=!0;break;case g:return be=L._init,ie(be(L._payload),ne,pe,Se,$)}}if(be)return $=$(L),be=Se===""?"."+q(L,0):Se,C($)?(pe="",be!=null&&(pe=be.replace(G,"$&/")+"/"),ie($,ne,pe,"",function(lt){return lt})):$!=null&&(D($)&&($=V($,pe+($.key==null||L&&L.key===$.key?"":(""+$.key).replace(G,"$&/")+"/")+be)),ne.push($)),1;be=0;var we=Se===""?".":Se+":";if(C(L))for(var Ce=0;Ce<L.length;Ce++)Se=L[Ce],me=we+q(Se,Ce),be+=ie(Se,ne,pe,me,$);else if(Ce=_(L),typeof Ce=="function")for(L=Ce.call(L),Ce=0;!(Se=L.next()).done;)Se=Se.value,me=we+q(Se,Ce++),be+=ie(Se,ne,pe,me,$);else if(me==="object"){if(typeof L.then=="function")return ie(ae(L),ne,pe,Se,$);throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return be}function z(L,ne,pe){if(L==null)return L;var Se=[],$=0;return ie(L,Se,"","",function(me){return ne.call(pe,me,$++)}),Se}function K(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function he(){}return st.Children={map:z,forEach:function(L,ne,pe){z(L,function(){ne.apply(this,arguments)},pe)},count:function(L){var ne=0;return z(L,function(){ne++}),ne},toArray:function(L){return z(L,function(ne){return ne})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},st.Component=y,st.Fragment=i,st.Profiler=l,st.PureComponent=O,st.StrictMode=r,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,st.__COMPILER_RUNTIME={__proto__:null,c:function(L){return H.H.useMemoCache(L)}},st.cache=function(L){return function(){return L.apply(null,arguments)}},st.cloneElement=function(L,ne,pe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Se=E({},L.props),$=L.key,me=void 0;if(ne!=null)for(be in ne.ref!==void 0&&(me=void 0),ne.key!==void 0&&($=""+ne.key),ne)!F.call(ne,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&ne.ref===void 0||(Se[be]=ne[be]);var be=arguments.length-2;if(be===1)Se.children=pe;else if(1<be){for(var we=Array(be),Ce=0;Ce<be;Ce++)we[Ce]=arguments[Ce+2];Se.children=we}return P(L.type,$,void 0,void 0,me,Se)},st.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},st.createElement=function(L,ne,pe){var Se,$={},me=null;if(ne!=null)for(Se in ne.key!==void 0&&(me=""+ne.key),ne)F.call(ne,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&($[Se]=ne[Se]);var be=arguments.length-2;if(be===1)$.children=pe;else if(1<be){for(var we=Array(be),Ce=0;Ce<be;Ce++)we[Ce]=arguments[Ce+2];$.children=we}if(L&&L.defaultProps)for(Se in be=L.defaultProps,be)$[Se]===void 0&&($[Se]=be[Se]);return P(L,me,void 0,void 0,null,$)},st.createRef=function(){return{current:null}},st.forwardRef=function(L){return{$$typeof:h,render:L}},st.isValidElement=D,st.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},st.memo=function(L,ne){return{$$typeof:m,type:L,compare:ne===void 0?null:ne}},st.startTransition=function(L){var ne=H.T,pe={};H.T=pe;try{var Se=L(),$=H.S;$!==null&&$(pe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(he,Y)}catch(me){Y(me)}finally{H.T=ne}},st.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},st.use=function(L){return H.H.use(L)},st.useActionState=function(L,ne,pe){return H.H.useActionState(L,ne,pe)},st.useCallback=function(L,ne){return H.H.useCallback(L,ne)},st.useContext=function(L){return H.H.useContext(L)},st.useDebugValue=function(){},st.useDeferredValue=function(L,ne){return H.H.useDeferredValue(L,ne)},st.useEffect=function(L,ne,pe){var Se=H.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(L,ne)},st.useId=function(){return H.H.useId()},st.useImperativeHandle=function(L,ne,pe){return H.H.useImperativeHandle(L,ne,pe)},st.useInsertionEffect=function(L,ne){return H.H.useInsertionEffect(L,ne)},st.useLayoutEffect=function(L,ne){return H.H.useLayoutEffect(L,ne)},st.useMemo=function(L,ne){return H.H.useMemo(L,ne)},st.useOptimistic=function(L,ne){return H.H.useOptimistic(L,ne)},st.useReducer=function(L,ne,pe){return H.H.useReducer(L,ne,pe)},st.useRef=function(L){return H.H.useRef(L)},st.useState=function(L){return H.H.useState(L)},st.useSyncExternalStore=function(L,ne,pe){return H.H.useSyncExternalStore(L,ne,pe)},st.useTransition=function(){return H.H.useTransition()},st.version="19.1.0",st}var ag;function ch(){return ag||(ag=1,Bf.exports=$x()),Bf.exports}var Ve=ch(),Ff={exports:{}},yo={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function ey(){return rg||(rg=1,function(o){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var he=Y-1>>>1,L=z[he];if(0<l(L,K))z[he]=K,z[Y]=L,Y=he;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var he=0,L=z.length,ne=L>>>1;he<ne;){var pe=2*(he+1)-1,Se=z[pe],$=pe+1,me=z[$];if(0>l(Se,Y))$<L&&0>l(me,Se)?(z[he]=me,z[$]=Y,he=$):(z[he]=Se,z[pe]=Y,he=pe);else if($<L&&0>l(me,Y))z[he]=me,z[$]=Y,he=$;else break e}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,v=null,_=3,M=!1,E=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=z)r(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function H(z){if(R=!1,C(z),!E)if(i(p)!==null)E=!0,F||(F=!0,q());else{var K=i(m);K!==null&&ie(H,K.startTime-z)}}var F=!1,P=-1,V=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<V)}function G(){if(y=!1,F){var z=o.unstable_now();D=z;var K=!0;try{e:{E=!1,R&&(R=!1,O(P),P=-1),M=!0;var Y=_;try{t:{for(C(z),v=i(p);v!==null&&!(v.expirationTime>z&&w());){var he=v.callback;if(typeof he=="function"){v.callback=null,_=v.priorityLevel;var L=he(v.expirationTime<=z);if(z=o.unstable_now(),typeof L=="function"){v.callback=L,C(z),K=!0;break t}v===i(p)&&r(p),C(z)}else r(p);v=i(p)}if(v!==null)K=!0;else{var ne=i(m);ne!==null&&ie(H,ne.startTime-z),K=!1}}break e}finally{v=null,_=Y,M=!1}K=void 0}}finally{K?q():F=!1}}}var q;if(typeof U=="function")q=function(){U(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ae=j.port2;j.port1.onmessage=G,q=function(){ae.postMessage(null)}}else q=function(){x(G,0)};function ie(z,K){P=x(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var Y=_;_=K;try{return z()}finally{_=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=_;_=z;try{return K()}finally{_=Y}},o.unstable_scheduleCallback=function(z,K,Y){var he=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?he+Y:he):Y=he,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,z={id:g++,callback:K,priorityLevel:z,startTime:Y,expirationTime:L,sortIndex:-1},Y>he?(z.sortIndex=Y,e(m,z),i(p)===null&&z===i(m)&&(R?(O(P),P=-1):R=!0,ie(H,Y-he))):(z.sortIndex=L,e(p,z),E||M||(E=!0,F||(F=!0,q()))),z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(z){var K=_;return function(){var Y=_;_=K;try{return z.apply(this,arguments)}finally{_=Y}}}}(Gf)),Gf}var sg;function ty(){return sg||(sg=1,Hf.exports=ey()),Hf.exports}var Vf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function ny(){if(og)return Rn;og=1;var o=ch();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Rn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Rn.requestFormReset=function(p){r.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var lg;function iy(){if(lg)return Vf.exports;lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vf.exports=ny(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function ay(){if(cg)return yo;cg=1;var o=ty(),e=ch(),i=iy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,s=f;break}if(A===s){S=!0,s=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=c;break}if(A===s){S=!0,s=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var j=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===j?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}var ie=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},he=[],L=-1;function ne(t){return{current:t}}function pe(t){0>L||(t.current=he[L],he[L]=null,L--)}function Se(t,n){L++,he[L]=t.current,t.current=n}var $=ne(null),me=ne(null),be=ne(null),we=ne(null);function Ce(t,n){switch(Se(be,n),Se(me,t),Se($,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?C0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=C0(n),t=N0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe($),Se($,t)}function lt(){pe($),pe(me),pe(be)}function Je(t){t.memoizedState!==null&&Se(we,t);var n=$.current,a=N0(n,t.type);n!==a&&(Se(me,t),Se($,a))}function Pt(t){me.current===t&&(pe($),pe(me)),we.current===t&&(pe(we),po._currentValue=Y)}var Gt=Object.prototype.hasOwnProperty,vt=o.unstable_scheduleCallback,k=o.unstable_cancelCallback,yn=o.unstable_shouldYield,Mt=o.unstable_requestPaint,pt=o.unstable_now,ke=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Ze=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,Qt=o.unstable_LowPriority,I=o.unstable_IdlePriority,T=o.log,se=o.unstable_setDisableYieldValue,ge=null,_e=null;function fe(t){if(typeof T=="function"&&se(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ge,t)}catch{}}var Pe=Math.clz32?Math.clz32:je,De=Math.log,Ge=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(De(t)/Ge|0)|0}var Me=256,Ie=4194304;function qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ye(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=qe(s):(S&=A,S!==0?c=qe(S):a||(a=A&~t,a!==0&&(c=qe(a))))):(A=s&~f,A!==0?c=qe(A):S!==0?c=qe(S):a||(a=s&~t,a!==0&&(c=qe(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Ue(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,te=t.hiddenUpdates;for(a=S&~a;0<a;){var de=31-Pe(a),xe=1<<de;A[de]=0,B[de]=-1;var oe=te[de];if(oe!==null)for(te[de]=null,de=0;de<oe.length;de++){var le=oe[de];le!==null&&(le.lane&=-536870913)}a&=~xe}s!==0&&ye(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function ye(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Fe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pe(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Z0(t.type))}function Xn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,Sn="__reactProps$"+hn,On="__reactContainer$"+hn,ja="__reactEvents$"+hn,Fo="__reactListeners$"+hn,Ho="__reactHandles$"+hn,Xa="__reactResources$"+hn,oa="__reactMarker$"+hn;function la(t){delete t[on],delete t[Sn],delete t[ja],delete t[Fo],delete t[Ho]}function Ni(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[On]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=O0(t);t!==null;){if(a=t[on])return a;t=O0(t)}return n}t=a,a=t.parentNode}return null}function Di(t){if(t=t[on]||t[On]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Wa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ca(t){var n=t[Xa];return n||(n=t[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[oa]=!0}var Go=new Set,Vo={};function Ui(t,n){N(t,n),N(t+"Capture",n)}function N(t,n){for(Vo[t]=n,t=0;t<n.length;t++)Go.add(n[t])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},ue={};function J(t){return Gt.call(ue,t)?!0:Gt.call(ce,t)?!1:Q.test(t)?ue[t]=!0:(ce[t]=!0,!1)}function Te(t,n,a){if(J(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Oe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Be,tt;function Qe(t){if(Be===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Be=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+tt}var Xe=!1;function ct(t,n){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var oe=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){oe=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){oe=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var B=S.split(`
`),te=A.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<te.length&&!te[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===te.length)for(s=B.length-1,c=te.length-1;1<=s&&0<=c&&B[s]!==te[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==te[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==te[c]){var de=`
`+B[s].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=s&&0<=c);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Qe(a):""}function Rt(t){switch(t.tag){case 26:case 27:case 5:return Qe(t.type);case 16:return Qe("Lazy");case 13:return Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return Qe("Activity");default:return""}}function Wt(t){try{var n="";do n+=Rt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ct(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t){var n=Ct(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function It(t){t._valueTracker||(t._valueTracker=Ke(t))}function xt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ct(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ua=/[\n"\\]/g;function jt(t){return t.replace(ua,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(t,n,a,s,c,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+dt(n)):t.value!==""+dt(n)&&(t.value=""+dt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?An(t,S,dt(n)):a!=null?An(t,S,dt(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+dt(A):t.removeAttribute("name")}function Vt(t,n,a,s,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+dt(a):"",n=n!=null?""+dt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function An(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+dt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function mn(t,n,a){if(n!=null&&(n=""+dt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+dt(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ie(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=dt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Si(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ch(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Nh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Ch(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ch(t,f,n[f])}function Pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Kv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ic=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Er=null;function Dh(t){var n=Di(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Li(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Sn]||null;if(!c)throw Error(r(90));Li(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&xt(s)}break e;case"textarea":mn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var Bc=!1;function Uh(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var s=t(n);return s}finally{if(Bc=!1,(br!==null||Er!==null)&&(Rl(),br&&(n=br,t=Er,Er=br=null,Dh(n),t)))for(n=0;n<t.length;n++)Dh(t[n])}}function As(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Sn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Pi)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Fc=!1}var fa=null,Hc=null,jo=null;function Lh(){if(jo)return jo;var t,n=Hc,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return jo=c.slice(t,1<s?1-s:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Oh(){return!1}function Pn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Oh,this.isPropagationStopped=Oh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Pn(qa),Rs=g({},qa,{view:0,detail:0}),Qv=Pn(Rs),Gc,Vc,Cs,Yo=g({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(Gc=t.screenX-Cs.screenX,Vc=t.screenY-Cs.screenY):Vc=Gc=0,Cs=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Ph=Pn(Yo),Jv=g({},Yo,{dataTransfer:0}),$v=Pn(Jv),e_=g({},Rs,{relatedTarget:0}),kc=Pn(e_),t_=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=Pn(t_),i_=g({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a_=Pn(i_),r_=g({},qa,{data:0}),Ih=Pn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=l_[t])?!!n[t]:!1}function jc(){return c_}var u_=g({},Rs,{key:function(t){if(t.key){var n=s_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f_=Pn(u_),d_=g({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=Pn(d_),h_=g({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),p_=Pn(h_),m_=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=Pn(m_),v_=g({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),__=Pn(v_),x_=g({},qa,{newState:0,oldState:0}),y_=Pn(x_),S_=[9,13,27,32],Xc=Pi&&"CompositionEvent"in window,Ns=null;Pi&&"documentMode"in document&&(Ns=document.documentMode);var M_=Pi&&"TextEvent"in window&&!Ns,Bh=Pi&&(!Xc||Ns&&8<Ns&&11>=Ns),Fh=" ",Hh=!1;function Gh(t,n){switch(t){case"keyup":return S_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function b_(t,n){switch(t){case"compositionend":return Vh(n);case"keypress":return n.which!==32?null:(Hh=!0,Fh);case"textInput":return t=n.data,t===Fh&&Hh?null:t;default:return null}}function E_(t,n){if(Tr)return t==="compositionend"||!Xc&&Gh(t,n)?(t=Lh(),jo=Hc=fa=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bh&&n.locale!=="ko"?null:n.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!T_[t.type]:n==="textarea"}function jh(t,n,a,s){br?Er?Er.push(s):Er=[s]:br=s,n=Ol(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ds=null,Us=null;function A_(t){E0(t,0)}function Zo(t){var n=Wa(t);if(xt(n))return t}function Xh(t,n){if(t==="change")return n}var Wh=!1;if(Pi){var Wc;if(Pi){var qc="oninput"in document;if(!qc){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),qc=typeof qh.oninput=="function"}Wc=qc}else Wc=!1;Wh=Wc&&(!document.documentMode||9<document.documentMode)}function Yh(){Ds&&(Ds.detachEvent("onpropertychange",Zh),Us=Ds=null)}function Zh(t){if(t.propertyName==="value"&&Zo(Us)){var n=[];jh(n,Us,t,zc(t)),Uh(A_,n)}}function w_(t,n,a){t==="focusin"?(Yh(),Ds=n,Us=a,Ds.attachEvent("onpropertychange",Zh)):t==="focusout"&&Yh()}function R_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Us)}function C_(t,n){if(t==="click")return Zo(n)}function N_(t,n){if(t==="input"||t==="change")return Zo(n)}function D_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:D_;function Ls(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Gt.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,n){var a=Kh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kh(a)}}function Jh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $h(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var U_=Pi&&"documentMode"in document&&11>=document.documentMode,Ar=null,Zc=null,Os=null,Kc=!1;function ep(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Ar==null||Ar!==pn(s)||(s=Ar,"selectionStart"in s&&Yc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Os&&Ls(Os,s)||(Os=s,s=Ol(Zc,"onSelect"),0<s.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ar)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Qc={},tp={};Pi&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Za(t){if(Qc[t])return Qc[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in tp)return Qc[t]=n[a];return t}var np=Za("animationend"),ip=Za("animationiteration"),ap=Za("animationstart"),L_=Za("transitionrun"),O_=Za("transitionstart"),P_=Za("transitioncancel"),rp=Za("transitionend"),sp=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function di(t,n){sp.set(t,n),Ui(n,[t])}var op=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},op.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var ai=[],Rr=0,$c=0;function Ko(){for(var t=Rr,n=$c=Rr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&lp(a,c,f)}}function Qo(t,n,a,s){ai[Rr++]=t,ai[Rr++]=n,ai[Rr++]=a,ai[Rr++]=s,$c|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function eu(t,n,a,s){return Qo(t,n,a,s),Jo(t)}function Cr(t,n){return Qo(t,null,null,n),Jo(t)}function lp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pe(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(t){if(50<ro)throw ro=0,of=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function I_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new I_(t,n,a,s)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $o(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")tu(t)&&(S=1);else if(typeof t=="string")S=Bx(t,a,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=qn(31,a,n,c),t.elementType=D,t.lanes=f,t;case E:return Ka(a.children,c,f,n);case R:S=8,c|=24;break;case y:return t=qn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case H:return t=qn(13,a,n,c),t.elementType=H,t.lanes=f,t;case F:return t=qn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case U:S=10;break e;case O:S=9;break e;case C:S=11;break e;case P:S=14;break e;case V:S=16,s=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ka(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function nu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function iu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dr=[],Ur=0,el=null,tl=0,ri=[],si=0,Qa=null,zi=1,Bi="";function Ja(t,n){Dr[Ur++]=tl,Dr[Ur++]=el,el=t,tl=n}function up(t,n,a){ri[si++]=zi,ri[si++]=Bi,ri[si++]=Qa,Qa=t;var s=zi;t=Bi;var c=32-Pe(s)-1;s&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,zi=1<<32-Pe(n)+c|a<<c|s,Bi=f+t}else zi=1<<f|a<<c|s,Bi=t}function au(t){t.return!==null&&(Ja(t,1),up(t,1,0))}function ru(t){for(;t===el;)el=Dr[--Ur],Dr[Ur]=null,tl=Dr[--Ur],Dr[Ur]=null;for(;t===Qa;)Qa=ri[--si],ri[si]=null,Bi=ri[--si],ri[si]=null,zi=ri[--si],ri[si]=null}var Un=null,Zt=null,wt=!1,$a=null,Mi=!1,su=Error(r(519));function er(t){var n=Error(r(418,""));throw zs(ii(n,t)),su}function fp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[Sn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)gt(oo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Vt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),It(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mn(n,s.value,s.defaultValue,s.children),It(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||R0(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Pl),n=!0):n=!1,n||er(t)}function dp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function Ps(t){if(t!==Un)return!1;if(!wt)return dp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&Zt&&er(t),dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=pi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,wa(t.type)?(t=wf,wf=null,Zt=t):Zt=n):Zt=Un?pi(t.stateNode.nextSibling):null;return!0}function Is(){Zt=Un=null,wt=!1}function hp(){var t=$a;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),$a=null),t}function zs(t){$a===null?$a=[t]:$a.push(t)}var ou=ne(null),tr=null,Fi=null;function da(t,n,a){Se(ou,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=ou.current,pe(ou)}function lu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),lu(f.return,a,t),s||(S=null);break e}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),lu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Bs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Wn(c.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(c===we.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}c=c.return}t!==null&&cu(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function nr(t){tr=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return pp(tr,t)}function il(t,n){return tr===null&&nr(t),pp(t,n)}function pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var z_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},B_=o.unstable_scheduleCallback,F_=o.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new z_,data:new Map,refCount:0}}function Fs(t){t.refCount--,t.refCount===0&&B_(F_,function(){t.controller.abort()})}var Hs=null,fu=0,Lr=0,Or=null;function H_(t,n){if(Hs===null){var a=Hs=[];fu=0,Lr=pf(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return fu++,n.then(mp,mp),n}function mp(){if(--fu===0&&Hs!==null){Or!==null&&(Or.status="fulfilled");var t=Hs;Hs=null,Lr=0,Or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function G_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var gp=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&H_(t,n),gp!==null&&gp(t,n)};var ir=ne(null);function du(){var t=ir.current;return t!==null?t:Xt.pooledCache}function al(t,n){n===null?Se(ir,ir.current):Se(ir,n.pool)}function vp(){var t=du();return t===null?null:{parent:cn._currentValue,pool:t}}var Gs=Error(r(460)),_p=Error(r(474)),rl=Error(r(542)),hu={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sl(){}function yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t;default:if(typeof n.status=="string")n.then(sl,sl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t}throw Vs=n,Gs}}var Vs=null;function Sp(){if(Vs===null)throw Error(r(459));var t=Vs;return Vs=null,t}function Mp(t){if(t===Gs||t===rl)throw Error(r(483))}var ha=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ma(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Lt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Jo(t),lp(t,null,a),n}return Qo(t,s,n,a),Jo(t)}function ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Fe(t,a)}}function gu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vu=!1;function js(){if(vu){var t=Or;if(t!==null)throw t}}function Xs(t,n,a,s){vu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,te=B.next;B.next=null,S===null?f=te:S.next=te,S=B;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==S&&(A===null?de.firstBaseUpdate=te:A.next=te,de.lastBaseUpdate=B))}if(f!==null){var xe=c.baseState;S=0,de=te=B=null,A=f;do{var oe=A.lane&-536870913,le=oe!==A.lane;if(le?(St&oe)===oe:(s&oe)===oe){oe!==0&&oe===Lr&&(vu=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var nt=t,$e=A;oe=n;var Ft=a;switch($e.tag){case 1:if(nt=$e.payload,typeof nt=="function"){xe=nt.call(Ft,xe,oe);break e}xe=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=$e.payload,oe=typeof nt=="function"?nt.call(Ft,xe,oe):nt,oe==null)break e;xe=g({},xe,oe);break e;case 2:ha=!0}}oe=A.callback,oe!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?(te=de=le,B=xe):de=de.next=le,S|=oe;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;le=A,A=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(B=xe),c.baseState=B,c.firstBaseUpdate=te,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),ba|=S,t.lanes=S,t.memoizedState=xe}}function bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Ep(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)bp(a[t],n)}var Pr=ne(null),ol=ne(0);function Tp(t,n){t=qi,Se(ol,t),Se(Pr,n),qi=t|n.baseLanes}function _u(){Se(ol,qi),Se(Pr,Pr.current)}function xu(){qi=ol.current,pe(Pr),pe(ol)}var ga=0,ft=null,zt=null,an=null,ll=!1,Ir=!1,ar=!1,cl=0,Ws=0,zr=null,V_=0;function Jt(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Su(t,n,a,s,c,f){return ga=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?lm:cm,ar=!1,f=a(s,c),ar=!1,Ir&&(f=wp(n,a,s,c)),Ap(t),f}function Ap(t){z.H=ml;var n=zt!==null&&zt.next!==null;if(ga=0,an=zt=ft=null,ll=!1,Ws=0,zr=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&nl(t)&&(gn=!0))}function wp(t,n,a,s){ft=t;var c=0;do{if(Ir&&(zr=null),Ws=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,an=zt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Z_,f=n(a,s)}while(Ir);return f}function k_(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?qs(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Mu(){var t=cl!==0;return cl=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Eu(t){if(ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ll=!1}ga=0,an=zt=ft=null,Ir=!1,Ws=cl=0,zr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ft.memoizedState=an=t:an=an.next=t,an}function rn(){if(zt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=an===null?ft.memoizedState:an.next;if(n!==null)an=n,zt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},an===null?ft.memoizedState=an=t:an=an.next=t}return an}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qs(t){var n=Ws;return Ws+=1,zr===null&&(zr=[]),t=yp(zr,t,n),n=ft,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?lm:cm),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qs(t);if(t.$$typeof===U)return wn(t)}throw Error(r(438,String(t)))}function Au(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ft.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function fl(t){var n=rn();return wu(n,zt,t)}function wu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=S=null,B=null,te=n,de=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(St&xe)===xe:(ga&xe)===xe){var oe=te.revertLane;if(oe===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Lr&&(de=!0);else if((ga&oe)===oe){te=te.next,oe===Lr&&(de=!0);continue}else xe={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(A=B=xe,S=f):B=B.next=xe,ft.lanes|=oe,ba|=oe;xe=te.action,ar&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else oe={lane:xe,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(A=B=oe,S=f):B=B.next=oe,ft.lanes|=xe,ba|=xe;te=te.next}while(te!==null&&te!==n);if(B===null?S=f:B.next=A,!Wn(f,t.memoizedState)&&(gn=!0,de&&(a=Or,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ru(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Wn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Rp(t,n,a){var s=ft,c=rn(),f=wt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((zt||c).memoizedState,a);S&&(c.memoizedState=a,gn=!0),c=c.queue;var A=Dp.bind(null,s,c,t);if(Ys(2048,8,A,[t]),c.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Br(9,dl(),Np.bind(null,s,c,a,n),null),Xt===null)throw Error(r(349));f||(ga&124)!==0||Cp(s,n,a)}return a}function Cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Tu(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Np(t,n,a,s){n.value=a,n.getSnapshot=s,Up(n)&&Lp(t)}function Dp(t,n,a){return a(function(){Up(n)&&Lp(t)})}function Up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Lp(t){var n=Cr(t,2);n!==null&&Jn(n,t,2)}function Cu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),ar){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Op(t,n,a,s){return t.baseState=a,wu(t,zt,typeof s=="function"?s:Gi)}function j_(t,n,a,s,c){if(pl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Pp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var A=a(c,s),B=z.S;B!==null&&B(S,A),Ip(t,n,A)}catch(te){Nu(t,n,te)}finally{z.T=f}}else try{f=a(c,s),Ip(t,n,f)}catch(te){Nu(t,n,te)}}function Ip(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zp(t,n,s)},function(s){return Nu(t,n,s)}):zp(t,n,a)}function zp(t,n,a){n.status="fulfilled",n.value=a,Bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Pp(t,a)))}function Nu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Bp(n),n=n.next;while(n!==s)}t.action=null}function Bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Hp(t,n){if(wt){var a=Xt.formState;if(a!==null){e:{var s=ft;if(wt){if(Zt){t:{for(var c=Zt,f=Mi;c.nodeType!==8;){if(!f){c=null;break t}if(c=pi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=pi(c.nextSibling),s=c.data==="F!";break e}}er(s)}s=!1}s&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=s,a=rm.bind(null,ft,s),s.dispatch=a,s=Cu(!1),f=Pu.bind(null,ft,!1,s.queue),s=In(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=j_.bind(null,ft,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Gp(t){var n=rn();return Vp(n,zt,t)}function Vp(t,n,a){if(n=wu(t,n,Fp)[0],t=fl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qs(n)}catch(S){throw S===Gs?rl:S}else s=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,Br(9,dl(),X_.bind(null,c,a),null)),[s,f,t]}function X_(t,n){t.action=n}function kp(t){var n=rn(),a=zt;if(a!==null)return Vp(n,a,t);rn(),n=n.memoizedState,a=rn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Tu(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function dl(){return{destroy:void 0,resource:void 0}}function jp(){return rn().memoizedState}function hl(t,n,a,s){var c=In();s=s===void 0?null:s,ft.flags|=t,c.memoizedState=Br(1|n,dl(),a,s)}function Ys(t,n,a,s){var c=rn();s=s===void 0?null:s;var f=c.memoizedState.inst;zt!==null&&s!==null&&yu(s,zt.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(ft.flags|=t,c.memoizedState=Br(1|n,f,a,s))}function Xp(t,n){hl(8390656,8,t,n)}function Wp(t,n){Ys(2048,8,t,n)}function qp(t,n){return Ys(4,2,t,n)}function Yp(t,n){return Ys(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Kp(t,n,a){a=a!=null?a.concat([t]):null,Ys(4,4,Zp.bind(null,n,t),a)}function Du(){}function Qp(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&yu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Jp(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&yu(n,s[1]))return s[0];if(s=t(),ar){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[s,n],s}function Uu(t,n,a){return a===void 0||(ga&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=t0(),ft.lanes|=t,ba|=t,a)}function $p(t,n,a,s){return Wn(a,n)?a:Pr.current!==null?(t=Uu(t,a,s),Wn(t,n)||(gn=!0),t):(ga&42)===0?(gn=!0,t.memoizedState=a):(t=t0(),ft.lanes|=t,ba|=t,n)}function em(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var S=z.T,A={};z.T=A,Pu(t,!1,n,a);try{var B=c(),te=z.S;if(te!==null&&te(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=G_(B,s);Zs(t,n,de,Qn(t))}else Zs(t,n,s,Qn(t))}catch(xe){Zs(t,n,{then:function(){},status:"rejected",reason:xe},Qn())}finally{K.p=f,z.T=S}}function W_(){}function Lu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=tm(t).queue;em(t,c,n,Y,a===null?W_:function(){return nm(t),a(s)})}function tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function nm(t){var n=tm(t).next.queue;Zs(t,n,{},Qn())}function Ou(){return wn(po)}function im(){return rn().memoizedState}function am(){return rn().memoizedState}function q_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=pa(a);var s=ma(n,t,a);s!==null&&(Jn(s,n,a),ks(s,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function Y_(t,n,a){var s=Qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(t)?sm(n,a):(a=eu(t,n,a,s),a!==null&&(Jn(a,t,s),om(a,n,s)))}function rm(t,n,a){var s=Qn();Zs(t,n,a,s)}function Zs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(t))sm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Wn(A,S))return Qo(t,n,c,0),Xt===null&&Ko(),!1}catch{}finally{}if(a=eu(t,n,c,s),a!==null)return Jn(a,t,s),om(a,n,s),!0}return!1}function Pu(t,n,a,s){if(s={lane:2,revertLane:pf(),action:s,hasEagerState:!1,eagerState:null,next:null},pl(t)){if(n)throw Error(r(479))}else n=eu(t,a,s,2),n!==null&&Jn(n,t,2)}function pl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function sm(t,n){Ir=ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function om(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Fe(t,a)}}var ml={readContext:wn,use:ul,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},lm={readContext:wn,use:ul,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hl(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hl(4194308,4,t,n)},useInsertionEffect:function(t,n){hl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var s=t();if(ar){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=In();if(a!==void 0){var c=a(n);if(ar){fe(!0);try{a(n)}finally{fe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Y_.bind(null,ft,t),[s.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Cu(t);var n=t.queue,a=rm.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(t,n){var a=In();return Uu(a,t,n)},useTransition:function(){var t=Cu(!1);return t=em.bind(null,ft,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ft,c=In();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(St&124)!==0||Cp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Xp(Dp.bind(null,s,f,t),[t]),s.flags|=2048,Br(9,dl(),Np.bind(null,s,f,a,n),null),a},useId:function(){var t=In(),n=Xt.identifierPrefix;if(wt){var a=Bi,s=zi;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=cl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=V_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Hp,useActionState:Hp,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return In().memoizedState=q_.bind(null,ft)}},cm={readContext:wn,use:ul,useCallback:Qp,useContext:wn,useEffect:Wp,useImperativeHandle:Kp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Jp,useReducer:fl,useRef:jp,useState:function(){return fl(Gi)},useDebugValue:Du,useDeferredValue:function(t,n){var a=rn();return $p(a,zt.memoizedState,t,n)},useTransition:function(){var t=fl(Gi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:qs(t),n]},useSyncExternalStore:Rp,useId:im,useHostTransitionStatus:Ou,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=rn();return Op(a,zt,t,n)},useMemoCache:Au,useCacheRefresh:am},Z_={readContext:wn,use:ul,useCallback:Qp,useContext:wn,useEffect:Wp,useImperativeHandle:Kp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Jp,useReducer:Ru,useRef:jp,useState:function(){return Ru(Gi)},useDebugValue:Du,useDeferredValue:function(t,n){var a=rn();return zt===null?Uu(a,t,n):$p(a,zt.memoizedState,t,n)},useTransition:function(){var t=Ru(Gi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:qs(t),n]},useSyncExternalStore:Rp,useId:im,useHostTransitionStatus:Ou,useFormState:kp,useActionState:kp,useOptimistic:function(t,n){var a=rn();return zt!==null?Op(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:am},Fr=null,Ks=0;function gl(t){var n=Ks;return Ks+=1,Fr===null&&(Fr=[]),yp(Fr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function um(t){var n=t._init;return n(t._payload)}function fm(t){function n(Z,X){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function s(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function c(Z,X){return Z=Ii(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=67108866,X):ee):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,ee,ve){return X===null||X.tag!==6?(X=nu(ee,Z.mode,ve),X.return=Z,X):(X=c(X,ee),X.return=Z,X)}function B(Z,X,ee,ve){var He=ee.type;return He===E?de(Z,X,ee.props.children,ve,ee.key):X!==null&&(X.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===V&&um(He)===X.type)?(X=c(X,ee.props),Qs(X,ee),X.return=Z,X):(X=$o(ee.type,ee.key,ee.props,null,Z.mode,ve),Qs(X,ee),X.return=Z,X)}function te(Z,X,ee,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=iu(ee,Z.mode,ve),X.return=Z,X):(X=c(X,ee.children||[]),X.return=Z,X)}function de(Z,X,ee,ve,He){return X===null||X.tag!==7?(X=Ka(ee,Z.mode,ve,He),X.return=Z,X):(X=c(X,ee),X.return=Z,X)}function xe(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=nu(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return ee=$o(X.type,X.key,X.props,null,Z.mode,ee),Qs(ee,X),ee.return=Z,ee;case M:return X=iu(X,Z.mode,ee),X.return=Z,X;case V:var ve=X._init;return X=ve(X._payload),xe(Z,X,ee)}if(ie(X)||q(X))return X=Ka(X,Z.mode,ee,null),X.return=Z,X;if(typeof X.then=="function")return xe(Z,gl(X),ee);if(X.$$typeof===U)return xe(Z,il(Z,X),ee);vl(Z,X)}return null}function oe(Z,X,ee,ve){var He=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return He!==null?null:A(Z,X,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case _:return ee.key===He?B(Z,X,ee,ve):null;case M:return ee.key===He?te(Z,X,ee,ve):null;case V:return He=ee._init,ee=He(ee._payload),oe(Z,X,ee,ve)}if(ie(ee)||q(ee))return He!==null?null:de(Z,X,ee,ve,null);if(typeof ee.then=="function")return oe(Z,X,gl(ee),ve);if(ee.$$typeof===U)return oe(Z,X,il(Z,ee),ve);vl(Z,ee)}return null}function le(Z,X,ee,ve,He){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(ee)||null,A(X,Z,""+ve,He);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case _:return Z=Z.get(ve.key===null?ee:ve.key)||null,B(X,Z,ve,He);case M:return Z=Z.get(ve.key===null?ee:ve.key)||null,te(X,Z,ve,He);case V:var ht=ve._init;return ve=ht(ve._payload),le(Z,X,ee,ve,He)}if(ie(ve)||q(ve))return Z=Z.get(ee)||null,de(X,Z,ve,He,null);if(typeof ve.then=="function")return le(Z,X,ee,gl(ve),He);if(ve.$$typeof===U)return le(Z,X,ee,il(X,ve),He);vl(X,ve)}return null}function nt(Z,X,ee,ve){for(var He=null,ht=null,We=X,et=X=0,_n=null;We!==null&&et<ee.length;et++){We.index>et?(_n=We,We=null):_n=We.sibling;var Et=oe(Z,We,ee[et],ve);if(Et===null){We===null&&(We=_n);break}t&&We&&Et.alternate===null&&n(Z,We),X=f(Et,X,et),ht===null?He=Et:ht.sibling=Et,ht=Et,We=_n}if(et===ee.length)return a(Z,We),wt&&Ja(Z,et),He;if(We===null){for(;et<ee.length;et++)We=xe(Z,ee[et],ve),We!==null&&(X=f(We,X,et),ht===null?He=We:ht.sibling=We,ht=We);return wt&&Ja(Z,et),He}for(We=s(We);et<ee.length;et++)_n=le(We,Z,et,ee[et],ve),_n!==null&&(t&&_n.alternate!==null&&We.delete(_n.key===null?et:_n.key),X=f(_n,X,et),ht===null?He=_n:ht.sibling=_n,ht=_n);return t&&We.forEach(function(Ua){return n(Z,Ua)}),wt&&Ja(Z,et),He}function $e(Z,X,ee,ve){if(ee==null)throw Error(r(151));for(var He=null,ht=null,We=X,et=X=0,_n=null,Et=ee.next();We!==null&&!Et.done;et++,Et=ee.next()){We.index>et?(_n=We,We=null):_n=We.sibling;var Ua=oe(Z,We,Et.value,ve);if(Ua===null){We===null&&(We=_n);break}t&&We&&Ua.alternate===null&&n(Z,We),X=f(Ua,X,et),ht===null?He=Ua:ht.sibling=Ua,ht=Ua,We=_n}if(Et.done)return a(Z,We),wt&&Ja(Z,et),He;if(We===null){for(;!Et.done;et++,Et=ee.next())Et=xe(Z,Et.value,ve),Et!==null&&(X=f(Et,X,et),ht===null?He=Et:ht.sibling=Et,ht=Et);return wt&&Ja(Z,et),He}for(We=s(We);!Et.done;et++,Et=ee.next())Et=le(We,Z,et,Et.value,ve),Et!==null&&(t&&Et.alternate!==null&&We.delete(Et.key===null?et:Et.key),X=f(Et,X,et),ht===null?He=Et:ht.sibling=Et,ht=Et);return t&&We.forEach(function(Kx){return n(Z,Kx)}),wt&&Ja(Z,et),He}function Ft(Z,X,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case _:e:{for(var He=ee.key;X!==null;){if(X.key===He){if(He=ee.type,He===E){if(X.tag===7){a(Z,X.sibling),ve=c(X,ee.props.children),ve.return=Z,Z=ve;break e}}else if(X.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===V&&um(He)===X.type){a(Z,X.sibling),ve=c(X,ee.props),Qs(ve,ee),ve.return=Z,Z=ve;break e}a(Z,X);break}else n(Z,X);X=X.sibling}ee.type===E?(ve=Ka(ee.props.children,Z.mode,ve,ee.key),ve.return=Z,Z=ve):(ve=$o(ee.type,ee.key,ee.props,null,Z.mode,ve),Qs(ve,ee),ve.return=Z,Z=ve)}return S(Z);case M:e:{for(He=ee.key;X!==null;){if(X.key===He)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(Z,X.sibling),ve=c(X,ee.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}ve=iu(ee,Z.mode,ve),ve.return=Z,Z=ve}return S(Z);case V:return He=ee._init,ee=He(ee._payload),Ft(Z,X,ee,ve)}if(ie(ee))return nt(Z,X,ee,ve);if(q(ee)){if(He=q(ee),typeof He!="function")throw Error(r(150));return ee=He.call(ee),$e(Z,X,ee,ve)}if(typeof ee.then=="function")return Ft(Z,X,gl(ee),ve);if(ee.$$typeof===U)return Ft(Z,X,il(Z,ee),ve);vl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(Z,X.sibling),ve=c(X,ee),ve.return=Z,Z=ve):(a(Z,X),ve=nu(ee,Z.mode,ve),ve.return=Z,Z=ve),S(Z)):a(Z,X)}return function(Z,X,ee,ve){try{Ks=0;var He=Ft(Z,X,ee,ve);return Fr=null,He}catch(We){if(We===Gs||We===rl)throw We;var ht=qn(29,We,null,Z.mode);return ht.lanes=ve,ht.return=Z,ht}finally{}}}var Hr=fm(!0),dm=fm(!1),oi=ne(null),bi=null;function va(t){var n=t.alternate;Se(un,un.current&1),Se(oi,t),bi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(bi=t)}function hm(t){if(t.tag===22){if(Se(un,un.current),Se(oi,t),bi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(bi=t)}}else _a()}function _a(){Se(un,un.current),Se(oi,oi.current)}function Vi(t){pe(oi),bi===t&&(bi=null),pe(un)}var un=ne(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Af(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=pa(s);c.payload=n,a!=null&&(c.callback=a),n=ma(t,c,s),n!==null&&(Jn(n,t,s),ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=pa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(t,c,s),n!==null&&(Jn(n,t,s),ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=pa(a);s.tag=2,n!=null&&(s.callback=n),n=ma(t,s,a),n!==null&&(Jn(n,t,a),ks(n,t,a))}};function pm(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(c,f):!0}function mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&zu.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gm(t){xl(t)}function vm(t){console.error(t)}function _m(t){xl(t)}function yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(t,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,n)},a}function ym(t){return t=pa(t),t.tag=3,t}function Sm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){xm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){xm(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function K_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=oi.current,a!==null){switch(a.tag){case 13:return bi===null?cf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ff(t,s,c)),!1;case 22:return a.flags|=65536,s===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ff(t,s,c)),!1}throw Error(r(435,a.tag))}return ff(t,s,c),cf(),!1}if(wt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==su&&(t=Error(r(422),{cause:s}),zs(ii(t,a)))):(s!==su&&(n=Error(r(423),{cause:s}),zs(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Bu(t.stateNode,s,c),gu(t,c),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),ao===null?ao=[f]:ao.push(f),Kt!==4&&(Kt=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Bu(a.stateNode,s,t),gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ym(c),Sm(c,t,a,s),gu(a,c),!1}a=a.return}while(a!==null);return!1}var Mm=Error(r(461)),gn=!1;function bn(t,n,a,s){n.child=t===null?dm(n,null,a,s):Hr(n,t.child,a,s)}function bm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return nr(n),s=Su(t,n,a,S,f,c),A=Mu(),t!==null&&!gn?(bu(t,n,c),ki(t,n,c)):(wt&&A&&au(n),n.flags|=1,bn(t,n,s,c),n.child)}function Em(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tm(t,n,f,s,c)):(t=$o(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Wu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(S,s)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Ii(f,s),t.ref=n.ref,t.return=n,n.child=t}function Tm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ls(f,s)&&t.ref===n.ref)if(gn=!1,n.pendingProps=s=f,Wu(t,c))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Fu(t,n,a,s,c)}function Am(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return wm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Tp(n,f):_u(),hm(n);else return n.lanes=n.childLanes=536870912,wm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(al(n,f.cachePool),Tp(n,f),_a(),n.memoizedState=null):(t!==null&&al(n,null),_u(),_a());return bn(t,n,c,a),n.child}function wm(t,n,a,s){var c=du();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),_u(),hm(n),t!==null&&Bs(t,n,s,!0),null}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Fu(t,n,a,s,c){return nr(n),a=Su(t,n,a,s,void 0,c),s=Mu(),t!==null&&!gn?(bu(t,n,c),ki(t,n,c)):(wt&&s&&au(n),n.flags|=1,bn(t,n,a,c),n.child)}function Rm(t,n,a,s,c,f){return nr(n),n.updateQueue=null,a=wp(n,s,a,c),Ap(t),s=Mu(),t!==null&&!gn?(bu(t,n,f),ki(t,n,f)):(wt&&s&&au(n),n.flags|=1,bn(t,n,a,f),n.child)}function Cm(t,n,a,s,c){if(nr(n),n.stateNode===null){var f=Nr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Nr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Iu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&zu.enqueueReplaceState(f,f.state,null),Xs(n,s,f,c),js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=rr(a,A);f.props=B;var te=f.context,de=a.contextType;S=Nr,typeof de=="object"&&de!==null&&(S=wn(de));var xe=a.getDerivedStateFromProps;de=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==S)&&mm(n,f,s,S),ha=!1;var oe=n.memoizedState;f.state=oe,Xs(n,s,f,c),js(),te=n.memoizedState,A||oe!==te||ha?(typeof xe=="function"&&(Iu(n,a,xe,s),te=n.memoizedState),(B=ha||pm(n,a,B,s,oe,te,S))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,mu(t,n),S=n.memoizedProps,de=rr(a,S),f.props=de,xe=n.pendingProps,oe=f.context,te=a.contextType,B=Nr,typeof te=="object"&&te!==null&&(B=wn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xe||oe!==B)&&mm(n,f,s,B),ha=!1,oe=n.memoizedState,f.state=oe,Xs(n,s,f,c),js();var le=n.memoizedState;S!==xe||oe!==le||ha||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof A=="function"&&(Iu(n,a,A,s),le=n.memoizedState),(de=ha||pm(n,a,de,s,oe,le,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=B,s=de):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Hr(n,t.child,null,c),n.child=Hr(n,null,a,c)):bn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function Nm(t,n,a,s){return Is(),n.flags|=256,bn(t,n,a,s),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(t){return{baseLanes:t,cachePool:vp()}}function Vu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function Dm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(c?va(n):_a(),wt){var A=Zt,B;if(B=A){e:{for(B=A,A=Mi;B.nodeType!==8;){if(!A){A=null;break e}if(B=pi(B.nextSibling),B===null){A=null;break e}}A=B}A!==null?(n.memoizedState={dehydrated:A,treeContext:Qa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},B=qn(18,null,null,0),B.stateNode=A,B.return=n,n.child=B,Un=n,Zt=null,B=!0):B=!1}B||er(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Af(A)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return A=s.children,s=s.fallback,c?(_a(),c=n.mode,A=Ml({mode:"hidden",children:A},c),s=Ka(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=Gu(a),c.childLanes=Vu(t,S,a),n.memoizedState=Hu,s):(va(n),ku(n,A))}if(B=t.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=ju(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),c=s.fallback,A=n.mode,s=Ml({mode:"visible",children:s.children},A),c=Ka(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Hr(n,t.child,null,a),s=n.child,s.memoizedState=Gu(a),s.childLanes=Vu(t,S,a),n.memoizedState=Hu,n=c);else if(va(n),Af(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var te=S.dgst;S=te,s=Error(r(419)),s.stack="",s.digest=S,zs({value:s,source:null,stack:null}),n=ju(t,n,a)}else if(gn||Bs(t,n,a,!1),S=(a&t.childLanes)!==0,gn||S){if(S=Xt,S!==null&&(s=a&-a,s=(s&42)!==0?1:it(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==B.retryLane))throw B.retryLane=s,Cr(t,s),Jn(S,t,s),Mm;A.data==="$?"||cf(),n=ju(t,n,a)}else A.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Zt=pi(A.nextSibling),Un=n,wt=!0,$a=null,Mi=!1,t!==null&&(ri[si++]=zi,ri[si++]=Bi,ri[si++]=Qa,zi=t.id,Bi=t.overflow,Qa=n),n=ku(n,s.children),n.flags|=4096);return n}return c?(_a(),c=s.fallback,A=n.mode,B=t.child,te=B.sibling,s=Ii(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,te!==null?c=Ii(te,c):(c=Ka(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=t.child.memoizedState,A===null?A=Gu(a):(B=A.cachePool,B!==null?(te=cn._currentValue,B=B.parent!==te?{parent:te,pool:te}:B):B=vp(),A={baseLanes:A.baseLanes|a,cachePool:B}),c.memoizedState=A,c.childLanes=Vu(t,S,a),n.memoizedState=Hu,s):(va(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function ku(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=qn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ju(t,n,a){return Hr(n,t.child,null,a),t=ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Um(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),lu(t.return,n,a)}function Xu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Lm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(bn(t,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,a,n);else if(t.tag===19)Um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Se(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Xu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Xu(n,!0,a,null,f);break;case"together":Xu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function Q_(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),da(n,cn,t.memoizedState.cache),Is();break;case 27:case 5:Je(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dm(t,n,a):(va(n),t=ki(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Bs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Lm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,Am(t,n,a);case 24:da(n,cn,t.memoizedState.cache)}return ki(t,n,a)}function Om(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!Wu(t,a)&&(n.flags&128)===0)return gn=!1,Q_(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,wt&&(n.flags&1048576)!==0&&up(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")tu(s)?(t=rr(s,t),n.tag=1,n=Cm(null,n,s,t,a)):(n.tag=0,n=Fu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===C){n.tag=11,n=bm(null,n,s,t,a);break e}else if(c===P){n.tag=14,n=Em(null,n,s,t,a);break e}}throw n=ae(s)||s,Error(r(306,n,""))}}return n;case 0:return Fu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),Cm(t,n,s,c,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),Xs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,da(n,cn,s),s!==f.cache&&cu(n,[cn],a,!0),js(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(t,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),zs(c),n=Nm(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=pi(t.firstChild),Un=n,wt=!0,$a=null,Mi=!0,a=dm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Is(),s===c){n=ki(t,n,a);break e}bn(t,n,s,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=B0(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,s=Il(be.current).createElement(a),s[on]=n,s[Sn]=t,Tn(s,a,t),nn(s),n.stateNode=s):n.memoizedState=B0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Je(n),t===null&&wt&&(s=n.stateNode=P0(n.type,n.pendingProps,be.current),Un=n,Mi=!0,c=Zt,wa(n.type)?(wf=c,Zt=pi(s.firstChild)):Zt=c),bn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((c=s=Zt)&&(s=Tx(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Un=n,Zt=pi(s.firstChild),Mi=!1,c=!0):c=!1),c||er(n)),Je(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,bf(c,f)?s=null:S!==null&&bf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Su(t,n,k_,null,null,a),po._currentValue=c),Sl(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&wt&&((t=a=Zt)&&(a=Ax(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,Zt=null,t=!0):t=!1),t||er(n)),null;case 13:return Dm(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Hr(n,null,s,a):bn(t,n,s,a),n.child;case 11:return bm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=wn(c),s=s(c),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Em(t,n,n.type,n.pendingProps,a);case 15:return Tm(t,n,n.type,n.pendingProps,a);case 19:return Lm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Ml(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Am(t,n,a);case 24:return nr(n),s=wn(cn),t===null?(c=du(),c===null&&(c=Xt,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},pu(n),da(n,cn,c)):((t.lanes&a)!==0&&(mu(t,n),Xs(n,null,null,a),js()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,cn,s)):(s=f.cache,da(n,cn,s),s!==c.cache&&cu(n,[cn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function Pm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k0(n)){if(n=oi.current,n!==null&&((St&4194048)===St?bi!==null:(St&62914560)!==St&&(St&536870912)===0||n!==bi))throw Vs=hu,_p;t.flags|=8192}}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ue():536870912,t.lanes|=n,jr|=n)}function Js(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function J_(t,n,a){var s=n.pendingProps;switch(ru(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(cn),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hp())),Yt(n),null;case 26:return a=n.memoizedState,t===null?(ji(n),a!==null?(Yt(n),Pm(n,a)):(Yt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ji(n),Yt(n),Pm(n,a)):(Yt(n),n.flags&=-16777217):(t.memoizedProps!==s&&ji(n),Yt(n),n.flags&=-16777217),null;case 27:Pt(n),a=be.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=$.current,Ps(n)?fp(n):(t=P0(c,s,a),n.stateNode=t,ji(n))}return Yt(n),null;case 5:if(Pt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(t=$.current,Ps(n))fp(n);else{switch(c=Il(be.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[on]=n,t[Sn]=s;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return Yt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=be.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Un,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||R0(t.nodeValue,a)),t||er(n)}else t=Il(t).createTextNode(s),t[on]=n,n.stateNode=t}return Yt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=hp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),Yt(n),null;case 4:return lt(),t===null&&_f(n.stateNode.containerInfo),Yt(n),null;case 10:return Hi(n.type),Yt(n),null;case 19:if(pe(un),c=n.memoizedState,c===null)return Yt(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Js(c,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,Js(c,!1),t=f.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)cp(a,t),a=a.sibling;return Se(un,un.current&1|2),n.child}t=t.sibling}c.tail!==null&&pt()>Al&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304)}else{if(!s)if(t=_l(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),Js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!wt)return Yt(n),null}else 2*pt()-c.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=pt(),n.sibling=null,t=un.current,Se(un,s?t&1|2:t&1),n):(Yt(n),null);case 22:case 23:return Vi(n),xu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&pe(ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(cn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function $_(t,n){switch(ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(cn),lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Pt(n),null;case 13:if(Vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pe(un),null;case 4:return lt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),xu(),t!==null&&pe(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(cn),null;case 25:return null;default:return null}}function Im(t,n){switch(ru(n),n.tag){case 3:Hi(cn),lt();break;case 26:case 27:case 5:Pt(n);break;case 4:lt();break;case 13:Vi(n);break;case 19:pe(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),xu(),t!==null&&pe(ir);break;case 24:Hi(cn)}}function $s(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(A){kt(n,n.return,A)}}function xa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var B=a,te=A;try{te()}catch(de){kt(c,B,de)}}}s=s.next}while(s!==f)}}catch(de){kt(n,n.return,de)}}function zm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ep(n,a)}catch(s){kt(t,t.return,s)}}}function Bm(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){kt(t,n,s)}}function eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){kt(t,n,c)}}function Ei(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){kt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){kt(t,n,c)}else a.current=null}function Fm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){kt(t,t.return,c)}}function qu(t,n,a){try{var s=t.stateNode;yx(s,t.type,a,n),s[Sn]=n}catch(c){kt(t,t.return,c)}}function Hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function Yu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pl));else if(s!==4&&(s===27&&wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Zu(t,n,a),t=t.sibling;t!==null;)Zu(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Gm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[on]=t,n[Sn]=a}catch(f){kt(t,t.return,f)}}var Xi=!1,$t=!1,Ku=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function ex(t,n){if(t=t.containerInfo,Sf=Vl,t=$h(t),Yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,B=-1,te=0,de=0,xe=t,oe=null;t:for(;;){for(var le;xe!==a||c!==0&&xe.nodeType!==3||(A=S+c),xe!==f||s!==0&&xe.nodeType!==3||(B=S+s),xe.nodeType===3&&(S+=xe.nodeValue.length),(le=xe.firstChild)!==null;)oe=xe,xe=le;for(;;){if(xe===t)break t;if(oe===a&&++te===c&&(A=S),oe===f&&++de===s&&(B=S),(le=xe.nextSibling)!==null)break;xe=oe,oe=xe.parentNode}xe=le}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:t,selectionRange:a},Vl=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var nt=rr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(nt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($e){kt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function km(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ya(t,a),s&4&&$s(5,a);break;case 1:if(ya(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){kt(a,a.return,S)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){kt(a,a.return,S)}}s&64&&zm(a),s&512&&eo(a,a.return);break;case 3:if(ya(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(t,n)}catch(S){kt(a,a.return,S)}}break;case 27:n===null&&s&4&&Gm(a);case 26:case 5:ya(t,a),n===null&&s&4&&Fm(a),s&512&&eo(a,a.return);break;case 12:ya(t,a);break;case 13:ya(t,a),s&4&&Wm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cx.bind(null,a),wx(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||$t,c=Xi;var f=$t;Xi=s,($t=n)&&!f?Sa(t,a,(a.subtreeFlags&8772)!==0):ya(t,a),Xi=c,$t=f}break;case 30:break;default:ya(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&la(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,zn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Xm(t,n,a),a=a.sibling}function Xm(t,n,a){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:$t||Ei(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||Ei(a,n);var s=qt,c=zn;wa(a.type)&&(qt=a.stateNode,zn=!1),Wi(t,n,a),co(a.stateNode),qt=s,zn=c;break;case 5:$t||Ei(a,n);case 6:if(s=qt,c=zn,qt=null,Wi(t,n,a),qt=s,zn=c,qt!==null)if(zn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{qt.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:qt!==null&&(zn?(t=qt,L0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_o(t)):L0(qt,a.stateNode));break;case 4:s=qt,c=zn,qt=a.stateNode.containerInfo,zn=!0,Wi(t,n,a),qt=s,zn=c;break;case 0:case 11:case 14:case 15:$t||xa(2,a,n),$t||xa(4,a,n),Wi(t,n,a);break;case 1:$t||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bm(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:$t=(s=$t)||a.memoizedState!==null,Wi(t,n,a),$t=s;break;default:Wi(t,n,a)}}function Wm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_o(t)}catch(a){kt(n,n.return,a)}}function tx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vm),n;default:throw Error(r(435,t.tag))}}function Qu(t,n){var a=tx(t);n.forEach(function(s){var c=ux.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(wa(A.type)){qt=A.stateNode,zn=!1;break e}break;case 5:qt=A.stateNode,zn=!1;break e;case 3:case 4:qt=A.stateNode.containerInfo,zn=!0;break e}A=A.return}if(qt===null)throw Error(r(160));Xm(f,S,c),qt=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)qm(n,t),n=n.sibling}var hi=null;function qm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),s&4&&(xa(3,t,t.return),$s(3,t),xa(5,t,t.return));break;case 1:Yn(n,t),Zn(t),s&512&&($t||a===null||Ei(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(Yn(n,t),Zn(t),s&512&&($t||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[oa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[on]=t,nn(f),s=f;break e;case"link":var S=G0("link","href",c).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=G0("meta","content",c).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,nn(f),s=f}t.stateNode=s}else V0(c,t.type,t.stateNode);else t.stateNode=H0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?V0(c,t.type,t.stateNode):H0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),s&512&&($t||a===null||Ei(a,a.return)),a!==null&&s&4&&qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),s&512&&($t||a===null||Ei(a,a.return)),t.flags&32){c=t.stateNode;try{Si(c,"")}catch(le){kt(t,t.return,le)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,qu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Ku=!0);break;case 6:if(Yn(n,t),Zn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(le){kt(t,t.return,le)}}break;case 3:if(Fl=null,c=hi,hi=zl(n.containerInfo),Yn(n,t),hi=c,Zn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(le){kt(t,t.return,le)}Ku&&(Ku=!1,Ym(t));break;case 4:s=hi,hi=zl(t.stateNode.containerInfo),Yn(n,t),Zn(t),hi=s;break;case 12:Yn(n,t),Zn(t);break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(af=pt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Qu(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,te=Xi,de=$t;if(Xi=te||c,$t=de||B,Yn(n,t),$t=de,Xi=te,Zn(t),s&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Xi||$t||sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var xe=B.memoizedProps.style,oe=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(le){kt(B,B.return,le)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(le){kt(B,B.return,le)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Qu(t,a))));break;case 19:Yn(n,t),Zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Qu(t,s)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Hm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Yu(t);El(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Si(S,""),a.flags&=-33);var A=Yu(t);El(t,A,S);break;case 3:case 4:var B=a.stateNode.containerInfo,te=Yu(t);Zu(t,te,B);break;default:throw Error(r(161))}}catch(de){kt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ym(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ya(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(t,n.alternate,n),n=n.sibling}function sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),sr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),sr(n);break;case 27:co(n.stateNode);case 26:case 5:Ei(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),$s(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(te){kt(s,s.return,te)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)bp(B[c],A)}catch(te){kt(s,s.return,te)}}a&&S&64&&zm(f),eo(f,f.return);break;case 27:Gm(f);case 26:case 5:Sa(c,f,a),a&&s===null&&S&4&&Fm(f),eo(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&Wm(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),eo(f,f.return);break;case 30:break;default:Sa(c,f,a)}n=n.sibling}}function Ju(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fs(a))}function $u(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t))}function Ti(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(t,n,a,s),n=n.sibling}function Zm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,s),c&2048&&$s(9,n);break;case 1:Ti(t,n,a,s);break;case 3:Ti(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t)));break;case 12:if(c&2048){Ti(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){kt(n,n.return,B)}}else Ti(t,n,a,s);break;case 13:Ti(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,s):to(t,n):f._visibility&2?Ti(t,n,a,s):(f._visibility|=2,Gr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Ju(S,n);break;case 24:Ti(t,n,a,s),c&2048&&$u(n.alternate,n);break;default:Ti(t,n,a,s)}}function Gr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,A=a,B=s,te=S.flags;switch(S.tag){case 0:case 11:case 15:Gr(f,S,A,B,c),$s(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?Gr(f,S,A,B,c):to(f,S):(de._visibility|=2,Gr(f,S,A,B,c)),c&&te&2048&&Ju(S.alternate,S);break;case 24:Gr(f,S,A,B,c),c&&te&2048&&$u(S.alternate,S);break;default:Gr(f,S,A,B,c)}n=n.sibling}}function to(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:to(a,s),c&2048&&Ju(s.alternate,s);break;case 24:to(a,s),c&2048&&$u(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var no=8192;function Vr(t){if(t.subtreeFlags&no)for(t=t.child;t!==null;)Km(t),t=t.sibling}function Km(t){switch(t.tag){case 26:Vr(t),t.flags&no&&t.memoizedState!==null&&Hx(hi,t.memoizedState,t.memoizedProps);break;case 5:Vr(t);break;case 3:case 4:var n=hi;hi=zl(t.stateNode.containerInfo),Vr(t),hi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,Vr(t),no=n):Vr(t));break;default:Vr(t)}}function Qm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,$m(s,t)}Qm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jm(t),t=t.sibling}function Jm(t){switch(t.tag){case 0:case 11:case 15:io(t),t.flags&2048&&xa(9,t,t.return);break;case 3:io(t);break;case 12:io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tl(t)):io(t);break;default:io(t)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,$m(s,t)}Qm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}t=t.sibling}}function $m(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else e:for(a=t;vn!==null;){s=vn;var c=s.sibling,f=s.return;if(jm(s),s===a){vn=null;break e}if(c!==null){c.return=f,vn=c;break e}vn=f}}}var nx={getCacheForType:function(t){var n=wn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},ix=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,mt=null,St=0,Ot=0,Kn=null,Ma=!1,kr=!1,ef=!1,qi=0,Kt=0,ba=0,or=0,tf=0,li=0,jr=0,ao=null,Bn=null,nf=!1,af=0,Al=1/0,wl=null,Ea=null,En=0,Ta=null,Xr=null,Wr=0,rf=0,sf=null,e0=null,ro=0,of=null;function Qn(){if((Lt&2)!==0&&St!==0)return St&-St;if(z.T!==null){var t=Lr;return t!==0?t:pf()}return bt()}function t0(){li===0&&(li=(St&536870912)===0||wt?W():536870912);var t=oi.current;return t!==null&&(t.flags|=32),li}function Jn(t,n,a){(t===Xt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(qr(t,0),Aa(t,St,li,!1)),ze(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(or|=a),Kt===4&&Aa(t,St,li,!1)),Ai(t))}function n0(t,n,a){if((Lt&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Re(t,n),c=s?sx(t,n):uf(t,n,!0),f=s;do{if(c===0){kr&&!s&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ax(a)){c=uf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;c=ao;var B=A.current.memoizedState.isDehydrated;if(B&&(qr(A,S).flags|=256),S=uf(A,S,!1),S!==2){if(ef&&!B){A.errorRecoveryDisabledLanes|=f,or|=f,c=4;break e}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){qr(t,0),Aa(t,n,0,!0);break}e:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,li,!Ma);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=af+300-pt(),10<c)){if(Aa(s,n,li,!Ma),Ye(s,0,!0)!==0)break e;s.timeoutHandle=D0(i0.bind(null,s,a,Bn,wl,nf,n,li,or,jr,Ma,f,2,-0,0),c);break e}i0(s,a,Bn,wl,nf,n,li,or,jr,Ma,f,0,-0,0)}}break}while(!0);Ai(t)}function i0(t,n,a,s,c,f,S,A,B,te,de,xe,oe,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:Fx},Km(n),xe=Gx(),xe!==null)){t.cancelPendingCommit=xe(u0.bind(null,t,n,f,a,s,c,S,A,B,de,1,oe,le)),Aa(t,f,S,!te);return}u0(t,n,f,a,s,c,S,A,B)}function ax(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,s){n&=~tf,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&ye(t,a,n)}function Rl(){return(Lt&6)===0?(so(0),!1):!0}function lf(){if(mt!==null){if(Ot===0)var t=mt.return;else t=mt,Fi=tr=null,Eu(t),Fr=null,Ks=0,t=mt;for(;t!==null;)Im(t.alternate,t),t=t.return;mt=null}}function qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Mx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),lf(),Xt=t,mt=a=Ii(t.current,null),St=n,Ot=0,Kn=null,Ma=!1,kr=Re(t,n),ef=!1,jr=li=tf=or=ba=Kt=0,Bn=ao=null,nf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pe(s),f=1<<c;n|=t[c],s&=~f}return qi=n,Ko(),a}function a0(t,n){ft=null,z.H=ml,n===Gs||n===rl?(n=Sp(),Ot=3):n===_p?(n=Sp(),Ot=4):Ot=n===Mm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,mt===null&&(Kt=1,yl(t,ii(n,t.current)))}function r0(){var t=z.H;return z.H=ml,t===null?ml:t}function s0(){var t=z.A;return z.A=nx,t}function cf(){Kt=4,Ma||(St&4194048)!==St&&oi.current!==null||(kr=!0),(ba&134217727)===0&&(or&134217727)===0||Xt===null||Aa(Xt,St,li,!1)}function uf(t,n,a){var s=Lt;Lt|=2;var c=r0(),f=s0();(Xt!==t||St!==n)&&(wl=null,qr(t,n)),n=!1;var S=Kt;e:do try{if(Ot!==0&&mt!==null){var A=mt,B=Kn;switch(Ot){case 8:lf(),S=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var te=Ot;if(Ot=0,Kn=null,Yr(t,A,B,te),a&&kr){S=0;break e}break;default:te=Ot,Ot=0,Kn=null,Yr(t,A,B,te)}}rx(),S=Kt;break}catch(de){a0(t,de)}while(!0);return n&&t.shellSuspendCounter++,Fi=tr=null,Lt=s,z.H=c,z.A=f,mt===null&&(Xt=null,St=0,Ko()),S}function rx(){for(;mt!==null;)o0(mt)}function sx(t,n){var a=Lt;Lt|=2;var s=r0(),c=s0();Xt!==t||St!==n?(wl=null,Al=pt()+500,qr(t,n)):kr=Re(t,n);e:do try{if(Ot!==0&&mt!==null){n=mt;var f=Kn;t:switch(Ot){case 1:Ot=0,Kn=null,Yr(t,n,f,1);break;case 2:case 9:if(xp(f)){Ot=0,Kn=null,l0(n);break}n=function(){Ot!==2&&Ot!==9||Xt!==t||(Ot=7),Ai(t)},f.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:xp(f)?(Ot=0,Kn=null,l0(n)):(Ot=0,Kn=null,Yr(t,n,f,7));break;case 5:var S=null;switch(mt.tag){case 26:S=mt.memoizedState;case 5:case 27:var A=mt;if(!S||k0(S)){Ot=0,Kn=null;var B=A.sibling;if(B!==null)mt=B;else{var te=A.return;te!==null?(mt=te,Cl(te)):mt=null}break t}}Ot=0,Kn=null,Yr(t,n,f,5);break;case 6:Ot=0,Kn=null,Yr(t,n,f,6);break;case 8:lf(),Kt=6;break e;default:throw Error(r(462))}}ox();break}catch(de){a0(t,de)}while(!0);return Fi=tr=null,z.H=s,z.A=c,Lt=a,mt!==null?0:(Xt=null,St=0,Ko(),Kt)}function ox(){for(;mt!==null&&!yn();)o0(mt)}function o0(t){var n=Om(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Cl(t):mt=n}function l0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Rm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Eu(n);default:Im(a,n),n=mt=cp(n,qi),n=Om(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Cl(t):mt=n}function Yr(t,n,a,s){Fi=tr=null,Eu(n),Fr=null,Ks=0;var c=n.return;try{if(K_(t,c,n,a,St)){Kt=1,yl(t,ii(a,t.current)),mt=null;return}}catch(f){if(c!==null)throw mt=c,f;Kt=1,yl(t,ii(a,t.current)),mt=null;return}n.flags&32768?(wt||s===1?t=!0:kr||(St&536870912)!==0?t=!1:(Ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=oi.current,s!==null&&s.tag===13&&(s.flags|=16384))),c0(n,t)):Cl(n)}function Cl(t){var n=t;do{if((n.flags&32768)!==0){c0(n,Ma);return}t=n.return;var a=J_(n.alternate,n,qi);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);Kt===0&&(Kt=5)}function c0(t,n){do{var a=$_(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);Kt=6,mt=null}function u0(t,n,a,s,c,f,S,A,B){t.cancelPendingCommit=null;do Nl();while(En!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=$c,Ae(t,a,f,S,A,B),t===Xt&&(mt=Xt=null,St=0),Xr=n,Ta=t,Wr=a,rf=f,sf=c,e0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fx(rt,function(){return m0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=K.p,K.p=2,S=Lt,Lt|=4;try{ex(t,n,a)}finally{Lt=S,K.p=c,z.T=s}}En=1,f0(),d0(),h0()}}function f0(){if(En===1){En=0;var t=Ta,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=K.p;K.p=2;var c=Lt;Lt|=4;try{qm(n,t);var f=Mf,S=$h(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Jh(A.ownerDocument.documentElement,A)){if(B!==null&&Yc(A)){var te=B.start,de=B.end;if(de===void 0&&(de=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(de,A.value.length);else{var xe=A.ownerDocument||document,oe=xe&&xe.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),nt=A.textContent.length,$e=Math.min(B.start,nt),Ft=B.end===void 0?$e:Math.min(B.end,nt);!le.extend&&$e>Ft&&(S=Ft,Ft=$e,$e=S);var Z=Qh(A,$e),X=Qh(A,Ft);if(Z&&X&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var ee=xe.createRange();ee.setStart(Z.node,Z.offset),le.removeAllRanges(),$e>Ft?(le.addRange(ee),le.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),le.addRange(ee))}}}}for(xe=[],le=A;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ve=xe[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Vl=!!Sf,Mf=Sf=null}finally{Lt=c,K.p=s,z.T=a}}t.current=n,En=2}}function d0(){if(En===2){En=0;var t=Ta,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=K.p;K.p=2;var c=Lt;Lt|=4;try{km(t,n.alternate,n)}finally{Lt=c,K.p=s,z.T=a}}En=3}}function h0(){if(En===4||En===3){En=0,Mt();var t=Ta,n=Xr,a=Wr,s=e0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Xr=Ta=null,p0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),Ut(a),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var A=s[S];f(A.value,{componentStack:A.stack})}}finally{z.T=n,K.p=c}}(Wr&3)!==0&&Nl(),Ai(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===of?ro++:(ro=0,of=t):ro=0,so(0)}}function p0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Fs(n)))}function Nl(t){return f0(),d0(),h0(),m0()}function m0(){if(En!==5)return!1;var t=Ta,n=rf;rf=0;var a=Ut(Wr),s=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=sf,sf=null;var f=Ta,S=Wr;if(En=0,Xr=Ta=null,Wr=0,(Lt&6)!==0)throw Error(r(331));var A=Lt;if(Lt|=4,Jm(f.current),Zm(f,f.current,S,a),Lt=A,so(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ge,f)}catch{}return!0}finally{K.p=c,z.T=s,p0(t,n)}}function g0(t,n,a){n=ii(a,n),n=Bu(t.stateNode,n,2),t=ma(t,n,2),t!==null&&(ze(t,2),Ai(t))}function kt(t,n,a){if(t.tag===3)g0(t,t,a);else for(;n!==null;){if(n.tag===3){g0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){t=ii(a,t),a=ym(2),s=ma(n,a,2),s!==null&&(Sm(a,s,n,t),ze(s,2),Ai(s));break}}n=n.return}}function ff(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new ix;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ef=!0,c.add(a),t=lx.bind(null,t,n,a),n.then(t,t))}function lx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(St&a)===a&&(Kt===4||Kt===3&&(St&62914560)===St&&300>pt()-af?(Lt&2)===0&&qr(t,0):tf|=a,jr===St&&(jr=0)),Ai(t)}function v0(t,n){n===0&&(n=Ue()),t=Cr(t,n),t!==null&&(ze(t,n),Ai(t))}function cx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),v0(t,a)}function ux(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),v0(t,a)}function fx(t,n){return vt(t,n)}var Dl=null,Zr=null,df=!1,Ul=!1,hf=!1,lr=0;function Ai(t){t!==Zr&&t.next===null&&(Zr===null?Dl=Zr=t:Zr=Zr.next=t),Ul=!0,df||(df=!0,hx())}function so(t,n){if(!hf&&Ul){hf=!0;do for(var a=!1,s=Dl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,S0(s,f))}else f=St,f=Ye(s,s===Xt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,S0(s,f));s=s.next}while(a);hf=!1}}function dx(){_0()}function _0(){Ul=df=!1;var t=0;lr!==0&&(Sx()&&(t=lr),lr=0);for(var n=pt(),a=null,s=Dl;s!==null;){var c=s.next,f=x0(s,n);f===0?(s.next=null,a===null?Dl=c:a.next=c,c===null&&(Zr=a)):(a=s,(t!==0||(f&3)!==0)&&(Ul=!0)),s=c}so(t)}function x0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pe(f),A=1<<S,B=c[S];B===-1?((A&a)===0||(A&s)!==0)&&(c[S]=at(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=Xt,a=St,a=Ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&k(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&k(s),Ut(a)){case 2:case 8:a=Ze;break;case 32:a=rt;break;case 268435456:a=I;break;default:a=rt}return s=y0.bind(null,t),a=vt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&k(s),t.callbackPriority=2,t.callbackNode=null,2}function y0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=St;return s=Ye(t,t===Xt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(n0(t,s,n),x0(t,pt()),t.callbackNode!=null&&t.callbackNode===a?y0.bind(null,t):null)}function S0(t,n){if(Nl())return null;n0(t,n,!0)}function hx(){bx(function(){(Lt&6)!==0?vt(_t,dx):_0()})}function pf(){return lr===0&&(lr=W()),lr}function M0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function b0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function px(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=M0((c[Sn]||null).action),S=s.submitter;S&&(n=(n=S[Sn]||null)?M0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new qo("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var B=S?b0(c,S):new FormData(c);Lu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=S?b0(c,S):new FormData(c),Lu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var mf=0;mf<Jc.length;mf++){var gf=Jc[mf],mx=gf.toLowerCase(),gx=gf[0].toUpperCase()+gf.slice(1);di(mx,"on"+gx)}di(np,"onAnimationEnd"),di(ip,"onAnimationIteration"),di(ap,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(L_,"onTransitionRun"),di(O_,"onTransitionStart"),di(P_,"onTransitionCancel"),di(rp,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function E0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],B=A.instance,te=A.currentTarget;if(A=A.listener,B!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=te;try{f(c)}catch(de){xl(de)}c.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(A=s[S],B=A.instance,te=A.currentTarget,A=A.listener,B!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=te;try{f(c)}catch(de){xl(de)}c.currentTarget=null,f=B}}}}function gt(t,n){var a=n[ja];a===void 0&&(a=n[ja]=new Set);var s=t+"__bubble";a.has(s)||(T0(n,t,2,!1),a.add(s))}function vf(t,n,a){var s=0;n&&(s|=4),T0(a,t,s,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function _f(t){if(!t[Ll]){t[Ll]=!0,Go.forEach(function(a){a!=="selectionchange"&&(vx.has(a)||vf(a,!1,t),vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,vf("selectionchange",!1,n))}}function T0(t,n,a,s){switch(Z0(n)){case 2:var c=jx;break;case 8:c=Xx;break;default:c=Uf}a=c.bind(null,n,a,t),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function xf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ni(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue e}A=A.parentNode}}s=s.return}Uh(function(){var te=f,de=zc(a),xe=[];e:{var oe=sp.get(t);if(oe!==void 0){var le=qo,nt=t;switch(t){case"keypress":if(Xo(a)===0)break e;case"keydown":case"keyup":le=f_;break;case"focusin":nt="focus",le=kc;break;case"focusout":nt="blur",le=kc;break;case"beforeblur":case"afterblur":le=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=p_;break;case np:case ip:case ap:le=n_;break;case rp:le=g_;break;case"scroll":case"scrollend":le=Qv;break;case"wheel":le=__;break;case"copy":case"cut":case"paste":le=a_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=zh;break;case"toggle":case"beforetoggle":le=y_}var $e=(n&4)!==0,Ft=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?oe!==null?oe+"Capture":null:oe;$e=[];for(var X=te,ee;X!==null;){var ve=X;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||Z===null||(ve=As(X,Z),ve!=null&&$e.push(lo(X,ve,ee))),Ft)break;X=X.return}0<$e.length&&(oe=new le(oe,nt,null,a,de),xe.push({event:oe,listeners:$e}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",oe&&a!==Ic&&(nt=a.relatedTarget||a.fromElement)&&(Ni(nt)||nt[On]))break e;if((le||oe)&&(oe=de.window===de?de:(oe=de.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(nt=a.relatedTarget||a.toElement,le=te,nt=nt?Ni(nt):null,nt!==null&&(Ft=u(nt),$e=nt.tag,nt!==Ft||$e!==5&&$e!==27&&$e!==6)&&(nt=null)):(le=null,nt=te),le!==nt)){if($e=Ph,ve="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=zh,ve="onPointerLeave",Z="onPointerEnter",X="pointer"),Ft=le==null?oe:Wa(le),ee=nt==null?oe:Wa(nt),oe=new $e(ve,X+"leave",le,a,de),oe.target=Ft,oe.relatedTarget=ee,ve=null,Ni(de)===te&&($e=new $e(Z,X+"enter",nt,a,de),$e.target=ee,$e.relatedTarget=Ft,ve=$e),Ft=ve,le&&nt)t:{for($e=le,Z=nt,X=0,ee=$e;ee;ee=Kr(ee))X++;for(ee=0,ve=Z;ve;ve=Kr(ve))ee++;for(;0<X-ee;)$e=Kr($e),X--;for(;0<ee-X;)Z=Kr(Z),ee--;for(;X--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=Kr($e),Z=Kr(Z)}$e=null}else $e=null;le!==null&&A0(xe,oe,le,$e,!1),nt!==null&&Ft!==null&&A0(xe,Ft,nt,$e,!0)}}e:{if(oe=te?Wa(te):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var He=Xh;else if(kh(oe))if(Wh)He=N_;else{He=R_;var ht=w_}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&Pc(te.elementType)&&(He=Xh):He=C_;if(He&&(He=He(t,te))){jh(xe,He,a,de);break e}ht&&ht(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&An(oe,"number",oe.value)}switch(ht=te?Wa(te):window,t){case"focusin":(kh(ht)||ht.contentEditable==="true")&&(Ar=ht,Zc=te,Os=null);break;case"focusout":Os=Zc=Ar=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,ep(xe,a,de);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":ep(xe,a,de)}var We;if(Xc)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Tr?Gh(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(Bh&&a.locale!=="ko"&&(Tr||et!=="onCompositionStart"?et==="onCompositionEnd"&&Tr&&(We=Lh()):(fa=de,Hc="value"in fa?fa.value:fa.textContent,Tr=!0)),ht=Ol(te,et),0<ht.length&&(et=new Ih(et,t,null,a,de),xe.push({event:et,listeners:ht}),We?et.data=We:(We=Vh(a),We!==null&&(et.data=We)))),(We=M_?b_(t,a):E_(t,a))&&(et=Ol(te,"onBeforeInput"),0<et.length&&(ht=new Ih("onBeforeInput","beforeinput",null,a,de),xe.push({event:ht,listeners:et}),ht.data=We)),px(xe,t,te,a,de)}E0(xe,n)})}function lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ol(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=As(t,a),c!=null&&s.unshift(lo(t,c,f)),c=As(t,n),c!=null&&s.push(lo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A0(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,B=A.alternate,te=A.stateNode;if(A=A.tag,B!==null&&B===s)break;A!==5&&A!==26&&A!==27||te===null||(B=te,c?(te=As(a,f),te!=null&&S.unshift(lo(a,te,B))):c||(te=As(a,f),te!=null&&S.push(lo(a,te,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var _x=/\r\n?/g,xx=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(_x,`
`).replace(xx,"")}function R0(t,n){return n=w0(n),w0(t)===n}function Pl(){}function Bt(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Si(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Si(t,""+s);break;case"className":Ne(t,"class",s);break;case"tabIndex":Ne(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(t,a,s);break;case"style":Nh(t,s,f);break;case"data":if(n!=="object"){Ne(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",c.name,c,null),Bt(t,n,"formEncType",c.formEncType,c,null),Bt(t,n,"formMethod",c.formMethod,c,null),Bt(t,n,"formTarget",c.formTarget,c,null)):(Bt(t,n,"encType",c.encType,c,null),Bt(t,n,"method",c.method,c,null),Bt(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pl);break;case"onScroll":s!=null&&gt("scroll",t);break;case"onScrollEnd":s!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Te(t,"popover",s);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Te(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zv.get(a)||a,Te(t,a,s))}}function yf(t,n,a,s,c,f){switch(a){case"style":Nh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Si(t,s):(typeof s=="number"||typeof s=="bigint")&&Si(t,""+s);break;case"onScroll":s!=null&&gt("scroll",t);break;case"onScrollEnd":s!=null&&gt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Te(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,f,S,a,null)}}c&&Bt(t,n,"srcSet",a.srcSet,a,null),s&&Bt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var A=f=S=c=null,B=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var de=a[s];if(de!=null)switch(s){case"name":c=de;break;case"type":S=de;break;case"checked":B=de;break;case"defaultChecked":te=de;break;case"value":f=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Bt(t,n,s,de,a,null)}}Vt(t,f,A,B,te,S,c,!1),It(t);return;case"select":gt("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:Bt(t,n,c,A,a,null)}n=f,a=S,t.multiple=!!s,n!=null?ln(t,!!s,n,!1):a!=null&&ln(t,!!s,a,!0);return;case"textarea":gt("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Bt(t,n,S,A,a,null)}Mn(t,s,c,f),It(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Bt(t,n,B,s,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(s=0;s<oo.length;s++)gt(oo[s],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,te,s,a,null)}return;default:if(Pc(n)){for(de in a)a.hasOwnProperty(de)&&(s=a[de],s!==void 0&&yf(t,n,de,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Bt(t,n,A,s,a,null))}function yx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,B=null,te=null,de=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=xe;default:s.hasOwnProperty(le)||Bt(t,n,le,null,s,xe)}}for(var oe in s){var le=s[oe];if(xe=a[oe],s.hasOwnProperty(oe)&&(le!=null||xe!=null))switch(oe){case"type":f=le;break;case"name":c=le;break;case"checked":te=le;break;case"defaultChecked":de=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Bt(t,n,oe,le,s,xe)}}Li(t,S,A,B,te,de,f,c);return;case"select":le=S=A=oe=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:s.hasOwnProperty(f)||Bt(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":oe=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==B&&Bt(t,n,c,f,s,B)}n=A,a=S,s=le,oe!=null?ln(t,!!a,oe,!1):!!s!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":le=oe=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Bt(t,n,A,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":oe=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Bt(t,n,S,c,s,f)}mn(t,oe,le);return;case"option":for(var nt in a)if(oe=a[nt],a.hasOwnProperty(nt)&&oe!=null&&!s.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:Bt(t,n,nt,null,s,oe)}for(B in s)if(oe=s[B],le=a[B],s.hasOwnProperty(B)&&oe!==le&&(oe!=null||le!=null))switch(B){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Bt(t,n,B,oe,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)oe=a[$e],a.hasOwnProperty($e)&&oe!=null&&!s.hasOwnProperty($e)&&Bt(t,n,$e,null,s,oe);for(te in s)if(oe=s[te],le=a[te],s.hasOwnProperty(te)&&oe!==le&&(oe!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Bt(t,n,te,oe,s,le)}return;default:if(Pc(n)){for(var Ft in a)oe=a[Ft],a.hasOwnProperty(Ft)&&oe!==void 0&&!s.hasOwnProperty(Ft)&&yf(t,n,Ft,void 0,s,oe);for(de in s)oe=s[de],le=a[de],!s.hasOwnProperty(de)||oe===le||oe===void 0&&le===void 0||yf(t,n,de,oe,s,le);return}}for(var Z in a)oe=a[Z],a.hasOwnProperty(Z)&&oe!=null&&!s.hasOwnProperty(Z)&&Bt(t,n,Z,null,s,oe);for(xe in s)oe=s[xe],le=a[xe],!s.hasOwnProperty(xe)||oe===le||oe==null&&le==null||Bt(t,n,xe,oe,s,le)}var Sf=null,Mf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function C0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function Sx(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(t){return U0.resolve(null).then(t).catch(Ex)}:D0;function Ex(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function L0(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&co(S.documentElement),a&2&&co(S.body),a&4)for(a=S.head,co(a),S=a.firstChild;S;){var A=S.nextSibling,B=S.nodeName;S[oa]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(c===0){t.removeChild(f),_o(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);_o(n)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),la(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[oa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function Ax(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function wx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var wf=null;function O0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function P0(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);la(t)}var ci=new Map,I0=new Set;function zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=K.d;K.d={f:Rx,r:Cx,D:Nx,C:Dx,L:Ux,m:Lx,X:Px,S:Ox,M:Ix};function Rx(){var t=Yi.f(),n=Rl();return t||n}function Cx(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?nm(n):Yi.r(t)}var Qr=typeof document>"u"?null:document;function z0(t,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var c=jt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),I0.has(c)||(I0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),nn(n),s.head.appendChild(n)))}}function Nx(t){Yi.D(t),z0("dns-prefetch",t,null)}function Dx(t,n){Yi.C(t,n),z0("preconnect",t,n)}function Ux(t,n,a){Yi.L(t,n,a);var s=Qr;if(s&&t&&n){var c='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+jt(a.imageSizes)+'"]')):c+='[href="'+jt(t)+'"]';var f=c;switch(n){case"style":f=Jr(t);break;case"script":f=$r(t)}ci.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(fo(f))||(n=s.createElement("link"),Tn(n,"link",t),nn(n),s.head.appendChild(n)))}}function Lx(t,n){Yi.m(t,n);var a=Qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+jt(s)+'"][href="'+jt(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(t)}if(!ci.has(f)&&(t=g({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}s=a.createElement("link"),Tn(s,"link",t),nn(s),a.head.appendChild(s)}}}function Ox(t,n,a){Yi.S(t,n,a);var s=Qr;if(s&&t){var c=ca(s).hoistableStyles,f=Jr(t);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(uo(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Rf(t,a);var B=S=s.createElement("link");nn(B),Tn(B,"link",t),B._p=new Promise(function(te,de){B.onload=te,B.onerror=de}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Bl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function Px(t,n){Yi.X(t,n);var a=Qr;if(a&&t){var s=ca(a).hoistableScripts,c=$r(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=g({src:t,async:!0},n),(n=ci.get(c))&&Cf(t,n),f=a.createElement("script"),nn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ix(t,n){Yi.M(t,n);var a=Qr;if(a&&t){var s=ca(a).hoistableScripts,c=$r(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Cf(t,n),f=a.createElement("script"),nn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function B0(t,n,a,s){var c=(c=be.current)?zl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=ca(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Jr(a.href);var f=ca(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(uo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||zx(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=ca(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Jr(t){return'href="'+jt(t)+'"'}function uo(t){return'link[rel="stylesheet"]['+t+"]"}function F0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function zx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),nn(n),t.head.appendChild(n))}function $r(t){return'[src="'+jt(t)+'"]'}function fo(t){return"script[async]"+t}function H0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+jt(a.href)+'"]');if(s)return n.instance=s,nn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),nn(s),Tn(s,"style",c),Bl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Jr(a.href);var f=t.querySelector(uo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;s=F0(a),(c=ci.get(c))&&Rf(s,c),f=(t.ownerDocument||t).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Tn(f,"link",s),n.state.loading|=4,Bl(f,a.precedence,t),n.instance=f;case"script":return f=$r(a.src),(c=t.querySelector(fo(f)))?(n.instance=c,nn(c),c):(s=a,(c=ci.get(f))&&(s=g({},a),Cf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),nn(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bl(s,a.precedence,t));return n.instance}function Bl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fl=null;function G0(t,n,a){if(Fl===null){var s=new Map,c=Fl=new Map;c.set(a,s)}else c=Fl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[oa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function V0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Bx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ho=null;function Fx(){}function Hx(t,n,a){if(ho===null)throw Error(r(475));var s=ho;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Jr(a.href),f=t.querySelector(uo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Hl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,nn(f);return}f=t.ownerDocument||t,a=F0(a),(c=ci.get(c))&&Rf(a,c),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Hl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Gx(){if(ho===null)throw Error(r(475));var t=ho;return t.stylesheets&&t.count===0&&Nf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Nf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gl=null;function Nf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gl=new Map,n.forEach(Vx,t),Gl=null,Hl.call(t))}function Vx(t,n){if(!(n.state.loading&4)){var a=Gl.get(t);if(a)var s=a.get(null);else{a=new Map,Gl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Hl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var po={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function kx(t,n,a,s,c,f,S,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function j0(t,n,a,s,c,f,S,A,B,te,de,xe){return t=new kx(t,n,a,S,A,B,te,xe),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},pu(f),t}function X0(t){return t?(t=Nr,t):Nr}function W0(t,n,a,s,c,f){c=X0(c),s.context===null?s.context=c:s.pendingContext=c,s=pa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ma(t,s,n),a!==null&&(Jn(a,t,n),ks(a,t,n))}function q0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Df(t,n){q0(t,n),(t=t.alternate)&&q0(t,n)}function Y0(t){if(t.tag===13){var n=Cr(t,67108864);n!==null&&Jn(n,t,67108864),Df(t,67108864)}}var Vl=!0;function jx(t,n,a,s){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Uf(t,n,a,s)}finally{K.p=f,z.T=c}}function Xx(t,n,a,s){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Uf(t,n,a,s)}finally{K.p=f,z.T=c}}function Uf(t,n,a,s){if(Vl){var c=Lf(s);if(c===null)xf(t,n,s,kl,a),K0(t,s);else if(qx(c,t,n,a,s))s.stopPropagation();else if(K0(t,s),n&4&&-1<Wx.indexOf(t)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qe(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Pe(S);A.entanglements[1]|=B,S&=~B}Ai(f),(Lt&6)===0&&(Al=pt()+500,so(0))}}break;case 13:A=Cr(f,2),A!==null&&Jn(A,f,2),Rl(),Df(f,2)}if(f=Lf(s),f===null&&xf(t,n,s,kl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else xf(t,n,s,null,a)}}function Lf(t){return t=zc(t),Of(t)}var kl=null;function Of(t){if(kl=null,t=Ni(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kl=t,null}function Z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case _t:return 2;case Ze:return 8;case rt:case Qt:return 32;case I:return 268435456;default:return 32}default:return 32}}var Pf=!1,Ra=null,Ca=null,Na=null,mo=new Map,go=new Map,Da=[],Wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function vo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&Y0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function qx(t,n,a,s,c){switch(n){case"focusin":return Ra=vo(Ra,t,n,a,s,c),!0;case"dragenter":return Ca=vo(Ca,t,n,a,s,c),!0;case"mouseover":return Na=vo(Na,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return mo.set(f,vo(mo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,vo(go.get(f)||null,t,n,a,s,c)),!0}return!1}function Q0(t){var n=Ni(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xn(t.priority,function(){if(a.tag===13){var s=Qn();s=it(s);var c=Cr(a,s);c!==null&&Jn(c,a,s),Df(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ic=s,a.target.dispatchEvent(s),Ic=null}else return n=Di(a),n!==null&&Y0(n),t.blockedOn=a,!1;n.shift()}return!0}function J0(t,n,a){jl(t)&&a.delete(n)}function Yx(){Pf=!1,Ra!==null&&jl(Ra)&&(Ra=null),Ca!==null&&jl(Ca)&&(Ca=null),Na!==null&&jl(Na)&&(Na=null),mo.forEach(J0),go.forEach(J0)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yx)))}var Wl=null;function $0(t){Wl!==t&&(Wl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Of(s||a)===null)continue;break}var f=Di(a);f!==null&&(t.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function _o(t){function n(B){return Xl(B,t)}Ra!==null&&Xl(Ra,t),Ca!==null&&Xl(Ca,t),Na!==null&&Xl(Na,t),mo.forEach(n),go.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Q0(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Sn]||null;if(typeof f=="function")S||$0(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)A=S.formAction;else if(Of(c)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),$0(a)}}}function If(t){this._internalRoot=t}ql.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();W0(a,s,t,n,null,null)},ql.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W0(t.current,2,null,t,null,null),Rl(),n[On]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&Q0(t)}};var eg=e.version;if(eg!=="19.1.0")throw Error(r(527,eg,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Zx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{ge=Yl.inject(Zx),_e=Yl}catch{}}return yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gm,f=vm,S=_m,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=j0(t,1,!1,null,null,a,s,c,f,S,A,null),t[On]=n.current,_f(t),new If(n)},yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=gm,S=vm,A=_m,B=null,te=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(te=a.formState)),n=j0(t,1,!0,n,a??null,s,c,f,S,A,B,te),n.context=X0(null),a=n.current,s=Qn(),s=it(s),c=pa(s),c.callback=null,ma(a,c,s),a=s,n.current.lanes=a,ze(n,a),Ai(n),t[On]=n.current,_f(t),new ql(n)},yo.version="19.1.0",yo}var ug;function ry(){if(ug)return Ff.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ff.exports=ay(),Ff.exports}var sy=ry();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ly=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),fg=o=>{const e=ly(o);return e.charAt(0).toUpperCase()+e.slice(1)},fv=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),cy=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Ve.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},p)=>Ve.createElement("svg",{ref:p,...uy,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:fv("lucide",l),...!u&&!cy(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,g])=>Ve.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(o,e)=>{const i=Ve.forwardRef(({className:r,...l},u)=>Ve.createElement(fy,{ref:u,iconNode:e,className:fv(`lucide-${oy(fg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=fg(o),i};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],dg=Dt("arrow-right",dy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],hg=Dt("award",hy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],dv=Dt("briefcase",py);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],gy=Dt("building",my);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],pg=Dt("calendar",vy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],xy=Dt("circle-alert",_y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],hv=Dt("circle-check-big",yy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],My=Dt("clock",Sy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],uh=Dt("code",by);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],pv=Dt("coffee",Ey);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ay=Dt("download",Ty);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],mv=Dt("external-link",wy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Cy=Dt("git-branch",Ry);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],wo=Dt("github",Ny);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Uy=Dt("graduation-cap",Dy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],fh=Dt("heart",Ly);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Py=Dt("house",Oy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],dh=Dt("linkedin",Iy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Cc=Dt("mail",zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Fy=Dt("map-pin",By);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Gy=Dt("menu",Hy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],gv=Dt("message-circle",Vy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],jy=Dt("send",ky);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],vv=Dt("sparkles",Xy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],_v=Dt("star",Wy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Yy=Dt("trophy",qy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ky=Dt("user",Zy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Jy=Dt("users",Qy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eS=Dt("x",$y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],yd=Dt("zap",tS),nS=()=>{const[o,e]=Ve.useState(!1),[i,r]=Ve.useState(!1),[l,u]=Ve.useState("home"),[d,h]=Ve.useState(!1);Ve.useEffect(()=>{setTimeout(()=>h(!0),100);const v=()=>{e(window.scrollY>50);const M=["home","about","skills","projects","experience","contact"].find(E=>{const R=document.getElementById(E);if(R){const y=R.getBoundingClientRect();return y.top<=100&&y.bottom>=100}return!1});M&&u(M)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const p=[{id:"home",label:"Home",icon:Py},{id:"about",label:"About",icon:Ky},{id:"skills",label:"Skills",icon:uh},{id:"projects",label:"Projects",icon:dv},{id:"experience",label:"Experience",icon:pv},{id:"contact",label:"Contact",icon:gv}],m=[{icon:wo,href:"#",label:"GitHub"},{icon:dh,href:"#",label:"LinkedIn"},{icon:Cc,href:"#",label:"Email"}],g=v=>{const _=document.getElementById(v);_&&_.scrollIntoView({behavior:"smooth"}),r(!1)};return b.jsxs(b.Fragment,{children:[b.jsxs("header",{className:`fixed top-0 w-full z-50 transition-all duration-500 ${o?"bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20":"bg-transparent"} ${d?"translate-y-0 opacity-100":"-translate-y-full opacity-0"}`,children:[b.jsx("nav",{className:"container mx-auto px-6 py-4",children:b.jsxs("div",{className:"flex justify-between items-center",children:[b.jsx("div",{className:"relative group",children:b.jsx("img",{src:"/assets/logo.png",alt:"Logo",className:"w-12 h-12 object-contain cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"})}),b.jsx("div",{className:"hidden lg:flex items-center space-x-1",children:p.map((v,_)=>{const M=v.icon,E=l===v.id;return b.jsxs("button",{onClick:()=>g(v.id),className:`relative group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${E?"bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg":"text-gray-700 hover:text-orange-600 hover:bg-orange-50"}`,style:{animationDelay:`${_*.1}s`,animation:d?"slideInDown 0.6s ease-out forwards":"none"},children:[b.jsx(M,{size:16,className:`transition-all duration-300 ${E?"text-white":"text-gray-500"}`}),b.jsx("span",{className:"font-medium",children:v.label}),E&&b.jsx("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"})]},v.id)})}),b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("div",{className:"hidden md:flex items-center space-x-2",children:m.map((v,_)=>{const M=v.icon;return b.jsxs("a",{href:v.href,className:"relative group w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1",style:{animationDelay:`${(_+p.length)*.1}s`,animation:d?"slideInDown 0.6s ease-out forwards":"none"},children:[b.jsx(M,{size:16,className:"text-gray-700 group-hover:text-orange-600 transition-colors"}),b.jsx("div",{className:"absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:v.label})]},v.label)})}),b.jsx("button",{onClick:()=>r(!i),className:"lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300",children:i?b.jsx(eS,{size:20,className:"text-gray-700"}):b.jsx(Gy,{size:20,className:"text-gray-700"})})]})]})}),b.jsx("div",{className:`lg:hidden transition-all duration-300 ${i?"max-h-96 opacity-100":"max-h-0 opacity-0 overflow-hidden"}`,children:b.jsx("div",{className:"bg-white/10 backdrop-blur-xl border-t border-white/20 px-6 py-4",children:b.jsxs("div",{className:"space-y-3",children:[p.map((v,_)=>{const M=v.icon,E=l===v.id;return b.jsxs("button",{onClick:()=>g(v.id),className:`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${E?"bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg":"text-gray-700 hover:bg-orange-50"}`,style:{animationDelay:`${_*.1}s`,animation:i?"slideInRight 0.4s ease-out forwards":"none"},children:[b.jsx(M,{size:20,className:E?"text-white":"text-gray-500"}),b.jsx("span",{className:"font-medium",children:v.label})]},v.id)}),b.jsx("div",{className:"flex justify-center space-x-4 pt-4 border-t border-white/20",children:m.map((v,_)=>{const M=v.icon;return b.jsx("a",{href:v.href,className:"w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-110",style:{animationDelay:`${(_+p.length)*.1}s`,animation:i?"slideInUp 0.4s ease-out forwards":"none"},children:b.jsx(M,{size:18,className:"text-gray-700"})},v.label)})})]})})})]}),b.jsx("div",{className:"fixed top-0 left-0 w-full h-1 bg-transparent z-50",children:b.jsx("div",{className:"h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out",style:{width:`${Math.min(100,window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100)}%`}})}),b.jsx("style",{jsx:!0,children:`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})},iS=()=>{const[o,e]=Ve.useState(!1);Ve.useEffect(()=>{const r=setTimeout(()=>{e(!0)},300);return()=>clearTimeout(r)},[]);const i=()=>{const r=document.createElement("a");r.href="/assets/CV_TAMAGNO.pdf",r.download="CV_TAMAGNO.pdf",r.click()};return b.jsxs("section",{className:"min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center relative overflow-hidden",children:[b.jsxs("div",{className:"absolute inset-0 z-5",children:[b.jsx("div",{className:"absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"}),b.jsx("div",{className:"absolute top-40 right-32 w-20 h-20 bg-white/10 rounded-full animate-bounce"}),b.jsx("div",{className:"absolute bottom-32 left-32 w-24 h-24 bg-white/8 rounded-full animate-pulse delay-300"}),b.jsx("div",{className:"absolute bottom-20 right-20 w-16 h-16 bg-white/12 rounded-full animate-bounce delay-500"}),[...Array(8)].map((r,l)=>b.jsx("div",{className:"absolute w-2 h-2 bg-white/20 rounded-full animate-ping",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*3}s`}},l))]}),b.jsx("div",{className:"container mx-auto px-6 text-center text-white relative z-10",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("div",{className:`mb-8 transition-all duration-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{marginTop:"5rem"},children:b.jsxs("div",{className:"inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6",children:[b.jsx(vv,{className:"w-5 h-5 mr-2 text-yellow-300"}),b.jsx("span",{className:"text-lg",children:"Welcome to my digital world!"})]})}),b.jsx("div",{className:`mb-8 transition-all duration-1000 delay-200 ${o?"opacity-100 scale-100":"opacity-0 scale-95"}`,children:b.jsxs("div",{className:"relative inline-block",children:[b.jsxs("div",{className:"w-48 h-48 mx-auto mb-6 relative",children:[b.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-white/20 to-white/5 rounded-full animate-pulse"}),b.jsx("img",{src:"/assets/prf-pic.png",alt:"Tamagno Roy",className:"w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300",onError:r=>{r.target.style.display="none",r.target.nextSibling.style.display="flex"}}),b.jsx("div",{className:"w-full h-full rounded-full border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-4xl font-bold hidden",children:"TR"})]}),b.jsx("div",{className:"absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce flex items-center justify-center",children:"⚡"}),b.jsx("div",{className:"absolute -bottom-2 -left-4 w-6 h-6 bg-pink-300 rounded-full animate-pulse flex items-center justify-center",children:"💡"})]})}),b.jsxs("div",{className:`transition-all duration-1000 delay-400 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[b.jsx("h1",{className:"text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ",children:"Tamagno Roy"}),b.jsxs("div",{className:"relative",children:[b.jsx("p",{className:"text-2xl md:text-3xl mb-8 opacity-90",children:"AI/ML Enthusiast & Frontend Developer"}),b.jsx("div",{className:"absolute -right-8 top-0 text-2xl animate-bounce",children:"🚀"})]})]}),b.jsx("div",{className:`transition-all duration-1000 delay-600 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsxs("p",{className:"text-xl mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed",children:["Building the future with code, one algorithm at a time.",b.jsx("span",{className:"inline-block ml-2",children:"🎯"})]})}),b.jsx("div",{className:`flex justify-center space-x-6 mb-10 transition-all duration-1000 delay-800 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[{icon:wo,href:"https://github.com/tamo2005",label:"GitHub"},{icon:dh,href:"https://www.linkedin.com/in/tamagno-roy-2ab072290/",label:"LinkedIn"},{icon:Cc,href:"mailto:tamagnoroy.roy2005@gmail.com",label:"Email"}].map(({icon:r,href:l,label:u},d)=>b.jsxs("a",{href:l,className:"group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6",style:{animationDelay:`${d*100}ms`},children:[b.jsx(r,{className:"w-6 h-6 group-hover:scale-110 transition-transform duration-300"}),b.jsx("span",{className:"absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-1 rounded whitespace-nowrap",children:u})]},d))}),b.jsx("div",{className:`transition-all duration-1000 delay-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsxs("button",{onClick:i,className:"group relative bg-white text-orange-600 px-10 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden",children:[b.jsxs("span",{className:"relative z-10 flex items-center",children:[b.jsx(Ay,{className:"w-5 h-5 mr-2 group-hover:animate-bounce"}),"Download Resume"]}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"})]})}),b.jsx("div",{className:`mt-12 transition-all duration-1000 delay-1200 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsxs("div",{className:"inline-flex items-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full",children:[b.jsx(fh,{className:"w-4 h-4 mr-2 text-red-400"}),b.jsx("span",{className:"text-sm opacity-80",children:"Turning wild ideas into code since 2023"})]})})]})}),b.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:b.jsx("div",{className:"w-6 h-10 border-2 border-white/30 rounded-full flex justify-center",children:b.jsx("div",{className:"w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"})})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="178",aS=0,mg=1,rS=2,xv=1,sS=2,ea=3,Va=0,Gn=1,ta=2,Ha=0,ms=1,Tc=2,gg=3,vg=4,oS=5,vr=100,lS=101,cS=102,uS=103,fS=104,dS=200,hS=201,pS=202,mS=203,Sd=204,Md=205,gS=206,vS=207,_S=208,xS=209,yS=210,SS=211,MS=212,bS=213,ES=214,bd=0,Ed=1,Td=2,_s=3,Ad=4,wd=5,Rd=6,Cd=7,yv=0,TS=1,AS=2,Ga=0,wS=1,RS=2,CS=3,NS=4,DS=5,US=6,LS=7,Sv=300,xs=301,ys=302,Nd=303,Dd=304,Nc=306,Ud=1e3,xr=1001,Ld=1002,yi=1003,OS=1004,Zl=1005,Ci=1006,kf=1007,yr=1008,ra=1009,Mv=1010,bv=1011,Ro=1012,ph=1013,Sr=1014,na=1015,Uo=1016,mh=1017,gh=1018,Co=1020,Ev=35902,Tv=1021,Av=1022,xi=1023,No=1026,Do=1027,wv=1028,vh=1029,Rv=1030,_h=1031,xh=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Od=35840,Pd=35841,Id=35842,zd=35843,Bd=36196,Fd=37492,Hd=37496,Gd=37808,Vd=37809,kd=37810,jd=37811,Xd=37812,Wd=37813,qd=37814,Yd=37815,Zd=37816,Kd=37817,Qd=37818,Jd=37819,$d=37820,eh=37821,bc=36492,th=36494,nh=36495,Cv=36283,ih=36284,ah=36285,rh=36286,PS=3200,IS=3201,zS=0,BS=1,Fa="",fi="srgb",Ss="srgb-linear",Ac="linear",Ht="srgb",es=7680,_g=519,FS=512,HS=513,GS=514,Nv=515,VS=516,kS=517,jS=518,XS=519,xg=35044,yg="300 es",ia=2e3,wc=2001;class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,sh=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function yt(o,e,i){return Math.max(e,Math.min(i,o))}function WS(o,e){return(o%e+e)%e}function Xf(o,e,i){return(1-i)*o+i*e}function So(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,i=0){At.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const _=u[d+0],M=u[d+1],E=u[d+2],R=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=_,e[i+1]=M,e[i+2]=E,e[i+3]=R;return}if(v!==R||p!==_||m!==M||g!==E){let y=1-h;const x=p*_+m*M+g*E+v*R,O=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,x*O);y=Math.sin(y*F)/H,h=Math.sin(h*F)/H}const C=h*O;if(p=p*y+_*C,m=m*y+M*C,g=g*y+E*C,v=v*y+R*C,y===1-h){const H=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=H,m*=H,g*=H,v*=H}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[d],_=u[d+1],M=u[d+2],E=u[d+3];return e[i]=h*E+g*v+p*M-m*_,e[i+1]=p*E+g*_+m*v-h*M,e[i+2]=m*E+g*M+h*_-p*v,e[i+3]=g*E-h*v-p*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),v=h(u/2),_=p(r/2),M=p(l/2),E=p(u/2);switch(d){case"XYZ":this._x=_*g*v+m*M*E,this._y=m*M*v-_*g*E,this._z=m*g*E+_*M*v,this._w=m*g*v-_*M*E;break;case"YXZ":this._x=_*g*v+m*M*E,this._y=m*M*v-_*g*E,this._z=m*g*E-_*M*v,this._w=m*g*v+_*M*E;break;case"ZXY":this._x=_*g*v-m*M*E,this._y=m*M*v+_*g*E,this._z=m*g*E+_*M*v,this._w=m*g*v-_*M*E;break;case"ZYX":this._x=_*g*v-m*M*E,this._y=m*M*v+_*g*E,this._z=m*g*E-_*M*v,this._w=m*g*v+_*M*E;break;case"YZX":this._x=_*g*v+m*M*E,this._y=m*M*v+_*g*E,this._z=m*g*E-_*M*v,this._w=m*g*v-_*M*E;break;case"XZY":this._x=_*g*v-m*M*E,this._y=m*M*v-_*g*E,this._z=m*g*E+_*M*v,this._w=m*g*v+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],_=r+h+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,_=Math.sin(i*g)/m;return this._w=d*v+this._w*_,this._x=r*v+this._x*_,this._y=l*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Sg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+p*m+d*v-h*g,this.y=r+p*g+h*m-u*v,this.z=l+p*v+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new re,Sg=new Oo;class ot{constructor(e,i,r,l,u,d,h,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],v=r[7],_=r[2],M=r[5],E=r[8],R=l[0],y=l[3],x=l[6],O=l[1],U=l[4],C=l[7],H=l[2],F=l[5],P=l[8];return u[0]=d*R+h*O+p*H,u[3]=d*y+h*U+p*F,u[6]=d*x+h*C+p*P,u[1]=m*R+g*O+v*H,u[4]=m*y+g*U+v*F,u[7]=m*x+g*C+v*P,u[2]=_*R+M*O+E*H,u[5]=_*y+M*U+E*F,u[8]=_*x+M*C+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=g*d-h*m,_=h*p-g*u,M=m*u-d*p,E=i*v+r*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(l*m-g*r)*R,e[2]=(h*r-l*d)*R,e[3]=_*R,e[4]=(g*i-l*p)*R,e[5]=(l*u-h*i)*R,e[6]=M*R,e[7]=(r*p-m*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new ot;function Dv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qS(){const o=Rc("canvas");return o.style.display="block",o}const Mg={};function gs(o){o in Mg||(Mg[o]=!0,console.warn(o))}function YS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function ZS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function KS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bg=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eg=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const o={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ht&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ht&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Ac:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ss]:{primaries:e,whitePoint:r,transfer:Ac,toXYZ:bg,fromXYZ:Eg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:bg,fromXYZ:Eg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Tt=QS();function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class JS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ts===void 0&&(ts=Rc("canvas")),ts.width=e.width,ts.height=e.height;const l=ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=aa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Yf(l[d].image)):u.push(Yf(l[d]))}else u=Yf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Yf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;const Zf=new re;class Vn extends bs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=xr,l=xr,u=Ci,d=yr,h=xi,p=ra,m=Vn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Lo(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zf).x}get height(){return this.source.getSize(Zf).y}get depth(){return this.source.getSize(Zf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Sv;Vn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],v=p[8],_=p[1],M=p[5],E=p[9],R=p[2],y=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,C=(M+1)/2,H=(x+1)/2,F=(g+_)/4,P=(v+R)/4,V=(E+y)/4;return U>C&&U>H?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=F/r,u=P/r):C>H?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=F/l,u=V/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=P/u,l=V/u),this.set(r,l,u,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-R)/O,this.z=(_-g)/O,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Vn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends tM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Uv extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,mi):mi.fromBufferAttribute(u,d),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ql.subVectors(this.max,Mo),ns.subVectors(e.a,Mo),is.subVectors(e.b,Mo),as.subVectors(e.c,Mo),La.subVectors(is,ns),Oa.subVectors(as,is),cr.subVectors(ns,as);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-cr.z,cr.y,La.z,0,-La.x,Oa.z,0,-Oa.x,cr.z,0,-cr.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-cr.y,cr.x,0];return!Kf(i,ns,is,as,Ql)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,ns,is,as,Ql))?!1:(Jl.crossVectors(La,Oa),i=[Jl.x,Jl.y,Jl.z],Kf(i,ns,is,as,Ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new re,new re,new re,new re,new re,new re,new re,new re],mi=new re,Kl=new Po,ns=new re,is=new re,as=new re,La=new re,Oa=new re,cr=new re,Mo=new re,Ql=new re,Jl=new re,ur=new re;function Kf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const iM=new Po,bo=new re,Qf=new re;class Dc{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Qf)),this.expandByPoint(bo.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new re,Jf=new re,$l=new re,Pa=new re,$f=new re,ec=new re,ed=new re;class Lv{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jf.copy(e).add(i).multiplyScalar(.5),$l.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(Jf);const u=e.distanceTo(i)*.5,d=-this.direction.dot($l),h=Pa.dot(this.direction),p=-Pa.dot($l),m=Pa.lengthSq(),g=Math.abs(1-d*d);let v,_,M,E;if(g>0)if(v=d*p-h,_=d*h-p,E=u*g,v>=0)if(_>=-E)if(_<=E){const R=1/g;v*=R,_*=R,M=v*(v+d*_+2*h)+_*(d*v+_+2*p)+m}else _=u,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*p)+m;else _=-u,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*p)+m;else _<=-E?(v=Math.max(0,-(-d*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+_*(_+2*p)+m):_<=E?(v=0,_=Math.min(Math.max(-u,-p),u),M=_*(_+2*p)+m):(v=Math.max(0,-(d*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+_*(_+2*p)+m);else _=d>0?-u:u,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Jf).addScaledVector($l,_),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,l=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,l=(e.min.x-_.x)*m),g>=0?(u=(e.min.y-_.y)*g,d=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,d=(e.min.y-_.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,u){$f.subVectors(i,e),ec.subVectors(r,e),ed.crossVectors($f,ec);let d=this.direction.dot(ed),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Pa.subVectors(this.origin,e);const p=h*this.direction.dot(ec.crossVectors(Pa,ec));if(p<0)return null;const m=h*this.direction.dot($f.cross(Pa));if(m<0||p+m>d)return null;const g=-h*Pa.dot(ed);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,u,d,h,p,m,g,v,_,M,E,R,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,g,v,_,M,E,R,y)}set(e,i,r,l,u,d,h,p,m,g,v,_,M,E,R,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=E,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/rs.setFromMatrixColumn(e,0).length(),u=1/rs.setFromMatrixColumn(e,1).length(),d=1/rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=d*g,M=d*v,E=h*g,R=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+E*m,i[5]=_-R*m,i[9]=-h*p,i[2]=R-_*m,i[6]=E+M*m,i[10]=d*p}else if(e.order==="YXZ"){const _=p*g,M=p*v,E=m*g,R=m*v;i[0]=_+R*h,i[4]=E*h-M,i[8]=d*m,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-E,i[6]=R+_*h,i[10]=d*p}else if(e.order==="ZXY"){const _=p*g,M=p*v,E=m*g,R=m*v;i[0]=_-R*h,i[4]=-d*v,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*g,i[9]=R-_*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const _=d*g,M=d*v,E=h*g,R=h*v;i[0]=p*g,i[4]=E*m-M,i[8]=_*m+R,i[1]=p*v,i[5]=R*m+_,i[9]=M*m-E,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const _=d*p,M=d*m,E=h*p,R=h*m;i[0]=p*g,i[4]=R-_*v,i[8]=E*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*v+E,i[10]=_-R*v}else if(e.order==="XZY"){const _=d*p,M=d*m,E=h*p,R=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=_*v+R,i[5]=d*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=h*g,i[10]=R*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,rM)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(r,$n),Ia.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(r,$n)),Ia.normalize(),tc.crossVectors($n,Ia),l[0]=Ia.x,l[4]=tc.x,l[8]=$n.x,l[1]=Ia.y,l[5]=tc.y,l[9]=$n.y,l[2]=Ia.z,l[6]=tc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],v=r[5],_=r[9],M=r[13],E=r[2],R=r[6],y=r[10],x=r[14],O=r[3],U=r[7],C=r[11],H=r[15],F=l[0],P=l[4],V=l[8],D=l[12],w=l[1],G=l[5],q=l[9],j=l[13],ae=l[2],ie=l[6],z=l[10],K=l[14],Y=l[3],he=l[7],L=l[11],ne=l[15];return u[0]=d*F+h*w+p*ae+m*Y,u[4]=d*P+h*G+p*ie+m*he,u[8]=d*V+h*q+p*z+m*L,u[12]=d*D+h*j+p*K+m*ne,u[1]=g*F+v*w+_*ae+M*Y,u[5]=g*P+v*G+_*ie+M*he,u[9]=g*V+v*q+_*z+M*L,u[13]=g*D+v*j+_*K+M*ne,u[2]=E*F+R*w+y*ae+x*Y,u[6]=E*P+R*G+y*ie+x*he,u[10]=E*V+R*q+y*z+x*L,u[14]=E*D+R*j+y*K+x*ne,u[3]=O*F+U*w+C*ae+H*Y,u[7]=O*P+U*G+C*ie+H*he,u[11]=O*V+U*q+C*z+H*L,u[15]=O*D+U*j+C*K+H*ne,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],v=e[6],_=e[10],M=e[14],E=e[3],R=e[7],y=e[11],x=e[15];return E*(+u*p*v-l*m*v-u*h*_+r*m*_+l*h*M-r*p*M)+R*(+i*p*M-i*m*_+u*d*_-l*d*M+l*m*g-u*p*g)+y*(+i*m*v-i*h*M-u*d*v+r*d*M+u*h*g-r*m*g)+x*(-l*h*g-i*p*v+i*h*_+l*d*v-r*d*_+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=e[9],_=e[10],M=e[11],E=e[12],R=e[13],y=e[14],x=e[15],O=v*y*m-R*_*m+R*p*M-h*y*M-v*p*x+h*_*x,U=E*_*m-g*y*m-E*p*M+d*y*M+g*p*x-d*_*x,C=g*R*m-E*v*m+E*h*M-d*R*M-g*h*x+d*v*x,H=E*v*p-g*R*p-E*h*_+d*R*_+g*h*y-d*v*y,F=i*O+r*U+l*C+u*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=O*P,e[1]=(R*_*u-v*y*u-R*l*M+r*y*M+v*l*x-r*_*x)*P,e[2]=(h*y*u-R*p*u+R*l*m-r*y*m-h*l*x+r*p*x)*P,e[3]=(v*p*u-h*_*u-v*l*m+r*_*m+h*l*M-r*p*M)*P,e[4]=U*P,e[5]=(g*y*u-E*_*u+E*l*M-i*y*M-g*l*x+i*_*x)*P,e[6]=(E*p*u-d*y*u-E*l*m+i*y*m+d*l*x-i*p*x)*P,e[7]=(d*_*u-g*p*u+g*l*m-i*_*m-d*l*M+i*p*M)*P,e[8]=C*P,e[9]=(E*v*u-g*R*u-E*r*M+i*R*M+g*r*x-i*v*x)*P,e[10]=(d*R*u-E*h*u+E*r*m-i*R*m-d*r*x+i*h*x)*P,e[11]=(g*h*u-d*v*u-g*r*m+i*v*m+d*r*M-i*h*M)*P,e[12]=H*P,e[13]=(g*R*l-E*v*l+E*r*_-i*R*_-g*r*y+i*v*y)*P,e[14]=(E*h*l-d*R*l-E*r*p+i*R*p+d*r*y-i*h*y)*P,e[15]=(d*v*l-g*h*l+g*r*p-i*v*p-d*r*_+i*h*_)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,v=h+h,_=u*m,M=u*g,E=u*v,R=d*g,y=d*v,x=h*v,O=p*m,U=p*g,C=p*v,H=r.x,F=r.y,P=r.z;return l[0]=(1-(R+x))*H,l[1]=(M+C)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(M-C)*F,l[5]=(1-(_+x))*F,l[6]=(y+O)*F,l[7]=0,l[8]=(E+U)*P,l[9]=(y-O)*P,l[10]=(1-(_+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const d=rs.set(l[4],l[5],l[6]).length(),h=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],gi.copy(this);const m=1/u,g=1/d,v=1/h;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=g,gi.elements[5]*=g,gi.elements[6]*=g,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,i.setFromRotationMatrix(gi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ia){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),_=(r+l)/(r-l);let M,E;if(h===ia)M=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(h===wc)M=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ia){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(d-u),_=(i+e)*m,M=(r+l)*g;let E,R;if(h===ia)E=(d+u)*v,R=-2*v;else if(h===wc)E=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const rs=new re,gi=new tn,aM=new re(0,0,0),rM=new re(1,1,1),Ia=new re,tc=new re,$n=new re,Tg=new tn,Ag=new Oo;class sa{constructor(e=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const wg=new re,ss=new Oo,Qi=new tn,nc=new re,Eo=new re,oM=new re,lM=new Oo,Rg=new re(1,0,0),Cg=new re(0,1,0),Ng=new re(0,0,1),Dg={type:"added"},cM={type:"removed"},os={type:"childadded",child:null},td={type:"childremoved",child:null};class kn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new re,i=new sa,r=new Oo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ot}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Ng,e)}translateOnAxis(e,i){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?nc.copy(e):nc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Eo,nc,this.up):Qi.lookAt(nc,Eo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Qi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dg),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cM),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dg),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),v=d(e.shapes),_=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new re(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new re,Ji=new re,nd=new re,$i=new re,ls=new re,cs=new re,Ug=new re,id=new re,ad=new re,rd=new re,sd=new en,od=new en,ld=new en;class _i{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),Ji.subVectors(r,i),nd.subVectors(e,i);const d=vi.dot(vi),h=vi.dot(Ji),p=vi.dot(nd),m=Ji.dot(Ji),g=Ji.dot(nd),v=d*m-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,M=(m*p-h*g)*_,E=(d*g-h*p)*_;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(d,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return sd.setScalar(0),od.setScalar(0),ld.setScalar(0),sd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(sd,u.x),d.addScaledVector(od,u.y),d.addScaledVector(ld,u.z),d}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),Ji.subVectors(e,i),vi.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),vi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ls.subVectors(l,r),cs.subVectors(u,r),id.subVectors(e,r);const p=ls.dot(id),m=cs.dot(id);if(p<=0&&m<=0)return i.copy(r);ad.subVectors(e,l);const g=ls.dot(ad),v=cs.dot(ad);if(g>=0&&v<=g)return i.copy(l);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ls,d);rd.subVectors(e,u);const M=ls.dot(rd),E=cs.dot(rd);if(E>=0&&M<=E)return i.copy(u);const R=M*m-p*E;if(R<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(cs,h);const y=g*E-M*v;if(y<=0&&v-g>=0&&M-E>=0)return Ug.subVectors(u,l),h=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(Ug,h);const x=1/(y+R+_);return d=R*x,h=_*x,i.copy(r).addScaledVector(ls,d).addScaledVector(cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},ic={h:0,s:0,l:0};function cd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=WS(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=cd(d,u,e+1/3),this.g=cd(d,u,e),this.b=cd(d,u,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=Pv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(yt(Nn.r*255,0,255))*65536+Math.round(yt(Nn.g*255,0,255))*256+Math.round(yt(Nn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=g<=.5?v/(d+h):v/(2-d-h),d){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=fi){Tt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(ic);const r=Xf(za.h,ic.h,i),l=Xf(za.s,ic.s,i),u=Xf(za.l,ic.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Nt;Nt.NAMES=Pv;let uM=0;class Io extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ms,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==Md&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_g&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wi extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new re,ac=new At;let fM=0;class jn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=xg,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=So(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=So(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=So(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=So(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xg&&(e.usage=this.usage),e}}class Iv extends jn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class zv extends jn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Dn extends jn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let dM=0;const ui=new tn,ud=new kn,us=new re,ei=new Po,To=new Po,xn=new re;class ni extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dv(e)?zv:Iv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Dn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];To.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ei.min,To.min),ei.expandByPoint(xn),xn.addVectors(ei.max,To.max),ei.expandByPoint(xn)):(ei.expandByPoint(To.min),ei.expandByPoint(To.max))}ei.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)xn.fromBufferAttribute(h,m),p&&(us.fromBufferAttribute(e,m),xn.add(us)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let V=0;V<r.count;V++)h[V]=new re,p[V]=new re;const m=new re,g=new re,v=new re,_=new At,M=new At,E=new At,R=new re,y=new re;function x(V,D,w){m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,w),_.fromBufferAttribute(u,V),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,w),g.sub(m),v.sub(m),M.sub(_),E.sub(_);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),h[V].add(R),h[D].add(R),h[w].add(R),p[V].add(y),p[D].add(y),p[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let V=0,D=O.length;V<D;++V){const w=O[V],G=w.start,q=w.count;for(let j=G,ae=G+q;j<ae;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const U=new re,C=new re,H=new re,F=new re;function P(V){H.fromBufferAttribute(l,V),F.copy(H);const D=h[V];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(F,D);const G=C.dot(p[V])<0?-1:1;d.setXYZW(V,U.x,U.y,U.z,G)}for(let V=0,D=O.length;V<D;++V){const w=O[V],G=w.start,q=w.count;for(let j=G,ae=G+q;j<ae;j+=3)P(e.getX(j+0)),P(e.getX(j+1)),P(e.getX(j+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new jn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new re,u=new re,d=new re,h=new re,p=new re,m=new re,g=new re,v=new re;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),R=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let M=0,E=0;for(let R=0,y=p.length;R<y;R++){h.isInterleavedBufferAttribute?M=p[R]*h.data.stride+h.offset:M=p[R]*g;for(let x=0;x<g;x++)_[E++]=m[M++]}return new jn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],M=e(_,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const M=m[v];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new tn,fr=new Lv,rc=new Dc,Og=new re,sc=new re,oc=new re,lc=new re,fd=new re,cc=new re,Pg=new re,uc=new re;class ti extends kn{constructor(e=new ni,i=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){cc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],v=u[p];g!==0&&(fd.fromBufferAttribute(v,e),d?cc.addScaledVector(fd,g):cc.addScaledVector(fd.sub(i),g))}i.add(cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(rc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(rc,Og)===null||fr.origin.distanceToSquared(Og)>(e.far-e.near)**2))&&(Lg.copy(u).invert(),fr.copy(e.ray).applyMatrix4(Lg),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,R=_.length;E<R;E++){const y=_[E],x=d[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=O,H=U;C<H;C+=3){const F=h.getX(C),P=h.getX(C+1),V=h.getX(C+2);l=fc(this,x,e,r,m,g,v,F,P,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=E,x=R;y<x;y+=3){const O=h.getX(y),U=h.getX(y+1),C=h.getX(y+2);l=fc(this,d,e,r,m,g,v,O,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,R=_.length;E<R;E++){const y=_[E],x=d[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=O,H=U;C<H;C+=3){const F=C,P=C+1,V=C+2;l=fc(this,x,e,r,m,g,v,F,P,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let y=E,x=R;y<x;y+=3){const O=y,U=y+1,C=y+2;l=fc(this,d,e,r,m,g,v,O,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function hM(o,e,i,r,l,u,d,h){let p;if(e.side===Gn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Va,h),p===null)return null;uc.copy(h),uc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(uc);return m<i.near||m>i.far?null:{distance:m,point:uc.clone(),object:o}}function fc(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,sc),o.getVertexPosition(p,oc),o.getVertexPosition(m,lc);const g=hM(o,e,i,r,sc,oc,lc,Pg);if(g){const v=new re;_i.getBarycoord(Pg,sc,oc,lc,v),l&&(g.uv=_i.getInterpolatedAttribute(l,h,p,m,v,new At)),u&&(g.uv1=_i.getInterpolatedAttribute(u,h,p,m,v,new At)),d&&(g.normal=_i.getInterpolatedAttribute(d,h,p,m,v,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new re,materialIndex:0};_i.getNormal(sc,oc,lc,_.normal),g.face=_,g.barycoord=v}return g}class Es extends ni{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],v=[];let _=0,M=0;E("z","y","x",-1,-1,r,i,e,d,u,0),E("z","y","x",1,-1,r,i,-e,d,u,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(v,2));function E(R,y,x,O,U,C,H,F,P,V,D){const w=C/P,G=H/V,q=C/2,j=H/2,ae=F/2,ie=P+1,z=V+1;let K=0,Y=0;const he=new re;for(let L=0;L<z;L++){const ne=L*G-j;for(let pe=0;pe<ie;pe++){const Se=pe*w-q;he[R]=Se*O,he[y]=ne*U,he[x]=ae,m.push(he.x,he.y,he.z),he[R]=0,he[y]=0,he[x]=F>0?1:-1,g.push(he.x,he.y,he.z),v.push(pe/P),v.push(1-L/V),K+=1}}for(let L=0;L<V;L++)for(let ne=0;ne<P;ne++){const pe=_+ne+ie*L,Se=_+ne+ie*(L+1),$=_+(ne+1)+ie*(L+1),me=_+(ne+1)+ie*L;p.push(pe,Se,me),p.push(Se,$,me),Y+=6}h.addGroup(M,Y,D),M+=Y,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)e[l]=r[l]}return e}function pM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Bv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const mM={clone:Ms,merge:Ln};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Fv extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new re,Ig=new At,zg=new At;class Hn extends Fv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,Ig,zg),i.subVectors(zg,Ig)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,ds=1;class _M extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Hn(fs,ds,e,i);l.layers=this.layers,this.add(l);const u=new Hn(fs,ds,e,i);u.layers=this.layers,this.add(u);const d=new Hn(fs,ds,e,i);d.layers=this.layers,this.add(d);const h=new Hn(fs,ds,e,i);h.layers=this.layers,this.add(h);const p=new Hn(fs,ds,e,i);p.layers=this.layers,this.add(p);const m=new Hn(fs,ds,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Hv extends Vn{constructor(e=[],i=xs,r,l,u,d,h,p,m,g){super(e,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xM extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Es(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new ti(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Ci),new _M(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class dc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(m,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&_>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new dc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Sh extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hd=new re,SM=new re,MM=new ot;class mr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=hd.subVectors(r,i).cross(SM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||MM.getNormalMatrix(e),l=this.coplanarPoint(hd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Dc,bM=new At(.5,.5),hc=new re;class Gv{constructor(e=new mr,i=new mr,r=new mr,l=new mr,u=new mr,d=new mr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],v=l[6],_=l[7],M=l[8],E=l[9],R=l[10],y=l[11],x=l[12],O=l[13],U=l[14],C=l[15];if(r[0].setComponents(p-u,_-m,y-M,C-x).normalize(),r[1].setComponents(p+u,_+m,y+M,C+x).normalize(),r[2].setComponents(p+d,_+g,y+E,C+O).normalize(),r[3].setComponents(p-d,_-g,y-E,C-O).normalize(),r[4].setComponents(p-h,_-v,y-R,C-U).normalize(),i===ia)r[5].setComponents(p+h,_+v,y+R,C+U).normalize();else if(i===wc)r[5].setComponents(h,v,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const i=bM.distanceTo(e.center);return dr.radius=.7071067811865476+i,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hc.x=l.normal.x>0?e.max.x:e.min.x,hc.y=l.normal.y>0?e.max.y:e.min.y,hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mh extends Io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bg=new tn,oh=new Lv,pc=new Dc,mc=new re;class Vv extends kn{constructor(e=new ni,i=new Mh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(l),pc.radius+=u,e.ray.intersectsSphere(pc)===!1)return;Bg.copy(l).invert(),oh.copy(e.ray).applyMatrix4(Bg);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,v=r.attributes.position;if(m!==null){const _=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let E=_,R=M;E<R;E++){const y=m.getX(E);mc.fromBufferAttribute(v,y),Fg(mc,y,p,l,e,i,this)}}else{const _=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let E=_,R=M;E<R;E++)mc.fromBufferAttribute(v,E),Fg(mc,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Fg(o,e,i,r,l,u,d){const h=oh.distanceSqToPoint(o);if(h<i){const p=new re;oh.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class kv extends Vn{constructor(e,i,r=Sr,l,u,d,h=yi,p=yi,m,g=No,v=1){if(g!==No&&g!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bh extends ni{constructor(e=1,i=1,r=1,l=32,u=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const g=[],v=[],_=[],M=[];let E=0;const R=[],y=r/2;let x=0;O(),d===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(M,2));function O(){const C=new re,H=new re;let F=0;const P=(i-e)/r;for(let V=0;V<=u;V++){const D=[],w=V/u,G=w*(i-e)+e;for(let q=0;q<=l;q++){const j=q/l,ae=j*p+h,ie=Math.sin(ae),z=Math.cos(ae);H.x=G*ie,H.y=-w*r+y,H.z=G*z,v.push(H.x,H.y,H.z),C.set(ie,P,z).normalize(),_.push(C.x,C.y,C.z),M.push(j,1-w),D.push(E++)}R.push(D)}for(let V=0;V<l;V++)for(let D=0;D<u;D++){const w=R[D][V],G=R[D+1][V],q=R[D+1][V+1],j=R[D][V+1];(e>0||D!==0)&&(g.push(w,G,j),F+=3),(i>0||D!==u-1)&&(g.push(G,q,j),F+=3)}m.addGroup(x,F,0),x+=F}function U(C){const H=E,F=new At,P=new re;let V=0;const D=C===!0?e:i,w=C===!0?1:-1;for(let q=1;q<=l;q++)v.push(0,y*w,0),_.push(0,w,0),M.push(.5,.5),E++;const G=E;for(let q=0;q<=l;q++){const ae=q/l*p+h,ie=Math.cos(ae),z=Math.sin(ae);P.x=D*z,P.y=y*w,P.z=D*ie,v.push(P.x,P.y,P.z),_.push(0,w,0),F.x=ie*.5+.5,F.y=z*.5*w+.5,M.push(F.x,F.y),E++}for(let q=0;q<l;q++){const j=H+q,ae=G+q;C===!0?g.push(ae,ae+1,j):g.push(ae+1,ae,j),V+=3}m.addGroup(x,V,C===!0?1:2),x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eh extends bh{constructor(e=1,i=1,r=32,l=1,u=!1,d=0,h=Math.PI*2){super(0,e,i,r,l,u,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Eh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends ni{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],d=[];h(l),m(r),g(),this.setAttribute("position",new Dn(u,3)),this.setAttribute("normal",new Dn(u.slice(),3)),this.setAttribute("uv",new Dn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(O){const U=new re,C=new re,H=new re;for(let F=0;F<i.length;F+=3)M(i[F+0],U),M(i[F+1],C),M(i[F+2],H),p(U,C,H,O)}function p(O,U,C,H){const F=H+1,P=[];for(let V=0;V<=F;V++){P[V]=[];const D=O.clone().lerp(C,V/F),w=U.clone().lerp(C,V/F),G=F-V;for(let q=0;q<=G;q++)q===0&&V===F?P[V][q]=D:P[V][q]=D.clone().lerp(w,q/G)}for(let V=0;V<F;V++)for(let D=0;D<2*(F-V)-1;D++){const w=Math.floor(D/2);D%2===0?(_(P[V][w+1]),_(P[V+1][w]),_(P[V][w])):(_(P[V][w+1]),_(P[V+1][w+1]),_(P[V+1][w]))}}function m(O){const U=new re;for(let C=0;C<u.length;C+=3)U.x=u[C+0],U.y=u[C+1],U.z=u[C+2],U.normalize().multiplyScalar(O),u[C+0]=U.x,u[C+1]=U.y,u[C+2]=U.z}function g(){const O=new re;for(let U=0;U<u.length;U+=3){O.x=u[U+0],O.y=u[U+1],O.z=u[U+2];const C=y(O)/2/Math.PI+.5,H=x(O)/Math.PI+.5;d.push(C,1-H)}E(),v()}function v(){for(let O=0;O<d.length;O+=6){const U=d[O+0],C=d[O+2],H=d[O+4],F=Math.max(U,C,H),P=Math.min(U,C,H);F>.9&&P<.1&&(U<.2&&(d[O+0]+=1),C<.2&&(d[O+2]+=1),H<.2&&(d[O+4]+=1))}}function _(O){u.push(O.x,O.y,O.z)}function M(O,U){const C=O*3;U.x=e[C+0],U.y=e[C+1],U.z=e[C+2]}function E(){const O=new re,U=new re,C=new re,H=new re,F=new At,P=new At,V=new At;for(let D=0,w=0;D<u.length;D+=9,w+=6){O.set(u[D+0],u[D+1],u[D+2]),U.set(u[D+3],u[D+4],u[D+5]),C.set(u[D+6],u[D+7],u[D+8]),F.set(d[w+0],d[w+1]),P.set(d[w+2],d[w+3]),V.set(d[w+4],d[w+5]),H.copy(O).add(U).add(C).divideScalar(3);const G=y(H);R(F,w+0,O,G),R(P,w+2,U,G),R(V,w+4,C,G)}}function R(O,U,C,H){H<0&&O.x===1&&(d[U]=O.x-1),C.x===0&&C.z===0&&(d[U]=H/2/Math.PI+.5)}function y(O){return Math.atan2(O.z,-O.x)}function x(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.vertices,e.indices,e.radius,e.details)}}class Th extends zo{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Th(e.radius,e.detail)}}class Uc extends zo{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Uc(e.radius,e.detail)}}class Bo extends ni{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,v=e/h,_=i/p,M=[],E=[],R=[],y=[];for(let x=0;x<g;x++){const O=x*_-d;for(let U=0;U<m;U++){const C=U*v-u;E.push(C,-O,0),R.push(0,0,1),y.push(U/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<h;O++){const U=O+m*x,C=O+m*(x+1),H=O+1+m*(x+1),F=O+1+m*x;M.push(U,C,F),M.push(C,H,F)}this.setIndex(M),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(R,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ah extends ni{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const g=[],v=new re,_=new re,M=[],E=[],R=[],y=[];for(let x=0;x<=r;x++){const O=[],U=x/r;let C=0;x===0&&d===0?C=.5/i:x===r&&p===Math.PI&&(C=-.5/i);for(let H=0;H<=i;H++){const F=H/i;v.x=-e*Math.cos(l+F*u)*Math.sin(d+U*h),v.y=e*Math.cos(d+U*h),v.z=e*Math.sin(l+F*u)*Math.sin(d+U*h),E.push(v.x,v.y,v.z),_.copy(v).normalize(),R.push(_.x,_.y,_.z),y.push(F+C,1-U),O.push(m++)}g.push(O)}for(let x=0;x<r;x++)for(let O=0;O<i;O++){const U=g[x][O+1],C=g[x][O],H=g[x+1][O],F=g[x+1][O+1];(x!==0||d>0)&&M.push(U,C,F),(x!==r-1||p<Math.PI)&&M.push(C,H,F)}this.setIndex(M),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(R,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lc extends zo{constructor(e=1,i=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,l,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Lc(e.radius,e.detail)}}class EM extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TM extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class AM extends Fv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wM extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Hg(o,e,i,r){const l=RM(r);switch(i){case Tv:return o*e;case wv:return o*e/l.components*l.byteLength;case vh:return o*e/l.components*l.byteLength;case Rv:return o*e*2/l.components*l.byteLength;case _h:return o*e*2/l.components*l.byteLength;case Av:return o*e*3/l.components*l.byteLength;case xi:return o*e*4/l.components*l.byteLength;case xh:return o*e*4/l.components*l.byteLength;case xc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pd:case zd:return Math.max(o,16)*Math.max(e,8)/4;case Od:case Id:return Math.max(o,8)*Math.max(e,8)/2;case Bd:case Fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bc:case th:case nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Cv:case ih:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ah:case rh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RM(o){switch(o){case ra:case Mv:return{byteLength:1,components:1};case Ro:case bv:case Uo:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Sr:case ph:case na:return{byteLength:4,components:1};case Ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function CM(o){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,g);else{v.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<v.length;M++){const E=v[_],R=v[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++_,v[_]=R)}v.length=_+1;for(let M=0,E=v.length;M<E;M++){const R=v[M];o.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:NM,alphahash_pars_fragment:DM,alphamap_fragment:UM,alphamap_pars_fragment:LM,alphatest_fragment:OM,alphatest_pars_fragment:PM,aomap_fragment:IM,aomap_pars_fragment:zM,batching_pars_vertex:BM,batching_vertex:FM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:kM,bumpmap_pars_fragment:jM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:eb,defaultnormal_vertex:tb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:ab,emissivemap_pars_fragment:rb,colorspace_fragment:sb,colorspace_pars_fragment:ob,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:hb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:vb,lightmap_pars_fragment:_b,lights_lambert_fragment:xb,lights_lambert_pars_fragment:yb,lights_pars_begin:Sb,lights_toon_fragment:bb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Tb,lights_phong_pars_fragment:Ab,lights_physical_fragment:wb,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:Nb,lights_fragment_end:Db,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Pb,map_fragment:Ib,map_pars_fragment:zb,map_particle_fragment:Bb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:kb,morphnormal_vertex:jb,morphtarget_pars_vertex:Xb,morphtarget_vertex:Wb,normal_fragment_begin:qb,normal_fragment_maps:Yb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:t1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:a1,premultiplied_alpha_fragment:r1,project_vertex:s1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:f1,shadowmap_pars_vertex:d1,shadowmap_vertex:h1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:v1,skinnormal_vertex:_1,specularmap_fragment:x1,specularmap_pars_fragment:y1,tonemapping_fragment:S1,tonemapping_pars_fragment:M1,transmission_fragment:b1,transmission_pars_fragment:E1,uv_pars_fragment:T1,uv_pars_vertex:A1,uv_vertex:w1,worldpos_vertex:R1,background_vert:C1,background_frag:N1,backgroundCube_vert:D1,backgroundCube_frag:U1,cube_vert:L1,cube_frag:O1,depth_vert:P1,depth_frag:I1,distanceRGBA_vert:z1,distanceRGBA_frag:B1,equirect_vert:F1,equirect_frag:H1,linedashed_vert:G1,linedashed_frag:V1,meshbasic_vert:k1,meshbasic_frag:j1,meshlambert_vert:X1,meshlambert_frag:W1,meshmatcap_vert:q1,meshmatcap_frag:Y1,meshnormal_vert:Z1,meshnormal_frag:K1,meshphong_vert:Q1,meshphong_frag:J1,meshphysical_vert:$1,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:aE,shadow_vert:rE,shadow_frag:sE,sprite_vert:oE,sprite_frag:lE},Le={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ri={basic:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Ln([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Ln([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Ln([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Ln([Le.common,Le.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Ln([Le.lights,Le.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ri.physical={uniforms:Ln([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const gc={r:0,b:0,g:0},hr=new sa,cE=new tn;function uE(o,e,i,r,l,u,d){const h=new Nt(0);let p=u===!0?0:1,m,g,v=null,_=0,M=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function R(U){let C=!1;const H=E(U);H===null?x(h,p):H&&H.isColor&&(x(H,1),C=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===Nc)?(g===void 0&&(g=new ti(new Es(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Ms(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(C.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(hr)),g.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Ht,(v!==H||_!==H.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=H,_=H.version,M=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new ti(new Bo(2,2),new ka({name:"BackgroundMaterial",uniforms:Ms(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Ht,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||_!==H.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,v=H,_=H.version,M=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,C){U.getRGB(gc,Bv(o)),r.buffers.color.setClear(gc.r,gc.g,gc.b,C,d)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),p=C,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(h,p)},render:R,addToRenderList:y,dispose:O}}function fE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,d=!1;function h(w,G,q,j,ae){let ie=!1;const z=v(j,q,G);u!==z&&(u=z,m(u.object)),ie=M(w,j,q,ae),ie&&E(w,j,q,ae),ae!==null&&e.update(ae,o.ELEMENT_ARRAY_BUFFER),(ie||d)&&(d=!1,C(w,G,q,j),ae!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function v(w,G,q){const j=q.wireframe===!0;let ae=r[w.id];ae===void 0&&(ae={},r[w.id]=ae);let ie=ae[G.id];ie===void 0&&(ie={},ae[G.id]=ie);let z=ie[j];return z===void 0&&(z=_(p()),ie[j]=z),z}function _(w){const G=[],q=[],j=[];for(let ae=0;ae<i;ae++)G[ae]=0,q[ae]=0,j[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:j,object:w,attributes:{},index:null}}function M(w,G,q,j){const ae=u.attributes,ie=G.attributes;let z=0;const K=q.getAttributes();for(const Y in K)if(K[Y].location>=0){const L=ae[Y];let ne=ie[Y];if(ne===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),L===void 0||L.attribute!==ne||ne&&L.data!==ne.data)return!0;z++}return u.attributesNum!==z||u.index!==j}function E(w,G,q,j){const ae={},ie=G.attributes;let z=0;const K=q.getAttributes();for(const Y in K)if(K[Y].location>=0){let L=ie[Y];L===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const ne={};ne.attribute=L,L&&L.data&&(ne.data=L.data),ae[Y]=ne,z++}u.attributes=ae,u.attributesNum=z,u.index=j}function R(){const w=u.newAttributes;for(let G=0,q=w.length;G<q;G++)w[G]=0}function y(w){x(w,0)}function x(w,G){const q=u.newAttributes,j=u.enabledAttributes,ae=u.attributeDivisors;q[w]=1,j[w]===0&&(o.enableVertexAttribArray(w),j[w]=1),ae[w]!==G&&(o.vertexAttribDivisor(w,G),ae[w]=G)}function O(){const w=u.newAttributes,G=u.enabledAttributes;for(let q=0,j=G.length;q<j;q++)G[q]!==w[q]&&(o.disableVertexAttribArray(q),G[q]=0)}function U(w,G,q,j,ae,ie,z){z===!0?o.vertexAttribIPointer(w,G,q,ae,ie):o.vertexAttribPointer(w,G,q,j,ae,ie)}function C(w,G,q,j){R();const ae=j.attributes,ie=q.getAttributes(),z=G.defaultAttributeValues;for(const K in ie){const Y=ie[K];if(Y.location>=0){let he=ae[K];if(he===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),he!==void 0){const L=he.normalized,ne=he.itemSize,pe=e.get(he);if(pe===void 0)continue;const Se=pe.buffer,$=pe.type,me=pe.bytesPerElement,be=$===o.INT||$===o.UNSIGNED_INT||he.gpuType===ph;if(he.isInterleavedBufferAttribute){const we=he.data,Ce=we.stride,lt=he.offset;if(we.isInstancedInterleavedBuffer){for(let Je=0;Je<Y.locationSize;Je++)x(Y.location+Je,we.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Je=0;Je<Y.locationSize;Je++)y(Y.location+Je);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let Je=0;Je<Y.locationSize;Je++)U(Y.location+Je,ne/Y.locationSize,$,L,Ce*me,(lt+ne/Y.locationSize*Je)*me,be)}else{if(he.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)x(Y.location+we,he.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<Y.locationSize;we++)y(Y.location+we);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let we=0;we<Y.locationSize;we++)U(Y.location+we,ne/Y.locationSize,$,L,ne*me,ne/Y.locationSize*we*me,be)}}else if(z!==void 0){const L=z[K];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Y.location,L);break;case 3:o.vertexAttrib3fv(Y.location,L);break;case 4:o.vertexAttrib4fv(Y.location,L);break;default:o.vertexAttrib1fv(Y.location,L)}}}}O()}function H(){V();for(const w in r){const G=r[w];for(const q in G){const j=G[q];for(const ae in j)g(j[ae].object),delete j[ae];delete G[q]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const q in G){const j=G[q];for(const ae in j)g(j[ae].object),delete j[ae];delete G[q]}delete r[w.id]}function P(w){for(const G in r){const q=r[G];if(q[w.id]===void 0)continue;const j=q[w.id];for(const ae in j)g(j[ae].object),delete j[ae];delete q[w.id]}}function V(){D(),d=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function dE(o,e,i){let r;function l(m){r=m}function u(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,v){v!==0&&(o.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function h(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,r,1)}function p(m,g,v,_){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)d(m[E],g[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,_,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*_[R];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function hE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==xi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const V=P===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ra&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==na&&!V)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:H,maxSamples:F}}function pE(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new mr,h=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const E=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!l||E===null||E.length===0||u&&!y)u?g(null):m();else{const O=u?0:r,U=O*4;let C=x.clippingState||null;p.value=C,C=g(E,_,U,M);for(let H=0;H!==U;++H)C[H]=i[H];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,M,E){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=p.value,E!==!0||y===null){const x=M+R*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let U=0,C=M;U!==R;++U,C+=4)d.copy(v[U]).applyMatrix4(O,h),d.normal.toArray(y,C),y[C+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function mE(o){let e=new WeakMap;function i(d,h){return h===Nd?d.mapping=xs:h===Dd&&(d.mapping=ys),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Dd)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new xM(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ps=4,Gg=[.125,.215,.35,.446,.526,.582],_r=20,pd=new AM,Vg=new Nt;let md=null,gd=0,vd=0,_d=!1;const gr=(1+Math.sqrt(5))/2,hs=1/gr,kg=[new re(-gr,hs,0),new re(gr,hs,0),new re(-hs,0,gr),new re(hs,0,gr),new re(0,gr,-hs),new re(0,gr,hs),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],gE=new re;class jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=gE}=u;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,vd),this._renderer.xr.enabled=_d,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Uo,format:xi,colorSpace:Ss,depthBuffer:!1},l=Xg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vE(u)),this._blurMaterial=_E(u,e,i)}return l}_compileMaterial(e){const i=new ti(this._lodPlanes[0],e);this._renderer.compile(i,pd)}_sceneToCubeUV(e,i,r,l,u){const p=new Hn(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Vg),v.toneMapping=Ga,v.autoClear=!1;const E=new wi({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),R=new ti(new Es,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(Vg),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[O],u.y,u.z)):U===1?(p.up.set(0,0,m[O]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[O],u.z)):(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[O]));const C=this._cubeSize;vc(l,U*C,O>2?C:0,C,C),v.setRenderTarget(l),y&&v.render(R,p),v.render(e,p)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=_,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ti(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;vc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,pd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=kg[(l-u-1)%kg.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ti(this._lodPlanes[l],m),_=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),R=u/E,y=isFinite(u)?1+Math.floor(g*R):_r;y>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const x=[];let O=0;for(let P=0;P<_r;++P){const V=P/R,D=Math.exp(-V*V/2);x.push(D),P===0?O+=D:P<y&&(O+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/O;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-r;const C=this._sizeLods[l],H=3*C*(l>U-ps?l-U+ps:0),F=4*(this._cubeSize-C);vc(i,H,F,3*C,2*C),p.setRenderTarget(i),p.render(v,pd)}}function vE(o){const e=[],i=[],r=[];let l=o;const u=o-ps+1+Gg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-ps?p=Gg[d-o+ps-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,R=3,y=2,x=1,O=new Float32Array(R*E*M),U=new Float32Array(y*E*M),C=new Float32Array(x*E*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,V=F>2?0:-1,D=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];O.set(D,R*E*F),U.set(_,y*E*F);const w=[F,F,F,F,F,F];C.set(w,x*E*F)}const H=new ni;H.setAttribute("position",new jn(O,R)),H.setAttribute("uv",new jn(U,y)),H.setAttribute("faceIndex",new jn(C,x)),e.push(H),l>ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Xg(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function _E(o,e,i){const r=new Float32Array(_r),l=new re(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Wg(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function qg(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xE(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Nd||p===Dd,g=p===xs||p===ys;if(m||g){let v=e.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new jg(o)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new jg(o)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function yE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function SE(o,e,i,r){const l={},u=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",d),delete l[_.id];const M=u.get(_);M&&(e.remove(M),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER)}function m(v){const _=[],M=v.index,E=v.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let U=0,C=O.length;U<C;U+=3){const H=O[U+0],F=O[U+1],P=O[U+2];_.push(H,F,F,P,P,H)}}else if(E!==void 0){const O=E.array;R=E.version;for(let U=0,C=O.length/3-1;U<C;U+=3){const H=U+0,F=U+1,P=U+2;_.push(H,F,F,P,P,H)}}else return;const y=new(Dv(_)?zv:Iv)(_,1);y.version=R;const x=u.get(v);x&&e.remove(x),u.set(v,y)}function g(v){const _=u.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function ME(o,e,i){let r;function l(_){r=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function p(_,M){o.drawElements(r,M,u,_*d),i.update(M,r,1)}function m(_,M,E){E!==0&&(o.drawElementsInstanced(r,M,u,_*d,E),i.update(M,r,E))}function g(_,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,_,0,E);let y=0;for(let x=0;x<E;x++)y+=M[x];i.update(y,r,1)}function v(_,M,E,R){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)m(_[x]/d,M[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,_,0,R,0,E);let x=0;for(let O=0;O<E;O++)x+=M[O]*R[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function bE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function EE(o,e,i){const r=new WeakMap,l=new en;function u(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let w=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let H=h.attributes.position.count*C,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*F*4*v),V=new Uv(P,H,F,v);V.type=na,V.needsUpdate=!0;const D=C*4;for(let G=0;G<v;G++){const q=x[G],j=O[G],ae=U[G],ie=H*F*4*G;for(let z=0;z<q.count;z++){const K=z*D;E===!0&&(l.fromBufferAttribute(q,z),P[ie+K+0]=l.x,P[ie+K+1]=l.y,P[ie+K+2]=l.z,P[ie+K+3]=0),R===!0&&(l.fromBufferAttribute(j,z),P[ie+K+4]=l.x,P[ie+K+5]=l.y,P[ie+K+6]=l.z,P[ie+K+7]=0),y===!0&&(l.fromBufferAttribute(ae,z),P[ie+K+8]=l.x,P[ie+K+9]=l.y,P[ie+K+10]=l.z,P[ie+K+11]=ae.itemSize===4?l.w:1)}}_={count:v,texture:V,size:new At(H,F)},r.set(h,_),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const R=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function TE(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==m&&(_.update(),l.set(_,m))}return v}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const Xv=new Vn,Yg=new kv(1,1),Wv=new Uv,qv=new nM,Yv=new Hv,Zg=[],Kg=[],Qg=new Float32Array(16),Jg=new Float32Array(9),$g=new Float32Array(4);function Ts(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Zg[l];if(u===void 0&&(u=new Float32Array(l),Zg[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Oc(o,e){let i=Kg[e];i===void 0&&(i=new Int32Array(e),Kg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function AE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function wE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function RE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function CE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function NE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;$g.set(r),o.uniformMatrix2fv(this.addr,!1,$g),dn(i,r)}}function DE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;Jg.set(r),o.uniformMatrix3fv(this.addr,!1,Jg),dn(i,r)}}function UE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;Qg.set(r),o.uniformMatrix4fv(this.addr,!1,Qg),dn(i,r)}}function LE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function OE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function PE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function IE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function zE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function BE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function FE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function HE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function GE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yg.compareFunction=Nv,u=Yg):u=Xv,i.setTexture2D(e||u,l)}function VE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||qv,l)}function kE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Yv,l)}function jE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Wv,l)}function XE(o){switch(o){case 5126:return AE;case 35664:return wE;case 35665:return RE;case 35666:return CE;case 35674:return NE;case 35675:return DE;case 35676:return UE;case 5124:case 35670:return LE;case 35667:case 35671:return OE;case 35668:case 35672:return PE;case 35669:case 35673:return IE;case 5125:return zE;case 36294:return BE;case 36295:return FE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return jE}}function WE(o,e){o.uniform1fv(this.addr,e)}function qE(o,e){const i=Ts(e,this.size,2);o.uniform2fv(this.addr,i)}function YE(o,e){const i=Ts(e,this.size,3);o.uniform3fv(this.addr,i)}function ZE(o,e){const i=Ts(e,this.size,4);o.uniform4fv(this.addr,i)}function KE(o,e){const i=Ts(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QE(o,e){const i=Ts(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function JE(o,e){const i=Ts(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $E(o,e){o.uniform1iv(this.addr,e)}function eT(o,e){o.uniform2iv(this.addr,e)}function tT(o,e){o.uniform3iv(this.addr,e)}function nT(o,e){o.uniform4iv(this.addr,e)}function iT(o,e){o.uniform1uiv(this.addr,e)}function aT(o,e){o.uniform2uiv(this.addr,e)}function rT(o,e){o.uniform3uiv(this.addr,e)}function sT(o,e){o.uniform4uiv(this.addr,e)}function oT(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Xv,u[d])}function lT(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||qv,u[d])}function cT(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Yv,u[d])}function uT(o,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Wv,u[d])}function fT(o){switch(o){case 5126:return WE;case 35664:return qE;case 35665:return YE;case 35666:return ZE;case 35674:return KE;case 35675:return QE;case 35676:return JE;case 5124:case 35670:return $E;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}class dT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XE(i.type)}}class hT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fT(i.type)}}class pT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function ev(o,e){o.seq.push(e),o.map[e.id]=e}function mT(o,e,i){const r=o.name,l=r.length;for(xd.lastIndex=0;;){const u=xd.exec(r),d=xd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){ev(i,m===void 0?new dT(h,o,e):new hT(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new pT(h),ev(i,v)),i=v}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);mT(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function tv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const gT=37297;let vT=0;function _T(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const nv=new ot;function xT(o){Tt._getMatrix(nv,Tt.workingColorSpace,o);const e=`mat3( ${nv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function iv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+_T(o.getShaderSource(e),d)}else return l}function yT(o,e){const i=xT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ST(o,e){let i;switch(e){case wS:i="Linear";break;case RS:i="Reinhard";break;case CS:i="Cineon";break;case NS:i="ACESFilmic";break;case US:i="AgX";break;case LS:i="Neutral";break;case DS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new re;function MT(){Tt.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),e=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function ET(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function TT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ao(o){return o!==""}function av(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(o){return o.replace(AT,RT)}const wT=new Map;function RT(o,e){let i=ut[e];if(i===void 0){const r=wT.get(e);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lh(i)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sv(o){return o.replace(CT,NT)}function NT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ov(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function UT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yv:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case AS:e="ENVMAP_BLENDING_ADD";break}return e}function PT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function IT(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=DT(i),m=UT(i),g=LT(i),v=OT(i),_=PT(i),M=bT(i),E=ET(u),R=l.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ao).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ao).join(`
`),x.length>0&&(x+=`
`)):(y=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),x=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ut.tonemapping_pars_fragment:"",i.toneMapping!==Ga?ST("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,yT("linearToOutputTexel",i.outputColorSpace),MT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),d=lh(d),d=av(d,i),d=rv(d,i),h=lh(h),h=av(h,i),h=rv(h,i),d=sv(d),h=sv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=O+y+d,C=O+x+h,H=tv(l,l.VERTEX_SHADER,U),F=tv(l,l.FRAGMENT_SHADER,C);l.attachShader(R,H),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(G){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(R).trim(),j=l.getShaderInfoLog(H).trim(),ae=l.getShaderInfoLog(F).trim();let ie=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,F);else{const K=iv(l,H,"vertex"),Y=iv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+q+`
`+K+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||ae==="")&&(z=!1);z&&(G.diagnostics={runnable:ie,programLog:q,vertexShader:{log:j,prefix:y},fragmentShader:{log:ae,prefix:x}})}l.deleteShader(H),l.deleteShader(F),V=new Ec(l,R),D=TT(l,R)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,gT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=F,this}let zT=0;class BT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new FT(e),i.set(e,r)),r}}class FT{constructor(e){this.id=zT++,this.code=e,this.usedTimes=0}}function HT(o,e,i,r,l,u,d){const h=new Ov,p=new BT,m=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,w,G,q,j){const ae=q.fog,ie=j.geometry,z=D.isMeshStandardMaterial?q.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),Y=K&&K.mapping===Nc?K.image.height:null,he=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const L=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ne=L!==void 0?L.length:0;let pe=0;ie.morphAttributes.position!==void 0&&(pe=1),ie.morphAttributes.normal!==void 0&&(pe=2),ie.morphAttributes.color!==void 0&&(pe=3);let Se,$,me,be;if(he){const bt=Ri[he];Se=bt.vertexShader,$=bt.fragmentShader}else Se=D.vertexShader,$=D.fragmentShader,p.update(D),me=p.getVertexShaderID(D),be=p.getFragmentShaderID(D);const we=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),lt=j.isInstancedMesh===!0,Je=j.isBatchedMesh===!0,Pt=!!D.map,Gt=!!D.matcap,vt=!!K,k=!!D.aoMap,yn=!!D.lightMap,Mt=!!D.bumpMap,pt=!!D.normalMap,ke=!!D.displacementMap,_t=!!D.emissiveMap,Ze=!!D.metalnessMap,rt=!!D.roughnessMap,Qt=D.anisotropy>0,I=D.clearcoat>0,T=D.dispersion>0,se=D.iridescence>0,ge=D.sheen>0,_e=D.transmission>0,fe=Qt&&!!D.anisotropyMap,Pe=I&&!!D.clearcoatMap,De=I&&!!D.clearcoatNormalMap,Ge=I&&!!D.clearcoatRoughnessMap,je=se&&!!D.iridescenceMap,Me=se&&!!D.iridescenceThicknessMap,Ie=ge&&!!D.sheenColorMap,qe=ge&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Re=!!D.specularColorMap,at=!!D.specularIntensityMap,W=_e&&!!D.transmissionMap,Ue=_e&&!!D.thicknessMap,Ee=!!D.gradientMap,ze=!!D.alphaMap,Ae=D.alphaTest>0,ye=!!D.alphaHash,Fe=!!D.extensions;let it=Ga;D.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(it=o.toneMapping);const Ut={shaderID:he,shaderType:D.type,shaderName:D.name,vertexShader:Se,fragmentShader:$,defines:D.defines,customVertexShaderID:me,customFragmentShaderID:be,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Je,batchingColor:Je&&j._colorsTexture!==null,instancing:lt,instancingColor:lt&&j.instanceColor!==null,instancingMorph:lt&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:we===null?o.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ss,alphaToCoverage:!!D.alphaToCoverage,map:Pt,matcap:Gt,envMap:vt,envMapMode:vt&&K.mapping,envMapCubeUVHeight:Y,aoMap:k,lightMap:yn,bumpMap:Mt,normalMap:pt,displacementMap:_&&ke,emissiveMap:_t,normalMapObjectSpace:pt&&D.normalMapType===BS,normalMapTangentSpace:pt&&D.normalMapType===zS,metalnessMap:Ze,roughnessMap:rt,anisotropy:Qt,anisotropyMap:fe,clearcoat:I,clearcoatMap:Pe,clearcoatNormalMap:De,clearcoatRoughnessMap:Ge,dispersion:T,iridescence:se,iridescenceMap:je,iridescenceThicknessMap:Me,sheen:ge,sheenColorMap:Ie,sheenRoughnessMap:qe,specularMap:Ye,specularColorMap:Re,specularIntensityMap:at,transmission:_e,transmissionMap:W,thicknessMap:Ue,gradientMap:Ee,opaque:D.transparent===!1&&D.blending===ms&&D.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ae,alphaHash:ye,combine:D.combine,mapUv:Pt&&R(D.map.channel),aoMapUv:k&&R(D.aoMap.channel),lightMapUv:yn&&R(D.lightMap.channel),bumpMapUv:Mt&&R(D.bumpMap.channel),normalMapUv:pt&&R(D.normalMap.channel),displacementMapUv:ke&&R(D.displacementMap.channel),emissiveMapUv:_t&&R(D.emissiveMap.channel),metalnessMapUv:Ze&&R(D.metalnessMap.channel),roughnessMapUv:rt&&R(D.roughnessMap.channel),anisotropyMapUv:fe&&R(D.anisotropyMap.channel),clearcoatMapUv:Pe&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:De&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:qe&&R(D.sheenRoughnessMap.channel),specularMapUv:Ye&&R(D.specularMap.channel),specularColorMapUv:Re&&R(D.specularColorMap.channel),specularIntensityMapUv:at&&R(D.specularIntensityMap.channel),transmissionMapUv:W&&R(D.transmissionMap.channel),thicknessMapUv:Ue&&R(D.thicknessMap.channel),alphaMapUv:ze&&R(D.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(pt||Qt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ie.attributes.uv&&(Pt||ze),fog:!!ae,useFog:D.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ce,skinning:j.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:Pt&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:_t&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Fe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&D.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function x(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(O(w,D),U(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=E[D.type];let G;if(w){const q=Ri[w];G=mM.clone(q.uniforms)}else G=D.uniforms;return G}function H(D,w){let G;for(let q=0,j=g.length;q<j;q++){const ae=g[q];if(ae.cacheKey===w){G=ae,++G.usedTimes;break}}return G===void 0&&(G=new IT(o,w,D,u),g.push(G)),G}function F(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function P(D){p.remove(D)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:H,releaseProgram:F,releaseShaderCache:P,programs:g,dispose:V}}function GT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function VT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function lv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function cv(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,_,M,E,R,y){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:M,groupOrder:E,renderOrder:v.renderOrder,z:R,group:y},o[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=R,x.group=y),e++,x}function h(v,_,M,E,R,y){const x=d(v,_,M,E,R,y);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function p(v,_,M,E,R,y){const x=d(v,_,M,E,R,y);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function m(v,_){i.length>1&&i.sort(v||VT),r.length>1&&r.sort(_||lv),l.length>1&&l.sort(_||lv)}function g(){for(let v=e,_=o.length;v<_;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function kT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new cv,o.set(r,[d])):l>=u.length?(d=new cv,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function jT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Nt};break;case"SpotLight":i={position:new re,direction:new re,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[e.id]=i,i}}}function XT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let WT=0;function qT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YT(o){const e=new jT,i=XT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new re);const l=new re,u=new tn,d=new tn;function h(m){let g=0,v=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,R=0,y=0,x=0,O=0,U=0,C=0,H=0,F=0,P=0;m.sort(qT);for(let D=0,w=m.length;D<w;D++){const G=m[D],q=G.color,j=G.intensity,ae=G.distance,ie=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=q.r*j,v+=q.g*j,_+=q.b*j;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],j);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ie,r.directionalShadowMatrix[M]=G.shadow.matrix,O++}r.directional[M]=z,M++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(q).multiplyScalar(j),z.distance=ae,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[R]=z;const K=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,K.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[R]=K.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=ie,C++}R++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(q).multiplyScalar(j),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const K=G.shadow,Y=i.get(G);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=ie,r.pointShadowMatrix[E]=G.shadow.matrix,U++}r.point[E]=z,E++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(j),z.groundColor.copy(G.groundColor).multiplyScalar(j),r.hemi[x]=z,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const V=r.hash;(V.directionalLength!==M||V.pointLength!==E||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==O||V.numPointShadows!==U||V.numSpotShadows!==C||V.numSpotMaps!==H||V.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,V.directionalLength=M,V.pointLength=E,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=O,V.numPointShadows=U,V.numSpotShadows=C,V.numSpotMaps=H,V.numLightProbes=P,r.version=WT++)}function p(m,g){let v=0,_=0,M=0,E=0,R=0;const y=g.matrixWorldInverse;for(let x=0,O=m.length;x<O;x++){const U=m[x];if(U.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(U.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:h,setupView:p,state:r}}function uv(o){const e=new YT(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function ZT(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new uv(o),e.set(l,[h])):u>=d.length?(h=new uv(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JT(o,e,i){let r=new Gv;const l=new At,u=new At,d=new en,h=new EM({depthPacking:IS}),p=new TM,m={},g=i.maxTextureSize,v={[Va]:Gn,[Gn]:Va,[ta]:ta},_=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:KT,fragmentShader:QT}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ti(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xv;let x=this.type;this.render=function(F,P,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),q=o.state;q.setBlending(Ha),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=x!==ea&&this.type===ea,ae=x===ea&&this.type!==ea;for(let ie=0,z=F.length;ie<z;ie++){const K=F[ie],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const he=Y.getFrameExtents();if(l.multiply(he),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/he.x),l.x=u.x*he.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/he.y),l.y=u.y*he.y,Y.mapSize.y=u.y)),Y.map===null||j===!0||ae===!0){const ne=this.type!==ea?{minFilter:yi,magFilter:yi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,ne),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const L=Y.getViewportCount();for(let ne=0;ne<L;ne++){const pe=Y.getViewport(ne);d.set(u.x*pe.x,u.y*pe.y,u.x*pe.z,u.y*pe.w),q.viewport(d),Y.updateMatrices(K,ne),r=Y.getFrustum(),C(P,V,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ea&&O(Y,V),Y.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,G)};function O(F,P){const V=e.update(R);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,V,_,R,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,V,M,R,null)}function U(F,P,V,D){let w=null;const G=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)w=G;else if(w=V.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=w.uuid,j=P.uuid;let ae=m[q];ae===void 0&&(ae={},m[q]=ae);let ie=ae[j];ie===void 0&&(ie=w.clone(),ae[j]=ie,P.addEventListener("dispose",H)),w=ie}if(w.visible=P.visible,w.wireframe=P.wireframe,D===ea?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:v[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=o.properties.get(w);q.light=V}return w}function C(F,P,V,D,w){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===ea)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const j=e.update(F),ae=F.material;if(Array.isArray(ae)){const ie=j.groups;for(let z=0,K=ie.length;z<K;z++){const Y=ie[z],he=ae[Y.materialIndex];if(he&&he.visible){const L=U(F,he,D,w);F.onBeforeShadow(o,F,P,V,j,L,Y),o.renderBufferDirect(V,null,j,L,F,Y),F.onAfterShadow(o,F,P,V,j,L,Y)}}}else if(ae.visible){const ie=U(F,ae,D,w);F.onBeforeShadow(o,F,P,V,j,ie,null),o.renderBufferDirect(V,null,j,ie,F,null),F.onAfterShadow(o,F,P,V,j,ie,null)}}const q=F.children;for(let j=0,ae=q.length;j<ae;j++)C(q[j],P,V,D,w)}function H(F){F.target.removeEventListener("dispose",H);for(const V in m){const D=m[V],w=F.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const $T={[bd]:Ed,[Td]:Rd,[Ad]:Cd,[_s]:wd,[Ed]:bd,[Rd]:Td,[Cd]:Ad,[wd]:_s};function eA(o,e){function i(){let W=!1;const Ue=new en;let Ee=null;const ze=new en(0,0,0,0);return{setMask:function(Ae){Ee!==Ae&&!W&&(o.colorMask(Ae,Ae,Ae,Ae),Ee=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,ye,Fe,it,Ut){Ut===!0&&(Ae*=it,ye*=it,Fe*=it),Ue.set(Ae,ye,Fe,it),ze.equals(Ue)===!1&&(o.clearColor(Ae,ye,Fe,it),ze.copy(Ue))},reset:function(){W=!1,Ee=null,ze.set(-1,0,0,0)}}}function r(){let W=!1,Ue=!1,Ee=null,ze=null,Ae=null;return{setReversed:function(ye){if(Ue!==ye){const Fe=e.get("EXT_clip_control");ye?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ue=ye;const it=Ae;Ae=null,this.setClear(it)}},getReversed:function(){return Ue},setTest:function(ye){ye?we(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(ye){Ee!==ye&&!W&&(o.depthMask(ye),Ee=ye)},setFunc:function(ye){if(Ue&&(ye=$T[ye]),ze!==ye){switch(ye){case bd:o.depthFunc(o.NEVER);break;case Ed:o.depthFunc(o.ALWAYS);break;case Td:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case Ad:o.depthFunc(o.EQUAL);break;case wd:o.depthFunc(o.GEQUAL);break;case Rd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Ae!==ye&&(Ue&&(ye=1-ye),o.clearDepth(ye),Ae=ye)},reset:function(){W=!1,Ee=null,ze=null,Ae=null,Ue=!1}}}function l(){let W=!1,Ue=null,Ee=null,ze=null,Ae=null,ye=null,Fe=null,it=null,Ut=null;return{setTest:function(bt){W||(bt?we(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(bt){Ue!==bt&&!W&&(o.stencilMask(bt),Ue=bt)},setFunc:function(bt,Xn,hn){(Ee!==bt||ze!==Xn||Ae!==hn)&&(o.stencilFunc(bt,Xn,hn),Ee=bt,ze=Xn,Ae=hn)},setOp:function(bt,Xn,hn){(ye!==bt||Fe!==Xn||it!==hn)&&(o.stencilOp(bt,Xn,hn),ye=bt,Fe=Xn,it=hn)},setLocked:function(bt){W=bt},setClear:function(bt){Ut!==bt&&(o.clearStencil(bt),Ut=bt)},reset:function(){W=!1,Ue=null,Ee=null,ze=null,Ae=null,ye=null,Fe=null,it=null,Ut=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,M=[],E=null,R=!1,y=null,x=null,O=null,U=null,C=null,H=null,F=null,P=new Nt(0,0,0),V=0,D=!1,w=null,G=null,q=null,j=null,ae=null;const ie=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let he=null,L={};const ne=o.getParameter(o.SCISSOR_BOX),pe=o.getParameter(o.VIEWPORT),Se=new en().fromArray(ne),$=new en().fromArray(pe);function me(W,Ue,Ee,ze){const Ae=new Uint8Array(4),ye=o.createTexture();o.bindTexture(W,ye),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<Ee;Fe++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,Ae):o.texImage2D(Ue+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ae);return ye}const be={};be[o.TEXTURE_2D]=me(o.TEXTURE_2D,o.TEXTURE_2D,1),be[o.TEXTURE_CUBE_MAP]=me(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[o.TEXTURE_2D_ARRAY]=me(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),be[o.TEXTURE_3D]=me(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),we(o.DEPTH_TEST),d.setFunc(_s),Mt(!1),pt(mg),we(o.CULL_FACE),k(Ha);function we(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Ce(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function lt(W,Ue){return v[W]!==Ue?(o.bindFramebuffer(W,Ue),v[W]=Ue,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ue),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Je(W,Ue){let Ee=M,ze=!1;if(W){Ee=_.get(Ue),Ee===void 0&&(Ee=[],_.set(Ue,Ee));const Ae=W.textures;if(Ee.length!==Ae.length||Ee[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,Fe=Ae.length;ye<Fe;ye++)Ee[ye]=o.COLOR_ATTACHMENT0+ye;Ee.length=Ae.length,ze=!0}}else Ee[0]!==o.BACK&&(Ee[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Ee)}function Pt(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const Gt={[vr]:o.FUNC_ADD,[lS]:o.FUNC_SUBTRACT,[cS]:o.FUNC_REVERSE_SUBTRACT};Gt[uS]=o.MIN,Gt[fS]=o.MAX;const vt={[dS]:o.ZERO,[hS]:o.ONE,[pS]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[yS]:o.SRC_ALPHA_SATURATE,[_S]:o.DST_COLOR,[gS]:o.DST_ALPHA,[mS]:o.ONE_MINUS_SRC_COLOR,[Md]:o.ONE_MINUS_SRC_ALPHA,[xS]:o.ONE_MINUS_DST_COLOR,[vS]:o.ONE_MINUS_DST_ALPHA,[SS]:o.CONSTANT_COLOR,[MS]:o.ONE_MINUS_CONSTANT_COLOR,[bS]:o.CONSTANT_ALPHA,[ES]:o.ONE_MINUS_CONSTANT_ALPHA};function k(W,Ue,Ee,ze,Ae,ye,Fe,it,Ut,bt){if(W===Ha){R===!0&&(Ce(o.BLEND),R=!1);return}if(R===!1&&(we(o.BLEND),R=!0),W!==oS){if(W!==y||bt!==D){if((x!==vr||C!==vr)&&(o.blendEquation(o.FUNC_ADD),x=vr,C=vr),bt)switch(W){case ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tc:o.blendFunc(o.ONE,o.ONE);break;case gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case gg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,U=null,H=null,F=null,P.set(0,0,0),V=0,y=W,D=bt}return}Ae=Ae||Ue,ye=ye||Ee,Fe=Fe||ze,(Ue!==x||Ae!==C)&&(o.blendEquationSeparate(Gt[Ue],Gt[Ae]),x=Ue,C=Ae),(Ee!==O||ze!==U||ye!==H||Fe!==F)&&(o.blendFuncSeparate(vt[Ee],vt[ze],vt[ye],vt[Fe]),O=Ee,U=ze,H=ye,F=Fe),(it.equals(P)===!1||Ut!==V)&&(o.blendColor(it.r,it.g,it.b,Ut),P.copy(it),V=Ut),y=W,D=!1}function yn(W,Ue){W.side===ta?Ce(o.CULL_FACE):we(o.CULL_FACE);let Ee=W.side===Gn;Ue&&(Ee=!Ee),Mt(Ee),W.blending===ms&&W.transparent===!1?k(Ha):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const ze=W.stencilWrite;h.setTest(ze),ze&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_t(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?we(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(W){w!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),w=W)}function pt(W){W!==aS?(we(o.CULL_FACE),W!==G&&(W===mg?o.cullFace(o.BACK):W===rS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),G=W}function ke(W){W!==q&&(z&&o.lineWidth(W),q=W)}function _t(W,Ue,Ee){W?(we(o.POLYGON_OFFSET_FILL),(j!==Ue||ae!==Ee)&&(o.polygonOffset(Ue,Ee),j=Ue,ae=Ee)):Ce(o.POLYGON_OFFSET_FILL)}function Ze(W){W?we(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function rt(W){W===void 0&&(W=o.TEXTURE0+ie-1),he!==W&&(o.activeTexture(W),he=W)}function Qt(W,Ue,Ee){Ee===void 0&&(he===null?Ee=o.TEXTURE0+ie-1:Ee=he);let ze=L[Ee];ze===void 0&&(ze={type:void 0,texture:void 0},L[Ee]=ze),(ze.type!==W||ze.texture!==Ue)&&(he!==Ee&&(o.activeTexture(Ee),he=Ee),o.bindTexture(W,Ue||be[W]),ze.type=W,ze.texture=Ue)}function I(){const W=L[he];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(W){Se.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function qe(W){$.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),$.copy(W))}function Ye(W,Ue){let Ee=m.get(Ue);Ee===void 0&&(Ee=new WeakMap,m.set(Ue,Ee));let ze=Ee.get(W);ze===void 0&&(ze=o.getUniformBlockIndex(Ue,W.name),Ee.set(W,ze))}function Re(W,Ue){const ze=m.get(Ue).get(W);p.get(Ue)!==ze&&(o.uniformBlockBinding(Ue,ze,W.__bindingPointIndex),p.set(Ue,ze))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},he=null,L={},v={},_=new WeakMap,M=[],E=null,R=!1,y=null,x=null,O=null,U=null,C=null,H=null,F=null,P=new Nt(0,0,0),V=0,D=!1,w=null,G=null,q=null,j=null,ae=null,Se.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:we,disable:Ce,bindFramebuffer:lt,drawBuffers:Je,useProgram:Pt,setBlending:k,setMaterial:yn,setFlipSided:Mt,setCullFace:pt,setLineWidth:ke,setPolygonOffset:_t,setScissorTest:Ze,activeTexture:rt,bindTexture:Qt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:se,texImage2D:je,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Re,texStorage2D:De,texStorage3D:Ge,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:Pe,scissor:Ie,viewport:qe,reset:at}}function tA(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,g=new WeakMap;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return M?new OffscreenCanvas(I,T):Rc("canvas")}function R(I,T,se){let ge=1;const _e=Qt(I);if((_e.width>se||_e.height>se)&&(ge=se/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(ge*_e.width),Pe=Math.floor(ge*_e.height);v===void 0&&(v=E(fe,Pe));const De=T?E(fe,Pe):v;return De.width=fe,De.height=Pe,De.getContext("2d").drawImage(I,0,0,fe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Pe+")."),De}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){o.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(I,T,se,ge,_e=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=T;if(T===o.RED&&(se===o.FLOAT&&(fe=o.R32F),se===o.HALF_FLOAT&&(fe=o.R16F),se===o.UNSIGNED_BYTE&&(fe=o.R8)),T===o.RED_INTEGER&&(se===o.UNSIGNED_BYTE&&(fe=o.R8UI),se===o.UNSIGNED_SHORT&&(fe=o.R16UI),se===o.UNSIGNED_INT&&(fe=o.R32UI),se===o.BYTE&&(fe=o.R8I),se===o.SHORT&&(fe=o.R16I),se===o.INT&&(fe=o.R32I)),T===o.RG&&(se===o.FLOAT&&(fe=o.RG32F),se===o.HALF_FLOAT&&(fe=o.RG16F),se===o.UNSIGNED_BYTE&&(fe=o.RG8)),T===o.RG_INTEGER&&(se===o.UNSIGNED_BYTE&&(fe=o.RG8UI),se===o.UNSIGNED_SHORT&&(fe=o.RG16UI),se===o.UNSIGNED_INT&&(fe=o.RG32UI),se===o.BYTE&&(fe=o.RG8I),se===o.SHORT&&(fe=o.RG16I),se===o.INT&&(fe=o.RG32I)),T===o.RGB_INTEGER&&(se===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),se===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),se===o.UNSIGNED_INT&&(fe=o.RGB32UI),se===o.BYTE&&(fe=o.RGB8I),se===o.SHORT&&(fe=o.RGB16I),se===o.INT&&(fe=o.RGB32I)),T===o.RGBA_INTEGER&&(se===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),se===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),se===o.UNSIGNED_INT&&(fe=o.RGBA32UI),se===o.BYTE&&(fe=o.RGBA8I),se===o.SHORT&&(fe=o.RGBA16I),se===o.INT&&(fe=o.RGBA32I)),T===o.RGB&&se===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),T===o.RGBA){const Pe=_e?Ac:Tt.getTransfer(ge);se===o.FLOAT&&(fe=o.RGBA32F),se===o.HALF_FLOAT&&(fe=o.RGBA16F),se===o.UNSIGNED_BYTE&&(fe=Pe===Ht?o.SRGB8_ALPHA8:o.RGBA8),se===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),se===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(I,T){let se;return I?T===null||T===Sr||T===Co?se=o.DEPTH24_STENCIL8:T===na?se=o.DEPTH32F_STENCIL8:T===Ro&&(se=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Sr||T===Co?se=o.DEPTH_COMPONENT24:T===na?se=o.DEPTH_COMPONENT32F:T===Ro&&(se=o.DEPTH_COMPONENT16),se}function H(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==yi&&I.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function F(I){const T=I.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&g.delete(T)}function P(I){const T=I.target;T.removeEventListener("dispose",P),w(T)}function V(I){const T=r.get(I);if(T.__webglInit===void 0)return;const se=I.source,ge=_.get(se);if(ge){const _e=ge[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&D(I),Object.keys(ge).length===0&&_.delete(se)}r.remove(I)}function D(I){const T=r.get(I);o.deleteTexture(T.__webglTexture);const se=I.source,ge=_.get(se);delete ge[T.__cacheKey],d.memory.textures--}function w(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let _e=0;_e<T.__webglFramebuffer[ge].length;_e++)o.deleteFramebuffer(T.__webglFramebuffer[ge][_e]);else o.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[ge]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const se=I.textures;for(let ge=0,_e=se.length;ge<_e;ge++){const fe=r.get(se[ge]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(se[ge])}r.remove(I)}let G=0;function q(){G=0}function j(){const I=G;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),G+=1,I}function ae(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function ie(I,T){const se=r.get(I);if(I.isVideoTexture&&Ze(I),I.isRenderTargetTexture===!1&&I.version>0&&se.__version!==I.version){const ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(se,I,T);return}}i.bindTexture(o.TEXTURE_2D,se.__webglTexture,o.TEXTURE0+T)}function z(I,T){const se=r.get(I);if(I.version>0&&se.__version!==I.version){be(se,I,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,se.__webglTexture,o.TEXTURE0+T)}function K(I,T){const se=r.get(I);if(I.version>0&&se.__version!==I.version){be(se,I,T);return}i.bindTexture(o.TEXTURE_3D,se.__webglTexture,o.TEXTURE0+T)}function Y(I,T){const se=r.get(I);if(I.version>0&&se.__version!==I.version){we(se,I,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture,o.TEXTURE0+T)}const he={[Ud]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Ld]:o.MIRRORED_REPEAT},L={[yi]:o.NEAREST,[OS]:o.NEAREST_MIPMAP_NEAREST,[Zl]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[kf]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},ne={[FS]:o.NEVER,[XS]:o.ALWAYS,[HS]:o.LESS,[Nv]:o.LEQUAL,[GS]:o.EQUAL,[jS]:o.GEQUAL,[VS]:o.GREATER,[kS]:o.NOTEQUAL};function pe(I,T){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===kf||T.magFilter===Zl||T.magFilter===yr||T.minFilter===Ci||T.minFilter===kf||T.minFilter===Zl||T.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,he[T.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,he[T.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,he[T.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,L[T.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==Zl&&T.minFilter!==yr||T.type===na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Se(I,T){let se=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",F));const ge=T.source;let _e=_.get(ge);_e===void 0&&(_e={},_.set(ge,_e));const fe=ae(T);if(fe!==I.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,se=!0),_e[fe].usedTimes++;const Pe=_e[I.__cacheKey];Pe!==void 0&&(_e[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(T)),I.__cacheKey=fe,I.__webglTexture=_e[fe].texture}return se}function $(I,T,se){return Math.floor(Math.floor(I/se)/T)}function me(I,T,se,ge){const fe=I.updateRanges;if(fe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,se,ge,T.data);else{fe.sort((Me,Ie)=>Me.start-Ie.start);let Pe=0;for(let Me=1;Me<fe.length;Me++){const Ie=fe[Pe],qe=fe[Me],Ye=Ie.start+Ie.count,Re=$(qe.start,T.width,4),at=$(Ie.start,T.width,4);qe.start<=Ye+1&&Re===at&&$(qe.start+qe.count-1,T.width,4)===Re?Ie.count=Math.max(Ie.count,qe.start+qe.count-Ie.start):(++Pe,fe[Pe]=qe)}fe.length=Pe+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),Ge=o.getParameter(o.UNPACK_SKIP_PIXELS),je=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Me=0,Ie=fe.length;Me<Ie;Me++){const qe=fe[Me],Ye=Math.floor(qe.start/4),Re=Math.ceil(qe.count/4),at=Ye%T.width,W=Math.floor(Ye/T.width),Ue=Re,Ee=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,at),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,at,W,Ue,Ee,se,ge,T.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,je)}}function be(I,T,se){let ge=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=o.TEXTURE_3D);const _e=Se(I,T),fe=T.source;i.bindTexture(ge,I.__webglTexture,o.TEXTURE0+se);const Pe=r.get(fe);if(fe.version!==Pe.__version||_e===!0){i.activeTexture(o.TEXTURE0+se);const De=Tt.getPrimaries(Tt.workingColorSpace),Ge=T.colorSpace===Fa?null:Tt.getPrimaries(T.colorSpace),je=T.colorSpace===Fa||De===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Me=R(T.image,!1,l.maxTextureSize);Me=rt(T,Me);const Ie=u.convert(T.format,T.colorSpace),qe=u.convert(T.type);let Ye=U(T.internalFormat,Ie,qe,T.colorSpace,T.isVideoTexture);pe(ge,T);let Re;const at=T.mipmaps,W=T.isVideoTexture!==!0,Ue=Pe.__version===void 0||_e===!0,Ee=fe.dataReady,ze=H(T,Me);if(T.isDepthTexture)Ye=C(T.format===Do,T.type),Ue&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ye,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Ye,Me.width,Me.height,0,Ie,qe,null));else if(T.isDataTexture)if(at.length>0){W&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Ye,at[0].width,at[0].height);for(let Ae=0,ye=at.length;Ae<ye;Ae++)Re=at[Ae],W?Ee&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Re.width,Re.height,Ie,qe,Re.data):i.texImage2D(o.TEXTURE_2D,Ae,Ye,Re.width,Re.height,0,Ie,qe,Re.data);T.generateMipmaps=!1}else W?(Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Ye,Me.width,Me.height),Ee&&me(T,Me,Ie,qe)):i.texImage2D(o.TEXTURE_2D,0,Ye,Me.width,Me.height,0,Ie,qe,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Ye,at[0].width,at[0].height,Me.depth);for(let Ae=0,ye=at.length;Ae<ye;Ae++)if(Re=at[Ae],T.format!==xi)if(Ie!==null)if(W){if(Ee)if(T.layerUpdates.size>0){const Fe=Hg(Re.width,Re.height,T.format,T.type);for(const it of T.layerUpdates){const Ut=Re.data.subarray(it*Fe/Re.data.BYTES_PER_ELEMENT,(it+1)*Fe/Re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,it,Re.width,Re.height,1,Ie,Ut)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,Re.width,Re.height,Me.depth,Ie,Re.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ae,Ye,Re.width,Re.height,Me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,Re.width,Re.height,Me.depth,Ie,qe,Re.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ae,Ye,Re.width,Re.height,Me.depth,0,Ie,qe,Re.data)}else{W&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Ye,at[0].width,at[0].height);for(let Ae=0,ye=at.length;Ae<ye;Ae++)Re=at[Ae],T.format!==xi?Ie!==null?W?Ee&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ae,0,0,Re.width,Re.height,Ie,Re.data):i.compressedTexImage2D(o.TEXTURE_2D,Ae,Ye,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Re.width,Re.height,Ie,qe,Re.data):i.texImage2D(o.TEXTURE_2D,Ae,Ye,Re.width,Re.height,0,Ie,qe,Re.data)}else if(T.isDataArrayTexture)if(W){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Ye,Me.width,Me.height,Me.depth),Ee)if(T.layerUpdates.size>0){const Ae=Hg(Me.width,Me.height,T.format,T.type);for(const ye of T.layerUpdates){const Fe=Me.data.subarray(ye*Ae/Me.data.BYTES_PER_ELEMENT,(ye+1)*Ae/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ye,Me.width,Me.height,1,Ie,qe,Fe)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ie,qe,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,Me.width,Me.height,Me.depth,0,Ie,qe,Me.data);else if(T.isData3DTexture)W?(Ue&&i.texStorage3D(o.TEXTURE_3D,ze,Ye,Me.width,Me.height,Me.depth),Ee&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ie,qe,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Ye,Me.width,Me.height,Me.depth,0,Ie,qe,Me.data);else if(T.isFramebufferTexture){if(Ue)if(W)i.texStorage2D(o.TEXTURE_2D,ze,Ye,Me.width,Me.height);else{let Ae=Me.width,ye=Me.height;for(let Fe=0;Fe<ze;Fe++)i.texImage2D(o.TEXTURE_2D,Fe,Ye,Ae,ye,0,Ie,qe,null),Ae>>=1,ye>>=1}}else if(at.length>0){if(W&&Ue){const Ae=Qt(at[0]);i.texStorage2D(o.TEXTURE_2D,ze,Ye,Ae.width,Ae.height)}for(let Ae=0,ye=at.length;Ae<ye;Ae++)Re=at[Ae],W?Ee&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Ie,qe,Re):i.texImage2D(o.TEXTURE_2D,Ae,Ye,Ie,qe,Re);T.generateMipmaps=!1}else if(W){if(Ue){const Ae=Qt(Me);i.texStorage2D(o.TEXTURE_2D,ze,Ye,Ae.width,Ae.height)}Ee&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ie,qe,Me)}else i.texImage2D(o.TEXTURE_2D,0,Ye,Ie,qe,Me);y(T)&&x(ge),Pe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function we(I,T,se){if(T.image.length!==6)return;const ge=Se(I,T),_e=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+se);const fe=r.get(_e);if(_e.version!==fe.__version||ge===!0){i.activeTexture(o.TEXTURE0+se);const Pe=Tt.getPrimaries(Tt.workingColorSpace),De=T.colorSpace===Fa?null:Tt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Fa||Pe===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const je=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let ye=0;ye<6;ye++)!je&&!Me?Ie[ye]=R(T.image[ye],!0,l.maxCubemapSize):Ie[ye]=Me?T.image[ye].image:T.image[ye],Ie[ye]=rt(T,Ie[ye]);const qe=Ie[0],Ye=u.convert(T.format,T.colorSpace),Re=u.convert(T.type),at=U(T.internalFormat,Ye,Re,T.colorSpace),W=T.isVideoTexture!==!0,Ue=fe.__version===void 0||ge===!0,Ee=_e.dataReady;let ze=H(T,qe);pe(o.TEXTURE_CUBE_MAP,T);let Ae;if(je){W&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,at,qe.width,qe.height);for(let ye=0;ye<6;ye++){Ae=Ie[ye].mipmaps;for(let Fe=0;Fe<Ae.length;Fe++){const it=Ae[Fe];T.format!==xi?Ye!==null?W?Ee&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,it.width,it.height,Ye,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,0,0,it.width,it.height,Ye,Re,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe,at,it.width,it.height,0,Ye,Re,it.data)}}}else{if(Ae=T.mipmaps,W&&Ue){Ae.length>0&&ze++;const ye=Qt(Ie[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Me){W?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ie[ye].width,Ie[ye].height,Ye,Re,Ie[ye].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Ie[ye].width,Ie[ye].height,0,Ye,Re,Ie[ye].data);for(let Fe=0;Fe<Ae.length;Fe++){const Ut=Ae[Fe].image[ye].image;W?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,Ut.width,Ut.height,Ye,Re,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,at,Ut.width,Ut.height,0,Ye,Re,Ut.data)}}else{W?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ye,Re,Ie[ye]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Ye,Re,Ie[ye]);for(let Fe=0;Fe<Ae.length;Fe++){const it=Ae[Fe];W?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,0,0,Ye,Re,it.image[ye]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe+1,at,Ye,Re,it.image[ye])}}}y(T)&&x(o.TEXTURE_CUBE_MAP),fe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ce(I,T,se,ge,_e,fe){const Pe=u.convert(se.format,se.colorSpace),De=u.convert(se.type),Ge=U(se.internalFormat,Pe,De,se.colorSpace),je=r.get(T),Me=r.get(se);if(Me.__renderTarget=T,!je.__hasExternalTextures){const Ie=Math.max(1,T.width>>fe),qe=Math.max(1,T.height>>fe);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?i.texImage3D(_e,fe,Ge,Ie,qe,T.depth,0,Pe,De,null):i.texImage2D(_e,fe,Ge,Ie,qe,0,Pe,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),_t(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,_e,Me.__webglTexture,0,ke(T)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,_e,Me.__webglTexture,fe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(I,T,se){if(o.bindRenderbuffer(o.RENDERBUFFER,I),T.depthBuffer){const ge=T.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,fe=C(T.stencilBuffer,_e),Pe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=ke(T);_t(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,fe,T.width,T.height):se?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,fe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,fe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,I)}else{const ge=T.textures;for(let _e=0;_e<ge.length;_e++){const fe=ge[_e],Pe=u.convert(fe.format,fe.colorSpace),De=u.convert(fe.type),Ge=U(fe.internalFormat,Pe,De,fe.colorSpace),je=ke(T);se&&_t(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Ge,T.width,T.height):_t(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,Ge,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ge,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Je(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie(T.depthTexture,0);const _e=ge.__webglTexture,fe=ke(T);if(T.depthTexture.format===No)_t(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(T.depthTexture.format===Do)_t(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Pt(I){const T=r.get(I),se=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=ge}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");const ge=I.texture.mipmaps;ge&&ge.length>0?Je(T.__webglFramebuffer[0],I):Je(T.__webglFramebuffer,I)}else if(se){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=o.createRenderbuffer(),lt(T.__webglDepthbuffer[ge],I,!1);else{const _e=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,fe)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),lt(T.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,fe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(I,T,se){const ge=r.get(I);T!==void 0&&Ce(ge.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),se!==void 0&&Pt(I)}function vt(I){const T=I.texture,se=r.get(I),ge=r.get(T);I.addEventListener("dispose",P);const _e=I.textures,fe=I.isWebGLCubeRenderTarget===!0,Pe=_e.length>1;if(Pe||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=T.version,d.memory.textures++),fe){se.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer[De]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)se.__webglFramebuffer[De][Ge]=o.createFramebuffer()}else se.__webglFramebuffer[De]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)se.__webglFramebuffer[De]=o.createFramebuffer()}else se.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let De=0,Ge=_e.length;De<Ge;De++){const je=r.get(_e[De]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&_t(I)===!1){se.__webglMultisampledFramebuffer=o.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let De=0;De<_e.length;De++){const Ge=_e[De];se.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,se.__webglColorRenderbuffer[De]);const je=u.convert(Ge.format,Ge.colorSpace),Me=u.convert(Ge.type),Ie=U(Ge.internalFormat,je,Me,Ge.colorSpace,I.isXRRenderTarget===!0),qe=ke(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Ie,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,se.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(se.__webglDepthRenderbuffer=o.createRenderbuffer(),lt(se.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),pe(o.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Ce(se.__webglFramebuffer[De][Ge],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ge);else Ce(se.__webglFramebuffer[De],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(T)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let De=0,Ge=_e.length;De<Ge;De++){const je=_e[De],Me=r.get(je);i.bindTexture(o.TEXTURE_2D,Me.__webglTexture),pe(o.TEXTURE_2D,je),Ce(se.__webglFramebuffer,I,je,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),y(je)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,ge.__webglTexture),pe(De,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)Ce(se.__webglFramebuffer[Ge],I,T,o.COLOR_ATTACHMENT0,De,Ge);else Ce(se.__webglFramebuffer,I,T,o.COLOR_ATTACHMENT0,De,0);y(T)&&x(De),i.unbindTexture()}I.depthBuffer&&Pt(I)}function k(I){const T=I.textures;for(let se=0,ge=T.length;se<ge;se++){const _e=T[se];if(y(_e)){const fe=O(I),Pe=r.get(_e).__webglTexture;i.bindTexture(fe,Pe),x(fe),i.unbindTexture()}}}const yn=[],Mt=[];function pt(I){if(I.samples>0){if(_t(I)===!1){const T=I.textures,se=I.width,ge=I.height;let _e=o.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=r.get(I),De=T.length>1;if(De)for(let je=0;je<T.length;je++)i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=I.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let je=0;je<T.length;je++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[je]);const Me=r.get(T[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,se,ge,0,0,se,ge,_e,o.NEAREST),p===!0&&(yn.length=0,Mt.length=0,yn.push(o.COLOR_ATTACHMENT0+je),I.depthBuffer&&I.resolveDepthBuffer===!1&&(yn.push(fe),Mt.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Mt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,yn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let je=0;je<T.length;je++){i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[je]);const Me=r.get(T[je]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const T=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ke(I){return Math.min(l.maxSamples,I.samples)}function _t(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(I){const T=d.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function rt(I,T){const se=I.colorSpace,ge=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||se!==Ss&&se!==Fa&&(Tt.getTransfer(se)===Ht?(ge!==xi||_e!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),T}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=ie,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Gt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=_t}function nA(o,e){function i(r,l=Fa){let u;const d=Tt.getTransfer(l);if(r===ra)return o.UNSIGNED_BYTE;if(r===mh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===gh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Mv)return o.BYTE;if(r===bv)return o.SHORT;if(r===Ro)return o.UNSIGNED_SHORT;if(r===ph)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===Tv)return o.ALPHA;if(r===Av)return o.RGB;if(r===xi)return o.RGBA;if(r===No)return o.DEPTH_COMPONENT;if(r===Do)return o.DEPTH_STENCIL;if(r===wv)return o.RED;if(r===vh)return o.RED_INTEGER;if(r===Rv)return o.RG;if(r===_h)return o.RG_INTEGER;if(r===xh)return o.RGBA_INTEGER;if(r===xc||r===yc||r===Sc||r===Mc)if(d===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Pd||r===Id||r===zd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bd||r===Fd||r===Hd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Bd||r===Fd)return d===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gd||r===Vd||r===kd||r===jd||r===Xd||r===Wd||r===qd||r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Gd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc||r===th||r===nh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bc)return d===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===th)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cv||r===ih||r===ah||r===rh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ih)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ah)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Vn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ka({vertexShader:iA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ti(new Bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends bs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,M=null,E=null;const R=new rA,y=i.getContextAttributes();let x=null,O=null;const U=[],C=[],H=new At;let F=null;const P=new Hn;P.viewport=new en;const V=new Hn;V.viewport=new en;const D=[P,V],w=new wM;let G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let me=U[$];return me===void 0&&(me=new dd,U[$]=me),me.getTargetRaySpace()},this.getControllerGrip=function($){let me=U[$];return me===void 0&&(me=new dd,U[$]=me),me.getGripSpace()},this.getHand=function($){let me=U[$];return me===void 0&&(me=new dd,U[$]=me),me.getHandSpace()};function j($){const me=C.indexOf($.inputSource);if(me===-1)return;const be=U[me];be!==void 0&&(be.update($.inputSource,$.frame,m||d),be.dispatchEvent({type:$.type,data:$.inputSource}))}function ae(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",ae),l.removeEventListener("inputsourceschange",ie);for(let $=0;$<U.length;$++){const me=C[$];me!==null&&(C[$]=null,U[$].disconnect(me))}G=null,q=null,R.reset(),e.setRenderTarget(x),M=null,_=null,v=null,l=null,O=null,Se.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",ae),l.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,we=null,Ce=null;y.depth&&(Ce=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=y.stencil?Do:No,we=y.stencil?Co:Sr);const lt={colorFormat:i.RGBA8,depthFormat:Ce,scaleFactor:u};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(lt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Mr(_.textureWidth,_.textureHeight,{format:xi,type:ra,depthTexture:new kv(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Mr(M.framebufferWidth,M.framebufferHeight,{format:xi,type:ra,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Se.setContext(l),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ie($){for(let me=0;me<$.removed.length;me++){const be=$.removed[me],we=C.indexOf(be);we>=0&&(C[we]=null,U[we].disconnect(be))}for(let me=0;me<$.added.length;me++){const be=$.added[me];let we=C.indexOf(be);if(we===-1){for(let lt=0;lt<U.length;lt++)if(lt>=C.length){C.push(be),we=lt;break}else if(C[lt]===null){C[lt]=be,we=lt;break}if(we===-1)break}const Ce=U[we];Ce&&Ce.connect(be)}}const z=new re,K=new re;function Y($,me,be){z.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(be.matrixWorld);const we=z.distanceTo(K),Ce=me.projectionMatrix.elements,lt=be.projectionMatrix.elements,Je=Ce[14]/(Ce[10]-1),Pt=Ce[14]/(Ce[10]+1),Gt=(Ce[9]+1)/Ce[5],vt=(Ce[9]-1)/Ce[5],k=(Ce[8]-1)/Ce[0],yn=(lt[8]+1)/lt[0],Mt=Je*k,pt=Je*yn,ke=we/(-k+yn),_t=ke*-k;if(me.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_t),$.translateZ(ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ze=Je+ke,rt=Pt+ke,Qt=Mt-_t,I=pt+(we-_t),T=Gt*Pt/rt*Ze,se=vt*Pt/rt*Ze;$.projectionMatrix.makePerspective(Qt,I,T,se,Ze,rt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,me){me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let me=$.near,be=$.far;R.texture!==null&&(R.depthNear>0&&(me=R.depthNear),R.depthFar>0&&(be=R.depthFar)),w.near=V.near=P.near=me,w.far=V.far=P.far=be,(G!==w.near||q!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,q=w.far),P.layers.mask=$.layers.mask|2,V.layers.mask=$.layers.mask|4,w.layers.mask=P.layers.mask|V.layers.mask;const we=$.parent,Ce=w.cameras;he(w,we);for(let lt=0;lt<Ce.length;lt++)he(Ce[lt],we);Ce.length===2?Y(w,P,V):w.projectionMatrix.copy(P.projectionMatrix),L($,w,we)};function L($,me,be){be===null?$.matrix.copy(me.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function($){p=$,_!==null&&(_.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let ne=null;function pe($,me){if(g=me.getViewerPose(m||d),E=me,g!==null){const be=g.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let we=!1;be.length!==w.cameras.length&&(w.cameras.length=0,we=!0);for(let Je=0;Je<be.length;Je++){const Pt=be[Je];let Gt=null;if(M!==null)Gt=M.getViewport(Pt);else{const k=v.getViewSubImage(_,Pt);Gt=k.viewport,Je===0&&(e.setRenderTargetTextures(O,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(O))}let vt=D[Je];vt===void 0&&(vt=new Hn,vt.layers.enable(Je),vt.viewport=new en,D[Je]=vt),vt.matrix.fromArray(Pt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Pt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Je===0&&(w.matrix.copy(vt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),we===!0&&w.cameras.push(vt)}const Ce=l.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Je=v.getDepthInformation(be[0]);Je&&Je.isValid&&Je.texture&&R.init(e,Je,l.renderState)}}for(let be=0;be<U.length;be++){const we=C[be],Ce=U[be];we!==null&&Ce!==void 0&&Ce.update(we,me,m||d)}ne&&ne($,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Se=new jv;Se.setAnimationLoop(pe),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const pr=new sa,oA=new tn;function lA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Bv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,O,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,C)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),R(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,O,U):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Gn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Gn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),U=O.envMap,C=O.envMapRotation;U&&(y.envMap.value=U,pr.copy(C),pr.x*=-1,pr.y*=-1,pr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),y.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(pr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,O,U){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=U*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function cA(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const C=U.program;r.uniformBlockBinding(O,C)}function m(O,U){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",y));const H=U.program;r.updateUBOMapping(O,H);const F=e.render.frame;u[O.id]!==F&&(_(O),u[O.id]=F)}function g(O){const U=v();O.__bindingPointIndex=U;const C=o.createBuffer(),H=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,C),C}function v(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const U=l[O.id],C=O.uniforms,H=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,P=C.length;F<P;F++){const V=Array.isArray(C[F])?C[F]:[C[F]];for(let D=0,w=V.length;D<w;D++){const G=V[D];if(M(G,F,D,H)===!0){const q=G.__offset,j=Array.isArray(G.value)?G.value:[G.value];let ae=0;for(let ie=0;ie<j.length;ie++){const z=j[ie],K=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,q+ae,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,ae),ae+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,U,C,H){const F=O.value,P=U+"_"+C;if(H[P]===void 0)return typeof F=="number"||typeof F=="boolean"?H[P]=F:H[P]=F.clone(),!0;{const V=H[P];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return H[P]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function E(O){const U=O.uniforms;let C=0;const H=16;for(let P=0,V=U.length;P<V;P++){const D=Array.isArray(U[P])?U[P]:[U[P]];for(let w=0,G=D.length;w<G;w++){const q=D[w],j=Array.isArray(q.value)?q.value:[q.value];for(let ae=0,ie=j.length;ae<ie;ae++){const z=j[ae],K=R(z),Y=C%H,he=Y%K.boundary,L=Y+he;C+=he,L!==0&&H-L<K.storage&&(C+=H-L),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=C,C+=K.storage}}}const F=C%H;return F>0&&(C+=H-F),O.__size=C,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const C=d.indexOf(U.__bindingPointIndex);d.splice(C,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:p,update:m,dispose:x}}class Rh{constructor(e={}){const{canvas:i=qS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Uint32Array(4),R=new Int32Array(4);let y=null,x=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=fi;let F=0,P=0,V=null,D=-1,w=null;const G=new en,q=new en;let j=null;const ae=new Nt(0);let ie=0,z=i.width,K=i.height,Y=1,he=null,L=null;const ne=new en(0,0,z,K),pe=new en(0,0,z,K);let Se=!1;const $=new Gv;let me=!1,be=!1;const we=new tn,Ce=new tn,lt=new re,Je=new en,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function vt(){return V===null?Y:1}let k=r;function yn(N,Q){return i.getContext(N,Q)}try{const N={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hh}`),i.addEventListener("webglcontextlost",ze,!1),i.addEventListener("webglcontextrestored",Ae,!1),i.addEventListener("webglcontextcreationerror",ye,!1),k===null){const Q="webgl2";if(k=yn(Q,N),k===null)throw yn(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Mt,pt,ke,_t,Ze,rt,Qt,I,T,se,ge,_e,fe,Pe,De,Ge,je,Me,Ie,qe,Ye,Re,at,W;function Ue(){Mt=new yE(k),Mt.init(),Re=new nA(k,Mt),pt=new hE(k,Mt,e,Re),ke=new eA(k,Mt),pt.reverseDepthBuffer&&_&&ke.buffers.depth.setReversed(!0),_t=new bE(k),Ze=new GT,rt=new tA(k,Mt,ke,Ze,pt,Re,_t),Qt=new mE(C),I=new xE(C),T=new CM(k),at=new fE(k,T),se=new SE(k,T,_t,at),ge=new TE(k,se,T,_t),Ie=new EE(k,pt,rt),Ge=new pE(Ze),_e=new HT(C,Qt,I,Mt,pt,at,Ge),fe=new lA(C,Ze),Pe=new kT,De=new ZT(Mt),Me=new uE(C,Qt,I,ke,ge,M,p),je=new JT(C,ge,pt),W=new cA(k,_t,pt,ke),qe=new dE(k,Mt,_t),Ye=new ME(k,Mt,_t),_t.programs=_e.programs,C.capabilities=pt,C.extensions=Mt,C.properties=Ze,C.renderLists=Pe,C.shadowMap=je,C.state=ke,C.info=_t}Ue();const Ee=new sA(C,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=Mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(N){N!==void 0&&(Y=N,this.setSize(z,K,!1))},this.getSize=function(N){return N.set(z,K)},this.setSize=function(N,Q,ce=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=N,K=Q,i.width=Math.floor(N*Y),i.height=Math.floor(Q*Y),ce===!0&&(i.style.width=N+"px",i.style.height=Q+"px"),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(N,Q,ce){z=N,K=Q,Y=ce,i.width=Math.floor(N*ce),i.height=Math.floor(Q*ce),this.setViewport(0,0,N,Q)},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(ne)},this.setViewport=function(N,Q,ce,ue){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,Q,ce,ue),ke.viewport(G.copy(ne).multiplyScalar(Y).round())},this.getScissor=function(N){return N.copy(pe)},this.setScissor=function(N,Q,ce,ue){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,Q,ce,ue),ke.scissor(q.copy(pe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){ke.setScissorTest(Se=N)},this.setOpaqueSort=function(N){he=N},this.setTransparentSort=function(N){L=N},this.getClearColor=function(N){return N.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(N=!0,Q=!0,ce=!0){let ue=0;if(N){let J=!1;if(V!==null){const Te=V.texture.format;J=Te===xh||Te===_h||Te===vh}if(J){const Te=V.texture.type,Ne=Te===ra||Te===Sr||Te===Ro||Te===Co||Te===mh||Te===gh,Oe=Me.getClearColor(),Be=Me.getClearAlpha(),tt=Oe.r,Qe=Oe.g,Xe=Oe.b;Ne?(E[0]=tt,E[1]=Qe,E[2]=Xe,E[3]=Be,k.clearBufferuiv(k.COLOR,0,E)):(R[0]=tt,R[1]=Qe,R[2]=Xe,R[3]=Be,k.clearBufferiv(k.COLOR,0,R))}else ue|=k.COLOR_BUFFER_BIT}Q&&(ue|=k.DEPTH_BUFFER_BIT),ce&&(ue|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ze,!1),i.removeEventListener("webglcontextrestored",Ae,!1),i.removeEventListener("webglcontextcreationerror",ye,!1),Me.dispose(),Pe.dispose(),De.dispose(),Ze.dispose(),Qt.dispose(),I.dispose(),ge.dispose(),at.dispose(),W.dispose(),_e.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",on),Ee.removeEventListener("sessionend",Sn),On.stop()};function ze(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const N=_t.autoReset,Q=je.enabled,ce=je.autoUpdate,ue=je.needsUpdate,J=je.type;Ue(),_t.autoReset=N,je.enabled=Q,je.autoUpdate=ce,je.needsUpdate=ue,je.type=J}function ye(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Fe(N){const Q=N.target;Q.removeEventListener("dispose",Fe),it(Q)}function it(N){Ut(N),Ze.remove(N)}function Ut(N){const Q=Ze.get(N).programs;Q!==void 0&&(Q.forEach(function(ce){_e.releaseProgram(ce)}),N.isShaderMaterial&&_e.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,ce,ue,J,Te){Q===null&&(Q=Pt);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,Oe=Wa(N,Q,ce,ue,J);ke.setMaterial(ue,Ne);let Be=ce.index,tt=1;if(ue.wireframe===!0){if(Be=se.getWireframeAttribute(ce),Be===void 0)return;tt=2}const Qe=ce.drawRange,Xe=ce.attributes.position;let ct=Qe.start*tt,Rt=(Qe.start+Qe.count)*tt;Te!==null&&(ct=Math.max(ct,Te.start*tt),Rt=Math.min(Rt,(Te.start+Te.count)*tt)),Be!==null?(ct=Math.max(ct,0),Rt=Math.min(Rt,Be.count)):Xe!=null&&(ct=Math.max(ct,0),Rt=Math.min(Rt,Xe.count));const Wt=Rt-ct;if(Wt<0||Wt===1/0)return;at.setup(J,ue,Oe,ce,Be);let dt,Ct=qe;if(Be!==null&&(dt=T.get(Be),Ct=Ye,Ct.setIndex(dt)),J.isMesh)ue.wireframe===!0?(ke.setLineWidth(ue.wireframeLinewidth*vt()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(J.isLine){let Ke=ue.linewidth;Ke===void 0&&(Ke=1),ke.setLineWidth(Ke*vt()),J.isLineSegments?Ct.setMode(k.LINES):J.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else J.isPoints?Ct.setMode(k.POINTS):J.isSprite&&Ct.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ke=J._multiDrawStarts,It=J._multiDrawCounts,xt=J._multiDrawCount,pn=Be?T.get(Be).bytesPerElement:1,ua=Ze.get(ue).currentProgram.getUniforms();for(let jt=0;jt<xt;jt++)ua.setValue(k,"_gl_DrawID",jt),Ct.render(Ke[jt]/pn,It[jt])}else if(J.isInstancedMesh)Ct.renderInstances(ct,Wt,J.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,It=Math.min(ce.instanceCount,Ke);Ct.renderInstances(ct,Wt,It)}else Ct.render(ct,Wt)};function bt(N,Q,ce){N.transparent===!0&&N.side===ta&&N.forceSinglePass===!1?(N.side=Gn,N.needsUpdate=!0,la(N,Q,ce),N.side=Va,N.needsUpdate=!0,la(N,Q,ce),N.side=ta):la(N,Q,ce)}this.compile=function(N,Q,ce=null){ce===null&&(ce=N),x=De.get(ce),x.init(Q),U.push(x),ce.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),N!==ce&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ue=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Oe=Te[Ne];bt(Oe,ce,J),ue.add(Oe)}else bt(Te,ce,J),ue.add(Te)}),x=U.pop(),ue},this.compileAsync=function(N,Q,ce=null){const ue=this.compile(N,Q,ce);return new Promise(J=>{function Te(){if(ue.forEach(function(Ne){Ze.get(Ne).currentProgram.isReady()&&ue.delete(Ne)}),ue.size===0){J(N);return}setTimeout(Te,10)}Mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Xn=null;function hn(N){Xn&&Xn(N)}function on(){On.stop()}function Sn(){On.start()}const On=new jv;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(N){Xn=N,Ee.setAnimationLoop(N),N===null?On.stop():On.start()},Ee.addEventListener("sessionstart",on),Ee.addEventListener("sessionend",Sn),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Q),Q=Ee.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,Q,V),x=De.get(N,U.length),x.init(Q),U.push(x),Ce.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),$.setFromProjectionMatrix(Ce),be=this.localClippingEnabled,me=Ge.init(this.clippingPlanes,be),y=Pe.get(N,O.length),y.init(),O.push(y),Ee.enabled===!0&&Ee.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&ja(Te,Q,-1/0,C.sortObjects)}ja(N,Q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(he,L),Gt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Gt&&Me.addToRenderList(y,N),this.info.render.frame++,me===!0&&Ge.beginShadows();const ce=x.state.shadowsArray;je.render(ce,N,Q),me===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=y.opaque,J=y.transmissive;if(x.setupLights(),Q.isArrayCamera){const Te=Q.cameras;if(J.length>0)for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Be=Te[Ne];Ho(ue,J,N,Be)}Gt&&Me.render(N);for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++){const Be=Te[Ne];Fo(y,N,Be,Be.viewport)}}else J.length>0&&Ho(ue,J,N,Q),Gt&&Me.render(N),Fo(y,N,Q);V!==null&&P===0&&(rt.updateMultisampleRenderTarget(V),rt.updateRenderTargetMipmap(V)),N.isScene===!0&&N.onAfterRender(C,N,Q),at.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(x=U[U.length-1],me===!0&&Ge.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function ja(N,Q,ce,ue){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||$.intersectsSprite(N)){ue&&Je.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ce);const Ne=ge.update(N),Oe=N.material;Oe.visible&&y.push(N,Ne,Oe,ce,Je.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||$.intersectsObject(N))){const Ne=ge.update(N),Oe=N.material;if(ue&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Je.copy(N.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Je.copy(Ne.boundingSphere.center)),Je.applyMatrix4(N.matrixWorld).applyMatrix4(Ce)),Array.isArray(Oe)){const Be=Ne.groups;for(let tt=0,Qe=Be.length;tt<Qe;tt++){const Xe=Be[tt],ct=Oe[Xe.materialIndex];ct&&ct.visible&&y.push(N,Ne,ct,ce,Je.z,Xe)}}else Oe.visible&&y.push(N,Ne,Oe,ce,Je.z,null)}}const Te=N.children;for(let Ne=0,Oe=Te.length;Ne<Oe;Ne++)ja(Te[Ne],Q,ce,ue)}function Fo(N,Q,ce,ue){const J=N.opaque,Te=N.transmissive,Ne=N.transparent;x.setupLightsView(ce),me===!0&&Ge.setGlobalState(C.clippingPlanes,ce),ue&&ke.viewport(G.copy(ue)),J.length>0&&Xa(J,Q,ce),Te.length>0&&Xa(Te,Q,ce),Ne.length>0&&Xa(Ne,Q,ce),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Ho(N,Q,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new Mr(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Uo:ra,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ue.id],Ne=ue.viewport||G;Te.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Be=C.getActiveCubeFace(),tt=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(ae),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),Gt&&Me.render(ce);const Qe=C.toneMapping;C.toneMapping=Ga;const Xe=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),me===!0&&Ge.setGlobalState(C.clippingPlanes,ue),Xa(N,ce,ue),rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Rt=0,Wt=Q.length;Rt<Wt;Rt++){const dt=Q[Rt],Ct=dt.object,Ke=dt.geometry,It=dt.material,xt=dt.group;if(It.side===ta&&Ct.layers.test(ue.layers)){const pn=It.side;It.side=Gn,It.needsUpdate=!0,oa(Ct,ce,ue,Ke,It,xt),It.side=pn,It.needsUpdate=!0,ct=!0}}ct===!0&&(rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te))}C.setRenderTarget(Oe,Be,tt),C.setClearColor(ae,ie),Xe!==void 0&&(ue.viewport=Xe),C.toneMapping=Qe}function Xa(N,Q,ce){const ue=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Te=N.length;J<Te;J++){const Ne=N[J],Oe=Ne.object,Be=Ne.geometry,tt=Ne.group;let Qe=Ne.material;Qe.allowOverride===!0&&ue!==null&&(Qe=ue),Oe.layers.test(ce.layers)&&oa(Oe,Q,ce,Be,Qe,tt)}}function oa(N,Q,ce,ue,J,Te){N.onBeforeRender(C,Q,ce,ue,J,Te),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(C,Q,ce,ue,N,Te),J.transparent===!0&&J.side===ta&&J.forceSinglePass===!1?(J.side=Gn,J.needsUpdate=!0,C.renderBufferDirect(ce,Q,ue,J,N,Te),J.side=Va,J.needsUpdate=!0,C.renderBufferDirect(ce,Q,ue,J,N,Te),J.side=ta):C.renderBufferDirect(ce,Q,ue,J,N,Te),N.onAfterRender(C,Q,ce,ue,J,Te)}function la(N,Q,ce){Q.isScene!==!0&&(Q=Pt);const ue=Ze.get(N),J=x.state.lights,Te=x.state.shadowsArray,Ne=J.state.version,Oe=_e.getParameters(N,J.state,Te,Q,ce),Be=_e.getProgramCacheKey(Oe);let tt=ue.programs;ue.environment=N.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(N.isMeshStandardMaterial?I:Qt).get(N.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",Fe),tt=new Map,ue.programs=tt);let Qe=tt.get(Be);if(Qe!==void 0){if(ue.currentProgram===Qe&&ue.lightsStateVersion===Ne)return Di(N,Oe),Qe}else Oe.uniforms=_e.getUniforms(N),N.onBeforeCompile(Oe,C),Qe=_e.acquireProgram(Oe,Be),tt.set(Be,Qe),ue.uniforms=Oe.uniforms;const Xe=ue.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Xe.clippingPlanes=Ge.uniform),Di(N,Oe),ue.needsLights=nn(N),ue.lightsStateVersion=Ne,ue.needsLights&&(Xe.ambientLightColor.value=J.state.ambient,Xe.lightProbe.value=J.state.probe,Xe.directionalLights.value=J.state.directional,Xe.directionalLightShadows.value=J.state.directionalShadow,Xe.spotLights.value=J.state.spot,Xe.spotLightShadows.value=J.state.spotShadow,Xe.rectAreaLights.value=J.state.rectArea,Xe.ltc_1.value=J.state.rectAreaLTC1,Xe.ltc_2.value=J.state.rectAreaLTC2,Xe.pointLights.value=J.state.point,Xe.pointLightShadows.value=J.state.pointShadow,Xe.hemisphereLights.value=J.state.hemi,Xe.directionalShadowMap.value=J.state.directionalShadowMap,Xe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Xe.spotShadowMap.value=J.state.spotShadowMap,Xe.spotLightMatrix.value=J.state.spotLightMatrix,Xe.spotLightMap.value=J.state.spotLightMap,Xe.pointShadowMap.value=J.state.pointShadowMap,Xe.pointShadowMatrix.value=J.state.pointShadowMatrix),ue.currentProgram=Qe,ue.uniformsList=null,Qe}function Ni(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=Ec.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function Di(N,Q){const ce=Ze.get(N);ce.outputColorSpace=Q.outputColorSpace,ce.batching=Q.batching,ce.batchingColor=Q.batchingColor,ce.instancing=Q.instancing,ce.instancingColor=Q.instancingColor,ce.instancingMorph=Q.instancingMorph,ce.skinning=Q.skinning,ce.morphTargets=Q.morphTargets,ce.morphNormals=Q.morphNormals,ce.morphColors=Q.morphColors,ce.morphTargetsCount=Q.morphTargetsCount,ce.numClippingPlanes=Q.numClippingPlanes,ce.numIntersection=Q.numClipIntersection,ce.vertexAlphas=Q.vertexAlphas,ce.vertexTangents=Q.vertexTangents,ce.toneMapping=Q.toneMapping}function Wa(N,Q,ce,ue,J){Q.isScene!==!0&&(Q=Pt),rt.resetTextureUnits();const Te=Q.fog,Ne=ue.isMeshStandardMaterial?Q.environment:null,Oe=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ss,Be=(ue.isMeshStandardMaterial?I:Qt).get(ue.envMap||Ne),tt=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Qe=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Xe=!!ce.morphAttributes.position,ct=!!ce.morphAttributes.normal,Rt=!!ce.morphAttributes.color;let Wt=Ga;ue.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const dt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ct=dt!==void 0?dt.length:0,Ke=Ze.get(ue),It=x.state.lights;if(me===!0&&(be===!0||N!==w)){const mn=N===w&&ue.id===D;Ge.setState(ue,N,mn)}let xt=!1;ue.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==It.state.version||Ke.outputColorSpace!==Oe||J.isBatchedMesh&&Ke.batching===!1||!J.isBatchedMesh&&Ke.batching===!0||J.isBatchedMesh&&Ke.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ke.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ke.instancingMorph===!1&&J.morphTexture!==null||Ke.envMap!==Be||ue.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ge.numPlanes||Ke.numIntersection!==Ge.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==Qe||Ke.morphTargets!==Xe||Ke.morphNormals!==ct||Ke.morphColors!==Rt||Ke.toneMapping!==Wt||Ke.morphTargetsCount!==Ct)&&(xt=!0):(xt=!0,Ke.__version=ue.version);let pn=Ke.currentProgram;xt===!0&&(pn=la(ue,Q,J));let ua=!1,jt=!1,Li=!1;const Vt=pn.getUniforms(),An=Ke.uniforms;if(ke.useProgram(pn.program)&&(ua=!0,jt=!0,Li=!0),ue.id!==D&&(D=ue.id,jt=!0),ua||w!==N){ke.buffers.depth.getReversed()?(we.copy(N.projectionMatrix),ZS(we),KS(we),Vt.setValue(k,"projectionMatrix",we)):Vt.setValue(k,"projectionMatrix",N.projectionMatrix),Vt.setValue(k,"viewMatrix",N.matrixWorldInverse);const Mn=Vt.map.cameraPosition;Mn!==void 0&&Mn.setValue(k,lt.setFromMatrixPosition(N.matrixWorld)),pt.logarithmicDepthBuffer&&Vt.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Vt.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),w!==N&&(w=N,jt=!0,Li=!0)}if(J.isSkinnedMesh){Vt.setOptional(k,J,"bindMatrix"),Vt.setOptional(k,J,"bindMatrixInverse");const mn=J.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Vt.setValue(k,"boneTexture",mn.boneTexture,rt))}J.isBatchedMesh&&(Vt.setOptional(k,J,"batchingTexture"),Vt.setValue(k,"batchingTexture",J._matricesTexture,rt),Vt.setOptional(k,J,"batchingIdTexture"),Vt.setValue(k,"batchingIdTexture",J._indirectTexture,rt),Vt.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Vt.setValue(k,"batchingColorTexture",J._colorsTexture,rt));const ln=ce.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ie.update(J,ce,pn),(jt||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,Vt.setValue(k,"receiveShadow",J.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(An.envMap.value=Be,An.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Q.environment!==null&&(An.envMapIntensity.value=Q.environmentIntensity),jt&&(Vt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&ca(An,Li),Te&&ue.fog===!0&&fe.refreshFogUniforms(An,Te),fe.refreshMaterialUniforms(An,ue,Y,K,x.state.transmissionRenderTarget[N.id]),Ec.upload(k,Ni(Ke),An,rt)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ec.upload(k,Ni(Ke),An,rt),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Vt.setValue(k,"center",J.center),Vt.setValue(k,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(k,"normalMatrix",J.normalMatrix),Vt.setValue(k,"modelMatrix",J.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const mn=ue.uniformsGroups;for(let Mn=0,Si=mn.length;Mn<Si;Mn++){const Oi=mn[Mn];W.update(Oi,pn),W.bind(Oi,pn)}}return pn}function ca(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function nn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,Q,ce){const ue=Ze.get(N);ue.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Ze.get(N.texture).__webglTexture=Q,Ze.get(N.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ce,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Q){const ce=Ze.get(N);ce.__webglFramebuffer=Q,ce.__useDefaultFramebuffer=Q===void 0};const Go=k.createFramebuffer();this.setRenderTarget=function(N,Q=0,ce=0){V=N,F=Q,P=ce;let ue=!0,J=null,Te=!1,Ne=!1;if(N){const Be=Ze.get(N);if(Be.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(k.FRAMEBUFFER,null),ue=!1;else if(Be.__webglFramebuffer===void 0)rt.setupRenderTarget(N);else if(Be.__hasExternalTextures)rt.rebindTextures(N,Ze.get(N.texture).__webglTexture,Ze.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Xe=N.depthTexture;if(Be.__boundDepthTexture!==Xe){if(Xe!==null&&Ze.has(Xe)&&(N.width!==Xe.image.width||N.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ne=!0);const Qe=Ze.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[Q])?J=Qe[Q][ce]:J=Qe[Q],Te=!0):N.samples>0&&rt.useMultisampledRTT(N)===!1?J=Ze.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?J=Qe[ce]:J=Qe,G.copy(N.viewport),q.copy(N.scissor),j=N.scissorTest}else G.copy(ne).multiplyScalar(Y).floor(),q.copy(pe).multiplyScalar(Y).floor(),j=Se;if(ce!==0&&(J=Go),ke.bindFramebuffer(k.FRAMEBUFFER,J)&&ue&&ke.drawBuffers(N,J),ke.viewport(G),ke.scissor(q),ke.setScissorTest(j),Te){const Be=Ze.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Be.__webglTexture,ce)}else if(Ne){const Be=Ze.get(N.texture),tt=Q;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,ce,tt)}else if(N!==null&&ce!==0){const Be=Ze.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,ce)}D=-1},this.readRenderTargetPixels=function(N,Q,ce,ue,J,Te,Ne,Oe=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){ke.bindFramebuffer(k.FRAMEBUFFER,Be);try{const tt=N.textures[Oe],Qe=tt.format,Xe=tt.type;if(!pt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-ue&&ce>=0&&ce<=N.height-J&&(N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Q,ce,ue,J,Re.convert(Qe),Re.convert(Xe),Te))}finally{const tt=V!==null?Ze.get(V).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,Q,ce,ue,J,Te,Ne,Oe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ze.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(Q>=0&&Q<=N.width-ue&&ce>=0&&ce<=N.height-J){ke.bindFramebuffer(k.FRAMEBUFFER,Be);const tt=N.textures[Oe],Qe=tt.format,Xe=tt.type;if(!pt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Q,ce,ue,J,Re.convert(Qe),Re.convert(Xe),0);const Rt=V!==null?Ze.get(V).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,Rt);const Wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await YS(k,Wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.deleteBuffer(ct),k.deleteSync(Wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Q=null,ce=0){const ue=Math.pow(2,-ce),J=Math.floor(N.image.width*ue),Te=Math.floor(N.image.height*ue),Ne=Q!==null?Q.x:0,Oe=Q!==null?Q.y:0;rt.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,Ne,Oe,J,Te),ke.unbindTexture()};const Vo=k.createFramebuffer(),Ui=k.createFramebuffer();this.copyTextureToTexture=function(N,Q,ce=null,ue=null,J=0,Te=null){Te===null&&(J!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=J,J=0):Te=0);let Ne,Oe,Be,tt,Qe,Xe,ct,Rt,Wt;const dt=N.isCompressedTexture?N.mipmaps[Te]:N.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,Be=ce.isBox3?ce.max.z-ce.min.z:1,tt=ce.min.x,Qe=ce.min.y,Xe=ce.isBox3?ce.min.z:0;else{const ln=Math.pow(2,-J);Ne=Math.floor(dt.width*ln),Oe=Math.floor(dt.height*ln),N.isDataArrayTexture?Be=dt.depth:N.isData3DTexture?Be=Math.floor(dt.depth*ln):Be=1,tt=0,Qe=0,Xe=0}ue!==null?(ct=ue.x,Rt=ue.y,Wt=ue.z):(ct=0,Rt=0,Wt=0);const Ct=Re.convert(Q.format),Ke=Re.convert(Q.type);let It;Q.isData3DTexture?(rt.setTexture3D(Q,0),It=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(rt.setTexture2DArray(Q,0),It=k.TEXTURE_2D_ARRAY):(rt.setTexture2D(Q,0),It=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const xt=k.getParameter(k.UNPACK_ROW_LENGTH),pn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ua=k.getParameter(k.UNPACK_SKIP_PIXELS),jt=k.getParameter(k.UNPACK_SKIP_ROWS),Li=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);const Vt=N.isDataArrayTexture||N.isData3DTexture,An=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const ln=Ze.get(N),mn=Ze.get(Q),Mn=Ze.get(ln.__renderTarget),Si=Ze.get(mn.__renderTarget);ke.bindFramebuffer(k.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Oi=0;Oi<Be;Oi++)Vt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ze.get(N).__webglTexture,J,Xe+Oi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ze.get(Q).__webglTexture,Te,Wt+Oi)),k.blitFramebuffer(tt,Qe,Ne,Oe,ct,Rt,Ne,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||Ze.has(N)){const ln=Ze.get(N),mn=Ze.get(Q);ke.bindFramebuffer(k.READ_FRAMEBUFFER,Vo),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ui);for(let Mn=0;Mn<Be;Mn++)Vt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,J,Xe+Mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,J),An?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,mn.__webglTexture,Te,Wt+Mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mn.__webglTexture,Te),J!==0?k.blitFramebuffer(tt,Qe,Ne,Oe,ct,Rt,Ne,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):An?k.copyTexSubImage3D(It,Te,ct,Rt,Wt+Mn,tt,Qe,Ne,Oe):k.copyTexSubImage2D(It,Te,ct,Rt,tt,Qe,Ne,Oe);ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else An?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(It,Te,ct,Rt,Wt,Ne,Oe,Be,Ct,Ke,dt.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(It,Te,ct,Rt,Wt,Ne,Oe,Be,Ct,dt.data):k.texSubImage3D(It,Te,ct,Rt,Wt,Ne,Oe,Be,Ct,Ke,dt):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,ct,Rt,Ne,Oe,Ct,Ke,dt.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,ct,Rt,dt.width,dt.height,Ct,dt.data):k.texSubImage2D(k.TEXTURE_2D,Te,ct,Rt,Ne,Oe,Ct,Ke,dt);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ua),k.pixelStorei(k.UNPACK_SKIP_ROWS,jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Li),Te===0&&Q.generateMipmaps&&k.generateMipmap(It),ke.unbindTexture()},this.copyTextureToTexture3D=function(N,Q,ce=null,ue=null,J=0){return gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Q,ce,ue,J)},this.initRenderTarget=function(N){Ze.get(N).__webglFramebuffer===void 0&&rt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?rt.setTextureCube(N,0):N.isData3DTexture?rt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?rt.setTexture2DArray(N,0):rt.setTexture2D(N,0),ke.unbindTexture()},this.resetState=function(){F=0,P=0,V=null,ke.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const uA=()=>{const o=Ve.useRef(null),[e,i]=Ve.useState(!1),[r,l]=Ve.useState({x:0,y:0}),u=Ve.useRef(null),d=Ve.useRef(null),h=Ve.useRef({x:0,y:0}),p=Ve.useCallback(g=>{h.current={x:(g.clientX-window.innerWidth/2)*.001,y:-(g.clientY-window.innerHeight/2)*.001}},[]);Ve.useEffect(()=>{if(!o.current)return;const g=new Sh,v=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3),_=new Rh({alpha:!0,antialias:!1,powerPreference:"high-performance"});(()=>{const q=window.innerWidth,j=window.innerHeight;v.aspect=q/j,v.updateProjectionMatrix(),_.setSize(q,j)})(),_.setClearColor(0,0),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(_.domElement);const E=new ni,R=window.innerWidth<768,y=R?25:50,x=new Float32Array(y*3),O=new Float32Array(y*3),U=[],C=new Float32Array(y*3);for(let q=0;q<y*3;q+=3){const j=(Math.random()-.5)*(R?10:15),ae=(Math.random()-.5)*(R?10:15),ie=(Math.random()-.5)*(R?10:15);x[q]=j,x[q+1]=ae,x[q+2]=ie,C[q]=j,C[q+1]=ae,C[q+2]=ie;const z=new Nt;z.setHSL(.08+Math.random()*.05,.8,.6),O[q]=z.r,O[q+1]=z.g,O[q+2]=z.b,U.push({x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005,z:(Math.random()-.5)*.005})}E.setAttribute("position",new jn(x,3)),E.setAttribute("color",new jn(O,3));const H=new Mh({size:R?.06:.08,vertexColors:!0,transparent:!0,opacity:.8,blending:Tc}),F=new Vv(E,H);g.add(F);const P=[],V=R?2:4;for(let q=0;q<V;q++){const j=q%2===0?new Lc(R?.1:.15,0):new Uc(R?.08:.12,0),ae=new wi({color:q%2===0?16347926:15357964,transparent:!0,opacity:.6,wireframe:!0}),ie=new ti(j,ae);ie.position.set((Math.random()-.5)*(R?6:8),(Math.random()-.5)*(R?6:8),(Math.random()-.5)*(R?6:8)),P.push({mesh:ie,rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}}),g.add(ie)}v.position.z=5,u.current={scene:g,camera:v,renderer:_,shapes:P,particles:F,velocities:U,originalPositions:C};const D=()=>{if(d.current=requestAnimationFrame(D),!u.current)return;const{particles:q,velocities:j,shapes:ae,camera:ie,renderer:z,scene:K}=u.current,Y=q.geometry.attributes.position.array;for(let he=0;he<Y.length;he+=3){const L=he/3;Y[he]+=j[L].x,Y[he+1]+=j[L].y,Y[he+2]+=j[L].z,Math.abs(Y[he])>8&&(j[L].x*=-1),Math.abs(Y[he+1])>8&&(j[L].y*=-1),Math.abs(Y[he+2])>8&&(j[L].z*=-1)}q.geometry.attributes.position.needsUpdate=!0,ae.forEach(({mesh:he,rotationSpeed:L})=>{he.rotation.x+=L.x,he.rotation.y+=L.y,he.rotation.z+=L.z}),ie.position.x+=(h.current.x-ie.position.x)*.02,ie.position.y+=(h.current.y-ie.position.y)*.02,z.render(K,ie)};D();const w=new IntersectionObserver(([q])=>{i(q.isIntersecting)},{threshold:.1});o.current&&w.observe(o.current);const G=()=>{if(u.current){const{camera:q,renderer:j}=u.current,ae=window.innerWidth,ie=window.innerHeight;q.aspect=ae/ie,q.updateProjectionMatrix(),j.setSize(ae,ie)}};return window.addEventListener("mousemove",p),window.addEventListener("resize",G),()=>{if(d.current&&cancelAnimationFrame(d.current),o.current&&_.domElement&&o.current.removeChild(_.domElement),w.disconnect(),window.removeEventListener("mousemove",p),window.removeEventListener("resize",G),u.current){const{scene:q,renderer:j}=u.current;q.traverse(ae=>{ae.geometry&&ae.geometry.dispose(),ae.material&&(Array.isArray(ae.material)?ae.material.forEach(ie=>ie.dispose()):ae.material.dispose())}),j.dispose()}}},[p]);const m=[{icon:Uy,text:"Open for any oppurtinities... ",color:"from-orange-400 to-orange-600"},{icon:Yy,text:"FAV SONG - Maula Mere by Rup Kumar Rathod",color:"from-orange-500 to-orange-700"},{icon:uh,text:"AI/ML Enthusiast",color:"from-orange-400 to-orange-600"},{icon:yd,text:"Quick Learner & Team Player",color:"from-orange-500 to-orange-700"}];return b.jsxs("section",{id:"about",className:"relative py-20 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden",children:[b.jsx("div",{ref:o,className:"absolute inset-0 pointer-events-none",style:{zIndex:1}}),b.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[b.jsx("div",{className:"absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse"}),b.jsx("div",{className:"absolute bottom-20 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-10 animate-bounce"}),b.jsx("div",{className:"absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full opacity-15 animate-ping"}),b.jsx("div",{className:"absolute top-1/3 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse delay-1000"}),b.jsx("div",{className:"absolute bottom-1/3 left-1/3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-25 animate-bounce delay-500"})]}),b.jsx("div",{className:"container mx-auto px-4 sm:px-6 relative z-10",children:b.jsxs("div",{className:`transform transition-all duration-1000 ease-out ${e?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:[b.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-6 sm:mb-8 text-center transition-all duration-700 hover:scale-105",children:"About Me"}),b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsx("div",{className:"backdrop-blur-sm bg-white/40 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-orange-200/50 shadow-2xl hover:shadow-orange-200/60 transition-all duration-500 hover:scale-[1.02] hover:bg-white/50",children:b.jsxs("div",{className:"space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed",children:[b.jsxs("p",{className:"transform transition-all duration-700 delay-200 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2",children:["So... I am a 3rd-year Computer Science student at ",b.jsx("strong",{className:"text-orange-600 hover:text-orange-800 transition-colors duration-300",children:"RCC IIT"}),", Kolkata, with a passion for AI/ML and full-stack development. I have a strong foundation in Python, JavaScript, and React.js, and I am always eager to learn new technologies and improve my skills."]}),b.jsxs("p",{className:"transform transition-all duration-700 delay-400 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2",children:["I have worked on various projects, including an AI-powered marks evaluation system called ",b.jsx("strong",{className:"text-orange-600 hover:text-orange-800 transition-colors duration-300",children:"Gradify.AI"}),", and I have interned as a Frontend Developer at ",b.jsx("strong",{className:"text-orange-600 hover:text-orange-800 transition-colors duration-300",children:"JAWD Lifestyles"}),". I am also actively involved in competitive programming and have done many other project while working in a team, and I have a keen interest in exploring the latest trends in AI and machine learning."]}),b.jsx("p",{className:"transform transition-all duration-700 delay-600 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2",children:"And now the real me... I am too much eager to work under some good guidance and I am genuinely seeking for it... If you can help me with that, please do reach out to me. I am always open to new opportunities and challenges that can help me grow as a developer and as a person. I am particularly interested in Academic Research, AI/ML, and Full Stack Development, and I am looking for internships or projects that align with my interests and skills."}),b.jsx("p",{className:"transform transition-all duration-700 delay-800 hover:text-orange-700 hover:translate-x-1 sm:hover:translate-x-2",children:"I am also a quick learner and a team player, and I believe that collaboration is key to success in any project. I am excited to connect with like-minded individuals and contribute to meaningful projects that make a difference."})]})}),b.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4",children:m.map((g,v)=>b.jsxs("div",{className:`group flex items-center backdrop-blur-sm bg-gradient-to-r ${g.color} bg-opacity-20 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-orange-300/30 shadow-lg hover:shadow-orange-300/50 transition-all duration-500 hover:scale-105 hover:bg-opacity-30 cursor-pointer transform ${e?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,style:{transitionDelay:`${v*200}ms`},children:[b.jsx(g.icon,{className:"w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-100 group-hover:text-white transition-colors duration-300 group-hover:scale-110 flex-shrink-0"}),b.jsx("span",{className:"font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-sm sm:text-base",children:g.text})]},v))})]})]})}),b.jsxs("div",{className:"absolute bottom-6 sm:bottom-10 right-4 sm:right-10 group",children:[b.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none hover:shadow-orange-500/50",children:b.jsx(yd,{className:"w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:animate-bounce"})}),b.jsxs("div",{className:"absolute -top-10 sm:-top-12 -left-16 sm:-left-20 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform scale-95 group-hover:scale-100 text-xs sm:text-sm",children:[b.jsx("span",{className:"font-medium text-orange-600",children:"Ready to collaborate!"}),b.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"})]})]}),b.jsx("div",{className:"absolute top-6 sm:top-10 left-1/2 transform -translate-x-1/2",children:b.jsx("div",{className:"flex space-x-1 sm:space-x-2",children:[...Array(3)].map((g,v)=>b.jsx("div",{className:"w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-bounce",style:{animationDelay:`${v*200}ms`}},v))})})]})},fA=()=>{const[o,e]=Ve.useState(null),[i,r]=Ve.useState([]),[l,u]=Ve.useState(!1),[d,h]=Ve.useState(""),[p,m]=Ve.useState(!1),g=[{name:"Python",level:85,category:"Programming",color:"from-orange-400 to-orange-600",icon:"🐍",message:"Ssss-seriously skilled with Python! 🐍 I can make data dance and algorithms sing!"},{name:"JavaScript",level:80,category:"Programming",color:"from-orange-500 to-orange-700",icon:"⚡",message:"JavaScript is my superpower! ⚡ I bring websites to life with just a few keystrokes!"},{name:"React.js",level:85,category:"Frontend",color:"from-orange-400 to-orange-600",icon:"⚛️",message:"React and I are like best friends! ⚛️ We create amazing user experiences together!"},{name:"C/C++",level:75,category:"Programming",color:"from-orange-500 to-orange-700",icon:"🔧",message:"C++ is my metal! 🔧 Low-level programming? Challenge accepted!"},{name:"HTML/CSS",level:90,category:"Frontend",color:"from-orange-300 to-orange-500",icon:"🎨",message:"HTML & CSS are my paintbrush! 🎨 I craft beautiful web experiences pixel by pixel!"},{name:"Tailwind CSS",level:80,category:"Frontend",color:"from-orange-400 to-orange-600",icon:"🌪️",message:"Tailwind makes me feel like a styling tornado! 🌪️ Utility-first CSS is pure magic!"},{name:"Pandas",level:70,category:"AI/ML",color:"from-orange-500 to-orange-700",icon:"🐼",message:"Pandas and I are data BFFs! 🐼 We turn messy data into beautiful insights!"},{name:"Matplotlib",level:65,category:"AI/ML",color:"from-orange-600 to-orange-800",icon:"📊",message:"With Matplotlib, I'm a data visualization wizard! 📊 Charts have never looked so good!"}],v=[...new Set(g.map(E=>E.category))];Ve.useEffect(()=>{m(!0);const E=setTimeout(()=>{r(g.map((R,y)=>y))},300);return()=>clearTimeout(E)},[]);const _=E=>{e(E),h(E.message),u(!0),setTimeout(()=>{u(!1)},4e3)},M=E=>g.filter(R=>R.category===E);return b.jsxs("section",{id:"skills",className:"py-20 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen relative overflow-hidden",children:[b.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[b.jsx("div",{className:"absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"}),b.jsx("div",{className:"absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"})]}),b.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[b.jsxs("div",{className:`text-center mb-16 transform transition-all duration-1000 ${p?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[b.jsx("h2",{className:"text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4",children:"Skills & Technologies"}),b.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Click on any skill to discover my expertise level and get a fun message! 🚀"})]}),l&&b.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce",children:b.jsxs("div",{className:"bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-orange-200 max-w-md mx-auto",children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"text-3xl animate-spin",children:o?.icon}),b.jsx("p",{className:"text-gray-800 font-medium",children:d})]}),b.jsx("button",{onClick:()=>u(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors",children:"✕"})]})}),b.jsx("div",{className:"space-y-12",children:v.map((E,R)=>b.jsxs("div",{className:`transform transition-all duration-1000 delay-${R*200} ${p?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[b.jsx("h3",{className:"text-2xl font-bold text-orange-700 mb-6 text-center",children:E}),b.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:M(E).map((y,x)=>b.jsxs("div",{onClick:()=>_(y),className:`group relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 border border-orange-100 ${i.includes(g.indexOf(y))?"animate-fade-in":""}`,style:{animationDelay:`${x*150}ms`,background:o?.name===y.name?"linear-gradient(135deg, #fed7aa, #ffedd5)":""},children:[b.jsxs("div",{className:"flex items-center justify-between mb-4",children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"text-2xl group-hover:animate-bounce transition-all duration-300",children:y.icon}),b.jsx("h4",{className:"text-xl font-semibold text-gray-800 group-hover:text-orange-700 transition-colors",children:y.name})]}),b.jsxs("span",{className:"text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full",children:[y.level,"%"]})]}),b.jsx("div",{className:"relative",children:b.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3 overflow-hidden",children:b.jsx("div",{className:`h-3 rounded-full bg-gradient-to-r ${y.color} transition-all duration-1000 ease-out relative overflow-hidden`,style:{width:i.includes(g.indexOf(y))?`${y.level}%`:"0%"},children:b.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"})})})}),b.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 to-orange-600/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all duration-300 pointer-events-none"}),b.jsx("div",{className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:b.jsx("span",{className:"text-xs text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded-full",children:"Click me! 🎉"})})]},y.name))})]},E))}),b.jsx("div",{className:`text-center mt-16 transform transition-all duration-1000 delay-1000 ${p?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:b.jsx("p",{className:"text-gray-600 italic",children:'"Every skill is a superpower waiting to be unleashed! 💪✨"'})})]}),b.jsx("style",{jsx:!0,children:`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `})]})},dA=()=>{const[o,e]=Ve.useState(null),[i,r]=Ve.useState(!1),[l,u]=Ve.useState(0),[d,h]=Ve.useState(!1),p=[{title:"Gradify.AI",description:"AI-powered marks evaluation system that revolutionizes how teachers grade assignments with intelligent automation and detailed analytics.",longDescription:"A comprehensive AI solution that uses machine learning to automatically evaluate student assignments, providing detailed feedback and analytics to help teachers streamline their grading process.",tech:["React","Python","TensorFlow","OpenAI API","MongoDB"],role:"Full-stack Developer & AI Engineer",status:"In Development",icon:b.jsx(_v,{className:"w-6 h-6"}),gradient:"from-orange-400 to-red-500",demo:null,github:null,features:["AI-powered grading","Real-time analytics","Student feedback system","Progress tracking"],metrics:{accuracy:"95%",speed:"10x faster",satisfaction:"98%"}},{title:"Jawd Email Campaign",description:"Sophisticated email marketing platform with advanced campaign management, automation, and detailed analytics for modern businesses.",longDescription:"A comprehensive email marketing solution built with JavaScript, featuring drag-and-drop campaign builder, automated workflows, and real-time performance tracking.",tech:["JavaScript","Node.js","MongoDB","HTML/CSS","Email APIs"],role:"Full-stack Developer",status:"Live",icon:b.jsx(Cc,{className:"w-6 h-6"}),gradient:"from-orange-500 to-amber-600",demo:null,github:"https://github.com/tamo2005/Jawd-email-campaign",features:["Drag-and-drop builder","Automated workflows","A/B testing","Real-time analytics"],metrics:{delivery:"99.9%",open:"35%",conversion:"12%"}},{title:"Deadline Death Predictor",description:"Machine learning application that predicts mortality risk using advanced algorithms and comprehensive health data analysis.",longDescription:"An innovative ML project that analyzes various health indicators and demographic data to predict mortality risk, helping healthcare professionals make informed decisions.",tech:["JavaScript","Machine Learning","TensorFlow.js","Chart.js","Health APIs"],role:"ML Engineer & Frontend Developer",status:"Live",icon:b.jsx(My,{className:"w-6 h-6"}),gradient:"from-orange-600 to-red-700",demo:"https://deadline-death-predictor.vercel.app/",github:null,features:["ML prediction model","Health data analysis","Risk visualization","Interactive dashboard"],metrics:{accuracy:"87%",precision:"82%",recall:"89%"}},{title:"Heart Disease Detection",description:"Advanced machine learning system for early detection of heart disease using clinical data and predictive modeling.",longDescription:"A sophisticated healthcare application that uses machine learning algorithms to analyze patient data and predict the likelihood of heart disease, enabling early intervention.",tech:["Python","Scikit-learn","Pandas","NumPy","Matplotlib","Flask"],role:"Data Scientist & Backend Developer",status:"Completed",icon:b.jsx(fh,{className:"w-6 h-6"}),gradient:"from-red-500 to-orange-600",demo:null,github:"https://github.com/tamo2005/heart-diesease-detection",features:["Clinical data analysis","Predictive modeling","Risk assessment","Medical visualization"],metrics:{accuracy:"92%",sensitivity:"88%",specificity:"94%"}}];Ve.useEffect(()=>{const v=setTimeout(()=>r(!0),200),_=()=>{h("ontouchstart"in window||navigator.maxTouchPoints>0)};return _(),window.addEventListener("resize",_),()=>{clearTimeout(v),window.removeEventListener("resize",_)}},[]),Ve.useEffect(()=>{const v=setInterval(()=>{u(_=>(_+1)%p.length)},5e3);return()=>clearInterval(v)},[p.length]);const m=v=>{switch(v){case"Live":return"bg-green-500";case"In Development":return"bg-blue-500";case"Completed":return"bg-purple-500";default:return"bg-gray-500"}},g=({project:v,index:_,isActive:M})=>b.jsx("div",{className:`relative group cursor-pointer transition-all duration-700 transform ${i?"translate-y-0 opacity-100":"translate-y-20 opacity-0"} ${M?"scale-105":"scale-100"}`,style:{transitionDelay:`${_*150}ms`},onMouseEnter:()=>e(_),onMouseLeave:()=>e(null),children:b.jsxs("div",{className:"relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden",children:[b.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}),b.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(3)].map((E,R)=>b.jsx("div",{className:"absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-20 group-hover:opacity-60 transition-opacity duration-500",style:{left:`${20+R*30}%`,top:`${10+R*20}%`,animationDelay:`${R*.5}s`}},R))}),b.jsxs("div",{className:"relative z-10 flex items-start justify-between mb-4",children:[b.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 flex-1 min-w-0",children:[b.jsx("div",{className:`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${v.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`,children:v.icon}),b.jsxs("div",{className:"min-w-0 flex-1",children:[b.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 truncate",children:v.title}),b.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[b.jsx("span",{className:`inline-block w-2 h-2 rounded-full ${m(v.status)} flex-shrink-0`}),b.jsx("span",{className:"text-sm text-gray-500 truncate",children:v.status})]})]})]}),b.jsxs("div",{className:`flex gap-2 transition-opacity duration-300 flex-shrink-0 ${d?"opacity-100":"opacity-0 group-hover:opacity-100"}`,children:[v.github&&b.jsx("a",{href:v.github,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-gray-800 text-white hover:bg-orange-600 transition-colors duration-300 touch-manipulation","aria-label":"View GitHub repository",children:b.jsx(wo,{className:"w-4 h-4"})}),v.demo&&b.jsx("a",{href:v.demo,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 touch-manipulation","aria-label":"View live demo",children:b.jsx(mv,{className:"w-4 h-4"})})]})]}),b.jsx("p",{className:"text-gray-600 mb-4 text-sm sm:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300",children:o===_?v.longDescription:v.description}),b.jsx("div",{className:"flex flex-wrap gap-1 sm:gap-2 mb-4",children:v.tech.map((E,R)=>b.jsx("span",{className:"px-2 sm:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition-colors duration-300",children:E},R))}),b.jsx("div",{className:`transition-all duration-500 overflow-hidden ${d||o===_?"max-h-32 opacity-100":"max-h-0 opacity-0"}`,children:b.jsxs("div",{className:"mb-4",children:[b.jsx("h4",{className:"text-sm font-semibold text-gray-700 mb-2",children:"Key Features:"}),b.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-600",children:v.features.map((E,R)=>b.jsxs("li",{className:"flex items-center gap-1",children:[b.jsx("div",{className:"w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"}),b.jsx("span",{className:"truncate",children:E})]},R))})]})}),b.jsx("div",{className:"border-t border-gray-200 pt-4",children:b.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0",children:[b.jsx("span",{className:"text-sm text-gray-500 truncate",children:v.role}),b.jsx("div",{className:"flex gap-2 sm:gap-4 text-xs text-gray-500 justify-between sm:justify-end",children:Object.entries(v.metrics).map(([E,R])=>b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"font-semibold text-orange-600",children:R}),b.jsx("div",{className:"capitalize",children:E})]},E))})]})}),b.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gray-200",children:b.jsx("div",{className:`h-full bg-gradient-to-r ${v.gradient} transition-all duration-500 ${o===_?"w-full":"w-0"}`})})]})});return b.jsxs("section",{id:"projects",className:"py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden",children:[b.jsxs("div",{className:"absolute inset-0",children:[b.jsx("div",{className:"absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"}),b.jsx("div",{className:"absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"}),b.jsx("div",{className:"absolute bottom-20 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"})]}),b.jsxs("div",{className:"container mx-auto px-4 sm:px-6 relative z-10",children:[b.jsxs("div",{className:"text-center mb-12 sm:mb-16",children:[b.jsx("h2",{className:`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${i?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:"Featured Projects"}),b.jsx("p",{className:`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${i?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:"Innovative solutions combining AI, machine learning, and modern web technologies"})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 mb-12",children:p.map((v,_)=>b.jsx(g,{project:v,index:_,isActive:_===l},_))}),b.jsx("div",{className:`bg-white/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/30 transition-all duration-1000 delay-500 ${i?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:b.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center",children:[{label:"Projects Completed",value:"4+",icon:b.jsx(uh,{className:"w-5 h-5 sm:w-6 sm:h-6"})},{label:"Technologies Used",value:"15+",icon:b.jsx(Cy,{className:"w-5 h-5 sm:w-6 sm:h-6"})},{label:"Lines of Code",value:"50K+",icon:b.jsx(wo,{className:"w-5 h-5 sm:w-6 sm:h-6"})},{label:"Users Impacted",value:"1K+",icon:b.jsx(Jy,{className:"w-5 h-5 sm:w-6 sm:h-6"})}].map((v,_)=>b.jsxs("div",{className:"group",children:[b.jsx("div",{className:"flex justify-center mb-2",children:b.jsx("div",{className:"p-2 sm:p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white group-hover:scale-110 transition-transform duration-300",children:v.icon})}),b.jsx("div",{className:"text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300",children:v.value}),b.jsx("div",{className:"text-xs sm:text-sm text-gray-600 px-1",children:v.label})]},_))})}),b.jsxs("div",{className:"text-center mt-12",children:[b.jsx("p",{className:"text-gray-600 mb-6 text-sm sm:text-base px-4",children:"Interested in collaborating or learning more?"}),b.jsxs("button",{className:"group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 text-sm sm:text-base touch-manipulation",children:[b.jsx("span",{className:"relative z-10",children:"View All Projects"}),b.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-orange-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]})]}),b.jsx("style",{jsx:!0,children:`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-none {
          display: block;
          -webkit-line-clamp: none;
          -webkit-box-orient: unset;
          overflow: visible;
        }
      `})]})},hA=()=>{const[o,e]=Ve.useState(!1),[i,r]=Ve.useState("experience");Ve.useEffect(()=>{const g=new IntersectionObserver(([_])=>{_.isIntersecting&&e(!0)},{threshold:.1}),v=document.getElementById("experience");return v&&g.observe(v),()=>g.disconnect()},[]);const l=[{title:"Frontend Developer",company:"JAWD Lifestyles",type:"Internship",duration:"2024",description:"Built responsive web interfaces and worked on UI/UX components using modern frontend technologies",technologies:["React","JavaScript","CSS3","HTML5"],achievements:["Developed responsive web components","Improved user interface design","Collaborated with design team"]}],u=[{title:"Introduction To Internet Of Things",issuer:"IIT Kharagpur (NPTEL)",date:"Nov 2025",verifyLink:"https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS44S44950216804365773",image:"/assets/IOT.png",category:"IoT",grade:"Elite"},{title:"Design and Analysis of Algorithms",issuer:"IIT Madras (NPTEL)",date:"Apr 2025",verifyLink:"https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS23S35010076901335591",image:"/assets/DAA.png",category:"Algorithms",grade:"Elite"},{title:"The Joy of Computing using Python",issuer:"IIT Madras (NPTEL)",date:"Apr 2024",verifyLink:"https://nptel.ac.in/noc/E_Certificate/NPTEL24CS113S85230103104184540",image:"/assets/JOCP.png",category:"Programming",grade:"Elite"},{title:"Programming, Data Structures and Algorithms using Python",issuer:"IIT Madras (NPTEL)",date:"Apr 2024",verifyLink:"https://nptel.ac.in/noc/E_Certificate/NPTEL24CS78S43920060602714322",image:"/assets/PROGDSAPY.png",category:"Programming",grade:"Elite"},{title:"Introduction to Programming in C",issuer:"IIT Kanpur (NPTEL)",date:"Apr 2024",verifyLink:"https://nptel.ac.in/noc/E_Certificate/NPTEL24CS02S46020050730126767",image:"/assets/CPROG.png",category:"Programming",grade:"Elite"},{title:"Generative AI Certificate",issuer:"Intel (Tamagno Roy)",date:"2024",verifyLink:"#",image:"/assets/Tamagno Roy_Generative_AI_Certificate.png",category:"AI/ML",grade:"Completed"},{title:"Micro Learning Module Certificate",issuer:"Intel (Tamagno Roy)",date:"2024",verifyLink:"#",image:"/assets/Tamagno Roy_Micro_Learning_Module_Certificate.png",category:"AI/ML",grade:"Completed"},{title:"Responsible AI Certificate",issuer:"Intel (Tamagno Roy)",date:"2024",verifyLink:"#",image:"/assets/TAMAGNO ROY_Responsible_AI_Certificate.png",category:"AI/ML",grade:"Completed"},{title:"Space AI Certificate",issuer:"Intel (Tamagno Roy)",date:"2024",verifyLink:"#",image:"/assets/Tamagno Roy_Space_AI_Certificate.png",category:"AI/ML",grade:"Completed"},{title:"Sport AI Certificate",issuer:"Intel (Tamagno Roy)",date:"2024",verifyLink:"#",image:"/assets/Tamagno Roy_Sport_AI_Certificate.png",category:"AI/ML",grade:"Completed"}],d=["All","Programming","Algorithms","IoT","AI/ML"],[h,p]=Ve.useState("All"),m=h==="All"?u:u.filter(g=>g.category===h);return b.jsx("section",{id:"experience",className:"py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden",children:b.jsxs("div",{className:"container mx-auto px-4 sm:px-6",children:[b.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[b.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4",children:"Experience & Certifications"}),b.jsx("p",{className:"text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4",children:"My professional journey and academic achievements in technology"})]}),b.jsx("div",{className:`flex justify-center mb-12 transition-all duration-1000 delay-200 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsx("div",{className:"bg-white/80 backdrop-blur-sm rounded-full p-1 sm:p-2 shadow-lg border border-orange-200 w-full max-w-md mx-4",children:b.jsx("div",{className:"flex w-full",children:["experience","certifications"].map(g=>b.jsx("button",{onClick:()=>r(g),className:`flex-1 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 flex items-center justify-center ${i===g?"bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105":"text-gray-600 hover:text-orange-600 hover:bg-orange-50"}`,children:g==="experience"?b.jsxs(b.Fragment,{children:[b.jsx(dv,{className:"w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"}),b.jsx("span",{className:"hidden sm:inline",children:"Experience"}),b.jsx("span",{className:"sm:hidden",children:"Exp"})]}):b.jsxs(b.Fragment,{children:[b.jsx(hg,{className:"w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"}),b.jsx("span",{className:"hidden sm:inline",children:"Certifications"}),b.jsx("span",{className:"sm:hidden",children:"Certs"})]})},g))})})}),i==="experience"&&b.jsx("div",{className:`transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsx("div",{className:"max-w-4xl mx-auto",children:l.map((g,v)=>b.jsxs("div",{className:"group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 p-4 sm:p-6 lg:p-8 mb-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100",style:{animationDelay:`${v*200}ms`},children:[b.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),b.jsxs("div",{className:"relative z-10",children:[b.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 space-y-4 sm:space-y-0",children:[b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center",children:b.jsx(gy,{className:"w-5 h-5 sm:w-6 sm:h-6 text-white"})}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300",children:g.title}),b.jsx("p",{className:"text-orange-600 font-semibold text-base sm:text-lg",children:g.company})]})]}),b.jsxs("div",{className:"text-left sm:text-right",children:[b.jsx("span",{className:"inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold",children:g.type}),b.jsxs("p",{className:"text-gray-500 mt-2 flex items-center sm:justify-end",children:[b.jsx(pg,{className:"w-4 h-4 mr-1"}),g.duration]})]})]}),b.jsx("p",{className:"text-gray-700 text-base sm:text-lg mb-6 leading-relaxed",children:g.description}),b.jsxs("div",{className:"mb-6",children:[b.jsx("h4",{className:"text-base sm:text-lg font-semibold text-gray-800 mb-3",children:"Technologies Used:"}),b.jsx("div",{className:"flex flex-wrap gap-2",children:g.technologies.map((_,M)=>b.jsx("span",{className:"bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition-colors duration-200",children:_},M))})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-base sm:text-lg font-semibold text-gray-800 mb-3",children:"Key Achievements:"}),b.jsx("ul",{className:"space-y-2",children:g.achievements.map((_,M)=>b.jsxs("li",{className:"flex items-start text-gray-700",children:[b.jsx(hv,{className:"w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5"}),b.jsx("span",{className:"text-sm sm:text-base",children:_})]},M))})]})]})]},v))})}),i==="certifications"&&b.jsxs("div",{className:`transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[b.jsx("div",{className:"flex justify-center mb-8 px-4",children:b.jsx("div",{className:"flex flex-wrap justify-center gap-2 max-w-2xl",children:d.map(g=>b.jsx("button",{onClick:()=>p(g),className:`px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${h===g?"bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg":"bg-white/80 text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-orange-200"}`,children:g},g))})}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",children:m.map((g,v)=>b.jsxs("div",{className:"group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-200 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500",style:{animationDelay:`${v*100}ms`},children:[b.jsxs("div",{className:"relative h-40 sm:h-48 overflow-hidden",children:[b.jsx("img",{src:g.image,alt:g.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",onError:_=>{_.target.style.display="none",_.target.nextSibling.style.display="flex"}}),b.jsxs("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 items-center justify-center hidden",children:[b.jsx("div",{className:"absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"}),b.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:b.jsxs("div",{className:"text-white text-center",children:[b.jsx(hg,{className:"w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 opacity-80"}),b.jsx("p",{className:"text-xs sm:text-sm opacity-80",children:"Certificate Image"})]})})]}),b.jsx("div",{className:"absolute top-3 sm:top-4 right-3 sm:right-4",children:b.jsxs("span",{className:"bg-white/90 backdrop-blur-sm text-orange-600 px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center",children:[b.jsx(_v,{className:"w-3 h-3 mr-1"}),g.grade]})})]}),b.jsxs("div",{className:"p-4 sm:p-6",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2",children:g.title}),b.jsx("p",{className:"text-orange-600 font-semibold mb-1 text-sm sm:text-base line-clamp-1",children:g.issuer}),b.jsxs("p",{className:"text-gray-500 text-xs sm:text-sm flex items-center",children:[b.jsx(pg,{className:"w-3 h-3 sm:w-4 sm:h-4 mr-1"}),g.date]})]}),b.jsx("div",{className:"mb-4",children:b.jsx("span",{className:"inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold",children:g.category})}),g.verifyLink!=="#"&&b.jsxs("a",{href:g.verifyLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-xs sm:text-sm transition-colors duration-200 group-hover:underline",children:[b.jsx(mv,{className:"w-3 h-3 sm:w-4 sm:h-4 mr-1"}),"Verify Certificate"]})]})]},v))})]}),b.jsx("div",{className:`mt-16 text-center transition-all duration-1000 delay-500 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",children:[b.jsx("div",{className:"group",children:b.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300",children:[b.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-orange-600 mb-2",children:"10"}),b.jsx("div",{className:"text-gray-600 text-sm sm:text-base",children:"Certifications"})]})}),b.jsx("div",{className:"group",children:b.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300",children:[b.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-orange-600 mb-2",children:"5"}),b.jsx("div",{className:"text-gray-600 text-sm sm:text-base",children:"IIT Courses"})]})}),b.jsx("div",{className:"group",children:b.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300",children:[b.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-orange-600 mb-2",children:"100%"}),b.jsx("div",{className:"text-gray-600 text-sm sm:text-base",children:"Completion Rate"})]})}),b.jsx("div",{className:"group",children:b.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300",children:[b.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-orange-600 mb-2",children:"Elite"}),b.jsx("div",{className:"text-gray-600 text-sm sm:text-base",children:"Grade Level"})]})})]})})]})})},pA=()=>{const[o,e]=Ve.useState(!1),[i,r]=Ve.useState({name:"",email:"",message:""}),[l,u]=Ve.useState(!1),[d,h]=Ve.useState(""),[p,m]=Ve.useState(""),[g,v]=Ve.useState(null),[_,M]=Ve.useState({x:0,y:0}),[E,R]=Ve.useState(null),y=Ve.useRef(null),x=Ve.useRef(null),O=Ve.useRef(null),U=Ve.useRef([]),C="service_v5sbc2o",H="template_axh5k2k",F="xJbHpN50t8_eFAeAG";Ve.useEffect(()=>{const j=document.createElement("script");return j.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",j.async=!0,j.onload=()=>{window.emailjs&&window.emailjs.init(F)},document.head.appendChild(j),()=>{j.parentNode&&j.parentNode.removeChild(j)}},[]),Ve.useEffect(()=>{const j=ae=>{M({x:ae.clientX,y:ae.clientY})};return window.addEventListener("mousemove",j),()=>window.removeEventListener("mousemove",j)},[]),Ve.useEffect(()=>{const j=new IntersectionObserver(([ae])=>{ae.isIntersecting&&e(!0)},{threshold:.1});return x.current&&j.observe(x.current),()=>j.disconnect()},[]),Ve.useEffect(()=>{if(!y.current)return;const j=new Sh,ae=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3),ie=new Rh({canvas:y.current,alpha:!0,antialias:!0});ie.setSize(window.innerWidth,window.innerHeight),ie.setClearColor(0,0),O.current=j;const z=[new Es(.4,.4,.4),new Ah(.25,16,16),new Eh(.25,.5,8),new Uc(.3),new Lc(.3),new Th(.25)],K=[new wi({color:16347926,transparent:!0,opacity:.4}),new wi({color:15357964,transparent:!0,opacity:.5}),new wi({color:16486972,transparent:!0,opacity:.4}),new wi({color:16096779,transparent:!0,opacity:.5}),new wi({color:16498468,transparent:!0,opacity:.4}),new wi({color:15680580,transparent:!0,opacity:.3})],Y=[];for(let pe=0;pe<20;pe++){const Se=z[Math.floor(Math.random()*z.length)],$=K[Math.floor(Math.random()*K.length)],me=new ti(Se,$);me.position.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),me.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),me.userData={initialY:me.position.y,speed:.5+Math.random()*1.5,amplitude:.5+Math.random()*1.5},j.add(me),Y.push(me)}U.current=Y,ae.position.z=8;let he=0;const L=()=>{requestAnimationFrame(L),he+=.01,Y.forEach((pe,Se)=>{pe.rotation.x+=.005*(Se%2===0?1:-1),pe.rotation.y+=.008*(Se%3===0?1:-1),pe.rotation.z+=.003*(Se%4===0?1:-1),pe.position.y=pe.userData.initialY+Math.sin(he*pe.userData.speed+Se*.5)*pe.userData.amplitude,pe.position.x+=Math.sin(he*.3+Se)*.001,pe.position.z+=Math.cos(he*.2+Se)*.001;const $=1+Math.sin(he*2+Se*.8)*.1;pe.scale.setScalar($)}),ie.render(j,ae)};L();const ne=()=>{ae.aspect=window.innerWidth/window.innerHeight,ae.updateProjectionMatrix(),ie.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ne),()=>{window.removeEventListener("resize",ne),ie.dispose()}},[]),Ve.useEffect(()=>{if(!U.current.length)return;const j=_.x/window.innerWidth*2-1,ae=-(_.y/window.innerHeight)*2+1;U.current.forEach((ie,z)=>{const K=.1+z%3*.05;ie.rotation.x+=ae*K*.01,ie.rotation.y+=j*K*.01})},[_]);const P=[{icon:Cc,label:"Email Me",href:"mailto:tamagnoroy.roy2005@example.com",color:"from-orange-500 to-red-500",description:"Drop me a line!",bgColor:"bg-orange-50"},{icon:dh,label:"LinkedIn",href:"https://www.linkedin.com/in/tamagno-roy-2ab072290/",color:"from-orange-600 to-orange-700",description:"Professional network",bgColor:"bg-orange-100"},{icon:wo,label:"GitHub",href:"https://github.com/tamo2005",color:"from-orange-700 to-orange-800",description:"Code repository",bgColor:"bg-orange-200"}],V=[{icon:Fy,label:"Location",value:"Barrackpur, West Bengal, IN",color:"text-orange-600"},{icon:pv,label:"Status",value:"Always ready to code",color:"text-orange-700"},{icon:fh,label:"Response",value:"Usually within 24h",color:"text-orange-800"}],D=j=>{r({...i,[j.target.name]:j.target.value})},w=async j=>{if(j.preventDefault(),!i.name.trim()||!i.email.trim()||!i.message.trim()){h("error"),m("Please fill in all fields."),setTimeout(()=>h(""),5e3);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email)){h("error"),m("Please enter a valid email address."),setTimeout(()=>h(""),5e3);return}u(!0),h(""),m("");try{if(!window.emailjs)throw new Error("EmailJS is not loaded. Please try again.");const ie=`
From: ${i.name}
Email: ${i.email}

Message:
${i.message}

---
This message was sent from your portfolio contact form.
      `.trim();if((await window.emailjs.send(C,H,{from_name:i.name,from_email:i.email,message:ie,to_name:"Tamagno Roy",reply_to:i.email,subject:`Portfolio Contact: Message from ${i.name}`})).status===200)h("success"),m("Your message has been sent successfully! I'll get back to you within 24 hours."),r({name:"",email:"",message:""});else throw new Error("Failed to send message")}catch(ie){console.error("EmailJS Error:",ie),h("error"),m("Sorry, there was an error sending your message. Please try again or contact me directly via email.")}finally{u(!1),setTimeout(()=>h(""),8e3)}},G=j=>{R(j)},q=()=>{R(null)};return b.jsxs("section",{ref:x,id:"contact",className:"relative py-16 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 overflow-hidden min-h-screen",children:[b.jsx("canvas",{ref:y,className:"absolute inset-0 w-full h-full opacity-60"}),b.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[b.jsx("div",{className:"absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-300/20 to-red-400/20 rounded-full blur-2xl animate-pulse"}),b.jsx("div",{className:"absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur-2xl animate-pulse delay-1000"}),b.jsx("div",{className:"absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-2000"})]}),b.jsx("div",{className:"absolute w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full pointer-events-none opacity-30 blur-sm transition-all duration-300 ease-out",style:{left:_.x-12,top:_.y-12,transform:"translate3d(0, 0, 0)"}}),b.jsxs("div",{className:"relative container mx-auto px-4 max-w-7xl",children:[b.jsx("div",{className:"text-center mb-12",children:b.jsxs("div",{className:`transition-all duration-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[b.jsxs("div",{className:"flex items-center justify-center mb-4",children:[b.jsx(vv,{className:"w-8 h-8 text-orange-500 mr-3 animate-spin"}),b.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 bg-clip-text text-transparent",children:"Let's Create Magic Together"}),b.jsx(yd,{className:"w-8 h-8 text-orange-500 ml-3 animate-bounce"})]}),b.jsx("p",{className:"text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed",children:"Transform your ideas into extraordinary digital experiences. I'm passionate about crafting innovative solutions that make a difference."})]})}),b.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 items-start",children:[b.jsx("div",{className:`transition-all duration-1000 delay-200 ${o?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,children:b.jsxs("div",{className:"bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500",children:[b.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-orange-700",children:[b.jsx(gv,{className:"w-6 h-6 mr-3"}),"Start a Conversation"]}),b.jsxs("form",{onSubmit:w,className:"space-y-6",children:[b.jsxs("div",{className:"relative",children:[b.jsx("label",{className:"block text-sm font-semibold mb-2 text-gray-700",children:"Full Name"}),b.jsx("input",{type:"text",name:"name",value:i.name,onChange:D,onFocus:()=>G("name"),onBlur:q,required:!0,className:`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 ${E==="name"?"border-orange-500 ring-4 ring-orange-200 transform scale-105":"border-gray-300 hover:border-orange-300"}`,placeholder:"What should I call you?"}),E==="name"&&b.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"})]}),b.jsxs("div",{className:"relative",children:[b.jsx("label",{className:"block text-sm font-semibold mb-2 text-gray-700",children:"Email Address"}),b.jsx("input",{type:"email",name:"email",value:i.email,onChange:D,onFocus:()=>G("email"),onBlur:q,required:!0,className:`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 ${E==="email"?"border-orange-500 ring-4 ring-orange-200 transform scale-105":"border-gray-300 hover:border-orange-300"}`,placeholder:"your.email@example.com"}),E==="email"&&b.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"})]}),b.jsxs("div",{className:"relative",children:[b.jsx("label",{className:"block text-sm font-semibold mb-2 text-gray-700",children:"Project Details"}),b.jsx("textarea",{name:"message",value:i.message,onChange:D,onFocus:()=>G("message"),onBlur:q,rows:"5",required:!0,className:`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none ${E==="message"?"border-orange-500 ring-4 ring-orange-200 transform scale-105":"border-gray-300 hover:border-orange-300"}`,placeholder:"Tell me about your vision, goals, and what you'd like to create together..."}),E==="message"&&b.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"})]}),b.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group",children:l?b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"}),b.jsx("span",{children:"Sending your message..."})]}):b.jsxs(b.Fragment,{children:[b.jsx(jy,{className:"w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform"}),b.jsx("span",{children:"Send Message"}),b.jsx(dg,{className:"w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"})]})})]}),d==="success"&&b.jsxs("div",{className:"mt-4 text-green-600 text-center font-semibold animate-fade-in bg-green-50 p-4 rounded-xl border border-green-200",children:[b.jsx(hv,{className:"w-6 h-6 mx-auto mb-2"}),"✨ ",p]}),d==="error"&&b.jsxs("div",{className:"mt-4 text-red-600 text-center font-semibold animate-fade-in bg-red-50 p-4 rounded-xl border border-red-200",children:[b.jsx(xy,{className:"w-6 h-6 mx-auto mb-2"}),p]})]})}),b.jsxs("div",{className:`transition-all duration-1000 delay-400 ${o?"opacity-100 translate-x-0":"opacity-0 translate-x-10"}`,children:[b.jsx("div",{className:"grid gap-4 mb-8",children:V.map((j,ae)=>{const ie=j.icon;return b.jsx("div",{className:"bg-white/80 backdrop-blur-xl rounded-xl p-5 border border-white/60 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group",style:{animationDelay:`${ae*.1}s`},children:b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("div",{className:"p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300",children:b.jsx(ie,{className:"w-5 h-5 text-white"})}),b.jsxs("div",{children:[b.jsx("div",{className:"font-semibold text-gray-800",children:j.label}),b.jsx("div",{className:`text-sm ${j.color} font-medium`,children:j.value})]})]})},j.label)})}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("h3",{className:"text-2xl font-bold mb-6 text-orange-700",children:"Connect & Follow"}),P.map((j,ae)=>{const ie=j.icon;return b.jsxs("a",{href:j.href,target:"_blank",rel:"noopener noreferrer",className:`group relative block bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-white/60 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${j.bgColor}/20`,style:{animationDelay:`${(ae+3)*.1}s`},onMouseEnter:()=>v(ae),onMouseLeave:()=>v(null),children:[b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("div",{className:`p-4 rounded-xl bg-gradient-to-r ${j.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`,children:b.jsx(ie,{className:"w-6 h-6 text-white"})}),b.jsxs("div",{className:"flex-1",children:[b.jsx("div",{className:"font-bold text-lg text-gray-800",children:j.label}),b.jsx("div",{className:"text-sm text-gray-600",children:j.description})]}),b.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0",children:b.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg",children:b.jsx(dg,{className:"w-5 h-5 text-white"})})})]}),g===ae&&b.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent rounded-xl"})]},j.label)})]})]})]}),b.jsx("div",{className:`text-center mt-16 transition-all duration-1000 delay-600 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:b.jsxs("div",{className:"bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-white/60 shadow-2xl",children:[b.jsx("h3",{className:"text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent",children:"Ready to Build Something Extraordinary?"}),b.jsx("p",{className:"text-gray-700 mb-6 text-lg",children:"From concept to launch, I specialize in creating digital experiences that captivate and convert. Let's discuss how we can bring your vision to life."}),b.jsxs("div",{className:"flex flex-wrap justify-center gap-3",children:[b.jsx("span",{className:"bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",children:"Web Development"}),b.jsx("span",{className:"bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",children:"UI/UX Design"}),b.jsx("span",{className:"bg-gradient-to-r from-orange-700 to-red-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",children:"React & Node.js"}),b.jsx("span",{className:"bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",children:"Custom Solutions"})]})]})})]}),b.jsx("style",{jsx:!0,children:`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `})]})},mA=()=>{const o=Ve.useRef(null),e=Ve.useRef(null),[i,r]=Ve.useState(!1),[l,u]=Ve.useState(new Date);Ve.useEffect(()=>{const p=setInterval(()=>{u(new Date)},1e3);return()=>clearInterval(p)},[]),Ve.useEffect(()=>{if(!o.current)return;const p=new Sh,m=new Hn(75,window.innerWidth/300,.1,1e3),g=new Rh({canvas:o.current,alpha:!0,antialias:!0});g.setSize(window.innerWidth,300),g.setClearColor(0,0),e.current=p;const v=new ni,_=150,M=new Float32Array(_*3),E=new Float32Array(_*3);for(let P=0;P<_*3;P+=3){M[P]=(Math.random()-.5)*20,M[P+1]=(Math.random()-.5)*10,M[P+2]=(Math.random()-.5)*20;const V=Math.random();E[P]=.98+V*.02,E[P+1]=.45+V*.35,E[P+2]=.09+V*.16}v.setAttribute("position",new jn(M,3)),v.setAttribute("color",new jn(E,3));const R=new Mh({size:.02,vertexColors:!0,transparent:!0,opacity:.8,blending:Tc}),y=new Vv(v,R);p.add(y);const x=new Bo(20,2,50,10),O=new wi({color:16347926,transparent:!0,opacity:.1,wireframe:!0}),U=new ti(x,O),C=new ti(x,O.clone());C.material.color.setHex(15357964),C.position.z=-1,p.add(U,C),m.position.z=5,m.position.y=1;const H=()=>{requestAnimationFrame(H),y.rotation.y+=.001,y.rotation.x+=5e-4;const P=Date.now()*.001,V=U.geometry.attributes.position.array,D=C.geometry.attributes.position.array;for(let G=0;G<V.length;G+=3){const q=V[G];V[G+1]=Math.sin(q*.5+P)*.3,D[G+1]=Math.sin(q*.3+P*1.5)*.2}U.geometry.attributes.position.needsUpdate=!0,C.geometry.attributes.position.needsUpdate=!0;const w=y.geometry.attributes.position.array;for(let G=0;G<w.length;G+=3)w[G+1]+=Math.sin(P+w[G])*.001;y.geometry.attributes.position.needsUpdate=!0,g.render(p,m)};H();const F=()=>{const P=window.innerWidth,V=300;m.aspect=P/V,m.updateProjectionMatrix(),g.setSize(P,V)};return window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F),g.dispose()}},[]);const d=[{name:"React",icon:"⚛️"},{name:"Three.js",icon:"🎯"},{name:"Vite",icon:"⚡"},{name:"Tailwind",icon:"🎨"}],h=[{name:"GitHub",icon:"🐙",url:"https://github.com/tamo2005"},{name:"LinkedIn",icon:"💼",url:"https://www.linkedin.com/in/tamo2005/"},{name:"Email",icon:"✉️",url:"mailto:tamagnoroy.roy2005@gmail.com"},{name:"Coffee",icon:"☕",url:"https://media.licdn.com/dms/image/v2/D4E12AQF-7Rswko1D8Q/article-cover_image-shrink_600_2000/B4EZdUVHuqG4AQ-/0/1749466512675?e=2147483647&v=beta&t=7izzTaqYzAQjh289buk1sOD17ArztSezK7QQOJM-7rU"}];return b.jsxs("footer",{className:"relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[b.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full opacity-60",style:{height:"300px"}}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent backdrop-blur-sm"}),b.jsxs("div",{className:"relative z-10 container mx-auto px-6 py-12",children:[b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[b.jsxs("div",{className:"text-center md:text-left",children:[b.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4",children:"Tamagno Roy"}),b.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"Crafting digital experiences with passion, precision, and probably too much caffeine ☕"})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("h4",{className:"text-lg font-semibold mb-4 text-orange-400",children:"Built With"}),b.jsx("div",{className:"flex justify-center gap-4 flex-wrap",children:d.map((p,m)=>b.jsxs("div",{className:"group relative bg-white/10 backdrop-blur-md rounded-lg p-3 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3",style:{animationDelay:`${m*.1}s`,animation:i?"pulse 2s infinite":"none"},children:[b.jsx("div",{className:"text-xl mb-1",children:p.icon}),b.jsx("div",{className:"text-xs text-gray-300 group-hover:text-white transition-colors",children:p.name})]},p.name))})]}),b.jsxs("div",{className:"text-center md:text-right",children:[b.jsx("h4",{className:"text-lg font-semibold mb-4 text-orange-400",children:"Connect"}),b.jsx("div",{className:"flex justify-center md:justify-end gap-3",children:h.map((p,m)=>b.jsxs("a",{href:p.url,className:"group relative w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1",style:{animationDelay:`${m*.1}s`,animation:i?`bounce 1s infinite ${m*.1}s`:"none"},children:[b.jsx("span",{className:"text-xl group-hover:scale-110 transition-transform",children:p.icon}),b.jsx("div",{className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:p.name})]},p.name))})]})]}),b.jsxs("div",{className:"relative",children:[b.jsx("div",{className:"absolute inset-0 flex items-center",children:b.jsx("div",{className:"w-full border-t border-gradient-to-r from-transparent via-orange-500/50 to-transparent"})}),b.jsx("div",{className:"relative flex justify-center",children:b.jsx("div",{className:"bg-gray-800 px-4",children:b.jsx("div",{className:"w-2 h-2 bg-orange-500 rounded-full animate-pulse"})})})]}),b.jsxs("div",{className:"mt-8 text-center space-y-2",children:[b.jsx("p",{className:"text-gray-400 text-sm",children:"© 2025 Tamagno Roy. Built with React, Three.js, Vite & Tailwind CSS."}),b.jsx("p",{className:"text-xs text-gray-500",children:"Designed with ❤️ and some nights of sleep (occasionally) 😴"}),b.jsxs("p",{className:"text-xs text-orange-400/70",children:["Last updated: ",l.toLocaleTimeString()," | Status: Caffeinated ☕"]})]}),b.jsx("button",{className:"fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 hover:rotate-180 flex items-center justify-center text-white text-xl z-20",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"🚀"})]}),b.jsx("style",{jsx:!0,children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `})]})},gA=()=>b.jsxs("div",{className:"min-h-screen",children:[b.jsx(nS,{}),b.jsx(iS,{}),b.jsx(uA,{}),b.jsx(fA,{}),b.jsx(dA,{}),b.jsx(hA,{}),b.jsx(pA,{}),b.jsx(mA,{})]});sy.createRoot(document.getElementById("root")).render(b.jsx(Ve.StrictMode,{children:b.jsx(gA,{})}));
