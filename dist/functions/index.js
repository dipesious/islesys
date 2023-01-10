const functions = require("firebase-functions");
const admin = require('firebase-admin');
// const urlBuilder = require('build-url');
const request = require('request-promise');

const express = require('express');
// const bodyParser = require('body-parser')
const cors = require('cors');
const enviroment = require("./env");

const app = express();
app.use(cors({ origin: true }));

// const server = express();
// server.use(cors({ origin: true }));

// Your web app's Firebase configuration
admin.initializeApp(enviroment.firebaseConfig);
// adminFrycold.initializeApp(enviroment.firebaseFrycold);


// server.all('**', (req, res) => {
//   console.log('Hello Brother!', req.body)
//   const x = {
//       path:req.path || null,
//       // host:req.host || null,
//       hostURL: req.headers.host || null,
//       hostname: req.hostname || null,
//       // headers: req.headers || null,
//       // baseUrl: req.baseUrl || null,
//       originalUrl: req.originalUrl || null,
//       // body: req.body
//     }

//     return admin.firestore().collection('mails').add(x).then(() => {
//       // res.json({ 
//       //     success:true, status:200, //http
//       //     // code:errors.Forbidden, //route
//       //     data:null, info:"OK"
//       // });
//       res.json({success:true, status:200, info:x });
//     })
// })

// exports.mails = functions
//     .region('us-central1')
//     .runWith({})
//     .https
//     .onRequest(server);

// This is your test secret API key.
// const stripe = require('stripe')(enviroment.STRIPE_Secret_key);


const routeVideos = require('./routes/routeVideos');
const routeCodes = require('./routes/routeCodes');
const routePayments = require('./routes/routePayments');
const routeSES = require('./routes/routeSES');
const routeSMS = require('./routes/routeSMS');
const routeSNS = require('./routes/routeSNS');

// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = enviroment.production ? enviroment.YOUR_DOMAIN_PROD : enviroment.YOUR_DOMAIN;
const YOUR_CLIENT = enviroment.production ? enviroment.YOUR_CLIENT_PROD : enviroment.YOUR_CLIENT;


app.use('/api/videos', routeVideos);
app.use('/api/codes', routeCodes);
app.use('/api/payments', routePayments);
app.use('/api/SES', routeSES);
app.use('/api/SMS', routeSMS);
app.use('/api/SNS', routeSNS);



app.get('/', (req, res) => {
    res.send('Hello World!')
})




/*
app.post(`/api/create-checkout-session/:countryCode`, async (req, res) => {
  if(!req.params.countryCode || !req.body.id || !req.body.by){
    res.json({ 
        success:false, status:200, //http
        // code:errors.Forbidden, //route
        data:null, info:"Please post valid data"
    });
  }else{
    try{
    const session = await stripe.checkout.sessions.create({
      customer: req.body.by,
  
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1Ltfj9ENE7uabJh27NFiBsSK',
          quantity: 1,
        },
      ],

      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/api/success/${req.body.id}`,
      cancel_url: `${YOUR_DOMAIN}/api/failure/${req.body.id}`,
      automatic_tax: {enabled: false},
    });
  
      res.json({ 
          success:true, status:200, //http
          // code:errors.Forbidden, //route
          data:session.url, info:"Please post valid data"
      });
      // res.redirect(303, session.url);
    }catch(err){
      res.json({ 
          success:false, status:200, //http
          // code:errors.Forbidden, //route
          data:err, info:"Please post valid data"
      });
    }
  }
});
*/

app.post('/api/native/contact/:id', (req, res) => {
  if(!req.params.id || !req.body.name || !req.body.email || !req.body.title || !req.body.about ){
    res.json({ 
        success:true, status:200, //http
        // code:errors.Forbidden, //route
        data:null, info:"Please post valid data"
    });
  }else{ //.doc(req.params.id)
    return admin.firestore().collection('contacts').add({
      from: req.params.id,
      name: req.body.name,
      email: req.body.email,
      title: req.body.title,
      about: req.body.about,
    }).then(() => {
      res.json({ 
          success:true, status:200, //http
          // code:errors.Forbidden, //route
          data:null, info:"OK"
      });
    })
  }
})

