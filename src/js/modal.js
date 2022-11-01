import { refs } from './utilitiesJS/refs';


refs.overlay.addEventListener('click', onCloseModal);

export function onOpenModal() {
  const marginSize = window.innerWidth - refs.body.clientWidth;
  if (marginSize) {
    refs.body.style.marginRight = marginSize + 'px';
  }

  refs.overlay.classList.add('visiable');
  refs.body.classList.add('no-scroll');

  window.addEventListener('keydown', onEscClick);
}

export function onCloseModal(e) {
  if (e.target === refs.overlay) {
    closeModal();
  }
}

function onEscClick(evt) {
  if (evt.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', onEscClick);
  }
}

export function closeModal() {
  refs.overlay.classList.remove('visiable');
  refs.body.classList.remove('no-scroll');
  refs.movieDescription.textContent = '';
  refs.body.style.marginRight = '';
}
