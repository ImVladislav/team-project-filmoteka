import * as basicLightbox from 'basiclightbox';

import { serverApi } from './serverApi';
import { spinnerPlay, spinnerStop } from '../spinner';
import image from '../../images/poster-modal-plug-desktop.jpg';
import { makeGenres } from './makeGenres';
import { makeDate } from './makeReleaseDate';

export const markupCast = async id => {
  spinnerPlay();
  const data = await serverApi.getCasts(id);

  const casts = data.slice(0, 15);

  const castMarkup = casts.map(
    ({ id, profile_path, name, popularity, character }) => {
      const poster = profile_path
        ? `${serverApi.baseSrc}${profile_path}`
        : image;
      return `<li class="cast__item" data-cast-id="${id}">
        <img src="${poster}" class="cast__poster"/>
        <div class="cast__wrapper">
        <p class="cast__name">Name: <span>${name}</span></p>
        <p class="cast__popularity">Popularity: <span>${Number.parseInt(
          popularity
        )}</span></p>
        <p class="cast__character">Cast: <span>${character}</span></p>
        </div>
        </li>`;
    }
  );

  const instance = basicLightbox.create(
    `
<div class="cast__container">
<ul class="cast__list">${castMarkup.join('')}</ul>
</div>
`
  );

  instance.show(() => {
    document
      .querySelector('.cast__container')
      .addEventListener('click', onCastClick);
  });

  spinnerStop();
};

async function onCastClick(evt) {
  if (evt.target.parentElement.className !== 'cast__item') {
    return;
  }

  spinnerPlay();

  const id = evt.target.parentElement.dataset.castId;
  const data = await serverApi.getMoviesByActorId(id);

  const movieMarkup = data.map(
    ({ poster_path, title, vote_average, release_date, genre_ids }) => {
      const poster = poster_path ? `${serverApi.baseSrc}${poster_path}` : image;

      return `<li class="movie__item-withCast" >
      <img src="${poster}" class="movie__poster-withCast"/>
      <div class="movie__wrapper-withCast">
      <p class="movie__title-withCast">Title: <span>${title}</span></p>
      <p class="movie__vote-withCast">Average vote: <span>${vote_average}</span></p>
      <p class="movie__genres-withCast">${makeGenres(genre_ids).join(
        `, `
      )} | <span>${makeDate(release_date)}</span></p>
      </div>
      </li>`;
    }
  );

  const moviesWithActor = basicLightbox.create(
    `
<div class="movie__container-withCast">
<ul class="movie__list-withCast">${movieMarkup.join('')}</ul>
</div>
`
  );

  moviesWithActor.show();

  spinnerStop();
}
