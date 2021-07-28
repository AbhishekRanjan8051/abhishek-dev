function findCount(data) {
  var count = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 != 0) {
      count++;
    }
  }
  return count;
}

function runProgram(input) {
  var newInpput = input.split("\n");
  var testCase = +newInpput[0];

  for (var a = 1; a <= testCase; a++) {
    var data = newInpput[2 * a].split(" ").map(Number);

    var result = findCount(data);

    if (result % 2 != 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    // console.log(result);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
1
1
2
1 101
2
1 200`); //write test case here
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
