import Notiflix from 'notiflix';
import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import { murkupGalleryOnPageLoading } from './utilitiesJS/murkupGalleryOnPageLoading';
import { clearPage } from './utilitiesJS/clearPage';


let searchQuery = ' ';
refs.formRef.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.elements.serch_film.value
    .trim()
    .toLowerCase();

  if (!searchQuery) {
    Notiflix.Notify.failure(
      'Search result not successful. Enter the correct movie name and ',
      {
        position: 'center-center',
        cssAnimationStyle: 'from-top',
        showOnlyTheLastOne: true,
        clickToClose: true,
      }
    );
    clearPage();
    return;
  }
  clearPage();
  murkupSearchMovie();
}

async function murkupSearchMovie() {
  const movies = await serverApi.getMovieOnDemand(searchQuery);
  murkupGalleryOnPageLoading(movies);
}
