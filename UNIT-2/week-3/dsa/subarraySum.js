function LongestSubarrays(arr, k) {
  var sum1 = 0;
  for (var i = 0; i < arr.length; ++i) {
    sum1 += arr[i];
  }

  if (sum1 % k != 0) {
    return 1;
  } else {
    var start = 0;

    while (start < arr.length && arr[start] % k == 0) {
      ++start;
    }

    var end = arr.length - 1;

    while (end >= 0 && arr[end] % k == 0) {
      --end;
    }

    var len = 0;
    var sum = 0;
    var count = 0;

    if (start == arr.length) {
      return -1;
    } else {
      len = Math.max(arr.length - 1 - start, end);
    }

    for (var i = 0; i < len; i++) {
      sum += arr[i];
    }

    if (sum % k != 0) {
      count++;
    }

    for (var i = len; i < arr.length; i++) {
      sum = sum + arr[i];
      sum = sum - arr[i - len];

      if (sum % k != 0) {
        count++;
      }
    }
    return count;
  }
}

function runProgram(input) {
  var newInput = input.split("\n");

  var [l, k] = newInput[0].split(" ").map(Number);

  var data = newInput[1].split(" ").map(Number);

  var finalOutput = LongestSubarrays(data, k);
  console.log(finalOutput);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 3
  2 3 4 6`); //write test case here
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
