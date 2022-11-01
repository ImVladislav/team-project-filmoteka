import Pagination from 'tui-pagination';

import { refs } from './utilitiesJS/refs';
import { posterСheck } from './utilitiesJS/posterCheck';
import { movieDescriptionMurkup } from './descriptionMurkup';
import { serverApi } from './utilitiesJS/serverApi';
import { onAddQueueClick, onAddWatchClick } from './addFavorites';
import { closeModal, onOpenModal } from './modal';
import { options } from './pagination';
import { genresArr } from './utilitiesJS/genres';
import {
  makeQueueTextContent,
  makeWatchTextContent,
} from './utilitiesJS/modalBtnTextContent';

import { handleClick } from './treiler';

import { createMessage } from './utilitiesJS/createEmptyLibMessage';

refs.btnWathed.addEventListener('click', onBtnWatchedClick);

function onBtnWatchedClick() {
  try {
    const watched = JSON.parse(localStorage.getItem('watch'));

    options.totalItems = watched.length;
    let start = 0;
    let end = 20;

    if (!watched.length) {
      refs.containerLib.insertAdjacentHTML('beforeend', createMessage());
      refs.btnWathed.removeEventListener('click', onBtnWatchedClick);
      const item = document.querySelector('.tui-js');
      item.classList.add('visually-hidden');
      return;
    } else {
      const item = document.querySelector('.tui-js');
      item.classList.remove('visually-hidden');
    }
    murkupGalleryOnBtnWatched(watched.slice(start, end));

    const container = document.querySelector('.tui-pagination');

    const pagination = new Pagination(container, options);

    pagination.on('beforeMove', event => {
      const currentPage = event.page;
      start = currentPage * options.itemsPerPage - 20;
      end = currentPage * options.itemsPerPage;
      serverApi.setPage(currentPage);
      serverApi.incrementRequestCount();
      murkupGalleryOnBtnWatched(watched.slice(start, end));
    });
  } catch (error) {
    console.log(error.message);
  }
}

function murkupGalleryOnBtnWatched(movies) {
  const moviesMurkup = movies
    .map(({ original_title, title, poster_path, id, genres, release_date }) => {
      let genresMovie = null;
      let releaseDate = null;

      const genresId = genres.map(genre => genre.id);
      const src = posterСheck(poster_path);

      const genresMovies = genresArr.reduce((acc, genre) => {
        if (genresId.includes(genre.id)) {
          acc.push(genre.name);
        }
        return acc;
      }, []);

      if (genresMovies.length > 3) {
        genresMovie = genresMovies.slice(0, 2);
        genresMovie.splice(2, 1, 'Other');
      } else if (genresMovies.length === 0) {
        genresMovie = [`Genres not found`];
      } else {
        genresMovie = genresMovies;
      }

      if (release_date === '') {
        releaseDate = 'Release data no found';
      } else {
        releaseDate = release_date.slice(0, 4);
      }

      return `
        <li class="film__item" data-id="${id}">
        <img src="${src}" class="film__img" alt="${original_title}" />
        <p class="film__title">${title}</p>
        <p class="film__genre">${genresMovie.join(`, `)} | ${releaseDate}</p>
      </li>`;
    })
    .join(``);

  return (refs.galleryLibrary.innerHTML = moviesMurkup);
}

refs.galleryLibrary.addEventListener(`click`, onClickMovie);

async function onClickMovie(e) {
  if (e.target.parentElement.className !== 'film__item') {
    return;
  }

  onOpenModal();
  const id = e.target.parentElement.dataset.id;

  const detailsMovie = await serverApi.getDetailsMovie(id);

  const movieMurkup = await movieDescriptionMurkup(detailsMovie);

  refs.movieDescription.insertAdjacentHTML('beforeend', movieMurkup);
  makeWatchTextContent(detailsMovie);
  makeQueueTextContent(detailsMovie);

  const watchBtn = document.querySelector('[data-add-watched]');
  const queueBtn = document.querySelector('[data-add-queue]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const trailerBtn = document.querySelector('.btn-ytb');

  watchBtn.addEventListener('click', () => {
    onAddWatchClick(detailsMovie);
    const watched = JSON.parse(localStorage.getItem('watch'));
    murkupGalleryOnBtnWatched(watched);
  });
  queueBtn.addEventListener('click', () => {
    onAddQueueClick(detailsMovie);
    const queued = JSON.parse(localStorage.getItem('queue'));
    murkupGalleryOnBtnWatched(queued);
  });
  trailerBtn.addEventListener('click', handleClick);
  closeModalBtn.addEventListener('click', closeModal);
}
