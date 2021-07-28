var data = "            Masai School           ";

var newData = data.trim().split(" ").join("");

var newInput = newData.toLocaleLowerCase();
var result = "";

for (var i = 0; i < newInput.length; i++) {
  if (i % 2 !== 0) {
    result += "@";
  } else {
    result += newInput[i];
  }
}

console.log(result);
