// Select the toggle button
const toggleBtn = document.getElementById("toggleBtn");

// Event listener to toggle dark mode when the button is clicked
toggleBtn.addEventListener("click", () => {
  // Toggle the 'dark-mode' class on the <body>
  document.body.classList.toggle("dark-mode");

  // Check if dark mode is active
  const isDarkMode = document.body.classList.contains("dark-mode");
  console.log(`Dark Mode Active: ${isDarkMode}`); //  Check if dark mode is active

  // Save the dark mode preference to Local Storage
  localStorage.setItem("darkMode", isDarkMode);
  console.log(`Saved to Local Storage: ${isDarkMode}`); //  Check what's saved
});

// Load saved dark mode preference when the page loads
window.addEventListener("load", () => {
  // Check Local Storage for dark mode setting
  const darkMode = localStorage.getItem("darkMode") === "true";
  console.log(`Loaded from Local Storage: ${darkMode}`); // Check if data is loaded correctly

  // If dark mode was enabled previously, apply the 'dark-mode' class
  if (darkMode) {
    document.body.classList.add("dark-mode");
    console.log("Dark mode applied on page load"); //  Confirm dark mode is applied
  } else {
    console.log(" Dark mode NOT applied on page load"); //  Confirm if dark mode was off
  }
});
