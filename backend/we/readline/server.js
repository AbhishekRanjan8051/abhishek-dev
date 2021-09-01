const readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("What is your Name", (name) => {
  readline1.question("what is your country", (country) => {
    readline1.question(
      "your country belong to which continent",
      (continent) => {
        console.log(`${name} is from ${country} belong in ${continent}`);

        readline1.close();
      }
    );
  });
});

readline1.on("close", function () {
  console.log("BYE BYE!");
});
