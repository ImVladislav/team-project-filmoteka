export const refs = {
  body: document.querySelector('body'),
  overlay: document.querySelector('.modal-overlay'),
  content: document.querySelector('.modal-content'),
  gallery: document.querySelector(`.gallery`),
  galleryLibrary: document.querySelector(`.gallery-library`),
  formRef: document.querySelector('.header__form'),
  movieDescription: document.querySelector('[data-movie-description]'),

  team: document.querySelector('.js-team-modal'),
  wrap: document.querySelector('.modal-team-wrap'),
  contentTeam: document.querySelector('.modal-team-content'),
  overlayTeam: document.querySelector('.modal-team-overlay'),
  btnClose: document.querySelector('.modal-team__close-btn'),

  mainList: document.querySelector('.main'),
  containerLib: document.querySelector('.container-lib'),
  btnWathed: document.querySelector('.js-watched'),
  btnQueue: document.querySelector('.js-queue'),

  headerThemeText: document.querySelector('.header__theme-text'),
  iconSunBgc: document.querySelector('.header__icon--sun'),
  iconMoonBgc: document.querySelector('.header__icon--moon'),
  darkBtn: document.querySelector('.header__theme'),
  footer: document.querySelector('.footer'),
  footerContainer: document.querySelector('.footer__container'),

  headerLib: document.querySelector('.header__theme--my-lib'),

  scrollBtn: document.querySelector('.is-show'),
  scollIcon: document.querySelector('.scroll-top__icon'),

  spinner: document.querySelector('.js-spinner'),
  load: document.querySelector('[data-load]'),
  backdrop: document.querySelector('.backdrop'),

  openModalBtn: document.querySelector('[data-about-modal-open]'),
  modal: document.querySelector('[data-about-modal]'),
  registrationWrapper: document.querySelector('.registrationWrapper'),
  registerBtn: document.querySelector('.register-btn'),
  loginBtn: document.querySelector('.login-btn'),
  changeFormRegister: document.querySelector('.register'),
  changeFormLogin: document.querySelector('.login'),
  registerForm: document.querySelector('.register-form'),
  loginForm: document.querySelector('.login-form'),
  iconEnter: document.querySelector('.iconEnter'),
  iconExit: document.querySelector('.iconExit'),
  loginedWrapper: document.querySelector('.loginedWrapper'),
  exitBtnFromOnline: document.querySelector('.exitBtnFromOnline'),

  tuiContainer: document.querySelector('.tui-pagination'),
  langValue: document.querySelector('.select__lang'),

  trend: document.querySelector('.select__trend'),
};
