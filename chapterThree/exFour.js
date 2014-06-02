// Modify the video-rental kiosk program so that when a movie is checked out it is
// added to a list of rented movies. Display this list whenever a customer checks out
// a movie.

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
  movieList.append(movies[i]);
}

function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    console.log(list.getElement());
  }

  function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
      if (list.getElement() instanceof Customer) {
        console.log(list.getElement()["name"] + ", " +
          list.getElement()["movie"]);
      }
      else {
        console.log(list.getElement());
      }
    }
  }

  var customers = new List();
  var rentedMovies = new List();

  function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
  }

  function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
      var c = new Customer(name, movie);
      customerList.append(c);
      rentedMovies.append(movie);
      filmList.remove(movie);
      console.log(rentedMovies);
    }
    else {
      console.log(movie + " is not available.");
    }
  }
