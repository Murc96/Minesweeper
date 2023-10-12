(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background-color: #333;\n  display: flex;\n  align-items: center;\n  font-size: 3rem;\n  flex-direction: column;\n  color: white;\n}\n\nh1 {\n  margin: 20px;\n  font-size: 30px;\n}\n\n#board {\n  display: inline-grid;\n  padding: 10px;\n  grid-template-columns: repeat(var(--size), 30px);\n  grid-template-rows: repeat(var(--size), 30px);\n  gap: 4px;\n  background-color: #777;\n}\n\n#board > * {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border: 2px solid #BBB;\n  user-select: none;\n}\n\n#board > [data-hidden = "true"] {\n  background-color: #BBB;\n  cursor: pointer;\n}\n\n#board > [data-hidden = "mine"] {\n  background-color: red;\n}\n\n#board > [data-hidden = "false"] {\n  background-color: none;\n}\n\n#board > [data-hidden="marked"] {\n  background-color: yellow;\n}\n\n.tile {\n  font-size: 15px;\n}',""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var f=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(h);else{var p=o(h,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var s=r(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e,n,t,r,o){const a=document.createElement("div");a.dataset.hidden=t,a.id=`tile-${e}-${n}`,a.classList.add("tile");let i=document.getElementById("board");i.style.setProperty("--size",r),i.appendChild(a),a.addEventListener("click",(function(){const[e,n]=this.id.split("-").slice(1).map(Number);o.revealTile(e,n),o.board[e][n].mine?o.board[e][n].mine&&(this.dataset.hidden="mine"):(this.dataset.hidden="false",document.getElementById(`tile-${e}-${n}`).textContent=o.board[e][n].adjacentMines)}))}var n=t(379),r=t.n(n),o=t(795),a=t.n(o),i=t(569),d=t.n(i),s=t(565),c=t.n(s),l=t(216),u=t.n(l),f=t(589),h=t.n(f),p=t(28),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=d().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),r()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;let b=new class{constructor(e,n){this.name=e,this.difficulty=n}}("Marc","beginner"),v=new class{constructor(e){this.board=[],this.difficulty=e.difficulty}createGameboard(){let e,n;"beginner"===this.difficulty?(e=8,n=8):"intermediate"===this.difficulty?(e=16,n=16):"advanced"===this.difficulty&&(e=16,n=30);for(let t=0;t<e;t++){let e=[];for(let r=0;r<n;r++){const n={x:t,y:r,mine:!1,hidden:!0,adjacentMines:0,marked:!1};e.push(n)}this.board.push(e)}}placeMines(){let e,n,t;"beginner"===this.difficulty?(e=10,n=8,t=8):"intermediate"===this.difficulty?(e=40,n=16,t=16):"advanced"===this.difficulty&&(e=99,n=16,t=30);for(let r=0;r<e;r++){let e=parseInt(Math.random()*n),r=parseInt(Math.random()*t);if(!1===this.board[e][r].mine)this.board[e][r].mine=!0;else if(!0===this.board[e][r].mine){let e=!1;for(let r=0;r<n;r++){for(let n=0;n<t;n++)if(!0!==this.board[r][n].mine){this.board[r][n].mine=!0,e=!0;break}if(e)break}}}}countAdjacentMines(e,n){let t=0;for(let r=e-1;r<=e+1;r++)for(let o=n-1;o<=n+1;o++)r>=0&&r<this.board.length&&o>=0&&o<this.board[r].length&&(!0!==this.board[r][o].mine||r===e&&o===n||t++);return t}calculateAdjacentMines(){for(let e=0;e<this.board.length;e++)for(let n=0;n<this.board[e].length;n++)if(!0!==this.board[e][n].adjacentMines){let t=this.countAdjacentMines(e,n);this.board[e][n].adjacentMines=t}}revealTile(e,n){let t=this.board[e][n];t.hidden&&(t.hidden=!1),this.checkGameStatus()}markTile(e,n){let t=this.board[e][n];!t.marked&&t.hidden&&(t.marked=!0)}checkGameStatus(){let e=!0,n=!1;for(let t=0;t<this.board.length;t++){for(let r=0;r<this.board[t].length;r++){const o=this.board[t][r];if(!o.mine&&o.hidden&&(e=!1),o.mine&&!o.hidden){e=!1,n=!0;break}}if(n)break}e?console.log("gewonnen"):n?console.log("verloren"):console.log("weiter")}}(b);v.createGameboard(),v.placeMines(),v.calculateAdjacentMines();for(let n=0;n<v.board.length;n++)for(let t=0;t<v.board[n].length;t++)e(n,t,v.board[n][t].hidden,v.board.length,v);console.log(v)})()})();