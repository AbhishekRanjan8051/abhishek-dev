function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function runProgram(input) {
  var data = input.split(" ").map(Number);

  var result = "";

  for (var i = 0; i < data.length; i++) {
    var arr = [];
    for (var j = i; j < data.length; j++) {
      arr.push(data[j]);
      // console.log(arr)
      if (sum(arr) == 0) {
        console.log(i, j);
      }
    }
  }
 
}
if (process.env.USERNAME === "abhis") {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`); //write test case here
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
