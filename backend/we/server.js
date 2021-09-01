const EventEmitter = require("events");
// console.log('EventEmitter:', EventEmitter)

const eventEmitter = new EventEmitter();
// console.log("eventEmitter:", eventEmitter);

eventEmitter.on("taking class", ({ name }) => {
  console.log(`listener ${name}`);
});
eventEmitter.on("taking class", ({ last }) => {
  console.log(`listener ${last}`);
});

eventEmitter.emit("taking class", { name: "Abhishek", last: "ranjan" });

