import * as basicLightbox from 'basiclightbox';

import { refs } from './utilitiesJS/refs';
import { serverApi } from './utilitiesJS/serverApi';

export const handleClick = async event => {
  const movieDescriptionId = document.querySelector('.movie__description');
  const trailerId = movieDescriptionId.dataset.movieId;

  let trailerKey = '';
  serverApi.getTrailer(trailerId).then(({ results }) => {
    results.map(element => {
      if (element.type === 'Trailer' && element.name === 'Official Trailer') {
        trailerKey = element.key;
      }
    });
    const instance = basicLightbox.create(`      
        <div class="player-container"></div>
   <iframe class="player" src='https://www.youtube.com/embed/${trailerKey}'frameborder="0" 
   allow="accelerometer; autoplay; encrypted-media; gyroscope; 
   picture-in-picture" allowfullscreen></iframe> 
`);

    instance.show();
    const modalCloseBtn = document.querySelector(
      '[data-action="close-lightbox"]'
    );
    modalCloseBtn.addEventListener('click', () => instance.close());
  });
};