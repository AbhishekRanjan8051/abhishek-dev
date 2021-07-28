function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = Number(newInput[0]);
  // console.log(newInput);
  for (var i = 1; i <= testCase; i++) {
    var data = newInput[i * 2];
    var n = data.length;
    var result = "";
    var number = "0123456789";
    var character = "abcdefghijklmnopqrstuvwxyz";
    var lengthN = number.length;
    var lengthC = character.length;
    var num = 0;
    var chart = 0;

    for (var j = 0; j < n; j++) {
      for (var k = 0; k < lengthN; k++) {
        if (number[k] == data[j]) {
          num++;
        }
      }
      for (var l = 0; l < lengthC; l++) {
        if (character[l] == data[j]) {
          chart++;
        }
      }
    }
    if (num > 0 && chart > 0) {
      console.log("Alphanumbric");
    } else if (chart > 0) {
      console.log("chracter");
    } else {
      console.log("number");
    }
  }
}

if (process.env.USERNAME === "abhis") {
  runProgram(`3
5
ab2cd
5
acfgh
3
123`); //write test case here
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
