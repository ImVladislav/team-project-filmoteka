!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire62bd;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire62bd=i),i("5xtVg"),i("aZhHc");var a=i("bpxeT"),c=i("2TvXO"),s=i("hiFhO"),l=i("9PJ7S"),o=i("5xtVg"),d=i("kiFmR"),u=i("jaaYu"),f=(d=i("kiFmR"),o=i("5xtVg"),i("4cXS4"));function p(){return(p=e(a)(e(c).mark((function t(n){var r,i,a,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("film__item"===n.target.parentElement.className){e.next=2;break}return e.abrupt("return");case 2:return(0,o.onOpenModal)(),r=n.target.parentElement.dataset.id,e.next=6,u.serverApi.getDetailsMovie(r);case 6:return i=e.sent,e.next=9,(0,d.movieDescriptionMurkup)(i);case 9:return a=e.sent,e.next=12,moviePoster(i);case 12:return l=e.sent,e.next=15,s.refs.movieDescription.insertAdjacentHTML("afterbegin",a);case 15:return e.next=17,s.refs.moviePoster.insertAdjacentHTML("afterbegin",l);case 17:return e.next=19,s.refs.addWatched.addEventListener("click",(function(){return(0,f.onAddWatchClick)(i)}));case 19:return e.next=21,s.refs.addQueue.addEventListener("click",(function(){return(0,f.onAddQueueClick)(i)}));case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(s=i("hiFhO")).refs.btnWathed.addEventListener("click",(function e(){try{var t=JSON.parse(localStorage.getItem("watch"));if(!t)return s.refs.mainList.classList.add("not-films"),s.refs.containerLib.insertAdjacentHTML("beforeend",createMessage()),void s.refs.btnWathed.removeEventListener("click",e);n=t.map((function(e){var t=e.original_title,n=e.title,r=e.poster_path,i=e.id,a=(0,l.posterСheck)(r);return'\n        <li class="film__item" data-id="'.concat(i,'">\n        <img src="').concat(a,'" class="film__img" alt="').concat(t,'" />\n        <p class="film__title">').concat(n,'</p>\n        <p class="film__genre">Drama, Action | 2020</p>\n      </li>')})).join(""),s.refs.galleryLibrary.innerHTML=n}catch(e){console.log(e.message)}var n})),s.refs.galleryLibrary.addEventListener("click",(function(e){return p.apply(this,arguments)}));s=i("hiFhO"),l=i("9PJ7S");s.refs.btnQueue.addEventListener("click",(function(){e=JSON.parse(localStorage.getItem("queue")),t=e.map((function(e){var t=e.original_title,n=e.title,r=e.poster_path,i=e.id,a=(0,l.posterСheck)(r);return'\n        <li class="film__item" data-id="'.concat(i,'">\n        <img src="').concat(a,'" class="film__img" alt="').concat(t,'" />\n        <p class="film__title">').concat(n,'</p>\n        <p class="film__genre">Drama, Action | 2020</p>\n      </li>')})).join(""),s.refs.galleryLibrary.innerHTML=t;var e,t})),i("jcFG7"),i("3ngM5")}();
//# sourceMappingURL=mylibrary.ec88c1ed.js.map
