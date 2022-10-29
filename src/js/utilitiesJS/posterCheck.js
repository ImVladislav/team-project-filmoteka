import { serverApi } from './serverApi';

export function posterСheck(poster_path) {
  if (poster_path === null) {
    return `https://st2.depositphotos.com/1146092/5272/i/450/depositphotos_52726269-stock-photo-movie-dog.jpg`;
  }

  return `${serverApi.baseSrc}${poster_path}`;
}
