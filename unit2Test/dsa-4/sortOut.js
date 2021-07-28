function sorted(data, index) {
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;

        temp = index[j];
        index[j] = index[j + 1];
        index[j + 1] = temp;
      }
    }
  }
  return index;
}

function result(data) {
  var res = "";

  for (var i = 0; i < data.length; i++) {
    res += data[i] + " ";
  }
  return res;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var data = newInput[1].trim().split(" ").map(Number);

  var index = [];

  for (var i = 0; i < data.length; i++) {
    index.push(i);
  }

  var output = sorted(data, index);

  var finalOutput = result(output);
  console.log(finalOutput);
  //   console.log(output);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  4 5 3 7 1`); //write test case here
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
