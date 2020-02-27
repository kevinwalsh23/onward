
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_HsxkyXZ7QRUOZEqVUxGDr4gX00STdINE1Y');
const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
// import * as config from './pricing.json';
console.log(functions.config());
// const gmailEmail = functions.config().gmail.email;
const gmailEmail = 'kevin@recomphealth.com'
// const gmailPassword = functions.config().gmail.password;
const gmailPassword = "vuemdyjixfmvtkww"
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = 'Onward Delivery';

admin.initializeApp();
const database = admin.database().ref('/orders');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.internalConfirmation = functions.https.onRequest( async (req, res) => {

  // [END onCreateTrigger]
    // [START eventAttributes]
    console.log(req.body)
    // await setTimeout(console.log('hello'), 1000);
    const email = req.body.email; // The email of the user.
    const displayName = req.body.displayName;
    const orderinfo = req.body.orderinfo // The display name of the user.
    // [END eventAttributes]
    const mailOptions = {
      from: `${APP_NAME} <noreply@firebase.com>`,
      to: email,
    };
    mailOptions.subject = `New ${APP_NAME} Order!`;
    mailOptions.text = `Hey ${displayName || ''}! \r\n\r\n New Order. \r\n\r\nOrder Details: \r\n\r\n ${orderinfo || ''}`;
    await mailTransport.sendMail(mailOptions);
    console.log('New welcome email sent to:', email);
    return cors(req, res, () => {
      res.send("Success email!");    
    });
    // return sendWelcomeEmail(email, displayName);
  });
  
// Sends a welcome email to the given user.
// async function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to ${APP_NAME}!`;
//   mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
//   await mailTransport.sendMail(mailOptions);
//   console.log('New welcome email sent to:', email);
//   return null;
// }

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.stripePayment = functions.https.onRequest( async (req, res) => { 
   
  //  console.log(price);
  //  while (req.body.price === undefined) {
  //    console.log('WTF');
  //  }
  let x = 'false';
  async function bod(){ 
    // setTimeout(console.log('delay'), 1000);
  //   setTimeout( x = () => {
  //     console.log('delay');
  // }, 1000);
    let { price } = req.body;   
    if(price){
        //variable exists, do what you want
        console.log(price);
        const paymentIntent = await stripe.paymentIntents.create({
          amount: price, //req.body.price,
          currency: 'usd'
        })
        x === 'true';        
        return(paymentIntent);
    }
    else{
        // console.log(req.headers.date + 'hello');
        // await bod();
        // setTimeout(bod, 250);
        console.log('helloworld');
      //   setTimeout( x = () => {
      //     bod();
      // }, 500);
    }
    return('wtf');
}
  //  bod = () => {
  //    if (req.body.price !== undefined) {
  //      console.log('hello world')
  //      return('done')
  //    }
  //    else {
  //     setTimeout(bod(), 1000);
  //    }
  //    console.log(req.body.price)
  //    return ('done');
  //  }
  const paymentIntent = await bod();
  console.log(paymentIntent);
  
  

    
  // const { items, currency } = req.body;
  // console.log(price);
  return cors(req, res, () => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      clientSecret: paymentIntent.client_secret,
      bodystuff: req.body.price
      });    
    })
  })
  
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 100,
//     currency: 'usd'
//   });

//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//     clientSecret: paymentIntent.client_secret
//   });
//  });


exports.addOrder = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not Allowed'
            })
        }
        console.log(req.body);

        const item = req.body;

        // console.log(database.find().Count());
        database.push({ item });
        
        let items = [];
        console.warn(snapshot);

        return database.limitToFirst(1).on('value', (snapshot) => {
            snapshot.forEach((item) => {
              items.push({
                id: item.key,
                items: item.val().item
              });
            });
            
            res.status(200).json(items)
          }, (error) => {
            res.status(error.code).json({
              message: `Something went wrong. ${error.message}`
            })
          })
        })
      })