import { serverApi } from './serverApi';

export function posterСheck(poster_path) {
  if (poster_path === null) {    
    return `${serverApi.baseSrc}/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg`;
  }

  return `${serverApi.baseSrc}${poster_path}`;
}
