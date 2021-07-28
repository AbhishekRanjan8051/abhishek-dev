var findAge = {};

findAge["name"] = "Ironman";
findAge["year_of_birth"] = 1947;

(findAge.printAge = function () {
  return this.name + " " + "current age is" + " " + (2021 - this.year_of_birth);
}),
  console.log(findAge);

console.log(findAge.printAge());
