// function classicProblem(x) {
//   var n = x.length;
//   var curlO = 0;
//   var curlC = 0;
//   var brackO = 0;
//   var brackC = 0;
//   var paranO = 0;
//   var paranC = 0;

//   for (var i = 0; i < n; i++) {
//     if (x[i] == "{") {
//       curlO++;
//     }
//     if (x[i] == "}") {
//       curlC++;
//     }
//     if (x[i] == "(") {
//       brackO++;
//     }
//     if (x[i] == ")") {
//       brackC++;
//     }
//     if (x[i] == "[") {
//       paranO++;
//     }
//     if (x[i] == "]") {
//       paranC++;
//     }
//   }

//   var m = Math.floor(x.length / 2);
//   if (n % 2 == 0 && paranC == paranO && brackC == brackO && curlC == curlO) {
//     console.log("balanced");
//   } else {
//     console.log("not balanced");
//   }
// }

// function runProgram(input) {
//   var data = input.split("\n");
//   var test = +data[0];
//   for (var i = 1; i <= test; i++) {
//     var arr = data[i].split("");
//     classicProblem(arr);
//   }
// }
// if (process.env.USERNAME === "abhis") {
//   runProgram(`8
//     39 27 11 4 24 32 32 1`); //write test case here
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


