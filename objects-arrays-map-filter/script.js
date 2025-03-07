// Task 2: Double all prices in an array of objects
const products = [
  { id: 1, price: 10 },
  { id: 2, price: 20 },
  { id: 3, price: 30 },
];

// Using map() to create a new array where prices are doubled
const doubledPrices = products.map((product) => ({
  id: product.id,
  price: product.price * 2, //multiply price by 2
}));

console.log(doubledPrices);

// Task 3: Convert array of objects into strings "Name: Age"
const people = [
  { name: "Blanco", age: 25 },
  { name: "Timmy", age: 30 },
];

// Using map() to create an array of formatted strings ['name: blanco', 'age: 25']
const formattedPeople = people.map(
  (person) => `name: ${person.name}, age: ${person.age}`
);
console.log(formattedPeople);

// const formattedPeople2 = people.map((person) => 'name: ' + person.name + ', ' + 'age: ' + person.age);
// console.log(formattedPeople2);

// Task 10: Extract book titles from an array of book objects
const books = [
  { title: "Cat in the hat", author: "Jays", genre: "action" },
  { title: "killerCat", author: "Micmittens", genre: "Cat Lore" },
];

// Using map() to return only the book titles

const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// Task 13: Return full names from nested person objects
const peopleData = [
  {
    person: {
      firstName: "Jason",
      lastName: "Mamoa",
    },
  },
  {
    person2: {
      firstName: "something",
      lastName: "something else",
    },
  },
];

// Using map() to extract full names

const fullNames = peopleData.map(
  (individual) => {
    console.log(individual);
    const person =
      "person" in individual ? individual.person : individual.person2;

    return `First Name ${person.firstName} Last Name ${person.lastName}`;
  }

  // `First name ${individual.person.firstName} Last name ${individual.person.lastName} Another Person ${individual.person2.firstName} Last Name ${individual.person2.lastName}`
);
console.log(fullNames);

// Task 15: Convert author object into fullName and bookCount
// const authorData = {

// };

// Creating a new object with fullName and bookCount
// const authorInfo =

// Task 19: Transform city objects into simpler format "string"
// const cityData =

// Using map() to restructure the data
// const mappedCities =

// Task 44: Filter only developers from team members
// const teamData = {

// };

// Using filter() to get only developers
// const developersOnly =

// Task 48: Filter employees who worked more than 5 years
// const companyData = {

// };

// Using filter() to get experienced employees
// const experiencedEmployees =

// Example object: const person = { name: "Alice", age: 25 };
// Example array: const numbers = [1,2,3]
