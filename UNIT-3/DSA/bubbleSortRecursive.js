function bubbleSort(arr, n) {

    //edge cases
  if (n == 1) {
    return;
  } else {
    for (var i = 0; i < n - 1; i++)
      if (arr[i] > arr[i + 1]) {
        // swap arr[i], arr[i+1]
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }

    bubbleSort(arr, n - 1);
  }

  return arr.join(" ");
}

function runProgram(input) {
  var newInput = input.split("\n");

  var n = +newInput[0];

  var data = newInput[1].trim().split(" ").map(Number);

  var output = bubbleSort(data, n);
  console.log(output)
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  3 5 0 9 8`); //write test case here
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
