function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire62bd;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire62bd=i),i("bTcpz");var o=i("185lj");const a=document.querySelector(".select__lang");if(a.addEventListener("change",(function(e){const t=e.target.value;o.serverApi.setlang(t),localStorage.setItem("language",JSON.stringify(t)),location.reload()})),localStorage.getItem("language")){const e=JSON.parse(localStorage.getItem("language"));a.value=e,o.serverApi.setlang(e)}var s=i("3fz09"),l=(o=i("185lj"),i("fb9GJ")),c=(s=i("3fz09"),o=i("185lj"),i("1fedI")),u=i("2nhTy"),d=i("bRnc2"),p=i("04jNI");const f=document.querySelector(".tui-pagination"),m=new(e(l))(f,u.options);function g(e){const t=e.map((({original_title:e,title:t,poster_path:n,id:r,genre_ids:i,release_date:o})=>{const a=(0,c.posterСheck)(n);let s=null,l=null;const u=d.genresArr.reduce(((e,t)=>(i.includes(t.id)&&e.push(t.name),e)),[]);return u.length>3?(s=u.slice(0,2),s.splice(2,1,"Other")):s=0===u.length?["Genres not found"]:u,l=""===o?"Release data no found":o.slice(0,4),`\n        <li class="film__item" data-id="${r}">\n        <img src="${a}" class="film__img" alt="${e}" loading="lazy" width="368" height="591"/>\n        <p class="film__title">${t}</p>\n        <p class="film__genre">${s.join(", ")} | ${l}</p>\n      </li>`})).join("");return s.refs.gallery.innerHTML=t}async function v(){const e=await o.serverApi.getPopularMovie(),t=e.total_results;o.serverApi.setTotalResults(t),g(e.results),(0,p.spinnerStop)()}(0,p.spinnerPlay)(),m.on("beforeMove",(async e=>{(0,p.spinnerPlay)(),m.setTotalItems(o.serverApi.totalResults);const t=e.page;o.serverApi.setPage(t),v()}));var y=i("it60l"),h=i("bTcpz"),_=i("9Co7P"),b=i("lFT8c"),S=i("c8VpK");p=i("04jNI");v(),s.refs.gallery.addEventListener("click",(async function(e){if("film__item"!==e.target.parentElement.className)return;(0,h.onOpenModal)(),(0,p.spinnerPlay)();const t=e.target.parentElement.dataset.id,n=await o.serverApi.getDetailsMovie(t),r=await(0,y.movieDescriptionMurkup)(n);s.refs.movieDescription.insertAdjacentHTML("beforeend",r),(0,p.spinnerStop)(),(0,b.makeWatchTextContent)(n),(0,b.makeQueueTextContent)(n);const i=document.querySelector("[data-add-watched]"),a=document.querySelector("[data-add-queue]"),l=document.querySelector("[data-modal-close]"),c=document.querySelector(".btn-ytb");i.addEventListener("click",(()=>(0,_.onAddWatchClick)(n))),a.addEventListener("click",(()=>(0,_.onAddQueueClick)(n))),c.addEventListener("click",S.handleClick),l.addEventListener("click",h.closeModal)}));var T=i("eWCmQ");l=i("fb9GJ"),s=i("3fz09"),o=i("185lj"),u=i("2nhTy"),p=i("04jNI");let w=" ";async function A(){const t=await o.serverApi.getMovieOnDemand(w),n=t.results,r=t.total_results;if(u.options.totalItems=r,r<20){document.querySelector(".tui-js").classList.add("visually-hidden")}else{document.querySelector(".tui-js").classList.remove("visually-hidden")}if(0===n.length)return e(T).Notify.failure("Search result not successful. Enter the correct movie name and",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),void(w=" ");g(n)}s.refs.formRef.addEventListener("submit",(async function(t){t.preventDefault(),(0,p.spinnerPlay)();if(document.querySelector(".header__form-input").addEventListener("change",(()=>{o.serverApi.setPage(1),o.serverApi.setRequestCount()})),w=t.currentTarget.elements.serch_film.value.trim().toLowerCase(),!w)return void e(T).Notify.failure("Enter the name of the movie",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0});await A(),(0,p.spinnerStop)();const n=document.querySelector(".tui-pagination");new(e(l))(n,u.options).on("beforeMove",(e=>{const t=e.page;o.serverApi.setPage(t),o.serverApi.incrementRequestCount(),A()}))})),i("2nhTy"),i("7bYU0"),i("eobyt"),i("c8VpK"),i("3TU0j"),i("3hXKf"),i("04jNI");
//# sourceMappingURL=index.a9451229.js.map
