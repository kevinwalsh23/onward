
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_HsxkyXZ7QRUOZEqVUxGDr4gX00STdINE1Y');
const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
// import * as config from './pricing.json';
console.log(functions.config());
// const gmailEmail = functions.config().gmail.email;
const gmailEmail = 'orderconfirmation@onwarddelivery.com';
// const gmailEmail = 'kevin@recomphealth.com';
// const gmailPassword = functions.config().gmail.password;
const gmailPassword = "Onward4040!";
// const gmailPassword = "vuemdyjixfmvtkww";g7y6-2thy.accessdomain.com
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

const mailTransport = nodemailer.createTransport({
  host: "g7y6-2thy.accessdomain.com",
    port: 465,
    secure: true, // true for 465, false for other ports
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
   cors(req, res, async () => {
  // [END onCreateTrigger]
    // [START eventAttributes]
    console.log(req.body)
    // await setTimeout(console.log('hello'), 1000);
    const email = req.body.email; // The email of the user.
    const displayName = req.body.displayName;
    const orderinfo = req.body.orderinfo // The display name of the user.

    const customer_email = req.body.orderinfo.customerinfo.email // The display name of the user.
    const customer_name = req.body.orderinfo.customerinfo.name
    const order_id = req.body.orderinfo.order_id // The display name of the user.
    // [END eventAttributes]
    const mailOptions = {
      from: `${APP_NAME} <orderconfirmation@onwarddelivery.com>`,
      to: email,
    };
    mailOptions.subject = `New ${APP_NAME} Order!`;
    mailOptions.text = `Hey ${displayName || ''}! \r\n\r\n New Order. \r\n\r\nOrder Details: \r\n\r\n ${orderinfo || ''}`;
    
    const custMailOptions = {
      from: `${APP_NAME} <orderconfirmation@onwarddelivery.com>`,
      to: customer_email,
    };
    custMailOptions.subject = `New ${APP_NAME} Order!`;    
    custMailOptions.text = `Hey ${customer_name || ''}! \r\n\r\n Confirming your order. \r\n\r\nOrder Details: \r\n\r\n ID: ${order_id || ''}  \r\n\r\n An Onward rep will reach out soon to confirm details of your order. \r\n\r\n Thanks!`;
    
    await mailTransport.sendMail(mailOptions);
    await mailTransport.sendMail(custMailOptions);
    console.log('New welcome email sent to:', email);
    return cors(req, res, () => {
      res.send("Success email!");    
    });
  })
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
        let x = database.push({ item });
        console.log(x.path.pieces_[1]);
        let id = x.path.pieces_[1];
        
        
        let items = [];
        // console.warn(snapshot);
        items.push({id: id});
        return res.status(200).json(items);

        // return database.on('value', (snapshot) => {
        //     snapshot.forEach((item) => {
        //       items.push({
        //         id: item.key,
        //         items: item.val().item
        //       });
        //     });
            
        //     res.status(200).json(items)
        //   }, (error) => {
        //     res.status(error.code).json({
        //       message: `Something went wrong. ${error.message}`
        //     })
        //   })
        })
      })
exports.getOrder = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(401).json({
                message: 'Not Allowed'
            })
        }
        console.log(req.body);

        // const order_id = req.body.order_id;

        // console.log(database.find().Count());
        // database.doc('fK3ddutEpD2qQqRMXNW5').get();
        let cityRef = database.doc('fK3ddutEpD2qQqRMXNW5');
        let getDoc = cityRef.get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
              return null;
            } else {
              console.log('Document data:', doc.data());
              return doc.data();
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });        

        // let x = database.push({ item });
        // console.log(x.path.pieces_[1]);
        // let id = x.path.pieces_[1];
        console.log(cityRef);
        console.log(getDoc);
                        
        // console.warn(snapshot);
        // items.push({id: id});
        return res.status(200).json(cityRef);

        // return database.on('value', (snapshot) => {
        //     snapshot.forEach((item) => {
        //       items.push({
        //         id: item.key,
        //         items: item.val().item
        //       });
        //     });
            
        //     res.status(200).json(items)
        //   }, (error) => {
        //     res.status(error.code).json({
        //       message: `Something went wrong. ${error.message}`
        //     })
        //   })
        })
      })