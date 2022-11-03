import * as basicLightbox from 'basiclightbox';

import { serverApi } from './serverApi';
import { spinnerPlay, spinnerStop } from '../spinner';
import image from '../../images/poster-modal-plug-desktop.jpg';

export const markupCast = async id => {
  spinnerPlay();
  const data = await serverApi.getCasts(id);

  const casts = data.slice(0, 15);

  const castMarkup = casts.map(item => {
    const poster = item.profile_path
      ? `${serverApi.baseSrc}${item.profile_path}`
      : image;
    return `<li class="cast__item">
        <img src="${poster}" class="cast__poster"/>
        <div class="cast__wrapper">
        <p class="cast__name">Name: <span>${item.name}</span></p>
        <p class="cast__popularity">Popularity: <span>${Number.parseInt(
          item.popularity
        )}</span></p>
        <p class="cast__character">Cast: <span>${item.character}</span></p>
        </div>
        </li>`;
  });

  const instance = basicLightbox.create(`
<div class="cast__container">
<ul class="cast__list">${castMarkup.join('')}</ul>
</div>
`);

  instance.show();
  spinnerStop();
};
