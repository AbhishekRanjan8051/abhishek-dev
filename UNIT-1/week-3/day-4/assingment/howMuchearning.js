function countNo(items) {
  var n = items.length;
  var bigNum = items[0];
  var result = [items[0]];
  for (var i = 0; i < n; i++) {
    if (items[i + 1] > bigNum) {
      bigNum = items[i + 1];
      result.push(bigNum);
    }
  }
  return result;
}

function printResult(result, k) {
  var ans = result.length * k;
  console.log(ans);
}

function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var testCase = Number(newInput[0]);

  for (var i = 1; i <= testCase; i++) {
    var data = newInput[i * 2].split(" ").map(Number);
    var lk = newInput[i * 2 - 1].split(" ").map(Number);

    var anse = countNo(data);
    printResult(anse, lk[1]);
  }
}

if (process.env.USERNAME === "abhis") {
  runProgram(`2
6 3
8 2 20 15 90 40 50 60 
5 12
12 20 39 45 89`);
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
