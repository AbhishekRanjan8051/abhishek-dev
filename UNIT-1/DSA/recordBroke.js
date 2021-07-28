/*You are provided current highest score ever scored in a cricket match. You are also given runs made by Sachin(Tendulkar) in a match. Print "Broken" (without quotes)if Sachin breaks current record in that match, else print "Not Yet" (without quotes) if he could not break that record. In all other cases, print "Wao" (without quotes)

Input = 264 200
Output = Not Yet
*/

function runProgram(input) {
  var data = input.split(" ").map(Number);
  var highestScore = data[0];
  var sachinScore = data[1];

  if (sachinScore > highestScore) {
    console.log("Broken");
  } else if (sachinScore < highestScore) {
    console.log("Not Yet");
  } else {
    console.log("Wao");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`264 280`); //write test case here
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
