function emailChecker(data) {
  var email = data.split("@");
  var username = email[0];

  var emailContent = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
  var validEmail = emailContent.split("");

  if (username[0] === "@") {
    return false;
  }
  if (username[0] === ".") {
    return false;
  }
  if (username[0] === "") {
    return false;
  }

  for (var i = 0; i < username.length; i++) {
    if (!validEmail.includes(username[i])) {
      return false;
    }
  }

  var dotSeperation = username.split(".");
  if (dotSeperation.length >= 2 || dotSeperation.length == 0) {
    return false;
  }
  return true;
}

function domainName(data) {
  var email = data.split("@");
  var domain = email[1];
  var dotSeperation = domain.split(".");

  if (domain[0] == ".") {
    return false;
  }

  if (dotSeperation[dotSeperation.length - 1] < 2) {
    return false;
  }

  return true;
}

function validEmail(data) {
  var email = data.split("@");
  if (email !== 2) {
    return false;
  }
  return true;
}

function atTheRateChecker(data) {
  var email = data;

  for (var i = 0; i < email.length; i++) {
    if (email[i] !== "@") {
      return false;
    }
  }
  return true;
}

// var data = "";

function runProgram(input) {
  var data = input;
  if (emailChecker(data) && domainName(data) && validEmail(data)) {
    console.log("Vaild");
  } else {
    console.log("Not Valid");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`masai@school.com`); //write test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
