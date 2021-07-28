var people = {
  mark: [
    ["Nrupul", 10],
    ["Prateek", 20],
    ["Aman", 30],
    ["Albret", 5],
    ["Yogesh", 15],
  ],

  average: function () {
    var sum = 0;

    for (var i = 0; i < this.mark.length; i++) {
      sum += this.mark[i][1];
    }

    var avrg = sum / this.mark.length;
    return avrg;
  },

  minimum: function () {
    var min = this.mark[0][1];

    for (var i = 0; i < this.mark.length; i++) {
      if (this.mark[i][1] < min) {
        min = this.mark[i][1];

        var minimumMarks = [this.mark[i][0], this.mark[i][1]];
      }
    }
    return minimumMarks;
  },

  maximum: function () {
    var max = this.mark[0][1];

    for (var i = 0; i < this.mark.length; i++) {
      if (this.mark[i][1] > max) {
        max = this.mark[i][1];

        var maximumMarks = [this.mark[i][0], this.mark[i][1]];
      }
    }
    return maximumMarks;
  },
};

console.log(people.average());

console.log(people.minimum());

console.log(people.maximum());
