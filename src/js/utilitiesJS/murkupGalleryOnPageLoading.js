import { refs } from './refs';
import { serverApi } from './serverApi';
import { posterСheck } from './posterCheck';


export function murkupGalleryOnPageLoading(movies) {
  const moviesMurkup = movies
    .map(({ original_title, poster_path, id }) => {
       
    //  const src = posterСheck(poster_path);
     
      return `
        <li class="film__item" data-id="${id}">
        <img src="${serverApi.baseSrc}${poster_path}" class="film__img" alt="${original_title}" />
        <p class="film__title">${original_title}</p>
        <p class="film__genre">Drama, Action | 2020</p>
      </li>`;
    })
    .join(``);

  return refs.gallery.insertAdjacentHTML(`beforeend`, moviesMurkup);
}

export async function murkupGallery(params) {
  const movies = await serverApi.getPopularMovie();

  murkupGalleryOnPageLoading(movies.results);
}

