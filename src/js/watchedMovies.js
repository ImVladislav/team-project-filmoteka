import Pagination from 'tui-pagination';
import Notiflix from 'notiflix';
import { refs } from './utilitiesJS/refs';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { serverApi } from './utilitiesJS/serverApi';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';
import { closeModal, onOpenModal } from './modal';
import { options } from './pagination';
import {
  makeQueueTextContent,
  makeWatchTextContent,
} from './utilitiesJS/modalBtnTextContent';
import { handleClick } from './treiler';
import { createMessage } from './utilitiesJS/createEmptyLibMessage';
import { murkupGallery } from './utilitiesJS/markupGllery';

refs.btnWathed.addEventListener('click', onBtnWatchedClick);

export function onBtnWatchedClick() {
  refs.btnWathed.dataset.watch = 'active';
  refs.btnQueue.dataset.queue = '';

  try {
    const watched = JSON.parse(localStorage.getItem('watch'));

    if (!watched || watched.length === 0) {
      refs.galleryLibrary.innerHTML = createMessage();
      refs.tuiContainer.classList.add('visually-hidden');
      return;
    } else {
      options.totalItems = watched.length;
      let start = 0;
      let end = 20;

      const handleSlice = currentPage => {
        start = currentPage * options.itemsPerPage - 20;
        end = currentPage * options.itemsPerPage;
      };

      refs.tuiContainer.classList.remove('visually-hidden');
      murkupGallery(watched.slice(start, end));
      const pagination = new Pagination(refs.tuiContainer, options);

      pagination.on('beforeMove', event => {
        const currentPage = event.page;
        handleSlice(currentPage);
        murkupGallery(watched.slice(start, end));
      });
    }
  } catch (error) {
    console.log(error.message);
  }
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
  const trailerBtn = document.querySelector('.btn-ytb');
  const iconTrailerBtn = document.querySelector('.icon-youtube');

  watchBtn.addEventListener('click', () => {
    onAddWatchClick(detailsMovie);
    const watched = JSON.parse(localStorage.getItem('watch'));

    if (refs.btnWathed.dataset.watch === 'active') {
      murkupGallery(watched);
    }
  });

  queueBtn.addEventListener('click', () => {
    onAddQueueClick(detailsMovie);
    const queued = JSON.parse(localStorage.getItem('queue'));

    if (refs.btnQueue.dataset.queue === 'active') {
      murkupGallery(queued);
    }
  });

  serverApi.getTrailer(id).then(({ results }) => {
    if (results.length !== 0) {
      iconTrailerBtn.classList.add('icon-youtube__enable');
      iconTrailerBtn.classList.remove('icon-youtube__disabled');
    } else {
      iconTrailerBtn.classList.remove('icon-youtube__enable');
      iconTrailerBtn.classList.add('icon-youtube__disabled');
      trailerBtn.setAttribute('disabled', true);
      Notiflix.Notify.failure('Oh! Unfortunately there is no trailer', {
        position: 'center-top',
        fontFamily: 'inherit',
        borderRadius: '25px',
        clickToClose: true,
      });
    }
  });

  trailerBtn.addEventListener('click', handleClick);
  closeModalBtn.addEventListener('click', closeModal);
}
