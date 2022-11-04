import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, update } from 'firebase/database';
import { refs } from './utilitiesJS/refs';
import closeModal from './modal-login';

const firebaseConfig = {
  apiKey: 'AIzaSyAr9PnJjkOaXP4O6n2hAHTbJJCMzH43B44',
  authDomain: 'filmoteka-7ab1a.firebaseapp.com',
  projectId: 'filmoteka-7ab1a',
  storageBucket: 'filmoteka-7ab1a.appspot.com',
  messagingSenderId: '740687621716',
  appId: '1:740687621716:web:23af114b92a4b6ee7507c1',
  databaseURL: 'https://filmoteka-7ab1a-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const storageWatch = JSON.parse(localStorage.getItem('watch'));
const storageQueue = JSON.parse(localStorage.getItem('queue'));

const attrErrorRegister = document.querySelector('[data-content-register]');
const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', e => {
  const emailRegister = document.querySelector('.emailRegister').value;
  const passwordRegister = document.querySelector('.passRegister').value;

  createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then(userCredential => {
      const user = userCredential.user;
      set(ref(db, 'users/' + user.uid), {
        emailRegister: emailRegister,
        passwordRegister: passwordRegister,
      });
      Notiflix.Notify.success('User Created');
      document.querySelector('.emailRegister').value = '';
      document.querySelector('.passRegister').value = '';
      attrErrorRegister.setAttribute('data-content-register', 'Registered');
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
      document.querySelector('.emailRegister').value = '';
      document.querySelector('.passRegister').value = '';
      attrErrorRegister.setAttribute(
        'data-content-register',
        "Hi there, it's ERROR"
      );
    });
});

const attrErrorLogin = document.querySelector('[data-content-login]');
const loginBtn = document.querySelector('.login-btn');


loginBtn.addEventListener('click', e => {
  const emailLogin = document.querySelector('.emailLogin').value;
  const passwordLogin = document.querySelector('.passLogin').value;

  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then(userCredential => {
      // Signed in
      const dt = new Date();
      const user = userCredential.user;
      update(ref(db, 'users/' + user.uid), {
        last_login: dt,
      });
      Notiflix.Notify.success('User loged in!');
      attrErrorLogin.setAttribute('data-content-login', 'User loged in!');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);

      attrErrorLogin.setAttribute('data-content-login', "Hi there, it's ERROR");
      document.querySelector('.emailLogin').value = '';
      document.querySelector('.passLogin').value = '';
    });
});

const event = new CustomEvent('localdatachanged');
document.dispatchEvent(event);

//Перевіряємо, якщо користувачь залогінився, то слідкуємо за його діями і додаємо в базу фильми
document.addEventListener('localdatachanged', () => {
  // handler
});

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    update(ref(db, 'users/' + uid), {
      watch: storageWatch,
      queue: storageQueue,
    });
    refs.iconEnter.classList.add('locked');
    refs.iconExit.classList.add('active');
    refs.modal.classList.remove('visiable');
  }
});

// выход из системы
refs.exitBtnFromOnline.addEventListener('click', () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      refs.iconEnter.classList.remove('locked');
      refs.iconExit.classList.remove('active');
      refs.loginedWrapper.classList.remove('active');
      refs.body.classList.remove('no-scroll');
    })
    .catch(error => {
      Notiflix.Notify.failure('User is signed out!');
    });
});
