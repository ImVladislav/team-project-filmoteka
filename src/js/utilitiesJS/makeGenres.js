import { genresArr, genresUK } from './genres';

export const makeGenres = genre_ids => {
  const langValue = JSON.parse(localStorage.getItem('language'));
  let genresMovie = null;

  if (langValue === 'en-US') {
    genresMovies = genresArr.reduce((acc, genre) => {
      if (genre_ids.includes(genre.id)) {
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
  } else if (langValue === 'uk') {
    genresMovies = genresUK.reduce((acc, genre) => {
      if (genre_ids.includes(genre.id)) {
        acc.push(genre.name);
      }
      return acc;
    }, []);

    if (genresMovies.length > 3) {
      genresMovie = genresMovies.slice(0, 2);
      genresMovie.splice(2, 1, 'Інше');
    } else if (genresMovies.length === 0) {
      genresMovie = [`Жанрів не знайдено`];
    } else {
      genresMovie = genresMovies;
    }
  }

  return genresMovie;
};
