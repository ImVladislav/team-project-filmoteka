!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire62bd;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire62bd=a),a("5xtVg"),a("aZhHc");var i=a("bpxeT"),c=a("2TvXO"),o=a("hiFhO"),l=a("9PJ7S"),s=a("5xtVg"),d=a("kiFmR"),u=a("jaaYu"),f=(d=a("kiFmR"),a("5xtVg"),a("4cXS4")),p=(s=a("5xtVg"),a("5HOzi"));function m(){return(m=e(i)(e(c).mark((function t(n){var r,a,i,l,m,g;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("film__item"===n.target.parentElement.className){e.next=2;break}return e.abrupt("return");case 2:return(0,s.onOpenModal)(),r=n.target.parentElement.dataset.id,e.next=6,u.serverApi.getDetailsMovie(r);case 6:return a=e.sent,e.next=9,(0,d.movieDescriptionMurkup)(a);case 9:i=e.sent,o.refs.movieDescription.insertAdjacentHTML("beforeend",i),(0,p.makeWatchTextContent)(a),(0,p.makeQueueTextContent)(a),l=document.querySelector("[data-add-watched]"),m=document.querySelector("[data-add-queue]"),g=document.querySelector("[data-modal-close]"),l.addEventListener("click",(function(){return(0,f.onAddWatchClick)(a)})),m.addEventListener("click",(function(){return(0,f.onAddQueueClick)(a)})),g.addEventListener("click",s.closeModal);case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}o.refs.btnWathed.addEventListener("click",(function e(){try{var t=JSON.parse(localStorage.getItem("watch"));if(!t)return o.refs.mainList.classList.add("not-films"),o.refs.containerLib.insertAdjacentHTML("beforeend",createMessage()),void o.refs.btnWathed.removeEventListener("click",e);n=t.map((function(e){var t=e.original_title,n=e.title,r=e.poster_path,a=e.id,i=(0,l.posterСheck)(r);return'\n        <li class="film__item" data-id="'.concat(a,'">\n        <img src="').concat(i,'" class="film__img" alt="').concat(t,'" />\n        <p class="film__title">').concat(n,'</p>\n        <p class="film__genre">Drama, Action | 2020</p>\n      </li>')})).join(""),o.refs.galleryLibrary.innerHTML=n}catch(e){console.log(e.message)}var n})),o.refs.galleryLibrary.addEventListener("click",(function(e){return m.apply(this,arguments)}));o=a("hiFhO"),l=a("9PJ7S");(o=a("hiFhO")).refs.btnQueue.addEventListener("click",(function(){e=JSON.parse(localStorage.getItem("queue")),t=e.map((function(e){var t=e.original_title,n=e.title,r=e.poster_path,a=e.id,i=(0,l.posterСheck)(r);return'\n        <li class="film__item" data-id="'.concat(a,'">\n        <img src="').concat(i,'" class="film__img" alt="').concat(t,'" />\n        <p class="film__title">').concat(n,'</p>\n        <p class="film__genre">Drama, Action | 2020</p>\n      </li>')})).join(""),o.refs.galleryLibrary.innerHTML=t;var e,t})),a("jcFG7"),a("3ngM5"),a("dUjMA")}();
//# sourceMappingURL=mylibrary.b560ed96.js.map
