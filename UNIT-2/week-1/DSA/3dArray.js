function runProgram(input) {
  var newInput = input.split("\n");

  var [layer, row, col] = newInput[0].trim().split(" ").map(Number);
  //   console.log(layer, row, col);

  var data = newInput[1].trim().split(" ").map(Number);
  //   console.log(data);

  var count = 0;
  var result = "";

  for (var i = 0; i < data.length; i++) {
    count++;
    // console.log(count);

    result += data[i] + " ";
    if (count % col == 0) {
      result += "\n";
    }
    }

  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2 2 2
  1 2 3 4 5 6 5 8`); //write test case here
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
