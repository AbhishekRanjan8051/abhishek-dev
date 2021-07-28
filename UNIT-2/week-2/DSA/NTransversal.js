function nTransversals(data, row) {
  var firstColumn = "";
  for (var i = 0; i < row; i++) {
    firstColumn += data[i][0] + " ";
  }

  var diagonal = "";

  for (var j = 1; j < row; j++) {
    for (var k = 1; k < row; k++) {
      if (j + k == row - 1) {
        diagonal += data[k][j] + " ";
      }
    }
  }

  var secondColumn = "";

  for (var l = 0; l < row; l++) {
    secondColumn += data[l][data.length - 1] + " ";
  }

  var final = firstColumn + diagonal + secondColumn;

  return final;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var row = +newInput[j++];
    var data = [];
    // console.log(row);
    for (var b = 0; b < row; b++) {
      data.push(newInput[j++].trim().split(" ").map(Number));
    }
    // console.log(data);
    if (row == 1) {
      console.log(data);
    } else {
      var output = nTransversals(data, row);

      console.log(output);
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
5
1 2 3 5 2
4 5 6 8 9
7 8 9 7 7
1 2 3 4 3
1 5 9 8 2
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
