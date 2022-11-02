import { serverApi } from './serverApi';
import { refs } from './refs';

refs.trend.addEventListener('change', onSelectChange);

if (localStorage.getItem('selected-trend')) {
  const parsedData = JSON.parse(localStorage.getItem('selected-trend'));
  refs.trend.value = parsedData;
  serverApi.setTrend(parsedData);
}

function onSelectChange(evt) {
  const trend = evt.target.value;

  serverApi.setTrend(trend);

  localStorage.setItem('selected-trend', JSON.stringify(trend));

  location.reload();
}
