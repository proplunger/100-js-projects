document.addEventListener("DOMContentLoaded", function() {
  // Load movies from db.json
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "db.json");
  xhr.responseType = "json";
  xhr.onload = function() {
    var data = xhr.response;
    var movies = data.movies;
    var favourites = data.favourites;

    // Display movies
    movies.forEach(function(movie) {
      var li = document.createElement("li");

      var title = document.createElement("h2");
      title.textContent = movie.title;
      li.appendChild(title);

      var year = document.createElement("p");
      year.textContent = "Year: " + movie.year;
      li.appendChild(year);

      var description = document.createElement("p");
      description.textContent = "Description: " + movie.description;
      li.appendChild(description);

      var image = document.createElement("img");
      image.style.height = "200px";
      image.src = movie.image;
      li.appendChild(image);

      var button = document.createElement("button");
      button.textContent = "Add to Favourites";
      button.addEventListener("click", function() {
        // Add movie to favourites
        favourites.push(movie);

        // Update db.json with new favourites
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "db.json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          // Move movie to favourites list
          li.remove();
          document.querySelector("#favourites-list").appendChild(li);
        };
        xhr.send(JSON.stringify(data));
      });
      li.appendChild(button);

      document.querySelector("#movie-list").appendChild(li);
    });

    // Display favourites
    favourites.forEach(function(favourite) {
      var li = document.createElement("li");
      var title = document.createElement("h2");
      title.textContent = favourite.title;
      li.appendChild(title);

      var year = document.createElement("p");
      year.textContent = "Year: " + favourite.year;
      li.appendChild(year);

      var description = document.createElement("p");
      description.textContent = "Description: " + favourite.description;
      li.appendChild(description);

      var image = document.createElement("img");
      image.src = favourite.image;
      li.appendChild(image);

      document.querySelector("#favourites-list").appendChild(li);
    });
  };
  xhr.send();
});
