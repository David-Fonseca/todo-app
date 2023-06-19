(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,"*{\n    margin: 0;\n}\nbody{\n    background-color: rgb(253, 248, 248);\n}\n#container{\n    width:100vw;\n    height:100vh;\n    display:grid;\n    grid-template: 1fr 8fr / 1fr 4fr;\n}\n#header{\n    grid-column: 1/3;\n    background-color: rgb(29, 29, 29);\n    color: white;\n    display: flex;\n    align-items: end;\n    font-size: 4vh;\n}\n#sidebar{\n    grid-row-start: 2;\n    display: flex;\n    flex-direction: column;\n    background-color: grey;\n}\n#content{\n    grid-column-start:2;\n    grid-row-start:2;\n    padding: 2vh 2vw 2vh 2vw;\n    display: flex;\n    flex-direction: column;\n    gap: 1vh;\n}\n.todo{\n    background-color: black;\n    color: white;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.todo-form{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.popup{\n    width:40vw;\n    height: 25vh;\n    display:none;\n    position:fixed;\n    bottom:50%;\n    right:20%;\n    z-index:9;\n    background-color: grey;\n    color:white;\n\n}",""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],s=o.base?c[0]+o.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var v=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==v)t[v].references++,t[v].updater(p);else{var f=r(p,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),d=n.n(i),a=n(565),c=n.n(a),s=n(216),l=n.n(s),u=n(589),v=n.n(u),p=n(426),f={};f.styleTagTransform=v(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;let m=[];class y{constructor(e,t,n,o){this.title=e,this.notes=t,this.priority=n,this.date=o,this.visualRepresentation=`<div>${e}</div>\n        <div>${t}</div>\n        <div>${n}</div>\n        <div>${o}</div>\n        <div>X</div>`}}const h=e=>{let t=document.createElement("div");t.classList.add("todo"),t.innerHTML=`\n        <div>${e.title}</div>\n        <div>${e.notes}</div>\n        <div>${e.priority}</div>\n        <div>${e.date}</div>\n        <div>X</div>`,document.querySelector("#content").appendChild(t)},g=()=>{document.getElementById("popup").style.display="block"},b=()=>{document.querySelector(".todo-form").reset(),document.getElementById("popup").style.display="none"},E=()=>{document.querySelector("#content").innerHTML="",m.forEach((e=>{let t=document.createElement("div");t.classList.add("todo"),t.innerHTML=`\n            <div>${e.title}</div>\n            <div>${e.notes}</div>\n            <div>${e.priority}</div>\n            <div>${e.date}</div>\n            <div>X</div>`,document.querySelector("#content").appendChild(t)}))},x=()=>{document.querySelector("#content").innerHTML="",m.forEach((e=>{if(new Date(e.date)==Date()){let t=document.createElement("div");t.classList.add("todo"),t.innerHTML=`\n                <div>${e.title}</div>\n                <div>${e.notes}</div>\n                <div>${e.priority}</div>\n                <div>${e.date}</div>\n                <div>X</div>`,document.querySelector("#content").appendChild(t)}}))},w=()=>{document.querySelector("#content").innerHTML="",m.forEach((e=>{if(isThisWeek(new Date(e.date))){let t=document.createElement("div");t.classList.add("todo"),t.innerHTML=e.visualRepresentation,document.querySelector("#content").appendChild(t)}}))},L=document.getElementById("ntodo"),T=document.getElementById("enter-todo"),k=document.getElementById("all-todos"),I=document.getElementById("today-todos"),S=document.getElementById("week-todos");L.addEventListener("click",(()=>{g()})),T.addEventListener("click",(e=>{e.preventDefault(),m.push(new y(document.getElementById("todo-form-title").value,document.getElementById("todo-form-notes").value,document.querySelector('input[name="todo-priority"]:checked').value,document.getElementById("todo-date").value)),console.log(m),b(),h(m[m.length-1])})),k.addEventListener("click",E),I.addEventListener("click",x),S.addEventListener("click",w)})()})();