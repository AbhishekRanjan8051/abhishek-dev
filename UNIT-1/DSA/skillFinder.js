var data = {
  user: {},
  addSkill: function (name, skills) {
    if (this.user[name] == undefined) {
      this.user[name] = [skills];
    } else {
      this.user[name].push(skills);
    }
  },
  skillFinder: function (skill) {
    for (key in this.user) {
      if (typeof this.user[key] == "object") {
        for (var i = 0; i < this.user[key].length; i++) {
          if (skill == this.user[key][i]) {
            console.log(key);
          }
        }
      }
    }
  },
};

// All the Given Input
var input = `Nrupul cmd
Prateek js
Aman ds
Nrupul python
Albert js
Albert react
Aman algo
Prateek html
Nrupul sql`;
input = input.split("\n");

// Adding Skills to the object with the key and values
for (var i = 0; i < input.length; i++) {
  var names = input[i].split(" ")[0];
  var skill = input[i].split(" ")[1];
  data.addSkill(names, skill);
}

data.skillFinder("js");
console.log(data);
