function lessThanK(arr, k) {
  var sum = "";

  var data = data.sort(function);
  let i = 0;
  let j = data.length - 1;

  while (i < data.length) {
    if (data[i] + data[j] < k) {
      sum += data[i] + data[j];
      if (sum > k) {
        j--;
      } else {
        i++;
      }
    }
  }
  return sum;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var k = newInput[3 * a].trim().split(" ").map(Number);
    // console.log(k)

    var data = newInput[3 * a - 1].trim().split(" ").map(Number);
    // console.log(data)

    var output = lessThanK(data, k);
    console.log(output);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15
  5
  1 2 3 4 5
  7`); //write test case here
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
