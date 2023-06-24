// Write your code here
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverView() {
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director}
           , was released in ${this.releaseYear}.
           it recieved rating of ${this.rating}`);
  }
}

const old = new Movie("Old", "Shams Cheranya", "Horror", 2020, 6.3);

old.getOverView();