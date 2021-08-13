function classicalProblem(data) {
  let stack = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] == "(" || data[i] == "[" || data[i] == "{") {
      stack.push(data[i]);
      continue;
    }

    if (stack.length == 0) {
      return false;
    }

    let checkClassical = "";

    switch (data[i]) {
      case ")":
        checkClassical = stack.pop();
        if (checkClassical == "{" || checkClassical == "[") {
          return false;
        }
        break;

      case "}":
        checkClassical = stack.pop();
        if (checkClassical == "(" || checkClassical == "[") {
          return false;
        }
        break;

      case "]":
        checkClassical = stack.pop();
        if (checkClassical == "(" || checkClassical == "{") {
          return false;
        }
        break;
    }
  }

  return stack.length == 0;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCases = Number(newInput[0]);

  for (var i = 1; i <= testCases; i++) {
    var data = newInput[i].trim();

    if (classicalProblem(data) == true) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
  {([])}
  ()
  ([]
  `); //write test case here
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
