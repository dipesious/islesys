// SNS
const express = require("express");
const errors = require("./src/errors");

// IMPORTS
const admin = require('firebase-admin');
const request = require('request-promise');

const routeSNS = express.Router();
// INASELIZE
/*
const admin = require("firebase-admin");
const serviceAccount = require("./refr-app-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://refr-app.firebaseio.com"
});

const options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};


/ *
 |--------------------------------------------------------
 | 
 | Common  Function to send FCM notifications
 |
 |--------------------------------------------------------
* /

exports.sendFCMNotification = (deviceToken,title,body) => {
  
    const payload = {
      notification: {
        title: title,
        body: body
      }
    };
   
    return fcmNotification =  admin.messaging().sendToDevice(deviceToken, payload, options)
    .then(function(response) {
     console.log("Successfully sent message:", response);    
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });

  
*/


/*
app.post("/api/XXX/:countryCode",(req, res) => { // Route for ...
    if( !req.params.countryCode || !req.body.deviceToken || !req.body.title || !req.body.message ){
        res.json({ 
            success:false, status:200, //http
            // code:errors.Forbidden, //route
            data:null, info:"Please post valid data"
        });
    }else{
      const notification_options = {
        priority: "high",
       // timeToLive: 60 * 60 * 24
      };
      const message_notification = {
          notification: {
            title: req.body.title,
            body: req.body.message
          },
        //   data: {
        //     Nick: "Mario",
        //     Room: "PortugalVSDenmark",
        //   },
        };

    const  registrationToken = req.body.deviceToken
    const message = message_notification
    const options =  notification_options
    
      admin.messaging().sendToDevice(registrationToken, message, options)
      .then( response => {
        res.json({
            success:true, status:200, 
            //code: errors.ok, 
            data:(response||null), info:"Notification sent successfully"
        });
      })
      .catch( error => {
          //console.log(error);
          res.json({ 
              success:false, status:200, //http
              //code:errors.Forbidden, //route
              data:null, info:error
          });
      });


    }
});
*/

routeSNS.post("/sendSNS/:countryCode",(req, res) => { // Route for ...
    if( !req.params.countryCode || !req.body.deviceToken || !req.body.title || !req.body.message ){
        res.json({ 
            success:false, status:200, //http
            code:errors.Forbidden, //route
            data:null, info:"Please post valid data"
        });
    }else{

      const options = {
        method: 'POST',
        uri: `https://fcm.googleapis.com/fcm/send`,
        headers: { Authorization: `key=AAAAbdABQp8:APA91bEL4-Am5zgyx56MPPzyx6c7Yo_S4UOTpDq1M3CjdXTZhStxZhnIwchKGuxILuEneFfeZk1MBWG3G4GkEATY-a_w3Onhv7FjulA8BjfwKM_zRSEjyUqNJZqUnUSzcb6o_uNyHFuB`,
        }, body: {
          to: req.body.deviceToken, // "cz0BJ6GzQtOk-umUmS0wB3:APA91bGMxlem1YS8TGRQPw1asvgQmkVETJYY6Iz3_2CphJTOTEMfvqYbXLGjGYuduSHAqTX1D0KRw2feDkL_7SQwFWAOlcXnb9zzJ7rY33b8151lxig3jkieaw5qUryl0NtZrT345cIG",
          notification: {
            title: req.body.title, Title:req.body.title, subtitle:"Refr Tech",
            body: req.body.message, bodyText: req.body.message, text: req.body.message,
            
            OrganizationId:"2", content_available: true, priority: "high", sound:"notification.mp3"
          },
          data: { priority: "high", sound:"notification.mp3", content_available: true, organization:"Refr Tech" }
        },
        json: true
      };
  
      return request(options).then(function(parsedBody) {
        res.json({
            success: true,
            status: 200, 
            data: parsedBody
        });
      }).catch(err => {
        res.json({
            success: true, status: 200, 
            code:errors.Forbidden, //route
            data:null, info:err
        });
      })
    }
});

routeSNS.get("**",(req, res) => { // Route for ...
    res.json({success:true, info:"Invalid Get Call"});
});
routeSNS.post("**",(req, res) => { // Route for ...
    res.json({success:true, info:"Invalid Post Call"});
});
routeSNS.put("**",(req, res) => { // Route for ...
    res.json({success:true, info:"Invalid Put Call"});
});
routeSNS.delete("**",(req, res) => { // Route for ...
    res.json({success:true, info:"Invalid Delete Call"});
});


module.exports = routeSNS;