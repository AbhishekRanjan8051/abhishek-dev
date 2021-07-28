var data_div = document.getElementById("data");

function storeInformation() {
    let form = document.getElementById("signFrom");
    

  let name = document.getElementById("name").value;

  let contact = document.getElementById("contact").value;

  let email = document.getElementById("email").value;

  let password = document.getElementById("psw").value;

  let information = {
    name,
    contact,
    email,
    password,
  };

  let arr;

  arr = localStorage.getItem("information");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("information"));
  }
  arr.push(information);

  localStorage.setItem("information", JSON.stringify(arr));
}
