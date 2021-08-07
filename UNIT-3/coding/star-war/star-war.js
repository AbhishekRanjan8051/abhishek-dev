let movesDiv = document.getElementById("chra");

var timer;

async function searchMovie() {
  let movies = document.getElementById("inputBox").value;

  if (movies.length == 0) {
    return false;
  }

  let responsive = await fetch(
    ` https://swapi.dev/api/people/?search=${movies}`
  );

  let data = await responsive.json();
  return data.results;
}

searchMovie();

function nameFunction() {
  if (timer) {
    return false;
  }

  timer = setTimeout(() => {
    chra();
    timer = undefined;
  }, 10);
}

function showMovie(d) {
  let maindiv = document.createElement("div");
  maindiv.id = "resultBox";
  movesDiv.innerHTML = null;

  d.forEach(({ name }) => {
    let myP = document.createElement("p");

    myP.innerText = name;

    maindiv.append(myP);
    movesDiv.append(maindiv);
  });
}

async function chra() {
  let movie = await searchMovie();
  showMovie(movie);
}
