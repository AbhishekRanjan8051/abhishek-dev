//You are provided a string S. Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.

// input = masaischool
//output = 6

function runProgram(input) {
  var data = input;
  var count = 0;

  for (var i = 0; i < data.length; i++) {
    if (
      data[i] != "a" &&
      data[i] != "e" &&
      data[i] != "i" &&
      data[i] != "o" &&
      data[i] != "u"
    ) {
      count++;
    }
  }
  var output = count.length;
  console.log(count);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`masaischool`); //write test case here
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
