var data = ["apple", "windows", "ubuntu", "cola", "system"];

var array = data.map(function (el, index) {
  if (index % 2 == 0) {
    console.log(el);
  }
});
