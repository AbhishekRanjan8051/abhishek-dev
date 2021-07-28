function diamondTransversal(data, row) {
  var middle = Math.floor(row / 2);

  var startRow = 0;
  var endRow = row - 1;
  var startCol = 0;
  var endCol = row - 1;
  var endCol2 = row - 1;

  var result = "";

  for (var i = middle; i >= startCol; i--) {
    result += data[i][endCol] + " ";
    endCol--;
  }

  for (var i = middle - 1; i >= 0; i--) {
    result += data[startRow + 1][i] + " ";
    startRow++;
  }

  for (var i = middle + 1; i <= endRow; i++) {
    result += data[i][startCol + 1] + " ";
    startCol++;
  }

  for (var i = middle + 1; i <= endCol2 - 1; i++) {
    result += data[endRow + 1][i] + " ";
    endRow--;
  }
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var row = +newInput[j++];
    var data = [];
    for (var i = 0; i < row; i++) {
      data.push(newInput[j++].trim().split(" ").map(Number));
    }
    // console.log(data);
    var final = diamondTransversal(data, row);
    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
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
