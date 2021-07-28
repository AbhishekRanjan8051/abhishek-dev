function normal(data) {
  var result = "";

  for (var i = 0; i < data.length; i++) {
    result += data[i] + " ";
  }
  return result;
}

function reverse(data) {
  var result = "";
  for (var i = data.length - 1; i >= 0; i--) {
    result += data[i] + " ";
  }
  return result;
}

function firstCondition(data, row, col) {
  var output = "";

  for (var i = 0; i < row; i++) {
    if (i % 2 == 0) {
      output += normal(data[i]);
    } else {
      output += reverse(data[i]);
    }
  }
  return output;
}

function secondCondition(data, row, col) {
  var output = "";
  for (var i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      output += reverse(data[i]);
    } else {
      output += normal(data[i]);
    }
  }
  return output;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var [row, col, q] = newInput[j++].trim().split(" ").map(Number);
    //   console.log(row, col,q)
    var arr = [];
    for (var i = 0; i < row; i++) {
      arr.push(newInput[j++].trim().split(" ").map(Number));
    }
    //   console.log(arr);
    if (q == 1) {
      console.log(firstCondition(arr, row, col));
    } else if (q == 2) {
      console.log(secondCondition(arr, row, col));
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9
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
