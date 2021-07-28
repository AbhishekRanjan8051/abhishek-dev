//You are given prices of 4 different mobile phones and also provided with the number of each of the phones that you need to buy.You have with you 150000 units of money. Comment if it is possible to buy those phones or not.

/*input = 10000 20000 15000 5000
             2 3 4 3
    output = Not Possible
*/

function runProgram(input) {
  var newInput = input.split("\n");
  var price = newInput[0].split(" ").map(Number);
  var phone = newInput[1].split(" ").map(Number);
  var sum = 0;

  for (var i = 0; i < price.length; i++) {
    for (var j = 0; j < phone.length; j++) {
      if (i === j) {
        sum = sum + price[i] * phone[j];
      }
    }
  }
  if (sum < 150000) {
    console.log("Possible");
  } else {
    console.log("Not Possible");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`10000 20000 15000 5000
2 3 4 3`); //write test case here
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
