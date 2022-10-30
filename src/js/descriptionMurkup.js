import { posterСheck } from './utilitiesJS/posterCheck';
import symbol from '../images/symbol-defs.svg';

export const movieDescriptionMurkup = ({
  id,
  poster_path,
  title,
  original_title,
  popularity,
  overview,
  genres,
  vote_average,
  vote_count,
}) => {
  const src = posterСheck(poster_path);

  const genreList = [];
  genres.forEach(({ name }) => genreList.push(name));

  return `
  <div class="movie__description" data-movie-id="${id}">
  <div class="movie__poster-wrappaer">
    <img src="${src}" alt="${title}" class="movie__poster" />
  </div>
  <div class="movie__container">
    <h3 class="movie__title">${title}</h3>
    <div class="description__container">
      <div class="description__title-wrapper">
        <p class="description__title">Vote / Votes</p>
        <p class="description__title">Popularity</p>
        <p class="description__title">Original Title</p>
        <p class="description__title">Genre</p>
      </div>
      <div class="description__text-wrapper">
        <p class="description__text">
          <span class="vote vote-accent">${vote_average}</span>&#47;<span
            class="vote"
            >${vote_count}</span
          >
        </p>
        <p class="description__text">${popularity}</p>
        <p class="description__text">${original_title}</p>
        <p class="description__text">${genreList.join(', ')}</p>
      </div>
    </div>
    <h4 class="about__title">About</h4>
    <p class="about__text">${overview}</p>
    <div class="btn__container">
      <button type="button" class="modal__btn" data-add-watched></button>
      <button type="button" class="modal__btn" data-add-queue></button>
    </div>
  </div>
  <button type="button" class="modal__close" data-modal-close>
    <svg class="modal__close-icon" width="18" height="18">
      <use href="${symbol}#icon-close"></use>
    </svg>
  </button>
</div>
  `;
};
