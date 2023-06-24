// Write your code here
class Book {
  constructor(title, author, ISBN, availableCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availableCopies = availableCopies;
  }

  getAvailability() {
    if (this.availableCopies === 0) {
      return "out of stock";
    } else if (this.availableCopies < 10) {
      return "low stock";
    }
    return "in stock";
  }

  sell(numCopies = 1) {
    this.availableCopies - numCopies;
  }

  restock(numCopies = 5) {
    this.availableCopies += numCopies;
  }
}
