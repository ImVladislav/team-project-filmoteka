import { posterСheck } from './utilitiesJS/posterCheck';

export const movieDescriptionMurkup = ({
  id,
  title,
  original_title,
  popularity,
  overview,
  genres,
  vote_average,
  vote_count,
  poster_path,
}) => {
  const src = posterСheck(poster_path);
  const movieDescriptionId = document.querySelector('.movie__description');
  movieDescriptionId.dataset.movieId = `${id}`;
  const genreList = [];
  genres.forEach(({ name }) => genreList.push(name));

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
    </div>
  </div>
  `;
};

// export const moviePoster = ({ poster_path, title }) => {
//   const src = posterСheck(poster_path);
//   return `
//   <div>
//   <div class="movie__poster-wrappaer">
//       <img
//         src="${src}"
//         alt="${title}"
//         class="movie__poster"       
//       />
//     </div></div>`;
// };

export function createMessage() {
  console.log('розмітка');
  return '<p class="js-empty-message">Ви ще не переглянули жодного фільму</p>';
}
