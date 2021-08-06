function length_recurssion(data) {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    count++;
  }
  return count;
}

function runProgram(input) {
  var newInput = input;

  var data = newInput.split("");
  // console.log('data:', data)

  var output = length_recurssion(data);
  console.log(output);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`masaischool`); //write test case here
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