app.post('/api/foreign-apps/contact/:id', (req, res) => {
  if(!req.params.id || !req.body.name || !req.body.email || !req.body.phone || !req.body.about ){
    res.json({ 
        success:true, status:200, //http
        // code:errors.Forbidden, //route
        data:null, info:"Please post valid data"
    });
  }else{ //.doc(req.params.id)
    return admin.firestore().collection('contacts').add({
      from: req.params.id,
      name: req.body.name,
      email: req.body.email, phone: req.body.phone,
      title:"foreign",
      about: req.body.about,
    }).then(() => {
      res.json({ 
          success:true, status:200, //http
          // code:errors.Forbidden, //route
          data:null, info:"OK"
      });
    })
  }
})



// app.listen(4242, () => console.log('Running on port 4242'));

exports.server_global = functions
    .region('us-central1')
    .runWith({})
    .https
    .onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// exports.server_global = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send(app);
// });


  function getSearch(x){
    return [x];
  }

  exports.createUsers = functions.firestore.document('users/{uid}').onCreate((snapshot, context) => {

        // Get an object with the current document value.
        // If the document does not exist, it has been deleted.
        const document = snapshot.exists ? snapshot.data() : null;
  
        const uid = context?.params?.uid;
        let user = document;
  
        // functions.logger.log("Mega: ", document, oldDocument, uid);
        if(!user || user.iCodeSet){
          return; 
        }else{

          const options = {
            method: 'POST',
            uri: `${YOUR_CLIENT}/api/codes/sendCode/IN`,
            // uri: `http://localhost:5001/islesys-79de1/us-central1/ind_serve/api/codes/sendCode/IN`,
            body: {
                type: "xUser"
            },
            json: true
        };
  
        return request(options).then(function(parsedBody) {
            if( !parsedBody || !parsedBody.data || !parsedBody.data.code ){
                return;
            }else{
                return parsedBody.data.code;
            }
        }).then(newCode => {
            if(!newCode){
                return;
            }else{
                return snapshot.ref.update({ 
                  search:getSearch("ABC"),

                  iCodeSet: true, 
                  iCode: newCode,
                })
            }
        })
        
    }
  });

