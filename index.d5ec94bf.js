function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire62bd;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire62bd=o),o("bTcpz");var i=o("3fz09"),a=o("185lj"),s=o("fb9GJ"),l=(i=o("3fz09"),a=o("185lj"),o("1fedI")),c=o("2nhTy"),u=o("bRnc2"),d=(u=o("bRnc2"),{});const f=document.querySelector(".tui-pagination"),m=new(e(s))(f,c.options);function p(e){const t=e.map((({original_title:e,title:t,poster_path:n,id:r,genre_ids:o,release_date:i})=>{const a=(0,l.posterСheck)(n);let s=null,c=null;const d=u.genresArr.reduce(((e,t)=>(o.includes(t.id)&&e.push(t.name),e)),[]);return d.length>3?(s=d.slice(0,2),s.splice(2,1,"Other")):s=0===d.length?["Genres not found"]:d,c=""===i?"Release data no found":i.slice(0,4),`\n        <li class="film__item" data-id="${r}">\n        <img src="${a}" class="film__img" alt="${e}" />\n        <p class="film__title">${t}</p>\n        <p class="film__genre">${s.join(", ")} | ${c}</p>\n      </li>`})).join("");return i.refs.gallery.innerHTML=t}async function v(){const e=await a.serverApi.getPopularMovie(),t=e.total_results;a.serverApi.setTotalResults(t),p(e.results),(0,d.spinnerStop)()}m.on("beforeMove",(async e=>{m.setTotalItems(a.serverApi.totalResults);const t=e.page;a.serverApi.setPage(t),v()}));var h=o("it60l"),b=o("bTcpz"),y=o("9Co7P"),g=o("lFT8c"),w={};w=function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var l=void 0;if(!s&&l)return l(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}};t[a][0].call(u.exports,(function(e){return o(t[a][1][e]||e)}),u,u.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=o(i,"IMG"),s=o(i,"VIDEO"),l=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var s={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:a};return s}},{}]},{},[1])(1),o("3fz09");a=o("185lj");const _=async e=>{const t=document.querySelector(".movie__description").dataset.movieId;let n="";a.serverApi.getTrailer(t).then((({results:e})=>{e.map((e=>{"Trailer"===e.type&&"Official Trailer"===e.name&&(n=e.key)}));const t=w.create(`\n      <button\n        type="button"\n        class="lightbox__button"\n        data-action="close-lightbox"\n        ></button>\n   <iframe class="player" width="560" height="315"\n   src='https://www.youtube.com/embed/${n}'frameborder="0" \n   allow="accelerometer; autoplay; encrypted-media; gyroscope; \n   picture-in-picture" allowfullscreen></iframe>\n \n`);t.show();document.querySelector('[data-action="close-lightbox"]').addEventListener("click",(()=>t.close()))}))};v(),i.refs.gallery.addEventListener("click",(async function(e){if("film__item"!==e.target.parentElement.className)return;(0,b.onOpenModal)();const t=e.target.parentElement.dataset.id,n=await a.serverApi.getDetailsMovie(t),r=await(0,h.movieDescriptionMurkup)(n);i.refs.movieDescription.insertAdjacentHTML("beforeend",r),(0,g.makeWatchTextContent)(n),(0,g.makeQueueTextContent)(n);const o=document.querySelector("[data-add-watched]"),s=document.querySelector("[data-add-queue]"),l=document.querySelector("[data-modal-close]"),c=document.querySelector(".btn-ytb");o.addEventListener("click",(()=>(0,y.onAddWatchClick)(n))),s.addEventListener("click",(()=>(0,y.onAddQueueClick)(n))),c.addEventListener("click",_),l.addEventListener("click",b.closeModal)}));var L=o("eWCmQ");s=o("fb9GJ"),i=o("3fz09"),a=o("185lj"),c=o("2nhTy");let E=" ";async function T(){const t=await a.serverApi.getMovieOnDemand(E),n=t.results,r=t.total_results;if(c.options.totalItems=r,r<20){document.querySelector(".tui-js").classList.add("visually-hidden")}else{document.querySelector(".tui-js").classList.remove("visually-hidden")}if(0===n.length)return e(L).Notify.failure("Search result not successful. Enter the correct movie name and",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),void(E=" ");p(n)}i.refs.formRef.addEventListener("submit",(async function(t){t.preventDefault();if(document.querySelector(".header__form-input").addEventListener("change",(()=>{a.serverApi.setPage(1),a.serverApi.setRequestCount()})),E=t.currentTarget.elements.serch_film.value.trim().toLowerCase(),!E)return void e(L).Notify.failure("Enter the name of the movie",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0});await T();const n=document.querySelector(".tui-pagination");new(e(s))(n,c.options).on("beforeMove",(e=>{const t=e.page;a.serverApi.setPage(t),a.serverApi.incrementRequestCount(),T()}))})),o("2nhTy"),o("7bYU0"),o("eobyt"),o("3TU0j"),o("3hXKf");
//# sourceMappingURL=index.d5ec94bf.js.map
