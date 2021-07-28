//You are provided with a sentence S, your task is to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case). (Refer to the sample test case for better understanding)

//input = A Transformation in education
//output = education in Transformation A

function runProgram(input) {
  var data = input.split(" ");
  //   console.log(data[1]);
  var result = "";

  for (var i = data.length - 1; i >= 0; i--) {
    result = result + data[i] + " ";
  }
  console.log(result);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`A Transformation in education`); //write test case here
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
