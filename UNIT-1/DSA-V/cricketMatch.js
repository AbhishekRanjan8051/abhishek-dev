/*You are given 3 parameters of two different cricket teams in World Cup Final.

First parameter  :  Score

Second parameter :  Score in super over

Third parameter  :  Total number of fours scored in the inning.

If first parameter of any one team is greater than other then that team wins.

If first parameter of both the teams are same, then the team whose second parameter is greater wins the match.

In case the second parameter is also same, then the team that has higher value of third parameter wins the game.

   Input = 241 15 21
           241 15 26

   Output = England
   */

function runProgram(input) {
  var newInput = input.split("\n");
  var newZealand = newInput[0].split(" ").map(Number);
  var england = newInput[1].split(" ").map(Number);

  if (newZealand[0] == england[0]) {
    if ((newZealand[1] = england[1])) {
      if (newZealand[2] > england[2]) {
        console.log("New Zealand");
      } else {
        console.log("England");
      }
    } else if (newZealand[1] > england[1]) {
      console.log("New Zealand");
    } else {
      console.log("England");
    }
  } else if (newZealand[0] > england[0]) {
    console.log("New Zealand");
  } else {
    console.log("England");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`241 15 21
241 15 26`); //write test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
