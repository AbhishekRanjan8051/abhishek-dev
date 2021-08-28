/*


// const path = require("path");
// console.log(path.dirname(__filename));

// const axios = require("axios");
// console.log(axios)

const sandwhich = require("./server");
sandwhich.makeSandwhich();
// console.log(sandwhich.openfaceSandwhich);


*/

const EventEmitter = require("events");

const { sendVerificationemail, sendWelcomeemail } = require("./server");

const eventEmitter = new EventEmitter();

// eventEmitter.on("taking leacture", (obj) => {
//   console.log(`welcome ${obj.name}`);
// });
// eventEmitter.on("taking leacture", () => {
//   console.log("Listener2");
// });

// eventEmitter.emit("taking leacture", { name: "Abhishek" });


//email

const register = () => {
  eventEmitter.on("register", sendVerificationemail); 
  eventEmitter.on("register", sendWelcomeemail);

  eventEmitter.emit("register", { email: "abhishek@gmail.com" });
  eventEmitter.emit("register", { email: "abhishek@gmail.com" });
};
register();
