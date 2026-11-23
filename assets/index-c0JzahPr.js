(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))o(z);new MutationObserver(z=>{for(const _ of z)if(_.type==="childList")for(const E of _.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function r(z){const _={};return z.integrity&&(_.integrity=z.integrity),z.referrerPolicy&&(_.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?_.credentials="include":z.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(z){if(z.ep)return;z.ep=!0;const _=r(z);fetch(z.href,_)}})();var Ro={exports:{}},ru={};var gp;function Rg(){if(gp)return ru;gp=1;var g=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function r(o,z,_){var E=null;if(_!==void 0&&(E=""+_),z.key!==void 0&&(E=""+z.key),"key"in z){_={};for(var H in z)H!=="key"&&(_[H]=z[H])}else _=z;return z=_.ref,{$$typeof:g,type:o,key:E,ref:z!==void 0?z:null,props:_}}return ru.Fragment=h,ru.jsx=r,ru.jsxs=r,ru}var yp;function Ug(){return yp||(yp=1,Ro.exports=Rg()),Ro.exports}var f=Ug(),Uo={exports:{}},P={};var vp;function Hg(){if(vp)return P;vp=1;var g=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),E=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),R=Symbol.for("react.view_transition"),W=Symbol.iterator;function X(p){return p===null||typeof p!="object"?null:(p=W&&p[W]||p["@@iterator"],typeof p=="function"?p:null)}var tt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mt=Object.assign,Qt={};function Ut(p,C,V){this.props=p,this.context=C,this.refs=Qt,this.updater=V||tt}Ut.prototype.isReactComponent={},Ut.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},Ut.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Bt(){}Bt.prototype=Ut.prototype;function wt(p,C,V){this.props=p,this.context=C,this.refs=Qt,this.updater=V||tt}var Kt=wt.prototype=new Bt;Kt.constructor=wt,mt(Kt,Ut.prototype),Kt.isPureReactComponent=!0;var Mt=Array.isArray;function J(){}var $={H:null,A:null,T:null,S:null},ot=Object.prototype.hasOwnProperty;function qt(p,C,V){var Z=V.ref;return{$$typeof:g,type:p,key:C,ref:Z!==void 0?Z:null,props:V}}function ut(p,C){return qt(p.type,C,p.props)}function Ot(p){return typeof p=="object"&&p!==null&&p.$$typeof===g}function Wt(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(V){return C[V]})}var Ct=/\/+/g;function St(p,C){return typeof p=="object"&&p!==null&&p.key!=null?Wt(""+p.key):C.toString(36)}function B(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(J,J):(p.status="pending",p.then(function(C){p.status==="pending"&&(p.status="fulfilled",p.value=C)},function(C){p.status==="pending"&&(p.status="rejected",p.reason=C)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Q(p,C,V,Z,A){var w=typeof p;(w==="undefined"||w==="boolean")&&(p=null);var it=!1;if(p===null)it=!0;else switch(w){case"bigint":case"string":case"number":it=!0;break;case"object":switch(p.$$typeof){case g:case h:it=!0;break;case x:return it=p._init,Q(it(p._payload),C,V,Z,A)}}if(it)return A=A(p),it=Z===""?"."+St(p,0):Z,Mt(A)?(V="",it!=null&&(V=it.replace(Ct,"$&/")+"/"),Q(A,C,V,"",function(ce){return ce})):A!=null&&(Ot(A)&&(A=ut(A,V+(A.key==null||p&&p.key===A.key?"":(""+A.key).replace(Ct,"$&/")+"/")+it)),C.push(A)),1;it=0;var q=Z===""?".":Z+":";if(Mt(p))for(var I=0;I<p.length;I++)Z=p[I],w=q+St(Z,I),it+=Q(Z,C,V,w,A);else if(I=X(p),typeof I=="function")for(p=I.call(p),I=0;!(Z=p.next()).done;)Z=Z.value,w=q+St(Z,I++),it+=Q(Z,C,V,w,A);else if(w==="object"){if(typeof p.then=="function")return Q(B(p),C,V,Z,A);throw C=String(p),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return it}function L(p,C,V){if(p==null)return p;var Z=[],A=0;return Q(p,Z,"","",function(w){return C.call(V,w,A++)}),Z}function st(p){if(p._status===-1){var C=p._result,V=C();V.then(function(Z){(p._status===0||p._status===-1)&&(p._status=1,p._result=Z,V.status===void 0&&(V.status="fulfilled",V.value=Z))},function(Z){(p._status===0||p._status===-1)&&(p._status=2,p._result=Z,V.status===void 0&&(V.status="rejected",V.reason=Z))}),p._status===-1&&(p._status=0,p._result=V)}if(p._status===1)return p._result.default;throw p._result}var nt=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function ie(p){var C=$.T,V={};V.types=C!==null?C.types:null,$.T=V;try{var Z=p(),A=$.S;A!==null&&A(V,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(J,nt)}catch(w){nt(w)}finally{C!==null&&V.types!==null&&(C.types=V.types),$.T=C}}function Xe(p){var C=$.T;if(C!==null){var V=C.types;V===null?C.types=[p]:V.indexOf(p)===-1&&V.push(p)}else ie(Xe.bind(null,p))}var ke={map:L,forEach:function(p,C,V){L(p,function(){C.apply(this,arguments)},V)},count:function(p){var C=0;return L(p,function(){C++}),C},toArray:function(p){return L(p,function(C){return C})||[]},only:function(p){if(!Ot(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return P.Activity=m,P.Children=ke,P.Component=Ut,P.Fragment=r,P.Profiler=z,P.PureComponent=wt,P.StrictMode=o,P.Suspense=D,P.ViewTransition=R,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,P.__COMPILER_RUNTIME={__proto__:null,c:function(p){return $.H.useMemoCache(p)}},P.addTransitionType=Xe,P.cache=function(p){return function(){return p.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(p,C,V){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var Z=mt({},p.props),A=p.key;if(C!=null)for(w in C.key!==void 0&&(A=""+C.key),C)!ot.call(C,w)||w==="key"||w==="__self"||w==="__source"||w==="ref"&&C.ref===void 0||(Z[w]=C[w]);var w=arguments.length-2;if(w===1)Z.children=V;else if(1<w){for(var it=Array(w),q=0;q<w;q++)it[q]=arguments[q+2];Z.children=it}return qt(p.type,A,Z)},P.createContext=function(p){return p={$$typeof:E,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:_,_context:p},p},P.createElement=function(p,C,V){var Z,A={},w=null;if(C!=null)for(Z in C.key!==void 0&&(w=""+C.key),C)ot.call(C,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(A[Z]=C[Z]);var it=arguments.length-2;if(it===1)A.children=V;else if(1<it){for(var q=Array(it),I=0;I<it;I++)q[I]=arguments[I+2];A.children=q}if(p&&p.defaultProps)for(Z in it=p.defaultProps,it)A[Z]===void 0&&(A[Z]=it[Z]);return qt(p,w,A)},P.createRef=function(){return{current:null}},P.forwardRef=function(p){return{$$typeof:H,render:p}},P.isValidElement=Ot,P.lazy=function(p){return{$$typeof:x,_payload:{_status:-1,_result:p},_init:st}},P.memo=function(p,C){return{$$typeof:M,type:p,compare:C===void 0?null:C}},P.startTransition=ie,P.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},P.use=function(p){return $.H.use(p)},P.useActionState=function(p,C,V){return $.H.useActionState(p,C,V)},P.useCallback=function(p,C){return $.H.useCallback(p,C)},P.useContext=function(p){return $.H.useContext(p)},P.useDebugValue=function(){},P.useDeferredValue=function(p,C){return $.H.useDeferredValue(p,C)},P.useEffect=function(p,C){return $.H.useEffect(p,C)},P.useEffectEvent=function(p){return $.H.useEffectEvent(p)},P.useId=function(){return $.H.useId()},P.useImperativeHandle=function(p,C,V){return $.H.useImperativeHandle(p,C,V)},P.useInsertionEffect=function(p,C){return $.H.useInsertionEffect(p,C)},P.useLayoutEffect=function(p,C){return $.H.useLayoutEffect(p,C)},P.useMemo=function(p,C){return $.H.useMemo(p,C)},P.useOptimistic=function(p,C){return $.H.useOptimistic(p,C)},P.useReducer=function(p,C,V){return $.H.useReducer(p,C,V)},P.useRef=function(p){return $.H.useRef(p)},P.useState=function(p){return $.H.useState(p)},P.useSyncExternalStore=function(p,C,V){return $.H.useSyncExternalStore(p,C,V)},P.useTransition=function(){return $.H.useTransition()},P.version="19.3.1",P}var bp;function Zo(){return bp||(bp=1,Uo.exports=Hg()),Uo.exports}var Zt=Zo(),Ho={exports:{}},du={},Bo={exports:{}},wo={};var xp;function Bg(){return xp||(xp=1,(function(g){function h(B,Q){var L=B.length;B.push(Q);t:for(;0<L;){var st=L-1>>>1,nt=B[st];if(0<z(nt,Q))B[st]=Q,B[L]=nt,L=st;else break t}}function r(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var Q=B[0],L=B.pop();if(L!==Q){B[0]=L;t:for(var st=0,nt=B.length,ie=nt>>>1;st<ie;){var Xe=2*(st+1)-1,ke=B[Xe],p=Xe+1,C=B[p];if(0>z(ke,L))p<nt&&0>z(C,ke)?(B[st]=C,B[p]=L,st=p):(B[st]=ke,B[Xe]=L,st=Xe);else if(p<nt&&0>z(C,L))B[st]=C,B[p]=L,st=p;else break t}}return Q}function z(B,Q){var L=B.sortIndex-Q.sortIndex;return L!==0?L:B.id-Q.id}if(g.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;g.unstable_now=function(){return _.now()}}else{var E=Date,H=E.now();g.unstable_now=function(){return E.now()-H}}var D=[],M=[],x=1,m=null,R=3,W=!1,X=!1,tt=!1,mt=!1,Qt=typeof setTimeout=="function"?setTimeout:null,Ut=typeof clearTimeout=="function"?clearTimeout:null,Bt=typeof setImmediate<"u"?setImmediate:null;function wt(B){for(var Q=r(M);Q!==null;){if(Q.callback===null)o(M);else if(Q.startTime<=B)o(M),Q.sortIndex=Q.expirationTime,h(D,Q);else break;Q=r(M)}}function Kt(B){if(tt=!1,wt(B),!X)if(r(D)!==null)X=!0,Mt||(Mt=!0,Ot());else{var Q=r(M);Q!==null&&St(Kt,Q.startTime-B)}}var Mt=!1,J=-1,$=5,ot=-1;function qt(){return mt?!0:!(g.unstable_now()-ot<$)}function ut(){if(mt=!1,Mt){var B=g.unstable_now();ot=B;var Q=!0;try{t:{X=!1,tt&&(tt=!1,Ut(J),J=-1),W=!0;var L=R;try{e:{for(wt(B),m=r(D);m!==null&&!(m.expirationTime>B&&qt());){var st=m.callback;if(typeof st=="function"){m.callback=null,R=m.priorityLevel;var nt=st(m.expirationTime<=B);if(B=g.unstable_now(),typeof nt=="function"){m.callback=nt,wt(B),Q=!0;break e}m===r(D)&&o(D),wt(B)}else o(D);m=r(D)}if(m!==null)Q=!0;else{var ie=r(M);ie!==null&&St(Kt,ie.startTime-B),Q=!1}}break t}finally{m=null,R=L,W=!1}Q=void 0}}finally{Q?Ot():Mt=!1}}}var Ot;if(typeof Bt=="function")Ot=function(){Bt(ut)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,Ct=Wt.port2;Wt.port1.onmessage=ut,Ot=function(){Ct.postMessage(null)}}else Ot=function(){Qt(ut,0)};function St(B,Q){J=Qt(function(){B(g.unstable_now())},Q)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(B){B.callback=null},g.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<B?Math.floor(1e3/B):5},g.unstable_getCurrentPriorityLevel=function(){return R},g.unstable_next=function(B){switch(R){case 1:case 2:case 3:var Q=3;break;default:Q=R}var L=R;R=Q;try{return B()}finally{R=L}},g.unstable_requestPaint=function(){mt=!0},g.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var L=R;R=B;try{return Q()}finally{R=L}},g.unstable_scheduleCallback=function(B,Q,L){var st=g.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?st+L:st):L=st,B){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=L+nt,B={id:x++,callback:Q,priorityLevel:B,startTime:L,expirationTime:nt,sortIndex:-1},L>st?(B.sortIndex=L,h(M,B),r(D)===null&&B===r(M)&&(tt?(Ut(J),J=-1):tt=!0,St(Kt,L-st))):(B.sortIndex=nt,h(D,B),X||W||(X=!0,Mt||(Mt=!0,Ot()))),B},g.unstable_shouldYield=qt,g.unstable_wrapCallback=function(B){var Q=R;return function(){var L=R;R=Q;try{return B.apply(this,arguments)}finally{R=L}}}})(wo)),wo}var Sp;function wg(){return Sp||(Sp=1,Bo.exports=Bg()),Bo.exports}var qo={exports:{}},ue={};var Tp;function qg(){if(Tp)return ue;Tp=1;var g=Zo();function h(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)m+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(h(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},z=Symbol.for("react.portal"),_=Symbol.for("react.recoverable"),E=Symbol.for("react.optimistic_key");function H(x,m,R){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:W==null?null:W===E?E:""+W,children:x,containerInfo:m,implementation:R}}var D=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ue.browser=function(x){return{$$typeof:_,_reason:x}},ue.createPortal=function(x,m){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(h(299));return H(x,m,null,R)},ue.flushSync=function(x){var m=D.T,R=o.p;try{if(D.T=null,o.p=2,x)return x()}finally{D.T=m,o.p=R,o.d.f()}},ue.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(x,m))},ue.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},ue.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var R=m.as,W=M(R,m.crossOrigin),X=typeof m.integrity=="string"?m.integrity:void 0,tt=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;R==="style"?o.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:W,integrity:X,fetchPriority:tt}):R==="script"&&o.d.X(x,{crossOrigin:W,integrity:X,fetchPriority:tt,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ue.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var R=M(m.as,m.crossOrigin);o.d.M(x,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&o.d.M(x)},ue.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var R=m.as,W=M(R,m.crossOrigin);o.d.L(x,R,{crossOrigin:W,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ue.preloadModule=function(x,m){if(typeof x=="string")if(m){var R=M(m.as,m.crossOrigin);o.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else o.d.m(x)},ue.requestFormReset=function(x){o.d.r(x)},ue.unstable_batchedUpdates=function(x,m){return x(m)},ue.useFormState=function(x,m,R){return D.H.useFormState(x,m,R)},ue.useFormStatus=function(){return D.H.useHostTransitionStatus()},ue.version="19.3.1",ue}var Ep;function Yg(){if(Ep)return qo.exports;Ep=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(h){console.error(h)}}return g(),qo.exports=qg(),qo.exports}var zp;function Gg(){if(zp)return du;zp=1;var g=wg(),h=Zo(),r=Yg();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _(t){for(var e=t,l=e;l&&!l.alternate;)e=l,(e.flags&4098)!==0&&(t=e.return),l=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function E(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(_(t)!==t)throw Error(o(188))}function M(t){var e=t.alternate;if(!e){if(e=_(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var u=a.alternate;if(u===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===l)return D(a),t;if(u===n)return D(a),e;u=u.sibling}throw Error(o(188))}if(l.return!==n.return)l=a,n=u;else{for(var i=!1,c=a.child;c;){if(c===l){i=!0,l=a,n=u;break}if(c===n){i=!0,n=a,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,n=a;break}if(c===n){i=!0,n=u,l=a;break}c=c.sibling}if(!i)throw Error(o(189))}}if(l.alternate!==n)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}function m(t,e,l,n,a,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&l(t,n,a,u)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&m(t.child,e,l,n,a,u))return!0;t=t.sibling}return!1}function R(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function W(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function X(t){var e=[null,null],l=R(t);return l===null||tt(e,t,l.child,{foundSelf:!1}),e}function tt(t,e,l,n){for(;l!==null;){if(l===e)n.foundSelf=!0;else if(l.tag===5||l.tag===27||l.tag===6){if(n.foundSelf)return t[1]=l,!0;t[0]=l}else if((l.tag!==22||l.memoizedState===null)&&tt(t,e,l.child,n))return!0;l=l.sibling}return!1}function mt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(o(559))}}var Qt=null,Ut=null;function Bt(t,e,l){return t===l?!0:t===e?(Qt=t,!0):!1}function wt(t,e,l){return t===l?(Ut=t,!1):t===e?(Ut!==null&&(Qt=t),!0):!1}function Kt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Mt(t,e,l){for(var n=0,a=t;a;a=l(a))n++;a=0;for(var u=e;u;u=l(u))a++;for(;0<n-a;)t=l(t),n--;for(;0<a-n;)e=l(e),a--;for(;n--;){if(t===e||e!==null&&t===e.alternate)return t;t=l(t),e=l(e)}return null}var J=Object.assign,$=Symbol.for("react.element"),ot=Symbol.for("react.transitional.element"),qt=Symbol.for("react.portal"),ut=Symbol.for("react.fragment"),Ot=Symbol.for("react.strict_mode"),Wt=Symbol.for("react.profiler"),Ct=Symbol.for("react.consumer"),St=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Xe=Symbol.for("react.legacy_hidden"),ke=Symbol.for("react.memo_cache_sentinel"),p=Symbol.for("react.view_transition"),C=Symbol.for("react.recoverable"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var A=Symbol.for("react.client.reference");function w(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===A?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ut:return"Fragment";case Wt:return"Profiler";case Ot:return"StrictMode";case Q:return"Suspense";case L:return"SuspenseList";case ie:return"Activity";case p:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case qt:return"Portal";case St:return t.displayName||"Context";case Ct:return(t._context.displayName||"Context")+".Consumer";case B:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case st:return e=t.displayName||null,e!==null?e:w(t.type)||"Memo";case nt:e=t._payload,t=t._init;try{return w(t(e))}catch{}}return null}var it=Array.isArray,q=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Fi=[],Nn=-1;function Fe(t){return{current:t}}function It(t){0>Nn||(t.current=Fi[Nn],Fi[Nn]=null,Nn--)}function zt(t,e){Nn++,Fi[Nn]=t.current,t.current=e}var We=Fe(null),ya=Fe(null),Nl=Fe(null),yu=Fe(null);function vu(t,e){switch(zt(Nl,e),zt(ya,t),zt(We,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Nm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Nm(e),t=Am(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}It(We),zt(We,t)}function An(){It(We),It(ya),It(Nl)}function Wi(t){var e=t.memoizedState;e!==null&&(ma._currentValue=e.memoizedState,zt(yu,t)),e=We.current;var l=Am(e,t.type);e!==l&&(zt(ya,t),zt(We,l))}function bu(t){ya.current===t&&(It(We),It(ya)),yu.current===t&&(It(yu),ma._currentValue=ce)}var Ii,Ko;function Al(t){if(Ii===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ii=e&&e[1]||"",Ko=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ii+t+Ko}var Pi=!1;function tc(t,e){if(!t||Pi)return"";Pi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(U){var y=U}Reflect.construct(t,[],j)}else{try{j.call()}catch(U){y=U}j=!1;try{var T=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),j=!0,new t}finally{j&&(T!==void 0?Object.defineProperty(t.prototype,"props",T):delete t.prototype.props)}}}else{try{throw Error()}catch(U){y=U}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(U){if(U&&y&&typeof U.stack=="string")return[U.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),b=c.split(`
`);for(a=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;if(n===s.length||a===b.length)for(n=s.length-1,a=b.length-1;1<=n&&0<=a&&s[n]!==b[a];)a--;for(;1<=n&&0<=a;n--,a--)if(s[n]!==b[a]){if(n!==1||a!==1)do if(n--,a--,0>a||s[n]!==b[a]){var N=`
`+s[n].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=n&&0<=a);break}}}finally{Pi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Al(l):""}function wp(t,e){switch(t.tag){case 26:case 27:case 5:return Al(t.type);case 16:return Al("Lazy");case 13:return t.child!==e&&e!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return tc(t.type,!1);case 11:return tc(t.type.render,!1);case 1:return tc(t.type,!0);case 31:return Al("Activity");case 30:return Al("ViewTransition");default:return""}}function Jo(t){try{var e="",l=null;do e+=wp(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ec=Object.prototype.hasOwnProperty,lc=g.unstable_scheduleCallback,nc=g.unstable_cancelCallback,qp=g.unstable_shouldYield,Yp=g.unstable_requestPaint,Se=g.unstable_now,Gp=g.unstable_getCurrentPriorityLevel,$o=g.unstable_ImmediatePriority,ko=g.unstable_UserBlockingPriority,xu=g.unstable_NormalPriority,Lp=g.unstable_LowPriority,Fo=g.unstable_IdlePriority,Xp=g.log,Qp=g.unstable_setDisableYieldValue,va=null,Te=null;function Ol(t){if(typeof Xp=="function"&&Qp(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(va,t)}catch{}}var Ee=Math.clz32?Math.clz32:Kp,Vp=Math.log,Zp=Math.LN2;function Kp(t){return t>>>=0,t===0?32:31-(Vp(t)/Zp|0)|0}var Su=256,Tu=262144,Eu=4194304;function en(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function zu(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=n&134217727;return c!==0?(n=c&~u,n!==0?a=en(n):(i&=c,i!==0?a=en(i):l||(l=c&~t,l!==0&&(a=en(l))))):(c=n&~u,c!==0?a=en(c):i!==0?a=en(i):l||(l=n&~t,l!==0&&(a=en(l)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:a}function ba(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Wo(t,e){(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-Ee(l),a=1<<n;e|=t[n],l&=~a}return e}function Jp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Io(){var t=Eu;return Eu<<=1,(Eu&62914560)===0&&(Eu=4194304),t}function ac(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function xa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $p(t,e,l,n,a,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,b=t.hiddenUpdates;for(l=i&~l;0<l;){var N=31-Ee(l),j=1<<N;c[N]=0,s[N]=-1;var y=b[N];if(y!==null)for(b[N]=null,N=0;N<y.length;N++){var T=y[N];T!==null&&(T.lane&=-536870913)}l&=~j}n!==0&&Po(t,n,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Po(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Ee(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function ts(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-Ee(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function es(t,e){var l=e&-e;return l=(l&42)!==0?1:uc(l),(l&(t.suspendedLanes|e))!==0?0:l}function uc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ic(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ls(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:op(t.type))}function ns(t,e){var l=I.p;try{return I.p=t,e()}finally{I.p=l}}var sl=Math.random().toString(36).slice(2),Pt="__reactFiber$"+sl,pe="__reactProps$"+sl,On="__reactContainer$"+sl,as="__reactEvents$"+sl,kp="__reactListeners$"+sl,Fp="__reactHandles$"+sl,us="__reactResources$"+sl,Sa="__reactMarker$"+sl,Nu="__reactLoad$"+sl;function Au(t){delete t[Pt],delete t[pe],delete t[kp],delete t[Fp]}function ln(t){var e;if(e=t[Pt])return e;for(var l=t.parentNode;l;){if(e=l[On]||l[Pt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Qm(t);t!==null;){if(l=t[Pt])return l;t=Qm(t)}return e}t=l,l=t.parentNode}return null}function jn(t){if(t=t[Pt]||t[On]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ta(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Mn(t){var e=t[us];return e||(e=t[us]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Sa]=!0}function is(t){t[Nu]=void 0}var cs=new Set,fs={};function nn(t,e){_n(t,e),_n(t+"Capture",e)}function _n(t,e){for(fs[t]=e,t=0;t<e.length;t++)cs.add(e[t])}var Wp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),os={},ss={};function Ip(t){return ec.call(ss,t)?!0:ec.call(os,t)?!1:Wp.test(t)?ss[t]=!0:(os[t]=!0,!1)}var ht=!1;function rs(){var t=ht;return ht=!1,t}function Ou(t,e,l){if(Ip(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,l)}}function ju(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,l)}}function rl(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,n)}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ds(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pp(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cc(t){if(!t._valueTracker){var e=ds(t)?"checked":"value";t._valueTracker=Pp(t,e,""+t[e])}}function ms(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=ds(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}var th=/[\n"\\]/g;function Re(t){return t.replace(th,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fc(t,e,l,n,a,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?i==="number"&&t.value==e?oc(t,ze(t.value)):oc(t,ze(e)):l!=null?oc(t,ze(l)):n!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ze(c):t.removeAttribute("name")}function ps(t,e,l,n,a,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){cc(t);return}l=l!=null?""+ze(l):"",e=e!=null?""+ze(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=c?t.checked:!!n,t.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),cc(t)}function oc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Cn(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+ze(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function hs(t,e,l){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ze(l):""}function gs(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(o(92));if(it(n)){if(1<n.length)throw Error(o(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=ze(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),cc(t)}function Dn(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ys(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||eh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function vs(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="",ht=!0);for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&(ys(t,a,n),ht=!0)}else for(var u in e)e.hasOwnProperty(u)&&ys(t,u,e[u])}function sc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(t){return nh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ie(){}var rc=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rn=null,Un=null;function bs(t){var e=jn(t);if(e&&(t=e.stateNode)){var l=t[pe]||null;t:switch(t=e.stateNode,e.type){case"input":if(fc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[pe]||null;if(!a)throw Error(o(90));fc(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&ms(n)}break t;case"textarea":hs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Cn(t,!!l.multiple,e,!1)}}}var mc=!1;function xs(t,e,l){if(mc)return t(e,l);mc=!0;try{var n=t(e);return n}finally{if(mc=!1,(Rn!==null||Un!==null)&&(Mi(),Rn&&(e=Rn,t=Un,Un=Rn=null,bs(e),t)))for(e=0;e<t.length;e++)bs(t[e])}}function Ea(t,e){var l=t.stateNode;if(l===null)return null;var n=l[pe]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var dl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=!1;if(dl)try{var za={};Object.defineProperty(za,"passive",{get:function(){pc=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{pc=!1}var jl=null,hc=null,_u=null;function Ss(){if(_u)return _u;var t,e=hc,l=e.length,n,a="value"in jl?jl.value:jl.textContent,u=a.length;for(t=0;t<l&&e[t]===a[t];t++);var i=l-t;for(n=1;n<=i&&e[l-n]===a[u-n];n++);return _u=a.slice(t,1<n?1-n:void 0)}function Cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Du(){return!0}function Ts(){return!1}function oe(t){function e(l,n,a,u,i){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Du:Ts,this.isPropagationStopped=Ts,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),e}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=oe(Ml),Na=J({},Ml,{view:0,detail:0}),ah=oe(Na),gc,yc,Aa,Uu=J({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(gc=t.screenX-Aa.screenX,yc=t.screenY-Aa.screenY):yc=gc=0,Aa=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Es=oe(Uu),uh=J({},Uu,{dataTransfer:0}),ih=oe(uh),ch=J({},Na,{relatedTarget:0}),vc=oe(ch),fh=J({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),oh=oe(fh),sh=J({},Ml,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rh=oe(sh),dh=J({},Ml,{data:0}),zs=oe(dh),mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hh[t])?!!e[t]:!1}function bc(){return gh}var yh=J({},Na,{key:function(t){if(t.key){var e=mh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ph[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(t){return t.type==="keypress"?Cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vh=oe(yh),bh=J({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=oe(bh),xh=J({},Ml,{submitter:0}),Sh=oe(xh),Th=J({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Eh=oe(Th),zh=J({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nh=oe(zh),Ah=J({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=oe(Ah),jh=J({},Ml,{newState:0,oldState:0,source:0}),Mh=oe(jh),_h=[9,13,27,32],xc=dl&&"CompositionEvent"in window,Oa=null;dl&&"documentMode"in document&&(Oa=document.documentMode);var Ch=dl&&"TextEvent"in window&&!Oa,As=dl&&(!xc||Oa&&8<Oa&&11>=Oa),Os=" ",js=!1;function Ms(t,e){switch(t){case"keyup":return _h.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1;function Dh(t,e){switch(t){case"compositionend":return _s(e);case"keypress":return e.which!==32?null:(js=!0,Os);case"textInput":return t=e.data,t===Os&&js?null:t;default:return null}}function Rh(t,e){if(Hn)return t==="compositionend"||!xc&&Ms(t,e)?(t=Ss(),_u=hc=jl=null,Hn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return As&&e.locale!=="ko"?null:e.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uh[t.type]:e==="textarea"}function Ds(t,e,l,n){Rn?Un?Un.push(n):Un=[n]:Rn=n,e=Hi(e,"onChange"),0<e.length&&(l=new Ru("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var ja=null,Ma=null;function Hh(t){bm(t,0)}function Hu(t){var e=Ta(t);if(ms(e))return t}function Rs(t,e){if(t==="change")return e}var Us=!1;if(dl){var Sc;if(dl){var Tc="oninput"in document;if(!Tc){var Hs=document.createElement("div");Hs.setAttribute("oninput","return;"),Tc=typeof Hs.oninput=="function"}Sc=Tc}else Sc=!1;Us=Sc&&(!document.documentMode||9<document.documentMode)}function Bs(){ja&&(ja.detachEvent("onpropertychange",ws),Ma=ja=null)}function ws(t){if(t.propertyName==="value"&&Hu(Ma)){var e=[];Ds(e,Ma,t,dc(t)),xs(Hh,e)}}function Bh(t,e,l){t==="focusin"?(Bs(),ja=e,Ma=l,ja.attachEvent("onpropertychange",ws)):t==="focusout"&&Bs()}function wh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Ma)}function qh(t,e){if(t==="click")return Hu(e)}function Yh(t,e){if(t==="input"||t==="change")return Hu(e)}function Gh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ne=typeof Object.is=="function"?Object.is:Gh;function _a(t,e){if(Ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!ec.call(e,a)||!Ne(t[a],e[a]))return!1}return!0}function Ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ys(t,e){var l=qs(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=qs(l)}}function Gs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ls(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ec(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ec(t.document)}return e}function zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Lh=dl&&"documentMode"in document&&11>=document.documentMode,Bn=null,Nc=null,Ca=null,Ac=!1;function Xs(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ac||Bn==null||Bn!==Ec(n)||(n=Bn,"selectionStart"in n&&zc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ca&&_a(Ca,n)||(Ca=n,n=Hi(Nc,"onSelect"),0<n.length&&(e=new Ru("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=Bn)))}function an(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var wn={animationend:an("Animation","AnimationEnd"),animationiteration:an("Animation","AnimationIteration"),animationstart:an("Animation","AnimationStart"),transitionrun:an("Transition","TransitionRun"),transitionstart:an("Transition","TransitionStart"),transitioncancel:an("Transition","TransitionCancel"),transitionend:an("Transition","TransitionEnd")},Oc={},Qs={};dl&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function un(t){if(Oc[t])return Oc[t];if(!wn[t])return t;var e=wn[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Qs)return Oc[t]=e[l];return t}var Vs=un("animationend"),Zs=un("animationiteration"),Ks=un("animationstart"),Xh=un("transitionrun"),Qh=un("transitionstart"),Vh=un("transitioncancel"),Js=un("transitionend"),$s=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function Qe(t,e){$s.set(t,e),nn(e,[t])}var Zh=0;function ml(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Je.identifierPrefix;var l=Zh++;return t="_"+t+"t_"+l.toString(32)+"_",e.autoName=t}function ks(t){if(t==null||typeof t=="string")return t;var e=null,l=na;if(l!==null)for(var n=0;n<l.length;n++){var a=t[l[n]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function pl(t,e){return t=ks(t),e=ks(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Bu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ue=[],qn=0,Mc=0;function wu(){for(var t=qn,e=Mc=qn=0;e<t;){var l=Ue[e];Ue[e++]=null;var n=Ue[e];Ue[e++]=null;var a=Ue[e];Ue[e++]=null;var u=Ue[e];if(Ue[e++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}u!==0&&Fs(l,a,u)}}function qu(t,e,l,n){Ue[qn++]=t,Ue[qn++]=e,Ue[qn++]=l,Ue[qn++]=n,Mc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function _c(t,e,l,n){return qu(t,e,l,n),Yu(t)}function cn(t,e){return qu(t,null,null,e),Yu(t)}function Fs(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,u=t.return;u!==null;)u.childLanes|=l,n=u.alternate,n!==null&&(n.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-Ee(l),t=u.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),u):null}function Yu(t){if(50<Pa)throw Pa=0,ji=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Yn={};function Kh(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,l,n){return new Kh(t,e,l,n)}function Cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hl(t,e){var l=t.alternate;return l===null?(l=he(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&1206910976,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Ws(t,e){t.flags&=1206910978;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Gu(t,e,l,n,a,u){var i=0;if(n=t,typeof n=="function")Cc(n)&&(i=1);else if(typeof n=="string")i=xg(t,l,We.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(n){case ie:return t=he(31,l,e,a),t.elementType=ie,t.lanes=u,t;case ut:return fn(l.children,a,u,e);case Ot:i=8,a|=24;break;case Wt:return t=he(12,l,e,a|2),t.elementType=Wt,t.lanes=u,t;case Q:return t=he(13,l,e,a),t.elementType=Q,t.lanes=u,t;case L:return t=he(19,l,e,a),t.elementType=L,t.lanes=u,t;case Xe:case p:return t=a|32,t=he(30,l,e,t),t.elementType=p,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case St:i=10;break t;case Ct:i=9;break t;case B:i=11;break t;case st:i=14;break t;case nt:i=16,n=null;break t}i=29,l=Error(o(130,t===null?"null":typeof t,"")),n=null}return e=he(i,l,e,a),e.elementType=t,e.type=n,e.lanes=u,e}function fn(t,e,l,n){return t=he(7,t,n,e),t.lanes=l,t}function Dc(t,e,l){return t=he(6,t,null,e),t.lanes=l,t}function Is(t){var e=he(18,null,null,0);return e.stateNode=t,e}function Rc(t,e,l){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ps=new WeakMap;function He(t,e){if(typeof t=="object"&&t!==null){var l=Ps.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Jo(e)},Ps.set(t,e),e)}return{value:t,source:e,stack:Jo(e)}}var Gn=[],Ln=0,Lu=null,Da=0,Be=[],we=0,_l=null,Pe=1,tl="";function gl(t,e){Gn[Ln++]=Da,Gn[Ln++]=Lu,Lu=t,Da=e}function tr(t,e,l){Be[we++]=Pe,Be[we++]=tl,Be[we++]=_l,_l=t;var n=Pe;t=tl;var a=32-Ee(n)-1;n&=~(1<<a),l+=1;var u=32-Ee(e)+a;if(30<u){var i=a-a%5;u=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Pe=1<<32-Ee(e)+a|l<<a|n,tl=u+t}else Pe=1<<u|l<<a|n,tl=t}function Xu(t){t.return!==null&&(gl(t,1),tr(t,1,0))}function Uc(t){for(;t===Lu;)Lu=Gn[--Ln],Gn[Ln]=null,Da=Gn[--Ln],Gn[Ln]=null;for(;t===_l;)_l=Be[--we],Be[we]=null,tl=Be[--we],Be[we]=null,Pe=Be[--we],Be[we]=null}function er(t,e){Be[we++]=Pe,Be[we++]=tl,Be[we++]=_l,Pe=e.id,tl=e.overflow,_l=t}var $t=null,Nt=null,at=!1,Cl=null,qe=!1,Hc=Error(o(519));function Dl(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ra(He(e,t)),Hc}function lr(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[Pt]=t,e[pe]=n,l){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(l=0;l<eu.length;l++)ft(eu[l],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),ps(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),gs(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||Em(e.textContent,l)?(n.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),n.onScroll!=null&&ft("scroll",e),n.onScrollEnd!=null&&ft("scrollend",e),n.onClick!=null&&(e.onclick=Ie),e=!0):e=!1,e||Dl(t,!0)}function Qu(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:qe=!1;return;case 27:case 3:qe=!0;return;default:$t=$t.return}}function Xn(t){if(t!==$t)return!1;if(!at)return Qu(t),at=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||mo(t.type,t.memoizedProps)),l=!l),l&&Nt&&Dl(t),Qu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Nt=Xm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Nt=Xm(t)}else e===27?(e=Nt,$l(t.type)?(t=To,To=null,Nt=t):Nt=e):Nt=$t?Ge(t.stateNode.nextSibling):null;return!0}function on(){Nt=$t=null,at=!1}function Bc(){var t=Cl;return t!==null&&(ve===null?ve=t:ve.push.apply(ve,t),Cl=null),t}function Ra(t){Cl===null?Cl=[t]:Cl.push(t)}var wc=Fe(null),sn=null,yl=null;function Rl(t,e,l){zt(wc,e._currentValue),e._currentValue=l}function vl(t){t._currentValue=wc.current,It(wc)}function Vu(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function qc(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=a;for(var s=0;s<e.length;s++)if(c.context===e[s]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Vu(u.return,l,t),n||(i=null);break t}u=c.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(o(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Vu(i,l,t),i=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=l,i=a.alternate,i!==null&&(i.lanes|=l),Vu(a.return,l,t),i=a.child,i=i!==null?i.sibling:null):i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function rn(t,e,l,n){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(o(387));if(i=i.memoizedProps,i!==null){var c=a.type;Ne(a.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(a===yu.current){if(i=a.alternate,i===null)throw Error(o(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ma):t=[ma])}a=a.return}return t!==null&&qc(e,t,l,n),e.flags|=262144,t!==null}function Zu(t){for(t=t.firstContext;t!==null;){if(!Ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dn(t){sn=t,yl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return nr(sn,t)}function Ku(t,e){return sn===null&&dn(t),nr(t,e)}function nr(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},yl===null){if(t===null)throw Error(o(308));yl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else yl=yl.next=e;return l}var Jh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},$h=g.unstable_scheduleCallback,kh=g.unstable_NormalPriority,Yt={$$typeof:St,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new Jh,data:new Map,refCount:0}}function Ua(t){t.refCount--,t.refCount===0&&$h(kh,function(){t.controller.abort()})}function ar(t,e){if((t.pendingLanes&4194048)!==0){var l=t.transitionTypes;for(l===null&&(l=t.transitionTypes=[]),t=0;t<e.length;t++){var n=e[t];l.indexOf(n)===-1&&l.push(n)}}}var Ha=null;function Fh(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Ba=null,Gc=0,mn=0,Qn=null;function Wh(t,e){if(Ba===null){var l=Ba=[];Gc=0,mn=no(),Qn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Gc++,e.then(ur,ur),e}function ur(){if(--Gc===0&&(Ha=null,Ba!==null)){Qn!==null&&(Qn.status="fulfilled");var t=Ba;Ba=null,mn=0,Qn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ih(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var ir=q.S;q.S=function(t,e){if(Id=Se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Wh(t,e),Ha!==null)for(var l=ca;l!==null;)ar(l,Ha),l=l.next;if(l=t.types,l!==null){for(var n=ca;n!==null;)ar(n,l),n=n.next;if(mn!==0){n=Ha,n===null&&(n=Ha=[]);for(var a=0;a<l.length;a++){var u=l[a];n.indexOf(u)===-1&&n.push(u)}}}ir!==null&&ir(t,e)};var pn=Fe(null);function Lc(){var t=pn.current;return t!==null?t:Et.pooledCache}function Ju(t,e){e===null?zt(pn,pn.current):zt(pn,e.pool)}function cr(){var t=Lc();return t===null?null:{parent:Yt._currentValue,pool:t}}var Vn=Error(o(460)),Xc=Error(o(474)),$u=Error(o(542)),ku={then:function(){}};function fr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function or(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ie,Ie),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rr(t),t===void 0&&!("reason"in e)?Error(o(600)):t;default:if(typeof e.status=="string")e.then(Ie,Ie);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rr(t),t}throw gn=e,Vn}}function hn(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(gn=l,Vn):l}}var gn=null;function sr(){if(gn===null)throw Error(o(459));var t=gn;return gn=null,t}function rr(t){if(t===Vn||t===$u)throw Error(o(483))}var Zn=null,wa=0;function Fu(t){var e=wa;return wa+=1,Zn===null&&(Zn=[]),or(Zn,t,e)}function Ul(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Wu(t,e){throw e.$$typeof===$?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function dr(t){function e(v,d){if(t){var S=v.deletions;S===null?(v.deletions=[d],v.flags|=16):S.push(d)}}function l(v,d){if(!t)return null;for(;d!==null;)e(v,d),d=d.sibling;return null}function n(v){for(var d=new Map;v!==null;)v.key===null?d.set(v.index,v):d.set(v.key,v),v=v.sibling;return d}function a(v,d){return v=hl(v,d),v.index=0,v.sibling=null,v}function u(v,d,S){return v.index=S,t?(S=v.alternate,S!==null?(S=S.index,S<d?(v.flags|=2,d):S):(v.flags|=134217730,d)):(v.flags|=1048576,d)}function i(v){return t&&v.alternate===null&&(v.flags|=134217730),v}function c(v,d,S,O){return d===null||d.tag!==6?(d=Dc(S,v.mode,O),d.return=v,d):(d=a(d,S),d.return=v,d)}function s(v,d,S,O){var Y=S.type;return Y===ut?(v=N(v,d,S.props.children,O,S.key),Ul(v,S),v):d!==null&&(d.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===nt&&hn(Y)===d.type)?(d=a(d,S.props),Ul(d,S),d.return=v,d):(d=Gu(S.type,S.key,S.props,null,v.mode,O),Ul(d,S),d.return=v,d)}function b(v,d,S,O){return d===null||d.tag!==4||d.stateNode.containerInfo!==S.containerInfo||d.stateNode.implementation!==S.implementation?(d=Rc(S,v.mode,O),d.return=v,d):(d=a(d,S.children||[]),d.return=v,d)}function N(v,d,S,O,Y){return d===null||d.tag!==7?(d=fn(S,v.mode,O,Y),d.return=v,d):(d=a(d,S),d.return=v,d)}function j(v,d,S){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Dc(""+d,v.mode,S),d.return=v,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ot:return S=Gu(d.type,d.key,d.props,null,v.mode,S),Ul(S,d),S.return=v,S;case qt:return d=Rc(d,v.mode,S),d.return=v,d;case nt:return d=hn(d),j(v,d,S)}if(it(d)||Z(d))return d=fn(d,v.mode,S,null),d.return=v,d;if(typeof d.then=="function")return j(v,Fu(d),S);if(d.$$typeof===St)return j(v,Ku(v,d),S);Wu(v,d)}return null}function y(v,d,S,O){var Y=d!==null?d.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Y!==null?null:c(v,d,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ot:return S.key===Y?s(v,d,S,O):null;case qt:return S.key===Y?b(v,d,S,O):null;case nt:return S=hn(S),y(v,d,S,O)}if(it(S)||Z(S))return Y!==null?null:N(v,d,S,O,null);if(typeof S.then=="function")return y(v,d,Fu(S),O);if(S.$$typeof===St)return y(v,d,Ku(v,S),O);Wu(v,S)}return null}function T(v,d,S,O,Y){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return v=v.get(S)||null,c(d,v,""+O,Y);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ot:return v=v.get(O.key===null?S:O.key)||null,s(d,v,O,Y);case qt:return v=v.get(O.key===null?S:O.key)||null,b(d,v,O,Y);case nt:return O=hn(O),T(v,d,S,O,Y)}if(it(O)||Z(O))return v=v.get(S)||null,N(d,v,O,Y,null);if(typeof O.then=="function")return T(v,d,S,Fu(O),Y);if(O.$$typeof===St)return T(v,d,S,Ku(d,O),Y);Wu(d,O)}return null}function U(v,d,S,O){for(var Y=null,dt=null,K=d,k=d=0,Xt=null;K!==null&&k<S.length;k++){K.index>k?(Xt=K,K=null):Xt=K.sibling;var pt=y(v,K,S[k],O);if(pt===null){K===null&&(K=Xt);break}t&&K&&pt.alternate===null&&e(v,K),d=u(pt,d,k),dt===null?Y=pt:dt.sibling=pt,dt=pt,K=Xt}if(k===S.length)return l(v,K),at&&gl(v,k),Y;if(K===null){for(;k<S.length;k++)K=j(v,S[k],O),K!==null&&(d=u(K,d,k),dt===null?Y=K:dt.sibling=K,dt=K);return at&&gl(v,k),Y}for(K=n(K);k<S.length;k++)Xt=T(K,v,k,S[k],O),Xt!==null&&(t&&(pt=Xt.alternate,pt!==null&&K.delete(pt.key===null?k:pt.key)),d=u(Xt,d,k),dt===null?Y=Xt:dt.sibling=Xt,dt=Xt);return t&&K.forEach(function(Pl){return e(v,Pl)}),at&&gl(v,k),Y}function G(v,d,S,O){if(S==null)throw Error(o(151));for(var Y=null,dt=null,K=d,k=d=0,Xt=null,pt=S.next();K!==null&&!pt.done;k++,pt=S.next()){K.index>k?(Xt=K,K=null):Xt=K.sibling;var Pl=y(v,K,pt.value,O);if(Pl===null){K===null&&(K=Xt);break}t&&K&&Pl.alternate===null&&e(v,K),d=u(Pl,d,k),dt===null?Y=Pl:dt.sibling=Pl,dt=Pl,K=Xt}if(pt.done)return l(v,K),at&&gl(v,k),Y;if(K===null){for(;!pt.done;k++,pt=S.next())pt=j(v,pt.value,O),pt!==null&&(d=u(pt,d,k),dt===null?Y=pt:dt.sibling=pt,dt=pt);return at&&gl(v,k),Y}for(K=n(K);!pt.done;k++,pt=S.next())pt=T(K,v,k,pt.value,O),pt!==null&&(t&&(Xt=pt.alternate,Xt!==null&&K.delete(Xt.key===null?k:Xt.key)),d=u(pt,d,k),dt===null?Y=pt:dt.sibling=pt,dt=pt);return t&&K.forEach(function(Dg){return e(v,Dg)}),at&&gl(v,k),Y}function lt(v,d,S,O){if(typeof S=="object"&&S!==null&&S.type===ut&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ot:t:{for(var Y=S.key;d!==null;){if(d.key===Y){if(Y=S.type,Y===ut){if(d.tag===7){l(v,d.sibling),O=a(d,S.props.children),Ul(O,S),O.return=v,v=O;break t}}else if(d.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===nt&&hn(Y)===d.type){l(v,d.sibling),O=a(d,S.props),Ul(O,S),O.return=v,v=O;break t}l(v,d);break}else e(v,d);d=d.sibling}S.type===ut?(O=fn(S.props.children,v.mode,O,S.key),Ul(O,S),O.return=v,v=O):(O=Gu(S.type,S.key,S.props,null,v.mode,O),Ul(O,S),O.return=v,v=O)}return i(v);case qt:t:{for(Y=S.key;d!==null;){if(d.key===Y)if(d.tag===4&&d.stateNode.containerInfo===S.containerInfo&&d.stateNode.implementation===S.implementation){l(v,d.sibling),O=a(d,S.children||[]),O.return=v,v=O;break t}else{l(v,d);break}else e(v,d);d=d.sibling}O=Rc(S,v.mode,O),O.return=v,v=O}return i(v);case nt:return S=hn(S),lt(v,d,S,O)}if(it(S))return U(v,d,S,O);if(Z(S)){if(Y=Z(S),typeof Y!="function")throw Error(o(150));return S=Y.call(S),G(v,d,S,O)}if(typeof S.then=="function")return lt(v,d,Fu(S),O);if(S.$$typeof===St)return lt(v,d,Ku(v,S),O);Wu(v,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,d!==null&&d.tag===6?(l(v,d.sibling),O=a(d,S),O.return=v,v=O):(l(v,d),O=Dc(S,v.mode,O),O.return=v,v=O),i(v)):l(v,d)}return function(v,d,S,O){try{wa=0;var Y=lt(v,d,S,O);return Zn=null,Y}catch(K){if(K===Vn||K===$u)throw K;var dt=he(29,K,null,v.mode);return dt.lanes=O,dt.return=v,dt}}}var yn=dr(!0),mr=dr(!1),Hl=!1;function Qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Bl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wl(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(gt&2)!==0){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=Yu(t),Fs(t,null,l),e}return qu(t,n,e,l),Yu(t)}function qa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,ts(t,l)}}function Zc(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?a=u=e:u=u.next=e}else a=u=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Kc=!1;function Ya(){if(Kc){var t=Qn;if(t!==null)throw t}}function Ga(t,e,l,n){Kc=!1;var a=t.updateQueue;Hl=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var s=c,b=s.next;s.next=null,i===null?u=b:i.next=b,i=s;var N=t.alternate;N!==null&&(N=N.updateQueue,c=N.lastBaseUpdate,c!==i&&(c===null?N.firstBaseUpdate=b:c.next=b,N.lastBaseUpdate=s))}if(u!==null){var j=a.baseState;i=0,N=b=s=null,c=u;do{var y=c.lane&-536870913,T=y!==c.lane;if(T?(rt&y)===y:(n&y)===y){y!==0&&y===mn&&(Kc=!0),N!==null&&(N=N.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var U=t,G=c;y=e;var lt=l;switch(G.tag){case 1:if(U=G.payload,typeof U=="function"){j=U.call(lt,j,y);break t}j=U;break t;case 3:U.flags=U.flags&-65537|128;case 0:if(U=G.payload,y=typeof U=="function"?U.call(lt,j,y):U,y==null)break t;j=J({},j,y);break t;case 2:Hl=!0}}y=c.callback,y!==null&&(t.flags|=64,T&&(t.flags|=8192),T=a.callbacks,T===null?a.callbacks=[y]:T.push(y))}else T={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},N===null?(b=N=T,s=j):N=N.next=T,i|=y;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;T=c,c=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);N===null&&(s=j),a.baseState=s,a.firstBaseUpdate=b,a.lastBaseUpdate=N,u===null&&(a.shared.lanes=0),Vl|=i,t.lanes=i,t.memoizedState=j}}function pr(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function hr(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)pr(l[t],e)}var ql=Fe(null),Iu=Fe(0);function gr(t,e){t=El,zt(Iu,t),zt(ql,e),El=t|e.baseLanes}function Jc(){zt(Iu,El),zt(ql,ql.current)}function $c(){El=Iu.current,It(ql),It(Iu)}var ee=Fe(null),fe=null;function Yl(t){var e=t.alternate;zt(le,le.current&1),zt(ee,t),fe===null&&(e===null||ql.current!==null||e.memoizedState!==null)&&(fe=t)}function kc(t){zt(le,le.current),zt(ee,t),fe===null&&(fe=t)}function yr(t){t.tag===22?(zt(le,le.current),zt(ee,t),fe===null&&(fe=t)):Gl()}function Gl(){zt(le,le.current),zt(ee,ee.current)}function Ae(t){It(ee),fe===t&&(fe=null),It(le)}var le=Fe(0);function La(t,e){zt(ee,ee.current),zt(le,e)}function Fc(t){It(le),It(ee),fe===t&&(fe=null)}function Pu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||xo(l)||So(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bl=0,et=null,Tt=null,Gt=null,ti=!1,Kn=!1,vn=!1,ei=0,Xa=0,Jn=null,Ph=0;function Dt(){throw Error(o(321))}function Wc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ne(t[l],e[l]))return!1;return!0}function Ic(t,e,l,n,a,u){return bl=u,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=t===null||t.memoizedState===null?td:ed,vn=!1,u=l(n,a),vn=!1,Kn&&(u=br(e,l,n,a)),vr(t),u}function vr(t){q.H=fi;var e=Tt!==null&&Tt.next!==null;if(bl=0,Gt=Tt=et=null,ti=!1,Xa=0,Jn=null,e)throw Error(o(300));t===null||Lt||(t=t.dependencies,t!==null&&Zu(t)&&(Lt=!0))}function br(t,e,l,n){et=t;var a=0;do{if(Kn&&(Jn=null),Xa=0,Kn=!1,25<=a)throw Error(o(301));if(a+=1,Gt=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}q.H=c0,u=e(l,n)}while(Kn);return u}function t0(){var t=q.H,e=t.useState()[0];return e=typeof e.then=="function"?Qa(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(et.flags|=1024),e}function Pc(){var t=ei!==0;return ei=0,t}function tf(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ef(t){if(ti){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ti=!1}bl=0,Gt=Tt=et=null,Kn=!1,Xa=ei=0,Jn=null}function se(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?et.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Ht(){if(Tt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Gt===null?et.memoizedState:Gt.next;if(e!==null)Gt=e,Tt=t;else{if(t===null)throw et.alternate===null?Error(o(467)):Error(o(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Gt===null?et.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qa(t){var e=Xa;return Xa+=1,Jn===null&&(Jn=[]),t=or(Jn,t,e),e=et,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?td:ed),t}function ni(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qa(t);if(t.$$typeof===C)return;if(t.$$typeof===St)return te(t)}throw Error(o(438,String(t)))}function lf(t){var e=null,l=et.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=et.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=li(),et.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=ke;return e.index++,l}function xl(t,e){return typeof e=="function"?e(t):e}function ai(t){var e=Ht();return nf(e,Tt,t)}function nf(t,e,l){var n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=l;var a=t.baseQueue,u=n.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,n.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var c=i=null,s=null,b=e,N=!1;do{var j=b.lane&-536870913;if(j!==b.lane?(rt&j)===j:(bl&j)===j){var y=b.revertLane;if(y===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),j===mn&&(N=!0);else if((bl&y)===y){b=b.next,y===mn&&(N=!0);continue}else j={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},s===null?(c=s=j,i=u):s=s.next=j,et.lanes|=y,Vl|=y;j=b.action,vn&&l(u,j),u=b.hasEagerState?b.eagerState:l(u,j)}else y={lane:j,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},s===null?(c=s=y,i=u):s=s.next=y,et.lanes|=j,Vl|=j;b=b.next}while(b!==null&&b!==e);if(s===null?i=u:s.next=c,!Ne(u,t.memoizedState)&&(Lt=!0,N&&(l=Qn,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=s,n.lastRenderedState=u}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function af(t){var e=Ht(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,u=e.memoizedState;if(a!==null){l.pending=null;var i=a=a.next;do u=t(u,i.action),i=i.next;while(i!==a);Ne(u,e.memoizedState)||(Lt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,n]}function xr(t,e,l){var n=et,a=Ht(),u=at;if(u){if(l===void 0)throw Error(o(407));l=l()}else l=e();var i=!Ne((Tt||a).memoizedState,l);if(i&&(a.memoizedState=l,Lt=!0),a=a.queue,ff(Er.bind(null,n,a,t),[t]),t=a.getSnapshot!==e||i||Gt!==null&&(Gt.memoizedState.tag&1)!==0,$n(t?9:8,{destroy:void 0},Tr.bind(null,n,a,l,e),null),t){if(n.flags|=2048,Et===null)throw Error(o(349));u||(bl&127)!==0||Sr(n,e,l)}return l}function Sr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=et.updateQueue,e===null?(e=li(),et.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Tr(t,e,l,n){e.value=l,e.getSnapshot=n,zr(e)&&Nr(t)}function Er(t,e,l){return l(function(){zr(e)&&Nr(t)})}function zr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ne(t,l)}catch{return!0}}function Nr(t){var e=cn(t,2);e!==null&&be(e,t,2)}function uf(t){var e=se();if(typeof t=="function"){var l=t;if(t=l(),vn){Ol(!0);try{l()}finally{Ol(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},e}function Ar(t,e,l,n){return t.baseState=l,nf(t,Tt,typeof n=="function"?n:xl)}function e0(t,e,l,n,a){if(ci(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};q.T!==null?l(!0):u.isTransition=!1,n(u),l=e.pending,l===null?(u.next=e.pending=u,Or(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Or(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var u=q.T,i={};i.types=u!==null?u.types:null,q.T=i;try{var c=l(a,n),s=q.S;s!==null&&s(i,c),jr(t,e,c)}catch(b){cf(t,e,b)}finally{u!==null&&i.types!==null&&(u.types=i.types),q.T=u}}else try{u=l(a,n),jr(t,e,u)}catch(b){cf(t,e,b)}}function jr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){Mr(t,e,n)},function(n){return cf(t,e,n)}):Mr(t,e,l)}function Mr(t,e,l){e.status="fulfilled",e.value=l,_r(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Or(t,l)))}function cf(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,_r(e),e=e.next;while(e!==n)}t.action=null}function _r(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Cr(t,e){return e}function Dr(t,e){if(at){var l=Et.formState;if(l!==null){t:{var n=et;if(at){if(Nt){e:{for(var a=Nt,u=qe;a.nodeType!==8;){if(!u){a=null;break e}if(a=Ge(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Nt=Ge(a.nextSibling),n=a.data==="F!";break t}}Dl(n)}n=!1}n&&(e=l[0])}}return l=se(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},l.queue=n,l=Wr.bind(null,et,n),n.dispatch=l,n=uf(!1),u=mf.bind(null,et,!1,n.queue),n=se(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=e0.bind(null,et,a,u,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function Rr(t){var e=Ht();return Ur(e,Tt,t)}function Ur(t,e,l){if(e=nf(t,e,Cr)[0],t=ai(xl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Qa(e)}catch(i){throw i===Vn?$u:i}else n=e;e=Ht();var a=e.queue,u=a.dispatch;return l!==e.memoizedState&&(et.flags|=2048,$n(9,{destroy:void 0},l0.bind(null,a,l),null)),[n,u,t]}function l0(t,e){t.action=e}function Hr(t){var e=Ht(),l=Tt;if(l!==null)return Ur(e,l,t);Ht(),e=e.memoizedState,l=Ht();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function $n(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=et.updateQueue,e===null&&(e=li(),et.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function Br(){return Ht().memoizedState}function ui(t,e,l,n){var a=se();et.flags|=t,a.memoizedState=$n(1|e,{destroy:void 0},l,n===void 0?null:n)}function ii(t,e,l,n){var a=Ht();n=n===void 0?null:n;var u=a.memoizedState.inst;Tt!==null&&n!==null&&Wc(n,Tt.memoizedState.deps)?a.memoizedState=$n(e,u,l,n):(et.flags|=t,a.memoizedState=$n(1|e,u,l,n))}function wr(t,e){ui(8390656,8,t,e)}function ff(t,e){ii(2048,8,t,e)}function n0(t){et.flags|=4;var e=et.updateQueue;if(e===null)e=li(),et.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function qr(t){var e=Ht().memoizedState;return n0({ref:e,nextImpl:t}),function(){if((gt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Yr(t,e){return ii(4,2,t,e)}function Gr(t,e){return ii(4,4,t,e)}function Lr(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xr(t,e,l){l=l!=null?l.concat([t]):null,ii(4,4,Lr.bind(null,e,t),l)}function of(){}function Qr(t,e){var l=Ht();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&Wc(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function Vr(t,e){var l=Ht();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&Wc(e,n[1]))return n[0];if(n=t(),vn){Ol(!0);try{t()}finally{Ol(!1)}}return l.memoizedState=[n,e],n}function sf(t,e,l){return l===void 0||(bl&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=tm(),et.lanes|=t,Vl|=t,l)}function Zr(t,e,l,n){return Ne(l,e)?l:ql.current!==null?(t=sf(t,l,n),Ne(t,e)||(Lt=!0),t):(bl&106)===0||(bl&1073741824)!==0&&(rt&261930)===0?(Lt=!0,t.memoizedState=l):(t=tm(),et.lanes|=t,Vl|=t,e)}function Kr(t,e,l,n,a){var u=I.p;I.p=u!==0&&8>u?u:8;var i=q.T,c={};c.types=i!==null?i.types:null,q.T=c,mf(t,!1,e,l);try{var s=a(),b=q.S;if(b!==null&&b(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var N=Ih(s,n);Va(t,e,N,_e(t))}else Va(t,e,n,_e(t))}catch(j){Va(t,e,{then:function(){},status:"rejected",reason:j},_e())}finally{I.p=u,i!==null&&c.types!==null&&(i.types=c.types),q.T=i}}function a0(){}function rf(t,e,l,n){if(t.tag!==5)throw Error(o(476));var a=Jr(t).queue;Kr(t,a,e,ce,l===null?a0:function(){return $r(t),l(n)})}function Jr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:ce},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $r(t){var e=Jr(t);e.next===null&&(e=t.alternate.memoizedState),Va(t,e.next.queue,{},_e())}function df(){return te(ma)}function kr(){return Ht().memoizedState}function Fr(){return Ht().memoizedState}function u0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=_e();t=Bl(l);var n=wl(e,t,l);n!==null&&(be(n,e,l),qa(n,e,l)),e={cache:Yc()},t.payload=e;return}e=e.return}}function i0(t,e,l){var n=_e();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ci(t)?Ir(e,l):(l=_c(t,e,l,n),l!==null&&(be(l,t,n),Pr(l,e,n)))}function Wr(t,e,l){var n=_e();Va(t,e,l,n)}function Va(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ci(t))Ir(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,l);if(a.hasEagerState=!0,a.eagerState=c,Ne(c,i))return qu(t,e,a,0),Et===null&&wu(),!1}catch{}if(l=_c(t,e,a,n),l!==null)return be(l,t,n),Pr(l,e,n),!0}return!1}function mf(t,e,l,n){if(n={lane:2,revertLane:no(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ci(t)){if(e)throw Error(o(479))}else e=_c(t,l,n,2),e!==null&&be(e,t,2)}function ci(t){var e=t.alternate;return t===et||e!==null&&e===et}function Ir(t,e){Kn=ti=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Pr(t,e,l){if((l&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,ts(t,l)}}var fi={readContext:te,use:ni,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt,useEffectEvent:Dt},td={readContext:te,use:ni,useCallback:function(t,e){return se().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:wr,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ui(4194308,4,Lr.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ui(4194308,4,t,e)},useInsertionEffect:function(t,e){ui(4,2,t,e)},useMemo:function(t,e){var l=se();e=e===void 0?null:e;var n=t();if(vn){Ol(!0);try{t()}finally{Ol(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=se();if(l!==void 0){var a=l(e);if(vn){Ol(!0);try{l(e)}finally{Ol(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=i0.bind(null,et,t),[n.memoizedState,t]},useRef:function(t){var e=se();return t={current:t},e.memoizedState=t},useState:function(t){t=uf(t);var e=t.queue,l=Wr.bind(null,et,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:of,useDeferredValue:function(t,e){var l=se();return sf(l,t,e)},useTransition:function(){var t=uf(!1);return t=Kr.bind(null,et,t.queue,!0,!1),se().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=et,a=se();if(at){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),Et===null)throw Error(o(349));(rt&127)!==0||Sr(n,e,l)}a.memoizedState=l;var u={value:l,getSnapshot:e};return a.queue=u,wr(Er.bind(null,n,u,t),[t]),n.flags|=2048,$n(9,{destroy:void 0},Tr.bind(null,n,u,l,e),null),l},useId:function(){var t=se(),e=Et.identifierPrefix;if(at){var l=tl,n=Pe;l=(n&~(1<<32-Ee(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ei++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Ph++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:df,useFormState:Dr,useActionState:Dr,useOptimistic:function(t){var e=se();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=mf.bind(null,et,!0,l),l.dispatch=e,[t,e]},useMemoCache:lf,useCacheRefresh:function(){return se().memoizedState=u0.bind(null,et)},useEffectEvent:function(t){var e=se(),l={impl:t};return e.memoizedState=l,function(){if((gt&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},ed={readContext:te,use:ni,useCallback:Qr,useContext:te,useEffect:ff,useImperativeHandle:Xr,useInsertionEffect:Yr,useLayoutEffect:Gr,useMemo:Vr,useReducer:ai,useRef:Br,useState:function(){return ai(xl)},useDebugValue:of,useDeferredValue:function(t,e){var l=Ht();return Zr(l,Tt.memoizedState,t,e)},useTransition:function(){var t=ai(xl)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Qa(t),e]},useSyncExternalStore:xr,useId:kr,useHostTransitionStatus:df,useFormState:Rr,useActionState:Rr,useOptimistic:function(t,e){var l=Ht();return Ar(l,Tt,t,e)},useMemoCache:lf,useCacheRefresh:Fr,useEffectEvent:qr},c0={readContext:te,use:ni,useCallback:Qr,useContext:te,useEffect:ff,useImperativeHandle:Xr,useInsertionEffect:Yr,useLayoutEffect:Gr,useMemo:Vr,useReducer:af,useRef:Br,useState:function(){return af(xl)},useDebugValue:of,useDeferredValue:function(t,e){var l=Ht();return Tt===null?sf(l,t,e):Zr(l,Tt.memoizedState,t,e)},useTransition:function(){var t=af(xl)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Qa(t),e]},useSyncExternalStore:xr,useId:kr,useHostTransitionStatus:df,useFormState:Hr,useActionState:Hr,useOptimistic:function(t,e){var l=Ht();return Tt!==null?Ar(l,Tt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Fr,useEffectEvent:qr};function pf(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:J({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var hf={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=_e(),a=Bl(n);a.payload=e,l!=null&&(a.callback=l),e=wl(t,a,n),e!==null&&(be(e,t,n),qa(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=_e(),a=Bl(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=wl(t,a,n),e!==null&&(be(e,t,n),qa(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=_e(),n=Bl(l);n.tag=2,e!=null&&(n.callback=e),e=wl(t,n,l),e!==null&&(be(e,t,l),qa(e,t,l))}};function ld(t,e,l,n,a,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,i):e.prototype&&e.prototype.isPureReactComponent?!_a(l,n)||!_a(a,u):!0}function nd(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&hf.enqueueReplaceState(e,e.state,null)}function bn(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=J({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function ad(t){Bu(t)}function ud(t){console.error(t)}function id(t){Bu(t)}function oi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function cd(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function gf(t,e,l){return l=Bl(l),l.tag=3,l.payload={element:null},l.callback=function(){oi(t,e)},l}function fd(t){return t=Bl(t),t.tag=3,t}function od(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;t.payload=function(){return a(u)},t.callback=function(){cd(e,l,n)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){cd(e,l,n),typeof a!="function"&&(Zl===null?Zl=new Set([this]):Zl.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function f0(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&rn(e,l,a,!0),l=ee.current,l!==null){switch(l.tag){case 31:case 13:case 19:return fe===null?_i():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===ku?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),to(t,n,a)),!1;case 22:return l.flags|=65536,n===ku?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),to(t,n,a)),!1}throw Error(o(435,l.tag))}return to(t,n,a),_i(),!1}if(at)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==Hc&&(t=Error(o(422),{cause:n}),Ra(He(t,l)))):(n!==Hc&&(e=Error(o(423),{cause:n}),Ra(He(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=He(n,l),a=gf(t.stateNode,n,a),Zc(t,a),Rt!==4&&(Rt=2)),!1;var u=Error(o(520),{cause:n});if(u=He(u,l),Ia===null?Ia=[u]:Ia.push(u),Rt!==4&&(Rt=2),e===null)return!0;n=He(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=gf(l.stateNode,n,t),Zc(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zl===null||!Zl.has(u))))return l.flags|=65536,a&=-a,l.lanes|=a,a=fd(a),od(a,t,l,n),Zc(l,a),!1;break;case 22:if(l.memoizedState!==null)return l.flags|=65536,!1}l=l.return}while(l!==null);return!1}var yf=Error(o(461)),Lt=!1;function Vt(t,e,l,n){e.child=t===null?mr(e,null,l,n):yn(e,t.child,l,n)}function sd(t,e,l,n,a){l=l.render;var u=e.ref;if("ref"in n){var i={};for(var c in n)c!=="ref"&&(i[c]=n[c])}else i=n;return dn(e),n=Ic(t,e,l,i,u,a),c=Pc(),t!==null&&!Lt?(tf(t,e,a),Sl(t,e,a)):(at&&c&&Xu(e),e.flags|=1,Vt(t,e,n,a),e.child)}function rd(t,e,l,n,a){if(t===null){var u=l.type;return typeof u=="function"&&!Cc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,dd(t,e,u,n,a)):(t=Gu(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Nf(t,a)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:_a,l(i,n)&&t.ref===e.ref)return Sl(t,e,a)}return e.flags|=1,t=hl(u,n),t.ref=e.ref,t.return=e,e.child=t}function dd(t,e,l,n,a){if(t!==null){var u=t.memoizedProps;if(_a(u,n)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=n=u,Nf(t,a))(t.flags&131072)!==0&&(Lt=!0);else return e.lanes=t.lanes,Sl(t,e,a)}return vf(t,e,l,n,a)}function md(t,e,l,n){var a=n.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~u}else n=0,e.child=null;return pd(t,e,u,l,n)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ju(e,u!==null?u.cachePool:null),u!==null?gr(e,u):Jc(),yr(e);else return n=e.lanes=536870912,pd(t,e,u!==null?u.baseLanes|l:l,l,n)}else u!==null?(Ju(e,u.cachePool),gr(e,u),Gl(),e.memoizedState=null):(t!==null&&Ju(e,null),Jc(),Gl());return Vt(t,e,a,l),e.child}function Za(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function pd(t,e,l,n,a){var u=Lc();return u=u===null?null:{parent:Yt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Ju(e,null),Jc(),yr(e),t!==null&&rn(t,e,n,!0),e.childLanes=a,null}function si(t,e){return e=ri({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function hd(t,e,l){return yn(e,t.child,null,l),t=si(e,e.pendingProps),t.flags|=2,Ae(e),e.memoizedState=null,t}function o0(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(at){if(n.mode==="hidden")return t=si(e,n),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Za(null,t);if(kc(e),(t=Nt)?(t=Lm(t,qe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:_l!==null?{id:Pe,overflow:tl}:null,retryLane:536870912,hydrationErrors:null},l=Is(t),l.return=e,e.child=l,$t=e,Nt=null)):t=null,t===null)throw Dl(e);return e.lanes=536870912,null}return si(e,n)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(kc(e),a)if(e.flags&256)e.flags&=-257,e=hd(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Lt||rn(t,e,l,!1),a=(l&t.childLanes)!==0,Lt||a){if(ql.current===null){if(n=Et,n!==null&&(i=es(n,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,cn(t,i),be(n,t,i),yf;_i()}e=hd(t,e,l)}else t=u.treeContext,Nt=Ge(i.nextSibling),$t=e,at=!0,Cl=null,qe=!1,t!==null&&er(e,t),e=si(e,n),e.flags|=134221824;return e}return t=hl(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function kn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function vf(t,e,l,n,a){return dn(e),l=Ic(t,e,l,n,void 0,a),n=Pc(),t!==null&&!Lt?(tf(t,e,a),Sl(t,e,a)):(at&&n&&Xu(e),e.flags|=1,Vt(t,e,l,a),e.child)}function gd(t,e,l,n,a,u){return dn(e),e.updateQueue=null,l=br(e,n,l,a),vr(t),n=Pc(),t!==null&&!Lt?(tf(t,e,u),Sl(t,e,u)):(at&&n&&Xu(e),e.flags|=1,Vt(t,e,l,u),e.child)}function yd(t,e,l,n,a){if(dn(e),e.stateNode===null){var u=Yn,i=l.contextType;typeof i=="object"&&i!==null&&(u=te(i)),u=new l(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=hf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},Qc(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?te(i):Yn,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(pf(e,l,i,n),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&hf.enqueueReplaceState(u,u.state,null),Ga(e,n,u,a),Ya(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,s=bn(l,c);u.props=s;var b=u.context,N=l.contextType;i=Yn,typeof N=="object"&&N!==null&&(i=te(N));var j=l.getDerivedStateFromProps;N=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||b!==i)&&nd(e,u,n,i),Hl=!1;var y=e.memoizedState;u.state=y,Ga(e,n,u,a),Ya(),b=e.memoizedState,c||y!==b||Hl?(typeof j=="function"&&(pf(e,l,j,n),b=e.memoizedState),(s=Hl||ld(e,l,s,n,y,b,i))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=b),u.props=n,u.state=b,u.context=i,n=s):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Vc(t,e),i=e.memoizedProps,N=bn(l,i),u.props=N,j=e.pendingProps,y=u.context,b=l.contextType,s=Yn,typeof b=="object"&&b!==null&&(s=te(b)),c=l.getDerivedStateFromProps,(b=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==j||y!==s)&&nd(e,u,n,s),Hl=!1,y=e.memoizedState,u.state=y,Ga(e,n,u,a),Ya();var T=e.memoizedState;i!==j||y!==T||Hl||t!==null&&t.dependencies!==null&&Zu(t.dependencies)?(typeof c=="function"&&(pf(e,l,c,n),T=e.memoizedState),(N=Hl||ld(e,l,N,n,y,T,s)||t!==null&&t.dependencies!==null&&Zu(t.dependencies))?(b||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,T,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,T,s)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=T),u.props=n,u.state=T,u.context=s,n=N):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,kn(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=yn(e,t.child,null,a),e.child=yn(e,null,l,a)):Vt(t,e,l,a),e.memoizedState=u.state,t=e.child):t=Sl(t,e,a),t}function vd(t,e,l,n){return on(),e.flags|=256,Vt(t,e,l,n),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:cr()}}function Sf(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Me),t}function bd(t,e,l){var n=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(at){if(a?Yl(e):Gl(),(t=Nt)?(t=Lm(t,qe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:_l!==null?{id:Pe,overflow:tl}:null,retryLane:536870912,hydrationErrors:null},l=Is(t),l.return=e,e.child=l,$t=e,Nt=null)):t=null,t===null)throw Dl(e);return So(t)?e.lanes=32:e.lanes=536870912,null}return u=n.children,n=n.fallback,a?(Gl(),a=e.mode,u=ri({mode:"hidden",children:u},a),n=fn(n,a,l,null),u.return=e,n.return=e,u.sibling=n,e.child=u,n=e.child,n.memoizedState=xf(l),n.childLanes=Sf(t,i,l),e.memoizedState=bf,Za(null,n)):(Yl(e),Tf(e,u))}var c=t.memoizedState;if(c!==null){var s=c.dehydrated;if(s!==null)return s0(t,e,u,i,n,s,c,l)}return a?(Gl(),a=n.fallback,u=e.mode,c=t.child,s=c.sibling,n=hl(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&1206910976,s!==null?a=hl(s,a):(a=fn(a,u,l,null),a.flags|=2),a.return=e,n.return=e,n.sibling=a,e.child=n,Za(null,n),n=e.child,a=t.child.memoizedState,a===null?a=xf(l):(u=a.cachePool,u!==null?(c=Yt._currentValue,u=u.parent!==c?{parent:c,pool:c}:u):u=cr(),a={baseLanes:a.baseLanes|l,cachePool:u}),n.memoizedState=a,n.childLanes=Sf(t,i,l),e.memoizedState=bf,Za(t.child,n)):(Yl(e),l=t.child,t=l.sibling,l=hl(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function Tf(t,e){return e=ri({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ri(t,e){return t=he(22,t,null,e),t.lanes=0,t}function di(t,e,l){return yn(e,t.child,null,l),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s0(t,e,l,n,a,u,i,c){if(l)return e.flags&256?(Yl(e),e.flags&=-257,di(t,e,c)):e.memoizedState!==null?(Gl(),e.child=t.child,e.flags|=128,null):(Gl(),u=a.fallback,i=e.mode,a=ri({mode:"visible",children:a.children},i),u=fn(u,i,c,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,yn(e,t.child,null,c),a=e.child,a.memoizedState=xf(c),a.childLanes=Sf(t,n,c),e.memoizedState=bf,Za(null,a));if(Yl(e),So(u)){if(n=u.nextSibling&&u.nextSibling.dataset,n)var s=n.dgst;return n=s,n!==""&&(a=Error(o(419)),a.stack="",a.digest=n,Ra({value:a,source:null,stack:null})),di(t,e,c)}if(Lt||rn(t,e,c,!1),n=(c&t.childLanes)!==0,Lt||n){if(ql.current!==null)return di(t,e,c);if(n=Et,n!==null&&(a=es(n,c),a!==0&&a!==i.retryLane))throw i.retryLane=a,cn(t,a),be(n,t,a),yf;return xo(u)||_i(),di(t,e,c)}return xo(u)?(e.flags|=192,e.child=t.child,null):(t=i.treeContext,Nt=Ge(u.nextSibling),$t=e,at=!0,Cl=null,qe=!1,t!==null&&er(e,t),e=Tf(e,a.children),e.flags|=134221824,e)}function xd(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Vu(t.return,e,l)}function Sd(t){for(var e=null;t!==null;){var l=t.alternate;l!==null&&Pu(l)===null&&(e=t),t=t.sibling}return e}function mi(t,e,l,n,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=l,i.tailMode=a,i.treeForkCount=u)}function Ef(t){var e=t.child;for(t.child=null;e!==null;){var l=e.sibling;e.sibling=t.child,t.child=e,e=l}}function zf(t,e,l){var n=e.pendingProps,a=n.revealOrder,u=n.tail;n=n.children;var i=le.current;if(e.flags&128)return La(e,i),null;var c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,La(e,i),a==="backwards"&&t!==null?(Ef(t),Vt(t,e,n,l),Ef(t)):Vt(t,e,n,l),n=at?Da:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xd(t,l,e);else if(t.tag===19)xd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":l=Sd(e.child),l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null,Ef(e)),mi(e,!0,a,null,u,n);break;case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Pu(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}mi(e,!0,l,null,u,n);break;case"together":mi(e,!1,null,null,void 0,n);break;case"independent":e.memoizedState=null;break;default:l=Sd(e.child),l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),mi(e,!1,a,l,u,n)}return e.child}function Td(t,e,l){var n=e.pendingProps;return Rl(e,e.type,n.value),Vt(t,e,n.children,l),e.child}function Sl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Vl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(rn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=hl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=hl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Nf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Zu(t)))}function r0(t,e,l){switch(e.tag){case 3:vu(e,e.stateNode.containerInfo),Rl(e,Yt,t.memoizedState.cache),on();break;case 27:case 5:Wi(e);break;case 4:vu(e,e.stateNode.containerInfo);break;case 10:Rl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,kc(e),null;break;case 13:var n=e.memoizedState;if(n!==null){if(n.dehydrated!==null)return Yl(e),e.flags|=128,null;n=rn(t,e,l,!1);var a=e.child.childLanes;return n||(l&a)!==0?bd(t,e,l):(Yl(e),t=Sl(t,e,l),t!==null?t.sibling:null)}Yl(e);break;case 19:if(e.flags&128)return zf(t,e,l);if(a=(t.flags&128)!==0,n=(l&e.childLanes)!==0,n||(rn(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return zf(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),La(e,le.current),n)break;return null;case 22:return e.lanes=0,md(t,e,l,e.pendingProps);case 24:Rl(e,Yt,t.memoizedState.cache)}return Sl(t,e,l)}function Ed(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Lt=!0;else{if(!Nf(t,l)&&(e.flags&128)===0)return Lt=!1,r0(t,e,l);Lt=(t.flags&131072)!==0}else Lt=!1,at&&(e.flags&1048576)!==0&&tr(e,Da,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=hn(e.elementType),e.type=t,typeof t=="function")Cc(t)?(n=bn(t,n),e.tag=1,e=yd(null,e,t,n,l)):(e.tag=0,e=vf(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===B){e.tag=11,e=sd(null,e,t,n,l);break t}else if(a===st){e.tag=14,e=rd(null,e,t,n,l);break t}else if(a===St){e.tag=10,e.type=t,e=Td(null,e,l);break t}}throw e=w(t)||t,Error(o(306,e,""))}}return e;case 0:return vf(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=bn(n,e.pendingProps),yd(t,e,n,a,l);case 3:t:{if(vu(e,e.stateNode.containerInfo),t===null)throw Error(o(387));n=e.pendingProps;var u=e.memoizedState;a=u.element,Vc(t,e),Ga(e,n,null,l);var i=e.memoizedState;if(n=i.cache,Rl(e,Yt,n),n!==u.cache&&qc(e,[Yt],l,!0),Ya(),n=i.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=vd(t,e,n,l);break t}else if(n!==a){a=He(Error(o(424)),e),Ra(a),e=vd(t,e,n,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Nt=Ge(t.firstChild),$t=e,at=!0,Cl=null,qe=!0,l=mr(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|134221824,l=l.sibling;else{if(on(),n===a){e=Sl(t,e,l);break t}Vt(t,e,n,l)}e=e.child}return e;case 26:return kn(t,e),t===null?(l=$m(e.type,null,e.pendingProps,null))?e.memoizedState=l:at||(e.stateNode=Om(e.type,e.pendingProps,Nl.current,e)):e.memoizedState=$m(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Wi(e),t===null&&at&&(n=e.stateNode=Vm(e.type,e.pendingProps,Nl.current),$t=e,qe=!0,a=Nt,$l(e.type)?(To=a,Nt=Ge(n.firstChild)):Nt=a),Vt(t,e,e.pendingProps.children,l),kn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&at&&((a=n=Nt)&&(n=ug(n,e.type,e.pendingProps,qe),n!==null?(e.stateNode=n,$t=e,Nt=Ge(n.firstChild),qe=!1,a=!0):a=!1),a||Dl(e)),Wi(e),a=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,n=u.children,mo(a,u)?n=null:i!==null&&mo(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Ic(t,e,t0,null,null,l),ma._currentValue=a),kn(t,e),Vt(t,e,n,l),e.child;case 6:return t===null&&at&&((t=l=Nt)&&(l=ig(l,e.pendingProps,qe),l!==null?(e.stateNode=l,$t=e,Nt=null,t=!0):t=!1),t||Dl(e)),null;case 13:return bd(t,e,l);case 4:return vu(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=yn(e,null,n,l):Vt(t,e,n,l),e.child;case 11:return sd(t,e,e.type,e.pendingProps,l);case 7:return n=e.pendingProps,kn(t,e),Vt(t,e,n,l),e.child;case 8:return Vt(t,e,e.pendingProps.children,l),e.child;case 12:return Vt(t,e,e.pendingProps.children,l),e.child;case 10:return Td(t,e,l);case 9:return a=e.type._context,n=e.pendingProps.children,dn(e),a=te(a),n=n(a),e.flags|=1,Vt(t,e,n,l),e.child;case 14:return rd(t,e,e.type,e.pendingProps,l);case 15:return dd(t,e,e.type,e.pendingProps,l);case 19:return zf(t,e,l);case 31:return o0(t,e,l);case 22:return md(t,e,l,e.pendingProps);case 24:return dn(e),n=te(Yt),t===null?(a=Lc(),a===null&&(a=Et,u=Yc(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=l),a=u),e.memoizedState={parent:n,cache:a},Qc(e),Rl(e,Yt,a)):((t.lanes&l)!==0&&(Vc(t,e),Ga(e,null,null,l),Ya()),a=t.memoizedState,u=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Rl(e,Yt,n)):(n=u.cache,Rl(e,Yt,n),n!==a.cache&&qc(e,[Yt],l,!0))),Vt(t,e,e.pendingProps.children,l),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=e.pendingProps,n.name!=null&&n.name!=="auto"?e.flags|=t===null?18882560:18874368:at&&Xu(e),t!==null&&t.memoizedProps.name!==n.name?e.flags|=4194816:kn(t,e),Vt(t,e,n.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Tl(t){t.flags|=4}function Af(t,e,l,n,a){var u;if((u=(t.mode&32)!==0)&&(u=l===null?Im(e,n):Im(e,n)&&(n.src!==l.src||n.srcSet!==l.srcSet)),u){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(am())t.flags|=8192;else throw gn=ku,Xc}else t.flags&=-16777217}function zd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pm(e))if(am())t.flags|=8192;else throw gn=ku,Xc}function pi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Io():536870912,t.lanes|=e,ta|=e)}function Ka(t,e){if(!at)switch(t.tailMode){case"visible":break;case"collapsed":for(var l=t.tail,n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null;break;default:for(e=t.tail,l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&1206910976,n|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function d0(t,e,l){var n=e.pendingProps;switch(Uc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),vl(Yt),An(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Xn(e)?Tl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Bc())),At(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(Tl(e),u!==null?(At(e),zd(e,u)):(At(e),Af(e,a,null,n,l))):u?u!==t.memoizedState?(Tl(e),At(e),zd(e,u)):(At(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Tl(e),At(e),Af(e,a,t,n,l)),null;case 27:if(bu(e),l=Nl.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Tl(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return At(e),e.subtreeFlags&=-33554433,null}t=We.current,Xn(e)?lr(e):(t=Vm(a,n,l),e.stateNode=t,Tl(e))}return At(e),e.subtreeFlags&=-33554433,null;case 5:if(bu(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Tl(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return At(e),e.subtreeFlags&=-33554433,null}if(u=We.current,Xn(e))lr(e);else{var i=nu(Nl.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}u[Pt]=e,u[pe]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(ae(u,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Tl(e)}}return At(e),e.subtreeFlags&=-33554433,Af(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Tl(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(o(166));if(t=Nl.current,Xn(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=$t,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Em(t.nodeValue,l)),t||Dl(e,!0)}else t=nu(t).createTextNode(n),t[Pt]=e,e.stateNode=t}return At(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=Xn(e),l!==null){if(t===null){if(!n)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Pt]=e}else on(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),t=!1}else l=Bc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Ae(e),e):(Ae(e),null);if((e.flags&128)!==0)throw Error(o(558))}return At(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Xn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(o(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[Pt]=e}else on(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),a=!1}else a=Bc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Ae(e),e):(Ae(e),null)}return Ae(e),(e.flags&128)!==0?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),pi(e,e.updateQueue),At(e),null);case 4:return An(),t===null&&co(e.stateNode.containerInfo),e.flags|=67108864,At(e),null;case 10:return vl(e.type),At(e),null;case 19:if(Fc(e),n=e.memoizedState,n===null)return At(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)Ka(n,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Pu(t),u!==null){for(e.flags|=128,Ka(n,!1),t=u.updateQueue,e.updateQueue=t,pi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Ws(l,t),l=l.sibling;return La(e,le.current&1|2),at&&gl(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&Se()>Ai&&(e.flags|=128,a=!0,Ka(n,!1),e.lanes=4194304)}else{if(!a)if(t=Pu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,pi(e,t),Ka(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!u.alternate&&!at)return At(e),null}else 2*Se()-n.renderingStartTime>Ai&&l!==536870912&&(e.flags|=128,a=!0,Ka(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}if(n.tail!==null){t=n.tail;t:{for(l=t;l!==null;){if(l.alternate!==null){l=!1;break t}l=l.sibling}l=!0}return n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Se(),t.sibling=null,u=le.current,u=a?u&1|2:u&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!l||at?La(e,u):(l=u,zt(ee,e),zt(le,l),fe===null&&(fe=e)),at&&gl(e,n.treeForkCount),t}return At(e),null;case 22:case 23:return Ae(e),$c(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(l&536870912)!==0&&(e.flags&128)===0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),l=e.updateQueue,l!==null&&pi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&It(pn),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),vl(Yt),At(e),null;case 25:return null;case 30:return e.flags|=33554432,At(e),null}throw Error(o(156,e.tag))}function m0(t,e){switch(Uc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vl(Yt),An(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return bu(e),null;case 31:if(e.memoizedState!==null){if(Ae(e),e.alternate===null)throw Error(o(340));on()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));on()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Fc(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return An(),null;case 10:return vl(e.type),null;case 22:case 23:return Ae(e),$c(),t!==null&&It(pn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return vl(Yt),null;case 25:return null;default:return null}}function Nd(t,e){switch(Uc(e),e.tag){case 3:vl(Yt),An();break;case 26:case 27:case 5:bu(e);break;case 4:An();break;case 31:e.memoizedState!==null&&Ae(e);break;case 13:Ae(e);break;case 19:Fc(e);break;case 10:vl(e.type);break;case 22:case 23:Ae(e),$c(),t!==null&&It(pn);break;case 24:vl(Yt)}}function Ja(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var u=l.create,i=l.inst;n=u(),i.destroy=n}l=l.next}while(l!==a)}}catch(c){bt(e,e.return,c)}}function Ll(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&t)===t){var i=n.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,a=e;var s=l,b=c;try{b()}catch(N){bt(a,s,N)}}}n=n.next}while(n!==u)}}catch(N){bt(e,e.return,N)}}function Ad(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{hr(e,l)}catch(n){bt(t,t.return,n)}}}function Od(t,e,l){l.props=bn(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){bt(t,e,n)}}function el(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:var a=t.stateNode,u=ml(t.memoizedProps,a);(a.ref===null||a.ref.name!==u)&&(a.ref=Um(u)),n=a.ref;break;case 7:if(t.stateNode===null){var i=new Ce(t);m(t.child,!1,ng,i,void 0,void 0),t.stateNode=i}n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(c){bt(t,e,c)}}function ne(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){bt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){bt(t,e,a)}else l.current=null}function hi(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var l=0;l<e.length;l++)Gm(t.stateNode,e[l])}function jd(t){for(var e=t.return;e!==null&&(jf(e)&&Gm(t.stateNode,e.stateNode),!Of(e));)e=e.return}function $a(t){for(var e=t.return;e!==null&&(jf(e)&&ag(t.stateNode,e.stateNode),!Of(e));)e=e.return}function Of(t){return t.tag===5||t.tag===3||t.tag===27}function jf(t){return t&&t.tag===7&&t.stateNode!==null}function Mf(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){bt(t,t.return,a)}}function _f(t,e,l){try{var n=t.stateNode;Y0(n,t.type,l,e),n[pe]=e}catch(a){bt(t,t.return,a)}}function Md(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$l(t.type)||t.tag===4}function Cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Md(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$l(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,l,n){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(a,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(a),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ie)),hi(t,n),ht=!0;else if(a!==4&&(a===27&&(hi(t,n),n=null,$l(t.type)&&(l=t.stateNode,e=null)),t=t.child,t!==null))for(Df(t,e,l,n),t=t.sibling;t!==null;)Df(t,e,l,n),t=t.sibling}function gi(t,e,l,n){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?l.insertBefore(a,e):l.appendChild(a),hi(t,n),ht=!0;else if(a!==4&&(a===27&&(hi(t,n),n=null,$l(t.type)&&(l=t.stateNode)),t=t.child,t!==null))for(gi(t,e,l,n),t=t.sibling;t!==null;)gi(t,e,l,n),t=t.sibling}function _d(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ae(e,n,l),e[Pt]=t,e[pe]=l}catch(u){bt(t,t.return,u)}}var yi=!1,Oe=null;function Cd(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yi=!0)}var ll=null;function Dd(){var t=ll;return ll=null,t}var ge=0;function Fn(t,e,l,n,a){return ge=0,Rd(t.child,e,l,n,a)}function Rd(t,e,l,n,a){for(var u=!1;t!==null;){if(t.tag===5){var i=t.stateNode;if(n!==null){var c=go(i);n.push(c),c.view&&(u=!0)}else u||go(i).view&&(u=!0);yi=!0,Dm(i,ge===0?e:e+"_"+ge,l),ge++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||Rd(t.child,e,l,n,a)&&(u=!0));t=t.sibling}return u}function nl(t,e){for(;t!==null;)t.tag===5?Rm(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||nl(t.child,e)),t=t.sibling}function vi(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vi(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(o(544));var l=e.name;e=pl(e.default,e.share),e!=="none"&&(Fn(t,l,e,null,!1)||nl(t.child,!1))}t=t.sibling}}function Rf(t,e){if(t.tag===30){var l=t.stateNode,n=t.memoizedProps,a=ml(n,l),u=pl(n.default,l.paired?n.share:n.enter);u!=="none"?Fn(t,a,u,null,!1)?(vi(t),l.paired||e||aa(t,n.onEnter)):nl(t.child,!1):vi(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rf(t,e),t=t.sibling;else vi(t)}function Uf(t){if(Oe!==null&&Oe.size!==0){var e=Oe;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var l=t.memoizedProps,n=l.name;if(n!=null&&n!=="auto"){var a=e.get(n);if(a!==void 0){var u=pl(l.default,l.share);if(u!=="none"&&(Fn(t,n,u,null,!1)?(u=t.stateNode,a.paired=u,u.paired=a,aa(t,l.onShare)):nl(t.child,!1)),e.delete(n),e.size===0)break}}}Uf(t)}t=t.sibling}}}function Hf(t){if(t.tag===30){var e=t.memoizedProps,l=ml(e,t.stateNode),n=Oe!==null?Oe.get(l):void 0,a=pl(e.default,n!==void 0?e.share:e.exit);a!=="none"&&(Fn(t,l,a,null,!1)?n!==void 0?(a=t.stateNode,n.paired=a,a.paired=n,Oe.delete(l),aa(t,e.onShare)):aa(t,e.onExit):nl(t.child,!1)),Oe!==null&&Uf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Hf(t),t=t.sibling;else Oe!==null&&Uf(t)}function Ud(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,l=ml(e,t.stateNode);e=pl(e.default,e.update),t.flags&=-5,e!=="none"&&Fn(t,l,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Ud(t);t=t.sibling}}function Bf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,nl(t.child,!1))}Bf(t)}t=t.sibling}}function bi(t){if(t.tag===30)t.stateNode.paired=null,nl(t.child,!1),Bf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bi(t),t=t.sibling;else Bf(t)}function Hd(t){for(t=t.child;t!==null;)t.tag===30?nl(t.child,!1):(t.subtreeFlags&33554432)!==0&&Hd(t),t=t.sibling}function wf(t,e,l,n,a,u,i){for(var c=!1;e!==null;){if(e.tag===5){var s=e.stateNode;if(u!==null&&ge<u.length){var b=u[ge],N=go(s);(b.view||N.view)&&(c=!0);var j;if(j=(t.flags&4)===0)if(N.clip)j=!0;else{j=b.rect;var y=N.rect;j=j.y!==y.y||j.x!==y.x||j.height!==y.height||j.width!==y.width}j&&(t.flags|=4),N.abs?N=!b.abs:(b=b.rect,N=N.rect,N=b.height!==N.height||b.width!==N.width),N&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Dm(s,ge===0?l:l+"_"+ge,a),c&&(t.flags&4)!==0||(ll===null&&(ll=[]),ll.push(s,ge===0?n:n+"_"+ge,e.memoizedProps)),ge++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i?t.flags|=e.flags&32:wf(t,e.child,l,n,a,u,i)&&(c=!0));e=e.sibling}return c}function Bd(t,e){for(t=t.child;t!==null;){if(t.tag===30){var l=t.memoizedProps,n=t.stateNode,a=ml(l,n),u=pl(l.default,l.update),i;i=t.memoizedState,t.memoizedState=null,n=t;var c=t.child;ge=0,a=wf(n,c,a,a,u,i,!1),(t.flags&4)!==0&&a&&aa(t,l.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Bd(t);t=t.sibling}}var kt=!1,yt=!1,al=!1,qf=!1,wd=typeof WeakSet=="function"?WeakSet:Set,Ft=null,ul=!1,ka=!1,xi=!1,Yf=!1;function p0(t,e,l){if(t=t.containerInfo,so=pa,t=Ls(t),zc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var c=0,s=-1,b=-1,N=0,j=0,y=t,T=null;e:for(;;){for(var U;y!==n||u!==0&&y.nodeType!==3||(s=c+u),y!==i||a!==0&&y.nodeType!==3||(b=c+a),y.nodeType===3&&(c+=y.nodeValue.length),(U=y.firstChild)!==null;)T=y,y=U;for(;;){if(y===t)break e;if(T===n&&++N===u&&(s=c),T===i&&++j===a&&(b=c),(U=y.nextSibling)!==null)break;y=T,T=y.parentNode}y=U}n=s===-1||b===-1?null:{start:s,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(ro={focusedElem:t,selectionRange:n},pa=!1,l=(l&335544064)===l,Ft=e,e=l?9270:1024;Ft!==null;){if(t=Ft,l&&(n=t.deletions,n!==null))for(u=0;u<n.length;u++)l&&Hf(n[u]);if(t.alternate===null&&(t.flags&2)!==0)l&&Cd(t),Si(l);else{if(t.tag===22){if(n=t.alternate,t.memoizedState!==null){n!==null&&n.memoizedState===null&&l&&Hf(n),Si(l);continue}else if(n!==null&&n.memoizedState!==null){l&&Cd(t),Si(l);continue}}n=t.child,(t.subtreeFlags&e)!==0&&n!==null?(n.return=t,Ft=n):(l&&Ud(t),Si(l))}}Oe=null}function Si(t){for(;Ft!==null;){var e=Ft,l=t,n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&n!==null){l=void 0,a=n.memoizedProps,n=n.memoizedState;var u=e.stateNode;try{var i=bn(e.type,a);l=u.getSnapshotBeforeUpdate(i,n),u.__reactInternalSnapshotBeforeUpdate=l}catch(c){bt(e,e.return,c)}}break;case 3:if((a&1024)!==0){if(n=e.stateNode.containerInfo,l=n.nodeType,l===9)bo(n);else if(l===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":bo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:l&&n!==null&&(l=ml(n.memoizedProps,n.stateNode),a=e.memoizedProps,a=pl(a.default,a.update),a!=="none"&&Fn(n,l,a,n.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(o(163))}if(n=e.sibling,n!==null){n.return=e.return,Ft=n;break}Ft=e.return}}function qd(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:il(t,l),n&4&&Ja(5,l);break;case 1:if(il(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){bt(l,l.return,i)}else{var a=bn(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){bt(l,l.return,i)}}n&64&&Ad(l),n&512&&el(l,l.return);break;case 3:if(il(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{hr(t,e)}catch(i){bt(l,l.return,i)}}break;case 27:e===null&&n&4&&_d(l);case 26:case 5:il(t,l),e===null&&n&4&&Mf(l),n&512&&el(l,l.return);break;case 12:il(t,l);break;case 31:il(t,l),n&4&&Xd(t,l);break;case 13:il(t,l),n&4&&Qd(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=A0.bind(null,l),cg(t,l))));break;case 22:if(n=l.memoizedState!==null||kt,!n){var u=e!==null&&e.memoizedState!==null||yt;e=kt,a=yt,kt=n,(yt=u)&&!a?(n=2,(l.subtreeFlags&8772)!==0&&(n|=1),Ke(t,l,n)):il(t,l),kt=e,yt=a}break;case 30:il(t,l),n&512&&el(l,l.return);break;case 7:n&512&&el(l,l.return);default:il(t,l)}}function Gf(t,e){for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}function Yd(t,e){switch(t.tag){case 5:case 26:try{var l=t.stateNode;if(e){var n=l.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var a=t.stateNode,u=t.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null;a.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(s){bt(t,t.return,s)}Lf(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,ht=!0}catch(s){bt(t,t.return,s)}break;case 18:try{var c=t.stateNode;e?Cm(c,!0):Cm(t.stateNode,!1)}catch(s){bt(t,t.return,s)}break;case 22:case 23:t.memoizedState===null&&Gf(t,e);break;default:Gf(t,e)}}function Lf(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var l=t,n=e;switch(l.tag){case 4:Yd(l,n);break t;case 22:l.memoizedState===null&&Lf(l,n);break t;default:Lf(l,n)}}t=t.sibling}}function Gd(t){var e=t.alternate;e!==null&&(t.alternate=null,Gd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Au(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,ye=!1;function Ve(t,e,l){for(l=l.child;l!==null;)Ld(t,e,l),l=l.sibling}function Ld(t,e,l){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(va,l)}catch{}switch(l.tag){case 26:yt||ne(l,e),Ve(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&!yt&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:yt||ne(l,e),$a(l);var n=jt,a=ye;$l(l.type)&&(jt=l.stateNode,ye=!1),Ve(t,e,l),Zm(l.stateNode,l.type,l.memoizedProps),jt=n,ye=a;break;case 5:yt||ne(l,e),$a(l);case 6:if(l.tag===6&&$a(l),n=jt,a=ye,jt=null,Ve(t,e,l),jt=n,ye=a,jt!==null)if(ye)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(l.stateNode),ht=!0}catch(u){bt(l,e,u)}else try{jt.removeChild(l.stateNode),ht=!0}catch(u){bt(l,e,u)}break;case 18:jt!==null&&(ye?(t=jt,_m(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ha(t)):_m(jt,l.stateNode));break;case 4:n=jt,a=ye,jt=l.stateNode.containerInfo,ye=!0,Ve(t,e,l),jt=n,ye=a;break;case 0:case 11:case 14:case 15:Ll(2,l,e),yt||Ll(4,l,e),Ve(t,e,l);break;case 1:yt||(ne(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&Od(l,e,n)),Ve(t,e,l);break;case 21:Ve(t,e,l);break;case 22:yt=(n=yt)||l.memoizedState!==null,Ve(t,e,l),yt=n;break;case 30:ne(l,e),Ve(t,e,l);break;case 7:yt||ne(l,e),Ve(t,e,l);break;default:Ve(t,e,l)}}function Xd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ha(t)}catch(l){bt(e,e.return,l)}}}function Qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ha(t)}catch(l){bt(e,e.return,l)}}function h0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new wd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new wd),e;default:throw Error(o(435,t.tag))}}function Ti(t,e){var l=h0(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=O0.bind(null,t,n);n.then(a,a)}})}function re(t,e,l){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var u=n[a],i=t,c=e,s=c;t:for(;s!==null;){switch(s.tag){case 27:if($l(s.type)){jt=s.stateNode,ye=!1;break t}break;case 5:jt=s.stateNode,ye=!1;break t;case 3:case 4:jt=s.stateNode.containerInfo,ye=!0;break t}s=s.return}if(jt===null)throw Error(o(160));Ld(i,c,u),jt=null,ye=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Vd(e,t,l),e=e.sibling}var Ze=null;function Vd(t,e,l){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(var u=0;u<n.length;u++){var i=n[u];i.ref.impl=i.nextImpl}re(e,t,l),de(t),a&4&&(Ll(3,t,t.return),Ja(3,t),Ll(5,t,t.return));break;case 1:re(e,t,l),de(t),a&512&&(yt||n===null||ne(n,n.return)),a&64&&kt&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:if(u=Ze,re(e,t,l),de(t),a&512&&(yt||n===null||ne(n,n.return)),a&4)if(a=n!==null?n.memoizedState:null,l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null)if(kt)t.stateNode=Om(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,l=t.memoizedProps,a=u.ownerDocument||u;e:switch(e){case"title":n=a.getElementsByTagName("title")[0],(!n||n[Sa]||n[Pt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=a.createElement(e),a.head.insertBefore(n,a.querySelector("head > title"))),ae(n,e,l),n[Pt]=t,Jt(n),e=n;break t;case"link":if(u=Wm("link","href",a).get(e+(l.href||""))){for(i=0;i<u.length;i++)if(n=u[i],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(i,1);break e}}n=a.createElement(e),ae(n,e,l),a.head.appendChild(n);break;case"meta":if(u=Wm("meta","content",a).get(e+(l.content||""))){for(i=0;i<u.length;i++)if(n=u[i],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(i,1);break e}}n=a.createElement(e),ae(n,e,l),a.head.appendChild(n);break;default:throw Error(o(468,e))}n[Pt]=t,Jt(n),e=n}t.stateNode=e}else kt||Ao(u,t.type,t.stateNode);else t.stateNode=Fm(u,l,t.memoizedProps);else a!==l?(a===null?(e=n.stateNode,e===null||yt||e.parentNode.removeChild(e)):a.count--,l===null?kt||Ao(u,t.type,t.stateNode):Fm(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&_f(t,t.memoizedProps,n.memoizedProps);break;case 27:re(e,t,l),de(t),a&512&&(yt||n===null||ne(n,n.return)),n!==null&&a&4&&_f(t,t.memoizedProps,n.memoizedProps);break;case 5:if(u=al,al=!1,re(e,t,l),al=u,de(t),a&512&&(yt||n===null||ne(n,n.return)),t.flags&32){e=t.stateNode;try{Dn(e,""),ht=!0}catch(N){bt(t,t.return,N)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,_f(t,e,n!==null?n.memoizedProps:e)),a&1024&&(qf=!0);break;case 6:if(re(e,t,l),de(t),a&4){if(t.stateNode===null)throw Error(o(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e,ht=!0}catch(N){bt(t,t.return,N)}}break;case 3:if(ht=!1,wi=null,u=Ze,Ze=au(e.containerInfo),re(e,t,l),Ze=u,de(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(N){bt(t,t.return,N)}qf&&(qf=!1,Zd(t)),ht=!1;break;case 4:a=al,al=kt,n=rs(),u=Ze,Ze=au(t.stateNode.containerInfo),re(e,t,l),de(t),Ze=u,ht&&ka&&(xi=!0),ht=n,al=a;break;case 12:re(e,t,l),de(t);break;case 31:re(e,t,l),de(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ti(t,e)));break;case 13:re(e,t,l),de(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ni=Se()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ti(t,e)));break;case 22:u=t.memoizedState!==null,i=n!==null&&n.memoizedState!==null;var c=kt,s=yt,b=al;kt=c||u,al=b||u,yt=s||i,re(e,t,l),yt=s,al=b,kt=c,de(t),a&8192&&(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||n===null||i||kt||yt||(e=i||yt,l=kt,n=yt,kt=u||kt,yt=e,Xl(t,2),kt=l,yt=n),!u&&al||Gf(t,u)),a&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,Ti(t,l))));break;case 19:re(e,t,l),de(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ti(t,e)));break;case 30:a&512&&(yt||n===null||ne(n,n.return)),a=rs(),u=ka,i=(l&335544064)===l,c=t.memoizedProps,ka=i&&pl(c.default,c.update)!=="none",re(e,t,l),de(t),i&&n!==null&&ht&&(t.flags|=4),ka=u,ht=a;break;case 21:break;case 7:a&512&&(yt||n===null||ne(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=t);default:re(e,t,l),de(t)}}function de(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(Md(n)){l=n;break}n=n.return}n=null;for(var a=t.return;a!==null;){if(jf(a)){var u=a.stateNode;n===null?n=[u]:n.push(u)}if(Of(a))break;a=a.return}var i=n;if(l==null)throw Error(o(160));switch(l.tag){case 27:var c=l.stateNode,s=Cf(t);gi(t,s,c,i);break;case 5:var b=l.stateNode;l.flags&32&&(Dn(b,""),l.flags&=-33);var N=Cf(t);gi(t,N,b,i);break;case 3:case 4:var j=l.stateNode.containerInfo,y=Cf(t);Df(t,y,j,i);break;default:throw Error(o(161))}}catch(T){bt(t,t.return,T)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Zd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,pa=!0,e.reset(),pa=!1),t=t.sibling}}function Wn(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Kd(e,t),e=e.sibling;else Bd(e)}function Kd(t,e){var l=t.alternate;if(l===null)Rf(t,!1);else switch(t.tag){case 3:if(Yf=ul=!1,Dd(),Wn(e,t),!ul&&!xi){if(t=ll,t!==null)for(var n=0;n<t.length;n+=3){l=t[n];var a=t[n+1];Rm(l,t[n+2]),l=l.ownerDocument.documentElement,l!==null&&l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Yf=!0}ll=null;break;case 5:Wn(e,t);break;case 4:n=ul,ul=!1,Wn(e,t),ul&&(xi=!0),ul=n;break;case 22:t.memoizedState===null&&(l.memoizedState!==null?Rf(t,!1):Wn(e,t));break;case 30:n=ul,a=Dd(),ul=!1,Wn(e,t),ul&&(t.flags|=4);var u=t.memoizedProps,i=t.stateNode;e=ml(u,i),i=ml(l.memoizedProps,i);var c=pl(u.default,u.update);c==="none"?e=!1:(u=l.memoizedState,l.memoizedState=null,l=t.child,ge=0,e=wf(t,l,e,i,c,u,!0),ge!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(aa(t,t.memoizedProps.onUpdate),ll=a):a!==null&&(a.push.apply(a,ll),ll=a),ul=(t.flags&32)!==0?!0:n;break;default:Wn(e,t)}}function il(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)qd(t,e.alternate,e),e=e.sibling}function Xl(t,e){for(t=t.child;t!==null;){var l=t,n=e;switch(l.tag){case 0:case 11:case 14:case 15:Ll(4,l,l.return),Xl(l,n);break;case 1:ne(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&Od(l,l.return,a),Xl(l,n);break;case 27:(n&2)!==0&&Zm(l.stateNode,l.type,l.memoizedProps);case 5:ne(l,l.return),l.tag!==5&&l.tag!==27||$a(l),Xl(l,n);break;case 6:$a(l);break;case 26:ne(l,l.return),a=l.stateNode,l.memoizedState!==null||a===null||yt||a.parentNode.removeChild(a),Xl(l,n);break;case 22:l.memoizedState===null&&Xl(l,n);break;case 30:ne(l,l.return),Xl(l,n);break;case 7:ne(l,l.return);default:Xl(l,n)}t=t.sibling}}function Ke(t,e,l){for(l=(e.subtreeFlags&8772)!==0?l:l&-2,e=e.child;e!==null;){var n=e.alternate,a=t,u=e,i=u.flags,c=(l&1)!==0;switch(u.tag){case 0:case 11:case 15:Ke(a,u,l),Ja(4,u);break;case 1:if(Ke(a,u,l),n=u,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(N){bt(n,n.return,N)}if(n=u,a=n.updateQueue,a!==null){var s=n.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)pr(b[a],s)}catch(N){bt(n,n.return,N)}}c&&i&64&&Ad(u),el(u,u.return);break;case 27:(l&2)!==0&&_d(u);case 5:u.tag!==5&&u.tag!==27||jd(u),Ke(a,u,l),c&&n===null&&i&4&&Mf(u),el(u,u.return);break;case 6:jd(u);break;case 26:s=u.stateNode,u.memoizedState!==null||s===null||kt||Ao(au(s.ownerDocument),u.type,s),Ke(a,u,l),c&&n===null&&i&4&&Mf(u),el(u,u.return);break;case 12:Ke(a,u,l);break;case 31:Ke(a,u,l),c&&i&4&&Xd(a,u);break;case 13:Ke(a,u,l),c&&i&4&&Qd(a,u);break;case 22:u.memoizedState===null&&Ke(a,u,l),el(u,u.return);break;case 30:Ke(a,u,l),el(u,u.return);break;case 7:el(u,u.return);default:Ke(a,u,l)}e=e.sibling}}function Xf(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ua(l))}function Qf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ua(t))}function Ye(t,e,l,n){var a=(l&335544064)===l;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)Jd(t,e,l,n),e=e.sibling;else a&&Hd(e)}function Jd(t,e,l,n){var a=(l&335544064)===l;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&bi(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:Ye(t,e,l,n),u&2048&&Ja(9,e);break;case 1:Ye(t,e,l,n);break;case 3:Ye(t,e,l,n),a&&Yf&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&Ua(u)));break;case 12:if(u&2048){Ye(t,e,l,n),u=e.stateNode;try{var i=e.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(b){bt(e,e.return,b)}}else Ye(t,e,l,n);break;case 31:Ye(t,e,l,n);break;case 13:Ye(t,e,l,n);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?(a&&c!==null&&c.memoizedState===null&&bi(c),i._visibility&2?Ye(t,e,l,n):Fa(t,e)):(a&&c!==null&&c.memoizedState!==null&&bi(e),i._visibility&2?Ye(t,e,l,n):(i._visibility|=2,In(t,e,l,n,(e.subtreeFlags&10256)!==0||!1))),u&2048&&Xf(c,e);break;case 24:Ye(t,e,l,n),u&2048&&Qf(e.alternate,e);break;case 30:a&&(u=e.alternate,u!==null&&(nl(u.child,!0),nl(e.child,!0))),Ye(t,e,l,n);break;default:Ye(t,e,l,n)}}function In(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,c=l,s=n,b=i.flags;switch(i.tag){case 0:case 11:case 15:In(u,i,c,s,a),Ja(8,i);break;case 23:break;case 22:var N=i.stateNode;i.memoizedState!==null?N._visibility&2?In(u,i,c,s,a):Fa(u,i):(N._visibility|=2,In(u,i,c,s,a)),a&&b&2048&&Xf(i.alternate,i);break;case 24:In(u,i,c,s,a),a&&b&2048&&Qf(i.alternate,i);break;default:In(u,i,c,s,a)}e=e.sibling}}function Fa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:Fa(l,n),a&2048&&Xf(n.alternate,n);break;case 24:Fa(l,n),a&2048&&Qf(n.alternate,n);break;default:Fa(l,n)}e=e.sibling}}var xn=8192;function Sn(t,e,l){if(t.subtreeFlags&xn)for(t=t.child;t!==null;)$d(t,e,l),t=t.sibling}function $d(t,e,l){switch(t.tag){case 26:Sn(t,e,l),t.flags&xn&&(t.memoizedState!==null?Sg(l,Ze,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&ep(l,t)));break;case 5:Sn(t,e,l),t.flags&xn&&(t=t.stateNode,(e&335544128)===e&&ep(l,t));break;case 3:case 4:var n=Ze;Ze=au(t.stateNode.containerInfo),Sn(t,e,l),Ze=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=xn,xn=16777216,Sn(t,e,l),xn=n):Sn(t,e,l));break;case 30:if((t.flags&xn)!==0&&(n=t.memoizedProps.name,n!=null&&n!=="auto")){var a=t.stateNode;a.paired=null,Oe===null&&(Oe=new Map),Oe.set(n,a)}Sn(t,e,l);break;default:Sn(t,e,l)}}function kd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Wa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Ft=n,Wd(n,t)}kd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fd(t),t=t.sibling}function Fd(t){switch(t.tag){case 0:case 11:case 15:Wa(t),t.flags&2048&&Ll(9,t,t.return);break;case 3:Wa(t);break;case 12:Wa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ei(t)):Wa(t);break;default:Wa(t)}}function Ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];Ft=n,Wd(n,t)}kd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ll(8,e,e.return),Ei(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Ei(e));break;default:Ei(e)}t=t.sibling}}function Wd(t,e){for(;Ft!==null;){var l=Ft;switch(l.tag){case 0:case 11:case 15:Ll(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ua(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Ft=n;else t:for(l=t;Ft!==null;){n=Ft;var a=n.sibling,u=n.return;if(Gd(n),n===l){Ft=null;break t}if(a!==null){a.return=u,Ft=a;break t}Ft=u}}}var g0={getCacheForType:function(t){var e=te(Yt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return te(Yt).controller.signal}},y0=typeof WeakMap=="function"?WeakMap:Map,gt=0,Et=null,ct=null,rt=0,vt=0,je=null,Ql=!1,Pn=!1,Vf=!1,El=0,Rt=0,Vl=0,Tn=0,zi=0,Me=0,ta=0,Ia=null,ve=null,Zf=!1,Ni=0,Id=0,Ai=1/0,Oi=null,Zl=null,_t=0,Je=null,En=null,cl=0,Kf=0,Jf=null,Pd=null,ea=null,la=null,na=null,Pa=0,ji=null;function _e(){return(gt&2)!==0&&rt!==0?rt&-rt:q.T!==null?no():ls()}function tm(){if(Me===0)if((rt&536870912)===0||at){var t=Tu;Tu<<=1,(Tu&3932160)===0&&(Tu=262144),Me=t}else Me=536870912;return t=ee.current,t!==null&&(t.flags|=32),Me}function aa(t,e){if(e!=null){var l=t.stateNode,n=l.ref;n===null&&(n=l.ref=Um(ml(t.memoizedProps,l))),la===null&&(la=[]),la.push(e.bind(null,n))}}function be(t,e,l){(t===Et&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(ua(t,0),Kl(t,rt,Me,!1)),xa(t,l),((gt&2)===0||t!==Et)&&(t===Et&&((gt&2)===0&&(Tn|=l),Rt===4&&Kl(t,rt,Me,!1)),fl(t))}function em(t,e,l){if((gt&6)!==0)throw Error(o(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||ba(t,e),a=n?x0(t,e):kf(t,e,!0),u=n;do{if(a===0){Pn&&!n&&Kl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!v0(l)){a=kf(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;a=Ia;var s=c.current.memoizedState.isDehydrated;if(s&&(ua(c,i).flags|=256),i=kf(c,i,!1),i!==2&&i!==6){if(Vf&&!s){c.errorRecoveryDisabledLanes|=u,Tn|=u,a=4;break t}u=ve,ve=a,u!==null&&(ve===null?ve=u:ve.push.apply(ve,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){ua(t,0),Kl(t,e,0,!0);break}t:{switch(n=t,u=a,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Kl(n,e,Me,!Ql);break t;case 2:ve=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(a=Ni+300-Se(),10<a)){if(Kl(n,e,Me,!Ql),zu(n,0,!0)!==0)break t;cl=e,n.timeoutHandle=ho(lm.bind(null,n,l,ve,Oi,Zf,e,Me,Tn,ta,Ql,u,"Throttled",-0,0),a);break t}lm(n,l,ve,Oi,Zf,e,Me,Tn,ta,Ql,u,null,-0,0)}}break}while(!0);fl(t)}function lm(t,e,l,n,a,u,i,c,s,b,N,j,y,T){t.timeoutHandle=-1;var U=e.subtreeFlags,G=(u&335544064)===u;if(j=null,(G||U&8192||(U&16785408)===16785408)&&(j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ie},Oe=null,$d(e,u,j),G&&(U=j,G=t.containerInfo,G=(G.nodeType===9?G:G.ownerDocument).__reactViewTransition,G!=null&&(U.count++,U.waitingForViewTransition=!0,U=cu.bind(U),G.finished.then(U,U))),U=(u&62914560)===u?Ni-Se():(u&4194048)===u?Id-Se():0,U=Tg(j,U),U!==null)){cl=u,t.cancelPendingCommit=U(sm.bind(null,t,e,u,l,n,a,i,c,s,b,N,j,null,y,T)),Kl(t,u,i,!b);return}sm(t,e,u,l,n,a,i,c,s,b,N,j)}function v0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],u=a.getSnapshot;a=a.value;try{if(!Ne(u(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kl(t,e,l,n){e=Wo(t,e),e&=~zi,e&=~Tn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var u=31-Ee(a),i=1<<u;n[u]=-1,a&=~i}l!==0&&Po(t,l,e)}function Mi(){return(gt&6)===0?(tu(0),!1):!0}function $f(){if(ct!==null){if(vt===0)var t=ct.return;else t=ct,yl=sn=null,ef(t),Zn=null,wa=0,t=ct;for(;t!==null;)Nd(t.alternate,t),t=t.return;ct=null}}function ua(t,e){var l=t.timeoutHandle;return l!==-1&&(t.timeoutHandle=-1,X0(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),cl=0,$f(),Et=t,ct=l=hl(t.current,null),rt=e,vt=0,je=null,Ql=!1,Pn=ba(t,e),Vf=!1,ta=Me=zi=Tn=Vl=Rt=0,ve=Ia=null,Zf=!1,El=Wo(t,e),wu(),l}function nm(t,e){et=null,q.H=fi,e===Vn||e===$u?(e=sr(),vt=3):e===Xc?(e=sr(),vt=4):vt=e===yf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,je=e,ct===null&&(Rt=1,oi(t,He(e,t.current)))}function am(){var t=ee.current;return t===null?!0:(rt&4194048)===rt?fe===null:(rt&62914560)===rt||(rt&536870912)!==0?t===fe:!1}function um(){var t=q.H;return q.H=fi,t===null?fi:t}function im(){var t=q.A;return q.A=g0,t}function _i(){Rt=4,Ql||(rt&4194048)!==rt&&ee.current!==null||(Pn=!0),(Vl&134217727)===0&&(Tn&134217727)===0||Et===null||Kl(Et,rt,Me,!1)}function kf(t,e,l){var n=gt;gt|=2;var a=um(),u=im();(Et!==t||rt!==e)&&(Oi=null,ua(t,e)),e=!1;var i=Rt;t:do try{if(vt!==0&&ct!==null){var c=ct,s=je;switch(vt){case 8:$f(),i=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var b=vt;if(vt=0,je=null,ia(t,c,s,b),l&&Pn){i=0;break t}break;default:b=vt,vt=0,je=null,ia(t,c,s,b)}}b0(),i=Rt;break}catch(N){nm(t,N)}while(!0);return e&&t.shellSuspendCounter++,yl=sn=null,gt=n,q.H=a,q.A=u,ct===null&&(Et=null,rt=0,wu()),i}function b0(){for(;ct!==null;)cm(ct)}function x0(t,e){var l=gt;gt|=2;var n=um(),a=im();Et!==t||rt!==e?(Oi=null,Ai=Se()+500,ua(t,e)):Pn=ba(t,e);t:do try{if(vt!==0&&ct!==null){e=ct;var u=je;e:switch(vt){case 1:vt=0,je=null,ia(t,e,u,1);break;case 2:case 9:if(fr(u)){vt=0,je=null,fm(e);break}e=function(){vt!==2&&vt!==9||Et!==t||(vt=7),fl(t)},u.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:fr(u)?(vt=0,je=null,fm(e)):(vt=0,je=null,ia(t,e,u,7));break;case 5:var i=null;switch(ct.tag){case 26:i=ct.memoizedState;case 5:case 27:var c=ct;if(i?Pm(i):c.stateNode.complete){vt=0,je=null;var s=c.sibling;if(s!==null)ct=s;else{var b=c.return;b!==null?(ct=b,Ci(b)):ct=null}break e}}vt=0,je=null,ia(t,e,u,5);break;case 6:vt=0,je=null,ia(t,e,u,6);break;case 8:$f(),Rt=6;break t;default:throw Error(o(462))}}S0();break}catch(N){nm(t,N)}while(!0);return yl=sn=null,q.H=n,q.A=a,gt=l,ct!==null?0:(Et=null,rt=0,wu(),Rt)}function S0(){for(;ct!==null&&!qp();)cm(ct)}function cm(t){var e=Ed(t.alternate,t,El);t.memoizedProps=t.pendingProps,e===null?Ci(t):ct=e}function fm(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=gd(l,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=gd(l,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:ef(e);var n=e;n===$t&&(at?(Qu(n),n.tag===5&&n.stateNode!=null&&(Nt=n.stateNode)):(Qu(n),at=!0));default:Nd(l,e),e=ct=Ws(e,El),e=Ed(l,e,El)}t.memoizedProps=t.pendingProps,e===null?Ci(t):ct=e}function ia(t,e,l,n){yl=sn=null,ef(e),Zn=null,wa=0;var a=e.return;try{if(f0(t,a,e,l,rt)){Rt=1,oi(t,He(l,t.current)),ct=null;return}}catch(u){if(a!==null)throw ct=a,u;Rt=1,oi(t,He(l,t.current)),ct=null;return}e.flags&32768?(at||n===1?t=!0:Pn||(rt&536870912)!==0?t=!1:(Ql=t=!0,(n===2||n===9||n===3||n===6)&&(n=ee.current,n!==null&&n.tag===13&&(n.flags|=16384))),om(e,t)):Ci(e)}function Ci(t){var e=t;do{if((e.flags&32768)!==0){om(e,Ql);return}t=e.return;var l=d0(e.alternate,e,El);if(l!==null){ct=l;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Rt===0&&(Rt=5)}function om(t,e){do{var l=m0(t.alternate,t);if(l!==null){l.flags&=32767,ct=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=l}while(t!==null);Rt=6,ct=null}function sm(t,e,l,n,a,u,i,c,s,b,N,j){t.cancelPendingCommit=null;do Di();while(_t!==0);if((gt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));t===Et&&(ct=Et=null,rt=0),En=e,Je=t,cl=l,Jf=a,Pd=n,T0(t,e,l,i,c,s,j)}}function T0(t,e,l,n,a,u,i){var c=e.lanes|e.childLanes;if(Kf=c,c|=Mc,$p(t,l,c,n,a,u),la=null,(l&335544064)===l?(na=Fh(t),n=10262):(na=null,n=10256),(e.subtreeFlags&n)!==0||(e.flags&n)!==0?(t.callbackNode=null,t.callbackPriority=0,j0(xu,function(){return Pf(),null})):(t.callbackNode=null,t.callbackPriority=0),yi=!1,n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=q.T,q.T=null,a=I.p,I.p=2,u=gt,gt|=4;try{p0(t,e,l)}finally{gt=u,I.p=a,q.T=n}}_t=1,yi?ea=$0(i,t.containerInfo,na,Ff,Wf,z0,If,Pf,E0):(Ff(),Wf(),If())}function E0(t){if(_t!==0){var e=Je.onRecoverableError;e(t,{componentStack:null})}}function z0(){_t===3&&(_t=0,Kd(En,Je),_t=4)}function Ff(){if(_t===1){_t=0;var t=Je,e=En,l=cl,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=q.T,q.T=null;var a=I.p;I.p=2;var u=gt;gt|=4;try{ka=xi=!1,Vd(e,t,l),l=ro;var i=Ls(t.containerInfo),c=l.focusedElem,s=l.selectionRange;if(i!==c&&c&&c.ownerDocument&&Gs(c.ownerDocument.documentElement,c)){if(s!==null&&zc(c)){var b=s.start,N=s.end;if(N===void 0&&(N=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(N,c.value.length);else{var j=c.ownerDocument||document,y=j&&j.defaultView||window;if(y.getSelection){var T=y.getSelection(),U=c.textContent.length,G=Math.min(s.start,U),lt=s.end===void 0?G:Math.min(s.end,U);!T.extend&&G>lt&&(i=lt,lt=G,G=i);var v=Ys(c,G),d=Ys(c,lt);if(v&&d&&(T.rangeCount!==1||T.anchorNode!==v.node||T.anchorOffset!==v.offset||T.focusNode!==d.node||T.focusOffset!==d.offset)){var S=j.createRange();S.setStart(v.node,v.offset),T.removeAllRanges(),G>lt?(T.addRange(S),T.extend(d.node,d.offset)):(S.setEnd(d.node,d.offset),T.addRange(S))}}}}for(j=[],T=c;T=T.parentNode;)T.nodeType===1&&j.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<j.length;c++){var O=j[c];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}pa=!!so,ro=so=null}finally{gt=u,I.p=a,q.T=n}}t.current=e,_t=2}}function Wf(){if(_t===2){_t=0;var t=Je,e=En,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=q.T,q.T=null;var n=I.p;I.p=2;var a=gt;gt|=4;try{qd(t,e.alternate,e)}finally{gt=a,I.p=n,q.T=l}}_t=3}}function If(){if(_t===4||_t===3){_t=0;var t=ea;ea=null,Yp();var e=Je,l=En,n=cl,a=Pd,u=(n&335544064)===n?10262:10256;if((l.subtreeFlags&u)!==0||(l.flags&u)!==0?_t=5:(_t=0,En=Je=null,rm(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(Zl=null),ic(n),l=l.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(va,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=q.T,u=I.p,I.p=2,q.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var s=a[c];i(s.value,{componentStack:s.stack})}}finally{q.T=l,I.p=u}}if(a=la,i=na,na=null,a!==null&&(la=null,i===null&&(i=[]),t!==null))for(s=0;s<a.length;s++)l=(0,a[s])(i),l!==void 0&&t.finished.finally(l);(cl&3)!==0&&Di(),fl(e),u=e.pendingLanes,(n&261930)!==0&&(u&42)!==0?e===ji?Pa++:(Pa=0,ji=e):(Pa=0,ji=null),tu(0)}}function rm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ua(e)))}function Di(){return ea!==null&&(ea.skipTransition(),ea=null),Ff(),Wf(),If(),Pf()}function Pf(){if(_t!==5)return!1;var t=Je,e=Kf;Kf=0;var l=ic(cl),n=q.T,a=I.p;try{I.p=32>l?32:l,q.T=null,l=Jf,Jf=null;var u=Je,i=cl;if(_t=0,En=Je=null,cl=0,(gt&6)!==0)throw Error(o(331));var c=gt;if(gt|=4,Fd(u.current),Jd(u,u.current,i,l),gt=c,tu(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(va,u)}catch{}return!0}finally{I.p=a,q.T=n,rm(t,e)}}function dm(t,e,l){e=He(l,e),e=gf(t.stateNode,e,2),t=wl(t,e,2),t!==null&&(xa(t,2),fl(t))}function bt(t,e,l){if(t.tag===3)dm(t,t,l);else for(;e!==null;){if(e.tag===3){dm(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Zl===null||!Zl.has(n))){t=He(l,t),l=fd(2),n=wl(e,l,2),n!==null&&(od(l,n,e,t),xa(n,2),fl(n));break}}e=e.return}}function to(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new y0;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(Vf=!0,a.add(l),t=N0.bind(null,t,e,l),e.then(t,t))}function N0(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Et===t&&(rt&l)===l&&((Rt===4||Rt===3&&(rt&62914560)===rt&&300>Se()-Ni)&&(gt&2)===0?ua(t,0):zi|=l,ta===rt&&(ta=0)),fl(t)}function mm(t,e){e===0&&(e=Io()),t=cn(t,e),t!==null&&(xa(t,e),fl(t))}function A0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),mm(t,l)}function O0(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(e),mm(t,l)}function j0(t,e){return lc(t,e)}var ca=null,fa=null,eo=!1,Ri=!1,lo=!1,Jl=0;function fl(t){t!==fa&&t.next===null&&(fa===null?ca=fa=t:fa=fa.next=t),Ri=!0,eo||(eo=!0,_0())}function tu(t,e){if(!lo&&Ri){lo=!0;do for(var l=!1,n=ca;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var u=0;else{var i=n.suspendedLanes,c=n.pingedLanes;u=(1<<31-Ee(42|t)+1)-1,u&=a&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,ym(n,u))}else u=rt,u=zu(n,n===Et?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||ba(n,u)||(l=!0,ym(n,u));n=n.next}while(l);lo=!1}}function M0(){pm()}function pm(){Ri=eo=!1;var t=0;Jl!==0&&L0()&&(t=Jl);for(var e=Se(),l=null,n=ca;n!==null;){var a=n.next,u=hm(n,e);u===0?(n.next=null,l===null?ca=a:l.next=a,a===null&&(fa=l)):(l=n,(t!==0||(u&3)!==0)&&(Ri=!0)),n=a}_t!==0&&_t!==5||tu(t),Jl!==0&&(Jl=0)}function hm(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-Ee(u),c=1<<i,s=a[i];s===-1?((c&l)===0||(c&n)!==0)&&(a[i]=Jp(c,e)):s<=e&&(t.expiredLanes|=c),u&=~c}if(e=Et,l=rt,l=zu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&nc(n),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||ba(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&nc(n),ic(l)){case 2:case 8:l=ko;break;case 32:l=xu;break;case 268435456:l=Fo;break;default:l=xu}return n=gm.bind(null,t),l=lc(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&nc(n),t.callbackPriority=2,t.callbackNode=null,2}function gm(t,e){if(_t!==0&&_t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Di()&&t.callbackNode!==l)return null;var n=rt;return n=zu(t,t===Et?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(em(t,n,e),hm(t,Se()),t.callbackNode!=null&&t.callbackNode===l?gm.bind(null,t):null)}function ym(t,e){if(Di())return null;em(t,e,!0)}function _0(){Q0(function(){(gt&6)!==0?lc($o,M0):pm()})}function no(){if(Jl===0){var t=mn;t===0&&(t=Su,Su<<=1,(Su&261888)===0&&(Su=256)),Jl=t}return Jl}function vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mu(t)}function C0(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var u=vm((a[pe]||null).action),i=n.submitter;i&&(e=(e=i[pe]||null)?vm(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new Ru("action","action",null,n,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Jl!==0){var s=new FormData(a,i);rf(l,{pending:!0,data:s,method:a.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=new FormData(a,i),rf(l,{pending:!0,data:s,method:a.method,action:u},u,s))},currentTarget:a}]})}}for(var ao=0;ao<jc.length;ao++){var uo=jc[ao],D0=uo.toLowerCase(),R0=uo[0].toUpperCase()+uo.slice(1);Qe(D0,"on"+R0)}Qe(Vs,"onAnimationEnd"),Qe(Zs,"onAnimationIteration"),Qe(Ks,"onAnimationStart"),Qe("dblclick","onDoubleClick"),Qe("focusin","onFocus"),Qe("focusout","onBlur"),Qe(Xh,"onTransitionRun"),Qe(Qh,"onTransitionStart"),Qe(Vh,"onTransitionCancel"),Qe(Js,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eu));function bm(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var i=n.length-1;0<=i;i--){var c=n[i],s=c.instance,b=c.currentTarget;if(c=c.listener,s!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=b;try{u(a)}catch(N){Bu(N)}a.currentTarget=null,u=s}else for(i=0;i<n.length;i++){if(c=n[i],s=c.instance,b=c.currentTarget,c=c.listener,s!==u&&a.isPropagationStopped())break t;u=c,a.currentTarget=b;try{u(a)}catch(N){Bu(N)}a.currentTarget=null,u=s}}}}function ft(t,e){var l=e[as];l===void 0&&(l=e[as]=new Set);var n=t+"__bubble";l.has(n)||(xm(e,t,2,!1),l.add(n))}function io(t,e,l){var n=0;e&&(n|=4),xm(l,t,n,e)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Ui]){t[Ui]=!0,cs.forEach(function(l){l!=="selectionchange"&&(U0.has(l)||io(l,!1,t),io(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ui]||(e[Ui]=!0,io("selectionchange",!1,e))}}function xm(t,e,l,n){switch(op(e)){case 2:var a=Ag;break;case 8:a=Og;break;default:a=jo}l=a.bind(null,e,l,t),a=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function fo(t,e,l,n,a){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var c=n.stateNode.containerInfo;if(c===a)break;if(i===4)for(i=n.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;c!==null;){if(i=ln(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){n=u=i;continue t}c=c.parentNode}}n=n.return}xs(function(){var b=u,N=dc(l),j=[];t:{var y=$s.get(t);if(y!==void 0){var T=Ru,U=t;switch(t){case"keypress":if(Cu(l)===0)break t;case"keydown":case"keyup":T=vh;break;case"focusin":U="focus",T=vc;break;case"focusout":U="blur",T=vc;break;case"beforeblur":case"afterblur":T=vc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Eh;break;case Vs:case Zs:case Ks:T=oh;break;case Js:T=Nh;break;case"scroll":case"scrollend":T=ah;break;case"wheel":T=Oh;break;case"copy":case"cut":case"paste":T=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Ns;break;case"submit":T=Sh;break;case"toggle":case"beforetoggle":T=Mh}var G=(e&4)!==0,lt=!G&&(t==="scroll"||t==="scrollend"),v=G?y!==null?y+"Capture":null:y;G=[];for(var d=b,S;d!==null;){var O=d;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||v===null||(O=Ea(d,v),O!=null&&G.push(lu(d,O,S))),lt)break;d=d.return}0<G.length&&(y=new T(y,U,null,l,N),j.push({event:y,listeners:G}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",T&&l!==rc&&(U=l.relatedTarget||l.fromElement)&&(ln(U)||U[On]))break t;(y||T)&&(U=N.window===N?N:(T=N.ownerDocument)?T.defaultView||T.parentWindow:window,y?(T=l.relatedTarget||l.toElement,y=b,T=T?ln(T):null,T!==null&&(lt=_(T),G=T.tag,T!==lt||G!==5&&G!==27&&G!==6)&&(T=null)):(y=null,T=b),y!==T&&(G=Es,O="onMouseLeave",v="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(G=Ns,O="onPointerLeave",v="onPointerEnter",d="pointer"),lt=y==null?U:Ta(y),S=T==null?U:Ta(T),U=new G(O,d+"leave",y,l,N),U.target=lt,U.relatedTarget=S,O=null,ln(N)===b&&(G=new G(v,d+"enter",T,l,N),G.target=S,G.relatedTarget=lt,O=G),lt=O,G=y&&T?Mt(y,T,H0):null,y!==null&&Sm(j,U,y,G,!1),T!==null&&lt!==null&&Sm(j,lt,T,G,!0)))}t:{if(y=b?Ta(b):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var Y=Rs;else if(Cs(y))if(Us)Y=Yh;else{Y=wh;var dt=Bh}else T=y.nodeName,!T||T.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?b&&sc(b.elementType)&&(Y=Rs):Y=qh;if(Y&&(Y=Y(t,b))){Ds(j,Y,l,N);break t}dt&&dt(t,y,b)}switch(dt=b?Ta(b):window,t){case"focusin":(Cs(dt)||dt.contentEditable==="true")&&(Bn=dt,Nc=b,Ca=null);break;case"focusout":Ca=Nc=Bn=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Xs(j,l,N);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":Xs(j,l,N)}var K;if(xc)t:{switch(t){case"compositionstart":var k="onCompositionStart";break t;case"compositionend":k="onCompositionEnd";break t;case"compositionupdate":k="onCompositionUpdate";break t}k=void 0}else Hn?Ms(t,l)&&(k="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(k="onCompositionStart");k&&(As&&l.locale!=="ko"&&(Hn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Hn&&(K=Ss()):(jl=N,hc="value"in jl?jl.value:jl.textContent,Hn=!0)),dt=Hi(b,k),0<dt.length&&(k=new zs(k,t,null,l,N),j.push({event:k,listeners:dt}),K?k.data=K:(K=_s(l),K!==null&&(k.data=K)))),(K=Ch?Dh(t,l):Rh(t,l))&&(k=Hi(b,"onBeforeInput"),0<k.length&&(dt=new zs("onBeforeInput","beforeinput",null,l,N),j.push({event:dt,listeners:k}),dt.data=K)),C0(j,t,b,l,N)}bm(j,e)})}function lu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Hi(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Ea(t,l),a!=null&&n.unshift(lu(t,a,u)),a=Ea(t,e),a!=null&&n.push(lu(t,a,u))),t.tag===3)return n;t=t.return}return[]}function H0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sm(t,e,l,n,a){for(var u=e._reactName,i=[];l!==null&&l!==n;){var c=l,s=c.alternate,b=c.stateNode;if(c=c.tag,s!==null&&s===n)break;c!==5&&c!==26&&c!==27||b===null||(s=b,a?(b=Ea(l,u),b!=null&&i.unshift(lu(l,b,s))):a||(b=Ea(l,u),b!=null&&i.push(lu(l,b,s)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var B0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Tm(t){return(typeof t=="string"?t:""+t).replace(B0,`
`).replace(w0,"")}function Em(t,e){return e=Tm(e),Tm(t)===e}function xt(t,e,l,n,a,u){switch(l){case"children":if(typeof n=="string")e==="body"||e==="textarea"&&n===""||Dn(t,n);else if(typeof n=="number"||typeof n=="bigint")e!=="body"&&Dn(t,""+n);else return;break;case"className":ju(t,"class",n);break;case"tabIndex":ju(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ju(t,l,n);break;case"style":vs(t,n,u);return;case"data":if(e!=="object"){ju(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Mu(n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&xt(t,e,"name",a.name,a,null),xt(t,e,"formEncType",a.formEncType,a,null),xt(t,e,"formMethod",a.formMethod,a,null),xt(t,e,"formTarget",a.formTarget,a,null)):(xt(t,e,"encType",a.encType,a,null),xt(t,e,"method",a.method,a,null),xt(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=Mu(n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=Ie);return;case"onScroll":n!=null&&ft("scroll",t);return;case"onScrollEnd":n!=null&&ft("scrollend",t);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(o(60));u?.__html!==l&&(t.innerHTML=l)}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=Mu(n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":ft("beforetoggle",t),ft("toggle",t),Ou(t,"popover",n);break;case"xlinkActuate":rl(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":rl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":rl(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":rl(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":rl(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":rl(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":rl(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":rl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":rl(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ou(t,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")l=lh.get(l)||l,Ou(t,l,n);else return}ht=!0}function oo(t,e,l,n,a,u){switch(l){case"style":vs(t,n,u);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(o(60));u?.__html!==l&&(t.innerHTML=l)}}break;case"children":if(typeof n=="string")Dn(t,n);else if(typeof n=="number"||typeof n=="bigint")Dn(t,""+n);else return;break;case"onScroll":n!=null&&ft("scroll",t);return;case"onScrollEnd":n!=null&&ft("scrollend",t);return;case"onClick":n!=null&&(t.onclick=Ie);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!fs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),u=l.slice(2,a?l.length-7:void 0),e=t[pe]||null,e=e!=null?e[l]:null,typeof e=="function"&&t.removeEventListener(u,e,a),typeof n=="function")){typeof e!="function"&&e!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(u,n,a);break t}ht=!0,l in t?t[l]=n:n===!0?t.setAttribute(l,""):Ou(t,l,n)}return}ht=!0}function ae(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var n=!1,a=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:xt(t,e,u,i,l,null)}}a&&xt(t,e,"srcSet",l.srcSet,l,null),n&&xt(t,e,"src",l.src,l,null);return;case"input":ft("invalid",t);var c=u=i=a=null,s=null,b=null;for(n in l)if(l.hasOwnProperty(n)){var N=l[n];if(N!=null)switch(n){case"name":a=N;break;case"type":i=N;break;case"checked":s=N;break;case"defaultChecked":b=N;break;case"value":u=N;break;case"defaultValue":c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:xt(t,e,n,N,l,null)}}ps(t,u,c,s,b,i,a,!1);return;case"select":ft("invalid",t),n=i=u=null;for(a in l)if(l.hasOwnProperty(a)&&(c=l[a],c!=null))switch(a){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":n=c;default:xt(t,e,a,c,l,null)}e=u,l=i,t.multiple=!!n,e!=null?Cn(t,!!n,e,!1):l!=null&&Cn(t,!!n,l,!0);return;case"textarea":ft("invalid",t),u=a=n=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":a=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:xt(t,e,i,c,l,null)}gs(t,n,a,u);return;case"option":for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null)&&(s==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":xt(t,e,s,n,l,null));return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(n=0;n<eu.length;n++)ft(eu[n],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(n=l[b],n!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:xt(t,e,b,n,l,null)}return;default:if(sc(e)){for(N in l)l.hasOwnProperty(N)&&(n=l[N],n!==void 0&&oo(t,e,N,n,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(n=l[c],n!=null&&xt(t,e,c,n,l,null))}var q0={};function Y0(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,c=null,s=null,b=null,N=null;for(T in l){var j=l[T];if(l.hasOwnProperty(T)&&j!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":s=j;default:n.hasOwnProperty(T)||xt(t,e,T,null,n,j)}}for(var y in n){var T=n[y];if(j=l[y],n.hasOwnProperty(y)&&(T!=null||j!=null))switch(y){case"type":T!==j&&(ht=!0),u=T;break;case"name":T!==j&&(ht=!0),a=T;break;case"checked":T!==j&&(ht=!0),b=T;break;case"defaultChecked":T!==j&&(ht=!0),N=T;break;case"value":T!==j&&(ht=!0),i=T;break;case"defaultValue":T!==j&&(ht=!0),c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:T!==j&&xt(t,e,y,T,n,j)}}fc(t,i,c,s,b,N,u,a);return;case"select":T=i=c=y=null;for(u in l)if(s=l[u],l.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":T=s;default:n.hasOwnProperty(u)||xt(t,e,u,null,n,s)}for(a in n)if(u=n[a],s=l[a],n.hasOwnProperty(a)&&(u!=null||s!=null))switch(a){case"value":u!==s&&(ht=!0),y=u;break;case"defaultValue":u!==s&&(ht=!0),c=u;break;case"multiple":u!==s&&(ht=!0),i=u;default:u!==s&&xt(t,e,a,u,n,s)}e=c,l=i,n=T,y!=null?Cn(t,!!l,y,!1):!!n!=!!l&&(e!=null?Cn(t,!!l,e,!0):Cn(t,!!l,l?[]:"",!1));return;case"textarea":T=y=null;for(c in l)if(a=l[c],l.hasOwnProperty(c)&&a!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:xt(t,e,c,null,n,a)}for(i in n)if(a=n[i],u=l[i],n.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":a!==u&&(ht=!0),y=a;break;case"defaultValue":a!==u&&(ht=!0),T=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==u&&xt(t,e,i,a,n,u)}hs(t,y,T);return;case"option":for(var U in l)y=l[U],l.hasOwnProperty(U)&&y!=null&&!n.hasOwnProperty(U)&&(U==="selected"?t.selected=!1:xt(t,e,U,null,n,y));for(s in n)y=n[s],T=l[s],n.hasOwnProperty(s)&&y!==T&&(y!=null||T!=null)&&(s==="selected"?(y!==T&&(ht=!0),t.selected=y&&typeof y!="function"&&typeof y!="symbol"):xt(t,e,s,y,n,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in l)y=l[G],l.hasOwnProperty(G)&&y!=null&&!n.hasOwnProperty(G)&&xt(t,e,G,null,n,y);for(b in n)if(y=n[b],T=l[b],n.hasOwnProperty(b)&&y!==T&&(y!=null||T!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(137,e));break;default:xt(t,e,b,y,n,T)}return;default:if(sc(e)){for(var lt in l)y=l[lt],l.hasOwnProperty(lt)&&y!==void 0&&!n.hasOwnProperty(lt)&&oo(t,e,lt,void 0,n,y);for(N in n)y=n[N],T=l[N],!n.hasOwnProperty(N)||y===T||y===void 0&&T===void 0||oo(t,e,N,y,n,T);return}}for(var v in l)y=l[v],l.hasOwnProperty(v)&&y!=null&&!n.hasOwnProperty(v)&&xt(t,e,v,null,n,y);for(j in n)y=n[j],T=l[j],!n.hasOwnProperty(j)||y===T||y==null&&T==null||xt(t,e,j,y,n,T)}function zm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function G0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],u=a.transferSize,i=a.initiatorType,c=a.duration;if(u&&c&&zm(i)){for(i=0,c=a.responseEnd,n+=1;n<l.length;n++){var s=l[n],b=s.startTime;if(b>c)break;var N=s.transferSize,j=s.initiatorType;N&&zm(j)&&(s=s.responseEnd,i+=N*(s<c?1:(c-b)/(s-b)))}if(--n,e+=8*(u+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var so=null,ro=null;function nu(t){return t.nodeType===9?t:t.ownerDocument}function Nm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Om(t,e,l,n){return l=nu(l).createElement(t),l[Pt]=n,l[pe]=e,ae(l,t,e),Jt(l),l}function mo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var po=null;function L0(){var t=window.event;return t&&t.type==="popstate"?t===po?!1:(po=t,!0):(po=null,!1)}var ho=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,Mm=typeof requestAnimationFrame=="function"?requestAnimationFrame:ho,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(V0)}:ho;function V0(t){setTimeout(function(){throw t})}function $l(t){return t==="head"}function _m(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),ha(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Eo(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Eo(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Sa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&Eo(t.ownerDocument.body);l=a}while(l);ha(e)}function Cm(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function Dm(t,e,l){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,l!=null&&(t.style.viewTransitionClass=l),l=getComputedStyle(t),l.display==="inline"){if(e=t.getClientRects(),e.length===1)var n=1;else for(var a=n=0;a<e.length;a++){var u=e[a];0<u.width&&0<u.height&&n++}n===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+l.paddingTop,t.marginBottom="-"+l.paddingBottom)}}function Rm(t,e){t=t.style,e=e.style;var l=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=l==null||typeof l=="boolean"?"":(""+l).trim(),l=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=l==null||typeof l=="boolean"?"":(""+l).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(l=e.display,t.display=l==null||typeof l=="boolean"?"":l,l=e.margin,l!=null?t.margin=l:(l=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=l==null||typeof l=="boolean"?"":l,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Z0(t,e,l){return l=l.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=l.innerHeight&&t.left<=l.innerWidth}}function go(t){var e=t.getBoundingClientRect(),l=getComputedStyle(t);return Z0(e,l,t)}function K0(t){return t.documentElement.clientHeight}function J0(t){this.addEventListener("load",t),this.addEventListener("error",t)}function $0(t,e,l,n,a,u,i,c,s){var b=e.nodeType===9?e:e.ownerDocument;try{var N=b.startViewTransition({update:function(){var y=b.defaultView,T=y.navigation&&y.navigation.transition,U=b.fonts.status;n();var G=[];if(U==="loaded"&&(K0(b),b.fonts.status==="loading"&&G.push(b.fonts.ready)),U=G.length,t!==null)for(var lt=t.suspenseyImages,v=0,d=0;d<lt.length;d++){var S=lt[d];if(!S.complete){var O=S.getBoundingClientRect();if(0<O.bottom&&0<O.right&&O.top<y.innerHeight&&O.left<y.innerWidth){if(v+=tp(S),v>qi){G.length=U;break}S=new Promise(J0.bind(S)),G.push(S)}}}if(0<G.length)return y=Promise.race([Promise.all(G),new Promise(function(Y){return setTimeout(Y,500)})]).then(a,a),(T?Promise.allSettled([T.finished,y]):y).then(u,u);if(a(),T)return T.finished.then(u,u);u()},types:l});b.__reactViewTransition=N;var j=[];return N.ready.then(function(){for(var y=b.documentElement.getAnimations({subtree:!0}),T=0;T<y.length;T++){var U=y[T],G=U.effect,lt=G.pseudoElement;if(lt!=null&&lt.startsWith("::view-transition")){j.push(U),U=G.getKeyframes();for(var v=lt=void 0,d=!0,S=0;S<U.length;S++){var O=U[S],Y=O.width;if(lt===void 0)lt=Y;else if(lt!==Y){d=!1;break}if(Y=O.height,v===void 0)v=Y;else if(v!==Y){d=!1;break}delete O.width,delete O.height,O.transform==="none"&&delete O.transform}d&&lt!==void 0&&v!==void 0&&(G.setKeyframes(U),d=getComputedStyle(G.target,G.pseudoElement),d.width!==lt||d.height!==v)&&(d=U[0],d.width=lt,d.height=v,d=U[U.length-1],d.width=lt,d.height=v,G.setKeyframes(U))}}i()},function(y){b.__reactViewTransition===N&&(b.__reactViewTransition=null);try{typeof y=="object"&&y!==null&&y.name==="InvalidStateError"&&(y.message==="View transition was skipped because document visibility state is hidden."||y.message==="Skipping view transition because document visibility state has become hidden."||y.message==="Skipping view transition because viewport size changed."||y.message==="Transition was aborted because of invalid state")&&(y=null),y!==null&&s(y)}finally{n(),a(),i()}}),N.finished.finally(function(){for(var y=0;y<j.length;y++)j[y].cancel();b.__reactViewTransition===N&&(b.__reactViewTransition=null),c()}),N}catch{return n(),a(),i(),null}}function zn(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}zn.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:J({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},zn.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,l=t.getAnimations({subtree:!0}),n=[],a=0;a<l.length;a++){var u=l[a].effect;u!==null&&u.target===t&&u.pseudoElement===e&&n.push(l[a])}return n},zn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Um(t){return{name:t,group:new zn("group",t),imagePair:new zn("image-pair",t),old:new zn("old",t),new:new zn("new",t)}}function Ce(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ce.prototype.addEventListener=function(t,e,l){var n=null,a=null;if(!(l!=null&&typeof l!="boolean"&&(n=l.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Bm(u,t,e,l)===-1){var i=this,c=e;l!=null&&typeof l!="boolean"&&l.once===!0&&(c=function(s){i.removeEventListener(t,e,l),typeof e=="function"?e.call(this,s):e.handleEvent(s)}),n!==null&&(a=i.removeEventListener.bind(i,t,e,l),n.addEventListener("abort",a,{once:!0}),a=n.removeEventListener.bind(n,"abort",a)),n=oa(l),u.push({type:t,listener:e,optionsOrUseCapture:l,attachedListener:c,cleanup:a}),m(this._fragmentFiber.child,!1,k0,t,c,n)}this._eventListeners=u}};function k0(t,e,l,n){return mt(t).addEventListener(e,l,n),!1}Ce.prototype.removeEventListener=function(t,e,l){var n=this._eventListeners;if(n!==null&&(e=Bm(n,t,e,l),e!==-1)){var a=n[e];l=a.attachedListener;var u=a.cleanup;a=oa(a.optionsOrUseCapture),m(this._fragmentFiber.child,!1,F0,t,l,a),n.splice(e,1),u!==null&&u()}};function F0(t,e,l,n){return mt(t).removeEventListener(e,l,n),!1}function oa(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Hm(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Bm(t,e,l,n){if(t.length===0)return-1;n=Hm(n);for(var a=0;a<t.length;a++){var u=t[a];if(u.type===e&&u.listener===l&&Hm(u.optionsOrUseCapture)===n)return a}return-1}Ce.prototype.dispatchEvent=function(t){var e=R(this._fragmentFiber);if(e===null)return!0;e=mt(e);var l=this._eventListeners;if(l!==null&&0<l.length||!t.bubbles){var n=e.nodeType===9?e.createComment(""):document.createTextNode("");if(l)for(var a=0;a<l.length;a++){var u=l[a];n.addEventListener(u.type,u.attachedListener,oa(u.optionsOrUseCapture))}if(e.appendChild(n),t=n.dispatchEvent(t),l)for(a=0;a<l.length;a++)u=l[a],n.removeEventListener(u.type,u.attachedListener,oa(u.optionsOrUseCapture));return e.removeChild(n),t}return e.dispatchEvent(t)},Ce.prototype.focus=function(t){m(this._fragmentFiber.child,!0,wm,t,void 0,void 0)};function wm(t,e){return t.tag===6?!1:(t=mt(t),fg(t,e))}Ce.prototype.focusLast=function(t){var e=[];m(this._fragmentFiber.child,!0,yo,e,void 0,void 0);for(var l=e.length-1;0<=l&&!wm(e[l],t);l--);};function yo(t,e){return e.push(t),!1}Ce.prototype.blur=function(){var t=R(this._fragmentFiber);t!==null&&(t=mt(t),t=nu(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,W0,t,void 0,void 0))};function W0(t,e){return t.tag===6?!1:(t=mt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Ce.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,I0,t,void 0,void 0)};function I0(t,e){return t.tag===6||(t=mt(t),e.observe(t)),!1}Ce.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),m(this._fragmentFiber.child,!1,P0,t,void 0,void 0);for(var l=e=0;l<$e.length;l++){var n=$e[l];n.fragmentInstance===this&&n.observer===t?t.unobserve(n.instance):$e[e++]=n}$e.length=e}};function P0(t,e){return t.tag===6||(t=mt(t),e.unobserve(t)),!1}var $e=[],vo=!1;function tg(t,e,l){$e.push({fragmentInstance:t,observer:e,instance:l}),vo||(vo=!0,og(function(){vo=!1;var n=$e;$e=[];for(var a=0;a<n.length;a++){var u=n[a];u.observer.unobserve(u.instance)}}))}Ce.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,eg,t,void 0,void 0),t};function eg(t,e){if(t.tag===6){t=t.stateNode;var l=t.ownerDocument.createRange();l.selectNodeContents(t),e.push.apply(e,l.getClientRects())}else t=mt(t),e.push.apply(e,t.getClientRects());return!1}Ce.prototype.getRootNode=function(t){var e=R(this._fragmentFiber);return e===null?this:mt(e).getRootNode(t)},Ce.prototype.compareDocumentPosition=function(t){var e=R(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var l=[];m(this._fragmentFiber.child,!1,yo,l,void 0,void 0);var n=mt(e);if(l.length===0){if(l=n,W(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(l=e)}e=this._fragmentFiber;var a=n=l.compareDocumentPosition(t);return l===t?a=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(l=X(e)[1],l===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=mt(l).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=mt(l[0]),a=mt(l[l.length-1]);var u=W(this._fragmentFiber)?e.parentElement:n;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=e.compareDocumentPosition(t),c=a.compareDocumentPosition(t),s=i&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=n&&u&&i&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=n&&e===t||u&&a===t||s||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&e===t||!u&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||lg(e,this._fragmentFiber,l[0],l[l.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function lg(t,e,l,n,a){var u=ln(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(l=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){l=!0;break t}u=u.return}l=!1}return l}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=a.ownerDocument,a===u||a===u.documentElement||a===u.body;t:{for(u=e,e=R(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===l)&&(e=Mt(l,u,Kt),e===null?e=!1:(m(e,!0,Bt,u,l),u=Qt,Qt=null,e=u!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===n)&&(e=Mt(n,u,Kt),e===null?e=!1:(m(e,!0,wt,u,n),u=Qt,Ut=Qt=null,e=u!==null)),e):!1}function qm(t,e){var l=t.ownerDocument.createRange();l.selectNodeContents(t),t=l.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ce.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(o(566));var e=[];m(this._fragmentFiber.child,!1,yo,e,void 0,void 0);var l=t!==!1;if(e.length===0){var n=X(this._fragmentFiber);if(n=l?n[1]||n[0]||R(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){t=mt(n),qm(t,l);return}if(n=mt(n),n.nodeType!==9){if(n.nodeType===11){l="host"in n?n.host:null,l!==null&&l.scrollIntoView(t);return}n.scrollIntoView(t)}}for(n=l?e.length-1:0;n!==(l?-1:e.length);){var a=e[n];a.tag===6?(a=mt(a),qm(a,l)):mt(a).scrollIntoView(t),n+=l?-1:1}};function ng(t,e){return t=mt(t),Ym(t,e),!1}function Ym(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function Gm(t,e){var l=e._eventListeners;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n];t.addEventListener(a.type,a.attachedListener,oa(a.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(u){for(var i=0,c=0;c<$e.length;c++){var s=$e[c];(s.fragmentInstance!==e||s.observer!==u||s.instance!==t)&&($e[i++]=s)}$e.length=i,u.observe(t)}),Ym(t,e))}function ag(t,e){var l=e._eventListeners;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n];t.removeEventListener(a.type,a.attachedListener,oa(a.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(u){typeof u.rootMargin=="string"?tg(e,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function bo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bo(l),Au(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function ug(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Sa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ge(t.nextSibling),t===null)break}return null}function ig(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ge(t.nextSibling),t===null))return null;return t}function Lm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ge(t.nextSibling),t===null))return null;return t}function xo(t){return t.data==="$?"||t.data==="$~"}function So(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cg(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var To=null;function Xm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ge(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function fg(t,e){function l(){n=!0}if(t.ownerDocument.activeElement===t)return!0;var n=!1;try{t.ownerDocument.addEventListener("focus",l,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",l,!0)}return n}function og(t){Mm(function(){Mm(function(e){return t(e)})})}function Vm(t,e,l){switch(e=nu(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Zm(t,e,l){for(var n in l){var a=l[n];l.hasOwnProperty(n)&&a!=null&&xt(t,e,n,null,q0,a)}l.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ie&&(t.onclick=null),Au(t)}function Eo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Au(t)}var Le=new Map,Km=new Set;function au(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var zl=I.d;I.d={f:sg,r:rg,D:dg,C:mg,L:pg,m:hg,X:yg,S:gg,M:vg};function sg(){var t=zl.f(),e=Mi();return t||e}function rg(t){var e=jn(t);e!==null&&e.tag===5&&e.type==="form"?$r(e):zl.r(t)}var sa=typeof document>"u"?null:document;function Jm(t,e,l){var n=sa;if(n&&typeof e=="string"&&e){var a=Re(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),Km.has(a)||(Km.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),ae(e,"link",t),Jt(e),n.head.appendChild(e)))}}function dg(t){zl.D(t),Jm("dns-prefetch",t,null)}function mg(t,e){zl.C(t,e),Jm("preconnect",t,e)}function pg(t,e,l){zl.L(t,e,l);var n=sa;if(n&&t&&e){var a='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Re(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Re(l.imageSizes)+'"]')):a+='[href="'+Re(t)+'"]';var u=a;switch(e){case"style":u=ra(t);break;case"script":u=da(t)}if(!(Le.has(u)||(t=J({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Le.set(u,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(uu(u))||e==="script"&&n.querySelector(iu(u))))){var i=n.createElement("link");ae(i,"link",t),e==="style"&&(i[Nu]=!0,i.onload=i.onerror=function(){is(i)}),Jt(i),n.head.appendChild(i)}}}function hg(t,e){zl.m(t,e);var l=sa;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Re(n)+'"][href="'+Re(t)+'"]',u=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=da(t)}if(!Le.has(u)&&(t=J({rel:"modulepreload",href:t},e),Le.set(u,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(iu(u)))return}n=l.createElement("link"),ae(n,"link",t),Jt(n),l.head.appendChild(n)}}}function gg(t,e,l){zl.S(t,e,l);var n=sa;if(n&&t){var a=Mn(n).hoistableStyles,u=ra(t);e=e||"default";var i=a.get(u);if(!i){var c={loading:0,preload:null};if(i=n.querySelector(uu(u)))c.loading=5;else{t=J({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Le.get(u))&&zo(t,l);var s=i=n.createElement("link");Jt(s),ae(s,"link",t),s._p=new Promise(function(b,N){s.onload=b,s.onerror=N}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Bi(i,e,n)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(u,i)}}}function yg(t,e){zl.X(t,e);var l=sa;if(l&&t){var n=Mn(l).hoistableScripts,a=da(t),u=n.get(a);u||(u=l.querySelector(iu(a)),u||(t=J({src:t,async:!0},e),(e=Le.get(a))&&No(t,e),u=l.createElement("script"),Jt(u),ae(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function vg(t,e){zl.M(t,e);var l=sa;if(l&&t){var n=Mn(l).hoistableScripts,a=da(t),u=n.get(a);u||(u=l.querySelector(iu(a)),u||(t=J({src:t,async:!0,type:"module"},e),(e=Le.get(a))&&No(t,e),u=l.createElement("script"),Jt(u),ae(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(a,u))}}function $m(t,e,l,n){var a=(a=Nl.current)?au(a):null;if(!a)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(l=ra(l.href),e=Mn(a).hoistableStyles,n=e.get(l),n||(n={type:"style",instance:null,count:0,state:null},e.set(l,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ra(l.href);var u=Mn(a).hoistableStyles,i=u.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=a.querySelector(uu(t)))?u._p||(i.instance=u,i.state.loading=5):(u=Le.get(t),u||(u={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Le.set(t,u)),bg(a,t,u,i.state))),e&&n===null)throw Error(o(528,""));return i}if(e&&n!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(l=da(l),e=Mn(a).hoistableScripts,n=e.get(l),n||(n={type:"script",instance:null,count:0,state:null},e.set(l,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function ra(t){return'href="'+Re(t)+'"'}function uu(t){return'link[rel="stylesheet"]['+t+"]"}function km(t){return J({},t,{"data-precedence":t.precedence,precedence:null})}function bg(t,e,l,n){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Nu]!==!0){n.loading=1;return}}else e=t.createElement("link"),e[Nu]=!0,e.onload=e.onerror=is.bind(null,e),ae(e,"link",l),Jt(e),t.head.appendChild(e);n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2})}function da(t){return'[src="'+Re(t)+'"]'}function iu(t){return"script[async]"+t}function Fm(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Re(l.href)+'"]');if(n)return e.instance=n,Jt(n),n;var a=J({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Jt(n),ae(n,"style",a),Bi(n,l.precedence,t),e.instance=n;case"stylesheet":a=ra(l.href);var u=t.querySelector(uu(a));if(u)return e.state.loading|=4,e.instance=u,Jt(u),u;n=km(l),(a=Le.get(a))&&zo(n,a),u=(t.ownerDocument||t).createElement("link"),Jt(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),ae(u,"link",n),e.state.loading|=4,Bi(u,l.precedence,t),e.instance=u;case"script":return u=da(l.src),(a=t.querySelector(iu(u)))?(e.instance=a,Jt(a),a):(n=l,(a=Le.get(u))&&(n=J({},l),No(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),Jt(a),ae(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Bi(n,l.precedence,t));return e.instance}function Bi(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,u=a,i=0;i<n.length;i++){var c=n[i];if(c.dataset.precedence===e)u=c;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function zo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function No(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var wi=null;function Wm(t,e,l){if(wi===null){var n=new Map,a=wi=new Map;a.set(l,n)}else a=wi,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var u=l[a];if(!(u[Sa]||u[Pt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=n.get(i);c?c.push(u):n.set(i,[u])}}return n}function Ao(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function xg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Im(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Pm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tp(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ep(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=tp(e),t.suspenseyImages.push(e)),t=Eg.bind(t),e.decode().then(t,t))}function Sg(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=ra(n.href),u=e.querySelector(uu(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=cu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Jt(u);return}u=e.ownerDocument||e,n=km(n),(a=Le.get(a))&&zo(n,a),u=u.createElement("link"),Jt(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),ae(u,"link",n),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=cu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var qi=0;function Tg(t,e){return t.stylesheets&&t.count===0&&Gi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&Gi(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&qi===0&&(qi=62500*G0());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gi(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>qi?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function lp(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Gi(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function cu(){this.count--,lp(this)}function Eg(){this.imgCount--,lp(this)}var Yi=null;function Gi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yi=new Map,e.forEach(zg,t),Yi=null,cu.call(t))}function zg(t,e){if(!(e.state.loading&4)){var l=Yi.get(t);if(l)var n=l.get(null);else{l=new Map,Yi.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),n=i)}n&&l.set(null,n)}a=e.instance,i=a.getAttribute("data-precedence"),u=l.get(i)||n,u===n&&l.set(null,a),l.set(i,a),this.count++,n=cu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ma={$$typeof:St,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Ng(t,e,l,n,a,u,i,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ac(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.hiddenUpdates=ac(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function np(t,e,l,n,a,u,i,c,s,b,N,j){return t=new Ng(t,e,l,i,s,b,N,j,c),e=1,u===!0&&(e|=24),u=he(3,null,null,e),t.current=u,u.stateNode=t,e=Yc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:l,cache:e},Qc(u),t}function ap(t){return t?(t=Yn,t):Yn}function up(t,e,l,n,a,u){a=ap(a),n.context===null?n.context=a:n.pendingContext=a,n=Bl(e),n.payload={element:l},u=u===void 0?null:u,u!==null&&(n.callback=u),l=wl(t,n,e),l!==null&&(be(l,t,e),qa(l,t,e))}function ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Oo(t,e){ip(t,e),(t=t.alternate)&&ip(t,e)}function cp(t){if(t.tag===13||t.tag===31){var e=cn(t,67108864);e!==null&&be(e,t,67108864),Oo(t,67108864)}}function fp(t){if(t.tag===13||t.tag===31){var e=_e();e=uc(e);var l=cn(t,e);l!==null&&be(l,t,e),Oo(t,e)}}var pa=!0;function Ag(t,e,l,n){var a=q.T;q.T=null;var u=I.p;try{I.p=2,jo(t,e,l,n)}finally{I.p=u,q.T=a}}function Og(t,e,l,n){var a=q.T;q.T=null;var u=I.p;try{I.p=8,jo(t,e,l,n)}finally{I.p=u,q.T=a}}function jo(t,e,l,n){if(pa){var a=Mo(n);if(a===null)fo(t,e,n,Li,l),sp(t,n);else if(Mg(a,t,e,l,n))n.stopPropagation();else if(sp(t,n),e&4&&-1<jg.indexOf(t)){for(;a!==null;){var u=jn(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=en(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-Ee(i);c.entanglements[1]|=s,i&=~s}fl(u),(gt&6)===0&&(Ai=Se()+500,tu(0))}}break;case 31:case 13:c=cn(u,2),c!==null&&be(c,u,2),Mi(),Oo(u,2)}if(u=Mo(n),u===null&&fo(t,e,n,Li,l),u===a)break;a=u}a!==null&&n.stopPropagation()}else fo(t,e,n,null,l)}}function Mo(t){return t=dc(t),_o(t)}var Li=null;function _o(t){if(Li=null,t=ln(t),t!==null){var e=_(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=E(e),t!==null)return t;t=null}else if(l===31){if(t=H(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Li=t,null}function op(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gp()){case $o:return 2;case ko:return 8;case xu:case Lp:return 32;case Fo:return 268435456;default:return 32}default:return 32}}var Co=!1,kl=null,Fl=null,Wl=null,fu=new Map,ou=new Map,Il=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sp(t,e){switch(t){case"focusin":case"focusout":kl=null;break;case"dragenter":case"dragleave":Fl=null;break;case"mouseover":case"mouseout":Wl=null;break;case"pointerover":case"pointerout":fu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(e.pointerId)}}function su(t,e,l,n,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:u,targetContainers:[a]},e!==null&&(e=jn(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Mg(t,e,l,n,a){switch(e){case"focusin":return kl=su(kl,t,e,l,n,a),!0;case"dragenter":return Fl=su(Fl,t,e,l,n,a),!0;case"mouseover":return Wl=su(Wl,t,e,l,n,a),!0;case"pointerover":var u=a.pointerId;return fu.set(u,su(fu.get(u)||null,t,e,l,n,a)),!0;case"gotpointercapture":return u=a.pointerId,ou.set(u,su(ou.get(u)||null,t,e,l,n,a)),!0}return!1}function rp(t){var e=ln(t.target);if(e!==null){var l=_(e);if(l!==null){if(e=l.tag,e===13){if(e=E(l),e!==null){t.blockedOn=e,ns(t.priority,function(){fp(l)});return}}else if(e===31){if(e=H(l),e!==null){t.blockedOn=e,ns(t.priority,function(){fp(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Mo(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);rc=n,l.target.dispatchEvent(n),rc=null}else return e=jn(l),e!==null&&cp(e),t.blockedOn=l,!1;e.shift()}return!0}function dp(t,e,l){Xi(t)&&l.delete(e)}function _g(){Co=!1,kl!==null&&Xi(kl)&&(kl=null),Fl!==null&&Xi(Fl)&&(Fl=null),Wl!==null&&Xi(Wl)&&(Wl=null),fu.forEach(dp),ou.forEach(dp)}function Qi(t,e){t.blockedOn===e&&(t.blockedOn=null,Co||(Co=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,_g)))}var Vi=null;function mp(t){Vi!==t&&(Vi=t,g.unstable_scheduleCallback(g.unstable_NormalPriority,function(){Vi===t&&(Vi=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(_o(n||l)===null)continue;break}var u=jn(l);u!==null&&(t.splice(e,3),e-=3,rf(u,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function ha(t){function e(s){return Qi(s,t)}kl!==null&&Qi(kl,t),Fl!==null&&Qi(Fl,t),Wl!==null&&Qi(Wl,t),fu.forEach(e),ou.forEach(e);for(var l=0;l<Il.length;l++){var n=Il[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Il.length&&(l=Il[0],l.blockedOn===null);)rp(l),l.blockedOn===null&&Il.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],u=l[n+1],i=a[pe]||null;if(typeof u=="function")i||mp(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[pe]||null)c=i.formAction;else if(_o(a)!==null)continue}else c=i.action;typeof c=="function"?l[n+1]=c:(l.splice(n,3),n-=3),mp(l)}}}function pp(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Do(t){this._internalRoot=t}Zi.prototype.render=Do.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,n=_e();up(l,n,t,e,null,null)},Zi.prototype.unmount=Do.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;up(t.current,2,null,t,null,null),Mi(),e[On]=null}};function Zi(t){this._internalRoot=t}Zi.prototype.unstable_scheduleHydration=function(t){if(t){var e=ls();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Il.length&&e!==0&&e<Il[l].priority;l++);Il.splice(l,0,t),l===0&&rp(t)}};var hp=h.version;if(hp!=="19.3.1")throw Error(o(527,hp,"19.3.1"));I.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=M(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Cg={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{va=Ki.inject(Cg),Te=Ki}catch{}}return du.createRoot=function(t,e){if(!z(t))throw Error(o(299));var l=!1,n="",a=ad,u=ud,i=id;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=np(t,1,!1,null,null,l,n,null,a,u,i,pp),t[On]=e.current,co(t),new Do(e)},du.hydrateRoot=function(t,e,l){if(!z(t))throw Error(o(299));var n=!1,a="",u=ad,i=ud,c=id,s=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=np(t,1,!0,e,l??null,n,a,s,u,i,c,pp),e.context=ap(null),l=e.current,n=_e(),n=uc(n),a=Bl(n),a.callback=null,wl(l,a,n),l=n,e.current.lanes=l,xa(e,l),fl(e),t[On]=e.current,co(t),new Zi(e)},du.version="19.3.1",du}var Np;function Lg(){if(Np)return Ho.exports;Np=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(h){console.error(h)}}return g(),Ho.exports=Gg(),Ho.exports}var Xg=Lg();const mu="SAMPLE / DEMO DATA — fictional, seeded, not real GRID data",hu=["Ascent","Bind","Haven","Lotus","Sunset"],_p=g=>g<20?"early":g<60?"mid":"late",Cp=g=>g.map(([h,r])=>({x:h,y:r})),F=(g,h,r)=>({name:g,labelAt:{x:h[0],y:h[1]},polygon:Cp(r)}),ol=(g,h,r)=>F(g,[h,r],[[h-9,r-4],[h+7,r-4],[h+10,r],[h+6,r+5],[h-8,r+5]]),pu=(...g)=>g.map(Cp),tn={Ascent:{name:"Ascent",alternateRoute:"split through Market and Catwalk",sites:[F("B Site",[18,23],[[7,13],[26,13],[31,22],[27,34],[11,34],[7,27]]),F("A Site",[82,23],[[71,12],[90,12],[95,24],[87,35],[73,31]])],callouts:[F("B Main",[21,50],[[13,43],[25,39],[32,49],[27,62],[17,62]]),F("A Main",[85,49],[[77,42],[91,39],[94,55],[84,64],[75,57]]),F("Mid Courtyard",[49,47],[[38,35],[53,31],[64,41],[60,58],[42,63],[34,49]]),F("Market",[34,32],[[28,26],[39,26],[42,34],[34,41],[28,36]]),F("Catwalk",[60,29],[[55,24],[65,22],[68,34],[61,41],[54,34]]),F("A Tree",[68,23],[[65,16],[73,16],[75,29],[68,35],[62,28]]),F("A Heaven",[84,7],[[77,3],[92,3],[92,10],[77,10]])],spawns:[ol("Defender Spawn",47,9),ol("Attacker Spawn",51,90)],lanes:[F("B Lobby",[25,73],[[16,66],[30,64],[38,76],[30,82],[21,80]]),F("A Lobby",[75,75],[[67,68],[82,67],[87,77],[76,84],[66,78]])],corridors:pu([[18,23],[21,50],[25,73],[51,90],[75,75],[85,49],[82,23]],[[25,73],[49,47],[34,32],[18,23]],[[49,47],[60,29],[68,23],[82,23],[84,7],[47,9],[18,23]],[[47,9],[68,23]],[[51,90],[49,47]]),features:[]},Bind:{name:"Bind",alternateRoute:"split via Hookah and B Long, using the teleporter only after a fake",sites:[F("B Site",[24,23],[[9,15],[29,10],[39,20],[35,35],[16,37],[9,29]]),F("A Site",[77,32],[[65,20],[85,18],[94,30],[88,43],[73,46],[62,36]])],callouts:[F("Hookah",[35,47],[[27,39],[39,38],[43,50],[37,57],[27,53]]),F("B Long",[12,57],[[6,43],[15,41],[20,60],[16,74],[6,69]]),F("B Short",[31,69],[[25,61],[35,59],[42,69],[34,79],[24,75]]),F("A Short",[61,56],[[54,46],[64,44],[69,57],[65,67],[55,64]]),F("A Long",[78,77],[[68,69],[80,68],[87,81],[76,86],[68,81]]),F("Showers",[90,57],[[84,47],[95,45],[97,61],[90,68],[83,62]])],spawns:[ol("Defender Spawn",51,7),ol("Attacker Spawn",51,89)],lanes:[F("B Fountain",[17,81],[[8,77],[24,75],[29,83],[20,89],[10,87]])],corridors:pu([[51,7],[24,23],[12,57],[17,81],[51,89],[78,77],[90,57],[77,32],[51,7]],[[51,89],[31,69],[35,47],[24,23]],[[51,89],[61,56],[77,32]]),features:[{kind:"teleporter",x:47,y:42,label:"TP A → B"},{kind:"teleporter",x:9,y:91,label:"TP B → A"}]},Haven:{name:"Haven",alternateRoute:"split C Long with Garage pressure",sites:[F("A Site",[15,30],[[5,20],[20,17],[29,27],[24,40],[9,43],[4,35]]),F("B Site",[49,24],[[39,13],[57,13],[62,25],[56,35],[40,34],[36,25]]),F("C Site",[84,18],[[73,7],[92,9],[96,22],[89,32],[74,29],[70,19]])],callouts:[F("A Long",[10,61],[[4,47],[13,44],[19,63],[14,77],[5,73]]),F("A Short",[29,51],[[23,42],[33,39],[38,53],[31,63],[23,59]]),F("Mid Courtyard",[48,65],[[37,55],[51,51],[60,62],[54,76],[40,77],[34,66]]),F("Mid Window",[46,44],[[38,38],[52,37],[55,47],[43,51],[37,47]]),F("Garage",[67,45],[[59,37],[72,34],[77,47],[70,56],[60,54]]),F("C Long",[88,58],[[82,37],[92,36],[96,66],[89,78],[81,72]])],spawns:[ol("Defender Spawn",53,5),ol("Attacker Spawn",47,91)],lanes:[F("Garden",[25,79],[[18,74],[29,70],[34,82],[24,88],[18,84]])],corridors:pu([[53,5],[15,30],[10,61],[25,79],[47,91],[88,58],[84,18],[53,5]],[[47,91],[48,65],[46,44],[49,24]],[[48,65],[29,51],[15,30]],[[48,65],[67,45],[84,18]]),features:[]},Lotus:{name:"Lotus",alternateRoute:"rotate through B Main after drawing the A door",sites:[F("A Site",[18,18],[[7,8],[23,6],[32,17],[27,30],[13,32],[5,22]]),F("B Site",[49,36],[[41,26],[53,23],[61,34],[55,46],[42,48],[36,38]]),F("C Site",[85,39],[[77,25],[91,25],[98,40],[90,53],[77,51],[71,40]])],callouts:[F("A Main",[16,46],[[7,36],[21,34],[27,44],[22,56],[11,58],[5,49]]),F("A Root",[17,74],[[8,65],[24,62],[31,73],[25,84],[12,86],[6,76]]),F("A Rubble",[33,61],[[27,52],[38,50],[43,60],[38,69],[28,70],[24,62]]),F("B Main",[51,66],[[44,55],[57,53],[63,65],[56,76],[44,74],[40,65]]),F("C Mound",[82,76],[[74,64],[88,62],[96,74],[91,86],[78,88],[70,78]]),F("Waterfall",[69,19],[[60,11],[72,10],[78,20],[72,29],[61,28],[56,20]])],spawns:[ol("Defender Spawn",47,8),ol("Attacker Spawn",51,93)],lanes:[F("C Bend",[69,58],[[64,48],[73,47],[78,59],[71,67],[64,62]])],corridors:pu([[47,8],[18,18],[16,46],[17,74],[51,93],[82,76],[85,39],[69,19],[47,8]],[[17,74],[33,61],[49,36],[69,19]],[[51,93],[51,66],[49,36]],[[51,66],[69,58],[85,39]]),features:[{kind:"door",x:29,y:39,label:"A rotating door"},{kind:"door",x:70,y:70,label:"C rotating door"}]},Sunset:{name:"Sunset",alternateRoute:"split Mid Tiles into B Market",sites:[F("A Site",[20,38],[[7,29],[22,24],[32,32],[31,46],[18,51],[7,43]]),F("B Site",[80,20],[[69,9],[86,8],[95,20],[89,32],[73,33],[65,23]])],callouts:[F("A Main",[22,66],[[13,56],[26,53],[33,64],[27,76],[16,79],[10,69]]),F("A Alley",[8,84],[[3,77],[12,76],[18,86],[12,94],[3,92]]),F("Mid Courtyard",[47,45],[[36,36],[50,31],[61,41],[58,54],[45,60],[33,49]]),F("Mid Tiles",[48,71],[[38,62],[52,60],[59,71],[53,82],[40,82],[34,73]]),F("B Market",[67,43],[[61,34],[72,33],[78,43],[73,54],[62,53],[57,44]]),F("B Boba",[85,62],[[78,53],[91,51],[97,63],[90,74],[77,71],[73,62]])],spawns:[ol("Defender Spawn",46,10),ol("Attacker Spawn",47,93)],lanes:[F("B Lobby",[72,83],[[64,75],[77,74],[84,84],[75,92],[63,88]])],corridors:pu([[46,10],[20,38],[22,66],[8,84],[47,93],[72,83],[85,62],[80,20],[46,10]],[[47,93],[48,71],[47,45],[67,43],[80,20]],[[22,66],[47,45],[46,10]]),features:[]}};function Dp(g,h,r){const o=g.polygon;let z=!1;for(let _=0,E=o.length-1;_<o.length;E=_++){const H=o[_],D=o[E];H.y>r!=D.y>r&&h<(D.x-H.x)*(r-H.y)/(D.y-H.y)+H.x&&(z=!z)}return z}function Rp(g,h,r){const o=tn[g];return o?[...o.sites,...o.callouts,...o.spawns,...o.lanes].find(z=>Dp(z,h,r))?.name??"Unmapped":"Unknown map"}const $i=["Cloud9","Nova Ridge","Ember Vale Esports","Polar Static"],Ap=Object.fromEntries($i.map((g,h)=>[g,["Lumen","Quill","Cipherleaf","Glint","Drift"].map(r=>`${r}${h+1}`)])),Ji=[["Killjoy","Sentinel",[["Nanoswarm","sentinel"],["Alarmbot","sentinel"],["Turret","sentinel"],["Lockdown","sentinel"]]],["Cypher","Sentinel",[["Trapwire","sentinel"],["Cyber Cage","sentinel"],["Spycam","sentinel"]]],["Deadlock","Sentinel",[["GravNet","sentinel"],["Sonic Sensor","sentinel"],["Barrier Mesh","sentinel"]]],["Vyse","Sentinel",[["Razorvine","sentinel"],["Shear","sentinel"],["Arc Rose","sentinel"]]],["Sova","Initiator",[["Recon Bolt","recon"],["Owl Drone","recon"],["Shock Bolt","molly"]]],["Fade","Initiator",[["Haunt","recon"],["Seize","other"],["Prowler","recon"]]],["Omen","Controller",[["Dark Cover","smoke"]]],["Brimstone","Controller",[["Sky Smoke","smoke"]]],["Astra","Controller",[["Nebula","smoke"]]],["Clove","Controller",[["Ruse","smoke"]]]],Qg={Ascent:{sentinel:["A Site","B Site","A Tree","B Site"],recon:["A Lobby","B Lobby","Mid Courtyard"],smoke:["A Heaven","A Tree","Market","B Main"],aggressive:["A Main","B Main","Catwalk","Market"]},Bind:{sentinel:["B Site","A Site","Hookah","A Site"],recon:["A Long","B Fountain","B Short"],smoke:["Hookah","A Short","Showers","B Long"],aggressive:["A Short","B Long","Showers","Hookah"]},Haven:{sentinel:["C Site","A Site","B Site","C Site"],recon:["Garden","Mid Courtyard","C Long"],smoke:["Garage","Mid Window","A Short","C Site"],aggressive:["C Long","A Long","Garage","A Short"]},Lotus:{sentinel:["A Site","C Site","B Site","A Site"],recon:["A Root","B Main","C Mound"],smoke:["Waterfall","A Main","C Bend","B Site"],aggressive:["A Rubble","C Mound","A Main","B Main"]},Sunset:{sentinel:["B Site","A Site","B Market","B Site"],recon:["A Alley","Mid Tiles","B Lobby"],smoke:["B Market","A Main","Mid Courtyard","B Site"],aggressive:["Mid Courtyard","A Main","B Boba","B Market"]}};function Vg(g){return()=>{let h=g+=1831565813;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}}function Zg(g=2026){const h=Vg(g),r={dataLabel:mu,matches:[],rounds:[],abilityEvents:[],sniperEvents:[]},o=()=>Math.sqrt(-2*Math.log(Math.max(h(),1e-6)))*Math.cos(2*Math.PI*h()),z=E=>E[Math.floor(h()*E.length)];function _(E,H,D,M=3.4){const x=tn[E],m=[...x.sites,...x.callouts,...x.lanes].find(W=>W.name===H),R={x:m.labelAt.x+(D-1.5)*.73,y:m.labelAt.y+(D*3%5-2)*.61};for(let W=0;W<50;W++){const X=R.x+o()*M,tt=R.y+o()*M;if(Dp(m,X,tt))return{x:X,y:tt}}return{...m.labelAt}}for(let E=0;E<24;E++){const H=[[0,1],[0,2],[0,3],[1,2],[2,3],[1,3]],[D,M]=H[E%6],x=$i[D],m=$i[M],R=hu[E%5],W=`demo-${E+1}`,X={dataLabel:mu,matchId:W,date:`2026-01-${String(E+1).padStart(2,"0")}`,map:R,teamA:x,teamB:m,winner:x,rounds:[]};for(let tt=1;tt<=22;tt++){const mt=tt<=11?x:m,Qt=tt<=11?m:x,Ut={dataLabel:mu,matchId:W,roundNumber:tt,map:R,attackingTeam:mt,defendingTeam:Qt,winner:h()<.5?x:m,economy:{}};for(const Bt of[D,M]){const wt=$i[Bt],Kt=wt===mt?"attack":"defense",Mt=tt===1||tt===12?"pistol":["eco","force","full","full","bonus"][Math.floor(h()*5)],J=Mt==="pistol"?800:Mt==="eco"?1400:Mt==="force"?2800:Mt==="bonus"?3900:5600+Math.floor(h()*3e3);Ut.economy[wt]={credits:J,buyType:Mt};const $=Qg[R],ot=$.sentinel[Bt];for(let ut=0;ut<5;ut++){const Ot=ut===0?Ji[Bt]:ut===1?Ji[4+Bt%2]:ut===2?Ji[6+Bt]:Ji[4+(ut+E)%6];for(let Wt=0;Wt<2;Wt++){const[Ct,St]=Ot[2][Math.floor(h()*Ot[2].length)],B=ut===0&&h()<(Kt==="defense"?.74:.66),Q=ut===0?B?ot:z([...tn[R].sites,...tn[R].callouts]).name:z(St==="smoke"?$.smoke:Kt==="attack"?$.recon:[...$.aggressive,...$.recon]),{x:L,y:st}=_(R,Q,Bt,ut===0&&B?2.7:4.2),nt=ut===0?Kt==="defense"?Math.floor(h()*18):62+Math.floor(h()*38):Math.floor(h()*100);r.abilityEvents.push({dataLabel:mu,eventId:`${W}-${tt}-${Bt}-${ut}-${Wt}`,matchId:W,roundNumber:tt,map:R,team:wt,player:Ap[wt][ut],agent:Ot[0],agentRole:Ot[1],ability:Ct,abilityType:St,side:Kt,x:L,y:st,roundTimeSec:nt,phase:_p(nt)})}}const qt=J>=5600&&h()<.86?"Operator":Mt==="force"&&h()<.7?"Odin":null;if(qt){const ut=h()<.79,Ot=_(R,ut?$.aggressive[Bt]:tn[R].sites[(Bt+1)%tn[R].sites.length].name,Bt,1.5),Wt=Ot.x,Ct=Ot.y,St=ut&&h()<.85;r.sniperEvents.push({dataLabel:mu,matchId:W,roundNumber:tt,map:R,team:wt,player:Ap[wt][4],weapon:qt,credits:J,side:Kt,holdX:Wt,holdY:Ct,holdZone:Rp(R,Wt,Ct),angleType:ut?"aggressive":"passive",firstShotTimeSec:ut?Math.floor(h()*20):20+Math.floor(h()*65),firstPick:St,gotFirstKill:St&&h()<.48,died:h()<.45})}}r.rounds.push(Ut),X.rounds.push(Ut)}X.winner=X.rounds.filter(tt=>tt.winner===x).length>=12?x:m,r.matches.push(X)}return r}const Yo=Zg(),De=(g,h)=>h?100*g/h:0;function ki(g,h){return g.filter(r=>Object.entries(h).every(([o,z])=>!z||z==="all"||r[o]===z))}function gu(g,h){const r=new Map;return g.forEach(o=>{const z=h(o);r.set(z,(r.get(z)??0)+1)}),{total:g.length,items:[...r].map(([o,z])=>({key:o,count:z,pct:De(z,g.length)})).sort((o,z)=>z.count-o.count||o.key.localeCompare(z.key))}}function Kg(g,h=10,r=10){if(!Number.isInteger(h)||!Number.isInteger(r)||h<1||r<1)return[];const o=Array.from({length:h*r},(_,E)=>({col:E%h,row:Math.floor(E/h),x:E%h*100/h,y:Math.floor(E/h)*100/r,count:0,density:0}));g.forEach(_=>{Number.isFinite(_.x)&&Number.isFinite(_.y)&&o[Math.max(0,Math.min(r-1,Math.floor(_.y*r/100)))*h+Math.max(0,Math.min(h-1,Math.floor(_.x*h/100)))].count++});const z=Math.max(0,...o.map(_=>_.count));return o.map(_=>({..._,density:z?_.count/z:0}))}function Up(g,h=8){if(!Number.isFinite(h)||h<=0)return[];let r=[...g];const o=[];for(;r.length;){let z=[];for(const M of r){const x=r.filter(m=>m.map===M.map&&Math.hypot(m.x-M.x,m.y-M.y)<=h);x.length>z.length&&(z=x)}if(!z.length)break;const _=z.reduce((M,x)=>M+x.x,0)/z.length,E=z.reduce((M,x)=>M+x.y,0)/z.length,H=z[0].map;o.push({x:_,y:E,map:H,count:z.length,share:De(z.length,g.length),zone:Rp(H,_,E)});const D=new Set(z);r=r.filter(M=>!D.has(M))}return o.sort((z,_)=>_.count-z.count)}const Hp=g=>({roundsAnalysed:new Set(g.map(h=>`${h.matchId}:${h.roundNumber}`)).size,matchesAnalysed:new Set(g.map(h=>h.matchId)).size});function Jg(g,h=8){const r=g.filter(o=>o.agentRole==="Sentinel");return[...new Set(r.map(o=>`${o.team}|${o.map}`))].flatMap(o=>{const z=r.filter(E=>`${E.team}|${E.map}`===o),_=Up(z,h)[0];return _?[{team:z[0].team,..._,pct:_.share,sampleSize:z.length,...Hp(z)}]:[]})}function Bp(g,h){const r=[...new Set(g.map(z=>`${z.team}|${z.player}`))].map(z=>{const _=g.filter(X=>`${X.team}|${X.player}`===z),{team:E,player:H}=_[0],D=h.filter(X=>X.attackingTeam===E||X.defendingTeam===E),M=new Set(_.map(X=>`${X.matchId}:${X.roundNumber}`)).size,x=_.filter(X=>X.weapon==="Operator"),m=_.filter(X=>X.weapon==="Odin"),R=[[0,10],[10,20],[20,40],[40,60],[60,1/0]].map(([X,tt])=>{const mt=x.filter(Qt=>Qt.firstShotTimeSec>=X&&Qt.firstShotTimeSec<tt).length;return{key:tt===1/0?"60+":`${X}-${tt}`,count:mt,pct:De(mt,x.length)}}),W=x.filter(X=>X.firstPick).length;return{team:E,player:H,buyRounds:M,roundsPlayed:D.length,buyRate:De(M,D.length),avgCreditsAtBuy:_.reduce((X,tt)=>X+tt.credits,0)/_.length,operatorCount:x.length,odinCount:m.length,aggressivePct:De(x.filter(X=>X.angleType==="aggressive").length,x.length),passivePct:De(x.filter(X=>X.angleType==="passive").length,x.length),topHoldZones:gu(x,X=>X.holdZone).items,timingBuckets:R,earlyShotPct:De(x.filter(X=>X.firstShotTimeSec<20).length,x.length),firstPickAttemptRate:De(W,x.length),firstPickSuccessPct:De(x.filter(X=>X.firstPick&&X.gotFirstKill).length,W),deathWithoutKillRate:De(x.filter(X=>X.died&&!X.gotFirstKill).length,x.length)}}),o=[...new Set([...g.map(z=>z.team),...h.flatMap(z=>[z.attackingTeam,z.defendingTeam])])].map(z=>{const _=h.filter(E=>E.economy[z]);return{team:z,roundsByBuyType:gu(_,E=>E.economy[z].buyType).items,opBuyRateByCreditBand:[[0,3e3],[3e3,5e3],[5e3,7e3],[7e3,1/0]].map(([E,H])=>{const D=_.filter(m=>m.economy[z].credits>=E&&m.economy[z].credits<H),M=new Set(D.map(m=>`${m.matchId}:${m.roundNumber}`)),x=new Set(g.filter(m=>m.team===z&&m.weapon==="Operator"&&M.has(`${m.matchId}:${m.roundNumber}`)).map(m=>`${m.matchId}:${m.roundNumber}`)).size;return{band:H===1/0?`${E}+`:`${E}-${H}`,rounds:D.length,count:x,pct:De(x,D.length)}})}});return{players:r,teams:o}}function $g(g,h,r){const o=ki(g.abilityEvents,{team:h,map:r}),z=Jg(o).map(E=>{const H=o.filter(M=>M.map===E.map&&M.agentRole==="Sentinel"&&Math.hypot(M.x-E.x,M.y-E.y)<=8),D=gu(H,M=>`${M.agent}|${M.ability}`).items[0]?.key.split("|");return{id:`sentinel:${h}:${E.map}`,category:"sentinel",context:{map:E.map,agent:D?.[0],ability:D?.[1],zone:E.zone,x:E.x,y:E.y},text:`${h} most often (${E.pct.toFixed(0)}%) uses their Sentinel utility at Point (${E.x.toFixed(1)}, ${E.y.toFixed(1)}) — ${E.zone} on ${E.map}${D?` (${D[0]} ${D[1]})`:""}`,evidence:{sampleSize:E.sampleSize,roundsAnalysed:E.roundsAnalysed,matchesAnalysed:E.matchesAnalysed,frequency:{n:E.count,total:E.sampleSize}}}}),_=g.sniperEvents.filter(E=>E.team===h&&(!r||r==="all"||E.map===r)&&E.weapon==="Operator");for(const E of Bp(_,g.rounds).players){const H=_.filter(m=>m.player===E.player),D=H.filter(m=>m.firstShotTimeSec<20).length,M=H.filter(m=>m.angleType==="aggressive"),x=gu(M,m=>m.holdZone).items[0]?.key??E.topHoldZones[0]?.key;z.push({id:`operator:${h}:${E.player}:${r??"all"}`,category:"operator",context:{map:r&&r!=="all"?H[0].map:void 0,zone:x,minCredits:Math.min(...H.map(m=>m.credits)),aggressivePct:E.aggressivePct,earlyShotPct:E.earlyShotPct},text:`${E.player} fires the Operator within 20s in ${E.earlyShotPct.toFixed(0)}% of buys; ${E.aggressivePct.toFixed(0)}% aggressive holds, most often ${x??"unknown"}.`,evidence:{sampleSize:H.length,...Hp(H),frequency:{n:D,total:H.length}}})}return z.sort((E,H)=>De(H.evidence.frequency.n,H.evidence.frequency.total)-De(E.evidence.frequency.n,E.evidence.frequency.total))}function kg(g){return g.map(h=>{const r=h.context??{},o=`${r.zone??"the observed choke"}${r.x!==void 0&&r.y!==void 0?` at (${r.x.toFixed(1)}, ${r.y.toFixed(1)})`:""}`,z=r.map?tn[r.map].alternateRoute:"split through a second lane";let _="Clear the setup before entry",E="";if(h.category==="timing")_="Change the utility window",E=r.phase==="late"?"Take space before :40 with a recon-led contact, keep one flash for the late utility window, and delay the plant until revealed damage utility expires. Do not spend all your clearing utility on the opener.":r.phase==="early"?"Bait the first utility window with a Fade Prowler before :15, disengage for 10 seconds, then re-clear with Sova Recon Bolt and hit from a second lane.":"Show a low-cost fake before :20, pause the execute through the mid-round utility window, and re-hit after :60 with a saved flash. Vary the contact timing next round.";else if(h.category==="operator")_="Displace the sniper, then trade",E=`${(r.earlyShotPct??0)>=50?"Before :20, jiggle for the shot from cover and flash the re-peek":"Hold the first contact, use recon to locate the delayed shot and flash the re-peek"} at ${o}; smoke the escape sightline and trade in pairs. ${(r.aggressivePct??0)>=50?"Punish the forward angle with a second-lane swing.":"Avoid chasing the passive fallback; take uncontested space first."} On their full-buy rounds${r.minCredits?` (observed credits ≥ ${r.minCredits})`:""}, budget an Operator counter-buy only with a trade partner; use Odin wall pressure only on a VOD-verified penetrable surface.`;else{_=`Dismantle ${r.agent??"Sentinel"} utility`;const H=r.agent==="Cypher"?"Use KAY/O ZERO/point to suppress Trapwire coverage, then shoot the revealed anchors. Check elevated wires before sending Raze Boom Bot; delay the second entry by 10s":r.agent==="Killjoy"?`Scout ${r.ability??"the setup"} with Fade Prowler; send Sova Shock Bolt into the Turret/Alarmbot corner and shoot revealed Nanoswarms before planting`:r.agent==="Deadlock"?"Walk the Sonic Sensor contact, shoot exposed sensors from cover and break Barrier Mesh with grouped fire; save a dash until GravNet is cleared":r.agent==="Vyse"?"Bait Arc Rose with a shoulder contact, turn the flash and wait out Razorvine; send one player to draw Shear before the second entry":"Check the setup with Fade Prowler, shoot exposed devices and use KAY/O suppression before committing";E=`At ${o}, ${H.charAt(0).toLowerCase()+H.slice(1)}. Start the clear before :20 on an opening hit, then ${z}. For a late retake, clear again before crossing the plant line.`}return{insightId:h.id,title:_,counter:E,supportingNumbers:h.evidence}})}const xe=g=>!!g&&g!=="all";function Qo(g,h){const r=ki(g.abilityEvents,h),o=new Set(r.map(M=>`${M.matchId}:${M.roundNumber}`)),z=["agent","ability","abilityType","phase"].some(M=>xe(h[M])),_=new Set([...r,...g.sniperEvents.filter(M=>M.player===h.player&&(!xe(h.team)||M.team===h.team))].map(M=>`${M.matchId}:${M.roundNumber}`)),E=g.rounds.filter(M=>(!xe(h.team)||[M.attackingTeam,M.defendingTeam].includes(h.team))&&(!xe(h.map)||M.map===h.map)&&(!xe(h.matchId)||M.matchId===h.matchId)&&(!xe(h.player)||_.has(`${M.matchId}:${M.roundNumber}`))&&(!xe(h.side)||!xe(h.team)||(h.side==="attack"?M.attackingTeam===h.team:M.defendingTeam===h.team))&&(!z||o.has(`${M.matchId}:${M.roundNumber}`))),H=g.sniperEvents.filter(M=>(!xe(h.team)||M.team===h.team)&&(!xe(h.map)||M.map===h.map)&&(!xe(h.matchId)||M.matchId===h.matchId)&&(!xe(h.player)||M.player===h.player)&&(!xe(h.side)||M.side===h.side)&&(!z||o.has(`${M.matchId}:${M.roundNumber}`))),D=new Set([...E,...r,...H].map(M=>M.matchId));return{dataLabel:g.dataLabel,abilityEvents:r,sniperEvents:H,rounds:E,matches:g.matches.filter(M=>D.has(M.matchId)).map(M=>({...M,rounds:E.filter(x=>x.matchId===M.matchId)}))}}function Vo(g,h,r,o){if(h==="all"){const x=[...new Set([...g.abilityEvents.map(m=>m.team),...g.sniperEvents.map(m=>m.team)])].map(m=>({team:m,result:Vo(Qo(g,{team:m,side:o}),m,r,o)}));return{insights:x.flatMap(m=>m.result.insights),antiStrats:x.flatMap(m=>m.result.antiStrats),stats:{players:x.flatMap(m=>m.result.stats.players.filter(R=>R.team===m.team)),teams:x.flatMap(m=>m.result.stats.teams.filter(R=>R.team===m.team))}}}const z=$g(g,h,r),_=ki(g.abilityEvents,{team:h,map:r}),E=gu(_,M=>M.phase).items[0];if(E){const M={early:"early (0–20s)",mid:"mid (20–60s)",late:"late (60s+)"}[E.key];z.push({id:`timing:${h}:${r??"all"}`,category:"timing",context:{phase:E.key},text:`${h} most often (${E.pct.toFixed(0)}%) casts utility in the ${M} phase${r&&r!=="all"?` on ${r}`:""}.`,evidence:{sampleSize:_.length,roundsAnalysed:new Set(_.map(x=>`${x.matchId}:${x.roundNumber}`)).size,matchesAnalysed:new Set(_.map(x=>x.matchId)).size,frequency:{n:E.count,total:_.length}}})}const H=kg(z),D=Bp(g.sniperEvents,g.rounds.filter(M=>!xe(o)||(o==="attack"?M.attackingTeam===h:M.defendingTeam===h)));return{insights:z,antiStrats:H,stats:D}}function Fg(g){const h=[],r=[];let o="",z=!1;for(let _=0;_<g.length;_++){const E=g[_];if(E==='"')if(z&&g[_+1]==='"')o+='"',_++;else{if(!z&&o.length)throw Error("Unexpected quote");z=!z}else E===","&&!z?(r.push(o),o=""):(E===`
`||E==="\r")&&!z?(E==="\r"&&g[_+1]===`
`&&_++,r.push(o),r.some(Boolean)&&h.push([...r]),r.length=0,o=""):o+=E}if(z)throw Error("Unterminated CSV quote");return r.push(o),r.some(Boolean)&&h.push(r),h}function Wg(g,h,r="IMPORTED DATA — source unverified"){const o={dataLabel:r,matches:[],rounds:[],abilityEvents:[],sniperEvents:[]},z=[];let _;try{if(h==="csv"){const[E,...H]=Fg(g.replace(/^\uFEFF/,""));if(!E?.includes("eventType"))throw Error("Missing column: eventType");if(new Set(E).size!==E.length)throw Error("Duplicate columns");_=H.map(D=>{if(D.length!==E.length)throw Error("CSV column count mismatch");return Object.fromEntries(E.map((M,x)=>[M,D[x]]))})}else{const E=JSON.parse(g);if(Array.isArray(E))_=E;else if(E&&["matches","rounds","abilityEvents","sniperEvents"].every(H=>Array.isArray(E[H])))_=[...E.matches.map(H=>({...H,eventType:"match"})),...E.rounds.map(H=>({...H,eventType:"round"})),...E.abilityEvents.map(H=>({...H,eventType:"ability"})),...E.sniperEvents.map(H=>({...H,eventType:"sniper"}))];else throw Error("Expected records array or ScoutData object")}}catch(E){return{data:o,errors:[E.message]}}return _.forEach((E,H)=>{try{if(!E||typeof E!="object"||Array.isArray(E))throw Error("Expected object");const D={...E},M=R=>R.forEach(W=>{if(D[W]===void 0||D[W]===null||D[W]==="")throw Error(`Missing column/value: ${W}`)}),x=(R,W=0,X=1/0)=>{M([R]);const tt=Number(D[R]);if(!Number.isFinite(tt)||tt<W||tt>X)throw Error(`Invalid ${R}`);D[R]=tt},m=(R,W)=>{if(!W.includes(String(D[R])))throw Error(`Invalid ${R}`)};if(M(["eventType","matchId","roundNumber","map"].filter(R=>D.eventType!=="match"||R!=="roundNumber")),m("map",hu),D.eventType!=="match"&&(x("roundNumber",1),!Number.isInteger(D.roundNumber)))throw Error("Invalid roundNumber");if(D.dataLabel=r,D.eventType==="ability"||D.eventType==="sniper")if(M(["team","player","side"]),m("side",["attack","defense"]),D.eventType==="ability")M(["eventId","agent","ability","abilityType","agentRole"]),m("abilityType",["smoke","recon","sentinel","flash","molly","other"]),m("agentRole",["Sentinel","Initiator","Controller","Duelist"]),x("x",0,100),x("y",0,100),x("roundTimeSec"),D.phase=_p(D.roundTimeSec),o.abilityEvents.push(D);else{M(["weapon","holdZone","angleType"]),m("angleType",["aggressive","passive"]),x("credits"),x("holdX",0,100),x("holdY",0,100),x("firstShotTimeSec");for(const R of["gotFirstKill","died","firstPick"]){if(![!0,!1,"true","false"].includes(D[R]))throw Error(`Invalid ${R}`);D[R]=D[R]===!0||D[R]==="true"}o.sniperEvents.push(D)}else if(D.eventType==="round"){M(["attackingTeam","defendingTeam","winner","economy"]),typeof D.economy=="string"&&(D.economy=JSON.parse(D.economy));for(const R of[D.attackingTeam,D.defendingTeam]){const W=D.economy?.[String(R)];if(!W||!Number.isFinite(W.credits)||W.credits<0||!["eco","force","full","bonus","pistol"].includes(W.buyType))throw Error("Invalid economy")}if(![D.attackingTeam,D.defendingTeam].includes(D.winner))throw Error("Invalid winner");o.rounds.push(D)}else if(D.eventType==="match"){if(M(["date","teamA","teamB","winner"]),!Number.isFinite(Date.parse(String(D.date))))throw Error("Invalid date");if(![D.teamA,D.teamB].includes(D.winner))throw Error("Invalid winner");o.matches.push({...D,rounds:[]})}else throw Error("Invalid eventType")}catch(D){z.push(`Row ${H+1}: ${D.message}`)}}),o.matches.forEach(E=>{E.rounds=o.rounds.filter(H=>H.matchId===E.matchId)}),{data:o,errors:z}}const me=g=>`${g.toFixed(0)}%`;function Ig(g){const h=Number.isFinite(g)?Math.max(0,Math.min(1,g)):0,r=[[0,174,239],[255,218,68],[248,75,65]],o=h<.5?r[0]:r[1],z=h<.5?r[1]:r[2],_=h<.5?h*2:(h-.5)*2;return`rgb(${o.map((E,H)=>Math.round(E+(z[H]-E)*_)).join(", ")})`}function Pg({evidence:g}){return f.jsxs("div",{className:"evidence",children:[f.jsxs("span",{children:[g.sampleSize.toLocaleString()," events"]}),f.jsxs("span",{children:[g.roundsAnalysed," rounds"]}),f.jsxs("span",{children:[g.matchesAnalysed," matches"]}),f.jsxs("span",{children:["Frequency ",g.frequency.n,"/",g.frequency.total]})]})}function Go({map:g,events:h=[],holds:r=[],counts:o=!1,points:z=!1,mini:_=!1}){const E=tn[g],H=o?12:24,D=Kg(h,H,H),M=x=>x.map(m=>`${m.x},${m.y}`).join(" ");return f.jsxs("svg",{className:`schematic ${_?"mini-map":""}`,viewBox:"-3 -5 106 110",role:"img","aria-label":`${g} original schematic ${r.length?"Operator holds":"utility heatmap"}`,children:[f.jsxs("title",{children:[g," · Original simplified schematic, not a game-accurate layout"]}),f.jsx("defs",{children:f.jsx("pattern",{id:`grid-${_?"mini":"full"}`,width:"10",height:"10",patternUnits:"userSpaceOnUse",children:f.jsx("path",{d:"M 10 0 L 0 0 0 10",fill:"none",stroke:"#294458",strokeWidth:".15"})})}),f.jsx("rect",{width:"100",height:"100",rx:"3",fill:"#0c2133"}),f.jsx("rect",{width:"100",height:"100",fill:`url(#grid-${_?"mini":"full"})`}),E.corridors.map((x,m)=>f.jsx("polyline",{points:M(x),className:"map-corridor"},`corridor-${m}`)),[...E.lanes,...E.spawns,...E.callouts,...E.sites].map(x=>f.jsx("polygon",{points:M(x.polygon),className:E.sites.includes(x)?"site-shape":"zone-shape"},x.name)),D.map(x=>f.jsx("g",{"data-testid":"heatmap-cell","data-count":x.count,children:f.jsx("rect",{x:x.x,y:x.y,width:100/H,height:100/H,fill:o?"#00aeef":Ig(x.density),opacity:x.count?.32+x.density*.6:0,children:f.jsxs("title",{children:[x.count," casts · density ",x.density.toFixed(2)]})})},`${x.col}-${x.row}`)),[...E.sites,...E.callouts,...E.spawns].map(x=>f.jsx("text",{x:x.labelAt.x,y:x.labelAt.y+.6,className:`map-label ${o?"subtle-label":""}`,children:x.name},x.name)),E.features.map(x=>f.jsxs("g",{className:`map-feature ${x.kind}`,"data-testid":`map-${x.kind}`,children:[x.kind==="teleporter"?f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:x.x,cy:x.y,r:"2.1"}),f.jsx("path",{d:`M${x.x-1},${x.y} h2 m-1,-1 l1,1 -1,1`})]}):f.jsxs(f.Fragment,{children:[f.jsx("path",{d:`M${x.x-2},${x.y} a2,2 0 1 1 4,0 a2,2 0 1 1 -4,0`,strokeDasharray:"1 .7"}),f.jsx("path",{d:`M${x.x-1.5},${x.y+1.5} l3,-3`})]}),f.jsx("text",{x:x.x,y:x.y+4.7,children:x.label})]},x.label)),z&&h.map(x=>f.jsx("circle",{cx:x.x,cy:x.y,r:".55",fill:"white",stroke:"#081827",strokeWidth:".15",opacity:".6",children:f.jsxs("title",{children:[x.player," · ",x.ability," · ",x.roundTimeSec,"s"]})},x.eventId)),r.map((x,m)=>f.jsx("circle",{cx:x.holdX+(m%5-2)*.4,cy:x.holdY+(m%7-3)*.4,r:"1.2",fill:x.angleType==="aggressive"?"#ffbf69":"#61d9ff",stroke:"#071727",strokeWidth:".3",opacity:".8",children:f.jsxs("title",{children:[x.player," · ",x.holdZone," · ",x.angleType]})},`${x.matchId}-${x.roundNumber}-${m}`)),o&&D.filter(x=>x.count>0).map(x=>f.jsx("text",{x:x.x+4.16,y:x.y+5,className:"cell-count",children:x.count},`count-${x.col}-${x.row}`)),f.jsxs("text",{x:"1",y:"105",className:"map-caption",children:[g.toUpperCase()," / ORIGINAL SCHEMATIC / NOT TO SCALE"]})]})}function ty({buckets:g}){const h=Math.max(1,...g.map(r=>r.count));return f.jsx("svg",{className:"timing-chart",viewBox:"0 0 330 114",role:"img","aria-label":"Operator first shot timing, first twenty seconds highlighted",children:g.map((r,o)=>f.jsxs("g",{children:[f.jsx("rect",{x:o*65+10,y:76-r.count/h*54,width:"42",height:r.count/h*54,rx:"3",fill:o<2?"#00aeef":"#647b91"}),f.jsxs("text",{x:o*65+31,y:68-r.count/h*54,textAnchor:"middle",children:[r.count," · ",r.pct.toFixed(0),"%"]}),f.jsxs("text",{x:o*65+31,y:"96",textAnchor:"middle",children:[r.key,"s"]})]},r.key))})}function Op({players:g,compact:h=!1}){return f.jsx("div",{className:`profile-grid ${h?"compact-profiles":""}`,children:g.length?g.map(r=>f.jsxs("article",{className:"panel operator-card","data-testid":"operator-card",children:[f.jsxs("div",{className:"card-top",children:[f.jsxs("div",{children:[f.jsxs("p",{className:"eyebrow",children:[r.team," / PRIMARY SNIPER"]}),f.jsx("h3",{children:r.player})]}),f.jsx("span",{className:"tag",children:"OPERATOR"})]}),f.jsxs("div",{className:"profile-numbers",children:[f.jsxs("div",{children:[f.jsx("strong",{children:r.buyRounds}),f.jsx("span",{children:"buy rounds"})]}),f.jsxs("div",{children:[f.jsx("strong",{children:me(r.buyRate)}),f.jsx("span",{children:"round buy rate"})]}),f.jsxs("div",{children:[f.jsx("strong",{children:r.avgCreditsAtBuy.toLocaleString(void 0,{maximumFractionDigits:0})}),f.jsx("span",{children:"avg credits at buy"})]})]}),f.jsxs("p",{className:"small",children:["Operator ",f.jsx("b",{children:r.operatorCount})," ",f.jsx("span",{className:"divider",children:"/"})," Odin ",f.jsx("b",{children:r.odinCount})," ·"," ",r.roundsPlayed," team rounds in scope"]}),f.jsxs("div",{className:"split-bar","aria-label":`${me(r.aggressivePct)} aggressive, ${me(r.passivePct)} passive`,children:[f.jsx("span",{style:{width:`${r.aggressivePct}%`}}),f.jsx("span",{style:{width:`${r.passivePct}%`}})]}),f.jsxs("div",{className:"bar-key",children:[f.jsxs("span",{children:[f.jsx("i",{className:"dot amber"})," Aggressive"," ",me(r.aggressivePct)]}),f.jsxs("span",{children:[f.jsx("i",{className:"dot blue"})," Passive ",me(r.passivePct)]})]}),!h&&f.jsxs(f.Fragment,{children:[f.jsxs("h4",{children:["First shot timing ",f.jsx("span",{children:"Operator only"})]}),f.jsx(ty,{buckets:r.timingBuckets}),f.jsxs("p",{className:"accent-note",children:[me(r.earlyShotPct)," of first shots within 0–20s"]}),f.jsx("h4",{children:"Preferred holds"}),f.jsx("div",{className:"hold-zones",children:r.topHoldZones.slice(0,3).map(o=>f.jsxs("span",{children:[o.key," ",f.jsx("b",{children:me(o.pct)})]},o.key))})]}),h&&f.jsxs("p",{className:"small compact-hold",children:[me(r.earlyShotPct)," first shots in 0–20s · Top hold:"," ",r.topHoldZones[0]?.key??"No Operator holds"," (",me(r.topHoldZones[0]?.pct??0),")"]}),f.jsxs("dl",{className:"metric-list",children:[f.jsxs("div",{children:[f.jsx("dt",{children:"First-pick attempt rate"}),f.jsx("dd",{children:me(r.firstPickAttemptRate)})]}),f.jsxs("div",{children:[f.jsx("dt",{children:"First-pick success / attempts"}),f.jsx("dd",{children:me(r.firstPickSuccessPct)})]}),f.jsxs("div",{children:[f.jsx("dt",{children:"Death w/o first kill"}),f.jsx("dd",{children:me(r.deathWithoutKillRate)})]})]})]},`${r.team}-${r.player}`)):f.jsx("div",{className:"empty panel",children:"No sniper buys match these filters. Try resetting the player or utility filters."})})}function ey({teams:g}){return f.jsx("div",{className:"economy-grid",children:g.map(h=>f.jsxs("section",{className:"panel",children:[f.jsx("p",{className:"eyebrow",children:"TEAM ECONOMY"}),f.jsx("h3",{children:h.team}),f.jsxs("div",{className:"table-scroll",children:[f.jsxs("table",{children:[f.jsx("caption",{children:"Rounds by buy type"}),f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Buy type"}),f.jsx("th",{children:"Rounds"}),f.jsx("th",{children:"Share"})]})}),f.jsx("tbody",{children:h.roundsByBuyType.map(r=>f.jsxs("tr",{children:[f.jsx("td",{children:r.key}),f.jsx("td",{children:r.count}),f.jsx("td",{children:me(r.pct)})]},r.key))})]}),f.jsxs("table",{children:[f.jsx("caption",{children:"Operator buy rate by team credit band"}),f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Credits"}),f.jsx("th",{children:"Op / rounds"}),f.jsx("th",{children:"Buy rate"})]})}),f.jsx("tbody",{children:h.opBuyRateByCreditBand.map(r=>f.jsxs("tr",{children:[f.jsx("td",{children:r.band}),f.jsxs("td",{children:[r.count," / ",r.rounds]}),f.jsx("td",{children:me(r.pct)})]},r.band))})]})]})]},h.team))})}function Lo({insights:g,counters:h,numbered:r=!1}){return f.jsx("div",{className:"insights-grid",children:g.length?g.map((o,z)=>f.jsxs("article",{className:"panel insight-card","data-testid":"insight-card",children:[f.jsxs("div",{className:"card-top",children:[f.jsx("span",{className:`category ${o.category}`,children:o.category==="timing"?"UTILITY TIMING":o.category.toUpperCase()}),r&&f.jsx("span",{className:"insight-number",children:String(z+1).padStart(2,"0")})]}),f.jsx("h3",{children:o.text}),f.jsx(Pg,{evidence:o.evidence}),f.jsxs("div",{className:"counter",children:[f.jsx("p",{className:"eyebrow",children:"↳ COACH’S COUNTER"}),f.jsx("p",{children:h.find(_=>_.insightId===o.id)?.counter})]})]},o.id)):f.jsxs("div",{className:"empty panel",children:[f.jsx("h3",{children:"No observations in this slice"}),f.jsx("p",{children:"Broaden the filters or load a complete export. We won’t invent a tendency without evidence."})]})})}const ly=`@import "./report.css";
:root {
  font-family:
    Inter,
    ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  color: #132c43;
  background: #edf2f7;
  font-synthesis: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.55;
  --blue: #00aeef;
  --navy: #071a2d;
  --muted: #5e7184;
  --line: #dce5ed;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
button,
select,
input {
  font: inherit;
}
button,
a,
select,
input {
  outline-offset: 4px;
}
button:focus-visible,
a:focus-visible,
select:focus-visible,
input:focus-visible {
  outline: 3px solid #0086bd;
}
button {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
}
a {
  color: inherit;
}
h1,
h2,
h3,
h4,
p {
  margin-top: 0;
}
h1 {
  font-size: 34px;
  letter-spacing: -1.2px;
  line-height: 1.15;
  margin-bottom: 10px;
}
h2 {
  font-size: 21px;
  letter-spacing: -0.5px;
  line-height: 1.3;
  margin-bottom: 12px;
}
h3 {
  font-size: 17px;
  letter-spacing: -0.2px;
  line-height: 1.5;
  margin-bottom: 12px;
}
h4 {
  margin: 22px 0 5px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
}
h4 span {
  float: right;
  text-transform: none;
  color: var(--muted);
  font-weight: 400;
  letter-spacing: 0;
}
p {
  margin-bottom: 12px;
}
b,
strong {
  font-weight: 700;
}
.app-shell {
  max-width: 1800px;
  margin: auto;
}
.app-header {
  background: var(--navy);
  padding: 22px 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e7f5ff;
}
.brand {
  display: flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
}
.brand svg {
  width: 50px;
  height: 40px;
  color: var(--blue);
}
.brand > span {
  font-size: 24px;
  letter-spacing: -0.8px;
  font-weight: 800;
}
.brand b {
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-left: 6px;
}
.brand small {
  display: block;
  color: #83a0b7;
  font-size: 9px;
  letter-spacing: 3px;
  font-weight: 500;
  margin-top: 3px;
}
.header-meta {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.3px;
}
.live-dot {
  width: 6px;
  height: 6px;
  background: #65d9ba;
  border-radius: 50%;
}
.button {
  border: 1px solid #c7d5e1;
  border-radius: 6px;
  background: white;
  color: #15364e;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 650;
  transition: background 0.15s;
}
.button:hover {
  background: #e8f6ff;
  border-color: #80cbe8;
}
.button.primary {
  background: #0087b9;
  color: white;
  border-color: #0087b9;
}
.button.primary:hover {
  background: #006b94;
}
.button.quiet {
  background: #132e44;
  color: white;
  border-color: #2c465c;
  margin-left: 20px;
  min-width: 95px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.sample-banner {
  background: #10354f;
  border-bottom: 1px solid #22506c;
  color: #c3e7f9;
  padding: 11px 4%;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 11px;
  position: sticky;
  top: 0;
  z-index: 15;
}
.sample-banner strong {
  color: #ebf9ff;
  font-size: 11px;
}
.sample-pill {
  border: 1px solid #467a96;
  border-radius: 3px;
  color: #a9e5ff;
  letter-spacing: 1.5px;
  font-size: 8px;
  padding: 3px 7px;
  font-weight: 750;
  white-space: nowrap;
}
.banner-detail {
  margin-left: auto;
  font-size: 10px;
}
.view-nav {
  padding: 0 4%;
  display: flex;
  align-items: stretch;
  background: white;
  border-bottom: 1px solid var(--line);
  overflow-x: auto;
  gap: 25px;
}
.view-nav button {
  padding: 22px 0 18px;
  border: none;
  border-bottom: 3px solid transparent;
  background: transparent;
  color: #596d7e;
  white-space: nowrap;
  font-weight: 600;
  font-size: 12px;
}
.view-nav button span {
  font-size: 9px;
  letter-spacing: 1px;
  margin-right: 7px;
  color: #91a4b4;
}
.view-nav button.active {
  border-color: #00aeef;
  color: #006e9c;
}
.view-nav button.active span {
  color: #0087bb;
}
.view-nav button:hover {
  color: #0087bb;
}
.filter-panel {
  margin: 23px 4% 0;
  padding: 16px 20px 10px;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px #12324f03;
}
.filter-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
}
.eyebrow {
  font-size: 9px;
  letter-spacing: 1.8px;
  line-height: 1.6;
  font-weight: 750;
  color: #658197;
  margin-bottom: 8px;
}
.text-button {
  border: none;
  background: transparent;
  color: #007da9;
  font-size: 11px;
  font-weight: 600;
  padding: 0;
}
.filters {
  display: grid;
  grid-template-columns: 1.35fr repeat(3, 1fr) 1.25fr 1fr 0.8fr 1.15fr 1fr;
  gap: 10px;
}
.filter-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.filter-field > span {
  font-size: 10px;
  font-weight: 600;
  color: #61758a;
}
select {
  width: 100%;
  min-width: 0;
  color: #16344d;
  background: #f8fafc;
  border: 1px solid #d5e0e9;
  border-radius: 4px;
  padding: 8px 21px 8px 8px;
  font-size: 11px;
  text-overflow: ellipsis;
}
select:hover {
  border-color: #6cbadb;
}
.scope-note {
  font-size: 9px;
  color: #657b8d;
  margin: 10px 0 0;
}
main {
  padding: 28px 4% 42px;
  min-height: 55vh;
}
.page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  gap: 20px;
}
.page-heading p:not(.eyebrow) {
  font-size: 13px;
  color: #60768b;
  margin: 0;
}
.page-heading .eyebrow {
  color: #0084b6;
  margin-bottom: 7px;
}
.context-tag {
  font-size: 11px;
  color: #426078;
  border: 1px solid #cedde8;
  background: #f5f9fc;
  border-radius: 30px;
  padding: 8px 14px;
  white-space: nowrap;
}
.dot {
  width: 7px;
  height: 7px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
}
.dot.blue {
  background: #00aeef;
}
.dot.amber {
  background: #eda74a;
}
.panel {
  background: white;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 3px 8px #12324f03;
  min-width: 0;
}
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}
.kpi {
  padding: 20px 24px;
  position: relative;
  overflow: hidden;
}
.kpi:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #00aeef;
}
.kpi > span {
  display: block;
  font-size: 9px;
  letter-spacing: 1.5px;
  color: #627c91;
  font-weight: 700;
}
.kpi strong {
  display: block;
  font-size: 36px;
  letter-spacing: -1px;
  line-height: 1.3;
  margin: 8px 0;
}
.kpi small {
  font-size: 10px;
  color: #8799a8;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0 16px;
  gap: 15px;
}
.section-heading h2 {
  margin: 0;
}
.section-heading > span {
  font-size: 10px;
  color: #6c8091;
}
.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.insight-card {
  padding: 23px;
  display: flex;
  flex-direction: column;
}
.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
}
.card-top h2,
.card-top h3,
.card-top p {
  margin-bottom: 0;
}
.card-top h3 {
  font-size: 23px;
}
.category {
  font-size: 8px;
  letter-spacing: 1.4px;
  font-weight: 800;
  padding: 5px 8px;
  border-radius: 3px;
  background: #e6f6ed;
  color: #397a58;
}
.category.operator {
  background: #e7effc;
  color: #466caf;
}
.category.timing {
  background: #fff3df;
  color: #9b6c20;
}
.insight-number {
  font-size: 23px;
  font-weight: 300;
  color: #c1ced8;
  font-variant-numeric: tabular-nums;
}
.insight-card > h3 {
  font-size: 16px;
  font-weight: 650;
  line-height: 1.65;
  margin: 0 0 17px;
}
.evidence {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.evidence span {
  font-size: 9px;
  background: #f2f6f9;
  border: 1px solid #e1e9f0;
  border-radius: 3px;
  padding: 3px 6px;
  color: #526a80;
  white-space: nowrap;
}
.counter {
  border-top: 1px solid #e5edf3;
  padding-top: 16px;
  margin-top: auto;
}
.counter .eyebrow {
  color: #0087b8;
  letter-spacing: 1px;
  margin-bottom: 7px;
}
.counter > p:last-child {
  font-size: 11px;
  color: #65798b;
  line-height: 1.8;
  margin-bottom: 0;
}
.method-note {
  font-size: 10px;
  line-height: 1.8;
  color: #74899a;
  border-top: 1px solid #dce5ec;
  margin-top: 24px;
  padding-top: 16px;
}
.tag {
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
  border: 1px solid #d8e7f1;
  border-radius: 4px;
  padding: 5px 8px;
  color: #538199;
  white-space: nowrap;
}
.small {
  font-size: 11px;
  color: #6c8092;
  line-height: 1.7;
}
.divider {
  color: #c1ced8;
  margin: 0 10px;
}
.callout {
  padding: 16px 20px;
  background: #e0f2fc;
  border: 1px solid #c2e4f6;
  border-left: 3px solid #00aeef;
  border-radius: 5px;
  color: #38647e;
  font-size: 12px;
  margin-bottom: 22px;
}
.callout b {
  font-size: 10px;
  letter-spacing: 1px;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.quick-filters {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
}
.quick-filters > span {
  font-size: 9px;
  color: #73879a;
  letter-spacing: 1px;
  margin-right: 6px;
}
.chip {
  border-radius: 20px;
  border: 1px solid #cddce7;
  background: white;
  color: #566f84;
  font-size: 10px;
  padding: 7px 12px;
  font-weight: 600;
}
.chip:hover,
.chip.selected {
  background: #0e344e;
  color: #c8efff;
  border-color: #0e344e;
}
.map-controls {
  display: flex;
  align-items: center;
  border: 1px solid #d2dfe9;
  background: white;
  border-radius: 5px;
  padding: 3px;
  gap: 3px;
}
.map-controls button {
  border: 0;
  background: transparent;
  color: #62788c;
  font-size: 10px;
  padding: 7px 10px;
  border-radius: 3px;
}
.map-controls button.selected {
  background: #e1f5ff;
  color: #007da9;
}
.map-controls label {
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 9px;
}
.map-controls input {
  accent-color: #008bbf;
}
.map-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: 22px;
  align-items: start;
}
.map-panel {
  padding: 22px;
  background: #fff;
}
.map-panel .card-top {
  margin-bottom: 10px;
}
.schematic {
  width: 100%;
  max-height: 560px;
  display: block;
  margin: 0 auto;
}
.zone-shape {
  fill: #17334a;
  stroke: #3e5b70;
  stroke-width: 0.5;
}
.map-corridor {
  fill: none;
  stroke: #25475e;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.map-feature {
  fill: #102b40;
  stroke: #9cafff;
  stroke-width: 0.5;
}
.map-feature.door {
  stroke: #f4bb68;
}
.map-feature text {
  font-size: 1.65px;
  fill: #d9e6ff;
  stroke: #0c2133;
  stroke-width: 0.35;
  text-anchor: middle;
  paint-order: stroke;
}
.site-shape {
  fill: #1b4659;
  stroke: #62a2b7;
  stroke-width: 0.65;
}
.map-label {
  text-anchor: middle;
  font-size: 2.05px;
  fill: #d4e8f3;
  font-weight: 600;
  paint-order: stroke;
  stroke: #102638;
  stroke-width: 0.5;
  pointer-events: none;
}
.map-label.subtle-label {
  font-size: 1.7px;
  opacity: 0.7;
  transform: translateY(5px);
}
.cell-count {
  font-size: 2.8px;
  font-weight: 750;
  fill: #fff;
  text-anchor: middle;
  paint-order: stroke;
  stroke: #071a2d;
  stroke-width: 0.5;
}
.map-caption {
  font-size: 1.6px;
  fill: #6e879b;
  letter-spacing: 0.25px;
}
.legend {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 8px;
  letter-spacing: 0.6px;
  color: #6a8193;
  padding: 8px 0 0;
  flex-wrap: wrap;
}
.legend .gradient {
  width: 100px;
  height: 5px;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(0, 174, 239),
    rgb(255, 218, 68),
    rgb(248, 75, 65)
  );
}
.legend > span:last-child {
  margin-left: auto;
  letter-spacing: 0;
}
.hotspot {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid #e6edf3;
}
.hotspot .rank {
  font-size: 11px;
  color: #99adbd;
}
.hotspot h3 {
  font-size: 14px;
  margin: 0;
}
.hotspot p {
  font-size: 10px;
  color: #7c91a2;
  margin: 4px 0 0;
}
.hotspot > strong {
  font-size: 20px;
  margin-left: auto;
  color: #007fae;
}
.hotspots > h2 {
  font-size: 25px;
}
.blue-panel {
  margin-top: 20px;
  background: #103b56;
  color: #eaf7fe;
  border-color: #103b56;
}
.blue-panel .eyebrow {
  color: #6dd5ff;
}
.blue-panel p:last-child {
  font-size: 12px;
  color: #b0cedf;
  margin-bottom: 0;
}
.profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
.operator-card {
  max-width: 100%;
}
.operator-card > .card-top .eyebrow {
  font-size: 8px;
  margin-bottom: 4px;
}
.profile-numbers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 25px 0 18px;
}
.profile-numbers strong {
  display: block;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.7px;
}
.profile-numbers span {
  font-size: 10px;
  color: #768b9d;
}
.split-bar {
  display: flex;
  background: #e6edf3;
  overflow: hidden;
  border-radius: 4px;
  height: 7px;
}
.split-bar > span:first-child {
  background: #eda74a;
}
.split-bar > span:last-child {
  background: #48bfeb;
}
.bar-key {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 10px;
  color: #6a8093;
  margin: 10px 0 0;
}
.timing-chart {
  width: 100%;
  height: 135px;
  display: block;
  margin-top: 8px;
}
.timing-chart text {
  font-family: inherit;
  font-size: 8px;
  fill: #647b8d;
}
.accent-note {
  color: #007da9;
  font-size: 11px;
  background: #eaf7fd;
  padding: 8px 12px;
  border-radius: 3px;
  margin-bottom: 0;
}
.hold-zones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.hold-zones span {
  font-size: 11px;
  padding: 6px 10px;
  border: 1px solid #dbe6ee;
  border-radius: 4px;
  color: #607d91;
}
.hold-zones b {
  margin-left: 10px;
}
.metric-list {
  margin: 20px 0 0;
  font-size: 11px;
}
.metric-list > div {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-top: 1px solid #e5edf3;
  gap: 10px;
}
.metric-list dt {
  color: #6b8091;
}
.metric-list dd {
  margin: 0;
  font-weight: 700;
}
.economy-grid {
  display: grid;
  gap: 20px;
}
.table-scroll {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  overflow: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 11px;
  text-align: left;
}
caption {
  text-align: left;
  color: #6c8497;
  font-size: 10px;
  padding: 10px 0 12px;
}
th {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #688195;
  background: #f3f7fa;
  padding: 10px;
}
td {
  border-bottom: 1px solid #e6edf3;
  padding: 10px;
  text-transform: capitalize;
}
th:not(:first-child),
td:not(:first-child) {
  text-align: right;
}
.operator-map {
  margin-top: 24px;
  grid-template-columns: 1fr 1fr;
}
.operator-map aside > p:not(.eyebrow) {
  font-size: 12px;
  color: #6a8093;
  line-height: 1.8;
}
.empty {
  grid-column: 1/-1;
  color: #748b9e;
  padding: 35px;
  text-align: center;
  font-size: 13px;
}
.data-panel {
  margin: 20px 4%;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 35px;
}
.data-panel p {
  font-size: 12px;
}
.upload-label {
  display: block;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 15px;
}
.upload-label input {
  display: block;
  font-size: 11px;
  margin-top: 10px;
  max-width: 100%;
}
.upload-label input::file-selector-button {
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  background: #e4f4fc;
  color: #007ca9;
  margin-right: 12px;
  cursor: pointer;
}
.import-errors {
  max-height: 150px;
  overflow: auto;
  background: #fff1ed;
  color: #a8442c;
  border: 1px solid #f3d5cb;
  padding: 12px 12px 12px 30px;
  font-size: 11px;
}
.data-panel [role="status"] {
  font-size: 11px;
  color: #007ca9;
  margin-top: 15px;
}
footer {
  border-top: 1px solid #d5e0e8;
  margin: 0 4%;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  color: #7b90a1;
  font-size: 9px;
}
footer > span {
  font-size: 8px;
  letter-spacing: 1.3px;
  font-weight: 700;
  white-space: nowrap;
}
footer p {
  margin: 0;
  text-align: right;
}
.report-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
}
.report-actions > div {
  display: flex;
  gap: 8px;
  align-items: center;
}
.report-actions label {
  font-size: 11px;
  color: #698092;
  display: flex;
  align-items: center;
  gap: 10px;
}
.report-actions select {
  width: 120px;
}
@media screen and (min-width: 1550px) {
  main,
  .filter-panel,
  .data-panel,
  .view-nav,
  .app-header,
  .sample-banner {
    padding-left: 5%;
    padding-right: 5%;
  }
  .filter-panel,
  .data-panel {
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 24px;
    padding-right: 24px;
  }
  main {
    max-width: 1600px;
    margin: auto;
  }
}
@media screen and (max-width: 1150px) {
  .filters {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .view-nav {
    gap: 18px;
  }
  .view-nav button {
    font-size: 11px;
  }
  .banner-detail {
    display: none;
  }
  .insights-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .profile-grid {
    grid-template-columns: 1fr;
  }
  .map-layout {
    grid-template-columns: 1.3fr 1fr;
  }
  .map-panel {
    padding: 16px;
  }
  .panel {
    padding: 20px;
  }
  .legend > span:last-child {
    margin-left: 0;
  }
  .report-paper .insights-grid {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 760px) {
  h1 {
    font-size: 28px;
  }
  .app-header {
    padding: 18px 5%;
  }
  .brand > span {
    font-size: 20px;
  }
  .brand b {
    font-size: 12px;
    display: block;
    margin: 0;
    letter-spacing: 1.5px;
  }
  .brand small {
    display: none;
  }
  .brand svg {
    width: 36px;
  }
  .header-meta {
    font-size: 0;
    gap: 0;
  }
  .live-dot {
    display: none;
  }
  .button.quiet {
    font-size: 12px;
    margin-left: 0;
    min-width: 80px;
    gap: 12px;
  }
  .sample-banner {
    padding: 10px 5%;
    gap: 8px;
    flex-wrap: wrap;
  }
  .sample-pill {
    font-size: 7px;
  }
  .sample-banner strong {
    font-size: 9px;
  }
  .view-nav {
    padding: 0 5%;
    gap: 22px;
  }
  .view-nav button {
    padding-top: 17px;
    padding-bottom: 14px;
  }
  .filter-panel {
    margin: 17px 5% 0;
    padding: 14px;
  }
  .filters {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }
  .filter-field > span {
    font-size: 9px;
  }
  .scope-note {
    font-size: 8px;
  }
  select {
    font-size: 10px;
  }
  main {
    padding: 24px 5% 32px;
  }
  .page-heading {
    align-items: flex-start;
    margin-bottom: 21px;
  }
  .page-heading .context-tag {
    font-size: 9px;
    padding: 6px 9px;
  }
  .page-heading p:not(.eyebrow) {
    font-size: 11px;
  }
  .kpi-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .kpi {
    padding: 15px 18px;
  }
  .kpi strong {
    font-size: 30px;
  }
  .kpi > span {
    font-size: 8px;
  }
  .insights-grid {
    grid-template-columns: 1fr;
  }
  .section-heading {
    align-items: flex-start;
  }
  .section-heading > span {
    font-size: 9px;
    text-align: right;
  }
  .section-heading h2 {
    font-size: 18px;
  }
  .map-layout,
  .operator-map {
    grid-template-columns: 1fr;
  }
  .toolbar {
    gap: 18px;
  }
  .quick-filters {
    gap: 5px;
  }
  .quick-filters > span {
    display: none;
  }
  .chip {
    font-size: 9px;
    padding: 6px 10px;
  }
  .profile-grid {
    grid-template-columns: 1fr;
  }
  .table-scroll {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .data-panel {
    grid-template-columns: 1fr;
    margin: 18px 5%;
    gap: 10px;
  }
  .report-actions {
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .report-actions > div {
    flex-wrap: wrap;
  }
  .report-actions .button {
    font-size: 10px;
    padding: 9px 12px;
  }
  .report-paper {
    padding: 20px !important;
  }
  .report-body {
    grid-template-columns: 1fr !important;
  }
  .report-masthead h2 {
    font-size: 22px !important;
  }
  .report-masthead > .tag {
    display: none;
  }
  .report-paper .report-aside .schematic {
    max-height: 300px;
  }
  .report-paper .report-aside {
    border: 0;
    padding: 0;
  }
  .report-paper .report-footnote {
    font-size: 9px;
  }
  .report-label {
    font-size: 9px !important;
  }
  .report-scope {
    overflow-wrap: anywhere;
  }
  footer {
    margin: 0 5%;
    flex-direction: column;
    gap: 8px;
  }
  footer p {
    text-align: left;
  }
  .profile-numbers strong {
    font-size: 25px;
  }
}
`,ny=`.report-paper {
  background: #fff;
  color: #173449;
  border: 1px solid #dce5ed;
  border-top: 4px solid #00aeef;
  border-radius: 6px;
  padding: 32px;
  max-width: 1150px;
  margin: auto;
  box-shadow: 0 5px 24px #183d5210;
}
.report-masthead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbe5ec;
  padding-bottom: 16px;
  margin-bottom: 16px;
  gap: 15px;
}
.report-masthead h2 {
  font-size: 30px;
  letter-spacing: -1px;
  margin: 0 0 6px;
}
.report-masthead h2 span {
  font-weight: 400;
  color: #738b9b;
}
.report-masthead p:last-child {
  font-size: 9px;
  letter-spacing: 1px;
  color: #738b9b;
  margin: 0;
}
.report-label {
  background: #eaf7fd;
  border: 1px solid #c9e5f3;
  color: #126389;
  padding: 9px 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.report-label small {
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 0;
}
.report-scope {
  font-size: 9px;
  color: #7a8c99;
  margin: 10px 0 16px;
}
.report-body {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 24px;
}
.report-section-title {
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 1.4px;
  color: #5a788e;
  margin: 0 0 14px;
}
.report-main .insights-grid {
  grid-template-columns: 1fr;
  gap: 12px;
}
.report-main .insight-card {
  padding: 15px;
  border-radius: 4px;
  box-shadow: none;
}
.report-main .card-top {
  margin-bottom: 7px;
}
.report-main .insight-card > h3 {
  font-size: 12px;
  line-height: 1.65;
  margin-bottom: 10px;
}
.report-main .insight-number {
  font-size: 16px;
}
.report-main .category {
  font-size: 7px;
  padding: 3px 5px;
}
.report-main .evidence {
  margin-bottom: 9px;
  gap: 4px;
}
.report-main .evidence span {
  font-size: 7px;
  padding: 2px 5px;
}
.report-main .counter {
  padding-top: 8px;
}
.report-main .counter .eyebrow {
  font-size: 7px;
  margin-bottom: 3px;
}
.report-main .counter > p:last-child {
  font-size: 9px;
  line-height: 1.65;
}
.report-aside {
  border-left: 1px solid #e1e9ef;
  padding-left: 24px;
}
.report-aside .schematic {
  max-height: 260px;
}
.report-aside > .small {
  font-size: 8px;
  margin: 0 0 20px;
}
.report-aside .profile-grid {
  display: block;
}
.report-aside .operator-card {
  padding: 12px;
  border-radius: 4px;
  box-shadow: none;
}
.report-aside .card-top {
  margin-bottom: 8px;
}
.report-aside .card-top h3 {
  font-size: 17px;
}
.report-aside .tag {
  font-size: 6px;
  padding: 3px;
}
.report-aside .eyebrow {
  font-size: 7px;
}
.report-aside .profile-numbers {
  margin: 12px 0;
  gap: 5px;
}
.report-aside .profile-numbers strong {
  font-size: 20px;
}
.report-aside .profile-numbers span {
  font-size: 7px;
}
.report-aside .operator-card .small {
  font-size: 8px;
  margin: 0 0 10px;
}
.report-aside .bar-key {
  font-size: 7px;
}
.report-aside .metric-list {
  margin-top: 12px;
  font-size: 8px;
}
.report-aside .metric-list > div {
  padding: 7px 0;
}
.report-footnote {
  margin-top: 22px;
  border-top: 1px solid #dce5ed;
  padding-top: 12px;
  font-size: 8px;
  line-height: 1.8;
  color: #738b9b;
}
@page {
  size: A4 portrait;
  margin: 10mm;
}
@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }
  .app-header,
  .sample-banner,
  .view-nav,
  .filter-panel,
  .page-heading,
  .report-actions,
  .data-panel,
  footer {
    display: none !important;
  }
  .app-shell,
  main {
    padding: 0 !important;
    margin: 0 !important;
    max-width: none !important;
    min-height: 0 !important;
  }
  .report-paper {
    width: 190mm;
    max-width: none;
    padding: 5mm !important;
    margin: 0;
    border: 0;
    border-top: 1mm solid #00aeef;
    border-radius: 0;
    box-shadow: none;
    font-family: Arial, sans-serif;
  }
  .report-body {
    grid-template-columns: 1.55fr 1fr !important;
    gap: 5mm;
  }
  .report-aside {
    padding-left: 4mm !important;
    border-left: 1px solid #dce5ed !important;
  }
  .report-masthead {
    padding-bottom: 3mm;
    margin-bottom: 3mm;
  }
  .report-masthead h2 {
    font-size: 21px !important;
  }
  .report-section-title {
    font-size: 8px;
    margin-bottom: 2mm;
  }
  .report-main .insights-grid {
    gap: 2.5mm;
  }
  .report-main .insight-card {
    padding: 3mm;
    break-inside: avoid;
  }
  .report-main .insight-card > h3 {
    font-size: 10px;
    line-height: 1.5;
    margin-bottom: 2mm;
  }
  .report-main .counter > p:last-child {
    font-size: 8px;
    line-height: 1.5;
  }
  .report-main .evidence span {
    font-size: 6.5px;
  }
  .report-aside .schematic {
    max-height: 57mm !important;
  }
  .report-aside .operator-card {
    padding: 2.5mm;
  }
  .report-label {
    padding: 2mm 3mm;
    font-size: 9px !important;
  }
  .report-scope {
    font-size: 8px;
    margin: 2mm 0 3mm;
  }
  .report-footnote {
    font-size: 7px !important;
    margin-top: 4mm;
    padding-top: 2mm;
  }
  .report-paper .insights-grid {
    grid-template-columns: 1fr;
  }
  .report-paper .profile-grid {
    display: block;
  }
  .report-paper .operator-card {
    break-inside: avoid;
  }
  .report-paper .report-aside > .small {
    margin-bottom: 3mm;
  }
}
`,ay=g=>g.replace(/[&<>"']/g,h=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[h]);function uy(g,h){const r=ly.replace(/@import\s+[^;]+;/g,"")+ny;return`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${ay(h)} — Cloud9 Scout Report</title><style>${r}</style></head><body style="padding:24px"><div class="report-paper">${g}</div></body></html>`}function jp(g,h,r){const o=URL.createObjectURL(new Blob([g],{type:r})),z=document.createElement("a");z.href=o,z.download=h,document.body.append(z),z.click(),z.remove(),window.setTimeout(()=>URL.revokeObjectURL(o),1e3)}const iy=["Coach Dashboard","Utility Heatmap","Operator Profiler","Anti-Strat Generator","Self-Scout","Scout Report"],Xo={team:"Nova Ridge",map:"all"},cy={team:"All teams",map:"All maps",player:"All players",agent:"All agents",ability:"All abilities",abilityType:"All utility types",side:"All sides",phase:"All phases",matchId:"All matches"},ga=g=>[...new Set(g)].sort(),Mp=g=>new Set([...g.rounds,...g.abilityEvents,...g.sniperEvents].map(h=>`${h.matchId}:${h.roundNumber}`)).size;function fy(){const[g,h]=Zt.useState(Yo),[r,o]=Zt.useState(Xo),[z,_]=Zt.useState("Coach Dashboard"),[E,H]=Zt.useState(!1),[D,M]=Zt.useState([]),[x,m]=Zt.useState(""),[R,W]=Zt.useState(!1),[X,tt]=Zt.useState(!1),[mt,Qt]=Zt.useState("Ascent"),[Ut,Bt]=Zt.useState("Nova Ridge"),[wt,Kt]=Zt.useState("Nova Ridge"),Mt=Zt.useRef(null),J=Zt.useMemo(()=>Qo(g,r),[g,r]),$=ga([...g.abilityEvents.map(A=>A.team),...g.sniperEvents.map(A=>A.team),...g.rounds.flatMap(A=>[A.attackingTeam,A.defendingTeam])]),ot=r.team??$[0]??"Unknown team",qt=Zt.useMemo(()=>ki(g.abilityEvents,{team:r.team,map:r.map}),[g,r.team,r.map]),ut=Zt.useMemo(()=>Vo(J,ot,r.map,r.side),[J,ot,r.map]),Ot={players:ut.stats.players.filter(A=>ot==="all"||A.team===ot),teams:ut.stats.teams.filter(A=>ot==="all"||A.team===ot)},Wt=hu.filter(A=>J.abilityEvents.some(w=>w.map===A)||J.sniperEvents.some(w=>w.map===A)),Ct=r.map!=="all"&&r.map?r.map:Wt[0]??"Ascent",St=J.abilityEvents.filter(A=>A.map===Ct),B=Zt.useMemo(()=>Up(St).slice(0,5),[J,Ct]),Q=r.map&&r.map!=="all"?r.map:mt,L=ot==="all"?$.includes(wt)?wt:$[0]??"Unknown team":ot,st=Zt.useMemo(()=>Qo(g,{...r,team:L,map:Q}),[g,r,Q,L]),nt=Zt.useMemo(()=>Vo(st,L,Q,r.side),[st,L,Q]),ie={opponent:L,map:Q,filters:{...r,team:L,map:Q},top3Tendencies:nt.insights.slice(0,3),operatorProfile:{players:nt.stats.players.filter(A=>A.team===L),teams:nt.stats.teams.filter(A=>A.team===L)},antiStrats:nt.antiStrats.filter(A=>nt.insights.slice(0,3).some(w=>w.id===A.insightId)),dataLabel:g.dataLabel,demoDisclaimer:"SAMPLE / DEMO DATA — fictional, seeded",abilityEventsAnalysed:st.abilityEvents.length};function Xe(A,w){o(it=>{const q={...it,[A]:w};return(A==="team"||A==="map")&&(q.player="all",q.agent="all",q.ability="all",q.matchId="all"),A==="agent"&&(q.ability="all"),q})}function ke(A){A==="Self-Scout"&&ot!=="Cloud9"&&(Bt(ot),o(w=>({...w,team:"Cloud9",player:"all",agent:"all",ability:"all",matchId:"all"}))),z==="Self-Scout"&&A!=="Self-Scout"&&ot==="Cloud9"&&o(w=>({...w,team:Ut==="all"||$.includes(Ut)?Ut:$[0],player:"all",agent:"all",ability:"all",matchId:"all"})),_(A)}async function p(A){if(A)try{const w=Wg(await A.text(),A.name.toLowerCase().endsWith(".csv")?"csv":"json");if(M(w.errors),w.errors.length){m("Import not applied. Correct the errors and try again; your current dataset is unchanged.");return}if(!w.data.abilityEvents.length&&!w.data.sniperEvents.length&&!w.data.rounds.length){m("Import not applied: no telemetry records found.");return}h(w.data),o({team:w.data.abilityEvents[0]?.team??w.data.sniperEvents[0]?.team??w.data.rounds[0]?.attackingTeam,map:"all"}),m(`Loaded ${A.name}. Source is unverified; check provenance before making decisions.`)}catch{m("Could not read this file. Please choose a readable CSV or JSON export.")}}const C=(A,w,it,q,I=!0)=>f.jsxs("label",{className:`filter-field filter-${A}`,children:[f.jsx("span",{children:w}),f.jsxs("select",{"data-testid":`filter-${A}`,value:r[A]??"all",onChange:ce=>Xe(A,ce.target.value),children:[I&&f.jsx("option",{value:"all",children:cy[A]}),it.map(ce=>f.jsx("option",{value:ce,children:q?.[ce]??ce},ce))]})]},A),V=(A,w,it)=>f.jsx("button",{className:`chip ${it?"selected":""}`,onClick:()=>o(q=>({...q,agent:"all",ability:"all",abilityType:"all",...w})),children:A});function Z(){o({map:"all",team:z==="Self-Scout"?"Cloud9":$.includes("Nova Ridge")?"Nova Ridge":$[0]??"Cloud9"})}return f.jsxs("div",{className:"app-shell",children:[f.jsxs("header",{className:"app-header",children:[f.jsxs("a",{className:"brand",href:"#",onClick:A=>{A.preventDefault(),ke("Coach Dashboard")},children:[f.jsxs("svg",{viewBox:"0 0 48 38","aria-hidden":"true",children:[f.jsx("path",{d:"M12 30a9 9 0 0 1-1-18 13 13 0 0 1 25-1 10 10 0 1 1 1 20H12",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"}),f.jsx("path",{d:"M17 24h15M21 18h8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),f.jsxs("span",{children:["Cloud9 ",f.jsx("b",{children:"VALORANT SCOUT"}),f.jsx("small",{children:"THE COACH’S INTELLIGENCE DESK"})]})]}),f.jsxs("div",{className:"header-meta",children:[f.jsx("span",{className:"live-dot"})," LOCAL WORKSPACE"," ",f.jsxs("button",{className:"button quiet",onClick:()=>H(!E),"aria-expanded":E,children:["▤ Data ",f.jsx("span",{children:E?"−":"+"})]})]})]}),f.jsxs("div",{className:"sample-banner",role:"note",children:[f.jsx("span",{className:"sample-pill",children:"DEMO ENVIRONMENT"}),f.jsx("strong",{children:"SAMPLE / DEMO DATA — fictional, seeded"}),f.jsx("span",{className:"banner-detail",children:g===Yo?"Not real GRID data. Built for the Sky’s The Limit Hackathon 2026.":`Active source: ${g.dataLabel}`})]}),E&&f.jsxs("section",{className:"data-panel panel","aria-label":"Data management",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"DATA WORKSPACE / NO NETWORK CALLS"}),f.jsx("h2",{children:"Bring your own telemetry"}),f.jsx("p",{children:g.dataLabel}),f.jsxs("p",{className:"small",children:[g.matches.length," matches · ",g.rounds.length," rounds ·"," ",g.abilityEvents.length.toLocaleString()," casts ·"," ",g.sniperEvents.length," weapon buys"]}),f.jsx("p",{className:"small",children:"CSV/JSON must follow the adapter schema in README.md. Imports with errors are not applied."})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"upload-label",children:["Load CSV or JSON",f.jsx("input",{type:"file",accept:".csv,.json,application/json,text/csv","data-testid":"data-file",onChange:A=>{p(A.target.files?.[0]),A.target.value=""}})]}),f.jsx("button",{className:"button",onClick:()=>{h(Yo),o(z==="Self-Scout"?{...Xo,team:"Cloud9"}:Xo),M([]),m("Sample dataset restored.")},children:"Reset to sample data"}),f.jsx("p",{role:"status",children:x}),D.length>0&&f.jsxs("ul",{className:"import-errors",role:"alert",children:[D.slice(0,20).map((A,w)=>f.jsx("li",{children:A},w)),D.length>20&&f.jsxs("li",{children:["…and ",D.length-20," more errors."]})]})]})]}),f.jsx("nav",{className:"view-nav","aria-label":"Scouting views",children:iy.map((A,w)=>f.jsxs("button",{"aria-current":z===A?"page":void 0,className:z===A?"active":"",onClick:()=>ke(A),"data-testid":`nav-${w}`,children:[f.jsxs("span",{children:["0",w+1]}),A]},A))}),f.jsxs("section",{className:"filter-panel","aria-label":"Global filters",children:[f.jsxs("div",{className:"filter-title",children:[f.jsx("span",{className:"eyebrow",children:"SCOUTING SCOPE"}),f.jsx("button",{className:"text-button",onClick:Z,children:"↺ Reset filters"})]}),f.jsxs("div",{className:"filters",children:[C("team","Team",$.includes(ot)||ot==="all"?$:ga([...$,ot]),void 0,!0),C("map","Map",[...hu]),C("player","Player",ga([...qt.map(A=>A.player),...g.sniperEvents.filter(A=>(ot==="all"||A.team===ot)&&(!r.map||r.map==="all"||A.map===r.map)).map(A=>A.player)])),C("agent","Agent",ga(qt.map(A=>A.agent))),C("ability","Ability",ga(qt.filter(A=>!r.agent||r.agent==="all"||A.agent===r.agent).map(A=>A.ability))),C("abilityType","Utility type",["sentinel","recon","smoke","flash","molly","other"]),C("side","Side",["attack","defense"]),C("phase","Round phase",["early","mid","late"],{early:"Early · 0–20s",mid:"Mid · 20–60s",late:"Late · 60s+"}),C("matchId","Match",ga([...qt.map(A=>A.matchId),...g.sniperEvents.filter(A=>(ot==="all"||A.team===ot)&&(!r.map||r.map==="all"||A.map===r.map)).map(A=>A.matchId)]))]}),f.jsx("p",{className:"scope-note",children:"Shared across all views. Utility-only selectors scope sniper buys and economy to matching cast rounds. Buy rates use supplied team rounds; empty data is not a measured zero."})]}),f.jsxs("main",{id:"main-content",children:[f.jsxs("div",{className:"page-heading",children:[f.jsxs("div",{children:[f.jsxs("p",{className:"eyebrow",children:[z==="Self-Scout"?"TURN THE LENS INWARD":"PREPARE WITH PURPOSE"," ","/"," ",r.map==="all"||!r.map?"ALL MAPS":r.map.toUpperCase()]}),f.jsx("h1",{children:z}),f.jsx("p",{children:z==="Coach Dashboard"?`Your next advantage against ${ot==="all"?"the field":ot}. Patterns first. Evidence always.`:z==="Utility Heatmap"?"See the setup. Find the space. Plan the clear.":z==="Operator Profiler"?"Know who’s holding the angle — and when to challenge it.":z==="Anti-Strat Generator"?"Turn recurring patterns into a concrete plan for the next round.":z==="Self-Scout"?"If they scouted us, what would they exploit?":"The essentials, ready for the team room."})]}),f.jsxs("span",{className:"context-tag",children:[f.jsx("i",{className:"dot blue"})," ",ot==="all"?"All teams":ot]})]}),(z==="Coach Dashboard"||z==="Self-Scout")&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"kpi-grid",children:[[new Set([...J.rounds,...J.abilityEvents,...J.sniperEvents].map(A=>A.matchId)).size,"MATCHES ANALYSED"],[Mp(J),"ROUNDS ANALYSED"],[J.abilityEvents.length,"UTILITY EVENTS"],[J.sniperEvents.length,"SNIPER BUYS"]].map(([A,w])=>f.jsxs("div",{className:"kpi panel",children:[f.jsx("span",{children:w}),f.jsx("strong",{children:Number(A).toLocaleString()}),f.jsx("small",{children:"Current filter scope"})]},w))}),z==="Self-Scout"&&f.jsxs("div",{className:"callout",children:[f.jsx("b",{children:"SELF-SCOUT MODE"})," · The same evidence, seen from the other side. Cloud9 is selected in the shared team filter. Change it to compare another team."]}),f.jsxs("div",{className:"section-heading",children:[f.jsx("h2",{children:z==="Self-Scout"?"Our exploitable patterns":"The scouting brief"}),f.jsxs("span",{children:[ut.insights.length," evidence-backed observations"]})]}),f.jsx(Lo,{insights:ut.insights,counters:ut.antiStrats,numbered:!0}),f.jsx("div",{className:"method-note",children:"READ THE SAMPLE · These are descriptive patterns, not win-probability predictions. Frequency is based on events, not unique rounds. Confirm against VOD before calling a counter."})]}),z==="Utility Heatmap"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"toolbar",children:[f.jsxs("div",{className:"quick-filters",children:[f.jsx("span",{children:"FOCUS"}),V("All utility",{},!r.abilityType||r.abilityType==="all"),V("Sentinel setups",{abilityType:"sentinel"},r.abilityType==="sentinel"),V("Sova / Fade recon",{abilityType:"recon"},r.abilityType==="recon"),V("Smokes",{abilityType:"smoke"},r.abilityType==="smoke")]}),f.jsxs("div",{className:"map-controls",children:[f.jsx("button",{className:R?"":"selected",onClick:()=>W(!1),"aria-pressed":!R,children:"Density"}),f.jsx("button",{className:R?"selected":"",onClick:()=>W(!0),"aria-pressed":R,children:"Hard counts"}),f.jsxs("label",{children:[f.jsx("input",{type:"checkbox",checked:X,onChange:A=>tt(A.target.checked)})," ","Cast points"]})]})]}),f.jsxs("div",{className:"map-layout",children:[f.jsxs("section",{className:"panel map-panel",children:[f.jsxs("div",{className:"card-top",children:[f.jsx("h2",{children:Ct}),f.jsxs("span",{className:"tag",children:[St.length.toLocaleString()," CASTS"]})]}),(!r.map||r.map==="all")&&f.jsxs("p",{className:"small",children:["Showing ",Ct,", the first map in scope. Select a map above for a dedicated scouting slice."]}),f.jsx(Go,{map:Ct,events:St,counts:R,points:X}),f.jsxs("div",{className:"legend",children:[f.jsx("span",{children:"LOW"}),f.jsx("i",{className:"gradient"}),f.jsx("span",{children:"HIGH DENSITY"}),f.jsx("span",{children:"· Relative to busiest cell"})]})]}),f.jsxs("aside",{children:[f.jsxs("section",{className:"panel hotspots",children:[f.jsx("p",{className:"eyebrow",children:"REPEATED UTILITY"}),f.jsx("h2",{children:"Hotspots"}),f.jsxs("p",{className:"small",children:["8-unit radius clusters · share of ",Ct," casts"]}),B.length?B.map((A,w)=>f.jsxs("div",{className:"hotspot",children:[f.jsxs("span",{className:"rank",children:["0",w+1]}),f.jsxs("div",{children:[f.jsx("h3",{children:A.zone}),f.jsxs("p",{children:["Point (",A.x.toFixed(0),", ",A.y.toFixed(0),") ·"," ",A.count," casts"]})]}),f.jsx("strong",{children:me(A.share)})]},w)):f.jsx("p",{className:"empty",children:"No utility in this slice."}),f.jsx("p",{className:"method-note",children:"Original schematic, not game-accurate placement guidance. Use clusters to spot patterns, then validate in-game."})]}),f.jsxs("section",{className:"panel blue-panel",children:[f.jsx("p",{className:"eyebrow",children:"COACH’S CHECKLIST"}),f.jsx("h3",{children:"Clear before you commit."}),f.jsx("p",{children:"Use recon to verify the setup. Remove sentinel utility. Change the timing of the hit."})]})]})]})]}),z==="Operator Profiler"&&f.jsxs(f.Fragment,{children:[f.jsx(Op,{players:Ot.players}),f.jsxs("div",{className:"section-heading",children:[f.jsx("h2",{children:"The economy behind the angle"}),f.jsx("span",{children:"Observed buys, not predicted purchases"})]}),f.jsx(ey,{teams:Ot.teams}),f.jsxs("div",{className:"map-layout operator-map",children:[f.jsxs("section",{className:"panel map-panel",children:[f.jsxs("div",{className:"card-top",children:[f.jsxs("h2",{children:[Ct," / hold positions"]}),f.jsx("span",{className:"tag",children:"OPERATOR + ODIN"})]}),f.jsx(Go,{map:Ct,holds:J.sniperEvents.filter(A=>A.map===Ct)}),f.jsxs("div",{className:"bar-key",children:[f.jsxs("span",{children:[f.jsx("i",{className:"dot amber"})," Aggressive"]}),f.jsxs("span",{children:[f.jsx("i",{className:"dot blue"})," Passive"]})]})]}),f.jsxs("aside",{className:"panel",children:[f.jsx("p",{className:"eyebrow",children:"HOW TO READ THIS"}),f.jsx("h2",{children:"Pressure, not certainty."}),f.jsx("p",{children:"Timing, angle and first-pick metrics describe Operator buys only. The hold plot includes both Operator and Odin; hover for details."}),f.jsx("p",{children:"Death w/o first kill is not the same as death without any kill. No total-kill metric is available in this export."}),f.jsx("p",{className:"small",children:"Buy rate denominator: team rounds in the current scope, assuming a stable roster. Credit bands use team credits at buy."})]})]})]}),z==="Anti-Strat Generator"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"callout",children:[f.jsx("b",{children:"RULE-BASED PLAYBOOK"})," · Deterministic suggestions tied to observed frequencies. Discuss with the team, then validate with VOD."]}),f.jsx(Lo,{insights:ut.insights,counters:ut.antiStrats,numbered:!0})]}),z==="Scout Report"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"report-actions",children:[f.jsxs("div",{children:[ot==="all"&&f.jsxs("label",{children:["Report opponent",f.jsx("select",{"data-testid":"report-team",value:L,onChange:A=>Kt(A.target.value),children:$.map(A=>f.jsx("option",{children:A},A))})]}),(!r.map||r.map==="all")&&f.jsxs("label",{children:["Report map"," ",f.jsx("select",{"data-testid":"report-map",value:mt,onChange:A=>Qt(A.target.value),children:hu.map(A=>f.jsx("option",{children:A},A))})]})]}),f.jsxs("div",{children:[f.jsx("button",{className:"button","data-testid":"export-print",onClick:()=>window.print(),children:"Print / Save as PDF"}),f.jsx("button",{className:"button","data-testid":"export-html",onClick:()=>jp(uy(Mt.current?.innerHTML??"",L),"cloud9-scout-report.html","text/html"),children:"Download HTML"}),f.jsx("button",{className:"button primary","data-testid":"export-json",onClick:()=>jp(JSON.stringify(ie,null,2),"cloud9-scout-report.json","application/json"),children:"Download JSON ↓"})]})]}),f.jsxs("div",{className:"report-paper",ref:Mt,"data-testid":"scout-report",children:[f.jsxs("div",{className:"report-masthead",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"CLOUD9 / MATCH PREPARATION"}),f.jsxs("h2",{children:[L," ",f.jsxs("span",{children:["on ",Q]})]}),f.jsxs("p",{children:["SCOUT REPORT · ",Mp(st)," rounds ·"," ",st.abilityEvents.length.toLocaleString()," casts"]})]}),f.jsx("span",{className:"tag",children:"COACH’S COPY"})]}),f.jsxs("div",{className:"report-label",children:["SAMPLE / DEMO DATA — fictional, seeded",f.jsx("br",{}),f.jsxs("small",{children:["Active source: ",g.dataLabel]})]}),f.jsxs("p",{className:"report-scope",children:["Scope:"," ",Object.entries({...r,team:L,map:Q}).filter(([,A])=>A&&A!=="all").map(([A,w])=>`${A}: ${w}`).join(" · ")]}),f.jsxs("div",{className:"report-body",children:[f.jsxs("section",{className:"report-main",children:[f.jsx("h3",{className:"report-section-title",children:"01 / TOP TENDENCIES & COUNTERS"}),f.jsx(Lo,{insights:ie.top3Tendencies,counters:ie.antiStrats,numbered:!0})]}),f.jsxs("aside",{className:"report-aside",children:[f.jsx("h3",{className:"report-section-title",children:"02 / UTILITY FOOTPRINT"}),f.jsx(Go,{map:Q,events:st.abilityEvents,mini:!0}),f.jsx("p",{className:"small",children:"Relative density · original schematic"}),f.jsx("h3",{className:"report-section-title",children:"03 / OPERATOR PROFILE"}),f.jsx(Op,{players:ie.operatorProfile.players,compact:!0})]})]}),f.jsxs("div",{className:"report-footnote",children:["Descriptive sample patterns, not predictions. Validate with VOD. Death w/o first kill is a first-kill proxy, not total kills.",f.jsx("br",{}),"Unofficial hackathon project. Not affiliated with Riot Games. VALORANT map schematics are original simplified diagrams."]})]})]})]}),f.jsxs("footer",{children:[f.jsx("span",{children:"CLOUD9 / SKY’S THE LIMIT 2026"}),f.jsx("p",{children:"Unofficial hackathon project. Not affiliated with Riot Games. VALORANT map schematics are original simplified diagrams."})]})]})}Xg.createRoot(document.getElementById("root")).render(f.jsx(Zt.StrictMode,{children:f.jsx(fy,{})}));
