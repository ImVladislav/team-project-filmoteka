import * as basicLightbox from 'basiclightbox';

import { serverApi } from './serverApi';
import { spinnerPlay, spinnerStop } from '../spinner';

export const markupRewiew = async id => {
  spinnerPlay();
  const data = await serverApi.getRewiews(id);

  const rewiews = data.reverse().slice(0, 15);

  const reviewsMarkup = rewiews.map(({ author, content }) => {
    return `<li class="rewiew__item">  
            <p class="rewiew__name">Reviewer: <span>${author}</span></p>
          
            <p class="rewiew__post">${content}</p>
            </li>`;
  });

  const instance = basicLightbox.create(`
    <div class="rewiew__container">
    <ul class="rewiew__list">${reviewsMarkup.join('')}</ul>
    </div>
    `);

  instance.show();
  spinnerStop();
};
