function runProgram(input) {
  var newInput = input.split("\n");

  var length = +newInput[0];

  var arr = [];

  for (var i = 1; i <= length; i++) {
    arr.push(newInput[i]);
    var str = arr.sort();
    var obj = {};
    for (var i = 0; i < str.length; i++) {
      if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
      } else {
        var result = obj[str[i]];
        obj[str[i]] = result + 1;
      }
    }
  }
  //   console.log(str);
  for (key in obj) {
    var final = key + " " + obj[key];
    console.log(final);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
masai
school
masai`); //write test case here
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
