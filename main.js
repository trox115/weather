!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(n,t,r){"use strict";r.r(t);var i=function(e){const n=document.querySelector("#container");fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wzRauOka5VGGkO1WRrBhRFPHBsxpeQqf&s=${e}`,{mode:"cors"}).then(e=>e.json()).then(e=>{n.style.backgroundImage=`url(${e.data.images.original.url})`})};var a=async function(n,t){let r;r="Fahrneit"===t?`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=f8428a08b2b52c02fb71710a6f873f22&units=imperial`:`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=f8428a08b2b52c02fb71710a6f873f22&units=metric`;try{const e=await fetch(r,{mode:"cors"});return await e.json()}catch(n){console.error(`${e.name}: ${e.message}`)}};var d=function(e,n){const t=document.createElement(e);return""!=n&&t.classList.add(n),t};(function(){const e=document.querySelector("#container"),n=d("div","weather"),t=d("div","head"),r=d("div","temperature"),i=d("h3",""),a=d("p","");i.innerText="Temperature";const o=d("div","temperature2"),p=d("h3",""),c=d("p","");p.innerText="City";const u=d("div","weather-body"),l=d("div","wind"),s=d("h3",""),h=d("p","");s.innerText="Wind:",l.appendChild(s),l.appendChild(h),l.appendChild(s),l.appendChild(h);const f=d("div","condition"),m=d("h3",""),C=d("p","");m.innerText="Condition:";const y=d("div","weather-footer"),v=d("select","units"),b=d("option",""),x=d("option","");b.innerText="Celsius",b.value="Celsius",x.value="Fahrneit",x.innerText="Fahrneit",v.appendChild(b),v.appendChild(x),y.appendChild(v);const w=d("label","");w.innerText="Location:",y.appendChild(w);const g=d("input","");g.id="city-name",y.appendChild(g);const S=d("button","");S.id="search",S.innerText="Search",y.appendChild(S),f.appendChild(m),f.appendChild(C),f.appendChild(m),f.appendChild(C),r.appendChild(i),r.appendChild(a),o.appendChild(p),o.appendChild(c),t.appendChild(r),t.appendChild(o),n.appendChild(t),u.appendChild(l),u.appendChild(f),n.appendChild(u),n.appendChild(y),e.appendChild(n)})();let o="Fahrneit";function p(e,n){a(e,n).then(e=>{const n=e.weather[0].main,t=e.main.temp,r=e.wind.speed,a=e.name,d=document.querySelector(".wind p"),o=document.querySelector(".condition p");document.querySelector(".temperature p").innerText=t,document.querySelector(".temperature2 p").innerText=a,d.innerText=`${r}mph`,o.innerText=n,i(n)})}p("Macedo de Cavaleiros",o),window.addEventListener("load",()=>{document.querySelector("#search").addEventListener("click",()=>{const e=document.querySelector("#city-name"),n=document.querySelector(".units");p(e.value,o=n.value)})})}]);