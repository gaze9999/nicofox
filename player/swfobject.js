/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var w="undefined",n="object",I="Shockwave Flash",m="application/x-shockwave-flash",H="SWFObjectExprInst",E=window,h=document,p=navigator,J=[],k=[],D=[],y=[],g,u=null,j=null,G=null,z=false,a=false;var C=function(){var M=typeof h.getElementById!=w&&typeof h.getElementsByTagName!=w&&typeof h.createElement!=w,R=[0,0,0],O=null;if(typeof p.plugins!=w&&typeof p.plugins[I]==n){O=p.plugins[I].description;if(O&&!(typeof p.mimeTypes!=w&&p.mimeTypes[m]&&!p.mimeTypes[m].enabledPlugin)){O=O.replace(/^.*\s+(\S+\s+\S+$)/,"$1");R[0]=parseInt(O.replace(/^(.*)\..*$/,"$1"),10);R[1]=parseInt(O.replace(/^.*\.(.*)\s.*$/,"$1"),10);R[2]=/r/.test(O)?parseInt(O.replace(/^.*r(.*)$/,"$1"),10):0}}var S=p.userAgent.toLowerCase(),L=p.platform.toLowerCase(),Q=false,K=false,P=L?/win/.test(L):/win/.test(S),N=L?/mac/.test(L):/mac/.test(S);return{w3cdom:M,pv:R,webkit:Q,ie:K,win:P,mac:N}}();var i=function(){if(!C.w3cdom){return}A(f);if(typeof h.addEventListener!=w){h.addEventListener("DOMContentLoaded",c,null)}o(c)}();function c(){if(z){return}z=true;if(u){clearInterval(u);u=null}var K=J.length;for(var L=0;L<K;L++){J[L]()}}function A(K){if(z){K()}else{J[J.length]=K}}function o(K){E.addEventListener("load",K,false)}function f(){var M=k.length;for(var K=0;K<M;K++){var N=k[K].id;if(C.pv[0]>0){var L=b(N);if(L){k[K].width=L.getAttribute("width")?L.getAttribute("width"):"0";k[K].height=L.getAttribute("height")?L.getAttribute("height"):"0";if(x(k[K].swfVersion)){s(N,true)}else{if(k[K].expressInstall&&!a&&x("6.0.65")&&(C.win||C.mac)){F(k[K])}else{l(L)}}}}else{s(N,true)}}}function F(K){a=true;var P=b(K.id);if(P){if(K.altContentId){var M=b(K.altContentId);if(M){j=M;G=K.altContentId}}else{j=e(P)}if(!(/%$/.test(K.width))&&parseInt(K.width,10)<310){K.width="310"}if(!(/%$/.test(K.height))&&parseInt(K.height,10)<137){K.height="137"}h.title=h.title.slice(0,47)+" - Flash Player Installation";var O="PlugIn",L=h.title,N="MMredirectURL="+E.location+"&MMplayerType="+O+"&MMdoctitle="+L,Q=K.id;q({data:K.expressInstall,id:H,width:K.width,height:K.height},{flashvars:N},Q)}}function l(K){K.parentNode.replaceChild(e(K),K)}function e(O){var N=v("div");if(1){var L=O.getElementsByTagName(n)[0];if(L){var P=L.childNodes;if(P){var K=P.length;for(var M=0;M<K;M++){if(!(P[M].nodeType==1&&P[M].nodeName=="PARAM")&&!(P[M].nodeType==8)){N.appendChild(P[M].cloneNode(true))}}}}}return N}function q(M,L,R){var O,N=b(R);if(N){if(typeof M.id==w){M.id=R}if(1){var P=v(n);P.setAttribute("type",m);for(var K in M){if(M[K]!=Object.prototype[K]){if(K.toLowerCase()=="styleclass"){P.setAttribute("class",M[K])}else{if(K.toLowerCase()!="classid"){P.setAttribute(K,M[K])}}}}for(var Q in L){if(L[Q]!=Object.prototype[Q]&&Q.toLowerCase()!="movie"){d(P,Q,L[Q])}}N.parentNode.replaceChild(P,N);O=P}}return O}function d(M,K,L){var N=v("param");N.setAttribute("name",K);N.setAttribute("value",L);M.appendChild(N)}function t(L){var K=b(L);if(K&&(K.nodeName=="OBJECT"||K.nodeName=="EMBED")){K.parentNode.removeChild(K)}}function b(M){var K=null;try{K=h.getElementById(M)}catch(L){}return K}function v(K){return h.createElement(K)}function x(M){var L=C.pv,K=M.split(".");K[0]=parseInt(K[0],10);K[1]=parseInt(K[1],10)||0;K[2]=parseInt(K[2],10)||0;return(L[0]>K[0]||(L[0]==K[0]&&L[1]>K[1])||(L[0]==K[0]&&L[1]==K[1]&&L[2]>=K[2]))?true:false}function r(N,K){var M=h.getElementsByTagName("head")[0],L=v("style");L.setAttribute("type","text/css");L.setAttribute("media","screen");if(typeof h.createTextNode!=w){L.appendChild(h.createTextNode(N+" {"+K+"}"))}M.appendChild(L)}function s(M,K){var L=K?"visible":"hidden";if(z&&b(M)){b(M).style.visibility=L}else{r("#"+M,"visibility:"+L)}}function B(L){var M=/[\\\"<>\.;]/;var K=M.exec(L)!=null;return K?encodeURIComponent(L):L}return{registerObject:function(N,K,M){if(!C.w3cdom||!N||!K){return}var L={};L.id=N;L.swfVersion=K;L.expressInstall=M?M:false;k[k.length]=L;s(N,false)},getObjectById:function(N){var K=null;if(C.w3cdom){var L=b(N);if(L){var M=L.getElementsByTagName(n)[0];if(!M||(M&&typeof L.SetVariable!=w)){K=L}else{if(typeof M.SetVariable!=w){K=M}}}}return K},embedSWF:function(Q,X,U,W,K,P,L,S,V){if(!C.w3cdom||!Q||!X||!U||!W||!K){return}U+="";W+="";if(x(K)){s(X,false);var T={};if(V&&typeof V===n){for(var O in V){if(V[O]!=Object.prototype[O]){T[O]=V[O]}}}T.data=Q;T.width=U;T.height=W;var R={};if(S&&typeof S===n){for(var N in S){if(S[N]!=Object.prototype[N]){R[N]=S[N]}}}if(L&&typeof L===n){for(var M in L){if(L[M]!=Object.prototype[M]){if(typeof R.flashvars!=w){R.flashvars+="&"+M+"="+L[M]}else{R.flashvars=M+"="+L[M]}}}}A(function(){q(T,R,X);if(T.id==X){s(X,true)}})}else{if(P&&!a&&x("6.0.65")&&(C.win||C.mac)){a=true;s(X,false);A(function(){var Y={};Y.id=Y.altContentId=X;Y.width=U;Y.height=W;Y.expressInstall=P;F(Y)})}}},getFlashPlayerVersion:function(){return{major:C.pv[0],minor:C.pv[1],release:C.pv[2]}},hasFlashPlayerVersion:x,createSWF:function(M,L,K){if(C.w3cdom){return q(M,L,K)}else{return undefined}},removeSWF:function(K){if(C.w3cdom){t(K)}},createCSS:function(L,K){if(C.w3cdom){r(L,K)}},addDomLoadEvent:A,addLoadEvent:o,getQueryParamValue:function(N){var M=h.location.search||h.location.hash;if(N==null){return B(M)}if(M){var L=M.substring(1).split("&");for(var K=0;K<L.length;K++){if(L[K].substring(0,L[K].indexOf("="))==N){return B(L[K].substring((L[K].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a&&j){var K=b(H);if(K){K.parentNode.replaceChild(j,K);if(G){s(G,true)}j=null;G=null;a=false}}}}}();