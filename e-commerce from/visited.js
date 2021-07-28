var data_div = document.getElementById("data");

function appendLocations(el) {
  var div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_rating = document.createElement("p");
  p_rating.innerHTML = el.rating;

  let img = document.createElement("img");
  img.src = el.image;

  div.append(p_name, p_rating, img);

  data_div.append(div);
}

function showVisited() {
  let data = JSON.parse(localStorage.getItem("visited"));
  data_div.innerHTML = null;
  data.forEach(function (el) {
    appendLocations(el);
  });
}
showVisited();
