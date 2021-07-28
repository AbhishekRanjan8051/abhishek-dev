function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].split(" ");
  var arr = data[0];
  var count = 1;
  var result = 0;

  for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 != 0) {
      if (data[i] == data[i + 1]) {
        count++;
      } else {
        result += data[i] + count;
        count = 1;
        arr = data[i];
      }
    }
    }
    
    var check = result[1]
  for (var a = 0; a < result.length; a ++) {
    if (result[a+1] > result[a + 3]) {
      console.log(result[a]);
    }
  }

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`12
1 1 1 1 2 2 2 2 2 1 1 4 3 3 3 3 3 3 3`); //write test case here
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
