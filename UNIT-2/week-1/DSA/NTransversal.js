function nTrnsversal(data, row) {
  var result = "";

  for (var i = row - 1; i >= 0; i--) {
    result += data[i][0] + " ";
  }

  var result1 = "";

  for (var j = 1; j < row; j++) {
    result1 += data[j][j] + " ";
  }

  var result2 = "";
  for (var k = row - 2; k >= 0; k--) {
    result2 += data[k][row - 1] + " ";
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
    var alpha = nTrnsversal(arr, row);

    console.log(alpha);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  3
  1 2 3
  4 5 6
  7 8 9`); //write test case here
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
