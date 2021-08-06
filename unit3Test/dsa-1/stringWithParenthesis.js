function checkBracket(data) {
  let sta = [];

  for (var a = 0; a < data.length; a++) {
    if (data[a] == "(" || data[a] == "[" || data[a] == "{") {
      sta.push(data[a]);
    }

    if (data.length == 0) {
      return false;
    }
    // if (data.length % 2 != 0) {
    //   return false;
    // }
    let result = "";

    switch (data[a]) {
      case ")":
        result = sta.pop();

      case "}":
        result = sta.pop();

      case "]":
        result = sta.pop();
    }
  }
  return sta.length == 0;
}

function runProgram(input) {
  var data = input;

  if (checkBracket(data) == true) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`); //write test case here
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
