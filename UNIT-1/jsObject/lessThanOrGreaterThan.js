var array = {
  data: [1, 2, 6, 7, 3, 4, 9, 0],

  lessThan: function (number) {
    var minimum = [];

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i] < number) {
        minimum.push(this.data[i]);
      }
    }
    return minimum;
  },

  greaterThan: function (number) {
    var maximum = [];

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i] > number) {
        maximum.push(this.data[i]);
      }
    }
    return maximum;
  },
};

var lesser = array.lessThan(4);
console.log(lesser);

var greater = array.greaterThan(6);
console.log(greater);
