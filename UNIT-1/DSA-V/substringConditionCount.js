//Given a string S, you need to find the count of all contiguous substrings starting and ending with same character.

//Input = abcab
//Output = 7

function runProgram(input) {
  var data = input;
  var n = data.length;
  var count = 0;
  //   console.log(n);

  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      if (data[i] == data[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`abcjab`); //write test case here
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
