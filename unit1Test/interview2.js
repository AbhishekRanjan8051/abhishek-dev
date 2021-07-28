function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 0; a < testCase; a++) {
    var data = newInput[3 * a + 2].trim().split("");

    var k = newInput[3 * a + 3].trim();
    // console.log(k);

    var count = 0;

    for (var i = 0; i < data.length; i++) {
      var result = "";

      for (var j = i; j < data.length; j++) {
        result += data[j];
        // console.log(result);

        if (result[0] == k) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
    5
    abhis
    a
    4
    ranj
    r`); //write test case here
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
