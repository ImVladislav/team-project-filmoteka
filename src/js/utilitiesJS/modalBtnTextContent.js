export const makeWatchTextContent = data => {
  let storage = [];

  if (localStorage.getItem('watch')) {
    storage = JSON.parse(localStorage.getItem('watch'));
  }

  let findedItem = storage.some(item => item.id === data.id);

  document.querySelector('[data-add-watched]').textContent = findedItem
    ? 'remove from watched'
    : 'add to watched';
};

export const makeQueueTextContent = data => {
  let storage = [];

  if (localStorage.getItem('queue')) {
    storage = JSON.parse(localStorage.getItem('queue'));
  }
  let findedItem = storage.some(item => item.id === data.id);

  document.querySelector('[data-add-queue]').textContent = findedItem
    ? 'remove from queue'
    : 'add to queue';
};
