function skillFinder(input) {
  var skillData = input.trim().split("\n");

  var user = {};
  for (var i = 0; i < skillData.length; i++) {
    var skills = skillData[i].trim().split(" ");
    var key = skills[0];
    var value = skills[1];
    if (user[key] == undefined) {
      user[key] = [];
      user[key].push(value);
    } else {
      user[key].push(value);
    }
  }

  for (key in user) {
    if (user[key].includes("js")) {
      console.log(key);
    }
  }
}

skillFinder(`Nrupul cmd
Prateek js
Aman ds
Nrupul python
Albert js
Albert react
Aman algo
Prateek html
Nrupul sql`);
