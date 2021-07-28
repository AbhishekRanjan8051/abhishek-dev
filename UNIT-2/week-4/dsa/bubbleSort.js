function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {

      //ascending order sorting
      if (arr[j] > arr[j + 1]) {
        //swapping the element
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

      //decending order sorting
      // if (arr[j] < arr[j + 1]) {
      //   //swapping the element
      //   var temp = arr[j];
      //   arr[j] = arr[j + 1];
      //   arr[j + 1] = temp;
      // }
    }
  }
        // Print the sorted

  return arr.join(" ");
}

function runProgram(input) {
  var newInput = input.split("\n");

  var length = +newInput[0];

  var data = newInput[1].trim().split(" ").map(Number);

  var finalOutput = bubbleSort(data);
  console.log(finalOutput);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`5
  -3 5 0 9 -8`); //write test case here
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
