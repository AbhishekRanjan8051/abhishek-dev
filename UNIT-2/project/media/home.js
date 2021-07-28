function slideshow() {
  const arr = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/9590/779590-h",
    "https://www.bshspawprint.com/wp-content/uploads/2019/04/Avengers-Endgame-900x506.jpg",
    "https://images.hindustantimes.com/img/2021/05/26/original/Screen_Shot_2021-05-26_at_7.12.51_PM_1622036737223.png",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h",
    "https://images.indianexpress.com/2019/09/fordvferrari.jpg",
  ];

  let div = document.getElementById("slideshow");
  let img = document.createElement("img");

  let i = 0;

  img.src = arr[0];

  div.append(img);

  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    img.src = arr[i];

    i++;
  }, 2000);
}

slideshow();

const movie = [
  {
    name: "The Shawshank Redemption",
    releaseDate: "1994",
    IMDbrating: "9.2",

    poster: "https://www.filmsite.org/posters/shawshankredemption.jpg",
  },
  {
    name: "The Godfather",
    releaseDate: "1972",
    IMDbrating: "9.1",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },

  {
    name: "The Dark Knight",
    releaseDate: "2008",
    IMDbrating: "9.0",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },

  {
    name: "3 Idiots",
    releaseDate: "2009",
    IMDbrating: "8.3",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },

  {
    name: "Tumbad",
    releaseDate: "2018",
    IMDbrating: "8.2",
    poster:
      "https://i2.cinestaan.com/image-bank/1500-1500/134001-135000/134176.jpg",
  },

  {
    name: "Avengers : End Game",
    releaseDate: "2021",
    IMDbrating: "8.4",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
  },

  {
    name: "Money Heist",
    releaseDate: "2017",
    IMDbrating: "8.2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },

  {
    name: "The big Bull",
    releaseDate: "2021",
    IMDbrating: "6.1",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/9649/959649-v",
  },

  {
    name: "Sanju",
    releaseDate: "2018",
    IMDbrating: "6.1",
    poster:
      "https://economictimes.indiatimes.com/thumb/msid-64805334,width-1200,height-900,resizemode-4,imgsize-243131/sanju.jpg?from=mdr",
  },
];

if (localStorage.getItem("movie") == null) {
  localStorage.setItem("movie", JSON.stringify(movie));
}

function showMovie(data) {
  let movie = data;
  console.log("movie:", movie);

  let movie_div = document.getElementById("movie");

  movie_div.innerHTML = null;

  movie.forEach(function (el) {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerText == el.name;

    let p_releaseDate = document.createElement("p");

    p_releaseDate.innerText = el.releaseDate;

    let p_IMDbrating = document.createElement("p");

    p_IMDbrating.innerText = el.IMDbrating;

    let poster = document.createElement("img");

    poster.src = el.poster;

    div.append(poster, p_name, p_releaseDate, p_IMDbrating);

    movie_div.append(div);
  });
}
showMovie(JSON.parse(localStorage.getItem("movie")));

function sortLH() {
  let movie = JSON.parse(localStorage.getItem("movie"));

  movie = movie.sort(function (a, b) {
    return a.IMDbrating - b.IMDbrating;
  });
  showMovie(movie);
}

function sortHL() {
  let movie = JSON.parse(localStorage.getItem("movie"));

  movie = movie.sort(function (a, b) {
    return b.IMDbrating - a.IMDbrating;
  });
  showMovie(movie);
}
