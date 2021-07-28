/*An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

Given 2 phrases, write a program that detects if both are anagrams of each other.

If both are anagrams, print "True"

Else print "False"

Input = anagram
        nag a ram
 Output = True
 */

function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[0].split(" ").join("");
  var dataSplit = data.split("");
  var firstTest = dataSplit.sort();
  console.log(firstTest);

  var anagram = newInput[1].split(" ").join("");
  var data1 = anagram.split("");
  var secondTest = data1.sort();
  console.log(secondTest);

  // var result = "";
  var isAnagram = true;

  if (firstTest.length != secondTest.length) {
    isAnagram = false;
  } else {
    for (var i = 0; i < firstTest.length; i++) {
      if (firstTest[i] != secondTest[i]) {
        isAnagram = false;
        break;
      }
    }
  }
  if (isAnagram) {
    console.log("True");
  } else {
    console.log("False");
  }
}

if (process.env.USERNAME === "abhis") {
  runProgram(`sachin tendulkar is sachin tendulkar
si sachin hsacin tendulkar tedulkad`); //write test case here
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
