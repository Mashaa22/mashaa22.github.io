(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[11026,47974],{560053:(e,n)=>{function t(e,n){var t=e.length;e.push(n);e:for(;0<t;){var r=t-1>>>1,o=e[r];if(!(0<a(o,n)))break e;e[r]=n,e[t]=o,t=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var u=2*(r+1)-1,l=e[u],s=u+1,c=e[s];if(0>a(l,t))s<o&&0>a(c,l)?(e[r]=c,e[s]=t,r=s):(e[r]=l,e[u]=t,r=u);else{if(!(s<o&&0>a(c,t)))break e;e[r]=c,e[s]=t,r=s}}}return n}function a(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var u=Date,l=u.now();n.unstable_now=function(){return u.now()-l}}var s=[],c=[],f=1,d=null,v=3,_=!1,p=!1,b=!1,m="function"==typeof setTimeout?setTimeout:null,h="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function S(e){for(var n=r(c);null!==n;){if(null===n.callback)o(c);else{if(!(n.startTime<=e))break;o(c),n.sortIndex=n.expirationTime,t(s,n)}n=r(c)}}function g(e){if(b=!1,S(e),!p)if(null!==r(s))p=!0,D(w);else{var n=r(c);null!==n&&C(g,n.startTime-e)}}function w(e,t){p=!1,b&&(b=!1,h(x),x=-1),_=!0;var a=v;try{for(S(t),d=r(s);null!==d&&(!(d.expirationTime>t)||e&&!H());){var i=d.callback;if("function"==typeof i){d.callback=null,v=d.priorityLevel;var u=i(d.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?d.callback=u:d===r(s)&&o(s),S(t)}else o(s);d=r(s)}if(null!==d)var l=!0;else{var f=r(c);null!==f&&C(g,f.startTime-t),l=!1}return l}finally{d=null,v=a,_=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,T=!1,P=null,x=-1,k=5,O=-1;function H(){return!(n.unstable_now()-O<k)}function L(){if(null!==P){var e=n.unstable_now();O=e;var t=!0;try{t=P(!0,e)}finally{t?E():(T=!1,P=null)}}else T=!1}if("function"==typeof y)E=function(){y(L)};else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,A=R.port2;R.port1.onmessage=L,E=function(){A.postMessage(null)}}else E=function(){m(L,0)};function D(e){P=e,T||(T=!0,E())}function C(e,t){x=m((function(){e(n.unstable_now())}),t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){p||_||(p=!0,D(w))},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return r(s)},n.unstable_next=function(e){switch(v){case 1:case 2:case 3:var n=3;break;default:n=v}var t=v;v=n;try{return e()}finally{v=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=v;v=e;try{return n()}finally{v=t}},n.unstable_scheduleCallback=function(e,o,a){var i=n.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:f++,callback:o,priorityLevel:e,startTime:a,expirationTime:u=a+u,sortIndex:-1},a>i?(e.sortIndex=a,t(c,e),null===r(s)&&e===r(c)&&(b?(h(x),x=-1):b=!0,C(g,a-i))):(e.sortIndex=u,t(s,e),p||_||(p=!0,D(w))),e},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(e){var n=v;return function(){var t=v;v=n;try{return e.apply(this,arguments)}finally{v=t}}}},363840:(e,n,t)=>{e.exports=t(560053)},653250:(e,n,t)=>{var r=t(667294);var o="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},a=r.useState,i=r.useEffect,u=r.useLayoutEffect,l=r.useDebugValue;function s(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!o(e,t)}catch(r){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=a({inst:{value:t,getSnapshot:n}}),o=r[0].inst,c=r[1];return u((function(){o.value=t,o.getSnapshot=n,s(o)&&c({inst:o})}),[e,t,n]),i((function(){return s(o)&&c({inst:o}),e((function(){s(o)&&c({inst:o})}))}),[e]),l(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},950139:(e,n,t)=>{var r=t(667294),o=t(61688);var a="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},i=o.useSyncExternalStore,u=r.useRef,l=r.useEffect,s=r.useMemo,c=r.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,t,r,o){var f=u(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=s((function(){function e(e){if(!l){if(l=!0,i=e,e=r(e),void 0!==o&&d.hasValue){var n=d.value;if(o(n,e))return u=n}return u=e}if(n=u,a(i,e))return n;var t=r(e);return void 0!==o&&o(n,t)?n:(i=e,u=t)}var i,u,l=!1,s=void 0===t?null:t;return[function(){return e(n())},null===s?void 0:function(){return e(s())}]}),[n,t,r,o]);var v=i(e,f[0],f[1]);return l((function(){d.hasValue=!0,d.value=v}),[v]),c(v),v}},61688:(e,n,t)=>{e.exports=t(653250)},552798:(e,n,t)=>{e.exports=t(950139)},365804:(e,n,t)=>{t.d(n,{C:()=>i,Z:()=>l});var r=t(957161),o=t(773285),a=t(276775);const i="lastOnHomefeed",u=["/","/homefeed/"];function l(){const{pathname:e}=(0,a.useLocation)(),n=(0,a.useHistory)(),{checkExperiment:t}=(0,o.F)(),l=u.includes(e),s=n&&"POP"!==n.action;if(l&&s){const e=JSON.parse((0,r.qn)(i)),n=null!=e&&e.time?Date.now()-e.time:0,o=s&&n>0?t("hfp_hf_refresh_logic_web"):{};return{shouldMaintainHomefeed:"enabled_2_5_min"===o.group&&n/6e4<2.5||"enabled_1_min"===o.group&&n/6e4<1,lastHFScrollPosition:null==e?void 0:e.scrollPosition}}return{shouldMaintainHomefeed:!1}}},422722:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(176532),o=t(635240),a=t(395164);const i={};i.BASE_URL_PATH="/_/_/report/",i.BASE_URL_PATH_TRACE="/_/_/trace/",i.SERVER_LOG_TYPE=Object.freeze({PAGE_LOAD_METRIC:"page_load_metric",BROWSER_EXTENSION:"browser_extension",RENDER_TIME:"render_time",NETWORK_LOAD:"network_load",SIGNUP_LOAD:"signup_load",TRACE:"trace",STRING_USAGE:"string_usage",HF_REFRESH:"hf_refresh"}),i.HTTP_METHOD=Object.freeze({GET:"GET",POST:"POST"});const u=function(e,n){if(!/password/i.test(e))return n};i._assembleXhrData=function(e,n){let t;try{t=JSON.stringify(n,u)}catch(r){t=JSON.stringify({messages:[r.toString()]})}return{report_context:JSON.stringify(e,u),report_data:t}},i.logToServer=function(e,n,t,u=0,l,s){var c;let f=null!=u?u:0;const d=null!=l?l:1;s=null!==(c=s)&&void 0!==c?c:l,function(e,n,t,a){let u;u="trace"===e?i.BASE_URL_PATH_TRACE+e+"/":i.BASE_URL_PATH+e+"/",a&&(t.timeElapsed=Date.now()-a),e&&(t.logType=e);let l="";try{l=window.location.href}catch(f){}const s={app_version:(0,o.Z)(),current_url:l},c=i._assembleXhrData(s,t);return(0,r.Z)({url:u,type:n,data:c}).promise.then((({ok:e,status:n,statusText:t})=>e?Promise.resolve():Promise.reject({type:"error",message:t,httpStatus:n})))}(e,n,t,s).catch((r=>{if(f){f-=1;const r=Math.min(18e5,1.23*d);setTimeout((()=>{i.logToServer(e,n,t,f,r,s)}),l)}else f-=1,(0,a.T)({name:r.name,message:`LogToServer failed: ${r.message}`})}))},i.logPerfDataToServer=i.logToServer,i.logToServer=function(e,n){let t=0;return function(...r){if(!(t>=n))return t+=1,e.apply(this,r)}}(i.logToServer,10);const l=i},327956:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(667294),o=t(407043),a=t(385740);const i=e=>{const n=(0,r.useRef)(!1),{logContextEvent:t}=(0,o.v)(),{viewType:i,viewParameter:u}=(0,a.SU)();(0,r.useEffect)((()=>{Object.entries(e).length>0&&!n.current&&i&&(t({event_type:13,view_type:i,view_parameter:u,...e}),n.current=!0)}))}},718368:(e,n,t)=>{t.d(n,{q:()=>r,s:()=>o});const r="-end-",o=10},376113:(e,n,t)=>{t.d(n,{S:()=>a,i:()=>o});var r=t(773285);const o="web_today_tab_v1";function a(){return(0,r.F)().checkExperiment(o).anyEnabled}},19121:(e,n,t)=>{t.d(n,{$:()=>o,Z:()=>i});var r=t(425288);const{Provider:o,useHook:a}=(0,r.Z)("viewer"),i=a},11921:(e,n,t)=>{t.d(n,{Z:()=>l,i:()=>u});var r=t(667294),o=t(425288),a=t(785893);const{Provider:i,useHook:u}=(0,o.Z)("ContentHeader");function l({children:e}){const[n,t]=(0,r.useState)(!1),o=(0,r.useMemo)((()=>({isContentHeaderPresent:n,setIsContentHeaderPresent:t})),[n]);return(0,a.jsx)(i,{value:o,children:e})}},29498:(e,n,t)=>{t.d(n,{Hv:()=>s,WQ:()=>l});var r=t(667294),o=t(766935),a=t(425288),i=t(785893);const{Provider:u,useHook:l}=(0,a.Z)("HeaderShadow");function s({children:e}){const[n,t]=(0,r.useState)(!1),[a,l]=(0,r.useState)(0),[s,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=(0,o.Z)((()=>{t(window.scrollY>0),l(window.scrollY)}),50);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,i.jsx)(u,{value:{currentScrollPosition:a,isScrolled:n,setSubheaderShadow:c,subheaderShadow:s},children:e})}},224525:(e,n,t)=>{function r(e,n){return n?`${e}?${new URLSearchParams(n).toString()}`:e}function o(e){return r("/admin/",e)}function a(e){return r("/admin/oauth/logout/",e)}function i(e){return r("/today/",e)}t.d(n,{HF:()=>o,Kn:()=>a,tG:()=>i})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/11026-f4a40dd355627257.mjs.map