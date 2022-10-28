import { refs } from './utilitiesJS/refs';
import { ServerApi } from './utilitiesJS/serverApi';
import { murkupGallery } from './utilitiesJS/murkupGalleryOnPageLoading';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { onOpenModal } from './modal';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';

const serverApi = new ServerApi();

murkupGallery();

serverApi.getMovieOnDemand();

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

  document
    .querySelector('[data-add-watched]')
    .addEventListener('click', () => onAddWatchClick(detailsMovie));
  document
    .querySelector('[data-add-queue]')
    .addEventListener('click', () => onAddQueueClick(detailsMovie));
}
