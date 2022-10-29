export const refs = {
  body: document.querySelector('body'),
  overlay: document.querySelector('.modal-overlay'),
  content: document.querySelector('.modal-content'),
  gallery: document.querySelector(`.gallery`),
  galleryLibrary: document.querySelector(`.gallery-library`),
  formRef: document.querySelector('.header__form'),
  moviePoster: document.querySelector('.movie__description'),
  movieDescription: document.querySelector('.movie__container'),
  addWatched: document.querySelector('[data-add-watched]'),
  addQueue: document.querySelector('[data-add-queue]'),
  movie: document.querySelector('[data-movie-id]'),

  team: document.querySelector('.js-team-modal'),
  wrap: document.querySelector('.modal-team-wrap'),
  contentTeam: document.querySelector('.modal-team-content'),
  overlayTeam: document.querySelector('.modal-team-overlay'),
  btnClose: document.querySelector('.modal-team__close-btn'),

  mainList: document.querySelector('.main'),
  containerLib: document.querySelector('.container-lib'),
  btnWathed: document.querySelector('.js-watched'),
  btnQueue: document.querySelector('.js-queue'),

  htmlDark: document.querySelector('html'),
  headerThemeText: document.querySelector('.header__theme-text'),
  iconSunBgc: document.querySelector('.header__icon--sun'),
  iconMoonBgc: document.querySelector('.header__icon--moon'),
  darkBtn: document.querySelector('.header__theme-btn'),
  footer: document.querySelector('.footer'),
  footerContainer: document.querySelector('.footer__container'),

  headerLib: document.querySelector('.header__theme--my-lib'),

  scrollBtn: document.querySelector('.is-show'),
  scollIcon: document.querySelector('.scroll-top__icon'),

};
