// Select the input field, "Send Data" button, and the response display paragraph
const sendData = document.getElementById("sendDataBtn");
const nameInput = document.getElementById("nameInput");
const responses = document.getElementById("responseDisplay");

// Add an event listener for when the button is clicked
sendData.addEventListener("click", () => {
  const userName = nameInput.value;
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      name: userName,
    })
    .then((res) => {
      responses.textContent = `Success! Name: ${res.data.name} ${res.data.id}`;
      console.log(res.data.name, res.data.id);
    })
    .catch((error) => {
      console.log("Error", error);
      responses.textContent = "You messed up somewhere.";
    });
});
// Store the value typed into the input field

// Using Axios to make a POST request to send data
