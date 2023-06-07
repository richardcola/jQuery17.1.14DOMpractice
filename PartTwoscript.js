$(document).ready(function() {
    var movies = [];
  
    function addMovie(title, rating) {
      var movie = { title: title, rating: rating };
      movies.push(movie);
      renderMovies();
    }
  
    function removeMovie(index) {
      movies.splice(index, 1);
      renderMovies();
    }
  
    function renderMovies() {
      $("#movies-container").empty();
  
      movies.forEach(function(movie, index) {
        var movieElement = $("<div>")
          .addClass("movie")
          .append($("<span>").text("Title: " + movie.title))
          .append($("<span>").text("Rating: " + movie.rating))
          .append(
            $("<button>")
              .text("Remove")
              .click(function() {
                removeMovie(index);
              })
          );
  
        $("#movies-container").append(movieElement);
      });
    }
  
    function sortMoviesByTitle(ascending) {
      movies.sort(function(a, b) {
        if (ascending) {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
  
      renderMovies();
    }
  
    function sortMoviesByRating(ascending) {
      movies.sort(function(a, b) {
        if (ascending) {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      });
  
      renderMovies();
    }
  
    $("#movie-form").submit(function(event) {
      event.preventDefault();
  
      var title = $("#title").val();
      var rating = $("#rating").val();
  
      addMovie(title, rating);
  
      // Reset the form
      $("#title").val("");
      $("#rating").val("");
    });
  
    $("#sort-title-asc").click(function() {
      sortMoviesByTitle(true);
    });
  
    $("#sort-title-desc").click(function() {
      sortMoviesByTitle(false);
    });
  
    $("#sort-rating-asc").click(function() {
      sortMoviesByRating(true);
    });
  
    $("#sort-rating-desc").click(function() {
      sortMoviesByRating(false);
    });
  });
  