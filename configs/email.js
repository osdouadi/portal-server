const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "osdouadi@gmail.com",
    pass: "thazpxbcrxlyernm",
  },
});
