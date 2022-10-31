import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { murkupGallery } from './utilitiesJS/murkupGalleryOnPageLoading';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { closeModal, onOpenModal } from './modal';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';
import {
  makeQueueTextContent,
  makeWatchTextContent,
} from './utilitiesJS/modalBtnTextContent';
import { handleClick } from './treiler';


murkupGallery();

refs.gallery.addEventListener(`click`, onClickMovie);

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

  watchBtn.addEventListener('click', () => onAddWatchClick(detailsMovie));
  queueBtn.addEventListener('click', () => onAddQueueClick(detailsMovie));
  trailerBtn.addEventListener('click', handleClick);

  closeModalBtn.addEventListener('click', closeModal);
}
