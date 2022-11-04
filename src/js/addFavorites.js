export const onAddWatchClick = data => {
  let storage = [];
  const btn = document.querySelector('[data-add-watched]');

  if (localStorage.getItem('watch')) {
    storage = JSON.parse(localStorage.getItem('watch'));
  }

  if (btn.textContent === 'remove from watched') {
    localStorage.setItem(
      'watch',
      JSON.stringify(storage.filter(item => item.id !== data.id))
    );
    location.reload();
    btn.textContent = 'add to watched';
    return;
  }

  storage.push(data);
  localStorage.setItem('watch', JSON.stringify(storage));

  btn.textContent = 'remove from watched';
};

export const onAddQueueClick = data => {
  let storage = [];
  const btn = document.querySelector('[data-add-queue]');

  if (localStorage.getItem('queue')) {
    storage = JSON.parse(localStorage.getItem('queue'));
  }

  if (btn.textContent === 'remove from queue') {
    localStorage.setItem(
      'queue',
      JSON.stringify(storage.filter(item => item.id !== data.id))
    );
    location.reload();
    btn.textContent = 'add to queue';
    return;
  }

  storage.push(data);
  localStorage.setItem('queue', JSON.stringify(storage));

  btn.textContent = 'remove from queue';
};
