import { serverApi } from './serverApi';
import coming_soon from '../../images/coming_soon.jpg';

export function posterСheck(poster_path) {
  // if (poster_path === null) {
  //   return `${serverApi.baseSrc}/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg`;
  // }

  // if (poster_path === null) {
  //   return `https://st2.depositphotos.com/1146092/5272/i/450/depositphotos_52726269-stock-photo-movie-dog.jpg`;
  // }
  if (poster_path === null) {
    return `${coming_soon}`;
  }
  return `${serverApi.baseSrc}${poster_path}`;
}
