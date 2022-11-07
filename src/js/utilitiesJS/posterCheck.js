import { serverApi } from './serverApi';
import coming_soon from '../../images/coming_soon.jpg';

export function posterСheck(poster_path) {
  if (poster_path === null) {
    return `${coming_soon}`;
  }
  return `${serverApi.baseSrc}${poster_path}`;
}
