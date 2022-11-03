import { refs } from './refs';
import { posterСheck } from './posterCheck';
import { genresArr, genresUK } from './genres';
import { createMessage } from './createEmptyLibMessage';

export function murkupGallery(movies) {
  if (!movies.length) {
    refs.tuiContainer.classList.add('visually-hidden');
  }

  const moviesMurkup = movies
    .map(({ original_title, title, poster_path, id, genres, release_date }) => {
      let genresMovie = null;
      let releaseDate = null;
      let genresMovies = null;

      const currentLanguage = JSON.parse(localStorage.getItem('language'));
      const genresId = genres.map(genre => genre.id);
      const src = posterСheck(poster_path);

      if (currentLanguage === 'uk') {
        genresMovies = genresUK.reduce((acc, genre) => {
          if (genresId.includes(genre.id)) {
            acc.push(genre.name);
          }
          return acc;
        }, []);

        if (genresMovies.length > 3) {
          genresMovie = genresMovies.slice(0, 2);
          genresMovie.splice(2, 1, 'Інше');
        } else if (genresMovies.length === 0) {
          genresMovie = [`Жанрів не знайдено`];
        } else {
          genresMovie = genresMovies;
        }

        if (release_date === '') {
          releaseDate = 'Дату релізу не знайдено';
        } else {
          releaseDate = release_date.slice(0, 4);
        }
      } else {
        genresMovies = genresArr.reduce((acc, genre) => {
          if (genresId.includes(genre.id)) {
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

        if (release_date === '') {
          releaseDate = 'Release data no found';
        } else {
          releaseDate = release_date.slice(0, 4);
        }
      }

      return `
          <li class="film__item" data-id="${id}">
          <img src="${src}" class="film__img" alt="${original_title}" />
          <p class="film__title">${title}</p>
          <p class="film__genre">${genresMovie.join(`, `)} | ${releaseDate}</p>
        </li>`;
    })
    .join(``);

  return (refs.galleryLibrary.innerHTML = moviesMurkup);
}
