
const gallery = document.querySelector(`.gallery`);

export function murkupGalleryOnPageLoading(movies) {
    const moviesMurkup = movies.map(movie => {
        const { backdrop_path, original_title, poster_path } = movie;
        return `
        <li class="film__item">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="film__img" />
        <p class="film__title">${original_title}</p>
        <p class="film__genre">Drama, Action | 2020</p>
      </li>`
    }).join(``);
    
    return gallery.insertAdjacentHTML(`beforeend`, moviesMurkup);
}