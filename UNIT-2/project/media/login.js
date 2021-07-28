function startLogin(e) {
  e.preventDefault();
  const admins = JSON.parse(localStorage.getItem("information"));
  //   console.log('admins:', admins)
  //   document.getElementById("data").innerHTML = admins;

  const form = document.getElementById("login");

  const email = form.email.value;

  const psw = form.psw.value;

  let flag = false;

  for (let i = 0; i < admins.length; i++) {
    let u = admins[i].email;
    let p = admins[i].password;

    if (u === email && p === psw) {
      //   alert("success");
      flag = true;
      window.location.href = "home.html";
      break;
    }
  }
  if (flag == false) {
    alert("invalid Creditals");
  }
}
