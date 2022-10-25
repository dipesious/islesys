const express = require("express");
const routePayments = express.Router();

const enviroment = require("./../env");

// This is your test secret API key.
const stripe = require('stripe')(enviroment.STRIPE_Secret_key);

const YOUR_DOMAIN = enviroment.production ? enviroment.YOUR_DOMAIN_PROD : enviroment.YOUR_DOMAIN;
const YOUR_CLIENT = enviroment.production ? enviroment.YOUR_CLIENT_PROD : enviroment.YOUR_CLIENT;

const admin = require('firebase-admin');


routePayments.get('/success/:id', (req, res) => {
  if(!req.params.id){
    res.json({ 
        success:false, status:200, //http
        // code:errors.Forbidden, //route
        data:err, info:"Please post valid data"
    });
  }else{

    return admin.firestore().collection('walt').doc(req.params.id).update({
      status:10
    }).then(() => {
      res.redirect(YOUR_CLIENT +'/order-status/'+ req.params.id);
    }).catch(err => {
  
      res.json({ 
          success:false, status:200, //http
          // code:errors.Forbidden, //route
          data:err, info:"Please post valid data"
      });
  
    })

  }
})

routePayments.get('/failure/:id', (req, res) => {
  if(!req.params.id){
    res.json({ 
        success:false, status:200, //http
        // code:errors.Forbidden, //route
        data:err, info:"Please post valid data"
    });
  }else{

  return admin.firestore().collection('walt').doc(req.params.id).update({
    status:-10
  }).then(() => {
    res.redirect(YOUR_CLIENT +'/order-status/'+ req.params.id);
  }).catch(err => {

    res.json({ 
        success:false, status:200, //http
        // code:errors.Forbidden, //route
        data:err, info:"Please post valid data"
    });

  })
  
  }
})


routePayments.post(`/create-payment/:countryCode`, async (req, res) => {
    if(!req.params.countryCode || 
      !req.body.id || !req.body.by || 
      !req.body.description ||
      !req.body.name || !req.body.phone || !req.body.email || !req.body.productID ||
      // !req.body.CARD || !req.body.MMYY || !req.body.CVV ||
      false
      ){
      res.json({ 
          success:false, status:200, //http
          // code:errors.Forbidden, //route
          data:null, info:"Please post valid data"
      });
    }else{
      async function getStripeUser(custID, by, name, email){
        if(!custID){
          const cust = await stripe.customers.create({
            name, email,
            description: by
          })
          return cust.id;
        }else{
          return custID;
        }
      }
      let mode = "" + 
      ( req.body.productID == 'price_1LuTMaENE7uabJh2F2h4YBiO' ? 'subscription' :'') +
      ( req.body.productID == 'price_1LuTPKENE7uabJh2rrXnRV5u' ? 'payment' :'') +
      ( req.body.productID == 'price_1LuTQrENE7uabJh2aYyTOtfT' ? 'subscription' :'') +
      "";

      try{
      const createUSER = await getStripeUser( req.body.payStripeCUST, req.body.by, req.body.name, req.body.email);

      const session = await stripe.checkout.sessions.create({
        customer: createUSER,
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: req.body.productID,
            quantity: 1,
          },
        ],
  
        mode: mode,
        success_url: `${YOUR_DOMAIN}/api/payments/success/${req.body.id}`,
        cancel_url: `${YOUR_DOMAIN}/api/payments/failure/${req.body.id}`,
        automatic_tax: {enabled: false},
      });

      let payStripeCUST = createUSER
      res.json({ 
          success:true, status:200, //http
          // code:errors.Forbidden, //route
          data:session, payStripeCUST, info:"OK"
      });
    }catch(err){
      res.json({ 
          success:false, status:200, //http
          // code:errors.Forbidden, //route
          data:err, info:"Please post valid data 1"
      });
    }

      /*
      let buildDATA = {
        custID:"",
      }
      try{
        const customer = await stripe.customers.create({
          email:req.body.email,
          name:req.body.name,
          description:req.body.description,
          // xxx:"xxx",
        });
        buildDATA.custID = customer.id;

        if(!customer.id){
            res.json({ 
                success:false, status:200, //http
                // code:errors.Forbidden, //route
                data:null, info:"Unable to get Customer ID"
            });
        }else{
          // const paymentIntent = await stripe.paymentIntents.create({
          //   customer: customer.id,
          //   setup_future_usage: 'off_session',
          //   amount: 1099,
          //   currency: 'usd',
          //   automatic_payment_methods: {
          //     enabled: true,
          //   },
          // });
          // const paymentIntentRESIVE = await stripe.paymentIntents.retrieve(
          //   paymentIntent.id
          // );

          // res.render('checkout', { client_secret: paymentIntent.client_secret });
          res.json({ 
              success:true, status:200, //http
              // code:errors.Forbidden, //route
              data:customer, info:"OK"
          });
        }
          // res.json({ 
          //     success:true, status:200, //http
          //     // code:errors.Forbidden, //route
          //     data:paymentIntent.client_secret, info:"Please post valid data"
          // });

    
        // if(!paymentIntentCREATE.id){
        //   res.json({ 
        //       success:false, status:200, //http
        //       // code:errors.Forbidden, //route
        //       data:paymentIntentCREATE, info:"Please post valid data"
        //   });
        // }else{
        //   res.json({ 
        //       success:true, status:200, //http
        //       // code:errors.Forbidden, //route
        //       data:null, info:"Please post valid data"
        //   });
        // }
      }catch(err){
        res.json({ 
            success:false, status:200, //http
            // code:errors.Forbidden, //route
            data:err, info:"Please post valid data"
        });
      }
      */
    }
  });



routePayments.get("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Get Call" });
});
routePayments.post("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Post Call" });
});
routePayments.put("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Put Call" });
});
routePayments.delete("**", (req, res) => { // Route for ...
    res.json({ success: true, info: "Invalid Delete Call" });
});

module.exports = routePayments;