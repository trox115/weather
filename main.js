!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var i=function(e){const n=document.querySelector("#container");fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wzRauOka5VGGkO1WRrBhRFPHBsxpeQqf&s=${e}`,{mode:"cors"}).then(e=>e.json()).then(e=>{n.style.backgroundImage=`url(${e.data.images.original.url})`})};var r=async function(e,n){let t;t="Fahrneit"===n?`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f8428a08b2b52c02fb71710a6f873f22&units=imperial`:`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f8428a08b2b52c02fb71710a6f873f22&units=metric`;const i=await fetch(t,{mode:"cors"});return await i.json()};var a=function(e,n){const t=document.createElement(e);return""!=n&&t.classList.add(n),t};(function(){console.log("hello");const e=document.querySelector("#container"),n=a("div","weather"),t=a("div","head"),i=a("div","temperature"),r=a("h3",""),d=a("p","");r.innerText="Temperature";const o=a("div","temperature2"),p=a("h3",""),c=a("p","");p.innerText="City";const l=a("div","weather-body"),u=a("div","wind"),h=a("h3",""),s=a("p","");h.innerText="Wind:",u.appendChild(h),u.appendChild(s),u.appendChild(h),u.appendChild(s);const f=a("div","condition"),m=a("h3",""),C=a("p","");m.innerText="Condition:";const y=a("div","weather-footer"),v=a("select","units"),b=a("option",""),x=a("option","");b.innerText="Celsius",b.value="Celsius",x.value="Fahrneit",x.innerText="Fahrneit",v.appendChild(b),v.appendChild(x),y.appendChild(v);const w=a("label","");w.innerText="Location:",y.appendChild(w);const g=a("input","");g.id="city-name",y.appendChild(g);const S=a("button","");S.id="search",S.innerText="Search",y.appendChild(S),f.appendChild(m),f.appendChild(C),f.appendChild(m),f.appendChild(C),i.appendChild(r),i.appendChild(d),o.appendChild(p),o.appendChild(c),t.appendChild(i),t.appendChild(o),n.appendChild(t),l.appendChild(u),l.appendChild(f),n.appendChild(l),n.appendChild(y),e.appendChild(n)})();let d="Fahrneit";function o(e,n){r(e,n).then(e=>{const n=e.weather[0].main,t=e.main.temp,r=e.wind.speed,a=e.name,d=document.querySelector(".wind p"),o=document.querySelector(".condition p");document.querySelector(".temperature p").innerText=t,document.querySelector(".temperature2 p").innerText=a,d.innerText=`${r}mph`,o.innerText=n,i(n)})}o("Macedo de Cavaleiros",d),window.addEventListener("load",()=>{document.querySelector("#search").addEventListener("click",()=>{const e=document.querySelector("#city-name"),n=document.querySelector(".units");o(e.value,d=n.value)})})}]);