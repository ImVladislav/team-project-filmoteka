import { refs } from './utilitiesJS/refs';
import { ServerApi } from './utilitiesJS/serverApi';
import { murkupGallery } from './utilitiesJS/murkupGalleryOnPageLoading';
import { movieDescriptionMurkup } from './descriptionMurkup';

const serverApi = new ServerApi();

murkupGallery();

serverApi.getMovieOnDemand();

refs.gallery.addEventListener(`click`, onClickMovie);

async function onClickMovie(e) {
  if (e.target.nodeName !== `IMG`) {
    return;
  }

  const title = e.target.getAttribute(`alt`);

  const movie = await serverApi.getMovieOnDemand(title);
  const id = await movie[0].id;

  const detailsMovie = await serverApi.getDetailsMovie(id);

  const movieMurkup = await movieDescriptionMurkup(detailsMovie);

  refs.movieDescription.insertAdjacentHTML('beforeend', movieMurkup);
  //   console.log(detailsMovie);
}
