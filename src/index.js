const img = document.querySelector('#container');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=wzRauOka5VGGkO1WRrBhRFPHBsxpeQqf&s=rain', {mode: 'cors'})
.then(function(response) {
   return response.json();
 })
 .then(function(response) {
   img.style.backgroundImage = "url("+response.data.images.original.url+")";
 });
