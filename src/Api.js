async function weatherApi(city, unit) {
  let baseUrl;
  if (unit === 'Fahrneit') {
    baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8428a08b2b52c02fb71710a6f873f22&units=imperial`;
  } else {
    baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8428a08b2b52c02fb71710a6f873f22&units=metric`;
  }
  try {
    const response = await fetch(baseUrl, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`${e.name}: ${e.message}`);
  }
}

export default weatherApi;
