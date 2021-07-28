var final_data = document.getElementById("fianlstore");

var final_price = document.getElementById("finacart");

var data_div = document.getElementById("container");

function appendProducts(el) {
  var div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;

  let p_brand = document.createElement("p");
  p_brand.innerHTML = el.brand;

  let image = document.createElement("img");
  image.src = el.image;

  div.append(image, p_name, p_brand, p_price);

  data_div.append(div);
}

let data = JSON.parse(localStorage.getItem("jewelary"));

let totadata = document.createElement("p");
totadata.innerHTML = "<b>totadata:</b> " + data.length;

final_data.append(totadata);

var finalPrice = 0;

for (var i = 0; i < data.length; i++) {
  let price = Number(data[i].price);
  finalPrice += price;
}

var fullPrice = document.createElement("p");

fullPrice.innerHTML = "<b>totalPrice:</b>" + finalPrice;
final_price.append(fullPrice);

function checkPromo() {
  let promo = document.getElementById("promo").value;

  if (promo == "masai30") {
    final_price.innerText = null;
    var final = finalPrice - finalPrice * 0.3;

    var newElemnt = document.createElement("p");
    newElemnt.innerHTML =
      "<b>Total Price</b>" +
      "<del><i>" +
      finalPrice +
      " " +
      "</i></del>" +
      final;

    final_price.append(newElemnt);
  } else {
    alert("coupon Invalid");
  }
  console.log(promo);
}

function showProducts() {
  let data = JSON.parse(localStorage.getItem("jewelary"));
  data_div.innerHTML = null;
  data.forEach(function (el) {
    appendProducts(el);
  });
}
showProducts();

function sucess() {
  window.location.href = "checkout.html";
}
