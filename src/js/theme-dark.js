import { refs } from './utilitiesJS/refs';
// console.log('teamGitIcon', refs.teamGitIcon);

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
      refs.htmlDark.classList.remove('light');
      refs.headerThemeText.textContent = 'Light';
      refs.iconSunBgc.classList.remove('visually-hidden');
      refs.iconMoonBgc.classList.add('visually-hidden');
      refs.footer.classList.add('dark');
      refs.footerContainer.classList.add('dark');
      refs.team.classList.add('dark');
      refs.content.classList.add('dark');
      refs.contentTeam.classList.add('dark');
      refs.wrap.classList.add('dark');
      refs.btnClose.classList.add('dark');
      refs.scollIcon.classList.add('dark');

    } else {
      refs.htmlDark.classList.remove('dark');
      refs.htmlDark.classList.add('light');
      refs.headerThemeText.textContent = 'Dark';
      refs.iconSunBgc.classList.add('visually-hidden');
      refs.iconMoonBgc.classList.remove('visually-hidden');
      refs.footer.classList.remove('dark');
      refs.footerContainer.classList.remove('dark');
      refs.team.classList.remove('dark');
      refs.content.classList.remove('dark');
      refs.contentTeam.classList.remove('dark');
      refs.wrap.classList.remove('dark');
      refs.btnClose.classList.remove('dark');
      refs.scollIcon.classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClass();
