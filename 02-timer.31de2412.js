function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var n=u.default(e,t,"get");return s.default(e,n)};var u=c(r("fExtF")),s=c(r("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){d.default(e,t),t.set(e,n)};var i,d=(i=r("7K24o"))&&i.__esModule?i:{default:i};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,n){var o=_.default(e,t,"set");return p.default(e,o,n),n};var _=w(r("fExtF")),p=w(r("3LGG3"));function w(e){return e&&e.__esModule?e:{default:e}}var v=new WeakMap;class m{start(t){e(f)(this,v,setInterval((()=>{const e=new Date(t,0)-Date.now(),n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),r=Math.floor(e%36e5/6e4),a=Math.round(e%6e4/1e3);console.log({days:m.formatValue(n),hours:m.formatValue(o),minutes:m.formatValue(r),seconds:m.formatValue(a)})}),1e3))}stop(){clearInterval(e(a)(this,v))}static formatValue(e){return e.toString().padStart(2,"0")}constructor(){e(l)(this,v,{writable:!0,value:null})}}document.body.innerHTML='\n<section class="countdown">\n      <article id="js-countdown" class="countdown__timer">\n          <section class="countdown__value countdown__days">00</section>\n          <section class="countdown__value">:</section>\n          <section class="countdown__value countdown__hours">00</section>\n          <section class="countdown__value">:</section>\n          <section class="countdown__value countdown__minutes">00</section>\n          <section class="countdown__value">:</section>\n          <section class="countdown__value countdown__seconds">00</section>\n      </article>\n      <form class="countdown__actions" data-action="start">\n        <input class="countdown__datepicker" type="number" min="2024" max="2099" name="year" step="1" value="2024" />\n        <button type=\'submit\' class="countdown__toggle">start</button>\n      </form>\n  </section>\n';const y=new m;({actionform:document.querySelector("form.countdown__actions"),days:document.querySelector(".countdown__days"),hours:document.querySelector(".countdown__hours"),minutes:document.querySelector(".countdown__minutes"),seconds:document.querySelector(".countdown__seconds")}).actionform.addEventListener("submit",(e=>{e.preventDefault();const t=e.currentTarget.querySelector('button[type="submit"]'),{year:n,dataset:o}=e.currentTarget;"start"===e.currentTarget.dataset.action?(t.textContent="stop",o.action="stop",n.disabled=!0,y.start(n.value)):(t.textContent="start",o.action="start",n.disabled=!1,y.stop())}));
//# sourceMappingURL=02-timer.31de2412.js.map
