function runProgram(input) {
  var grade = input;

  switch (grade) {
    case "A":
      console.log("EXcellent");
      break;
    case "B":
      console.log("Very Good");
      break;
    case "C":
      console.log("Good");
      break;
    case "D":
      console.log("Needs a lot of Improvement");
      break;
    case "F":
      console.log("Failed");
      break;
    default:
      console.log("Please fill correct grade");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`F`); // put test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
