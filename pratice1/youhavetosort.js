function BubbleSort(data, indexes) {
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;

        temp = indexes[j];
        indexes[j] = indexes[j + 1];
        indexes[j + 1] = temp;
      }
    }
  }
  return indexes.join(" ");
}

function runProgram(input) {
  var input = input.split("\n");

  var data = input[1].split(" ").map(Number);

  let index = [];
  for (var i = 0; i < data.length; i++) {
    index.push(i);
  }

  var output = BubbleSort(data, index);
  console.log(output);
}

if (process.env.USERNAME === "abhis") {
  runProgram(`5
  4 5 3 7 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGlet", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
