import apiBackground from './backgroud';
import weatherApi from './Api';
import createBox from './domFile';
import 'bootstrap';

createBox();
const cit = 'Macedo de Cavaleiros';
let cit2 = 'Fahrneit';
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
window.addEventListener('load', () => {
  const search = document.querySelector('#search');
  search.addEventListener('click', () => {
    const inputBox = document.querySelector('#city-name');
    const selector = document.querySelector('.units');
    const text = inputBox.value;
    cit2 = selector.value;
    getWeather(text, cit2);
  });
});
