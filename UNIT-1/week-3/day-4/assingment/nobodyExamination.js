function compare(data, difficulty) {
  var n = data.length;
  var count = 0;

  for (var i = 0; i < n; i++) {
    if (data[i] > difficulty) {
      count++;
    }
  }
  return count;
}

function secondMaximum(data, difficulty) {
  var n = data.length;
  var count = 0;

  for (var i = 0; i < n; i++) {
    if (data[i] > difficulty) {
      count++;
      if (count == 2) {
        var result = i - 1;
      }
    }
  }
  return result;
}

function finalCompare(data, result, count) {
  if (count < 2) {
    return data.length;
  } else {
    return result;
  }
}

function runProgram(input) {
  var newInput = input.split("\n");
  var caseTest = newInput[0].split(" ").map(Number);
  var difficulty = Number(caseTest[1]);

  var data = newInput[1].split(" ").map(Number);

  var count = compare(data, difficulty);
  var secondMaximumNo = secondMaximum(data, difficulty);
  var final = finalCompare(data, secondMaximumNo, count);

  console.log(final);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`7 6
4 3 7 6 7 2 2`); //write test case here
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
