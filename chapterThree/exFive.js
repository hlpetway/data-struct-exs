// Create a check-in function for the video-rental kiosk program so that a returned
// movies is deleted from the rented movies list and is added back to the available
// movies list.

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

function checkIn(name, movie, filmList, customerList) {
  if (customerList.contains(name)) {
  customerList.remove(movie);
  rentedMovies.remove(movie);
  filmList.append(movie);
}
