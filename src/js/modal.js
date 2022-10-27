const refs = {
  overlay: document.querySelector('.modal-overlay'),
  content: document.querySelector('.modal-content'),
  gallery: document.querySelector('.gallery'),
  body: document.querySelector('body'),
};

refs.gallery.addEventListener('click', onOpenModal);
refs.overlay.addEventListener('click', onCloseModal);

function onOpenModal() {
  refs.overlay.classList.add('visiable');
  refs.body.classList.add('no-scroll');
}

function onCloseModal(e) {
  if (e.target !== refs.content) {
    refs.overlay.classList.remove('visiable');
    refs.body.classList.remove('no-scroll');
  }
}
