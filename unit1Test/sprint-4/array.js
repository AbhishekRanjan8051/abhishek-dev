var array = {};

array["arr"] = [2, 3, 4, 5];
array["arr1"] = [2, 4, 6, 8];

// console.log(array);

array.common = function () {
  var result = "";

  for (var i = 0; i < this.arr.length; i++) {
    for (var j = 0; j < this.arr1.length; j++) {
      if (this.arr[i] == this.arr1[j]) {
        result += this.arr1[j] + " ";
      }
    }
  }
  console.log(result);
};
array.common();
