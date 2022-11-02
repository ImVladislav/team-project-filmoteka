import * as basicLightbox from 'basiclightbox';

import { serverApi } from './utilitiesJS/serverApi';
import { spinnerPlay, spinnerStop } from './spinner';

export const handleClick = async () => {
  spinnerPlay();

  const movieDescriptionId = document.querySelector('.movie__description');
  const trailerId = movieDescriptionId.dataset.movieId;

  let trailerKey = '';
  serverApi.getTrailer(trailerId).then(({ results }) => {
    results.map(element => {
      if (element.type === 'Trailer' && element.name === 'Official Trailer') {
        trailerKey = element.key;
      }
    });

    spinnerStop();

    const instance = basicLightbox.create(`
        <div class="player-container">
   <iframe class="player" src='https://www.youtube.com/embed/${trailerKey}'frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; 
   picture-in-picture" allowfullscreen></iframe> 
   </div>
`);

    instance.show();
  });
};
