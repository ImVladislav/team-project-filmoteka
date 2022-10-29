import { refs } from './utilitiesJS/refs';
import { posterСheck } from './utilitiesJS/posterCheck';
import { clearPage } from './utilitiesJS/clearPage';

refs.btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnQueueClick() {
  clearPage();
  const queue = JSON.parse(localStorage.getItem('queue'));
  murkupGalleryOnBtnQueued(queue);
}

function murkupGalleryOnBtnQueued(movies) {
  const moviesMurkup = movies
    .map(({ original_title, title, poster_path, id }) => {
      const src = posterСheck(poster_path);

      return `
        <li class="film__item" data-id="${id}">
        <img src="${src}" class="film__img" alt="${original_title}" />
        <p class="film__title">${title}</p>
        <p class="film__genre">Drama, Action | 2020</p>
      </li>`;
    })
    .join(``);

  return refs.galleryLibrary.insertAdjacentHTML(`beforeend`, moviesMurkup);
}
