function arrayProduct(items) {
  var prod = 1;
  for (var i = 0; i < items.length; i++) {
    prod = prod * items[i];
  }
  return prod;
}

function arrayProDivide(items, prod) {
  var proDivide = [];
  for (var i = 0; i < items.length; i++) {
    proDivide.push(prod / items[i]);
  }
  return proDivide;
}

function printArray(items) {
  var output = "";
  for (var i = 0; i < items.length; i++) {
    output = output + items[i];
    if (i != items.length - 1) {
      output += " ";
    }
  }
  console.log(output);
}

function runProgram(input) {
  var newInput = input.split("\n");
  var times = Number(newInput[0]);
  for (var i = 1; i <= times; i++) {
    var numbers = newInput[i * 2].split(" ").map(Number);
    var p = arrayProduct(numbers);
    var proD = arrayProDivide(numbers, p);
    printArray(proD);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`2
5
1 2 3 4 5
3
3 2 7`); //write test case here
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
