function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].split(" ").map(Number);
  var arr = [];
  // var sum = 0;
  var count = 0;

  for (var i = 0; i < data.length; i++) {
    var result = 0;
    for (var j = i; j < data.length; j++) {
      result += data[j];
      arr.push(result);
    }
  }

  for (var k = 0; k < arr.length; k++) {
    if (arr[k] % 2 != 0) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "abhis") {
  runProgram(`3
1 2 3`); //write test case here
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
