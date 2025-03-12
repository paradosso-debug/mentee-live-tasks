// Select the display area and the buttons
const counterDisplay = document.getElementById("counterDisplay");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const clearBtn = document.getElementById("clearBtn");

// Check if a saved count exists; if not, start at 0
let count = parseInt(localStorage.getItem("counter")) || 0;

// Display the initial count when the page loads
counterDisplay.textContent = count;
console.log(` Initial Counter Value: ${count}`); // Show starting count

//  Increment Button
incrementBtn.addEventListener("click", () => {
  count++; // Increase the count by 1
  localStorage.setItem("counter", count); // Save updated count to Local Storage
  counterDisplay.textContent = count; // Display updated count
  console.log(` Incremented! New Counter Value: ${count}`);
});

//  Decrement Button
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--; // Decrease the count by 1
    localStorage.setItem("counter", count); // Save updated count to Local Storage
    counterDisplay.textContent = count; // Display updated count
    console.log(`- Decreased! New Counter Value: ${count}`);
  } else {
    console.log(" Cannot decrease below 0");
  }
});

//  Clear Button
clearBtn.addEventListener("click", () => {
  count = 0; // Reset count to 0
  localStorage.removeItem("counter"); // Clear the saved value from Local Storage
  counterDisplay.textContent = count; // Display 0
  console.log(` Counter Reset to 0. Local Storage cleared.`);
});
