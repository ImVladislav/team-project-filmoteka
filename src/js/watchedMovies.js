import { refs } from './utilitiesJS/refs';
import { posterСheck } from './utilitiesJS/posterCheck';
import { onOpenModal } from './modal';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { serverApi } from './utilitiesJS/serverApi';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { onOpenModal } from './modal';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';
import { closeModal, onOpenModal } from './modal';
import {
  makeQueueTextContent,
  makeWatchTextContent,
} from './utilitiesJS/modalBtnTextContent';

refs.btnWathed.addEventListener('click', onBtnWatchedClick);

function onBtnWatchedClick() {
  try {
    const watched = JSON.parse(localStorage.getItem('watch'));
    if (!watched) {
      refs.mainList.classList.add('not-films');
      refs.containerLib.insertAdjacentHTML('beforeend', createMessage());
      refs.btnWathed.removeEventListener('click', onBtnWatchedClick);
      return;
    }

    murkupGalleryOnBtnWatched(watched);
  } catch (error) {
    console.log(error.message);
  }
}

function murkupGalleryOnBtnWatched(movies) {
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

  return (refs.galleryLibrary.innerHTML = moviesMurkup);
}

refs.galleryLibrary.addEventListener(`click`, onClickMovie);

async function onClickMovie(e) {
  if (e.target.parentElement.className !== 'film__item') {
    return;
  }

  onOpenModal();
  const id = e.target.parentElement.dataset.id;

  const detailsMovie = await serverApi.getDetailsMovie(id);

  const movieMurkup = await movieDescriptionMurkup(detailsMovie);

  refs.movieDescription.insertAdjacentHTML('beforeend', movieMurkup);
  makeWatchTextContent(detailsMovie);
  makeQueueTextContent(detailsMovie);

  const watchBtn = document.querySelector('[data-add-watched]');
  const queueBtn = document.querySelector('[data-add-queue]');
  const closeModalBtn = document.querySelector('[data-modal-close]');

  watchBtn.addEventListener('click', () => {
    onAddWatchClick(detailsMovie);
    const watched = JSON.parse(localStorage.getItem('watch'));
    murkupGalleryOnBtnWatched(watched);
  });
  queueBtn.addEventListener('click', () => {
    onAddQueueClick(detailsMovie);
    const queued = JSON.parse(localStorage.getItem('queue'));
    murkupGalleryOnBtnWatched(queued);
  });
  closeModalBtn.addEventListener('click', closeModal);
}
