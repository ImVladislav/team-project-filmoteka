import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';

import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import { murkupGalleryOnPageLoading } from './utilitiesJS/murkupGalleryOnPageLoading';
import { clearPage } from './utilitiesJS/clearPage';

import { options } from './pagination';

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
  const container = document.querySelector('.tui-pagination');

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', async event => {
    const currentPage = event.page;
    serverApi.setPage(currentPage);
    murkupSearchMovie();
  });
}

export async function murkupSearchMovie() {
  const data = await serverApi.getMovieOnDemand(searchQuery);
  const movies = data.results;
  const total_results = data.total_results;
  serverApi.setTotalResults(total_results);

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
