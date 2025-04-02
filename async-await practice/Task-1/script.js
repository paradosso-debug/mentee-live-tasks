// `factButton` → Button that triggers the cat fact request
// `factText` → Paragraph element where the cat fact will be displayed

//  STEP 1: Select HTML elements
const catFacts = document.getElementById("cat-fact");
const catBtn = document.getElementById("fetch-fact");
const url = "https://catfact.ninja/fact";

//  STEP 2: Create an asynchronous function to fetch a random cat fact
async function getCatInfo() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Bad response:${response.status}`);
    }
    const data = await response.json();
    // console.log("data", data.value);
    catFacts.textContent = data.fact;
  } catch (error) {
    catFacts.textContent = "error fetching cat fact :(";
    console.error("Error fetching data", error);
  }
}

catBtn.addEventListener("click", getCatInfo());

//  STEP 3: Fetch data from the cat fact API
// `await` pauses the code until the data is fully received

//  STEP 4: Check if the response was successful
// `.ok` ensures the response status is successful

// Triggers `catch` if response fails

// STEP 5: Convert the response data into JSON format

//  STEP 6: Display the cat fact on the page
// `data.fact` accesses the fact text from the API response

// STEP 7: Handle errors if something goes wrong

// Display a friendly error message for the user

// Log error details console.log

//  STEP 8: Add an event listener to the button
