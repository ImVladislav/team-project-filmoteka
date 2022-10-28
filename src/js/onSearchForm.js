import Notiflix from 'notiflix';
import { refs } from './utilitiesJS/refs';
import { ServerApi } from './utilitiesJS/serverApi';
import { murkupGalleryOnPageLoading } from './utilitiesJS/murkupGalleryOnPageLoading';
import { clearPage } from './utilitiesJS/clearPage';

const serverApi = new ServerApi();
let searchQuery = ' ';
refs.formRef.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.elements.serch_film.value
    .trim()
    .toLowerCase();

  if (!searchQuery) {
    Notiflix.Notify.failure('Enter the name of the movie', {
      position: 'center-top',
      fontFamily: 'inherit',
      borderRadius: '25px',
      clickToClose: true,
    });
    clearPage();
    return;
  }
  clearPage();
  murkupSearchMovie();
}

async function murkupSearchMovie() {
  const movies = await serverApi.getMovieOnDemand(searchQuery);
  if (movies.length === 0) {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name and',
      {
        position: 'center-top',
        fontFamily: 'inherit',
        borderRadius: '25px',
        clickToClose: true,
      }
    );
    searchQuery = ' ';
    return;
  }
  murkupGalleryOnPageLoading(movies);
  Notiflix.Notify.success('We found movies', {
    position: 'center-top',
    fontFamily: 'inherit',
    borderRadius: '25px',
    clickToClose: true,
  });
}
