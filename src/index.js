import apiBackground from './backgroud';
import weatherApi from './Api';
import createBox from './domFile';

createBox();
let cit = 'Macedo de Cavaleiros';
let cit2 = 'Fahrneit';
const toggle = document.querySelector('.tog');
function getWeather(cit, cit2) {
  weatherApi(cit, cit2).then((data) => {
    const weather = data.weather[0].main;
    const temperature = data.main.temp;
    const wind = data.wind.speed;
    const cit = data.name;
    const win = document.querySelector('.wind p');
    const condition = document.querySelector('.condition p');
    const temp = document.querySelector('.temperature p');
    temp.innerText = temperature;
    const city = document.querySelector('.temperature2 p');
    city.innerText = cit;
    win.innerText = `${wind}mph`;
    condition.innerText = weather;
    apiBackground(weather);
  });
}
getWeather(cit, cit2);

function checkTogle() {
  if (toggle.checked == true) {
    return 'Celsius';
  }
  return 'Fahrneit';
}
window.addEventListener('load', () => {
  const search = document.querySelector('#search');
  const inputBox = document.querySelector('#city-name');
  search.addEventListener('click', () => {
    cit = inputBox.value;
    cit2 = checkTogle();
    getWeather(cit, cit2);
  });
  toggle.addEventListener('click', () => {
    cit2 = checkTogle();
    getWeather(cit, cit2);
  });
});
