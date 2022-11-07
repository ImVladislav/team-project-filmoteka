import { refs } from './refs';
import { posterСheck } from './posterCheck';
import { genresArr, genresUK } from './genres';
import { createMessage } from './createEmptyLibMessage';
import { makeGenres } from './makeGenres';
import { makeDate } from './makeReleaseDate';

export function murkupGallery(movies) {
  if (!movies.length) {
    refs.tuiContainer.classList.add('visually-hidden');
    return (refs.galleryLibrary.innerHTML = createMessage());
  }

  const moviesMurkup = movies
    .map(({ original_title, title, poster_path, id, genres, release_date }) => {
      const genresId = genres.map(genre => genre.id);
      const src = posterСheck(poster_path);

      return `
          <li class="film__item" data-id="${id}">
          <img src="${src}" class="film__img" alt="${original_title}" />
          <p class="film__title">${title}</p>
          <p class="film__genre">${makeGenres(genresId)} | ${makeDate(
        release_date
      )}</p>
        </li>`;
    })
    .join(``);

  return (refs.galleryLibrary.innerHTML = moviesMurkup);
}
