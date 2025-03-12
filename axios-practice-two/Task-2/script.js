// Select the image element and the "Get Dog" button
const dogImg = document.getElementById("dogImage");
const palidrome = document.getElementById("getDogBtn");
const url = "https://dog.ceo/api/breeds/image/random";

// Add an event listener to fetch a dog image when the button is clicked
palidrome.addEventListener("click", () => {
  axios
    .get(url, { headers: { Accept: "application/json" } })

    // >/ "gnihtemos""=crs gmi<
    .then((res) => {
      dogImg.src = res.data.message;
    })
    .catch((error) => {
      console.log("There is an error", error);
    });
});
// Using Axios to make a GET request to fetch a random dog image
