//You are given an array of size N. You have to find the count of all the subarrays which have exactly K even numbers in them.

/*input = 3 1
1 2 3 
output = 4 
*/

function checkEven(data) {
  var count = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var first = newInput[0].split(" ").map(Number);

  var K = Number(first[1]);
  // console.log(K);
  var data = newInput[1].split(" ").map(Number);
  var sum = 0;

  for (var i = 0; i < data.length; i++) {
    var result = [];
    for (var j = i; j < data.length; j++) {
      result.push(data[j]);
      // console.log(result);

      var check = checkEven(result);
      if (check == 1) {
        sum += check;
        // console.log(check);
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3 1
1 2 3 4`); //write test case here
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
