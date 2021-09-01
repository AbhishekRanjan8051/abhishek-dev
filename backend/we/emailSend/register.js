const EventEmitter = require("events");
// console.log('EventEmitter:', EventEmitter)

const { sendverificationEmail } = require("./sendEmail");

const eventEmitter = new EventEmitter();

const register = () => {
  //some new user register on our websites
  //add listener to this user register events

    eventEmitter.on("user register", sendverificationEmail);
    
    //on=> reciveing the events

    //emit => send the events

  eventEmitter.emit("user register", {mail:"a@a.com"});
  eventEmitter.emit("user register", {mail:"a@a.com"});
  eventEmitter.emit("user register", {mail:"a@a.com"});
  eventEmitter.emit("user register", {mail:"a@a.com"});
};
register();
