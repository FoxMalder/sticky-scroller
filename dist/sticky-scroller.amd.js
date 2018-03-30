define("StickyScroller",[],function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){t.exports=class{constructor(t,e){if(this.newScrollPosition=0,this.oldScrollPositon=0,this.ticking=!1,"string"==typeof t)this.element=document.querySelector(t);else{if(!(t instanceof HTMLElement))return void console.error("StickyScroller: element is required.");this.element=t}this.element.style.overflowY="hidden",window.addEventListener("scroll",this.onWindowScroll.bind(this))}onWindowScroll(){this.newScrollPosition=window.scrollY,this.ticking||(window.requestAnimationFrame(()=>{this.translate(),this.ticking=!1,this.oldScrollPositon=this.newScrollPosition}),this.ticking=!0)}translate(){const t=this.element.parentElement.getBoundingClientRect(),e=this.newScrollPosition-this.oldScrollPositon;t.top>0&&e>0||t.bottom<window.innerHeight&&e<0||(this.element.scrollTop=this.element.scrollTop+e)}}}])});