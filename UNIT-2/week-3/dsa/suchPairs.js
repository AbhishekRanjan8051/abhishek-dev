function SuchPairReturns(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var first = 0;
  var last = arr.length - 1;
  var temp = 0;
  while (last > first) {
    if (arr[first] + arr[last] > k) {
      last -= 1;
    } else if (arr[first] + arr[last] < k) {
      first += 1;
    } else {
      temp = 1;
      break;
    }
  }

  if (temp == 1) {
    return 1;
  } else {
    return -1;
  }
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var i = 1; i <= testCase; i++) {
    var [n, k] = newInput[2 * i - 1].trim().split(" ").map(Number);

    var data = newInput[2 * i].trim().split(" ").map(Number);

    var finalOutput = SuchPairReturns(data, k);
    console.log(finalOutput);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
  5 2
  3 4 0 2 7`); //write test case here
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
