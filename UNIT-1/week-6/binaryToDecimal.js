function binaryToDecimal(data) {
  var binarynumber = 0;
  var base = 1;
  var temp = data;
  while (temp) {
    var last_digit = temp % 10;
    temp = parseInt(temp / 10);

    binarynumber += last_digit * base;
    base = base * 2;
  }
  return binarynumber;
}

var data = 10101;
var result = binaryToDecimal(data);
console.log(result);

var data = 1001001;
var result = binaryToDecimal(data);
console.log(result);
