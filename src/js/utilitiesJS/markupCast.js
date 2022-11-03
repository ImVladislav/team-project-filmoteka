import * as basicLightbox from 'basiclightbox';

import { serverApi } from './serverApi';
import { spinnerPlay, spinnerStop } from '../spinner';

export const markupCast = async id => {
  //   spinnerPlay();
  const data = await serverApi.getCasts(id);

  //   spinnerStop();
  let casts = [];

  if (data.length > 10) {
    casts = data.slice(0, 10);
  }
  console.log('markupCast : casts', casts);

  console.log('markupCast : casts', casts);
  cast = casts.map(
    item =>
      `<li class="cast__item">
    <img src="${serverApi.baseSrc}${item.profile_path}" class="cast__poster"/>
    <div class="cast__wrapper">
    <p class="cast__name">Name: <span>${item.name}</span></p>
    <p class="cast__popularity">Popularity: <span>${Number.parseInt(
      item.popularity
    )}</span></p>
    <p class="cast__character">Cast: <span>${item.character}</span></p>
    </div>
    </li>`
  );

  const instance = basicLightbox.create(`
<div class="cast__container">
<ul class="cast__list">${cast.join('')}</ul>
</div>
`);

  instance.show();
};
