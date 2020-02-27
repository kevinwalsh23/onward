import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterPmt from "components/Footers/CardsFooterPmt.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            del_info: this.props.pass_params.pass_params,
            item_info: this.props.pass_params.pass_params.item_info,
            pickup_info: this.props.pass_params.pass_params.pickup_info,
            del_city: this.props.pass_params.pass_params.del_city,
            pu_city: this.props.pass_params.pass_params.pu_city,
            // cc_num: '',
            // exp_date: '',
            // sec_code: '',
            // bill_addy: '',
            // bill_city: '',
            // bill_state: '',
            // bill_zip: '',
            // bill_cunt: ''            
            // del_city: this.props.destinations.deliverycity,
            // pu_city: this.props.destinations.pickupcity
        };
        //Note for above: PU => Pickup. Del => Delivery
        //specifying toggleNav is available to use and bound to 'this'
        // this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        console.log(this.props);
    }
    componentDidMount() {
      //   console.log(this.props.passprops.location.state.pass_params);
        // this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
      //   console.log(this.state);
      // console.log(this.props.pass_params.pass_params);
      }
  render() {
    return (
      <div>
            
          <div className="App">
          <DemoNavbar />

          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h1 className="homefont textmargin"><b>Complete Payment Info.</b></h1>
  
              </div>              
            </div>
          
          </div>
          <CardsFooterPmt orderinfo={this.state}/>
        </div>
        
        </div>
      
    );
  }
}
export default Payment;
