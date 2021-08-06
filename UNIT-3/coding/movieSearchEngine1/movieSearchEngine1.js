async function myFunction() {
  var name = document.getElementById("movie").value;
  var output = document.getElementById("movieshow");
  let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=eb13a6ff`);
  let data = await res.json();
  console.log("data:", data);

  output.innerHTML = `<div id="main"><img src = "${data.Poster}" id ="poster">
    <br>
    <h1 id="heading">${data.Title}</h1>
    <p id ="date">Release Date: ${data.DVD}</p>
    <p id="actor">Actors : ${data.Actors}</p>
    <p id="rating">IMDb Rating : ${data.imdbRating}</p>
    
    </div>`;
}
