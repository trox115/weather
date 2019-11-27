async function weatherApi(city) {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8428a08b2b52c02fb71710a6f873f22`;
  const response = await fetch(baseUrl, { mode: 'cors' });
  const data = await response.json();
  return data;
}

export { weatherApi };
