const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  secure: true,
  auth: {
    
    user: "zahidrajagp@gamil.com",
    pass: "oeghyawkpnkedqf",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'zahidrajagp@gmail.com', // sender address
    to,
    subject, 
    text,
    html
  });

}


module.exports = {sendMail}