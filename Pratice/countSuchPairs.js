function primeCheck(data) {
  var prime = true;
  for (var i = 2; i < data; i++) {
    if (data % i == 0) {
      prime = false;
    }
  }
  return prime && data != 1;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a * 2].trim().split(" ").map(Number);
    // console.log(data);

    var count = 0;

    for (var i = 0; i < data.length; i) {
      for (var j = i + 1; j < data.length; j++) {
        var result = data[i] + data[j];

        var output = primeCheck(result);

        if (output == true) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
3
1 2 3
5
2 2 2 2 1`); //write test case here
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
