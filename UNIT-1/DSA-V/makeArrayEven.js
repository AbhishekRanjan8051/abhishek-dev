function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[2 * a].trim().split(" ").map(Number);
    var sum = 0;
    var result = "";

    for (var i = 0; i < data.length; i++) {
      sum += data[i];
    }
    if (sum % 2 == 0) {
      result += "YES";
    } else {
      result += "NO";
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`10
  8
  76 14 96 23 48 99 20 50
  10
  22 90 75 14 95 51 21 60 36 35
  10
  14 27 73 30 79 2 17 12 16 62
  8
  28 36 19 26 66 1 53 54
  8
  6 90 65 59 46 12 98 17
  9
  75 88 90 91 76 24 80 72 79
  8
  61 33 97 59 9 65 77 41
  7
  20 28 21 90 2 21 20
  5
  75 85 12 16 51
  6
  27 75 87 47 49 51`); //write test case here
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
