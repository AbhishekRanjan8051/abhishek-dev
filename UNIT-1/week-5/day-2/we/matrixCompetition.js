function arraySum(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      sum += data[i][j];
    }
  }
  return sum;
}

function lines2array(row) {
  return row.split(" ").map(Number);
}

function runProgram(input) {
  var newInput = input.split("\n");
  var arr1_rc = newInput[0].split(" ").map(Number);
  var r1 = arr1_rc[0];
  var arr2_rc = newInput[r1 + 1].split(" ").map(Number);
  var r2 = arr2_rc[0];

  var arr1_lines = newInput.slice(1, r1 + 1);
  var arr2_lines = newInput.slice(r1 + 2);

  // console.log(arr1_lines);

  var data1 = arr1_lines.map(lines2array);
  var data2 = arr2_lines.map(lines2array);

  var sum1 = arraySum(data1);
  var sum2 = arraySum(data2);

  if (sum1 > sum2) {
    console.log(sum1);
  } else {
    console.log(sum2);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8`); //write test case here
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
