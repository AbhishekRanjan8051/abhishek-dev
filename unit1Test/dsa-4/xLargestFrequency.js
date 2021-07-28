function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var n = Number(newInput[j]);
    // console.log(n);

    var matrix = newInput.slice(j + 1, n + j + 1).map(function (x) {
      var output = x.trim().split(" ").map(Number);
      return output;
    });

    j = j + n + 1;

    var arr = [];
    for (var i = 0; i < n; i++) {
      for (var k = 0; k < n; k++) {
        if (i == k) {
          arr.push(matrix[i][k]);
        } else if (i + k == n - 1) {
          arr.push(matrix[i][k]);
        }
      }
    }
    var final = function (a, b) {
      return a - b;
    };

    var newMatrix = arr.sort(final);

    // console.log(newMatrix);

    var result = [];
    var temp = newMatrix[0];

    var count = 1;

    for (var c = 1; c < newMatrix.length; c++) {
      if (newMatrix[c] == temp) {
        count++;
      } else {
        result.push(count);

        count = 1;

        temp = newMatrix[c];
      }
    }
    result.push(count);

    console.log(result[result.length - 1]);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  2
  1 4
  3 4 `); //write test case here
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
