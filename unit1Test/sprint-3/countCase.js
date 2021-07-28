var data = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];
var temp = data.join(" ").split("");
// console.log(temp);
var alpha = `abcdefghijklmnopqrstuvwxyz`;

var count = 0;

for (var i = 0; i < alpha.length; i++) {
  for (var j = 0; j < temp.length; j++) {
    if (temp[j] == alpha[i]) {
      count++;
    }
  }
}
console.log(count);
