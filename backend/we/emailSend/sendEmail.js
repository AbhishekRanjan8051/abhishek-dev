const sendVerificationEmail = (emailObject) => {
  console.log(`sending mail to ${emailObject.mail}`);
};

module.exports = {
  sendverificationEmail: sendVerificationEmail,
};
