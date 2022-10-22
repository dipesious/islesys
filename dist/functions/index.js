const functions = require("firebase-functions");
const admin = require('firebase-admin');
// const urlBuilder = require('build-url');
// const request = require('request-promise');

const express = require('express');
// const bodyParser = require('body-parser')
const cors = require('cors');
const enviroment = require("./env");
const app = express();
app.use(cors({ origin: true }));

// Your web app's Firebase configuration
admin.initializeApp(enviroment.firebaseConfig);


// This is your test secret API key.
const stripe = require('stripe')(enviroment.STRIPE_Secret_key);


const routePayments = require('./routes/routePayments');
const routeSES = require('./routes/routeSES');
const routeSMS = require('./routes/routeSMS');
const routeSNS = require('./routes/routeSNS');

// const express = require('express');
// const app = express();
// app.use(express.static('public'));

const YOUR_DOMAIN = enviroment.production ? enviroment.YOUR_DOMAIN_PROD : enviroment.YOUR_DOMAIN;
const YOUR_CLIENT = enviroment.production ? enviroment.YOUR_CLIENT_PROD : enviroment.YOUR_CLIENT;


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

app.get('/api/success/:id', (req, res) => {
  return admin.firestore().collection('walt').doc(req.params.id).update({
    status:10
  }).then(() => {
    res.redirect(YOUR_CLIENT +'/order-status/'+ req.params.id);
  })
})

app.get('/api/failure/:id', (req, res) => {
  return admin.firestore().collection('walt').doc(req.params.id).update({
    status:-10
  }).then(() => {
    res.redirect(YOUR_CLIENT +'/order-status/'+ req.params.id);
  })
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
