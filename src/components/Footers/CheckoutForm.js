import React from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import { Redirect } from "react-router-dom";
import CardSection from './CardSection';
import SplitForm from './SplitForm';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            orderinfo: this.props.orderinfo,
            customerinfo: {
                name: this.props.orderinfo.item_info.name,
                email: this.props.orderinfo.item_info.email,
                phone: this.props.orderinfo.item_info.phone
            },
            iteminfo: {
                item_count: this.props.orderinfo.item_info.item_count,
                pu_notes: this.props.orderinfo.item_info.pu_notes,
                del_notes: this.props.orderinfo.item_info.del_notes,
                item_one: {
                  weight: this.props.orderinfo.item_info.one_weight,
                  height: this.props.orderinfo.item_info.one_height,
                  length: this.props.orderinfo.item_info.one_length,
                  width: this.props.orderinfo.item_info.one_width,
                  description: this.props.orderinfo.item_info.one_desc,

                },
                item_two: {
                  weight: this.props.orderinfo.item_info.two_weight,
                  height: this.props.orderinfo.item_info.two_height,
                  length: this.props.orderinfo.item_info.two_length,
                  width: this.props.orderinfo.item_info.two_width,
                  description: this.props.orderinfo.item_info.two_desc,
                },
                item_three: {
                  weight: this.props.orderinfo.item_info.three_weight,
                  height: this.props.orderinfo.item_info.three_height,
                  length: this.props.orderinfo.item_info.three_length,
                  width: this.props.orderinfo.item_info.three_width,
                  description: this.props.orderinfo.item_info.three_desc,
                },
                item_four: {
                  weight: this.props.orderinfo.item_info.four_weight,
                  height: this.props.orderinfo.item_info.four_height,
                  length: this.props.orderinfo.item_info.four_length,
                  width: this.props.orderinfo.item_info.four_width,
                  description: this.props.orderinfo.item_info.four_desc,
                },
                item_five: {
                  weight: this.props.orderinfo.item_info.five_weight,
                  height: this.props.orderinfo.item_info.five_height,
                  length: this.props.orderinfo.item_info.five_length,
                  width: this.props.orderinfo.item_info.five_width,
                  description: this.props.orderinfo.item_info.five_desc,
                }                
            },
            route_meta: {
                del_city: this.props.orderinfo.del_city,
                pu_city: this.props.orderinfo.pu_city,
            },
            pickup_info: {
                pu_address: this.props.orderinfo.pickup_info.pu_addy,
                pu_city: this.props.orderinfo.pickup_info.pu_city,
                pu_state: this.props.orderinfo.pickup_info.pu_state,
                pu_zip: this.props.orderinfo.pickup_info.pu_zip,
                pu_notes: this.props.orderinfo.pickup_info.pu_notes,
                pu_floor: this.props.orderinfo.pickup_info.floor,
                pu_elevator: this.props.orderinfo.pickup_info.elevator,
                pu_complications: this.props.orderinfo.pickup_info.complications,
                pu_add_info: this.props.orderinfo.pickup_info.add_info,
                pu_other_prob: this.props.orderinfo.pickup_info.other_prob
              },
              delivery_info: {
                del_address: this.props.orderinfo.del_info.del_addy,
                del_city: this.props.orderinfo.del_info.del_city,
                del_state: this.props.orderinfo.del_info.del_state,
                del_zip: this.props.orderinfo.del_info.del_zip,
                del_notes: this.props.orderinfo.del_info.del_notes,
                del_floor: this.props.orderinfo.del_info.floor,
                del_elevator: this.props.orderinfo.del_info.elevator,
                del_complications: this.props.orderinfo.del_info.complications,
                del_add_info: this.props.orderinfo.del_info.add_info,
                del_other_prob: this.props.orderinfo.del_info.other_prob
              },
              price: this.props.orderinfo.del_info.price
        }
    }
    
SaveCustomerInfo = async () => {
        fetch('https://us-central1-onward-63d91.cloudfunctions.net/addOrder', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                timestamp: Date.now(),
                customerinfo: this.state.customerinfo,
                iteminfo: this.state.iteminfo,
                route_meta: this.state.route_meta,
                pickup_info: this.state.pickup_info,
                delivery_info: this.state.delivery_info,
                price: this.state.price
            })
          })

    }   
SendInternalConfirmation = async () => {
        fetch('http://localhost:5000/onward-63d91/us-central1/internalConfirmation', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'cors': 'no-cors'
            },
            body: JSON.stringify({
                email: 'kevinwalsh23@gmail.com',
                displayName: 'Beast',
                orderinfo: {
                    customerinfo: this.state.customerinfo,
                    iteminfo: this.state.iteminfo,
                    route_meta: this.state.route_meta,
                    pickup_info: this.state.pickup_info,
                    delivery_info: this.state.delivery_info,
                    price: this.state.price
                }
            })
          })

    } 

  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    console.log(this.state.orderinfo.item_info.price);
    let the_price = this.state.orderinfo.item_info.price;
    
    // which would refresh the page.
    let x;
    event.preventDefault();
    fetch('http://localhost:5000/onward-63d91/us-central1/stripePayment', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Custom-Header': Date.now()/1000
          },
        body: JSON.stringify({
            price: the_price,            
        })
    })
    // fetch('https://us-central1-onward-63d91.cloudfunctions.net/stripePayment')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson.clientSecret);
      x = myJson.clientSecret;
      return x;
    })
    .then( async (x) => {
        const {stripe, elements} = this.props

        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make  sure to disable form submission until Stripe.js has loaded.
          return;
        }
        const result = await stripe.confirmCardPayment(x, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: 'Jenny Rosen',
              },
            }
          });
        if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
        } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
            console.log('success');
            this.SaveCustomerInfo();
            // this.SendInternalConfirmation();
            console.log('success');
            // this.setState({success: true});
            return(
                <div>SUCCESS</div>
            )
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
        }
        }        

      });

    

    
      
      
  };
  
  componentDidMount() {
    console.log(this.state);
    console.log('hello')
  }

  render() {
    if (this.state.success) {
        return(
            <Redirect to="/confirmation"/>
        )
    }
    else {
        return (
            <form onSubmit={this.handleSubmit}>
              <CardSection /><br/>
              <button disabled={!this.props.stripe}>Confirm order</button>
            </form>
          );

    }
    
  }
}

export default function InjectedCheckoutForm(order_info) {
    console.log(order_info);
    // console.log(({stripe, elements, orderinfo}))
  return (
    <ElementsConsumer orderinfo={order_info}>
      {({stripe, elements, orderinfo}) => (
        <CheckoutForm  stripe={stripe} elements={elements} orderinfo={order_info.orderinfo} />
      )}
    </ElementsConsumer>
  );
}