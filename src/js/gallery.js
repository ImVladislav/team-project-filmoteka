import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import { murkupGallery } from './utilitiesJS/murkupGalleryOnPageLoading';
import { movieDescriptionMurkup, moviePoster } from './descriptionMurkup';
import { onOpenModal } from './modal';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';

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

  const moviePosterDescr = await moviePoster(detailsMovie);

  await refs.movieDescription.insertAdjacentHTML('afterbegin', movieMurkup);
  await refs.moviePoster.insertAdjacentHTML('afterbegin', moviePosterDescr);

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
