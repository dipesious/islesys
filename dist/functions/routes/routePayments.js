const express = require("express");
const routePayments = express.Router();

const enviroment = require("../env");
const errors = require("./src/errors");
var Razorpay = require('razorpay');
// INASELIZE
const key_id = enviroment.RAZOR_PAY_KEY_ID;
const key_secret = enviroment.RAZOR_PAY_KEY_SECRET;
const razorpay = new Razorpay({
    key_id: key_id,
    key_secret,
});

// This is your test secret API key.
const stripe = require('stripe')(enviroment.STRIPE_Secret_key);

// const YOUR_DOMAIN = enviroment.production ? enviroment.YOUR_DOMAIN_PROD : enviroment.YOUR_DOMAIN;
const YOUR_CLIENT = enviroment.production ? enviroment.YOUR_CLIENT_PROD : enviroment.YOUR_CLIENT;

const admin = require('firebase-admin');

const crypto = require('crypto')

routePayments.get('/success-stripe/:id', (req, res) => {
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

routePayments.get('/failure-stripe/:id', (req, res) => {
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

/*
routePayments.post(`/create-stripe-payment/:countryCode`, async (req, res) => {
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
        success_url: `${YOUR_DOMAIN}/api/payments/success-stripe/${req.body.id}`,
        cancel_url: `${YOUR_DOMAIN}/api/payments/failure-stripe/${req.body.id}`,
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

    }
  });
*/




/*

  routePayments.post(`/create-razorpay-payment/:countryCode`, async (req, res) => {
    if( !req.params.countryCode || !req.body.type ||
      !req.body.amount || !req.body.currency || !req.body.receipt

      // !req.params.countryCode || !req.body.type ||
      //   !req.body.amount || !req.body.currency ||
      //   !req.body.gwID || !req.body.gwSIGN || !req.body.gwORDR

      // !req.params.countryCode || 
      // !req.body.id || !req.body.by || 
      // !req.body.description ||
      // !req.body.name || !req.body.phone || !req.body.email || 
      // false
      ){
        res.json({
            success: false,
            status: 200, //http
            code: errors.Forbidden, //route
            data: null,
            info: "Please post valid data t"
        });
    }else{
      
      const lotsOfDecimal = req.body.amount;
      const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
      const razorpayAMT = twoDecimalPlaces * 100;
      //const razorpayPAID = req.body.amount_paid * 100; const razorpayDUE = req.body.amount_due * 100;

if(req.body.repeat){ 

      const options = {
          plan_id: req.body.repeatRazorpayID,
          total_count: 1,

          // amount: razorpayAMT,
          // currency: req.body.currency,
          // receipt: req.body.receipt,

          notes: {
              description: 'descriptionX'
          },
          // payment_capture: 1 //optional
      };
      try {
          const MyOrder = await razorpay.subscriptions.create(options);
          //console.error("Mankind", MyOrder)

          res.json({
              ...MyOrder,
              amount: razorpayAMT,
              currency: req.body.currency,
              //amount_paid:razorpayPAID, amount_due:razorpayDUE,
              receipt: req.body.receipt,
              order_id: MyOrder['id'],
              key: key_id,

              name: req.body.name || "Company", // To Name
              description: req.body.description || "Payment to Company",


              prefill: {
                  name: req.body.userData.name,
                  contact: req.body.userData.phone ? req.body.userData.phone : null,
                  email: req.body.userData.email ? req.body.userData.email : null
              },
              theme: { color: req.body.theme || "#000000" },


              success: true,
              status: 200,
              code: errors.ok,
              //data:{}, info:"Hello action"
          });


      } catch (error) {
          res.json({
              success: false,
              status: 200, //http
              code: errors.Forbidden, //route
              data: error,
              info: "Unable to create order"
          });
      }

      

}else{

      const options = {

          amount: razorpayAMT,
          currency: req.body.currency,
          receipt: req.body.receipt,

          notes: {
              description: 'descriptionX'
          },
          payment_capture: 1 //optional
      };
      try {
          const MyOrder = await razorpay.orders.create(options);
          //console.error("Mankind", MyOrder)

          res.json({
              ...MyOrder,
              amount: razorpayAMT,
              currency: req.body.currency,
              //amount_paid:razorpayPAID, amount_due:razorpayDUE,
              receipt: req.body.receipt,
              order_id: MyOrder['id'],
              key: key_id,

              name: req.body.name || "Company", // To Name
              description: req.body.description || "Payment to Company",


              prefill: {
                  name: req.body.userData.name,
                  contact: req.body.userData.phone ? req.body.userData.phone : null,
                  email: req.body.userData.email ? req.body.userData.email : null
              },
              theme: { color: req.body.theme || "#000000" },


              success: true,
              status: 200,
              code: errors.ok,
              //data:{}, info:"Hello action"
          });


      } catch (error) {
          res.json({
              success: false,
              status: 200, //http
              code: errors.Forbidden, //route
              data: error,
              info: "Unable to create order"
          });
      }

}



    }
  });

*/




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