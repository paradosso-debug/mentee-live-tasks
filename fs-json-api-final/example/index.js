// Import the Express framework (like hiring a kitchen manager 👨‍🍳)
const express = require("express");

// Import Node's built-in "path" module to handle folder paths (like a GPS for files)
const path = require("path");

// Import Node's built-in "fs" module (this is like our pen & paper to read/write order receipts)
const fs = require("fs");

// Create an Express app (open the kitchen!)
const app = express();

// Define the port number (door number of our restaurant)
const PORT = 8888;

//MIDDLEWARE - Middleware = “helpers” that process requests before your server handles them.

// Middleware #1: Serve static files from the "public" folder
// (If a customer opens our website, show them the menu = index.html)
app.use(express.static(path.join(__dirname, "public"))); //__dirname = the folder this file is in. path.join(...) safely joins the path to the public folder.

// Middleware #2: Allow Express to understand incoming JSON data
// (This lets the kitchen read the details of the customer's order)
app.use(express.json());

/**
 * Test route: Ping
 * Customers or developers can check if the kitchen is open.
 * Example: If you go to http://localhost:8888/ping, you'll get "pong"
 */
app.get("/ping", (req, res) => {
  res.send("pong"); // Reply with "pong" to say we're alive and working
});

/**
 * POST route: /api/data
 * This is the main place customers send their order (data).
 * The kitchen receives it and saves it into a new receipt file like 1.json, 2.json, etc.
 */
app.post("/api/data", (req, res) => {
  // app.post(...) = defines a POST route (used to send data).
  // Read the current list of receipt files in the "data/" folder
  const files = fs.readdirSync("./data", "utf8");

  // Log what files we already have in the console (useful for tracking)
  console.log("Existing files:", files);

  // IF this is the first order (folder is empty)
  if (!files.length) {
    // Create the first receipt: "1.json" and write the order into it
    fs.writeFileSync("./data/1.json", JSON.stringify(req.body, null, 2));
    //writeFileSync(...) = write to a file right now.
    //"./data/1.json" = create a file named 1.json inside data/.
    //JSON.stringify(req.body, null, 2) = turn the JSON data into a string, with pretty formatting (2 spaces).

    // Send a message back to the customer (frontend)
    res.send("Saved to 1.json");
  } else {
    // ELSE: There are already orders — we need to create the next one

    // Get the name of the last receipt (e.g., "2.json")
    const lastFileNum = Number(files[files.length - 1].replace(".json", ""));
    // Looks at the last one ("2.json")
    //.replace(".json", "") = remove the .json part → "2".
    // Number(...) = turns that into a real number → 2.
    // Now you know the next one should be 3.json

    // Make the next filename by adding 1 to the last number
    const newFile = `${lastFileNum + 1}.json`;

    // Save the new order to the new receipt file
    fs.writeFileSync(`./data/${newFile}`, JSON.stringify(req.body, null, 2));

    // Tell the frontend which file we saved it to
    res.send(`Saved to ${newFile}`);
  }
});

/**
 * Start the server
 * This tells the app to open the restaurant and start taking orders on the door 8888
 */

app.listen(PORT, () => {
  console.log("Server running on port:", PORT); // Confirm in console
});
