function duplicateCharCount(str) {
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  var count = 0;
  var maximum = 0;

  for (key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      maximum = key;
    }
  }

  return maximum;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var n = +newInput[0];

  var data = newInput[1].trim().split(" ").map(Number);

  console.log(duplicateCharCount(data));
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  0 2 0 6 9`);
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
