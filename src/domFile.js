import createEl from './creation';

function createBox() {
  const container = document.querySelector('#container');

  const weather = createEl('div', 'weather');
  const head = createEl('div', 'head');
  const temperature = createEl('div', 'temperature');
  const h3 = createEl('h3', '');
  const p = createEl('p', '');
  h3.innerText = 'Temperature';

  const temperature2 = createEl('div', 'temperature2');
  const h32 = createEl('h3', '');
  const p2 = createEl('p', '');
  h32.innerText = 'City';

  const weatherbody = createEl('div', 'weather-body');
  const wind = createEl('div', 'wind');
  const h33 = createEl('h3', '');
  const p3 = createEl('p', '');
  h33.innerText = 'Wind:';

  wind.appendChild(h33);
  wind.appendChild(p3);
  wind.appendChild(h33);
  wind.appendChild(p3);

  const condition = createEl('div', 'condition');
  const h34 = createEl('h3', '');
  const p4 = createEl('p', '');
  h34.innerText = 'Condition:';

  const weatherFooter = createEl('div', 'weather-footer');
  const l = createEl('label', 'switch');
  const inputT = createEl('input', 'tog');
  inputT.type = 'checkbox';
  const spanT = createEl('span', 'slider');
  const cel = createEl('span', '');
  cel.innerText = 'Celsius?';
  weatherFooter.appendChild(cel);

  l.appendChild(inputT);
  l.appendChild(spanT);
  weatherFooter.appendChild(l);

  const label = createEl('label', '');
  label.innerText = 'Location:';
  weatherFooter.appendChild(label);

  const input = createEl('input', '');
  input.id = 'city-name';
  weatherFooter.appendChild(input);

  const button = createEl('button', '');
  button.id = 'search';
  button.innerText = 'Search';
  weatherFooter.appendChild(button);

  condition.appendChild(h34);
  condition.appendChild(p4);
  condition.appendChild(h34);
  condition.appendChild(p4);

  temperature.appendChild(h3);
  temperature.appendChild(p);
  temperature2.appendChild(h32);
  temperature2.appendChild(p2);

  head.appendChild(temperature);
  head.appendChild(temperature2);
  weather.appendChild(head);
  weatherbody.appendChild(wind);
  weatherbody.appendChild(condition);
  weather.appendChild(weatherbody);
  weather.appendChild(weatherFooter);

  container.appendChild(weather);
}

export default createBox;
