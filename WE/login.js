const admins = [
  {
    username: "raj",
    password: "raj123",
  },

  {
    username: "ranjan",
    password: "ranjan123",
  },
  {
    username: "rambhu",
    password: "rambhu123",
  },
];

if (localStorage.getItem("admins") == null) {
  localStorage.setItem("admins", JSON.stringify(admins));
}

function startLogin(e) {
  e.preventDefault();
  const form = document.getElementById("login");

  const username = form.username.value;
  const password = form.password.value;

  const admins = JSON.parse(localStorage.getItem("admins"));

  for (let i = 0; i < admins.length; i++) {
    let u = admins[i].username;
    let p = admins[i].password;

    if (u === username && p === password) {
        // alert("success");
      window.location.href = "home.html";
      break;
    }
  }
}
