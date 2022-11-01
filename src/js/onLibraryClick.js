import { refs } from './utilitiesJS/refs';
import { createMessage } from './utilitiesJS/createEmptyLibMessage';
import { onBtnWatchedClick } from './watchedMovies';
import { onBtnQueueClick } from './queueMovies';

onMyLibraryClick();

function onMyLibraryClick() {
  try {
    const watch = JSON.parse(localStorage.getItem('watch'));
    const queue = JSON.parse(localStorage.getItem('queue'));
    if (!watch && !queue) {
      refs.containerLib.insertAdjacentHTML('beforeend', createMessage());
      return;
    } else if (watch) {
      onBtnWatchedClick();
    } else if (!watch || queue) {
      onBtnQueueClick();
    } else {
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
}
