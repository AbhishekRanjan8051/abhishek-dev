var printMatrix = function (str, column) {
  var count = 0;
  var forPrint = "";
  for (var i = 0; i < str.length; i++) {
    count++;
    forPrint += str[i] + " ";
    if (count % column == 0) {
      forPrint += "\n";
    }
  }
  return forPrint;
};

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var row = +newInput[2 * a - 1].trim();
    
    // console.log(row);
    var data = newInput[2 * a].trim().split(" ").map(Number);
    
    
    // console.log(data);

    console.log(printMatrix(data, row));
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
  1
  1
  2
  1 2 3 4
  3
  1 2 3 4 5 6 7 8 9`); //write test case here
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
