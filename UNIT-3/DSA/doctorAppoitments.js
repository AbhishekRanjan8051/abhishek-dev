function doctorAppoitments(data1, data2) {
  let count = 0;
  while (data1.length != 0) {
    let temp = data1.splice(0, 1);
    for (let i = 0; i < data2.length; i++) {
      if (data2[i] == temp) {
        data2.splice(i, 1);
        count++;
        break;
      } else {
        count++;
      }
    }
  }
  return count - 1;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var length = +newInput[0];

  let data1 = newInput[1].trim().split(" ").map(Number);

  let data2 = newInput[2].trim().split(" ").map(Number);

  let output = doctorAppoitments(data1, data2);
  console.log(output);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4
  1 2 3 4
  4 2 3 1`); //write test case here
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
