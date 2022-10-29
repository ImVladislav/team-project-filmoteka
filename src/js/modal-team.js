import { teamItems } from './utilitiesJS/team-items';
import symbol from '../images/symbol-defs.svg';

function createMarkup(teamItems) {
  return teamItems
    .map(({ img, name, role, git }) => {
      return /*html*/ `<div class="team-card">
      <img src="${img}" alt="${name}" class="team-image" width="150" height="150">
      <p class="team-name">${name}</p>
      <p class="team-role">${role}</p>
      <a href="${git}" target="_blank" class="team-git">
        <svg class="team-git__icon" width="24" height="24">
          <use href="${symbol}#git-hub"></use>
        </svg>
      </a>
    </div>`;
    })
    .join('');
}

const refs = {
  overlay: document.querySelector('.modal-team-overlay'),
  content: document.querySelector('.modal-team-content'),
  teams: document.querySelector('.js-team-modal'),
  body: document.querySelector('body'),
};

refs.teams.addEventListener('click', onOpenModal);
refs.overlay.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  e.preventDefault();
  refs.overlay.classList.add('visiable');
  refs.body.classList.add('no-scroll');
  const markup = createMarkup(teamItems);
  refs.content.innerHTML = markup;
  window.addEventListener('keydown', onCloseModal);
}

function onCloseModal(e) {
  if (e.target !== refs.content || e.code === 'Escape') {
    refs.overlay.classList.remove('visiable');
    refs.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', onCloseModal);
  }
}
