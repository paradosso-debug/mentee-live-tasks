// express-calculator.js

// 1. Import express
const express = require("express");

// 2. Create an Express app
const app = express();

// 3. Set a port for the server
const PORT = 8888;

// 4. Hardcoded values
const num1 = 10;
const num2 = 5;
const operator = "*";

// 5. Convert to numbers
const a = parseFloat(num1);
const b = parseFloat(num2);

// 6. Calculator function
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? " Cannot divide by zero." : a / b;
    default:
      return " Invalid operator. Use +, -, * or /.";
  }
}
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

// app.get("/ping", function (req, res) {
//   return res.send("pong");
// });
// 7. Start the server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);

  // 8. Do the calculation right after the server starts
  const result = calculate(a, b, operator);
  console.log(` Result of ${a} ${operator} ${b} = ${result}`);
});
