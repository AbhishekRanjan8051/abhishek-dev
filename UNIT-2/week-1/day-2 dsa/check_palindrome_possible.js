function checkPossible(data) {
  var arr = {};
  for (var i = 0; i < data.length; i++) {
    if (arr[data[i]] == undefined) {
      arr[data[i]] = 1;
    } else {
      arr[data[i]]++;
    }
  }
  return arr;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInput[a * 2].trim();

    var obj = checkPossible(data);

    var count = 0;
    for (var key in obj) {
      if (obj[key] % 2 != 0) {
        count++;
      }
    }
    if (count > 1) {
      console.log("Not Possible!");
    } else {
      console.log("Possible!");
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`); //write test case here
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
