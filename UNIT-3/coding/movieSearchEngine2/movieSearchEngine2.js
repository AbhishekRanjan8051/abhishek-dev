async function myFunction() {
  var name = document.getElementById("movie").value;
  var output = document.getElementById("movieshow");
  let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=eb13a6ff`);
  let data = await res.json();
  console.log("data:", data);

  if (name == "") {
    output.innerHTML = null;
  } else if (
    data.Title == undefined &&
    data.DVD == undefined &&
    data.Actors == undefined &&
    data.imdbRating == undefined
  ) {
    output.innerHTML = `<div id="main">
               <img src="notfound.jpg" style = "width:470px;height:100%;">
                <p id="nothing">Nothing is found</p>
              </div>`;
  } else {
    output.innerHTML = `<div id="main"><img src="${data.Poster}" id="poster" alt="" />
      <br />
      <h1 id="heading">${data.Title}</h1>
         <p id="date">release date : ${data.DVD}</p>
      <p id="actor">actors : ${data.Actors}</p>
      <p id="rating">IMDB rating : ${data.imdbRating}</p></div>`;
  }
}
