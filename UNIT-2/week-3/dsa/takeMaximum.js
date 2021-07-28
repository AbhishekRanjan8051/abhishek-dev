function maximum(data, k) {
  var sum = 0;
  for (var i = 0; i < k; i++) {
    sum += data[i];
  }

  var result = sum;
  for (var i = k; i < data.length; i++) {
    sum += data[i] - data[i - k];
    result = Math.max(sum,result);
  }
  return result;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var lk = newInput[0].split(" ").map(Number);
  var k = lk[1];
  var data = newInput[1].trim().split(" ").map(Number);
  // console.log(data)
  var output = maximum(data, k);
  console.log(output);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`10 3
  -1 -1 -2 1 -2 4 1 9 3 9`); //write test case here
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
