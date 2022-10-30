import { teamItems } from './utilitiesJS/team-items';
import { refs } from './utilitiesJS/refs';
import symbol from '../images/symbol-defs.svg';

function createMarkup(teamItems) {
  return teamItems
    .map(({ img, name, role, git }) => {
      return `<div class="team-card">
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

refs.team.addEventListener('click', onOpenModal);
refs.overlayTeam.addEventListener('click', onCloseModal);
refs.btnClose.addEventListener('click', closeModal);

function onOpenModal(e) {
  e.preventDefault();
  refs.overlayTeam.classList.add('visiable');
  refs.body.classList.add('no-scroll');
  const markup = createMarkup(teamItems);
  refs.wrap.innerHTML = markup;
  window.addEventListener('keydown', onEscClick);
}

function onCloseModal(e) {
  if (e.target === refs.overlayTeam) {
    closeModal();
  }
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', onEscClick);
  }
}

function closeModal() {
  refs.overlayTeam.classList.remove('visiable');
  refs.body.classList.remove('no-scroll');
}