/*
  exports.createWalt = functions.firestore.document('walt/{id}').onCreate((snapshot, context) => {

        // Get an object with the current document value.
        // If the document does not exist, it has been deleted.
        const document = snapshot.exists ? snapshot.data() : null;
  
        const id = context?.params?.id;
        let user = document;
  
        // functions.logger.log("Mega: ", document, oldDocument, uid);
        if(!user || user.iCodeSet){
          return; 
        }else{

          const options = {
            method: 'POST',
            uri: `${YOUR_CLIENT}/api/codes/sendCode/IN`,
            // uri: `http://localhost:5001/islesys-79de1/us-central1/ind_serve/api/codes/sendCode/IN`,
            body: {
                type: "xBill"
            },
            json: true
        };
  
        return request(options).then(function(parsedBody) {
            if( !parsedBody || !parsedBody.data || !parsedBody.data.code ){
                return;
            }else{
                return parsedBody.data.code;
            }
        }).then(newCode => {
            if(!newCode){
                return;
            }else{
                return snapshot.ref.update({ 
                    iCodeSet: true, 
                    iCode: newCode 
                })
            }
        })
        
    }
  });
  */
  exports.createWaltICONWHO = functions.firestore.document('waltICONWHO/{id}').onCreate((snapshot, context) => {

        // Get an object with the current document value.
        // If the document does not exist, it has been deleted.
        const document = snapshot.exists ? snapshot.data() : null;
  
        const id = context?.params?.id;
        let user = document;
  
        // functions.logger.log("Mega: ", document, oldDocument, uid);
        if(!user || user.iCodeSet){
          return; 
        }else{

          const options = {
            method: 'POST',
            uri: `${YOUR_CLIENT}/api/codes/sendCode/IN`,
            // uri: `http://localhost:5001/islesys-79de1/us-central1/ind_serve/api/codes/sendCode/IN`,
            body: {
                type: "xBill"
            },
            json: true
        };
  
        return request(options).then(function(parsedBody) {
            if( !parsedBody || !parsedBody.data || !parsedBody.data.code ){
                return;
            }else{
                return parsedBody.data.code;
            }
        }).then(newCode => {
            if(!newCode){
                return;
            }else{
                return snapshot.ref.update({ 
                    iCodeSet: true, 
                    iCode: newCode 
                })
            }
        })
        
    }
  });
  exports.createWaltMAPWALE = functions.firestore.document('waltMAPWALE/{id}').onCreate((snapshot, context) => {

        // Get an object with the current document value.
        // If the document does not exist, it has been deleted.
        const document = snapshot.exists ? snapshot.data() : null;
  
        const id = context?.params?.id;
        let user = document;
  
        // functions.logger.log("Mega: ", document, oldDocument, uid);
        if(!user || user.iCodeSet){
          return; 
        }else{

          const options = {
            method: 'POST',
            uri: `${YOUR_CLIENT}/api/codes/sendCode/IN`,
            // uri: `http://localhost:5001/islesys-79de1/us-central1/ind_serve/api/codes/sendCode/IN`,
            body: {
                type: "xBill"
            },
            json: true
        };
  
        return request(options).then(function(parsedBody) {
            if( !parsedBody || !parsedBody.data || !parsedBody.data.code ){
                return;
            }else{
                return parsedBody.data.code;
            }
        }).then(newCode => {
            if(!newCode){
                return;
            }else{
                return snapshot.ref.update({ 
                    iCodeSet: true, 
                    iCode: newCode 
                })
            }
        })
        
    }
  });
  exports.createWaltISLESYS = functions.firestore.document('waltISLESYS/{id}').onCreate((snapshot, context) => {

        // Get an object with the current document value.
        // If the document does not exist, it has been deleted.
        const document = snapshot.exists ? snapshot.data() : null;
  
        const id = context?.params?.id;
        let user = document;
  
        // functions.logger.log("Mega: ", document, oldDocument, uid);
        if(!user || user.iCodeSet){
          return; 
        }else{

          const options = {
            method: 'POST',
            uri: `${YOUR_CLIENT}/api/codes/sendCode/IN`,
            // uri: `http://localhost:5001/islesys-79de1/us-central1/ind_serve/api/codes/sendCode/IN`,
            body: {
                type: "xBill"
            },
            json: true
        };
  
        return request(options).then(function(parsedBody) {
            if( !parsedBody || !parsedBody.data || !parsedBody.data.code ){
                return;
            }else{
                return parsedBody.data.code;
            }
        }).then(newCode => {
            if(!newCode){
                return;
            }else{
                return snapshot.ref.update({ 
                    iCodeSet: true, 
                    iCode: newCode 
                })
            }
        })
        
    }
  });
  /*
  exports.createWaltAIMTERA = functions.firestore.document('waltAIMTERA/{id}').onCreate((snapshot, context) => {

        // Get an object with the current document value.
        // If the document does not exist, it has been deleted.
        const document = snapshot.exists ? snapshot.data() : null;
  
        const id = context?.params?.id;
        let user = document;
  
        // functions.logger.log("Mega: ", document, oldDocument, uid);
        if(!user || user.iCodeSet){
          return; 
        }else{

          const options = {
            method: 'POST',
            uri: `${YOUR_CLIENT}/api/codes/sendCode/IN`,
            // uri: `http://localhost:5001/islesys-79de1/us-central1/ind_serve/api/codes/sendCode/IN`,
            body: {
                type: "xBillAIMTERA"
            },
            json: true
        };
  
        return request(options).then(function(parsedBody) {
            if( !parsedBody || !parsedBody.data || !parsedBody.data.code ){
                return;
            }else{
                return parsedBody.data.code;
            }
        }).then(newCode => {
            if(!newCode){
                return;
            }else{
                return snapshot.ref.update({ 
                    iCodeSet: true, 
                    iCode: newCode 
                })
            }
        })
        
    }
  });
  */