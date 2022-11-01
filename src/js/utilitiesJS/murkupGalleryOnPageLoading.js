import Pagination from 'tui-pagination';

import { refs } from './refs';
import { serverApi } from './serverApi';
import { posterСheck } from './posterCheck';
import { options } from '../pagination';
import { genres } from './genres';
import { genresArr } from './genres';
import { spinnerPlay, spinnerStop } from '../spinner';
import { genresArr, genresUK } from './genres';
import { genresArr } from './genres';
import { spinnerPlay, spinnerStop } from '../spinner';
import warship from '../../images/warship.jpg';

const pagination = new Pagination(refs.tuiContainer, options);

spinnerPlay(); // ! не пересовувати

pagination.on('beforeMove', async event => {

  pagination.setTotalItems(serverApi.totalResults);
  const currentPage = event.page;
  serverApi.setPage(currentPage);
  murkupGallery();
});

export function murkupGalleryOnPageLoading(movies) {
  const moviesMurkup = movies

    .map(
      ({ original_title, title, poster_path, id, genre_ids, release_date }) => {
        const src = posterСheck(poster_path);

        let genresMovie = null;
        let releaseDate = null;

        // проверка на жанры фильмов

        const genresMovies = genresArr.reduce((acc, genre) => {
          if (genre_ids.includes(genre.id)) {
            acc.push(genre.name);
          }
          return acc;
        }, []);

        if (genresMovies.length > 3) {
          genresMovie = genresMovies.slice(0, 2);
          genresMovie.splice(2, 1, 'Other');
        } else if (genresMovies.length === 0) {
          genresMovie = [`Genres not found`];
        } else {
          genresMovie = genresMovies;
        }

        // проверка на дату релиза
        if (release_date === '') {
          releaseDate = 'Release data no found';
        } else {
          releaseDate = release_date.slice(0, 4);
        }

        return `
        <li class="film__item" data-id="${id}">
        <img src="${src}" class="film__img" alt="${original_title}" />
        <div>
        <p class="film__title">${title}</p>
        <p class="film__genre">${genresMovie.join(
          `, `
        )} | ${releaseDate}</p></div>
      </li>`;
      }
    )
    .join(``);

  if (refs.langValue.value === 'ru') {
    return (refs.gallery.innerHTML = `<li class="warship"><img src="${warship}" /></li>`);
  }

  return (refs.gallery.innerHTML = moviesMurkup);
}

export async function murkupGallery() {
  const movies = await serverApi.getPopularMovie();

  const total_results = movies.total_results;
  serverApi.setTotalResults(total_results);

  murkupGalleryOnPageLoading(movies.results);

  spinnerStop();
}
