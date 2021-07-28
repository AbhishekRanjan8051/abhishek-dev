function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a].split(" ").map(Number);
    // console.log(data);

    var count = 0;
    var sum = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i] % 2 == 0) {
        count++;

        sum += data[i];
      }
    }
    // console.log(sum, count);
    var averageEvenNumber = Math.floor(sum / count);
    console.log(averageEvenNumber);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
3
1 2 3
5
2 2 2 10 1`); //write test case here
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
