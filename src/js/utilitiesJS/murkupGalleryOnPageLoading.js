import { refs } from "./refs";
import { ServerApi } from "./serverApi";

const serverApi = new ServerApi;

export function murkupGalleryOnPageLoading(movies) {
    const moviesMurkup = movies.map(movie => {
        const { original_title, poster_path } = movie;
        return `
        <li class="film__item">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="film__img" alt="${original_title}" />
        <p class="film__title">${original_title}</p>
        <p class="film__genre">Drama, Action | 2020</p>
      </li>`
    }).join(``);
    
    return refs.gallery.insertAdjacentHTML(`beforeend`, moviesMurkup);
}

export async function murkupGallery(params) {
    const movies = await serverApi.getPopularMovie();

    murkupGalleryOnPageLoading(movies.results);
    // console.log(movies.results);
}