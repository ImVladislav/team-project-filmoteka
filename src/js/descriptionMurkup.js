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
  const popular = popularity.toString().includes('.')
    ? popularity.toFixed('1')
    : popularity;

  const aboutText =
    overview.length > 0
      ? overview
      : "Unfortunately, we don't have a description right now";

  const genreList = [];
  genres.forEach(({ name }) => genreList.push(name));
  const genre =
    genreList.length > 0 ? genreList.join(', ') : 'Genres not found';

  return `
  <div class="movie__description" data-movie-id="${id}">
  <div class="movie__poster-wrappaer">
    <img src="${src}" alt="${title}" class="movie__poster" />
    <button type="button" class="btn-cast" data-cast>
    <svg class="icon-cast" width="35" height="35">
      <use href="${symbol}#icon-cast"></use>
    </svg><span class="btn-cast-text">Cast</span>
    </button>
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
          <span class="vote vote-accent">${Number.parseFloat(
            vote_average.toString().slice(0, 3)
          )}</span>&#47;<span
            class="vote"
            >${vote_count}</span
          >
        </p>
        <p class="description__text description__popularity">${popular}</p>
        <p class="description__text">${original_title}</p>
        <p class="description__text">${genre}</p>
      </div>
    </div>
    <h4 class="about__title">About</h4>
    <p class="about__text">${aboutText}</p>
    <div class="btn__container">
      <button type="button" class="modal__btn" data-add-watched></button>
      <button type="button" class="modal__btn" data-add-queue></button>

    </div>
  </div>
  <button type="button" class="btn-ytb youtube"><svg class="icon-youtube" width="44" height="44">
      <use href="${symbol}#icon-youtube"></use>
    </svg></button>


  <button type="button" class="modal__close" data-modal-close>
    <svg class="modal__close-icon" width="18" height="18">
      <use href="${symbol}#icon-close"></use>
    </svg>
  </button>
</div>
  `;
};
