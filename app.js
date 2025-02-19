const prices = [10, 20, 30, 40, 50];
console.log(prices);
const sum = prices.reduce((total, price) => total + price, 0);
console.log(sum);
const average = sum / prices.length;
console.log(average);
const book = {
    title: "The Godfather",
    author: "Mario Puzo",
    yearPublished: 1969,
}
console.log(book);
console.log(`${book.title} by ${book.author} was published in ${book.yearPublished}`);

const bookPublished = book.yearPublished;
console.log(bookPublished);
book.yearPublished = 1970;
console.log(book.yearPublished);

const product = [
    { productName: "laptop", price: 1000, isAvailable: true },
    { productName: "smartphone", price: 500, isAvailable: false },
    { productName: "tablet", price: 300, isAvailable: true },
]
console.log(product);