var y=Object.defineProperty;var S=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>(S(t,typeof e!="symbol"?e+"":e,s),s);import{a7 as f}from"./index.8d332a97.js";import{w as m}from"./index.a4b9c153.js";function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function s(){for(var r=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var c=typeof n;if(c==="string"||c==="number")r.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&r.push(a)}}else if(c==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){r.push(n.toString());continue}for(var i in n)e.call(n,i)&&n[i]&&r.push(i)}}}return r.join(" ")}t.exports?(s.default=s,t.exports=s):window.classNames=s})()})(v);var w=v.exports;const N=h(w);function b(t,e){const{set:s,update:r}=t;return e({...t,init:a=>{s(a)},self:()=>f(t),updateByField:(a,i)=>{r(d=>(d[a]=i,d))}})}function x(t,e){const{set:s,update:r}=t;return e({...t,set:s,add:l=>{r(u=>[...u,l])},all:()=>f(t).map(l=>l.self()),remove:l=>t.set([...f(t).filter(u=>u.self().id!==l)]),getStore:l=>f(t).find(u=>u.self().id===l),getStoreByField:(l,u)=>f(t).find(_=>_.self()[l]===u),allStores:()=>f(t)})}class F{constructor(e){p(this,"id");p(this,"type");p(this,"text");this.id=e.id,this.type=e.type,this.text=e.text}}const g=t=>{const e=m(new F(t));return b(e,({init:s,subscribe:r,self:o,updateByField:n})=>({subscribe:r,init:s,self:o,updateByField:n}))},O=t=>{const e=m(t.map(s=>g(s)));return x(e,({set:s,add:r,all:o,remove:n,getStore:c,getStoreByField:a,allStores:i})=>({...e,set:s,add:r,all:o,remove:n,getStore:c,allStores:i,getStoreByField:a}))},T=O([]);export{F as T,g as a,N as c,T as t};
