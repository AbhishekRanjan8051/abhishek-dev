// function runProgram(input) {
//   var newInput = input.split("\n");
//   var data = newInput[0];
//   var data1 = newInput[1];
//   var result = "";

//   var finalResult = data.includes(data1);
//   if (finalResult == true) {
//     result += "Yes";
//   } else {
//     result += "No";
//   }
//   console.log(result);
// }
// if (process.env.USERNAME === "abhis") {
//   runProgram(`masai
// sai`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[0];
  var n = data.length;
  var data1 = newInput[1];
  var str = false;

  for (var i = 0; i < n; i++) {
    var result = "";

    for (var j = i; j < n; j++) {
      result += data[j];
      if (data1 == result) {
        str = true;
      }
    }
  }
  if (str == true) {
    console.log("Yes");
  } else {
    console.log("No");
  }

}
if (process.env.USERNAME === "abhis") {
  runProgram(`masai
sai`);
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