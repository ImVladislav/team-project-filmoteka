import { refs } from './utilitiesJS/refs';

window.onscroll = () => {
  if (window.scrollY > 500) {
    refs.scrollBtn.classList.remove('is-hidden');
  } else if (window.scrollY < 500) {
    refs.scrollBtn.classList.add('is-hidden');
  }
};

refs.scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
