function winnerFind(str) {
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
  var data = [];

  for (var a = 1; a <= n; a++) {
    data.push(newInput[a]);
  }
  var final = winnerFind(data);
  console.log(final);

  //   console.log(duplicateCharCount(data));
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
A
ABA
ABA
A
A`);
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
