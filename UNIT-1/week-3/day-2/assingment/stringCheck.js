function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1];
  var n = data.length;
  var result = "";
  // var char = false;
  // var num = false;
  var number = "0123456789";
  var character = "abcdefghijklmnopqrstuvwxyz";
  var lengthN = number.length;
  var lengthC = character.length;
  var num = 0;
  var cha = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < lengthN; j++) {
      if (number[j] == data[i]) {
        num++;
      }
    }
    for (var k = 0; k < lengthC; k++) {
      if (character[k] == data[i]) {
        cha++;
      }
    }
  }
  if (num > 0 && cha > 0) {
    result += "alphanumeric";
  } else if (num > 0) {
    result += "numbers";
  } else {
    result += "chars";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
ab5dr`);
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
