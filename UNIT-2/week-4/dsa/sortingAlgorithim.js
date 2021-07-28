function bubbleSort(arr,k) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j]%k > arr[j + 1]%k) {
          //swapping the element
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    // Print the sorted
  
    return arr.join(" ");
  }
  
  function runProgram(input) {
    var newInput = input.split("\n");
  
      var [l, k] = newInput[0].split(" ").map(Number);
  
    var data = newInput[1].trim().split(" ").map(Number);
  
    var finalOutput = bubbleSort(data,k);
    console.log(finalOutput);
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`5 6
    12 18 17 65 46`); //write test case here
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
  