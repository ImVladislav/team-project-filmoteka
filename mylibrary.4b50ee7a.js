function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequire62bd;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire62bd=s);var r=s("3fz09");var i=s("fb9GJ"),l=s("eWCmQ"),o=(r=s("3fz09"),s("it60l")),c=s("185lj"),d=s("9Co7P"),u=s("bTcpz"),p=s("2nhTy"),f=s("lFT8c"),g=s("c8VpK"),m=(r=s("3fz09"),s("1fedI")),h=s("bRnc2");function y(e){if(!e.length)return r.refs.tuiContainer.classList.add("visually-hidden"),r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>';const t=e.map((({original_title:e,title:t,poster_path:a,id:n,genres:s,release_date:r})=>{let i=null,l=null,o=null;const c=JSON.parse(localStorage.getItem("language")),d=s.map((e=>e.id)),u=(0,m.posterСheck)(a);return"uk"===c?(o=h.genresUK.reduce(((e,t)=>(d.includes(t.id)&&e.push(t.name),e)),[]),o.length>3?(i=o.slice(0,2),i.splice(2,1,"Інше")):i=0===o.length?["Жанрів не знайдено"]:o,l=""===r?"Дату релізу не знайдено":r.slice(0,4)):(o=h.genresArr.reduce(((e,t)=>(d.includes(t.id)&&e.push(t.name),e)),[]),o.length>3?(i=o.slice(0,2),i.splice(2,1,"Other")):i=0===o.length?["Genres not found"]:o,l=""===r?"Release data no found":r.slice(0,4)),`\n          <li class="film__item" data-id="${n}">\n          <img src="${u}" class="film__img" alt="${e}" />\n          <p class="film__title">${t}</p>\n          <p class="film__genre">${i.join(", ")} | ${l}</p>\n        </li>`})).join("");return r.refs.galleryLibrary.innerHTML=t}var b=s("6yrCC");function v(){r.refs.btnWathed.dataset.watch="active",r.refs.btnQueue.dataset.queue="";try{const t=JSON.parse(localStorage.getItem("watch"));if(!t||0===t.length)return r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>',void r.refs.tuiContainer.classList.add("visually-hidden");{p.options.totalItems=t.length;let a=0,n=20;const s=e=>{a=e*p.options.itemsPerPage-20,n=e*p.options.itemsPerPage};r.refs.tuiContainer.classList.remove("visually-hidden"),y(t.slice(a,n));new(e(i))(r.refs.tuiContainer,p.options).on("beforeMove",(e=>{const r=e.page;s(r),y(t.slice(a,n))}))}}catch(e){console.log(e.message)}}r.refs.btnWathed.addEventListener("click",v),r.refs.galleryLibrary.addEventListener("click",(async function(t){if("film__item"!==t.target.parentElement.className)return;(0,u.onOpenModal)();const a=t.target.parentElement.dataset.id,n=await c.serverApi.getDetailsMovie(a),s=await(0,o.movieDescriptionMurkup)(n);r.refs.movieDescription.insertAdjacentHTML("beforeend",s),(0,f.makeWatchTextContent)(n),(0,f.makeQueueTextContent)(n);const i=document.querySelector("[data-add-watched]"),p=document.querySelector("[data-add-queue]"),m=document.querySelector("[data-modal-close]"),h=document.querySelector(".btn-ytb"),v=document.querySelector(".icon-youtube"),_=document.querySelector("[data-cast]");i.addEventListener("click",(()=>{(0,d.onAddWatchClick)(n);const e=JSON.parse(localStorage.getItem("watch"));"active"===r.refs.btnWathed.dataset.watch&&y(e)})),p.addEventListener("click",(()=>{(0,d.onAddQueueClick)(n);const e=JSON.parse(localStorage.getItem("queue"));"active"===r.refs.btnQueue.dataset.queue&&y(e)})),c.serverApi.getTrailer(a).then((({results:t})=>{0!==t.length?(v.classList.add("icon-youtube__enable"),v.classList.remove("icon-youtube__disabled")):(v.classList.remove("icon-youtube__enable"),v.classList.add("icon-youtube__disabled"),h.setAttribute("disabled",!0),e(l).Notify.failure("Oh! Unfortunately there is no trailer",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}))})),c.serverApi.getCasts(a).then((e=>{0===e.length&&_.setAttribute("disabled",!0)})),h.addEventListener("click",g.handleClick),_.addEventListener("click",(()=>(0,b.markupCast)(a))),m.addEventListener("click",u.closeModal)}));i=s("fb9GJ"),r=s("3fz09"),p=s("2nhTy");function _(){r.refs.btnWathed.dataset.watch="",r.refs.btnQueue.dataset.queue="active";try{const t=JSON.parse(localStorage.getItem("queue"));if(!t||0===t.length)return r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>',void r.refs.tuiContainer.classList.add("visually-hidden");{p.options.totalItems=t.length;let a=0,n=20;const s=e=>{a=e*p.options.itemsPerPage-20,n=e*p.options.itemsPerPage};r.refs.tuiContainer.classList.remove("visually-hidden"),y(t.slice(a,n));new(e(i))(r.refs.tuiContainer,p.options).on("beforeMove",(e=>{const r=e.page;s(r),y(t.slice(a,n))}))}}catch(e){console.log(e.message)}}r.refs.btnQueue.addEventListener("click",_);c=s("185lj");!function(){c.serverApi.setlang(JSON.parse(localStorage.getItem("language")));try{const e=JSON.parse(localStorage.getItem("watch")),t=JSON.parse(localStorage.getItem("queue"));e&&0!==e.length?v():t&&0!==t.length&&!e||0===e.length?_():r.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>')}catch(e){console.log(e.message)}}(),s("bTcpz"),s("7bYU0"),s("2nhTy"),s("eobyt"),s("3TU0j"),s("3hXKf"),s("2ix2C");
//# sourceMappingURL=mylibrary.4b50ee7a.js.map