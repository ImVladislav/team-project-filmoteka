import { serverApi } from './serverApi';
import { refs } from './refs';

refs.langValue.addEventListener('change', onSelectChange);

if (localStorage.getItem('language')) {
  const parsedData = JSON.parse(localStorage.getItem('language'));
  refs.langValue.value = parsedData;
  serverApi.setlang(parsedData);
}

function onSelectChange(evt) {
  const language = evt.target.value;

  serverApi.setlang(language);

  localStorage.setItem('language', JSON.stringify(language));

  location.reload();
}
