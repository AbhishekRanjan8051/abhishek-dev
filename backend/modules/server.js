/*
const openfaceSandwhich = "Open face Sandwhich";

function makeSandwhich() {
  console.log(`making ${openfaceSandwhich}`);
}

module.exports = {
  makeSandwhich: makeSandwhich,
//   openfaceSandwhich: openfaceSandwhich,
};

*/


 
//email

const sendVerificationemail = (emailObj) => {
    
    console.log(`sending verification email to ${emailObj.email}`);
}
const sendWelcomeemail = (emailObj) => {
    
    console.log(`sending welcome email to ${emailObj.email}`);
}

module.exports = {
  sendVerificationemail: sendVerificationemail,
  sendWelcomeemail: sendWelcomeemail,
}