!function(){var t={553:function(t){var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var o=n&&n.prototype instanceof y?n:y,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,n,e){var r=h;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return C()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=j(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===h)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?d:f,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=d,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(k([])));L&&L!==e&&r.call(L,a)&&(b=L);var x=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function e(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):n.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:n,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new _(l(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),u(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},757:function(t,n,e){t.exports=e(553)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";function t(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}var n=e(757),r=e.n(n);window.addEventListener("DOMContentLoaded",(function(n){var e=document.getElementById("all-custom-properties").querySelector(".table-scroll__container"),o="Copy",a="Copied!",i=window.location.hash,c=function(){var n,e=(n=r().mark((function t(){var n,e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("../../lib/json/root-custom-properties.json");case 3:return n=t.sent,t.next=6,n.json();case 6:e=t.sent,console.log("customPropertyData ===== >",e),u(e),l(),window.location.hash&&(console.log("window.location.hash : "+i),window.location.href=i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=n.apply(e,r);function c(n){t(i,o,a,c,u,"next",n)}function u(n){t(i,o,a,c,u,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),u=function(t){var n=t.map((function(t){var n,e=t.type,r=t.customProperties,a=t.scope,i=e.replace(/\s+/g,"-").toLowerCase();n="Gradient Veneer"===e||"Subtle Fill"===e?"accents/#"+i:i;var c=r.map((function(t){return"\n                    <tr>\n                        <td>\n                            <span data-prop>--".concat(t.name,"</span>\n                        </td>\n                        <td>\n                            <span data-val>").concat(t.value,'</span>\n                        </td>\n                        <td>  \n                            <button data-clipboard="single">\n                                ').concat(o,"\n                            </button>\n                        </td>\n                        <td>\n                            ").concat(t.description,"\n                        </td>\n                    </tr>\n                ")})).join("");return'\n                <div class="cp-header box-shadow-1" id="cp_'.concat(i,'">\n                    <span class="cp-header__title">').concat(e,'</span>\n                    <a class="cp-header__link button button--has-icon" href="../../docs/').concat(n,'">\n                        <span class="button__text">Docs</span>\n                        <span class="nyc_icon_arrow-right button__icon"></span>\n                    </a>\n                </div>\n                <table class="table">\n                    <caption class="border-bottom">\n                        <p class="font-size-md">\n                            Variable scope: <code>').concat(a,'</code>\n                        </p>\n                    </caption>\n                    <thead>\n                        <tr>\n                            <th scope="col">\n                                CSS Variable\n                            </th>\n                            <th scope="col">Default Value</th>\n                            <th scope="col">\n                                <button data-clipboard="all">\n                                    <span>Copy All</span>\n                                </button>\n                            </th>\n                            <th scope="col">Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        ').concat(c,"\n                    </tbody>\n\n                </table>\n            ")})).join("");e.innerHTML=n},l=function(){var t=document.querySelectorAll('[data-clipboard="all"]'),n=document.querySelectorAll('[data-clipboard="single"]');t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var n=t.target.closest("table"),e=n.querySelectorAll("tbody > tr");n.querySelectorAll('[data-clipboard="single"]').forEach((function(t){t.innerHTML=a.toString()}));var r=[];e.forEach((function(t){var n=t.querySelector("[data-prop]").innerHTML.trim().replace(/&nbsp;/g,""),e=t.querySelector("[data-val]").innerHTML.trim().replace(/&nbsp;/g,""),o="".concat(n,": ").concat(e,";");r.push(o)}));var o=r.map((function(t){return"    ".concat(t)})).join("\n"),i="\n                    :root {\n                        ".concat(o,"\n                    }"),c=document.createElement("textarea");c.innerHTML=i.trim(),document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}))})),n.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),n.forEach((function(t){t.innerHTML=o}));var e=t.target.closest("tr"),r=e.querySelector("[data-prop]").innerHTML.trim().replace(/&nbsp;/g,""),i=e.querySelector("[data-val]").innerHTML.trim().replace(/&nbsp;/g,""),c="".concat(r,": ").concat(i,";");c&&(t.target.innerHTML=a);var u=document.createElement("input");u.setAttribute("value",c),document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u)}))}))};c()}))}()}();