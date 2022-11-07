import { genresArr, genresUK } from './genres';

export const makeGenres = genre_ids => {
  const langValue = JSON.parse(localStorage.getItem('language'));
  let genresMovies = null;

  if (langValue === 'en-US') {
    genresMovies = genresArr.reduce((acc, genre) => {
      if (genre_ids.includes(genre.id)) {
        acc.push(genre.name);
      }
      return acc;
    }, []);

    if (genresMovies.length > 3) {
      genresMovies = genresMovies.slice(0, 2);
      genresMovies.splice(2, 1, 'Other');
    } else if (genresMovies.length === 0) {
      genresMovies = [`Genres not found`];
    } else {
      genresMovies = genresMovies;
    }
  } else if (langValue === 'uk') {
    genresMovies = genresUK.reduce((acc, genre) => {
      if (genre_ids.includes(genre.id)) {
        acc.push(genre.name);
      }
      return acc;
    }, []);

    if (genresMovies.length > 3) {
      genresMovies = genresMovies.slice(0, 2);
      genresMovies.splice(2, 1, 'Інше');
    } else if (genresMovies.length === 0) {
      genresMovies = [`Жанрів не знайдено`];
    } else {
      genresMovies = genresMovies;
    }
  }

  return genresMovies;
};
