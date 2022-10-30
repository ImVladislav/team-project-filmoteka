import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import { murkupGallery } from './utilitiesJS/murkupGalleryOnPageLoading';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { onOpenModal } from './modal';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';
import {
  makeQueueTextContent,
  makeWatchTextContent,
} from './utilitiesJS/modalBtnTextContent';

murkupGallery();

refs.gallery.addEventListener(`click`, onClickMovie);

async function onClickMovie(e) {
  if (e.target.parentElement.className !== 'film__item') {
    return;
  }

  onOpenModal();

  let id = e.target.parentElement.dataset.id;

  let detailsMovie = await serverApi.getDetailsMovie(id);

  const movieMurkup = await movieDescriptionMurkup(detailsMovie);

  refs.movieDescription.insertAdjacentHTML('beforeend', movieMurkup);
  makeWatchTextContent(detailsMovie);
  makeQueueTextContent(detailsMovie);

  const watchBtn = document.querySelector('[data-add-watched]');
  const queueBtn = document.querySelector('[data-add-queue]');


  await refs.addWatched.addEventListener('click', () => {
    if (detailsMovie === '') {
      return;
    }

    onAddWatchClick(detailsMovie);
    detailsMovie = '';
  });

  await refs.addQueue.addEventListener('click', () => {
    if (detailsMovie === '') {
      return;
    }
    onAddQueueClick(detailsMovie);
    detailsMovie = '';
  });

}
