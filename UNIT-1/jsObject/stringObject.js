var string = {
  // data: "FireFox",

  countVowwels: function () {
    var count = 0;

    for (var i = 0; i < this.data.length; i++) {
      if (
        this.data[i] == "a" ||
        this.data[i] == "e" ||
        this.data[i] == "i" ||
        this.data[i] == "o" ||
        this.data[i] == "u"
      ) {
        count++;
      }
    }
    return count;
  },

  reverseString: function () {
    var result = "";

    for (var i = this.data.length - 1; i >= 0; i--) {
      result += this.data[i];
    }
    return result;
  },

  changeCase: function () {
    var bigLetter = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    var smallLetter = `abcdefghijklmnopqrstuvwxyz`;

    var string = "";

    for (var i = 0; i < this.data.length; i++) {
      for (var j = 0; j < 26; j++) {
        if (this.data[i] == bigLetter[j]) {
          string += smallLetter[j];
        } else if (this.data[i] == smallLetter[j]) {
          string += bigLetter[j];
        }
      }
    }
    return string;
  },
};

string["data"] = "FireFox";
console.log(string.countVowwels());

console.log(string.reverseString());

console.log(string.changeCase());
