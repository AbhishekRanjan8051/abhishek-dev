function checkTicToe(matrix, data) {
  //first digonal

  if (matrix[0][0] == data && matrix[1][1] == data && matrix[2][2] == data) {
    return true;
  }

  //second digonal

  if (matrix[0][2] == data && matrix[1][1] == data && matrix[2][0] == data) {
    return true;
  }

  //for columns and row

  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == data && matrix[i][1] == data && matrix[i][2] == data) {
      return true;
    }

    if (matrix[0][i] == data && matrix[1][i] == data && matrix[2][i] == data) {
      return true;
    }
  }
  return false;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var matrix = newInput.slice(0).map(function (row) {
    return row.split(" ");
  });

  // console.log(matrix);

  if (checkTicToe(matrix, "x") == true) {
    console.log("x");
  } else if (checkTicToe(matrix, "o") == true) {
    console.log("o");
  } else {
    console.log("tie");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`x o o
o x x
x o o`); //write test case here
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
