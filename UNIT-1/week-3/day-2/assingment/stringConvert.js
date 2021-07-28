function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1];
  var n = data.length;
  var result = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < 26; j++) {
      if (lowerCase[j]==data[i]) {
        result += upperCase[j];
      } else if(upperCase[j]==data[i]) {
        result += lowerCase[j];
      }
    }
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
aBbcd`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
