function transversal(data) {
  var result = "";
  for (var i = data.length - 1; i >= 0; i--) {
    result += data[i][0] + " ";
  }

  var result1 = "";
  for (var j = 1; j < data.length; j++) {
    result1 += data[0][j] + " ";
  }

  var result2 = "";
  for (var k = 1; k < data.length; k++) {
    result2 += data[k][data.length - 1] + " ";
  }

  var result3 = "";
  for (var a = data.length - 2; a >0; a--) {
    result3 += data[data.length-1][a] + " ";
  }

  var final = result + result1 + result2 + result3;
  return final;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  var j = 1;
  for (var a = 1; a <= testCase; a++) {
    var n = +newInput[j++].trim();
    //   console.log(n)
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(newInput[j++].trim().split(" ").map(Number));
    }
    // console.log(arr);
    var output = transversal(arr);
    console.log(output);
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
