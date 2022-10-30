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

function closeModal(evt) {
  if (evt.target === refs.registrationWrapper) {
    refs.modal.classList.remove('visiable');
    refs.body.classList.remove('no-scroll');
    refs.registerForm.classList.remove('hidden')
    refs.loginForm.classList.remove('visiable')
  }

}



refs.registerBtn.addEventListener('click', () => refs.registerBtn.classList.toggle('active'))
refs.loginBtn.addEventListener('click', () => refs.loginBtn.classList.toggle('active'))

refs.changeFormLogin.addEventListener('click', () => {
    refs.registerForm.classList.add('hidden')
    refs.loginForm.classList.add('visiable')
    console.log('click')
})

refs.changeFormRegister.addEventListener('click', () => {
    refs.registerForm.classList.remove('hidden')
    refs.loginForm.classList.remove('visiable')
})