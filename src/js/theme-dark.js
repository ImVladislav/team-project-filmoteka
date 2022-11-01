import { refs } from './utilitiesJS/refs';

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
      refs.body.classList.add('dark');
      refs.body.classList.add('img-dark');
      refs.body.classList.remove('light');

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

      refs.registerForm.classList.add('dark');
      refs.loginForm.classList.add('dark');
      refs.loginedWrapper.classList.add('dark');
    } else {
      refs.body.classList.add('light');
      refs.body.classList.remove('dark');
      refs.body.classList.remove('img-dark');

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

      refs.registerForm.classList.remove('dark');
      refs.loginForm.classList.remove('dark');
      refs.loginedWrapper.classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClass();
