// storeLocation;
// showVisited;
// name;
// rating;
// img;
var data_div = document.getElementById("data");
function storeLocation() {
  let form = document.getElementById("myForm");

  let name = form.name.value;
  let rating = form.rating.value;
  let image = form.img.value;

  let location = {
    name,
    rating,
    image,
  };
  //   let arr = []; // first visit
  //     let arr = JSON.parse(localStorage.getItem("locations"));

  //     arr.push()

  let arr;
  arr = localStorage.getItem("locations");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("locations"));
  }

  arr.push(location);
  localStorage.setItem("locations", JSON.stringify(arr));

  showLocations();
}

//

function appendLocations(el) {
  var div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_rating = document.createElement("p");
  p_rating.innerHTML = el.rating;

  let img = document.createElement("img");
  img.src = el.image;

  let btn = document.createElement("button");
  btn.textContent = "add to visited";

  btn.addEventListener("click", function () {
    addtoVisited(el);
  });
  btn.style.display = "block";

  div.append(p_name, p_rating, img, btn);

  data_div.append(div);
}

// function showLocations() {
//   let data = JSON.parse(localStorage.getItem("locations"));
//   data_div.innerHTML = null;
//   data.forEach(function (el) {
//     appendLocations(el);
//   });
// }
function showLocations() {
  let data = JSON.parse(localStorage.getItem("locations"));
  data_div.innerHTML = null;
  data.forEach(function (el) {
    appendLocations(el);
  });
}
showLocations();

function addtoVisited(obj) {
  let arr;
  arr = localStorage.getItem("visited");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("visited"));
  }

  arr.push(obj);
  localStorage.setItem("visited", JSON.stringify(arr));
}
function showVisited() {
  window.location.href = "visited.html";
}
