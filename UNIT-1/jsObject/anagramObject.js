var data = {};

data["input1"] = "hello";
data["input2"] = "helloo";
(data.anagram = function (item1, item2) {
  var sort = item1.split("").sort().join("");
  var sort1 = item2.split("").sort().join("");

  if (sort == sort1) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}),
  console.log(data);
data.anagram("listen", "silent");

data.anagram("here", "heir");

data.anagram("wind", "dwine");
