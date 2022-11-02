import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import { murkupGallery } from './utilitiesJS/murkupGalleryOnPageLoading';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { closeModal, onOpenModal } from './modal';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';
import {
  makeQueueTextContent,
  makeWatchTextContent,
} from './utilitiesJS/modalBtnTextContent';
import { handleClick } from './treiler';
import { spinnerPlay, spinnerStop } from './spinner';

murkupGallery();

refs.gallery.addEventListener(`click`, onClickMovie);

async function onClickMovie(e) {
  if (e.target.parentElement.className !== 'film__item') {
    return;
  }

  onOpenModal();

  spinnerPlay();

  const id = e.target.parentElement.dataset.id;

  const detailsMovie = await serverApi.getDetailsMovie(id);

  const movieMurkup = await movieDescriptionMurkup(detailsMovie);

  refs.movieDescription.insertAdjacentHTML('beforeend', movieMurkup);

  spinnerStop();

  makeWatchTextContent(detailsMovie);
  makeQueueTextContent(detailsMovie);

  const watchBtn = document.querySelector('[data-add-watched]');
  const queueBtn = document.querySelector('[data-add-queue]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const trailerBtn = document.querySelector('.btn-ytb');
  const iconTrailerBtn = document.querySelector('.icon-youtube');

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

  watchBtn.addEventListener('click', () => onAddWatchClick(detailsMovie));
  queueBtn.addEventListener('click', () => onAddQueueClick(detailsMovie));
  trailerBtn.addEventListener('click', handleClick);

  closeModalBtn.addEventListener('click', closeModal);
}
