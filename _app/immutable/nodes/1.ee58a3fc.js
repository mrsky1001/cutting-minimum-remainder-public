import{S,i as q,s as x,k as _,q as f,a as k,l as d,m as g,r as h,h as u,c as y,b as m,X as v,u as $,G as E,a1 as C}from"../chunks/index.6d77475c.js";import{d as G}from"../chunks/singletons.19a3b027.js";const H=()=>{const s=G;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function X(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=k(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function j(s,t,r){let o;return C(s,P,n=>r(0,o=n)),[o]}let A=class extends S{constructor(t){super(),q(this,t,j,X,x,{})}};export{A as component};
