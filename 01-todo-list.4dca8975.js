function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var n=r.default(e,t,"get");return o.default(e,n)};var r=l(a("fExtF")),o=l(a("iaRLo"));function l(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){c.default(e,t),t.set(e,n)};var d,c=(d=a("7K24o"))&&d.__esModule?d:{default:d};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){var i=f.default(e,t,"set");return p.default(e,i,n),n};var f=v(a("fExtF")),p=v(a("3LGG3"));function v(e){return e&&e.__esModule?e:{default:e}}var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t){m.default(e,t),t.add(e)};var m=function(e){return e&&e.__esModule?e:{default:e}}(a("7K24o"));let y=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");var b={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}},g=new WeakMap,M=new WeakMap,S=new WeakMap,k=new WeakMap,x=new WeakMap,L=new WeakSet,O=new WeakSet,E=new WeakSet,W=new WeakSet,T=new WeakSet,j=new WeakSet,I=new WeakSet,P=new WeakSet,q=new WeakSet;function C(){e(s)(this,k).app=document.querySelector(".todo-list"),e(s)(this,k).app&&(e(s)(this,k).addItemBtn=e(s)(this,k).app.querySelector(".header__button"),e(s)(this,k).itemInput=e(s)(this,k).app.querySelector(".header__input"),e(s)(this,k).currentList=e(s)(this,k).app.querySelector(".current-list"),e(s)(this,k).doneList=e(s)(this,k).app.querySelector(".done-list"),e(s)(this,k).listContainer=document.querySelector(".list-container"))}function G(){e(s)(this,k).addItemBtn.addEventListener("click",e(_)(this,W,F).bind(this)),e(s)(this,k).listContainer.addEventListener("click",e(_)(this,j,U).bind(this)),e(s)(this,k).itemInput.addEventListener("keypress",e(_)(this,T,N).bind(this))}function R(t){e(h)(this,x,t),e(_)(this,q,H).call(this),b.save(e(s)(this,g),t)}function F(){const{value:t}=e(s)(this,k).itemInput;if(t){const n=[...e(s)(this,x)];n.push({id:y(),value:t,done:!1}),e(_)(this,E,R).call(this,n)}e(s)(this,k).itemInput.value=null}function N(t){t.code===e(s)(this,M)&&e(_)(this,W,F).call(this)}function U(t){const n=t.target.closest(".list__item[data-id]");n&&("remove"===t.target.dataset.action&&e(_)(this,I,$).call(this,n.dataset.id),"toggle"===t.target.dataset.action&&e(_)(this,P,D).call(this,n.dataset.id))}function $(t){const n=e(s)(this,x).filter((e=>e.id!==t));e(_)(this,E,R).call(this,n)}function D(t){const n=e(s)(this,x).map((e=>t===e.id?{...e,done:!e.done}:e));e(_)(this,E,R).call(this,n)}function H(){const t=({id:e,value:t,done:n})=>`\n  <li class="list__item" data-id="${e}" data-done="${n}">\n    <span class="list__item-name">${t}</span>\n    <div class="list__buttons">\n      <i class="list__button remove fa fa-trash-o" data-action="remove"></i>\n      <span class="list__bar">|</span>\n      <i \n        class="${"list__button fa "+(n?"uncomplete fa-check-circle":"complete fa-check-circle-o")}"\n        data-action="toggle"\n      ></i>\n    </div>\n  </li>\n`,n=e(s)(this,x).filter((({done:e})=>!e)),i=e(s)(this,x).filter((({done:e})=>e));e(s)(this,k).currentList.innerHTML=n.map(t).join(""),e(s)(this,k).doneList.innerHTML=i.map(t).join("")}(new class{init(t){(t||document.body).innerHTML=e(s)(this,S),e(_)(this,L,C).call(this),e(_)(this,O,G).call(this),e(_)(this,q,H).call(this)}constructor(){e(w)(this,L),e(w)(this,O),e(w)(this,E),e(w)(this,W),e(w)(this,T),e(w)(this,j),e(w)(this,I),e(w)(this,P),e(w)(this,q),e(u)(this,g,{writable:!0,value:"TODO-LIST-ITEMS"}),e(u)(this,M,{writable:!0,value:"Enter"}),e(u)(this,S,{writable:!0,value:'\n    <div class="todo-list">\n    <header class="header">\n        <input class="header__input" type="text" placeholder="Enter an activity..">\n        <button type="button" class="header__button"><i class="fa fa-plus"></i></button>\n      </header>\n      <main class="list-container">\n        <ul class="list current-list"></ul>\n        <hr>\n        <ul class="list done-list"></ul>\n      </main>\n      <\/script>\n    </div>\n    '}),e(u)(this,k,{writable:!0,value:{}}),e(u)(this,x,{writable:!0,value:b.load(e(s)(this,g))||[]})}}).init();
//# sourceMappingURL=01-todo-list.4dca8975.js.map
