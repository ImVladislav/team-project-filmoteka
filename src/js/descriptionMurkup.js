import { posterСheck } from './utilitiesJS/posterCheck';

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

  let watched = '';
  let findedWatched = false;

  if (localStorage.getItem('watch')) {
    watched = JSON.parse(localStorage.getItem('watch'));

    findedWatched = watched.some(item => item.id === id);
  }

  let watchedTextBtn = findedWatched ? 'remove from watched' : 'add to watched';

  let queue = '';
  let findedQueue = false;

  if (localStorage.getItem('queue')) {
    queue = JSON.parse(localStorage.getItem('queue'));
    findedQueue = queue.some(item => item.id === id);
  }

  let queueTextBtn = findedQueue ? 'remove from queue' : 'add to queue';

  return `
    <div class="movie__description" data-movie-id='${id}'>
    <div class="movie__poster-wrappaer">
      <img
        src="${src}"
        alt="${title}"
        class="movie__poster"
       
      />
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
          <p class="description__text"><span class='vote vote-accent'>${vote_average}</span>&#47;<span class='vote'>${vote_count}</span></p>
          <p class="description__text">${popularity}</p>
          <p class="description__text">${original_title}</p>
          <p class="description__text">${genreList.join(', ')}</p>
        </div>
      </div>
      <h4 class="about__title">About</h4>
      <p class="about__text">${overview}</p>
      <div class="btn__container">
        <button type="button" class="modal__btn" data-add-watched>${watchedTextBtn}</button>
        <button type="button" class="modal__btn" data-add-queue>${queueTextBtn}</button>
      </div>
    </div>
  </div>
  `;
};
