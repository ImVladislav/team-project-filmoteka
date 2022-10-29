import Pagination from 'tui-pagination';

import { refs } from './refs';
import { serverApi } from './serverApi';
import { posterСheck } from './posterCheck';
import { options } from '../pagination';

const container = document.querySelector('.tui-pagination');

const pagination = new Pagination(container, options);

pagination.on('beforeMove', async event => {
  const currentPage = event.page;
  serverApi.setPage(currentPage);
  murkupGallery();
});

export function murkupGalleryOnPageLoading(movies) {
  const moviesMurkup = movies
    .map(({ original_title, title, poster_path, id }) => {

      const src = posterСheck(poster_path);

      return `
        <li class="film__item" data-id="${id}">
        <img src="${src}" class="film__img" alt="${original_title}" />
        <p class="film__title">${title}</p>
        <p class="film__genre">Drama, Action | 2020</p>
      </li>`;
    })
    .join(``);

  return (refs.gallery.innerHTML = moviesMurkup);
}

export async function murkupGallery(params) {
  const movies = await serverApi.getPopularMovie();
  murkupGalleryOnPageLoading(movies.results);
}
