import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';
import { options } from './pagination';

import { murkupGalleryOnPageLoading } from './utilitiesJS/murkupGalleryOnPageLoading';
import { options } from './pagination';

import { spinnerPlay, spinnerStop } from './spinner';

let searchQuery = ' ';
refs.formRef.addEventListener('submit', onSubmitClick);

async function onSubmitClick(event) {
  event.preventDefault();
  spinnerPlay();

  const inputRef = document.querySelector('.header__form-input');
  inputRef.addEventListener('change', () => {
    serverApi.setPage(1);
    serverApi.setRequestCount();
  });

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
    return;
  }

  await murkupSearchMovie();

  spinnerStop();

  const container = document.querySelector('.tui-pagination');

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    serverApi.setPage(currentPage);
    serverApi.incrementRequestCount();
    murkupSearchMovie();
  });
}

export async function murkupSearchMovie() {
  const data = await serverApi.getMovieOnDemand(searchQuery);
  const movies = data.results;
  const total_results = data.total_results;
  options.totalItems = total_results;

  if (total_results < 20) {
    const item = document.querySelector('.tui-js');
    item.classList.add('visually-hidden');
  } else {
    const item = document.querySelector('.tui-js');
    item.classList.remove('visually-hidden');
  }

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
}
