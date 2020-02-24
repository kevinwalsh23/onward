const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_HsxkyXZ7QRUOZEqVUxGDr4gX00STdINE1Y');

const firebaseConfig = {
  apiKey: "AIzaSyCbBGTyUhOtNXVa4PFM6tthYmNBHROHZpE",
  authDomain: "onward-63d91.firebaseapp.com",
  databaseURL: "https://onward-63d91.firebaseio.com",
  projectId: "onward-63d91",
  storageBucket: "onward-63d91.appspot.com",
  messagingSenderId: "9741679238",
  appId: "1:9741679238:web:428babb702ac191200ef07",
  measurementId: "G-0DSG4CG2RH"
};
admin.initializeApp(firebaseConfig);
const database = admin.database().ref('/orders');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.stripePayment = functions.https.onRequest( async (req, res) => {

  // const { items, currency } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: 'usd'
  });

  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    clientSecret: paymentIntent.client_secret
  });
 });


exports.addOrder = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not Allowed'
            })
        }
        console.log(req.body);

        const item = req.body;
        
        database.push({ item });
        
        let items = [];

        return database.on('value', (snapshot) => {
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