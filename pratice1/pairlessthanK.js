function PairlesthanK(arr, k) {
    arr.sort(function (a, b) {
      return a - b;
    });
  
    var start = 0;
    var last = arr.length - 1;
    var greaterThan = -1;
    var sum = 0;
  
    while (start < last) {
      sum = arr[start] + arr[last];
      if (sum < k) {
        greaterThan = Math.max(sum, greaterThan);
        start++;
      } else {
        last--;
      }
    }
    return greaterThan;
  }
  
  function runProgram(input) {
    var newInput = input.split("\n");
  
    var testCase = +newInput[0];
  
    for (let a = 1; a <= testCase; a++) {
      let k = +newInput[3 * a].trim();
  
        let data = newInput[3 * a - 1].trim().split(" ").map(Number);
        
        let output = PairlesthanK(data, k);
        console.log(output)
  
    }
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
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