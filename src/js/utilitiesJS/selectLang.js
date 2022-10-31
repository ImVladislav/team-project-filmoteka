import { serverApi } from './serverApi';

const select = document.querySelector('.select__lang');

select.addEventListener('change', onSelectChange);

if (localStorage.getItem('language')) {
  const parsedData = JSON.parse(localStorage.getItem('language'));
  select.value = parsedData;
  serverApi.setlang(parsedData);
}

function onSelectChange(evt) {
  const language = evt.target.value;

  serverApi.setlang(language);

  localStorage.setItem('language', JSON.stringify(language));

  location.reload();
}
