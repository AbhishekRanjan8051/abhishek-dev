function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Finding the smallest number in the subarray
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    }
    //print sorted array
  return arr.join(" ");
}

function runProgram(input) {
  var newInput = input.split("\n");

  var length = +newInput[0];

  var data = newInput[1].trim().split(" ").map(Number);

  var finalOutput = selectionSort(data);
  console.log(finalOutput);
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
