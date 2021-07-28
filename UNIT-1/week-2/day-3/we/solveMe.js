var i = 50;
var count = 0;

while (i <= 150) {
  if (i % 13 == 0) {
    count++;
    if (count == 1) {
      console.log(i);
    } else if (count == 3) {
      console.log(i);

      break;
    }
  }

  i++;
}

var a = 50;
var count = 0;
while (a <= 150) {
  if (a % 13 == 0) {
    count++;
    if (count == 1 || count == 3 || count == 5) {
      console.log(a);
    }
  }
  a++;
}
