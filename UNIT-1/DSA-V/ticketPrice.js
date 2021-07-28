//You are provided price of three different types of ticket: 1st Class, 2nd class and 3rd class.Also, you know the number of tickets of each type you need to book. Find total cost you need to pay.

// input = 1200 1400 2000
 //           5 6 2
//output = 18400




function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[0].split(" ").map(Number);
  var data1 = newInput[1].split(" ").map(Number);
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data1.length; j++) {
      if (i === j) {
        sum = sum + data[i] * data1[j];
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1200 1400 2000
5 6 2`); //write test case here
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
