
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
// const stripe = require('stripe')('sk_test_Zs7jqtKpGyEZpK1rWEDjGURX00csRXZyBJ'); //test key

// const gmailPassword = functions.config().stripe.seckey; 
const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
var request = require('request');
// import * as config from './pricing.json';

// const gmailEmail = 'orderconfirmation@onwarddelivery.com'; //test mode
// const gmailPassword = "Onward4040!"; //test mode


// const gmailPassword = "vuemdyjixfmvtkww";g7y6-2thy.accessdomain.com
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });


const APP_NAME = 'Onward Delivery';

admin.initializeApp();
const stripe = require('stripe')(functions.config().stripe.seckey); //live key

const gmailEmail = functions.config().gmail.email; //livemode
const gmailPassword = functions.config().gmail.password; //livemode
console.log(functions.config());

const mailTransport = nodemailer.createTransport({
  host: "g7y6-2thy.accessdomain.com",
    port: 465,
    secure: true, // true for 465, false for other ports
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
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
        if (req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not Allowed'
            })
        }
        console.log(req.body.orderinfo.item_id);
        let the_id = "-" + req.body.orderinfo.item_id;

        // const order_id = req.body.order_id;
        // return database.on('value', (snapshot) => {
        //   snapshot.forEach((item) => {
        //     console.log(item);
        //   })
        //   console.log(snapshot);
        // });
        // return null;
        // console.log(thing);//
        // return database.once('value').then((snapshot) => {
        //   console.log(snapshot.val());
        //   // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        //   return null;
        //   // ...
        // });
        // var query = database.equalTo("123123");
        //   query.once("value", (snapshot) => {
        //     snapshot.forEach((bookSnapshot) => {
        //       console.log(bookSnapshot.key+": "+bookSnapshot.val());
        //       return null;
        //     });
        //   })
        let items;
        
        request('https://onward-63d91.firebaseio.com/orders.json?auth=lQIB29728K2cSu30JacOMOZ7iMHzIuwrUraxqYyG', (error, response, body) => {
          if (!error && response.statusCode === 200) {
              //here put what you want to do with the request
              // console.log(response.body);
              // items.push(response.body);
              items = JSON.parse(response.body);
              theitem = items[the_id]
              console.log(theitem);
              // res.status(200).json(items)
              return cors(req, res, () => {
                res.send({
                  items: theitem            
                  });    
                })
          }
          else {
            return "error"
          }
      })        
        })
      })

exports.Covid = functions.https.onRequest( async (req, res) => {
   cors(req, res, async () => {  
    console.log(req.body);

    //Variable names and values for email
    const displayName = req.body.displayName; // The email of the user.
    const company = req.body.company; // The email of the user.
    const name = req.body.name;
    const phone = req.body.phone; // The display name of the user.
    const email = req.body.email; // The display name of the user.
    const cust_email = req.body.cust_email; // The display name of the user.
    const address = req.body.address; // The display name of the user.
    const num_trucks = req.body.num_trucks; // The display name of the user.
    const date = req.body.date; // The display name of the user.
    const comments = req.body.comments; // The display name of the user.

    // [END eventAttributes]

    const mailOptions = {
      from: `${APP_NAME} <orderconfirmation@onwarddelivery.com>`,
      to: email,
    };
    //Email Subject and Body
    mailOptions.subject = `New ${APP_NAME} Chinese Wuhan Virus Request!`;
    mailOptions.text = `Hey ${displayName || ''}! \r\n\r\n 
    New Request.\r\n\r\n     
    Company: ${company || ''}
    Name: ${name || ''}
    Phone: ${phone || ''}
    Email: ${cust_email || ''}
    Address: ${address || ''}
    Number of Trucks: ${num_trucks || ''}
    Date: ${date || ''}
    Comments: ${comments || ''}`;

    await mailTransport.sendMail(mailOptions); 

    console.log('New welcome email sent to:', email);
    return cors(req, res, () => {
      res.send("Success email!");    
    });
  })    
  });