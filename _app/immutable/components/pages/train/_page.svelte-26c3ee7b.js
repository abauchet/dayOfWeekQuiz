import{S as O,i as Q,s as U,k as E,q as A,a as q,l as D,m as V,r as I,h as v,c as B,n as w,b as N,C as h,u as j,B as Y,Q as z,G as F}from"../../../chunks/index-2d9bfffa.js";function G(e,t,l){const n=e.slice();return n[9]=t[l],n}function L(e){let t,l=e[9]+"",n,a,u,d,o;function _(){return e[6](e[9])}return{c(){t=E("button"),n=A(l),a=q(),this.h()},l(i){t=D(i,"BUTTON",{class:!0});var f=V(t);n=I(f,l),a=B(f),f.forEach(v),this.h()},h(){w(t,"class",u="btn rounded-full  "+(e[2]===-1?e[9]===e[3]?"btn-success":"btn-primary":e[2]===e[9]?"btn-error":e[9]===e[3]?"btn-primary":"btn-neutral"))},m(i,f){N(i,t,f),h(t,n),h(t,a),d||(o=F(t,"click",_),d=!0)},p(i,f){e=i,f&12&&u!==(u="btn rounded-full  "+(e[2]===-1?e[9]===e[3]?"btn-success":"btn-primary":e[2]===e[9]?"btn-error":e[9]===e[3]?"btn-primary":"btn-neutral"))&&w(t,"class",u)},d(i){i&&v(t),d=!1,o()}}}function H(e){let t,l,n,a,u,d,o,_=e[0].length-1+"",i,f,C,p,g,b,y=[...Array(7).keys()],c=[];for(let s=0;s<y.length;s+=1)c[s]=L(G(e,y,s));return{c(){t=E("div"),l=E("div"),n=E("div"),a=E("p"),u=A(e[1]),d=q(),o=E("p"),i=A(_),f=A(" left / "),C=A(e[4]),p=A(" errors"),g=q(),b=E("div");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){t=D(s,"DIV",{});var m=V(t);l=D(m,"DIV",{class:!0});var r=V(l);n=D(r,"DIV",{class:!0});var k=V(n);a=D(k,"P",{class:!0});var M=V(a);u=I(M,e[1]),M.forEach(v),d=B(k),o=D(k,"P",{class:!0});var P=V(o);i=I(P,_),f=I(P," left / "),C=I(P,e[4]),p=I(P," errors"),P.forEach(v),k.forEach(v),g=B(r),b=D(r,"DIV",{class:!0});var S=V(b);for(let T=0;T<c.length;T+=1)c[T].l(S);S.forEach(v),r.forEach(v),m.forEach(v),this.h()},h(){w(a,"class","text-4xl self-center text-center w-full"),w(o,"class","text-2xl self-center text-center w-full"),w(n,"class","flex flex-col w-full h-1/5 justify-center space-y-4"),w(b,"class","flex flex-col justify-around p-0 m-0 h-4/5 w-4/5 self-center"),w(l,"class","flex flex-col space-x-4 h-[calc(100vh-150px)]")},m(s,m){N(s,t,m),h(t,l),h(l,n),h(n,a),h(a,u),h(n,d),h(n,o),h(o,i),h(o,f),h(o,C),h(o,p),h(l,g),h(l,b);for(let r=0;r<c.length;r+=1)c[r].m(b,null)},p(s,[m]){if(m&2&&j(u,s[1]),m&1&&_!==(_=s[0].length-1+"")&&j(i,_),m&16&&j(C,s[4]),m&44){y=[...Array(7).keys()];let r;for(r=0;r<y.length;r+=1){const k=G(s,y,r);c[r]?c[r].p(k,m):(c[r]=L(k),c[r].c(),c[r].m(b,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=y.length}},i:Y,o:Y,d(s){s&&v(t),z(c,s)}}}function J(e,t,l){Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};const n=[[5,11,16,22,33,39,44,50,61,67,72,78,89,95],[0,6,17,23,28,34,45,51,56,62,73,79,84,90],[1,7,12,18,29,35,40,46,57,63,68,74,85,91,96],[2,13,19,24,30,41,47,52,58,69,75,80,86,97],[3,8,14,25,31,36,42,53,59,64,70,81,87,92,98],[9,15,20,26,37,43,48,54,65,71,76,82,93,99],[4,10,21,27,32,38,49,55,60,66,77,83,88,94]];let a=[...Array(100).keys()],u=a.random(),d=-1,o=-1,_=0;const i=()=>{l(0,a=a.filter(p=>p!==u)),l(1,u=a.random()),l(2,d=-1),l(3,o=-1)},f=p=>{l(3,o=n.reduce((g,b,y)=>b.includes(u)?y:g,-1)),n[p].some(g=>g===u)?setTimeout(i,d===-1?2e3:0):(l(2,d=p),l(4,_++,_))};return[a,u,d,o,_,f,p=>f(p)]}class R extends O{constructor(t){super(),Q(this,t,J,H,U,{})}}export{R as default};
