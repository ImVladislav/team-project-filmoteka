import Pagination from 'tui-pagination';

import { refs } from './utilitiesJS/refs';
import { posterСheck } from './utilitiesJS/posterCheck';
import { clearPage } from './utilitiesJS/clearPage';
import { options } from './pagination';
import { genresArr } from './utilitiesJS/genres';
import { options } from './pagination';

refs.btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnQueueClick() {
  // clearPage();
  const queue = JSON.parse(localStorage.getItem('queue'));
  murkupGalleryOnBtnQueued(queue);

  try {
    const queue = JSON.parse(localStorage.getItem('queue'));
    options.totalItems = queue.length;
    let start = 0;
    let end = 20;

    const handleSlice = currentPage => {
      start = currentPage * options.itemsPerPage - 20;
      end = currentPage * options.itemsPerPage;
    };

    if (!queue.length) {
      refs.mainList.classList.add('not-films');
      refs.containerLib.insertAdjacentHTML('beforeend', createMessage());
      refs.btnQueue.removeEventListener('click', onBtnQueueClick);
      refs.tuiContainer.classList.add('visually-hidden');
      return;
    } else {
      refs.tuiContainer.classList.remove('visually-hidden');
    }

    murkupGalleryOnBtnQueued(queue.slice(start, end));

    const pagination = new Pagination(refs.tuiContainer, options);

    pagination.on('beforeMove', event => {
      const currentPage = event.page;
      handleSlice(currentPage);
      murkupGalleryOnBtnQueued(queue.slice(start, end));
    });
  } catch (error) {
    console.log(error.message);
  }
}

function murkupGalleryOnBtnQueued(movies) {
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

  return (refs.galleryLibrary.innerHTML = moviesMurkup);
}
