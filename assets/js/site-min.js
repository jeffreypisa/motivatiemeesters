/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(l){var n=-1,o=-1,c=function(t){return parseFloat(t)||0},d=function(t){var e=1,i=l(t),n=null,o=[];return i.each(function(){var t=l(this),e=t.offset().top-c(t.css("margin-top")),i=0<o.length?o[o.length-1]:null;null===i?o.push(t):Math.floor(Math.abs(n-e))<=1?o[o.length-1]=i.add(t):o.push(t),n=e}),o},h=function(t){var e={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof t?l.extend(e,t):("boolean"==typeof t?e.byRow=t:"remove"===t&&(e.remove=!0),e)},u=l.fn.matchHeight=function(t){var e=h(t);if(e.remove){var i=this;return this.css(e.property,""),l.each(u._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!e.target||(u._groups.push({elements:this,options:e}),u._apply(this,e)),this};u.version="0.7.2",u._groups=[],u._throttle=80,u._maintainScroll=!1,u._beforeUpdate=null,u._afterUpdate=null,u._rows=d,u._parse=c,u._parseOptions=h,u._apply=function(t,e){var s=h(e),i=l(t),n=[i],o=l(window).scrollTop(),r=l("html").outerHeight(!0),a=i.parents().filter(":hidden");return a.each(function(){var t=l(this);t.data("style-cache",t.attr("style"))}),a.css("display","block"),s.byRow&&!s.target&&(i.each(function(){var t=l(this),e=t.css("display");"inline-block"!==e&&"flex"!==e&&"inline-flex"!==e&&(e="block"),t.data("style-cache",t.attr("style")),t.css({display:e,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),n=d(i),i.each(function(){var t=l(this);t.attr("style",t.data("style-cache")||"")})),l.each(n,function(t,e){var i=l(e),o=0;if(s.target)o=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var t=l(this),e=t.attr("style"),i=t.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var n={display:i};n[s.property]="",t.css(n),t.outerHeight(!1)>o&&(o=t.outerHeight(!1)),e?t.attr("style",e):t.css("display","")})}i.each(function(){var t=l(this),e=0;s.target&&t.is(s.target)||("border-box"!==t.css("box-sizing")&&(e+=c(t.css("border-top-width"))+c(t.css("border-bottom-width")),e+=c(t.css("padding-top"))+c(t.css("padding-bottom"))),t.css(s.property,o-e+"px"))})}),a.each(function(){var t=l(this);t.attr("style",t.data("style-cache")||null)}),u._maintainScroll&&l(window).scrollTop(o/r*l("html").outerHeight(!0)),this},u._applyDataApi=function(){var i={};l("[data-match-height], [data-mh]").each(function(){var t=l(this),e=t.attr("data-mh")||t.attr("data-match-height");i[e]=e in i?i[e].add(t):t}),l.each(i,function(){this.matchHeight(!0)})};var s=function(t){u._beforeUpdate&&u._beforeUpdate(t,u._groups),l.each(u._groups,function(){u._apply(this.elements,this.options)}),u._afterUpdate&&u._afterUpdate(t,u._groups)};u._update=function(t,e){if(e&&"resize"===e.type){var i=l(window).width();if(i===n)return;n=i}t?-1===o&&(o=setTimeout(function(){s(e),o=-1},u._throttle)):s(e)},l(u._applyDataApi);var t=l.fn.on?"on":"bind";l(window)[t]("load",function(t){u._update(!1,t)}),l(window)[t]("resize orientationchange",function(t){u._update(!0,t)})}),
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(t){o(e,t,i[t])})}return e}function i(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */function r(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}function l(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Ke))}}
/**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
function c(t){var e;return t&&"[object Function]"==={}.toString.call(t)}
/**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */function _(t,e){if(1!==t.nodeType)return[];
// NOTE: 1 DOM access here
var i=getComputedStyle(t,null);return e?i[e]:i}
/**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */function p(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}
/**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */function m(t){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}
// Firefox want us to check `-x` and `-y` variations as well
var e=_(t),i=e.overflow,n=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(i+o+n)?t:m(p(t))}
/**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
function g(t){return 11===t?Ze:10===t?ti:Ze||ti}
/**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */function w(t){if(!t)return document.documentElement;
// Skip hidden elements which don't have an offsetParent
for(var e=g(10)?document.body:null,i=t.offsetParent
// NOTE: 1 DOM access here
;i===e&&t.nextElementSibling;)i=(t=t.nextElementSibling).offsetParent;var n=i&&i.nodeName;return n&&"BODY"!==n&&"HTML"!==n?
// .offsetParent will return the closest TD or TABLE in case
// no offsetParent is present, I hate this job...
-1!==["TD","TABLE"].indexOf(i.nodeName)&&"static"===_(i,"position")?w(i):i:t?t.ownerDocument.documentElement:document.documentElement}function d(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||w(t.firstElementChild)===t)}
/**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */function h(t){return null!==t.parentNode?h(t.parentNode):t}
/**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */function f(t,e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,n=i?t:e,o=i?e:t,s=document.createRange();s.setStart(n,0),s.setEnd(o,0);var r=s.commonAncestorContainer;
// Both nodes are inside #document
if(t!==r&&e!==r||n.contains(o))return d(r)?r:w(r);
// one of the nodes is inside shadowDOM, find which one
var a=h(t);return a.host?f(a.host,e):f(t,h(e).host)}
/**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */function u(t,e
/*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */){var i,n="top"===(1<arguments.length&&void 0!==e?e:"top")?"scrollTop":"scrollLeft",o=t.nodeName;if("BODY"!==o&&"HTML"!==o)return t[n];var s=t.ownerDocument.documentElement,r;return(t.ownerDocument.scrollingElement||s)[n]}function v(t,e,i
/*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */){var n=2<arguments.length&&void 0!==i&&i,o=u(e,"top"),s=u(e,"left"),r=n?-1:1;return t.top+=o*r,t.bottom+=o*r,t.left+=s*r,t.right+=s*r,t}function y(t,e){var i="x"===e?"Left":"Top",n="Left"===i?"Right":"Bottom";return parseFloat(t["border"+i+"Width"],10)+parseFloat(t["border"+n+"Width"],10)}function b(t,e,i,n){return Math.max(e["offset"+t],e["scroll"+t],i["client"+t],i["offset"+t],i["scroll"+t],g(10)?i["offset"+t]+n["margin"+("Height"===t?"Top":"Left")]+n["margin"+("Height"===t?"Bottom":"Right")]:0)}function T(){var t=document.body,e=document.documentElement,i=g(10)&&getComputedStyle(e);return{height:b("Height",t,e,i),width:b("Width",t,e,i)}}
/**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
function S(t){return oi({},t,{right:t.left+t.width,bottom:t.top+t.height})}
/**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */function k(t){var e={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(g(10)){e=t.getBoundingClientRect();var i=u(t,"top"),n=u(t,"left");e.top+=i,e.left+=n,e.bottom+=i,e.right+=n}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},s="HTML"===t.nodeName?T():{},r=s.width||t.clientWidth||o.right-o.left,a=s.height||t.clientHeight||o.bottom-o.top,l=t.offsetWidth-r,c=t.offsetHeight-a;
// subtract scrollbar size from sizes
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(l||c){var d=_(t);l-=y(d,"x"),c-=y(d,"y"),o.width-=l,o.height-=c}return S(o)}function C(t,e,i){var n=2<arguments.length&&void 0!==i&&i,o=g(10),s="HTML"===e.nodeName,r=k(t),a=k(e),l=m(t),c=_(e),d=parseFloat(c.borderTopWidth,10),h=parseFloat(c.borderLeftWidth,10);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
n&&"HTML"===e.nodeName&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var u=S({top:r.top-a.top-d,left:r.left-a.left-h,width:r.width,height:r.height});
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(u.marginTop=0,u.marginLeft=0,!o&&s){var p=parseFloat(c.marginTop,10),f=parseFloat(c.marginLeft,10);u.top-=d-p,u.bottom-=d-p,u.left-=h-f,u.right-=h-f,
// Attach marginTop and marginLeft because in some circumstances we may need them
u.marginTop=p,u.marginLeft=f}return(o&&!n?e.contains(l):e===l&&"BODY"!==l.nodeName)&&(u=v(u,e)),u}function E(t,e
/**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */){var i=1<arguments.length&&void 0!==e&&e,n=t.ownerDocument.documentElement,o=C(t,n),s=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=i?0:u(n),l=i?0:u(n,"left"),c;return S({top:a-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:s,height:r})}function A(t){var e=t.nodeName;return"BODY"!==e&&"HTML"!==e&&("fixed"===_(t,"position")||A(p(t)))}
/**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */function x(t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!t||!t.parentElement||g())return document.documentElement;for(var e=t.parentElement;e&&"none"===_(e,"transform");)e=e.parentElement;return e||document.documentElement}
/**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */function D(t,e,i,n,o){var s=4<arguments.length&&void 0!==o&&o,r={top:0,left:0},a=s?x(t):f(t,e);
// NOTE: 1 DOM access here
// Handle viewport case
if("viewport"===n)r=E(a,s);else{
// Handle other cases based on DOM element used as boundaries
var l=void 0;"scrollParent"===n?"BODY"===(l=m(p(e))).nodeName&&(l=t.ownerDocument.documentElement):l="window"===n?t.ownerDocument.documentElement:n;var c=C(l,a,s);
// In case of HTML, we need a different computation
if("HTML"!==l.nodeName||A(a))
// for all the other DOM elements, this one is good
r=c;else{var d=T(),h=d.height,u=d.width;r.top+=c.top-c.marginTop,r.bottom=h+c.top,r.left+=c.left-c.marginLeft,r.right=u+c.left}}
// Add paddings
return r.left+=i,r.top+=i,r.right-=i,r.bottom-=i,r}function I(t){var e,i;return t.width*t.height}
/**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function O(t,e,n,i,o,s
/**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */){var r=5<arguments.length&&void 0!==s?s:0;if(-1===t.indexOf("auto"))return t;var a=D(n,i,r,o),l={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},c=Object.keys(l).map(function(t){return oi({key:t},l[t],{area:I(l[t])})}).sort(function(t,e){return e.area-t.area}),d=c.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),h=0<d.length?d[0].key:c[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function $(t,e,i,n
/**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */){var o=3<arguments.length&&void 0!==n?n:null,s;return C(i,o?x(e):f(e,i),o)}function N(t){var e=getComputedStyle(t),i=parseFloat(e.marginTop)+parseFloat(e.marginBottom),n=parseFloat(e.marginLeft)+parseFloat(e.marginRight),o;return{width:t.offsetWidth+n,height:t.offsetHeight+i}}
/**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */function P(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}
/**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */function H(t,e,i){i=i.split("-")[0];
// Get popper node sizes
var n=N(t),o={width:n.width,height:n.height},s=-1!==["right","left"].indexOf(i),r=s?"top":"left",a=s?"left":"top",l=s?"height":"width",c=s?"width":"height";
// Add position, width and height to our offsets object
return o[r]=e[r]+e[l]/2-n[l]/2,o[a]=i===a?e[a]-n[c]:e[P(a)],o}
/**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */function L(t,e){
// use native find if supported
return Array.prototype.find?t.find(e):t.filter(e)[0];
// use `filter` to obtain the same behavior of `find`
}
/**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */function M(t,e,i){
// use native findIndex if supported
if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===i});
// use `find` + `indexOf` if `findIndex` isn't supported
var n=L(t,function(t){return t[e]===i});return t.indexOf(n)}
/**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */function j(t,i,e){var n;return(void 0===e?t:t.slice(0,M(t,"name",e))).forEach(function(t){t.function&&
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;// eslint-disable-line dot-notation
t.enabled&&c(e)&&(
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
i.offsets.popper=S(i.offsets.popper),i.offsets.reference=S(i.offsets.reference),i=e(i,t))}),i}
/**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */function F(){
// if popper is destroyed, don't perform any further update
if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};
// compute reference element offsets
t.offsets.reference=$(this.state,this.popper,this.reference,this.options.positionFixed),
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
t.placement=O(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),
// store the computed placement inside `originalPlacement`
t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,
// compute the popper offsets
t.offsets.popper=H(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",
// run the modifiers
t=j(this.modifiers,t),
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}
/**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */function W(t,n){return t.some(function(t){var e=t.name,i;return t.enabled&&e===n})}
/**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */function z(t){for(var e=[!1,"ms","Webkit","Moz","O"],i=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<e.length;n++){var o=e[n],s=o?""+o+i:t;if(void 0!==document.body.style[s])return s}return null}
/**
   * Destroy the popper
   * @method
   * @memberof Popper
   */function q(){return this.state.isDestroyed=!0,
// touch DOM only if `applyStyle` modifier is enabled
W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[z("transform")]=""),this.disableEventListeners(),
// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}
/**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */function R(t){var e=t.ownerDocument;return e?e.defaultView:window}function U(t,e,i,n){var o="BODY"===t.nodeName,s=o?t.ownerDocument.defaultView:t;s.addEventListener(e,i,{passive:!0}),o||U(m(s.parentNode),e,i,n),n.push(s)}
/**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */function Y(t,e,i,n){
// Resize event listener on window
i.updateBound=n,R(t).addEventListener("resize",i.updateBound,{passive:!0});
// Scroll event listener on scroll parents
var o=m(t);return U(o,"scroll",i.updateBound,i.scrollParents),i.scrollElement=o,i.eventsEnabled=!0,i}
/**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */function B(){this.state.eventsEnabled||(this.state=Y(this.reference,this.options,this.state,this.scheduleUpdate))}
/**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */function Q(t,e){
// Remove resize event listener on window
return R(t).removeEventListener("resize",e.updateBound),
// Remove scroll event listener on scroll parents
e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),
// Reset state
e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}
/**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */function X(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Q(this.reference,this.state))}
/**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */function K(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}
/**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */function V(i,n){Object.keys(n).forEach(function(t){var e="";
// add unit if the value is numeric and is one of the following
-1!==["width","height","top","right","bottom","left"].indexOf(t)&&K(n[t])&&(e="px"),i.style[t]=n[t]+e})}
/**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */function G(i,n){Object.keys(n).forEach(function(t){var e;!1!==n[t]?i.setAttribute(t,n[t]):i.removeAttribute(t)})}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */function J(t){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
return V(t.instance.popper,t.styles),
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
G(t.instance.popper,t.attributes),
// if arrowElement is defined and arrowStyles has some properties
t.arrowElement&&Object.keys(t.arrowStyles).length&&V(t.arrowElement,t.arrowStyles),t}
/**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */function Z(t,e,i,n,o){
// compute reference element offsets
var s=$(o,e,t,i.positionFixed),r=O(i.placement,s,e,t,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
return e.setAttribute("x-placement",r),
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
V(e,{position:i.positionFixed?"fixed":"absolute"}),i}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function tt(t,e){var i=e.x,n=e.y,o=t.offsets.popper,s=L(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==s&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var r=void 0!==s?s:e.gpuAcceleration,a,l=k(w(t.instance.popper)),c={position:o.position},d={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)},h="bottom"===i?"top":"bottom",u="right"===n?"left":"right",p=z("transform"),f=void 0,m=void 0;if(m="bottom"===h?-l.height+d.bottom:d.top,f="right"===u?-l.width+d.right:d.left,r&&p)c[p]="translate3d("+f+"px, "+m+"px, 0)",c[h]=0,c[u]=0,c.willChange="transform";else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var g="bottom"===h?-1:1,v="right"===u?-1:1;c[h]=m*g,c[u]=f*v,c.willChange=h+", "+u}
// Attributes
var y={"x-placement":t.placement};
// Update `data` attributes, styles and arrowStyles
return t.attributes=oi({},y,t.attributes),t.styles=oi({},c,t.styles),t.arrowStyles=oi({},t.offsets.arrow,t.arrowStyles),t}
/**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */function et(t,i,e){var n=L(t,function(t){var e;return t.name===i}),o=!!n&&t.some(function(t){return t.name===e&&t.enabled&&t.order<n.order});if(!o){var s="`"+i+"`",r="`"+e+"`";console.warn(r+" modifier is required by "+s+" modifier in order to work, be sure to include it before "+s+"!")}return o}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function it(t,e){var i;
// arrow depends on keepTogether in order to work
if(!et(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof n){
// if arrowElement is not found, don't run the modifier
if(!(n=t.instance.popper.querySelector(n)))return t}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],s=t.offsets,r=s.popper,a=s.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",d=l?"Top":"Left",h=d.toLowerCase(),u=l?"left":"top",p=l?"bottom":"right",f=N(n)[c];
//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjuction
//
// top/left side
a[p]-f<r[h]&&(t.offsets.popper[h]-=r[h]-(a[p]-f)),
// bottom/right side
a[h]+f>r[p]&&(t.offsets.popper[h]+=a[h]+f-r[p]),t.offsets.popper=S(t.offsets.popper);
// compute center of the popper
var m=a[h]+a[c]/2-f/2,g=_(t.instance.popper),v=parseFloat(g["margin"+d],10),y=parseFloat(g["border"+d+"Width"],10),w=m-t.offsets.popper[h]-v-y;
// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
// prevent arrowElement from being placed not contiguously to its popper
return w=Math.max(Math.min(r[c]-f,w),0),t.arrowElement=n,t.offsets.arrow=(ni(i={},h,Math.round(w)),ni(i,u,""),i),t}
/**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */function nt(t){return"end"===t?"start":"start"===t?"end":t}
/**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
/**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
function ot(t,e){var i=1<arguments.length&&void 0!==e&&e,n=ri.indexOf(t),o=ri.slice(n+1).concat(ri.slice(0,n));return i?o.reverse():o}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
function st(p,f){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(W(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return p;var m=D(p.instance.popper,p.instance.reference,f.padding,f.boundariesElement,p.positionFixed),g=p.placement.split("-")[0],v=P(g),y=p.placement.split("-")[1]||"",w=[];switch(f.behavior){case ai:w=[g,v];break;case li:w=ot(g);break;case ci:w=ot(g,!0);break;default:w=f.behavior}return w.forEach(function(t,e){if(g!==t||w.length===e+1)return p;g=p.placement.split("-")[0],v=P(g);var i=p.offsets.popper,n=p.offsets.reference,o=Math.floor,s="left"===g&&o(i.right)>o(n.left)||"right"===g&&o(i.left)<o(n.right)||"top"===g&&o(i.bottom)>o(n.top)||"bottom"===g&&o(i.top)<o(n.bottom),r=o(i.left)<o(m.left),a=o(i.right)>o(m.right),l=o(i.top)<o(m.top),c=o(i.bottom)>o(m.bottom),d="left"===g&&r||"right"===g&&a||"top"===g&&l||"bottom"===g&&c,h=-1!==["top","bottom"].indexOf(g),u=!!f.flipVariations&&(h&&"start"===y&&r||h&&"end"===y&&a||!h&&"start"===y&&l||!h&&"end"===y&&c);(s||d||u)&&(
// this boolean to detect any flip loop
p.flipped=!0,(s||d)&&(g=w[e+1]),u&&(y=nt(y)),p.placement=g+(y?"-"+y:""),
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
p.offsets.popper=oi({},p.offsets.popper,H(p.instance.popper,p.offsets.reference,p.placement)),p=j(p.instance.modifiers,p,"flip"))}),p}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function rt(t){var e=t.offsets,i=e.popper,n=e.reference,o=t.placement.split("-")[0],s=Math.floor,r=-1!==["top","bottom"].indexOf(o),a=r?"right":"bottom",l=r?"left":"top",c=r?"width":"height";return i[a]<s(n[l])&&(t.offsets.popper[l]=s(n[l])-i[c]),i[l]>s(n[a])&&(t.offsets.popper[l]=s(n[a])),t}
/**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */function at(t,e,i,n){
// separate value from unit
var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+o[1],r=o[2];
// If it's not a number it's an operator, I guess
if(!s)return t;if(0===r.indexOf("%")){var a=void 0,l;switch(r){case"%p":a=i;break;case"%":case"%r":default:a=n}return S(a)[e]/100*s}if("vh"!==r&&"vw"!==r)
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return s;
// if is a vh or vw, we calculate the size based on the viewport
var c=void 0;return(c="vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*s}
/**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */function lt(t,o,s,e){var r=[0,0],a=-1!==["right","left"].indexOf(e),i=t.split(/(\+|\-)/).map(function(t){return t.trim()}),n=i.indexOf(L(i,function(t){return-1!==t.search(/,|\s/)}));
// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
i[n]&&-1===i[n].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/,c=-1!==n?[i.slice(0,n).concat([i[n].split(l)[0]]),[i[n].split(l)[1]].concat(i.slice(n+1))]:[i];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
return(c=c.map(function(t,e){
// Most of the units rely on the orientation of the popper
var i=(1===e?!a:a)?"height":"width",n=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,n=!0,t):n?(t[t.length-1]+=e,n=!1,t):t.concat(e)},[]).map(function(t){return at(t,i,o,s)})})).forEach(function(i,n){i.forEach(function(t,e){K(t)&&(r[n]+=t*("-"===i[e-1]?-1:1))})}),r}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */function ct(t,e){var i=e.offset,n=t.placement,o=t.offsets,s=o.popper,r=o.reference,a=n.split("-")[0],l=void 0;return l=K(+i)?[+i,0]:lt(i,s,r,a),"left"===a?(s.top+=l[0],s.left-=l[1]):"right"===a?(s.top+=l[0],s.left+=l[1]):"top"===a?(s.left+=l[0],s.top-=l[1]):"bottom"===a&&(s.left+=l[0],s.top+=l[1]),t.popper=s,t}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function dt(t,o){var e=o.boundariesElement||w(t.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
t.instance.reference===e&&(e=w(e));
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var i=z("transform"),n=t.instance.popper.style,s=n.top,r=n.left,a=n[i];n.top="",n.left="",n[i]="";var l=D(t.instance.popper,t.instance.reference,o.padding,e,t.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
n.top=s,n.left=r,n[i]=a,o.boundaries=l;var c=o.priority,d=t.offsets.popper,h={primary:function t(e){var i=d[e];return d[e]<l[e]&&!o.escapeWithReference&&(i=Math.max(d[e],l[e])),ni({},e,i)},secondary:function t(e){var i="right"===e?"left":"top",n=d[i];return d[e]>l[e]&&!o.escapeWithReference&&(n=Math.min(d[i],l[e]-("right"===e?d.width:d.height))),ni({},i,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";d=oi({},d,h[e](t))}),t.offsets.popper=d,t}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function ht(t){var e=t.placement,i=e.split("-")[0],n=e.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(n){var o=t.offsets,s=o.reference,r=o.popper,a=-1!==["bottom","top"].indexOf(i),l=a?"left":"top",c=a?"width":"height",d={start:ni({},l,s[l]),end:ni({},l,s[l]+s[c]-r[c])};t.offsets.popper=oi({},r,d[n])}return t}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function ut(t){if(!et(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,i=L(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<i.top||e.left>i.right||e.top>i.bottom||e.right<i.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}
/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function pt(t){var e=t.placement,i=e.split("-")[0],n=t.offsets,o=n.popper,s=n.reference,r=-1!==["left","right"].indexOf(i),a=-1===["top","left"].indexOf(i);return o[r?"left":"top"]=s[i]-(a?o[r?"width":"height"]:0),t.placement=P(e),t.offsets.popper=S(o),t}
/**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */
/**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */for(var ft=function(o){// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function l(t){return{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()}function t(){return{bindType:n,delegateType:n,handle:function t(e){if(o(e.target).is(this))return e.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}}}function e(t){var e=this,i=!1;return o(this).one(c.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||c.triggerTransitionEnd(e)},t),this}function i(){o.fn.emulateTransitionEnd=e,o.event.special[c.TRANSITION_END]=t()}
/**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */
/**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
var n="transitionend",s=1e6,r=1e3,c={TRANSITION_END:"bsTransitionEnd",getUID:function t(e){for(;
// eslint-disable-next-line no-bitwise
e+=~~(Math.random()*s),document.getElementById(e););return e},getSelectorFromElement:function t(e){var i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||"");try{return document.querySelector(i)?i:null}catch(t){return null}},getTransitionDurationFromElement:function t(e){if(!e)return 0;// Get transition-duration of the element
var i=o(e).css("transition-duration"),n;// Return 0 if element or transition duration is not found
return parseFloat(i)?(// If multiple durations are defined, take the first
i=i.split(",")[0],parseFloat(i)*r):0},reflow:function t(e){return e.offsetHeight},triggerTransitionEnd:function t(e){o(e).trigger(n)},
// TODO: Remove in v5
supportsTransitionEnd:function t(){return Boolean(n)},isElement:function t(e){return(e[0]||e).nodeType},typeCheckConfig:function t(e,i,n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var s=n[o],r=i[o],a=r&&c.isElement(r)?"element":l(r);if(!new RegExp(s).test(a))throw new Error(e.toUpperCase()+': Option "'+o+'" provided type "'+a+'" but expected type "'+s+'".')}}};return i(),c}(e=e&&e.hasOwnProperty("default")?e.default:e),mt=(vt="alert",yt="4.1.3",_t="."+(wt="bs.alert"),bt=".data-api",Tt=(gt=e).fn[vt],St='[data-dismiss="alert"]',kt={CLOSE:"close"+_t,CLOSED:"closed"+_t,CLICK_DATA_API:"click"+_t+bt},Ct="alert",Et="fade",At="show"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,xt=
/* */
function(){function n(t){this._element=t}// Getters
var t=n.prototype;
// Public
return t.close=function t(e){var i=this._element,n;e&&(i=this._getRootElement(e)),this._triggerCloseEvent(i).isDefaultPrevented()||this._removeElement(i)},t.dispose=function t(){gt.removeData(this._element,wt),this._element=null},// Private
t._getRootElement=function t(e){var i=ft.getSelectorFromElement(e),n=!1;return i&&(n=document.querySelector(i)),n||(n=gt(e).closest("."+Ct)[0]),n},t._triggerCloseEvent=function t(e){var i=gt.Event(kt.CLOSE);return gt(e).trigger(i),i},t._removeElement=function t(e){var i=this;if(gt(e).removeClass(At),gt(e).hasClass(Et)){var n=ft.getTransitionDurationFromElement(e);gt(e).one(ft.TRANSITION_END,function(t){return i._destroyElement(e,t)}).emulateTransitionEnd(n)}else this._destroyElement(e)},t._destroyElement=function t(e){gt(e).detach().trigger(kt.CLOSED).remove()},// Static
n._jQueryInterface=function t(i){return this.each(function(){var t=gt(this),e=t.data(wt);e||(e=new n(this),t.data(wt,e)),"close"===i&&e[i](this)})},n._handleDismiss=function t(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(n,null,[{key:"VERSION",get:function t(){return yt}}]),n}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
gt(document).on(kt.CLICK_DATA_API,St,xt._handleDismiss(new xt)),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
gt.fn[vt]=xt._jQueryInterface,gt.fn[vt].Constructor=xt,gt.fn[vt].noConflict=function(){return gt.fn[vt]=Tt,xt._jQueryInterface},xt),gt,vt,yt,wt,_t,bt,Tt,St,kt,Ct,Et,At,xt,Dt=(Ot="button",$t="4.1.3",Pt="."+(Nt="bs.button"),Ht=".data-api",Lt=(It=e).fn[Ot],Mt="active",jt="btn",Wt='[data-toggle^="button"]',zt='[data-toggle="buttons"]',qt="input",Rt=".active",Ut=".btn",Yt={CLICK_DATA_API:"click"+Pt+Ht,FOCUS_BLUR_DATA_API:(Ft="focus")+Pt+Ht+" blur"+Pt+Ht
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},Bt=
/* */
function(){function i(t){this._element=t}// Getters
var t=i.prototype;
// Public
return t.toggle=function t(){var e=!0,i=!0,n=It(this._element).closest(zt)[0];if(n){var o=this._element.querySelector(qt);if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(Mt))e=!1;else{var s=n.querySelector(Rt);s&&It(s).removeClass(Mt)}if(e){if(o.hasAttribute("disabled")||n.hasAttribute("disabled")||o.classList.contains("disabled")||n.classList.contains("disabled"))return;o.checked=!this._element.classList.contains(Mt),It(o).trigger("change")}o.focus(),i=!1}}i&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(Mt)),e&&It(this._element).toggleClass(Mt)},t.dispose=function t(){It.removeData(this._element,Nt),this._element=null},// Static
i._jQueryInterface=function t(e){return this.each(function(){var t=It(this).data(Nt);t||(t=new i(this),It(this).data(Nt,t)),"toggle"===e&&t[e]()})},s(i,null,[{key:"VERSION",get:function t(){return $t}}]),i}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
It(document).on(Yt.CLICK_DATA_API,Wt,function(t){t.preventDefault();var e=t.target;It(e).hasClass(jt)||(e=It(e).closest(Ut)),Bt._jQueryInterface.call(It(e),"toggle")}).on(Yt.FOCUS_BLUR_DATA_API,Wt,function(t){var e=It(t.target).closest(Ut)[0];It(e).toggleClass(Ft,/^focus(in)?$/.test(t.type))}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
It.fn[Ot]=Bt._jQueryInterface,It.fn[Ot].Constructor=Bt,It.fn[Ot].noConflict=function(){return It.fn[Ot]=Lt,Bt._jQueryInterface},Bt),It,Ot,$t,Nt,Pt,Ht,Lt,Mt,jt,Ft,Wt,zt,qt,Rt,Ut,Yt,Bt,Qt=(Kt="carousel",Vt="4.1.3",Jt="."+(Gt="bs.carousel"),Zt=".data-api",te=(Xt=e).fn[Kt],ee=37,ie=39,oe={interval:5e3,keyboard:!0,slide:!(ne=500),pause:"hover",wrap:!0},se={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},re="next",ae="prev",le="left",ce="right",de={SLIDE:"slide"+Jt,SLID:"slid"+Jt,KEYDOWN:"keydown"+Jt,MOUSEENTER:"mouseenter"+Jt,MOUSELEAVE:"mouseleave"+Jt,TOUCHEND:"touchend"+Jt,LOAD_DATA_API:"load"+Jt+Zt,CLICK_DATA_API:"click"+Jt+Zt},he="carousel",ue="active",pe="slide",fe="carousel-item-right",me="carousel-item-left",ge="carousel-item-next",ve="carousel-item-prev",ye="carousel-item",we=".active",_e=".active.carousel-item",be=".carousel-item",Te=".carousel-item-next, .carousel-item-prev",Se=".carousel-indicators",ke="[data-slide], [data-slide-to]",Ce='[data-ride="carousel"]'
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Ee=
/* */
function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=Xt(t)[0],this._indicatorsElement=this._element.querySelector(Se),this._addEventListeners()}// Getters
var t=r.prototype;
// Public
return t.next=function t(){this._isSliding||this._slide(re)},t.nextWhenVisible=function t(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&Xt(this._element).is(":visible")&&"hidden"!==Xt(this._element).css("visibility")&&this.next()},t.prev=function t(){this._isSliding||this._slide(ae)},t.pause=function t(e){e||(this._isPaused=!0),this._element.querySelector(Te)&&(ft.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function t(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function t(e){var i=this;this._activeElement=this._element.querySelector(_e);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)Xt(this._element).one(de.SLID,function(){return i.to(e)});else{if(n===e)return this.pause(),void this.cycle();var o=n<e?re:ae;this._slide(o,this._items[e])}},t.dispose=function t(){Xt(this._element).off(Jt),Xt.removeData(this._element,Gt),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},// Private
t._getConfig=function t(e){return e=a({},oe,e),ft.typeCheckConfig(Kt,e,se),e},t._addEventListeners=function t(){var e=this;this._config.keyboard&&Xt(this._element).on(de.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(Xt(this._element).on(de.MOUSEENTER,function(t){return e.pause(t)}).on(de.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
Xt(this._element).on(de.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},ne+e._config.interval)}))},t._keydown=function t(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next();break;default:}},t._getItemIndex=function t(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(be)):[],this._items.indexOf(e)},t._getItemByDirection=function t(e,i){var n=e===re,o=e===ae,s=this._getItemIndex(i),r=this._items.length-1,a;if((o&&0===s||n&&s===r)&&!this._config.wrap)return i;var l,c=(s+(e===ae?-1:1))%this._items.length;return-1===c?this._items[this._items.length-1]:this._items[c]},t._triggerSlideEvent=function t(e,i){var n=this._getItemIndex(e),o=this._getItemIndex(this._element.querySelector(_e)),s=Xt.Event(de.SLIDE,{relatedTarget:e,direction:i,from:o,to:n});return Xt(this._element).trigger(s),s},t._setActiveIndicatorElement=function t(e){if(this._indicatorsElement){var i=[].slice.call(this._indicatorsElement.querySelectorAll(we));Xt(i).removeClass(ue);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&Xt(n).addClass(ue)}},t._slide=function t(e,i){var n=this,o=this._element.querySelector(_e),s=this._getItemIndex(o),r=i||o&&this._getItemByDirection(e,o),a=this._getItemIndex(r),l=Boolean(this._interval),c,d,h,u;if(h=e===re?(c=me,d=ge,le):(c=fe,d=ve,ce),r&&Xt(r).hasClass(ue))this._isSliding=!1;else if(!this._triggerSlideEvent(r,h).isDefaultPrevented()&&o&&r){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(r);var p=Xt.Event(de.SLID,{relatedTarget:r,direction:h,from:s,to:a});if(Xt(this._element).hasClass(pe)){Xt(r).addClass(d),ft.reflow(r),Xt(o).addClass(c),Xt(r).addClass(c);var f=ft.getTransitionDurationFromElement(o);Xt(o).one(ft.TRANSITION_END,function(){Xt(r).removeClass(c+" "+d).addClass(ue),Xt(o).removeClass(ue+" "+d+" "+c),n._isSliding=!1,setTimeout(function(){return Xt(n._element).trigger(p)},0)}).emulateTransitionEnd(f)}else Xt(o).removeClass(ue),Xt(r).addClass(ue),this._isSliding=!1,Xt(this._element).trigger(p);l&&this.cycle()}},// Static
r._jQueryInterface=function t(n){return this.each(function(){var t=Xt(this).data(Gt),e=a({},oe,Xt(this).data());"object"==typeof n&&(e=a({},e,n));var i="string"==typeof n?n:e.slide;if(t||(t=new r(this,e),Xt(this).data(Gt,t)),"number"==typeof n)t.to(n);else if("string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}else e.interval&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function t(e){var i=ft.getSelectorFromElement(this);if(i){var n=Xt(i)[0];if(n&&Xt(n).hasClass(he)){var o=a({},Xt(n).data(),Xt(this).data()),s=this.getAttribute("data-slide-to");s&&(o.interval=!1),r._jQueryInterface.call(Xt(n),o),s&&Xt(n).data(Gt).to(s),e.preventDefault()}}},s(r,null,[{key:"VERSION",get:function t(){return Vt}},{key:"Default",get:function t(){return oe}}]),r}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
Xt(document).on(de.CLICK_DATA_API,ke,Ee._dataApiClickHandler),Xt(window).on(de.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(Ce)),e=0,i=t.length;e<i;e++){var n=Xt(t[e]);Ee._jQueryInterface.call(n,n.data())}}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Xt.fn[Kt]=Ee._jQueryInterface,Xt.fn[Kt].Constructor=Ee,Xt.fn[Kt].noConflict=function(){return Xt.fn[Kt]=te,Ee._jQueryInterface},Ee),Xt,Kt,Vt,Gt,Jt,Zt,te,ee,ie,ne,oe,se,re,ae,le,ce,de,he,ue,pe,fe,me,ge,ve,ye,we,_e,be,Te,Se,ke,Ce,Ee,Ae=(De="collapse",Ie="4.1.3",$e="."+(Oe="bs.collapse"),Ne=".data-api",Pe=(xe=e).fn[De],He={toggle:!0,parent:""},Le={toggle:"boolean",parent:"(string|element)"},Me={SHOW:"show"+$e,SHOWN:"shown"+$e,HIDE:"hide"+$e,HIDDEN:"hidden"+$e,CLICK_DATA_API:"click"+$e+Ne},je="show",Fe="collapse",We="collapsing",ze="collapsed",qe="width",Re="height",Ue=".show, .collapsing",Ye='[data-toggle="collapse"]'
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Be=
/* */
function(){function d(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=xe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=[].slice.call(document.querySelectorAll(Ye)),n=0,o=i.length;n<o;n++){var s=i[n],r=ft.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter(function(t){return t===e});null!==r&&0<a.length&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
var t=d.prototype;
// Public
return t.toggle=function t(){xe(this._element).hasClass(je)?this.hide():this.show()},t.show=function t(){var e=this,i,n;if(!this._isTransitioning&&!xe(this._element).hasClass(je)&&(this._parent&&0===(i=[].slice.call(this._parent.querySelectorAll(Ue)).filter(function(t){return t.getAttribute("data-parent")===e._config.parent})).length&&(i=null),!(i&&(n=xe(i).not(this._selector).data(Oe))&&n._isTransitioning))){var o=xe.Event(Me.SHOW);if(xe(this._element).trigger(o),!o.isDefaultPrevented()){i&&(d._jQueryInterface.call(xe(i).not(this._selector),"hide"),n||xe(i).data(Oe,null));var s=this._getDimension();xe(this._element).removeClass(Fe).addClass(We),this._element.style[s]=0,this._triggerArray.length&&xe(this._triggerArray).removeClass(ze).attr("aria-expanded",!0),this.setTransitioning(!0);var r=function t(){xe(e._element).removeClass(We).addClass(Fe).addClass(je),e._element.style[s]="",e.setTransitioning(!1),xe(e._element).trigger(Me.SHOWN)},a,l="scroll"+(s[0].toUpperCase()+s.slice(1)),c=ft.getTransitionDurationFromElement(this._element);xe(this._element).one(ft.TRANSITION_END,r).emulateTransitionEnd(c),this._element.style[s]=this._element[l]+"px"}}},t.hide=function t(){var e=this;if(!this._isTransitioning&&xe(this._element).hasClass(je)){var i=xe.Event(Me.HIDE);if(xe(this._element).trigger(i),!i.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",ft.reflow(this._element),xe(this._element).addClass(We).removeClass(Fe).removeClass(je);var o=this._triggerArray.length;if(0<o)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=ft.getSelectorFromElement(r),l;if(null!==a)xe([].slice.call(document.querySelectorAll(a))).hasClass(je)||xe(r).addClass(ze).attr("aria-expanded",!1)}this.setTransitioning(!0);var c=function t(){e.setTransitioning(!1),xe(e._element).removeClass(We).addClass(Fe).trigger(Me.HIDDEN)};this._element.style[n]="";var d=ft.getTransitionDurationFromElement(this._element);xe(this._element).one(ft.TRANSITION_END,c).emulateTransitionEnd(d)}}},t.setTransitioning=function t(e){this._isTransitioning=e},t.dispose=function t(){xe.removeData(this._element,Oe),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},// Private
t._getConfig=function t(e){return(e=a({},He,e)).toggle=Boolean(e.toggle),// Coerce string values
ft.typeCheckConfig(De,e,Le),e},t._getDimension=function t(){var e;return xe(this._element).hasClass(qe)?qe:Re},t._getParent=function t(){var i=this,e=null;ft.isElement(this._config.parent)?(e=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var n='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(e.querySelectorAll(n));return xe(o).each(function(t,e){i._addAriaAndCollapsedClass(d._getTargetFromElement(e),[e])}),e},t._addAriaAndCollapsedClass=function t(e,i){if(e){var n=xe(e).hasClass(je);i.length&&xe(i).toggleClass(ze,!n).attr("aria-expanded",n)}},// Static
d._getTargetFromElement=function t(e){var i=ft.getSelectorFromElement(e);return i?document.querySelector(i):null},d._jQueryInterface=function t(n){return this.each(function(){var t=xe(this),e=t.data(Oe),i=a({},He,t.data(),"object"==typeof n&&n?n:{});if(!e&&i.toggle&&/show|hide/.test(n)&&(i.toggle=!1),e||(e=new d(this,i),t.data(Oe,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(d,null,[{key:"VERSION",get:function t(){return Ie}},{key:"Default",get:function t(){return He}}]),d}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
xe(document).on(Me.CLICK_DATA_API,Ye,function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===t.currentTarget.tagName&&t.preventDefault();var n=xe(this),e=ft.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));xe(i).each(function(){var t=xe(this),e,i=t.data(Oe)?"toggle":n.data();Be._jQueryInterface.call(t,i)})}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
xe.fn[De]=Be._jQueryInterface,xe.fn[De].Constructor=Be,xe.fn[De].noConflict=function(){return xe.fn[De]=Pe,Be._jQueryInterface},Be),xe,De,Ie,Oe,$e,Ne,Pe,He,Le,Me,je,Fe,We,ze,qe,Re,Ue,Ye,Be,Qe="undefined"!=typeof window&&"undefined"!=typeof document,Xe=["Edge","Trident","Firefox"],Ke=0,Ve=0
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */;Ve<Xe.length;Ve+=1)if(Qe&&0<=navigator.userAgent.indexOf(Xe[Ve])){Ke=1;break}var Ge,Je=Qe&&window.Promise?r:l,Ze=Qe&&!(!window.MSInputMethodContext||!document.documentMode),ti=Qe&&/MSIE 10/.test(navigator.userAgent),ei=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ii=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),ni=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},oi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},si=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ri=si.slice(3),ai="flip",li="clockwise",ci="counterclockwise",di,hi={
/**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
placement:"bottom",
/**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
positionFixed:!1,
/**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
eventsEnabled:!0,
/**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
removeOnDestroy:!1,
/**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
onCreate:function t(){},
/**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
onUpdate:function t(){},
/**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
modifiers:{
/**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
shift:{
/** @prop {number} order=100 - Index used to define the order of execution */
order:100,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ht},
/**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
offset:{
/** @prop {number} order=200 - Index used to define the order of execution */
order:200,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ct,
/** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
offset:0},
/**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
preventOverflow:{
/** @prop {number} order=300 - Index used to define the order of execution */
order:300,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:dt,
/**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
priority:["left","right","top","bottom"],
/**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
padding:5,
/**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
boundariesElement:"scrollParent"},
/**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
keepTogether:{
/** @prop {number} order=400 - Index used to define the order of execution */
order:400,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:rt},
/**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
arrow:{
/** @prop {number} order=500 - Index used to define the order of execution */
order:500,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:it,
/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},
/**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
flip:{
/** @prop {number} order=600 - Index used to define the order of execution */
order:600,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:st,
/**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
behavior:"flip",
/**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
padding:5,
/**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
boundariesElement:"viewport"},
/**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
inner:{
/** @prop {number} order=700 - Index used to define the order of execution */
order:700,
/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:!1,
/** @prop {ModifierFn} */
fn:pt},
/**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
hide:{
/** @prop {number} order=800 - Index used to define the order of execution */
order:800,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:ut},
/**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
computeStyle:{
/** @prop {number} order=850 - Index used to define the order of execution */
order:850,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:tt,
/**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
gpuAcceleration:!0,
/**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
x:"bottom",
/**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
y:"right"},
/**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
applyStyle:{
/** @prop {number} order=900 - Index used to define the order of execution */
order:900,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:!0,
/** @prop {ModifierFn} */
fn:J,
/** @prop {Function} */
onLoad:Z,
/**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
gpuAcceleration:void 0}}},ui=function(){
/**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
function r(t,e,i){var n=this,o=2<arguments.length&&void 0!==i?i:{};ei(this,r),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},
// make update() debounced, so that it only runs at most once-per-tick
this.update=Je(this.update.bind(this)),
// with {} we create a new object with the options inside it
this.options=oi({},r.Defaults,o),
// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},
// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,
// Deep merge modifiers options
this.options.modifiers={},Object.keys(oi({},r.Defaults.modifiers,o.modifiers)).forEach(function(t){n.options.modifiers[t]=oi({},r.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(t){return oi({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(t){t.enabled&&c(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),
// fire the first update to position the popper in the right place
this.update();var s=this.options.eventsEnabled;s&&
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners(),this.state.eventsEnabled=s}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
return ii(r,[{key:"update",value:function t(){return F.call(this)}},{key:"destroy",value:function t(){return q.call(this)}},{key:"enableEventListeners",value:function t(){return B.call(this)}},{key:"disableEventListeners",value:function t(){return X.call(this)}
/**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */
/**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */}]),r}();
/**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
/**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */
ui.Utils=("undefined"!=typeof window?window:global).PopperUtils,ui.placements=si,ui.Defaults=hi;
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
var pi=(mi="dropdown",gi="4.1.3",yi="."+(vi="bs.dropdown"),wi=".data-api",_i=(fi=e).fn[mi],bi=27,Ti=32,Si=9,ki=38,Ci=40,Ei=3,Ai=new RegExp("38|40|27"),xi={HIDE:"hide"+yi,HIDDEN:"hidden"+yi,SHOW:"show"+yi,SHOWN:"shown"+yi,CLICK:"click"+yi,CLICK_DATA_API:"click"+yi+wi,KEYDOWN_DATA_API:"keydown"+yi+wi,KEYUP_DATA_API:"keyup"+yi+wi},Di="disabled",Ii="show",Oi="dropup",$i="dropright",Ni="dropleft",Pi="dropdown-menu-right",Hi="dropdown-menu-left",Li="position-static",Mi='[data-toggle="dropdown"]',ji=".dropdown form",Fi=".dropdown-menu",Wi=".navbar-nav",zi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",qi="top-start",Ri="top-end",Ui="bottom-start",Yi="bottom-end",Bi="right-start",Qi="right-end",Xi="left-start",Ki="left-end",Vi={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gi={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},Ji=
/* */
function(){function d(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}// Getters
var t=d.prototype;
// Public
return t.toggle=function t(){if(!this._element.disabled&&!fi(this._element).hasClass(Di)){var e=d._getParentFromElement(this._element),i=fi(this._menu).hasClass(Ii);if(d._clearMenus(),!i){var n={relatedTarget:this._element},o=fi.Event(xi.SHOW,n);if(fi(e).trigger(o),!o.isDefaultPrevented()){// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){
/**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
if(void 0===ui)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s=this._element;"parent"===this._config.reference?s=e:ft.isElement(this._config.reference)&&(s=this._config.reference,// Check if it's jQuery element
void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&fi(e).addClass(Li),this._popper=new ui(s,this._menu,this._getPopperConfig())}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===fi(e).closest(Wi).length&&fi(document.body).children().on("mouseover",null,fi.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),fi(this._menu).toggleClass(Ii),fi(e).toggleClass(Ii).trigger(fi.Event(xi.SHOWN,n))}}}},t.dispose=function t(){fi.removeData(this._element,vi),fi(this._element).off(yi),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function t(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},// Private
t._addEventListeners=function t(){var e=this;fi(this._element).on(xi.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function t(e){return e=a({},this.constructor.Default,fi(this._element).data(),e),ft.typeCheckConfig(mi,e,this.constructor.DefaultType),e},t._getMenuElement=function t(){if(!this._menu){var e=d._getParentFromElement(this._element);e&&(this._menu=e.querySelector(Fi))}return this._menu},t._getPlacement=function t(){var e=fi(this._element.parentNode),i=Ui;// Handle dropup
return e.hasClass(Oi)?(i=qi,fi(this._menu).hasClass(Pi)&&(i=Ri)):e.hasClass($i)?i=Bi:e.hasClass(Ni)?i=Xi:fi(this._menu).hasClass(Pi)&&(i=Yi),i},t._detectNavbar=function t(){return 0<fi(this._element).closest(".navbar").length},t._getPopperConfig=function t(){var e=this,i={};"function"==typeof this._config.offset?i.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets)||{}),t}:i.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:i,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},// Static
d._jQueryInterface=function t(i){return this.each(function(){var t=fi(this).data(vi),e;if(t||(t=new d(this,"object"==typeof i?i:null),fi(this).data(vi,t)),"string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},d._clearMenus=function t(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var i=[].slice.call(document.querySelectorAll(Mi)),n=0,o=i.length;n<o;n++){var s=d._getParentFromElement(i[n]),r=fi(i[n]).data(vi),a={relatedTarget:i[n]};if(e&&"click"===e.type&&(a.clickEvent=e),r){var l=r._menu;if(fi(s).hasClass(Ii)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&fi.contains(s,e.target))){var c=fi.Event(xi.HIDE,a);fi(s).trigger(c),c.isDefaultPrevented()||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&fi(document.body).children().off("mouseover",null,fi.noop),i[n].setAttribute("aria-expanded","false"),fi(l).removeClass(Ii),fi(s).removeClass(Ii).trigger(fi.Event(xi.HIDDEN,a)))}}}},d._getParentFromElement=function t(e){var i,n=ft.getSelectorFromElement(e);return n&&(i=document.querySelector(n)),i||e.parentNode},// eslint-disable-next-line complexity
d._dataApiKeydownHandler=function t(e){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||fi(e.target).closest(Fi).length)):Ai.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!fi(this).hasClass(Di))){var i=d._getParentFromElement(this),n=fi(i).hasClass(Ii);if((n||27===e.which&&32===e.which)&&(!n||27!==e.which&&32!==e.which)){var o=[].slice.call(i.querySelectorAll(zi));if(0!==o.length){var s=o.indexOf(e.target);38===e.which&&0<s&&
// Up
s--,40===e.which&&s<o.length-1&&
// Down
s++,s<0&&(s=0),o[s].focus()}}else{if(27===e.which){var r=i.querySelector(Mi);fi(r).trigger("focus")}fi(this).trigger("click")}}},s(d,null,[{key:"VERSION",get:function t(){return gi}},{key:"Default",get:function t(){return Vi}},{key:"DefaultType",get:function t(){return Gi}}]),d}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
fi(document).on(xi.KEYDOWN_DATA_API,Mi,Ji._dataApiKeydownHandler).on(xi.KEYDOWN_DATA_API,Fi,Ji._dataApiKeydownHandler).on(xi.CLICK_DATA_API+" "+xi.KEYUP_DATA_API,Ji._clearMenus).on(xi.CLICK_DATA_API,Mi,function(t){t.preventDefault(),t.stopPropagation(),Ji._jQueryInterface.call(fi(this),"toggle")}).on(xi.CLICK_DATA_API,ji,function(t){t.stopPropagation()}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
fi.fn[mi]=Ji._jQueryInterface,fi.fn[mi].Constructor=Ji,fi.fn[mi].noConflict=function(){return fi.fn[mi]=_i,Ji._jQueryInterface},Ji),fi,mi,gi,vi,yi,wi,_i,bi,Ti,Si,ki,Ci,Ei,Ai,xi,Di,Ii,Oi,$i,Ni,Pi,Hi,Li,Mi,ji,Fi,Wi,zi,qi,Ri,Ui,Yi,Bi,Qi,Xi,Ki,Vi,Gi,Ji,Zi=(en="modal",nn="4.1.3",sn="."+(on="bs.modal"),rn=".data-api",an=(tn=e).fn[en],ln=27,cn={backdrop:!0,keyboard:!0,focus:!0,show:!0},dn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},hn={HIDE:"hide"+sn,HIDDEN:"hidden"+sn,SHOW:"show"+sn,SHOWN:"shown"+sn,FOCUSIN:"focusin"+sn,RESIZE:"resize"+sn,CLICK_DISMISS:"click.dismiss"+sn,KEYDOWN_DISMISS:"keydown.dismiss"+sn,MOUSEUP_DISMISS:"mouseup.dismiss"+sn,MOUSEDOWN_DISMISS:"mousedown.dismiss"+sn,CLICK_DATA_API:"click"+sn+rn},un="modal-scrollbar-measure",pn="modal-backdrop",fn="modal-open",mn="fade",gn="show",vn=".modal-dialog",yn='[data-toggle="modal"]',wn='[data-dismiss="modal"]',_n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Tn=
/* */
function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(vn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}// Getters
var t=o.prototype;
// Public
return t.toggle=function t(e){return this._isShown?this.hide():this.show(e)},t.show=function t(e){var i=this;if(!this._isTransitioning&&!this._isShown){tn(this._element).hasClass(mn)&&(this._isTransitioning=!0);var n=tn.Event(hn.SHOW,{relatedTarget:e});tn(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),tn(document.body).addClass(fn),this._setEscapeEvent(),this._setResizeEvent(),tn(this._element).on(hn.CLICK_DISMISS,wn,function(t){return i.hide(t)}),tn(this._dialog).on(hn.MOUSEDOWN_DISMISS,function(){tn(i._element).one(hn.MOUSEUP_DISMISS,function(t){tn(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(e)}))}},t.hide=function t(e){var i=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var n=tn.Event(hn.HIDE);if(tn(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var o=tn(this._element).hasClass(mn);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),tn(document).off(hn.FOCUSIN),tn(this._element).removeClass(gn),tn(this._element).off(hn.CLICK_DISMISS),tn(this._dialog).off(hn.MOUSEDOWN_DISMISS),o){var s=ft.getTransitionDurationFromElement(this._element);tn(this._element).one(ft.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(s)}else this._hideModal()}}},t.dispose=function t(){tn.removeData(this._element,on),tn(window,document,this._element,this._backdrop).off(sn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function t(){this._adjustDialog()},// Private
t._getConfig=function t(e){return e=a({},cn,e),ft.typeCheckConfig(en,e,dn),e},t._showElement=function t(e){var i=this,n=tn(this._element).hasClass(mn);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&ft.reflow(this._element),tn(this._element).addClass(gn),this._config.focus&&this._enforceFocus();var o=tn.Event(hn.SHOWN,{relatedTarget:e}),s=function t(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,tn(i._element).trigger(o)};if(n){var r=ft.getTransitionDurationFromElement(this._element);tn(this._dialog).one(ft.TRANSITION_END,s).emulateTransitionEnd(r)}else s()},t._enforceFocus=function t(){var e=this;tn(document).off(hn.FOCUSIN).on(hn.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===tn(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function t(){var e=this;this._isShown&&this._config.keyboard?tn(this._element).on(hn.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||tn(this._element).off(hn.KEYDOWN_DISMISS)},t._setResizeEvent=function t(){var e=this;this._isShown?tn(window).on(hn.RESIZE,function(t){return e.handleUpdate(t)}):tn(window).off(hn.RESIZE)},t._hideModal=function t(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){tn(document.body).removeClass(fn),e._resetAdjustments(),e._resetScrollbar(),tn(e._element).trigger(hn.HIDDEN)})},t._removeBackdrop=function t(){this._backdrop&&(tn(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function t(e){var i=this,n=tn(this._element).hasClass(mn)?mn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=pn,n&&this._backdrop.classList.add(n),tn(this._backdrop).appendTo(document.body),tn(this._element).on(hn.CLICK_DISMISS,function(t){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),n&&ft.reflow(this._backdrop),tn(this._backdrop).addClass(gn),!e)return;if(!n)return void e();var o=ft.getTransitionDurationFromElement(this._backdrop);tn(this._backdrop).one(ft.TRANSITION_END,e).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){tn(this._backdrop).removeClass(gn);var s=function t(){i._removeBackdrop(),e&&e()};if(tn(this._element).hasClass(mn)){var r=ft.getTransitionDurationFromElement(this._backdrop);tn(this._backdrop).one(ft.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else e&&e()},// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
t._adjustDialog=function t(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function t(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function t(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function t(){var o=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var e=[].slice.call(document.querySelectorAll(_n)),i=[].slice.call(document.querySelectorAll(bn));// Adjust fixed content padding
tn(e).each(function(t,e){var i=e.style.paddingRight,n=tn(e).css("padding-right");tn(e).data("padding-right",i).css("padding-right",parseFloat(n)+o._scrollbarWidth+"px")}),// Adjust sticky content margin
tn(i).each(function(t,e){var i=e.style.marginRight,n=tn(e).css("margin-right");tn(e).data("margin-right",i).css("margin-right",parseFloat(n)-o._scrollbarWidth+"px")});// Adjust body padding
var n=document.body.style.paddingRight,s=tn(document.body).css("padding-right");tn(document.body).data("padding-right",n).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}},t._resetScrollbar=function t(){
// Restore fixed content padding
var e=[].slice.call(document.querySelectorAll(_n));tn(e).each(function(t,e){var i=tn(e).data("padding-right");tn(e).removeData("padding-right"),e.style.paddingRight=i||""});// Restore sticky content
var i=[].slice.call(document.querySelectorAll(""+bn));tn(i).each(function(t,e){var i=tn(e).data("margin-right");void 0!==i&&tn(e).css("margin-right",i).removeData("margin-right")});// Restore body padding
var n=tn(document.body).data("padding-right");tn(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function t(){
// thx d.walsh
var e=document.createElement("div");e.className=un,document.body.appendChild(e);var i=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),i},// Static
o._jQueryInterface=function t(i,n){return this.each(function(){var t=tn(this).data(on),e=a({},cn,tn(this).data(),"object"==typeof i&&i?i:{});if(t||(t=new o(this,e),tn(this).data(on,t)),"string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i](n)}else e.show&&t.show(n)})},s(o,null,[{key:"VERSION",get:function t(){return nn}},{key:"Default",get:function t(){return cn}}]),o}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
tn(document).on(hn.CLICK_DATA_API,yn,function(t){var e=this,i,n=ft.getSelectorFromElement(this);n&&(i=document.querySelector(n));var o=tn(i).data(on)?"toggle":a({},tn(i).data(),tn(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=tn(i).one(hn.SHOW,function(t){t.isDefaultPrevented()||s.one(hn.HIDDEN,function(){tn(e).is(":visible")&&e.focus()})});Tn._jQueryInterface.call(tn(i),o,this)}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=an,Tn._jQueryInterface},Tn),tn,en,nn,on,sn,rn,an,ln,cn,dn,hn,un,pn,fn,mn,gn,vn,yn,wn,_n,bn,Tn,Sn=(Cn="tooltip",En="4.1.3",xn="."+(An="bs.tooltip"),Dn=(kn=e).fn[Cn],In="bs-tooltip",On=new RegExp("(^|\\s)"+In+"\\S+","g"),Pn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Nn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!($n={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},Ln="out",Mn={HIDE:"hide"+xn,HIDDEN:"hidden"+xn,SHOW:(Hn="show")+xn,SHOWN:"shown"+xn,INSERTED:"inserted"+xn,CLICK:"click"+xn,FOCUSIN:"focusin"+xn,FOCUSOUT:"focusout"+xn,MOUSEENTER:"mouseenter"+xn,MOUSELEAVE:"mouseleave"+xn},jn="fade",Fn="show",Wn=".tooltip",zn=".tooltip-inner",qn=".arrow",Rn="hover",Un="focus",Yn="click",Bn="manual"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Qn=
/* */
function(){function n(t,e){
/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===ui)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}// Getters
var t=n.prototype;
// Public
return t.enable=function t(){this._isEnabled=!0},t.disable=function t(){this._isEnabled=!1},t.toggleEnabled=function t(){this._isEnabled=!this._isEnabled},t.toggle=function t(e){if(this._isEnabled)if(e){var i=this.constructor.DATA_KEY,n=kn(e.currentTarget).data(i);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),kn(e.currentTarget).data(i,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(kn(this.getTipElement()).hasClass(Fn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function t(){clearTimeout(this._timeout),kn.removeData(this.element,this.constructor.DATA_KEY),kn(this.element).off(this.constructor.EVENT_KEY),kn(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&kn(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function t(){var i=this;if("none"===kn(this.element).css("display"))throw new Error("Please use show on visible elements");var e=kn.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){kn(this.element).trigger(e);var n=kn.contains(this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!n)return;var o=this.getTipElement(),s=ft.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&kn(o).addClass(jn);var r="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(r);this.addAttachmentClass(a);var l=!1===this.config.container?document.body:kn(document).find(this.config.container);kn(o).data(this.constructor.DATA_KEY,this),kn.contains(this.element.ownerDocument.documentElement,this.tip)||kn(o).appendTo(l),kn(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new ui(this.element,o,{placement:a,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:qn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function t(e){e.originalPlacement!==e.placement&&i._handlePopperPlacementChange(e)},onUpdate:function t(e){i._handlePopperPlacementChange(e)}}),kn(o).addClass(Fn),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&kn(document.body).children().on("mouseover",null,kn.noop);var c=function t(){i.config.animation&&i._fixTransition();var e=i._hoverState;i._hoverState=null,kn(i.element).trigger(i.constructor.Event.SHOWN),e===Ln&&i._leave(null,i)};if(kn(this.tip).hasClass(jn)){var d=ft.getTransitionDurationFromElement(this.tip);kn(this.tip).one(ft.TRANSITION_END,c).emulateTransitionEnd(d)}else c()}},t.hide=function t(e){var i=this,n=this.getTipElement(),o=kn.Event(this.constructor.Event.HIDE),s=function t(){i._hoverState!==Hn&&n.parentNode&&n.parentNode.removeChild(n),i._cleanTipClass(),i.element.removeAttribute("aria-describedby"),kn(i.element).trigger(i.constructor.Event.HIDDEN),null!==i._popper&&i._popper.destroy(),e&&e()};if(kn(this.element).trigger(o),!o.isDefaultPrevented()){if(kn(n).removeClass(Fn),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&kn(document.body).children().off("mouseover",null,kn.noop),this._activeTrigger[Yn]=!1,this._activeTrigger[Un]=!1,this._activeTrigger[Rn]=!1,kn(this.tip).hasClass(jn)){var r=ft.getTransitionDurationFromElement(n);kn(n).one(ft.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},t.update=function t(){null!==this._popper&&this._popper.scheduleUpdate()},// Protected
t.isWithContent=function t(){return Boolean(this.getTitle())},t.addAttachmentClass=function t(e){kn(this.getTipElement()).addClass(In+"-"+e)},t.getTipElement=function t(){return this.tip=this.tip||kn(this.config.template)[0],this.tip},t.setContent=function t(){var e=this.getTipElement();this.setElementContent(kn(e.querySelectorAll(zn)),this.getTitle()),kn(e).removeClass(jn+" "+Fn)},t.setElementContent=function t(e,i){var n=this.config.html;"object"==typeof i&&(i.nodeType||i.jquery)?
// Content is a DOM node or a jQuery
n?kn(i).parent().is(e)||e.empty().append(i):e.text(kn(i).text()):e[n?"html":"text"](i)},t.getTitle=function t(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},// Private
t._getAttachment=function t(e){return Nn[e.toUpperCase()]},t._setListeners=function t(){var n=this,e;this.config.trigger.split(" ").forEach(function(t){if("click"===t)kn(n.element).on(n.constructor.Event.CLICK,n.config.selector,function(t){return n.toggle(t)});else if(t!==Bn){var e=t===Rn?n.constructor.Event.MOUSEENTER:n.constructor.Event.FOCUSIN,i=t===Rn?n.constructor.Event.MOUSELEAVE:n.constructor.Event.FOCUSOUT;kn(n.element).on(e,n.config.selector,function(t){return n._enter(t)}).on(i,n.config.selector,function(t){return n._leave(t)})}kn(n.element).closest(".modal").on("hide.bs.modal",function(){return n.hide()})}),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function t(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function t(e,i){var n=this.constructor.DATA_KEY;(i=i||kn(e.currentTarget).data(n))||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),kn(e.currentTarget).data(n,i)),e&&(i._activeTrigger["focusin"===e.type?Un:Rn]=!0),kn(i.getTipElement()).hasClass(Fn)||i._hoverState===Hn?i._hoverState=Hn:(clearTimeout(i._timeout),i._hoverState=Hn,i.config.delay&&i.config.delay.show?i._timeout=setTimeout(function(){i._hoverState===Hn&&i.show()},i.config.delay.show):i.show())},t._leave=function t(e,i){var n=this.constructor.DATA_KEY;(i=i||kn(e.currentTarget).data(n))||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),kn(e.currentTarget).data(n,i)),e&&(i._activeTrigger["focusout"===e.type?Un:Rn]=!1),i._isWithActiveTrigger()||(clearTimeout(i._timeout),i._hoverState=Ln,i.config.delay&&i.config.delay.hide?i._timeout=setTimeout(function(){i._hoverState===Ln&&i.hide()},i.config.delay.hide):i.hide())},t._isWithActiveTrigger=function t(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},t._getConfig=function t(e){return"number"==typeof(e=a({},this.constructor.Default,kn(this.element).data(),"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),ft.typeCheckConfig(Cn,e,this.constructor.DefaultType),e},t._getDelegateConfig=function t(){var e={};if(this.config)for(var i in this.config)this.constructor.Default[i]!==this.config[i]&&(e[i]=this.config[i]);return e},t._cleanTipClass=function t(){var e=kn(this.getTipElement()),i=e.attr("class").match(On);null!==i&&i.length&&e.removeClass(i.join(""))},t._handlePopperPlacementChange=function t(e){var i=e.instance;this.tip=i.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},t._fixTransition=function t(){var e=this.getTipElement(),i=this.config.animation;null===e.getAttribute("x-placement")&&(kn(e).removeClass(jn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=i)},// Static
n._jQueryInterface=function t(i){return this.each(function(){var t=kn(this).data(An),e="object"==typeof i&&i;if((t||!/dispose|hide/.test(i))&&(t||(t=new n(this,e),kn(this).data(An,t)),"string"==typeof i)){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(n,null,[{key:"VERSION",get:function t(){return En}},{key:"Default",get:function t(){return Pn}},{key:"NAME",get:function t(){return Cn}},{key:"DATA_KEY",get:function t(){return An}},{key:"Event",get:function t(){return Mn}},{key:"EVENT_KEY",get:function t(){return xn}},{key:"DefaultType",get:function t(){return $n}}]),n}(),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
kn.fn[Cn]=Qn._jQueryInterface,kn.fn[Cn].Constructor=Qn,kn.fn[Cn].noConflict=function(){return kn.fn[Cn]=Dn,Qn._jQueryInterface},Qn),kn,Cn,En,An,xn,Dn,In,On,$n,Nn,Pn,Hn,Ln,Mn,jn,Fn,Wn,zn,qn,Rn,Un,Yn,Bn,Qn,Xn=(Vn="popover",Gn="4.1.3",Zn="."+(Jn="bs.popover"),to=(Kn=e).fn[Vn],eo="bs-popover",io=new RegExp("(^|\\s)"+eo+"\\S+","g"),no=a({},Sn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),oo=a({},Sn.DefaultType,{content:"(string|element|function)"}),so="fade",ao=".popover-header",lo=".popover-body",co={HIDE:"hide"+Zn,HIDDEN:"hidden"+Zn,SHOW:(ro="show")+Zn,SHOWN:"shown"+Zn,INSERTED:"inserted"+Zn,CLICK:"click"+Zn,FOCUSIN:"focusin"+Zn,FOCUSOUT:"focusout"+Zn,MOUSEENTER:"mouseenter"+Zn,MOUSELEAVE:"mouseleave"+Zn
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */},ho=
/* */
function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var e=n.prototype;
// Overrides
return e.isWithContent=function t(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function t(e){Kn(this.getTipElement()).addClass(eo+"-"+e)},e.getTipElement=function t(){return this.tip=this.tip||Kn(this.config.template)[0],this.tip},e.setContent=function t(){var e=Kn(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent(e.find(ao),this.getTitle());var i=this._getContent();"function"==typeof i&&(i=i.call(this.element)),this.setElementContent(e.find(lo),i),e.removeClass(so+" "+ro)},// Private
e._getContent=function t(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function t(){var e=Kn(this.getTipElement()),i=e.attr("class").match(io);null!==i&&0<i.length&&e.removeClass(i.join(""))},// Static
n._jQueryInterface=function t(i){return this.each(function(){var t=Kn(this).data(Jn),e="object"==typeof i?i:null;if((t||!/destroy|hide/.test(i))&&(t||(t=new n(this,e),Kn(this).data(Jn,t)),"string"==typeof i)){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(n,null,[{key:"VERSION",
// Getters
get:function t(){return Gn}},{key:"Default",get:function t(){return no}},{key:"NAME",get:function t(){return Vn}},{key:"DATA_KEY",get:function t(){return Jn}},{key:"Event",get:function t(){return co}},{key:"EVENT_KEY",get:function t(){return Zn}},{key:"DefaultType",get:function t(){return oo}}]),n}(Sn),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Kn.fn[Vn]=ho._jQueryInterface,Kn.fn[Vn].Constructor=ho,Kn.fn[Vn].noConflict=function(){return Kn.fn[Vn]=to,ho._jQueryInterface},ho),Kn,Vn,Gn,Jn,Zn,to,eo,io,no,oo,so,ro,ao,lo,co,ho,uo=(fo="scrollspy",mo="4.1.3",vo="."+(go="bs.scrollspy"),yo=".data-api",wo=(po=e).fn[fo],_o={offset:10,method:"auto",target:""},bo={offset:"number",method:"string",target:"(string|element)"},To={ACTIVATE:"activate"+vo,SCROLL:"scroll"+vo,LOAD_DATA_API:"load"+vo+yo},So="dropdown-item",ko="dropdown-menu",Co="active",Eo='[data-spy="scroll"]',Ao=".active",xo=".nav, .list-group",Do=".nav-link",Io=".nav-item",Oo=".list-group-item",$o=".dropdown",No=".dropdown-item",Po=".dropdown-toggle",Ho="offset",Lo="position"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,Mo=
/* */
function(){function n(t,e){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Do+","+this._config.target+" "+Oo+","+this._config.target+" "+No,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,po(this._scrollElement).on(To.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}// Getters
var t=n.prototype;
// Public
return t.refresh=function t(){var e=this,i=this._scrollElement===this._scrollElement.window?Ho:Lo,o="auto"===this._config.method?i:this._config.method,s=o===Lo?this._getScrollTop():0,n;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,i=ft.getSelectorFromElement(t);if(i&&(e=document.querySelector(i)),e){var n=e.getBoundingClientRect();if(n.width||n.height)
// TODO (fat): remove sketch reliance on jQuery position/offset
return[po(e)[o]().top+s,i]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function t(){po.removeData(this._element,go),po(this._scrollElement).off(vo),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},// Private
t._getConfig=function t(e){if("string"!=typeof(e=a({},_o,"object"==typeof e&&e?e:{})).target){var i=po(e.target).attr("id");i||(i=ft.getUID(fo),po(e.target).attr("id",i)),e.target="#"+i}return ft.typeCheckConfig(fo,e,bo),e},t._getScrollTop=function t(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function t(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function t(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function t(){var e=this._getScrollTop()+this._config.offset,i=this._getScrollHeight(),n=this._config.offset+i-this._getOffsetHeight();if(this._scrollHeight!==i&&this.refresh(),n<=e){var o=this._targets[this._targets.length-1];this._activeTarget!==o&&this._activate(o)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var s,r=this._offsets.length;r--;){var a;this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function t(e){this._activeTarget=e,this._clear();var i=this._selector.split(",");// eslint-disable-next-line arrow-body-style
i=i.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=po([].slice.call(document.querySelectorAll(i.join(","))));n.hasClass(So)?(n.closest($o).find(Po).addClass(Co),n.addClass(Co)):(
// Set triggered link as active
n.addClass(Co),// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
n.parents(xo).prev(Do+", "+Oo).addClass(Co),// Handle special case when .nav-link is inside .nav-item
n.parents(xo).prev(Io).children(Do).addClass(Co)),po(this._scrollElement).trigger(To.ACTIVATE,{relatedTarget:e})},t._clear=function t(){var e=[].slice.call(document.querySelectorAll(this._selector));po(e).filter(Ao).removeClass(Co)},// Static
n._jQueryInterface=function t(i){return this.each(function(){var t=po(this).data(go),e;if(t||(t=new n(this,"object"==typeof i&&i),po(this).data(go,t)),"string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(n,null,[{key:"VERSION",get:function t(){return mo}},{key:"Default",get:function t(){return _o}}]),n}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
po(window).on(To.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(Eo)),e,i=t.length;i--;){var n=po(t[i]);Mo._jQueryInterface.call(n,n.data())}}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
po.fn[fo]=Mo._jQueryInterface,po.fn[fo].Constructor=Mo,po.fn[fo].noConflict=function(){return po.fn[fo]=wo,Mo._jQueryInterface},Mo),po,fo,mo,go,vo,yo,wo,_o,bo,To,So,ko,Co,Eo,Ao,xo,Do,Io,Oo,$o,No,Po,Ho,Lo,Mo,jo=(Wo="tab",zo="4.1.3",Ro="."+(qo="bs.tab"),Uo=".data-api",Yo=(Fo=e).fn.tab,Bo={HIDE:"hide"+Ro,HIDDEN:"hidden"+Ro,SHOW:"show"+Ro,SHOWN:"shown"+Ro,CLICK_DATA_API:"click"+Ro+Uo},Qo="dropdown-menu",Xo="active",Ko="disabled",Vo="fade",Go="show",Jo=".dropdown",Zo=".nav, .list-group",ts=".active",es="> li > .active",is='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',ns=".dropdown-toggle",os="> .dropdown-menu .active"
/**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */,ss=
/* */
function(){function n(t){this._element=t}// Getters
var t=n.prototype;
// Public
return t.show=function t(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&Fo(this._element).hasClass(Xo)||Fo(this._element).hasClass(Ko))){var e,o,i=Fo(this._element).closest(Zo)[0],s=ft.getSelectorFromElement(this._element);if(i){var r="UL"===i.nodeName?es:ts;o=(o=Fo.makeArray(Fo(i).find(r)))[o.length-1]}var a=Fo.Event(Bo.HIDE,{relatedTarget:this._element}),l=Fo.Event(Bo.SHOW,{relatedTarget:o});if(o&&Fo(o).trigger(a),Fo(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(e=document.querySelector(s)),this._activate(this._element,i);var c=function t(){var e=Fo.Event(Bo.HIDDEN,{relatedTarget:n._element}),i=Fo.Event(Bo.SHOWN,{relatedTarget:o});Fo(o).trigger(e),Fo(n._element).trigger(i)};e?this._activate(e,e.parentNode,c):c()}}},t.dispose=function t(){Fo.removeData(this._element,qo),this._element=null},// Private
t._activate=function t(e,i,n){var o=this,s,r=(s="UL"===i.nodeName?Fo(i).find(es):Fo(i).children(ts))[0],a=n&&r&&Fo(r).hasClass(Vo),l=function t(){return o._transitionComplete(e,r,n)};if(r&&a){var c=ft.getTransitionDurationFromElement(r);Fo(r).one(ft.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},t._transitionComplete=function t(e,i,n){if(i){Fo(i).removeClass(Go+" "+Xo);var o=Fo(i.parentNode).find(os)[0];o&&Fo(o).removeClass(Xo),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}if(Fo(e).addClass(Xo),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),ft.reflow(e),Fo(e).addClass(Go),e.parentNode&&Fo(e.parentNode).hasClass(Qo)){var s=Fo(e).closest(Jo)[0];if(s){var r=[].slice.call(s.querySelectorAll(ns));Fo(r).addClass(Xo)}e.setAttribute("aria-expanded",!0)}n&&n()},// Static
n._jQueryInterface=function t(i){return this.each(function(){var t=Fo(this),e=t.data(qo);if(e||(e=new n(this),t.data(qo,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(n,null,[{key:"VERSION",get:function t(){return zo}}]),n}(),
/**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
Fo(document).on(Bo.CLICK_DATA_API,is,function(t){t.preventDefault(),ss._jQueryInterface.call(Fo(this),"show")}),
/**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
Fo.fn.tab=ss._jQueryInterface,Fo.fn.tab.Constructor=ss,Fo.fn.tab.noConflict=function(){return Fo.fn.tab=Yo,ss._jQueryInterface},ss),Fo,Wo,zo,qo,Ro,Uo,Yo,Bo,Qo,Xo,Ko,Vo,Go,Jo,Zo,ts,es,is,ns,os,ss;
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split("."),i=1,n=2,o=9,s=1,r=4;if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=ft,t.Alert=mt,t.Button=Dt,t.Carousel=Qt,t.Collapse=Ae,t.Dropdown=pi,t.Modal=Zi,t.Popover=Xn,t.Scrollspy=uo,t.Tab=jo,t.Tooltip=Sn,Object.defineProperty(t,"__esModule",{value:!0})}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(d){"use strict";var a=window.Slick||{};(a=function(){function t(t,e){var i=this,n;i.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:d(t),appendDots:d(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,e){return d('<button type="button" />').text(e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},i.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},d.extend(i,i.initials),i.activeBreakpoint=null,i.animType=null,i.animProp=null,i.breakpoints=[],i.breakpointSettings=[],i.cssTransitions=!1,i.focussed=!1,i.interrupted=!1,i.hidden="hidden",i.paused=!0,i.positionProp=null,i.respondTo=null,i.rowCount=1,i.shouldClick=!0,i.$slider=d(t),i.$slidesCache=null,i.transformType=null,i.transitionType=null,i.visibilityChange="visibilitychange",i.windowWidth=0,i.windowTimer=null,n=d(t).data("slick")||{},i.options=d.extend({},i.defaults,e,n),i.currentSlide=i.options.initialSlide,i.originalSettings=i.options,void 0!==document.mozHidden?(i.hidden="mozHidden",i.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(i.hidden="webkitHidden",i.visibilityChange="webkitvisibilitychange"),i.autoPlay=d.proxy(i.autoPlay,i),i.autoPlayClear=d.proxy(i.autoPlayClear,i),i.autoPlayIterator=d.proxy(i.autoPlayIterator,i),i.changeSlide=d.proxy(i.changeSlide,i),i.clickHandler=d.proxy(i.clickHandler,i),i.selectHandler=d.proxy(i.selectHandler,i),i.setPosition=d.proxy(i.setPosition,i),i.swipeHandler=d.proxy(i.swipeHandler,i),i.dragHandler=d.proxy(i.dragHandler,i),i.keyHandler=d.proxy(i.keyHandler,i),i.instanceUid=o++,
// A simple way to check for HTML strings
// Strict HTML recognition (must start with <)
// Extracted from jQuery v1.11 source
i.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,i.registerBreakpoints(),i.init(!0)}var o=0;return t}()).prototype.activateADA=function(){var t;this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},a.prototype.addSlide=a.prototype.slickAdd=function(t,e,i){var n=this;if("boolean"==typeof e)i=e,e=null;else if(e<0||e>=n.slideCount)return!1;n.unload(),"number"==typeof e?0===e&&0===n.$slides.length?d(t).appendTo(n.$slideTrack):i?d(t).insertBefore(n.$slides.eq(e)):d(t).insertAfter(n.$slides.eq(e)):!0===i?d(t).prependTo(n.$slideTrack):d(t).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(t,e){d(e).attr("data-slick-index",t)}),n.$slidesCache=n.$slides,n.reinit()},a.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},a.prototype.animateSlide=function(t,e){var i={},n=this;n.animateHeight(),!0===n.options.rtl&&!1===n.options.vertical&&(t=-t),!1===n.transformsEnabled?!1===n.options.vertical?n.$slideTrack.animate({left:t},n.options.speed,n.options.easing,e):n.$slideTrack.animate({top:t},n.options.speed,n.options.easing,e):!1===n.cssTransitions?(!0===n.options.rtl&&(n.currentLeft=-n.currentLeft),d({animStart:n.currentLeft}).animate({animStart:t},{duration:n.options.speed,easing:n.options.easing,step:function(t){t=Math.ceil(t),!1===n.options.vertical?i[n.animType]="translate("+t+"px, 0px)":i[n.animType]="translate(0px,"+t+"px)",n.$slideTrack.css(i)},complete:function(){e&&e.call()}})):(n.applyTransition(),t=Math.ceil(t),!1===n.options.vertical?i[n.animType]="translate3d("+t+"px, 0px, 0px)":i[n.animType]="translate3d(0px,"+t+"px, 0px)",n.$slideTrack.css(i),e&&setTimeout(function(){n.disableTransition(),e.call()},n.options.speed))},a.prototype.getNavTarget=function(){var t=this,e=t.options.asNavFor;return e&&null!==e&&(e=d(e).not(t.$slider)),e},a.prototype.asNavFor=function(e){var t,i=this.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var t=d(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},a.prototype.applyTransition=function(t){var e=this,i={};!1===e.options.fade?i[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:i[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},a.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},a.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},a.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1==0&&(t.direction=1))),t.slideHandler(e))},a.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=d(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=d(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},a.prototype.buildDots=function(){var t=this,e,i;if(!0===t.options.dots&&t.slideCount>t.options.slidesToShow){for(t.$slider.addClass("slick-dotted"),i=d("<ul />").addClass(t.options.dotsClass),e=0;e<=t.getDotCount();e+=1)i.append(d("<li />").append(t.options.customPaging.call(this,t,e)));t.$dots=i.appendTo(t.options.appendDots),t.$dots.find("li").first().addClass("slick-active")}},a.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,e){d(e).attr("data-slick-index",t).data("originalStyling",d(e).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?d('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),d("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},a.prototype.buildRows=function(){var t=this,e,i,n,o,s,r,a;if(o=document.createDocumentFragment(),r=t.$slider.children(),0<t.options.rows){for(a=t.options.slidesPerRow*t.options.rows,s=Math.ceil(r.length/a),e=0;e<s;e++){var l=document.createElement("div");for(i=0;i<t.options.rows;i++){var c=document.createElement("div");for(n=0;n<t.options.slidesPerRow;n++){var d=e*a+(i*t.options.slidesPerRow+n);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}o.appendChild(l)}t.$slider.empty().append(o),t.$slider.children().children().children().css({width:100/t.options.slidesPerRow+"%",display:"inline-block"})}},a.prototype.checkResponsive=function(t,e){var i=this,n,o,s,r=!1,a=i.$slider.width(),l=window.innerWidth||d(window).width();if("window"===i.respondTo?s=l:"slider"===i.respondTo?s=a:"min"===i.respondTo&&(s=Math.min(l,a)),i.options.responsive&&i.options.responsive.length&&null!==i.options.responsive){for(n in o=null,i.breakpoints)i.breakpoints.hasOwnProperty(n)&&(!1===i.originalSettings.mobileFirst?s<i.breakpoints[n]&&(o=i.breakpoints[n]):s>i.breakpoints[n]&&(o=i.breakpoints[n]));null!==o?null!==i.activeBreakpoint?(o!==i.activeBreakpoint||e)&&(i.activeBreakpoint=o,"unslick"===i.breakpointSettings[o]?i.unslick(o):(i.options=d.extend({},i.originalSettings,i.breakpointSettings[o]),!0===t&&(i.currentSlide=i.options.initialSlide),i.refresh(t)),r=o):(i.activeBreakpoint=o,"unslick"===i.breakpointSettings[o]?i.unslick(o):(i.options=d.extend({},i.originalSettings,i.breakpointSettings[o]),!0===t&&(i.currentSlide=i.options.initialSlide),i.refresh(t)),r=o):null!==i.activeBreakpoint&&(i.activeBreakpoint=null,i.options=i.originalSettings,!0===t&&(i.currentSlide=i.options.initialSlide),i.refresh(t),r=o),
// only trigger breakpoints during an actual break. not on initialize.
t||!1===r||i.$slider.trigger("breakpoint",[i,r])}},a.prototype.changeSlide=function(t,e){var i=this,n=d(t.currentTarget),o,s,r;
// If target is a link, prevent default action.
switch(n.is("a")&&t.preventDefault(),
// If target is not the <li> element (ie: a child), find the <li>.
n.is("li")||(n=n.closest("li")),o=(r=i.slideCount%i.options.slidesToScroll!=0)?0:(i.slideCount-i.currentSlide)%i.options.slidesToScroll,t.data.message){case"previous":s=0===o?i.options.slidesToScroll:i.options.slidesToShow-o,i.slideCount>i.options.slidesToShow&&i.slideHandler(i.currentSlide-s,!1,e);break;case"next":s=0===o?i.options.slidesToScroll:o,i.slideCount>i.options.slidesToShow&&i.slideHandler(i.currentSlide+s,!1,e);break;case"index":var a=0===t.data.index?0:t.data.index||n.index()*i.options.slidesToScroll;i.slideHandler(i.checkNavigable(a),!1,e),n.children().trigger("focus");break;default:return}},a.prototype.checkNavigable=function(t){var e,i,n;if(n=0,t>(i=this.getNavigableIndexes())[i.length-1])t=i[i.length-1];else for(var o in i){if(t<i[o]){t=n;break}n=i[o]}return t},a.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(d("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",d.proxy(t.interrupt,t,!0)).off("mouseleave.slick",d.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),d(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&d(t.$slideTrack).children().off("click.slick",t.selectHandler),d(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),d(window).off("resize.slick.slick-"+t.instanceUid,t.resize),d("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),d(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},a.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",d.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",d.proxy(t.interrupt,t,!1))},a.prototype.cleanUpRows=function(){var t=this,e;0<t.options.rows&&((e=t.$slides.children().children()).removeAttr("style"),t.$slider.empty().append(e))},a.prototype.clickHandler=function(t){var e;!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},a.prototype.destroy=function(t){var e=this;e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),d(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){d(this).attr("style",d(this).data("originalStyling"))}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$slider.removeClass("slick-dotted"),e.unslicked=!0,t||e.$slider.trigger("destroy",[e])},a.prototype.disableTransition=function(t){var e=this,i={};i[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},a.prototype.fadeSlide=function(t,e){var i=this;!1===i.cssTransitions?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout(function(){i.disableTransition(t),e.call()},i.options.speed))},a.prototype.fadeSlideOut=function(t){var e=this;!1===e.cssTransitions?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},a.prototype.filterSlides=a.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},a.prototype.focusHandler=function(){var i=this;i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var e=d(this);setTimeout(function(){i.options.pauseOnFocus&&(i.focussed=e.is(":focus"),i.autoPlay())},0)})},a.prototype.getCurrent=a.prototype.slickCurrentSlide=function(){var t;return this.currentSlide},a.prototype.getDotCount=function(){var t=this,e=0,i=0,n=0;if(!0===t.options.infinite)if(t.slideCount<=t.options.slidesToShow)++n;else for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)n=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else n=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return n-1},a.prototype.getLeft=function(t){var e=this,i,n,o=0,s,r;return e.slideOffset=0,n=e.$slides.first().outerHeight(!0),!0===e.options.infinite?(e.slideCount>e.options.slidesToShow&&(e.slideOffset=e.slideWidth*e.options.slidesToShow*-1,r=-1,!0===e.options.vertical&&!0===e.options.centerMode&&(2===e.options.slidesToShow?r=-1.5:1===e.options.slidesToShow&&(r=-2)),o=n*e.options.slidesToShow*r),e.slideCount%e.options.slidesToScroll!=0&&t+e.options.slidesToScroll>e.slideCount&&e.slideCount>e.options.slidesToShow&&(o=t>e.slideCount?(e.slideOffset=(e.options.slidesToShow-(t-e.slideCount))*e.slideWidth*-1,(e.options.slidesToShow-(t-e.slideCount))*n*-1):(e.slideOffset=e.slideCount%e.options.slidesToScroll*e.slideWidth*-1,e.slideCount%e.options.slidesToScroll*n*-1))):t+e.options.slidesToShow>e.slideCount&&(e.slideOffset=(t+e.options.slidesToShow-e.slideCount)*e.slideWidth,o=(t+e.options.slidesToShow-e.slideCount)*n),e.slideCount<=e.options.slidesToShow&&(o=e.slideOffset=0),!0===e.options.centerMode&&e.slideCount<=e.options.slidesToShow?e.slideOffset=e.slideWidth*Math.floor(e.options.slidesToShow)/2-e.slideWidth*e.slideCount/2:!0===e.options.centerMode&&!0===e.options.infinite?e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)-e.slideWidth:!0===e.options.centerMode&&(e.slideOffset=0,e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)),i=!1===e.options.vertical?t*e.slideWidth*-1+e.slideOffset:t*n*-1+o,!0===e.options.variableWidth&&(s=e.slideCount<=e.options.slidesToShow||!1===e.options.infinite?e.$slideTrack.children(".slick-slide").eq(t):e.$slideTrack.children(".slick-slide").eq(t+e.options.slidesToShow),i=!0===e.options.rtl?s[0]?-1*(e.$slideTrack.width()-s[0].offsetLeft-s.width()):0:s[0]?-1*s[0].offsetLeft:0,!0===e.options.centerMode&&(s=e.slideCount<=e.options.slidesToShow||!1===e.options.infinite?e.$slideTrack.children(".slick-slide").eq(t):e.$slideTrack.children(".slick-slide").eq(t+e.options.slidesToShow+1),i=!0===e.options.rtl?s[0]?-1*(e.$slideTrack.width()-s[0].offsetLeft-s.width()):0:s[0]?-1*s[0].offsetLeft:0,i+=(e.$list.width()-s.outerWidth())/2)),i},a.prototype.getOption=a.prototype.slickGetOption=function(t){var e;return this.options[t]},a.prototype.getNavigableIndexes=function(){var t=this,e=0,i=0,n=[],o;for(o=!1===t.options.infinite?t.slideCount:(e=-1*t.options.slidesToScroll,i=-1*t.options.slidesToScroll,2*t.slideCount);e<o;)n.push(e),e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return n},a.prototype.getSlick=function(){return this},a.prototype.getSlideCount=function(){var i=this,t,n,o;return o=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0,!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each(function(t,e){if(e.offsetLeft-o+d(e).outerWidth()/2>-1*i.swipeLeft)return n=e,!1}),t=Math.abs(d(n).attr("data-slick-index")-i.currentSlide)||1):i.options.slidesToScroll},a.prototype.goTo=a.prototype.slickGoTo=function(t,e){var i;this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},a.prototype.init=function(t){var e=this;d(e.$slider).hasClass("slick-initialized")||(d(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),e.checkResponsive(!0),e.focusHandler()),t&&e.$slider.trigger("init",[e]),!0===e.options.accessibility&&e.initADA(),e.options.autoplay&&(e.paused=!1,e.autoPlay())},a.prototype.initADA=function(){var n=this,i=Math.ceil(n.slideCount/n.options.slidesToShow),o=n.getNavigableIndexes().filter(function(t){return 0<=t&&t<n.slideCount});n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==n.$dots&&(n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(t){var e=o.indexOf(t);if(d(this).attr({role:"tabpanel",id:"slick-slide"+n.instanceUid+t,tabindex:-1}),-1!==e){var i="slick-slide-control"+n.instanceUid+e;d("#"+i).length&&d(this).attr({"aria-describedby":i})}}),n.$dots.attr("role","tablist").find("li").each(function(t){var e=o[t];d(this).attr({role:"presentation"}),d(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+n.instanceUid+t,"aria-controls":"slick-slide"+n.instanceUid+e,"aria-label":t+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(n.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var t=n.currentSlide,e=t+n.options.slidesToShow;t<e;t++)n.options.focusOnChange?n.$slides.eq(t).attr({tabindex:"0"}):n.$slides.eq(t).removeAttr("tabindex");n.activateADA()},a.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},a.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(d("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&d("li",t.$dots).on("mouseenter.slick",d.proxy(t.interrupt,t,!0)).on("mouseleave.slick",d.proxy(t.interrupt,t,!1))},a.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",d.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",d.proxy(t.interrupt,t,!1)))},a.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),d(document).on(t.visibilityChange,d.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&d(t.$slideTrack).children().on("click.slick",t.selectHandler),d(window).on("orientationchange.slick.slick-"+t.instanceUid,d.proxy(t.orientationChange,t)),d(window).on("resize.slick.slick-"+t.instanceUid,d.proxy(t.resize,t)),d("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),d(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),d(t.setPosition)},a.prototype.initUI=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},a.prototype.keyHandler=function(t){var e=this;
//Dont slide if the cursor is inside the form fields and arrow keys are pressed
t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},a.prototype.lazyLoad=function(){function t(t){d("img[data-lazy]",t).each(function(){var t=d(this),e=d(this).attr("data-lazy"),i=d(this).attr("data-srcset"),n=d(this).attr("data-sizes")||s.$slider.attr("data-sizes"),o=document.createElement("img");o.onload=function(){t.animate({opacity:0},100,function(){i&&(t.attr("srcset",i),n&&t.attr("sizes",n)),t.attr("src",e).animate({opacity:1},200,function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,e])})},o.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,e])},o.src=e})}var s=this,e,i,n,o;if(!0===s.options.centerMode?o=!0===s.options.infinite?(n=s.currentSlide+(s.options.slidesToShow/2+1))+s.options.slidesToShow+2:(n=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),s.options.slidesToShow/2+1+2+s.currentSlide):(n=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,o=Math.ceil(n+s.options.slidesToShow),!0===s.options.fade&&(0<n&&n--,o<=s.slideCount&&o++)),e=s.$slider.find(".slick-slide").slice(n,o),"anticipated"===s.options.lazyLoad)for(var r=n-1,a=o,l=s.$slider.find(".slick-slide"),c=0;c<s.options.slidesToScroll;c++)r<0&&(r=s.slideCount-1),e=(e=e.add(l.eq(r))).add(l.eq(a)),r--,a++;t(e),s.slideCount<=s.options.slidesToShow?t(i=s.$slider.find(".slick-slide")):s.currentSlide>=s.slideCount-s.options.slidesToShow?t(i=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow)):0===s.currentSlide&&t(i=s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow))},a.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},a.prototype.next=a.prototype.slickNext=function(){var t;this.changeSlide({data:{message:"next"}})},a.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},a.prototype.pause=a.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},a.prototype.play=a.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},a.prototype.postSlide=function(t){var e=this,i;e.unslicked||(e.$slider.trigger("afterChange",[e,t]),e.animating=!1,e.slideCount>e.options.slidesToShow&&e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),!0===e.options.accessibility&&(e.initADA(),e.options.focusOnChange&&d(e.$slides.get(e.currentSlide)).attr("tabindex",0).focus()))},a.prototype.prev=a.prototype.slickPrev=function(){var t;this.changeSlide({data:{message:"previous"}})},a.prototype.preventDefault=function(t){t.preventDefault()},a.prototype.progressiveLazyLoad=function(t){t=t||1;var e=this,i=d("img[data-lazy]",e.$slider),n,o,s,r,a;i.length?(n=i.first(),o=n.attr("data-lazy"),s=n.attr("data-srcset"),r=n.attr("data-sizes")||e.$slider.attr("data-sizes"),(a=document.createElement("img")).onload=function(){s&&(n.attr("srcset",s),r&&n.attr("sizes",r)),n.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===e.options.adaptiveHeight&&e.setPosition(),e.$slider.trigger("lazyLoaded",[e,n,o]),e.progressiveLazyLoad()},a.onerror=function(){t<3?
/**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
setTimeout(function(){e.progressiveLazyLoad(t+1)},500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),e.$slider.trigger("lazyLoadError",[e,n,o]),e.progressiveLazyLoad())},a.src=o):e.$slider.trigger("allImagesLoaded",[e])},a.prototype.refresh=function(t){var e=this,i,n;n=e.slideCount-e.options.slidesToShow,
// in non-infinite sliders, we don't want to go past the
// last visible index.
!e.options.infinite&&e.currentSlide>n&&(e.currentSlide=n),
// if less slides than to show, go to start.
e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),i=e.currentSlide,e.destroy(!0),d.extend(e,e.initials,{currentSlide:i}),e.init(),t||e.changeSlide({data:{message:"index",index:i}},!1)},a.prototype.registerBreakpoints=function(){var i=this,t,e,n,o=i.options.responsive||null;if("array"===d.type(o)&&o.length){for(t in i.respondTo=i.options.respondTo||"window",o)if(n=i.breakpoints.length-1,o.hasOwnProperty(t)){
// loop through the breakpoints and cut out any existing
// ones with the same breakpoint number, we don't want dupes.
for(e=o[t].breakpoint;0<=n;)i.breakpoints[n]&&i.breakpoints[n]===e&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(e),i.breakpointSettings[e]=o[t].settings}i.breakpoints.sort(function(t,e){return i.options.mobileFirst?t-e:e-t})}},a.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&d(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},a.prototype.resize=function(){var t=this;d(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=d(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},a.prototype.removeSlide=a.prototype.slickRemove=function(t,e,i){var n=this;if(t="boolean"==typeof t?!0===(e=t)?0:n.slideCount-1:!0===e?--t:t,n.slideCount<1||t<0||t>n.slideCount-1)return!1;n.unload(),!0===i?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(t).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,n.reinit()},a.prototype.setCSS=function(t){var e=this,i={},n,o;!0===e.options.rtl&&(t=-t),n="left"==e.positionProp?Math.ceil(t)+"px":"0px",o="top"==e.positionProp?Math.ceil(t)+"px":"0px",i[e.positionProp]=t,!1===e.transformsEnabled||(!(i={})===e.cssTransitions?i[e.animType]="translate("+n+", "+o+")":i[e.animType]="translate3d("+n+", "+o+", 0px)"),e.$slideTrack.css(i)},a.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},a.prototype.setFade=function(){var i=this,n;i.$slides.each(function(t,e){n=i.slideWidth*t*-1,!0===i.options.rtl?d(e).css({position:"relative",right:n,top:0,zIndex:i.options.zIndex-2,opacity:0}):d(e).css({position:"relative",left:n,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},a.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},a.prototype.setOption=a.prototype.slickSetOption=function(t,e,i){
/**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
var n=this,o,s,r,a,l=!1,c;if("object"===d.type(t)?(r=t,l=e,c="multiple"):"string"===d.type(t)&&(a=e,l=i,"responsive"===(r=t)&&"array"===d.type(e)?c="responsive":void 0!==e&&(c="single")),"single"===c)n.options[r]=a;else if("multiple"===c)d.each(r,function(t,e){n.options[t]=e});else if("responsive"===c)for(s in a)if("array"!==d.type(n.options.responsive))n.options.responsive=[a[s]];else{
// loop through the responsive object and splice out duplicates.
for(o=n.options.responsive.length-1;0<=o;)n.options.responsive[o].breakpoint===a[s].breakpoint&&n.options.responsive.splice(o,1),o--;n.options.responsive.push(a[s])}l&&(n.unload(),n.reinit())},a.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),!1===t.options.fade?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},a.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===t.options.useCSS&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},a.prototype.setSlideClasses=function(t){var e=this,i,n,o,s;if(n=e.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),e.$slides.eq(t).addClass("slick-current"),!0===e.options.centerMode){var r=e.options.slidesToShow%2==0?1:0;i=Math.floor(e.options.slidesToShow/2),!0===e.options.infinite&&(i<=t&&t<=e.slideCount-1-i?e.$slides.slice(t-i+r,t+i+1).addClass("slick-active").attr("aria-hidden","false"):(o=e.options.slidesToShow+t,n.slice(o-i+1+r,o+i+2).addClass("slick-active").attr("aria-hidden","false")),0===t?n.eq(n.length-1-e.options.slidesToShow).addClass("slick-center"):t===e.slideCount-1&&n.eq(e.options.slidesToShow).addClass("slick-center")),e.$slides.eq(t).addClass("slick-center")}else 0<=t&&t<=e.slideCount-e.options.slidesToShow?e.$slides.slice(t,t+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=e.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(s=e.slideCount%e.options.slidesToShow,o=!0===e.options.infinite?e.options.slidesToShow+t:t,e.options.slidesToShow==e.options.slidesToScroll&&e.slideCount-t<e.options.slidesToShow?n.slice(o-(e.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):n.slice(o,o+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==e.options.lazyLoad&&"anticipated"!==e.options.lazyLoad||e.lazyLoad()},a.prototype.setupInfinite=function(){var t=this,e,i,n;if(!0===t.options.fade&&(t.options.centerMode=!1),!0===t.options.infinite&&!1===t.options.fade&&(i=null,t.slideCount>t.options.slidesToShow)){for(n=!0===t.options.centerMode?t.options.slidesToShow+1:t.options.slidesToShow,e=t.slideCount;e>t.slideCount-n;e-=1)i=e-1,d(t.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");for(e=0;e<n+t.slideCount;e+=1)i=e,d(t.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");t.$slideTrack.find(".slick-cloned").find("[id]").each(function(){d(this).attr("id","")})}},a.prototype.interrupt=function(t){var e=this;t||e.autoPlay(),e.interrupted=t},a.prototype.selectHandler=function(t){var e=this,i=d(t.target).is(".slick-slide")?d(t.target):d(t.target).parents(".slick-slide"),n=parseInt(i.attr("data-slick-index"));n||(n=0),e.slideCount<=e.options.slidesToShow?e.slideHandler(n,!1,!0):e.slideHandler(n)},a.prototype.slideHandler=function(t,e,i){var n,o,s,r,a=null,l=this,c;if(e=e||!1,!(!0===l.animating&&!0===l.options.waitForAnimate||!0===l.options.fade&&l.currentSlide===t))if(!1===e&&l.asNavFor(t),n=t,a=l.getLeft(n),r=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?r:l.swipeLeft,!1===l.options.infinite&&!1===l.options.centerMode&&(t<0||t>l.getDotCount()*l.options.slidesToScroll))!1===l.options.fade&&(n=l.currentSlide,!0!==i&&l.slideCount>l.options.slidesToShow?l.animateSlide(r,function(){l.postSlide(n)}):l.postSlide(n));else if(!1===l.options.infinite&&!0===l.options.centerMode&&(t<0||t>l.slideCount-l.options.slidesToScroll))!1===l.options.fade&&(n=l.currentSlide,!0!==i&&l.slideCount>l.options.slidesToShow?l.animateSlide(r,function(){l.postSlide(n)}):l.postSlide(n));else{if(l.options.autoplay&&clearInterval(l.autoPlayTimer),o=n<0?l.slideCount%l.options.slidesToScroll!=0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+n:n>=l.slideCount?l.slideCount%l.options.slidesToScroll!=0?0:n-l.slideCount:n,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,o]),s=l.currentSlide,l.currentSlide=o,l.setSlideClasses(l.currentSlide),l.options.asNavFor&&(c=(c=l.getNavTarget()).slick("getSlick")).slideCount<=c.options.slidesToShow&&c.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),!0===l.options.fade)return!0!==i?(l.fadeSlideOut(s),l.fadeSlide(o,function(){l.postSlide(o)})):l.postSlide(o),void l.animateHeight();!0!==i&&l.slideCount>l.options.slidesToShow?l.animateSlide(a,function(){l.postSlide(o)}):l.postSlide(o)}},a.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},a.prototype.swipeDirection=function(){var t,e,i,n,o=this;return t=o.touchObject.startX-o.touchObject.curX,e=o.touchObject.startY-o.touchObject.curY,i=Math.atan2(e,t),(n=Math.round(180*i/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&0<=n?!1===o.options.rtl?"left":"right":n<=360&&315<=n?!1===o.options.rtl?"left":"right":135<=n&&n<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?35<=n&&n<=135?"down":"up":"vertical"},a.prototype.swipeEnd=function(t){var e=this,i,n;if(e.dragging=!1,e.swiping=!1,e.scrolling)return e.scrolling=!1;if(e.interrupted=!1,e.shouldClick=!(10<e.touchObject.swipeLength),void 0===e.touchObject.curX)return!1;if(!0===e.touchObject.edgeHit&&e.$slider.trigger("edge",[e,e.swipeDirection()]),e.touchObject.swipeLength>=e.touchObject.minSwipe){switch(n=e.swipeDirection()){case"left":case"down":i=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount(),e.currentDirection=0;break;case"right":case"up":i=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount(),e.currentDirection=1;break;default:}"vertical"!=n&&(e.slideHandler(i),e.touchObject={},e.$slider.trigger("swipe",[e,n]))}else e.touchObject.startX!==e.touchObject.curX&&(e.slideHandler(e.currentSlide),e.touchObject={})},a.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t);break}},a.prototype.swipeMove=function(t){var e=this,i=!1,n,o,s,r,a,l;return a=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!e.dragging||e.scrolling||a&&1!==a.length)&&(n=e.getLeft(e.currentSlide),e.touchObject.curX=void 0!==a?a[0].pageX:t.clientX,e.touchObject.curY=void 0!==a?a[0].pageY:t.clientY,e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2))),l=Math.round(Math.sqrt(Math.pow(e.touchObject.curY-e.touchObject.startY,2))),!e.options.verticalSwiping&&!e.swiping&&4<l?!(e.scrolling=!0):(!0===e.options.verticalSwiping&&(e.touchObject.swipeLength=l),o=e.swipeDirection(),void 0!==t.originalEvent&&4<e.touchObject.swipeLength&&(e.swiping=!0,t.preventDefault()),r=(!1===e.options.rtl?1:-1)*(e.touchObject.curX>e.touchObject.startX?1:-1),!0===e.options.verticalSwiping&&(r=e.touchObject.curY>e.touchObject.startY?1:-1),s=e.touchObject.swipeLength,(e.touchObject.edgeHit=!1)===e.options.infinite&&(0===e.currentSlide&&"right"===o||e.currentSlide>=e.getDotCount()&&"left"===o)&&(s=e.touchObject.swipeLength*e.options.edgeFriction,e.touchObject.edgeHit=!0),!1===e.options.vertical?e.swipeLeft=n+s*r:e.swipeLeft=n+s*(e.$list.height()/e.listWidth)*r,!0===e.options.verticalSwiping&&(e.swipeLeft=n+s*r),!0!==e.options.fade&&!1!==e.options.touchMove&&(!0===e.animating?(e.swipeLeft=null,!1):void e.setCSS(e.swipeLeft))))},a.prototype.swipeStart=function(t){var e=this,i;if(e.interrupted=!0,1!==e.touchObject.fingerCount||e.slideCount<=e.options.slidesToShow)return!(e.touchObject={});void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(i=t.originalEvent.touches[0]),e.touchObject.startX=e.touchObject.curX=void 0!==i?i.pageX:t.clientX,e.touchObject.startY=e.touchObject.curY=void 0!==i?i.pageY:t.clientY,e.dragging=!0},a.prototype.unfilterSlides=a.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},a.prototype.unload=function(){var t=this;d(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},a.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},a.prototype.updateArrows=function(){var t=this,e;e=Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},a.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},a.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},d.fn.slick=function(t){var e=this,i=t,n=Array.prototype.slice.call(arguments,1),o=e.length,s,r;for(s=0;s<o;s++)if("object"==typeof i||void 0===i?e[s].slick=new a(e[s],i):r=e[s].slick[i].apply(e[s].slick,n),void 0!==r)return r;return e}}),function(u,p,f){"use strict";function t(t,e){this.element=t,this.layers=t.getElementsByClassName("layer");var i={calibrateX:this.data(this.element,"calibrate-x"),calibrateY:this.data(this.element,"calibrate-y"),invertX:this.data(this.element,"invert-x"),invertY:this.data(this.element,"invert-y"),limitX:this.data(this.element,"limit-x"),limitY:this.data(this.element,"limit-y"),scalarX:this.data(this.element,"scalar-x"),scalarY:this.data(this.element,"scalar-y"),frictionX:this.data(this.element,"friction-x"),frictionY:this.data(this.element,"friction-y"),originX:this.data(this.element,"origin-x"),originY:this.data(this.element,"origin-y")};for(var n in i)null===i[n]&&delete i[n];this.extend(this,o,e,i),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var e="Parallax",i=30,o={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};t.prototype.extend=function(t){if(1<arguments.length)for(var e=t,i=1,n=arguments.length;i<n;i++){var o=arguments[i];for(var s in o)e[s]=o[s]}},t.prototype.data=function(t,e){return this.deserialize(t.getAttribute("data-"+e))},t.prototype.deserialize=function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},t.prototype.camelCase=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},t.prototype.transformSupport=function(t){for(var e=p.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,a=0,l=this.vendors.length;a<l;a++)if(r=null!==this.vendors[a]?(s=this.vendors[a][0]+"transform",this.vendors[a][1]+"Transform"):s="transform",e.style[r]!==f){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var c=p.body||p.createElement("body"),d=p.documentElement,h=d.style.overflow;p.body||(d.style.overflow="hidden",d.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=(n=u.getComputedStyle(e).getPropertyValue(s))!==f&&0<n.length&&"none"!==n,d.style.overflow=h,c.removeChild(e)}}return o},t.prototype.ww=null,t.prototype.wh=null,t.prototype.wcx=null,t.prototype.wcy=null,t.prototype.wrx=null,t.prototype.wry=null,t.prototype.portrait=null,t.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),t.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],t.prototype.motionSupport=!!u.DeviceMotionEvent,t.prototype.orientationSupport=!!u.DeviceOrientationEvent,t.prototype.orientationStatus=0,t.prototype.transform2DSupport=t.prototype.transformSupport("2D"),t.prototype.transform3DSupport=t.prototype.transformSupport("3D"),t.prototype.propertyCache={},t.prototype.initialise=function(){var t;this.transform3DSupport&&this.accelerate(this.element),"static"===u.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},t.prototype.updateLayers=function(){this.layers=this.element.getElementsByClassName("layer"),this.depths=[];for(var t=0,e=this.layers.length;t<e;t++){var i=this.layers[t];this.transform3DSupport&&this.accelerate(i),i.style.position=t?"absolute":"relative",i.style.display="block",i.style.left=0,i.style.top=0,this.depths.push(this.data(i,"depth")||0)}},t.prototype.updateDimensions=function(){this.ww=u.innerWidth,this.wh=u.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},t.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},t.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},t.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,u.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,u.addEventListener("mousemove",this.onMouseMove)),u.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},t.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?u.removeEventListener("deviceorientation",this.onDeviceOrientation):u.removeEventListener("mousemove",this.onMouseMove),u.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},t.prototype.calibrate=function(t,e){this.calibrateX=t===f?this.calibrateX:t,this.calibrateY=e===f?this.calibrateY:e},t.prototype.invert=function(t,e){this.invertX=t===f?this.invertX:t,this.invertY=e===f?this.invertY:e},t.prototype.friction=function(t,e){this.frictionX=t===f?this.frictionX:t,this.frictionY=e===f?this.frictionY:e},t.prototype.scalar=function(t,e){this.scalarX=t===f?this.scalarX:t,this.scalarY=e===f?this.scalarY:e},t.prototype.limit=function(t,e){this.limitX=t===f?this.limitX:t,this.limitY=e===f?this.limitY:e},t.prototype.origin=function(t,e){this.originX=t===f?this.originX:t,this.originY=e===f?this.originY:e},t.prototype.clamp=function(t,e,i){return t=Math.max(t,e),t=Math.min(t,i)},t.prototype.css=function(t,e,i){var n=this.propertyCache[e];if(!n)for(var o=0,s=this.vendors.length;o<s;o++)if(n=null!==this.vendors[o]?this.camelCase(this.vendors[o][1]+"-"+e):e,t.style[n]!==f){this.propertyCache[e]=n;break}t.style[n]=i},t.prototype.accelerate=function(t){this.css(t,"transform","translate3d(0,0,0)"),this.css(t,"transform-style","preserve-3d"),this.css(t,"backface-visibility","hidden")},t.prototype.setPosition=function(t,e,i){e+="px",i+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)},t.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},t.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},t.prototype.onWindowResize=function(){this.updateDimensions()},t.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,e=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?e:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?e:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var i=0,n=this.layers.length;i<n;i++){var o=this.layers[i],s=this.depths[i],r=this.vx*s*(this.invertX?-1:1),a=this.vy*s*(this.invertY?-1:1);this.setPosition(o,r,a)}this.raf=requestAnimationFrame(this.onAnimationFrame)},t.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var e=(t.beta||0)/30,i=(t.gamma||0)/30,n=this.wh>this.ww;this.portrait!==n&&(this.portrait=n,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=i),this.ix=e,this.iy=i}},t.prototype.onMouseMove=function(t){var e=t.clientX,i=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.ex),e=Math.min(e,this.ex+this.ew),i=Math.max(i,this.ey),i=Math.min(i,this.ey+this.eh)),this.ix=(e-this.ex-this.ecx)/this.erx,this.iy=(i-this.ey-this.ecy)/this.ery):(this.ix=(e-this.wcx)/this.wrx,this.iy=(i-this.wcy)/this.wry)},u[e]=t}(window,document),function(){for(var o=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-o)),n=window.setTimeout(function(){t(e+i)},i);return o=e+i,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),// Generated by CoffeeScript 1.9.2
/**
@license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
function(){var I,O;I=this.jQuery||window.jQuery,O=I(window),I.fn.stick_in_parent=function(t){var S,e,k,i,n,C,o,E,A,s,x,D;for(null==t&&(t={}),D=t.sticky_class,C=t.inner_scrolling,x=t.recalc_every,s=t.parent,A=t.offset_top,E=t.spacer,k=t.bottoming,null==A&&(A=0),null==s&&(s=void 0),null==C&&(C=!0),null==D&&(D="is_stuck"),S=I(document),null==k&&(k=!0),i=function(r,a,l,c,d,h,u,p){var f,t,m,g,v,y,w,_,e,b,T,n;if(!r.data("sticky_kit")){if(r.data("sticky_kit",!0),v=S.height(),w=r.parent(),null!=s&&(w=w.closest(s)),!w.length)throw"failed to find stick parent";if(f=m=!1,(T=null!=E?E&&r.closest(E):I("<div />"))&&T.css("position",r.css("position")),(_=function(){var t,e,i;if(!p)return v=S.height(),t=parseInt(w.css("border-top-width"),10),e=parseInt(w.css("padding-top"),10),a=parseInt(w.css("padding-bottom"),10),l=w.offset().top+t+e,c=w.height(),m&&(f=m=!1,null==E&&(r.insertAfter(T),T.detach()),r.css({position:"",top:"",width:"",bottom:""}).removeClass(D),i=!0),d=r.offset().top-(parseInt(r.css("margin-top"),10)||0)-A,h=r.outerHeight(!0),u=r.css("float"),T&&T.css({width:r.outerWidth(!0),height:h,display:r.css("display"),"vertical-align":r.css("vertical-align"),float:u}),i?n():void 0})(),h!==c)return g=void 0,y=A,b=x,n=function(){var t,e,i,n,o,s;if(!p)return i=!1,null!=b&&(b-=1)<=0&&(b=x,_(),i=!0),i||S.height()===v||(_(),i=!0),n=O.scrollTop(),null!=g&&(e=n-g),g=n,m?(k&&(o=c+l<n+h+y,f&&!o&&(f=!1,r.css({position:"fixed",bottom:"",top:y}).trigger("sticky_kit:unbottom"))),n<d&&(m=!1,y=A,null==E&&("left"!==u&&"right"!==u||r.insertAfter(T),T.detach()),t={position:"",width:"",top:""},r.css(t).removeClass(D).trigger("sticky_kit:unstick")),C&&(s=O.height())<h+A&&(f||(y-=e,y=Math.max(s-h,y),y=Math.min(A,y),m&&r.css({top:y+"px"})))):d<n&&(m=!0,(t={position:"fixed",top:y}).width="border-box"===r.css("box-sizing")?r.outerWidth()+"px":r.width()+"px",r.css(t).addClass(D),null==E&&(r.after(T),"left"!==u&&"right"!==u||T.append(r)),r.trigger("sticky_kit:stick")),m&&k&&(null==o&&(o=c+l<n+h+y),!f&&o)?(f=!0,"static"===w.css("position")&&w.css({position:"relative"}),r.css({position:"absolute",bottom:a,top:"auto"}).trigger("sticky_kit:bottom")):void 0},e=function(){return _(),n()},t=function(){if(p=!0,O.off("touchmove",n),O.off("scroll",n),O.off("resize",e),I(document.body).off("sticky_kit:recalc",e),r.off("sticky_kit:detach",t),r.removeData("sticky_kit"),r.css({position:"",bottom:"",top:"",width:""}),w.position("position",""),m)return null==E&&("left"!==u&&"right"!==u||r.insertAfter(T),T.remove()),r.removeClass(D)},O.on("touchmove",n),O.on("scroll",n),O.on("resize",e),I(document.body).on("sticky_kit:recalc",e),r.on("sticky_kit:detach",t),setTimeout(n,0)}},n=0,o=this.length;n<o;n++)e=this[n],i(I(e));return this}}.call(this),function(t){t(document).ready(function(){t(".js-matchheight").matchHeight(),t(".js-removeafterclick").on("click",function(){t(this).hide()}),t(".js-addreadmore").on("click",function(){t(this).closest(".card").find(".js-removeafterclick").show()})})}(jQuery),function(i){i(document).ready(function(){function t(){i(window).width()<=767?i("body").addClass("mobilewidth"):i("body").removeClass("mobilewidth")}
// initial state
i(".js-scrollto").on("click",function(){var t=i(this).attr("href");return i("html, body").animate({scrollTop:i(t).offset().top},500),!1}),i(".js-scrolltonextsection").on("click",function(){var t=i(this).closest("section").next();if(i("body").hasClass("mobilewidth"))var e=0;else var e=220;return i("html, body").animate({scrollTop:i(t).offset().top-220},500),!1}),t(),
// on resize
i(window).on("resize",t)})}(jQuery),function(o){o(document).ready(function(){
// Matchheight
function t(){var t=o("#footer").outerHeight(),e=o("header").outerHeight(),i,n=o(window).height()-t-e;o("#content").css("min-height",n)}t(),o(window).resize(function(){t()})})}(jQuery),function(t){t(document).ready(function(){t(".js-slick").slick({dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:1,variableWidth:!0,prevArrow:!1,nextArrow:!1,settings:"unslick",responsive:[{breakpoint:992,variableWidth:!0,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:376,settings:"unslick",infinite:!0,variableWidth:!0}]})})}(jQuery),function(t){t(document).ready(function(){t(".js-menu").on("click",function(){t("body").toggleClass("menuopen"),t("body").toggleClass("opensidemenu"),t(".js-mobilemenu").toggleClass("open")}),t(window).resize(function(){t("body").removeClass("menuopen").removeClass("opensidemenu")})})}(jQuery),function(e){e(document).ready(function(){e("body").addClass("loaded"),e(window).scroll(function(){var t;250<=e(window).scrollTop()?e("body").addClass("scrolled"):e("body").removeClass("scrolled")})})}(jQuery),function(t){t(document).ready(function(){t(".modal").on("show",function(){t("body").addClass("modal-open")}).on("hidden",function(){t("body").removeClass("modal-open")})})}(jQuery),function(t){t(document).ready(function(){})}(jQuery);