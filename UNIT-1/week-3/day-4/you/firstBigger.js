function dataChecked(data, numbers) {
  var array = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] > numbers) {
      array.push(data[i]);
    }
  }
  return array;
}

function firstBigger(array) {
  if (array.length >= 1) {
    var temp = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < temp) {
        temp = array[i];
      }
    }
    var result = temp;
  } else {
    result = "-1";
  }
  return result;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split(" ").map(Number);
  var checkCase = Number(newInput[2]);

  for (var a = 1; a <= checkCase; a++) {
    var numbers = Number(newInput[a + 2]);
    var result = dataChecked(data, numbers);
    var final = firstBigger(result);
    console.log(final);
  }
}

if (process.env.USERNAME === "abhis") {
  runProgram(`10
89 81 66 81 63 71 76 73 81
2
65
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
