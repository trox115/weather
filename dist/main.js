!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){const t=document.querySelector("#container");fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wzRauOka5VGGkO1WRrBhRFPHBsxpeQqf&s=${e}`,{mode:"cors"}).then(e=>e.json()).then(e=>{t.style.backgroundImage=`url(${e.data.images.original.url})`})};var o=async function(e,t){let n;n="Fahrneit"===t?`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f8428a08b2b52c02fb71710a6f873f22&units=imperial`:`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=f8428a08b2b52c02fb71710a6f873f22&units=metric`;const r=await fetch(n,{mode:"cors"});return await r.json()};let a="Fahrneit";function i(e,t){o(e,t).then(e=>{const t=e.weather[0].main,n=e.main.temp,o=e.wind.speed,a=e.name,i=document.querySelector(".wind p"),u=document.querySelector(".condition p");document.querySelector(".temperature p").innerText=n,document.querySelector(".temperature2 p").innerText=a,i.innerText=`${o}mph`,u.innerText=t,r(t)})}i("Macedo de Cavaleiros",a),window.addEventListener("load",()=>{document.querySelector("#search").addEventListener("click",()=>{const e=document.querySelector("#city-name"),t=document.querySelector(".units");i(e.value,a=t.value)})})}]);