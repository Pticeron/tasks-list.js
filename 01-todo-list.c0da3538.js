!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var n=u.default(e,t,"get");return l.default(e,n)};var u=s(i("1UHsN")),l=s(i("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){f.default(e,t),t.set(e,n)};var d,f=(d=i("5k7tO"))&&d.__esModule?d:{default:d};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){var r=h.default(e,t,"set");return v.default(e,r,n),n};var h=_(i("1UHsN")),v=_(i("jdVyQ"));function _(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t){m.default(e,t),t.add(e)};var m=function(e){return e&&e.__esModule?e:{default:e}}(i("5k7tO"));var w={};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t,n){t&&g(e.prototype,t);n&&g(e,n);return e};var M={};Object.defineProperty(M,"__esModule",{value:!0}),M.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O.default(e,t,n[t])}))}return e};var O=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(e){return k.default(e)||P.default(e)||S.default(e)||x.default()};var k=T(i("kMC0W")),P=T(i("7AJDX")),x=T(i("8CtQK")),S=T(i("auk6i"));function T(e){return e&&e.__esModule?e:{default:e}}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},E=new WeakMap,I=new WeakMap,C=new WeakMap,L=new WeakMap,A=new WeakSet,q=new WeakSet,D=new WeakSet,H=new WeakSet,N=new WeakSet,U=new WeakSet,K=new WeakSet,Q=new WeakSet;function z(){e(o)(this,C).app=document.querySelector(".todo-list"),e(o)(this,C).app&&(e(o)(this,C).addItemBtn=e(o)(this,C).app.querySelector(".header__button"),e(o)(this,C).itemInput=e(o)(this,C).app.querySelector(".header__input"),e(o)(this,C).currentList=e(o)(this,C).app.querySelector(".current-list"),e(o)(this,C).doneList=e(o)(this,C).app.querySelector(".done-list"),e(o)(this,C).listContainer=document.querySelector(".list-container"))}function F(){e(o)(this,C).addItemBtn.addEventListener("click",e(y)(this,H,V).bind(this)),e(o)(this,C).listContainer.addEventListener("click",e(y)(this,N,B).bind(this))}function R(t){e(p)(this,L,t),e(y)(this,Q,Z).call(this),localStore.save(e(o)(this,E),t)}function V(){var t=e(o)(this,C).itemInput.value;if(t){var n=e(j)(e(o)(this,L));n.push({id:W(),value:t,done:!1}),e(y)(this,D,R).call(this,n)}e(o)(this,C).itemInput.value=null}function B(t){var n=t.target.closest(".list__item[data-id]");n&&("remove"===t.target.dataset.action&&e(y)(this,U,J).call(this,n.dataset.id),"toggle"===t.target.dataset.action&&e(y)(this,K,X).call(this,n.dataset.id))}function J(t){var n=e(o)(this,L).filter((function(e){return e.id!==t}));e(y)(this,D,R).call(this,n)}function X(t){var n=e(o)(this,L).map((function(n){return t===n.id?e(M)({},n,{done:!n.done}):n}));e(y)(this,D,R).call(this,n)}function Z(){var t=function(e){var t=e.id,n=e.value,r=e.done;return'\n  <li class="list__item" data-id="'.concat(t,'" data-done="').concat(r,'">\n    <span class="list__item-name">').concat(n,'</span>\n    <div class="list__buttons">\n      <i class="list__button remove fa fa-trash-o" data-action="remove"></i>\n      <span class="list__bar">|</span>\n      <i \n        class="').concat("list__button fa ".concat(r?"uncomplete fa-check-circle":"complete fa-check-circle-o"),'"\n        data-action="toggle"\n      ></i>\n    </div>\n  </li>\n')},n=e(o)(this,L).filter((function(e){return!e.done})),r=e(o)(this,L).filter((function(e){return e.done}));e(o)(this,C).currentList.innerHTML=n.map(t).join(""),e(o)(this,C).doneList.innerHTML=r.map(t).join("")}(new(function(){"use strict";function t(){e(a)(this,t),e(b)(this,A),e(b)(this,q),e(b)(this,D),e(b)(this,H),e(b)(this,N),e(b)(this,U),e(b)(this,K),e(b)(this,Q),e(c)(this,E,{writable:!0,value:"TODO-LIST-ITEMS"}),e(c)(this,I,{writable:!0,value:'\n    <div class="todo-list">\n    <header class="header">\n        <input class="header__input" type="text" placeholder="Enter an activity..">\n        <button type="button" class="header__button"><i class="fa fa-plus"></i></button>\n      </header>\n      <main class="list-container">\n        <ul class="list current-list"></ul>\n        <hr>\n        <ul class="list done-list"></ul>\n      </main>\n      <\/script>\n    </div>\n    '}),e(c)(this,C,{writable:!0,value:{}}),e(c)(this,L,{writable:!0,value:[]})}return e(w)(t,[{key:"init",value:function(t){(t||document.body).innerHTML=e(o)(this,I),e(y)(this,A,z).call(this),e(y)(this,q,F).call(this)}}]),t}())).init()}();
//# sourceMappingURL=01-todo-list.c0da3538.js.map
