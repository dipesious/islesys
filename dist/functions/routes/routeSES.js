// Email
const express = require("express");
const errors = require("./src/errors");

// IMPORTS
const nodemailer = require('nodemailer');

const routeSES = express.Router();
// INASELIZE


const transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //   user: '',
    //   pass: ''
    // }
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@getrefr.in",
      pass: "cJstkvUjqeQd"
    },
    tls: {
      ciphers: 'SSLv3'
    }
  
});

routeSES.post("/sendSES/:countryCode",(req, res) => { // Route for ...
    console.log(" I AM HIT")
    if(!req.params.countryCode || !req.body.email || !req.body.mes){
        res.json({ 
            success:false, status:200, //http
            code:errors.Forbidden, //route
            data:null, info:"Please post valid data"
        });
    }else{
        const mailOptions = {
          from: 'no-reply@getrefr.in',
          to: req.body.email,
          subject: 'Sending Email using Node.js',
          text: req.body.mes
        };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);        
    res.json({ 
        success:false, status:200, //http
        code:errors.Forbidden, //route
        data:null, info:error
    });
  } else {
    console.log('Email sent: ' + info.response);
    res.json({
        success:true, status:200, 
        code: errors.ok, 
        data:{}, info:'Email sent: ' + info.response
    });
  }
});

    }
});

routeSES.get("**",(req, res) => { // Route for ...
    res.json({success:false, info:"Invalid Get Call"});
});
routeSES.post("**",(req, res) => { // Route for ...
    res.json({success:false, info:"Invalid Post Call"});
});
routeSES.put("**",(req, res) => { // Route for ...
    res.json({success:false, info:"Invalid Put Call"});
});
routeSES.delete("**",(req, res) => { // Route for ...
    res.json({success:false, info:"Invalid Delete Call"});
});



module.exports = routeSES;