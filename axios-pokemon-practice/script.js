const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// Function to display Pokémon data on UI (Used for multiple tasks 4,2,3,32,5)
function displayPokemon(data) {
  document.getElementById("pokemonDetails").innerHTML = `
  <h2>${data.name.toUpperCase()}</h2>
  <p>ID: ${data.id}</p>
  <p>Height: ${data.height}</p>
  <p>Weight: ${data.weight}</p>
  <p>Ability: ${data.ability}</p>
  <img id='pokemonSprite' src='${data.sprites.front_default}' alt='picture of ${
    data.name
  }'>
  `;
}

// Task 12 & 14: Handle "Not Found" and Empty Query
function searchPokemon() {
  let name = document.getElementById("searchInput").value.toLowerCase();

  if (!name) {
    document.getElementById("errorContainer").innerText =
      "Please enter a Pokemon name";

    return;
  }

  document.getElementById("loadingMessage").innerText = "Loading...";

  document.getElementById("errorContainer").innerText = "";

  axios
    .get(`${baseURL}${name}`)
    .then((response) => {
      displayPokemon(response.data);
      document.getElementById("loadingMessage").innerText = "";
    })

    .catch(() => {
      document.getElementById("errorContainer").innerText =
        "Pokemon not found.";
      document.getElementById("loadingMessage").innerText = "";
    });
}

// Task 1: Fetch & display Pikachu's name
function fetchPikachu() {
  axios.get(`${baseURL}pikachu`).then((res) => displayPokemon(res.data));
}

// Task 2: Fetch & display Charizard's height
function fetchCharizard() {
  axios.get(`${baseURL}Charizard`).then((res) => displayPokemon(res.data));
}

// Task 3: Fetch & display Bulbasaur's weight
function fetchBulbasaur() {}

// Task 4: Fetch & display Eevee's Pokémon ID
function fetchEevee() {}

// Task 5: Fetch & display Gengar's front sprite
function fetchGengar() {}

// Task 12: Fetch Invalid Pokémon (handles "Not Found" case)*************
function fetchInvalidPokemon() {}

// Task 14: Fetch with an Empty Query
function fetchEmptyQuery() {}

// Task 17: Show "Loading..." while fetching data
function fetchWithLoading() {}

// Task 21: Fetch two Pokémon at the same time & display them sequentially
function fetchTwoPokemon() {}

// Task 26: Fetch three random Pokémon & display them sequentially
function fetchThreeRandom() {}

// Task 32: Fetch & display weight in kilograms using `.map()`
function fetchWeightInKg() {}
