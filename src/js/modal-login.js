import { refs } from './utilitiesJS/refs';

refs.openModalBtn.addEventListener('click', openModal);

refs.registrationWrapper.addEventListener('click', closeModal);

function openModal() {
  refs.modal.classList.add('visiable');
  refs.body.classList.add('no-scroll');
  window.addEventListener('keydown', onEscClick);


}

function onEscClick(evt) {
    if (evt.code === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', onEscClick);
    }
  }

export function closeModal(evt) {
  if (evt.target === refs.registrationWrapper) {
    refs.modal.classList.remove('visiable');
    refs.body.classList.remove('no-scroll');
    refs.registerForm.classList.remove('hidden')
    refs.loginForm.classList.remove('visiable')
  }

  if (evt.target === refs.loginedWrapper) {
    refs.loginedWrapper.classList.remove('active')
  }

}

refs.registerBtn.addEventListener('click', () => {
  refs.registerBtn.classList.add('active')
  setTimeout(() => {
    refs.registerBtn.classList.remove('active')
  },2500)
})
refs.loginBtn.addEventListener('click', () => {
  refs.loginBtn.classList.add('active')
  setTimeout(() => {
    refs.loginBtn.classList.remove('active')
  },2500)
})

refs.changeFormLogin.addEventListener('click', () => {
    refs.registerForm.classList.add('hidden')
    refs.loginForm.classList.add('visiable')
})

refs.changeFormRegister.addEventListener('click', () => {
    refs.registerForm.classList.remove('hidden')
    refs.loginForm.classList.remove('visiable')
})


//модалка пользователя, который в онлайне

refs.iconExit.addEventListener('click', () => {
  refs.loginedWrapper.classList.add('active')
})

refs.loginedWrapper.addEventListener('click', closeModal)