export const makeDate = release_date => {
  const langValue = JSON.parse(localStorage.getItem('language'));
  let releaseDate = null;

  if (langValue === 'en-US') {
    if (!release_date) {
      releaseDate = 'Release data no found';
    } else {
      releaseDate = release_date.slice(0, 4);
    }
  } else if (langValue === 'uk') {
    if (!release_date) {
      releaseDate = 'Дату релізу не знайдено';
    } else {
      releaseDate = release_date.slice(0, 4);
    }
  }

  return releaseDate;
};
