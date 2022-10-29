const refs = {
  htmlDark: document.querySelector('html'),
  iconSunBgc: document.querySelector('.header__icon--sun'),
  iconMoonBgc: document.querySelector('.header__icon--moon'),
  darkBtn: document.querySelector('.header__theme'),
  footer: document.querySelector('.footer'),
  footerContainer: document.querySelector('.footer__container'),
  teamModal: document.querySelector('.js-team-modal'),
  modalContent: document.querySelector('.modal-content'),
  teamContent: document.querySelector('.modal-team-content'),
  modalTeamWrap: document.querySelector('.modal-team-wrap'),
};

refs.darkBtn.addEventListener('click', onClickDarkBtn);
function onClickDarkBtn(e) {
  e.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClass();
}

function addDarkClass() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      refs.htmlDark.classList.add('dark');

      refs.iconSunBgc.classList.remove('visually-hidden');
      refs.iconMoonBgc.classList.add('visually-hidden');
      refs.footer.classList.add('dark');
      refs.footerContainer.classList.add('dark');
      refs.teamModal.classList.add('dark');
      refs.modalContent.classList.add('dark');
      refs.teamContent.classList.add('dark');
      refs.modalTeamWrap.classList.add('dark');
    } else {
      refs.htmlDark.classList.remove('dark');

      refs.iconSunBgc.classList.add('visually-hidden');
      refs.iconMoonBgc.classList.remove('visually-hidden');
      refs.footer.classList.remove('dark');
      refs.footerContainer.classList.remove('dark');
      refs.teamModal.classList.remove('dark');
      refs.modalContent.classList.remove('dark');
      refs.teamContent.classList.remove('dark');
      refs.modalTeamWrap.classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClass();
