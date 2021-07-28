var phoneBook = {
  data: [
    ["Ajay", 21345],
    ["RamDas", 32146],
    ["Rohith", 23522],
    ["Nihal", 98743],
  ],

  query: function (name) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i][0] == name) {
        return this.data[i][1];
      }
    }
    return "no user found";
  },
};

console.log(phoneBook["query"]("Nihal"));

console.log(phoneBook["query"]("Mani"));
