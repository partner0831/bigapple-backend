const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

router.get("/mail", async (req, res) => {
  res.json({ asdf: "sadfsadf" });
});

router.post("/mail", async (req, res) => {
  // const { email, context } = req.body;
  const {
    first_name,
    last_name,
    email,
    address1,
    address2,
    city,
    state,
    zipcode,
    country,
  } = req.body;
  const output = `<span>First Name:-${first_name}</span><br/>
                  <span>Last Name:-${last_name}</span><br/>
                  <span>Email:-${email}</span><br/>
                  <span>Address1:-${address1}</span><br/>
                  <span>Address2:-${address2}</span><br/>
                  <span>City:-${city}</span><br/>
                  <span>State:-${state}</span><br/>
                  <span>Zipcode:-${zipcode}</span><br/>
                  <span>Country:-${country}`;

  var transport = nodemailer.createTransport(
    smtpTransport({
      service: "Gmail",
      auth: {
        user: "distinguishcreatives@gmail.com",
        pass: "wbbyyzhslxavmxhc",
      },
    })
  );

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: `${email}`, // sender address
    // to: "distinguishcreatives@gmail.com", // list of receivers
    to: "distinguishcreatives@gmail.com", // list of receivers
    subject: "Purchase NFT", // Subject line
    text: "", // plaintext body
    html: output, // html body
  };
  // send mail with defined transport object
  transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      // console.log("Message sent: " + response.message);
      res.status(200).json({ msg: "success" });
    }
  });
});

module.exports = router;
