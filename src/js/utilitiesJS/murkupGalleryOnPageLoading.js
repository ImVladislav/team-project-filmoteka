import Pagination from 'tui-pagination';

import { refs } from './refs';
import { serverApi } from './serverApi';
import { posterСheck } from './posterCheck';
import { options } from '../pagination';
import { spinnerPlay, spinnerStop } from '../spinner';
import { spinnerPlay, spinnerStop } from '../spinner';
import warship from '../../images/warship.jpg';
import { makeGenres } from './makeGenres';
import { makeDate } from './makeReleaseDate';

const pagination = new Pagination(refs.tuiContainer, options);

spinnerPlay(); // ! не пересовувати

pagination.on('beforeMove', async event => {
  spinnerPlay();
  pagination.setTotalItems(serverApi.totalResults);

  if (refs.trend.value === 'top' || refs.trend.value === 'popular') {
    pagination.setTotalItems(10000);
    serverApi.setTotalResults(10000);
  } else {
    pagination.setTotalItems(serverApi.totalResults);
  }

  const currentPage = event.page;
  serverApi.setPage(currentPage);
  murkupGallery();
});

export function murkupGalleryOnPageLoading(movies) {
  if (!JSON.parse(localStorage.getItem('language'))) {
    localStorage.setItem('language', JSON.stringify(refs.langValue.value));
  }

  serverApi.setPage(1);

  if (refs.langValue.value === 'ru') {
    return (refs.gallery.innerHTML = `<li class="warship"><img src="${warship}" /></li>`);
  }

  const moviesMurkup = movies

    .map(
      ({ original_title, title, poster_path, id, genre_ids, release_date }) => {
        const src = posterСheck(poster_path);

        const genres = makeGenres(genre_ids);

        return `
        <li class="film__item" data-id="${id}">
        <img src="${src}" class="film__img" alt="${original_title}" />
        <div>
        <p class="film__title">${title}</p>
        <p class="film__genre">${genres} | ${makeDate(release_date)}</p></div>
      </li>`;
      }
    )
    .join(``);

  return (refs.gallery.innerHTML = moviesMurkup);
}

export async function murkupGallery() {
  try {
    let movies = [];

    if (refs.trend.value === 'top') {
      movies = await serverApi.getTop();
    } else if (refs.trend.value === 'popular') {
      movies = await serverApi.getPopular();
    } else {
      movies = await serverApi.getPopularMovie();
    }

    serverApi.setTotalResults(movies.total_results);
    murkupGalleryOnPageLoading(movies.results);
  } catch (error) {
    console.log(error);
  }

  spinnerStop();
}
