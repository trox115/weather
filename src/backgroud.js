function apiBackground(weather) {
  const img = document.querySelector('#container');
  console.log(weather);
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=wzRauOka5VGGkO1WRrBhRFPHBsxpeQqf&s=${weather}`,
    { mode: 'cors' },
  )
    .then((response) => response.json())
    .then((response) => {
      img.style.backgroundImage = `url(${response.data.images.original.url})`;
    });
}

export { apiBackground };
