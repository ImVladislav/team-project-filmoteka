!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire62bd;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire62bd=i),i("5xtVg"),i("aZhHc");var a=i("bpxeT"),s=i("2TvXO"),o=i("1VFfL"),c=i("hiFhO"),l=i("9PJ7S"),u=i("5xtVg"),d=i("kiFmR"),f=i("jaaYu"),p=(d=i("kiFmR"),i("5xtVg"),i("4cXS4")),m=(u=i("5xtVg"),i("jcFG7")),g=i("4zVoc"),v=i("5HOzi");function h(e){var t=e.map((function(e){var t=e.original_title,n=e.title,r=e.poster_path,i=e.id,a=e.genres,s=e.release_date,o=null,c=null,u=a.map((function(e){return e.id})),d=(0,l.posterСheck)(r),f=g.genresArr.reduce((function(e,t){return u.includes(t.id)&&e.push(t.name),e}),[]);return f.length>3?(o=f.slice(0,2)).splice(2,1,"Other"):o=0===f.length?["Genres not found"]:f,c=""===s?"Release data no found":s.slice(0,4),'\n        <li class="film__item" data-id="'.concat(i,'">\n        <img src="').concat(d,'" class="film__img" alt="').concat(t,'" />\n        <p class="film__title">').concat(n,'</p>\n        <p class="film__genre">').concat(o.join(", ")," | ").concat(c,"</p>\n      </li>")})).join("");return c.refs.galleryLibrary.innerHTML=t}function L(){return(L=e(a)(e(s).mark((function t(n){var r,i,a,o,l,m;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("film__item"===n.target.parentElement.className){e.next=2;break}return e.abrupt("return");case 2:return(0,u.onOpenModal)(),r=n.target.parentElement.dataset.id,e.next=6,f.serverApi.getDetailsMovie(r);case 6:return i=e.sent,e.next=9,(0,d.movieDescriptionMurkup)(i);case 9:a=e.sent,c.refs.movieDescription.insertAdjacentHTML("beforeend",a),(0,v.makeWatchTextContent)(i),(0,v.makeQueueTextContent)(i),o=document.querySelector("[data-add-watched]"),l=document.querySelector("[data-add-queue]"),m=document.querySelector("[data-modal-close]"),o.addEventListener("click",(function(){(0,p.onAddWatchClick)(i),h(JSON.parse(localStorage.getItem("watch")))})),l.addEventListener("click",(function(){(0,p.onAddQueueClick)(i),h(JSON.parse(localStorage.getItem("queue")))})),m.addEventListener("click",u.closeModal);case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}c.refs.btnWathed.addEventListener("click",(function t(){try{var n=JSON.parse(localStorage.getItem("watch"));m.options.totalItems=n.length;var r=0,i=20;if(!n.length)return c.refs.mainList.classList.add("not-films"),c.refs.containerLib.insertAdjacentHTML("beforeend",createMessage()),c.refs.btnWathed.removeEventListener("click",t),void document.querySelector(".tui-js").classList.add("visually-hidden");document.querySelector(".tui-js").classList.remove("visually-hidden"),h(n.slice(r,i));var a=document.querySelector(".tui-pagination");new(e(o))(a,m.options).on("beforeMove",(function(e){var t=e.page;r=t*m.options.itemsPerPage-20,i=t*m.options.itemsPerPage,f.serverApi.setPage(t),f.serverApi.incrementRequestCount(),h(n.slice(r,i))}))}catch(e){console.log(e.message)}})),c.refs.galleryLibrary.addEventListener("click",(function(e){return L.apply(this,arguments)}));o=i("1VFfL"),c=i("hiFhO"),l=i("9PJ7S"),c=i("hiFhO");g=i("4zVoc"),m=i("jcFG7");function _(e){var t=e.map((function(e){var t=e.original_title,n=e.title,r=e.poster_path,i=e.id,a=e.genres,s=e.release_date,o=null,c=null,u=a.map((function(e){return e.id})),d=(0,l.posterСheck)(r),f=g.genresArr.reduce((function(e,t){return u.includes(t.id)&&e.push(t.name),e}),[]);return f.length>3?(o=f.slice(0,2)).splice(2,1,"Other"):o=0===f.length?["Genres not found"]:f,c=""===s?"Release data no found":s.slice(0,4),'\n        <li class="film__item" data-id="'.concat(i,'">\n        <img src="').concat(d,'" class="film__img" alt="').concat(t,'" />\n        <p class="film__title">').concat(n,'</p>\n        <p class="film__genre">').concat(o.join(", ")," | ").concat(c,"</p>\n      </li>")})).join("");return c.refs.galleryLibrary.innerHTML=t}c.refs.btnQueue.addEventListener("click",(function t(){_(JSON.parse(localStorage.getItem("queue")));try{var n=JSON.parse(localStorage.getItem("queue"));m.options.totalItems=n.length;var r=0,i=20;if(!n.length)return c.refs.mainList.classList.add("not-films"),c.refs.containerLib.insertAdjacentHTML("beforeend",createMessage()),c.refs.btnQueue.removeEventListener("click",t),void document.querySelector(".tui-js").classList.add("visually-hidden");document.querySelector(".tui-js").classList.remove("visually-hidden"),_(n.slice(r,i));var a=document.querySelector(".tui-pagination");new(e(o))(a,m.options).on("beforeMove",(function(e){var t=e.page;r=t*m.options.itemsPerPage-20,i=t*m.options.itemsPerPage,serverApi.setPage(t),serverApi.incrementRequestCount(),_(n.slice(r,i))}))}catch(e){console.log(e.message)}})),i("jcFG7"),i("3ngM5"),i("dUjMA"),i("fDiVl")}();
//# sourceMappingURL=mylibrary.7f91f019.js.map
