var data = ["apple", "windows", "ubuntu", "cola", "system"];

var result = function (el) {
  if (el.charAt(0) == "a" || el.charAt(el.length - 1) == "a") {
    return el;
  }
};

var output = data.filter(result);
console.log(output);
