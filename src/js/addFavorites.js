export const onAddWatchClick = data => {
  let storage = [];

  if (localStorage.getItem('watch')) {
    storage = JSON.parse(localStorage.getItem('watch'));
  }
  storage.push(data);

  localStorage.setItem('watch', JSON.stringify(storage));
};

export const onAddQueueClick = data => {
  let storage = [];

  if (localStorage.getItem('queue'))
    storage = JSON.parse(localStorage.getItem('queue'));

  storage.push(data);
  console.log(storage);
  localStorage.setItem('queue', JSON.stringify(storage));
};
