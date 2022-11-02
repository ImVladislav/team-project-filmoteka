import Pagination from 'tui-pagination';

import { refs } from './utilitiesJS/refs';
import { options } from './pagination';
import { createMessage } from './utilitiesJS/createEmptyLibMessage';
import { murkupGallery } from './utilitiesJS/markupGllery';

refs.btnQueue.addEventListener('click', onBtnQueueClick);

export function onBtnQueueClick() {
  refs.btnWathed.dataset.watch = '';
  refs.btnQueue.dataset.queue = 'active';

  try {
    const queue = JSON.parse(localStorage.getItem('queue'));

    if (!queue || queue.length === 0) {
      refs.galleryLibrary.innerHTML = createMessage();
      refs.tuiContainer.classList.add('visually-hidden');
      return;
    } else {
      options.totalItems = queue.length;
      let start = 0;
      let end = 20;

      const handleSlice = currentPage => {
        start = currentPage * options.itemsPerPage - 20;
        end = currentPage * options.itemsPerPage;
      };

      refs.tuiContainer.classList.remove('visually-hidden');
      murkupGallery(queue.slice(start, end));

      const pagination = new Pagination(refs.tuiContainer, options);

      pagination.on('beforeMove', event => {
        const currentPage = event.page;
        handleSlice(currentPage);
        murkupGallery(queue.slice(start, end));
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
