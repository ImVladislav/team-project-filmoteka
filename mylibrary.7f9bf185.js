function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequire62bd;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire62bd=s);var r=s("3fz09");var i=s("fb9GJ"),o=(r=s("3fz09"),s("it60l")),l=s("185lj"),c=s("9Co7P"),d=s("bTcpz"),u=s("2nhTy"),f=s("lFT8c"),p=s("c8VpK"),g=(r=s("3fz09"),s("1fedI")),m=s("bRnc2");function y(e){e.length||r.refs.tuiContainer.classList.add("visually-hidden");const t=e.map((({original_title:e,title:t,poster_path:a,id:n,genres:s,release_date:r})=>{let i=null,o=null;const l=s.map((e=>e.id)),c=(0,g.posterСheck)(a),d=m.genresArr.reduce(((e,t)=>(l.includes(t.id)&&e.push(t.name),e)),[]);return d.length>3?(i=d.slice(0,2),i.splice(2,1,"Other")):i=0===d.length?["Genres not found"]:d,o=""===r?"Release data no found":r.slice(0,4),`\n          <li class="film__item" data-id="${n}">\n          <img src="${c}" class="film__img" alt="${e}" />\n          <p class="film__title">${t}</p>\n          <p class="film__genre">${i.join(", ")} | ${o}</p>\n        </li>`})).join("");return r.refs.galleryLibrary.innerHTML=t}function h(){r.refs.btnWathed.dataset.watch="active",r.refs.btnQueue.dataset.queue="";try{const t=JSON.parse(localStorage.getItem("watch"));if(!t||0===t.length)return r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>',void r.refs.tuiContainer.classList.add("visually-hidden");{u.options.totalItems=t.length;let a=0,n=20;const s=e=>{a=e*u.options.itemsPerPage-20,n=e*u.options.itemsPerPage};r.refs.tuiContainer.classList.remove("visually-hidden"),y(t.slice(a,n));new(e(i))(r.refs.tuiContainer,u.options).on("beforeMove",(e=>{const r=e.page;s(r),y(t.slice(a,n))}))}}catch(e){console.log(e.message)}}r.refs.btnWathed.addEventListener("click",h),r.refs.galleryLibrary.addEventListener("click",(async function(e){if("film__item"!==e.target.parentElement.className)return;(0,d.onOpenModal)();const t=e.target.parentElement.dataset.id,a=await l.serverApi.getDetailsMovie(t),n=await(0,o.movieDescriptionMurkup)(a);r.refs.movieDescription.insertAdjacentHTML("beforeend",n),(0,f.makeWatchTextContent)(a),(0,f.makeQueueTextContent)(a);const s=document.querySelector("[data-add-watched]"),i=document.querySelector("[data-add-queue]"),u=document.querySelector("[data-modal-close]"),g=document.querySelector(".btn-ytb"),m=document.querySelector(".icon-youtube");s.addEventListener("click",(()=>{(0,c.onAddWatchClick)(a);const e=JSON.parse(localStorage.getItem("watch"));"active"===r.refs.btnWathed.dataset.watch&&y(e)})),i.addEventListener("click",(()=>{(0,c.onAddQueueClick)(a);const e=JSON.parse(localStorage.getItem("queue"));"active"===r.refs.btnQueue.dataset.queue&&y(e)})),l.serverApi.getTrailer(t).then((({results:e})=>{0!==e.length?(m.classList.add("icon-youtube__enable"),m.classList.remove("icon-youtube__disabled")):(m.classList.remove("icon-youtube__enable"),m.classList.add("icon-youtube__disabled"),g.setAttribute("disabled",!0))})),g.addEventListener("click",p.handleClick),u.addEventListener("click",d.closeModal)}));i=s("fb9GJ"),r=s("3fz09"),u=s("2nhTy");function b(){r.refs.btnWathed.dataset.watch="",r.refs.btnQueue.dataset.queue="active";try{const t=JSON.parse(localStorage.getItem("queue"));if(!t||0===t.length)return r.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>',void r.refs.tuiContainer.classList.add("visually-hidden");{u.options.totalItems=t.length;let a=0,n=20;const s=e=>{a=e*u.options.itemsPerPage-20,n=e*u.options.itemsPerPage};r.refs.tuiContainer.classList.remove("visually-hidden"),y(t.slice(a,n));new(e(i))(r.refs.tuiContainer,u.options).on("beforeMove",(e=>{const r=e.page;s(r),y(t.slice(a,n))}))}}catch(e){console.log(e.message)}}r.refs.btnQueue.addEventListener("click",b);l=s("185lj");!function(){l.serverApi.setlang(JSON.parse(localStorage.getItem("language")));try{const e=JSON.parse(localStorage.getItem("watch")),t=JSON.parse(localStorage.getItem("queue"));e||t?e&&0!==e.length?h():t&&0!==t.length&&!e||0===e.length?b():r.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>'):r.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>')}catch(e){console.log(e.message)}}(),s("bTcpz"),s("7bYU0"),s("2nhTy"),s("eobyt"),s("3TU0j"),s("3hXKf"),s("2ix2C");
//# sourceMappingURL=mylibrary.7f9bf185.js.map
