function permute(str, l, r) {
  if (l == r) document.write(str + "<br>");
  else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}

function swap(a, i, j) {
  let temp;
  let charArray = a.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function runProgram(input) {
  var data = input.split("");
}
if (process.env.USERNAME === "abhis") {
  runProgram(``); //write test case here
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
