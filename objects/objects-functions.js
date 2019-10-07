let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zin",
  pageCount: 723
};

function getSummary(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

function convertFahrenheit(fahrenheit) {
  let tempC = (fahrenheit - 32) * (5 / 9);
  let tempK = (fahrenheit + 459.67) * (5 / 9);

  return {
    fahrenheit: fahrenheit,
    celsius: tempC,
    kelvin: tempK
  };
}

console.log(convertFahrenheit(74));
