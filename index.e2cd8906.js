const e={overlay:document.querySelector(".modal-overlay"),content:document.querySelector(".modal-content"),gallery:document.querySelector(".gallery"),body:document.querySelector("body")};e.gallery.addEventListener("click",(function(){e.overlay.classList.add("visiable"),e.body.classList.add("no-scroll")})),e.overlay.addEventListener("click",(function(o){o.target!==e.content&&(e.overlay.classList.remove("visiable"),e.body.classList.remove("no-scroll"))}));
//# sourceMappingURL=index.e2cd8906.js.map
