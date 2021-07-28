function runProgram(input) {
  var newInput = input.split("\n");
  var data = Number(newInput[0]);
  var students = Number(newInput[1]);
  var result = "";

  var dairy = Math.ceil(data / 5);
  var ecliars = Math.ceil(data / 1);
  var shorts = Math.ceil(data / 2);
  //   console.log(dairy);
  //   console.log(ecliars);
  //     console.log(shorts);

  if (dairy >= students) {
    result = "Dairy Milk";
  } else if (shorts >= students) {
    result = "Shorts";
  } else if (ecliars >= students) {
    result = "Ecliars";
  } else {
    result = "Not Possible";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`40
15`); //write test case here
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
