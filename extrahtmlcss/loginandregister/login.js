var data_div = document.getElementById("data");

function storeInformation() {
  let form = document.getElementById("register");

  let userid = document.getElementById("userid").value;

  let email = document.getElementById("emailid").value;

  let password = document.getElementById("psw").value;

  let information = {
    userid,
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

//   login javascripit

function startLogin(e) {
  e.preventDefault();
  const admins = JSON.parse(localStorage.getItem("information"));
  //   console.log('admins:', admins)
  //   document.getElementById("data").innerHTML = admins;

  const form = document.getElementById("login");

  const userid = form.userid.value;

  const psw = form.psw.value;

  let flag = false;

  for (let i = 0; i < admins.length; i++) {
    let u = admins[i].userid;
    let p = admins[i].password;

    if (u === email && p === psw) {
      alert("success");
      flag = true;
      // window.location.href = "home.html";
      break;
    }
  }
  if (flag == false) {
    alert("invalid Creditals");
  }
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}