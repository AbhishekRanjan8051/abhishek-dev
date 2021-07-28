function findSumIdx(arr, k) {
  var temp = false;
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == k) {
        result += i + " " + j;
        temp = true;
      }
    }
    if (temp == true) {
      break;
    }
  }
  if (temp == false) {
    result += "-1" + " " + "-1";
    }
    return result;
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var a = 1; a <= testCase; a++) {
    var [n, b] = newInput[2 * a - 1].split(" ").map(Number);
    // console.log(n, b);
    var data = newInput[2 * a].trim().split(" ").map(Number);
    // console.log(data);

    console.log(findSumIdx(data, b));
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`); //write test case here
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
