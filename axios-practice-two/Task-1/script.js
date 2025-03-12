// Select the joke display paragraph and the "Get Joke" button
const jokeBtn = document.getElementById("getJokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");
const url = "https://icanhazdadjoke.com/";

// Add an event listener so that when the button is clicked, a joke is fetched
jokeBtn.addEventListener("click", () => {
  axios
    .get(url, { headers: { Accept: "application/json" } })

    .then((response) => {
      jokeDisplay.textContent = response.data.joke;
    })
    .catch((error) => {
      console.log("Error fetching the joke", error);
      jokeDisplay.textContent = "Failed to get the joke";
    });
});
// Using Axios to make a GET request to the joke API
