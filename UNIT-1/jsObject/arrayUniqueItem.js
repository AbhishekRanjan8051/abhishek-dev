var array = {
  data: ["a", "b", "c", "d", "a", "c"],

  present: function () {
    var array1 = [];

    for (var i = 0; i < this.data.length; i++) {
      for (var j = i + 1; j < this.data.length; j++) {
        if (this.data[i] == this.data[j]) {
          array1.push(this.data[i]);
        }
      }
    }
    console.log(array1);
  },
};

array.present();
