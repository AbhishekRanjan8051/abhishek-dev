function indexPrime(el) {
  var result = false;
  var count = 0;

  for (var i = 0; i <= el; i++) {
    if (el % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].split(" ").map(Number);
  var sum = 0;

  for (var i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {
      var primeIndex = indexPrime(j - i);

      if (primeIndex == true) {
        var result = Math.abs(data[i] - data[j]);
        sum += result;
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6
1 2 3 5 7 12`); //write test case here
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
