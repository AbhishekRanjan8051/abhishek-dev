var data = "Early Monday     morning   MUSIC";

var newData = data.split(" ");

var newInput = newData
  .filter(function (el) {
    return el !== "";
  })
  .map(function (el) {
    // console.log(el.toLowerCase());
    return el.toLowerCase();
  });

function snakeCase(str) {
  var result = str[0];

  for (var i = 1; i < str.length; i++) {
    result += "_" + str[i];
  }
  return result;
}

function hypenCase(str) {
  var result = str[0];

  for (var i = 1; i < str.length; i++) {
    result += "-" + str[i];
  }
  return result;
}

function camelCase(str) {
  var result = str[0];

  for (var i = 1; i < str.length; i++) {
    var firstLetter = str[i];

    var changeCase = firstLetter[0].toUpperCase();
    changeCase += str[i].slice(0);

    result += changeCase;
  }
  return result;
}
// console.log(newData);
console.log(snakeCase(newInput));
console.log(hypenCase(newInput));
console.log(camelCase(newInput));
