import apiBackground from './backgroud';
import weatherApi from './Api';

const cit = 'Évora';
function getWeather(cit) {
  weatherApi(cit).then((data) => {
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

window.addEventListener('load', (event) => {
  const search = document.querySelector('#search');
  search.addEventListener('click', () => {
    console.log('hello');
    const inputBox = document.querySelector('#city-name');
    const text = inputBox.value;
    getWeather(text);
  });
});
