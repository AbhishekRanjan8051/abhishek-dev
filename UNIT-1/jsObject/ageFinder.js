var people = [
  { name: "Nrupul", age: 32 },
  { name: "Prateek", age: 30 },
  { name: "Aman", age: 26 },
  { name: "Albert", age: 28 },
  { name: "Yogesh", age: 44 },
  { name: "Ankur", age: 34 },
  { name: "Siddarth", age: 22 },
];

var result = people.filter(function (items) {
  return items.age > 30;
});

for (var i = 0; i < result.length; i++) {
  console.log(result[i].name);
}
// console.log(result);
