function fetchApi() {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      console.log('data:', data);
      console.log('Third result:', data.results[2]);
      console.log('Third result Url:', data.results[2].url);
    });
}

fetchApi();
