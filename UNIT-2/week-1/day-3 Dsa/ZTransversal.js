function zTrnsversal(data, row) {
  var result = "";
  for (var i = 0; i < row; i++) {
    result += data[0][i] + " ";
  }

  var result1 = "";

  for (var j = 1; j < row; j++) {
    for (var l = 1; l < row; l++) {
      if (j + l == row - 1) {
        result1 += data[j][l] + " ";
      }
    }
  }

  var result2 = "";

  for (var k = 0; k < row; k++) {
    result2 += data[row - 1][k] + " ";
  }

  var final = result + result1 + result2;

  return final;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];
  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var row = +newInput[j++];
    var arr = [];
    // console.log(row);
    for (var b = 0; b < row; b++) {
      arr.push(newInput[j++].trim().split(" ").map(Number));
    }
    // console.log(arr);

    if (row == 1) {
      console.log(arr + " ");
    } else {
      var alpha = zTrnsversal(arr, row);

      console.log(alpha.trim());
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
    4
    1 2 3 4
    4 5 6 0
    7 8 9 10
    12 13 14 15
    1
5`); //write test case here
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
