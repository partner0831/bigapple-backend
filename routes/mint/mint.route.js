const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

router.post("/mail", async (req, res) => {
  const { email, context } = req.body;

  const output = `${email}-${context}`;

  var transport = nodemailer.createTransport(
    smtpTransport({
      service: "Gmail",
      auth: {
        user: "tokenbigapple@gmail.com",
        pass: "iumbeijuvwzrlefi",
      },
    })
  );

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: `${email}`, // sender address
    to: "tokenbigapple@gmail.com", // list of receivers
    subject: "BigApple Token Support", // Subject line
    text: "", // plaintext body
    html: output, // html body
  };
  console.log(email, context);
  // send mail with defined transport object
  transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      // console.log("Message sent: " + response.message);
      res.status(200).json({ msg: "success" });
    }
  });
  console.log(email, context);
});

module.exports = router;
