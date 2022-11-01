import { refs } from './utilitiesJS/refs';
import { createMessage } from './utilitiesJS/createEmptyLibMessage';
import { onBtnWatchedClick } from './watchedMovies';
import { onBtnQueueClick } from './queueMovies';
import { serverApi } from './utilitiesJS/serverApi';

onMyLibraryClick();

function onMyLibraryClick() {
  serverApi.setlang(JSON.parse(localStorage.getItem('language')));

  try {
    const watch = JSON.parse(localStorage.getItem('watch'));
    const queue = JSON.parse(localStorage.getItem('queue'));

    if (!watch && !queue) {
      refs.galleryLibrary.insertAdjacentHTML('beforeend', createMessage());
      return;
    }
    if (watch && watch.length !== 0) {
      onBtnWatchedClick();
      return;
    } else if ((queue && queue.length !== 0 && !watch) || watch.length === 0) {
      onBtnQueueClick();
      return;
    } else {
      refs.galleryLibrary.insertAdjacentHTML('beforeend', createMessage());
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
}
