var data_div = document.getElementById("data");

function storeItem() {
  let form = document.getElementById("myform");

  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("img").value;

  let location = {
    name,
    price,
    image,
  };

  let arr;

  arr = localStorage.getItem("location");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("location"));
  }
  arr.push(location);

  localStorage.setItem("location", JSON.stringify(arr));
}
