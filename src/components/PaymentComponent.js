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
            iteminfo: this.props.pass_params,
            cc_num: '',
            exp_date: '',
            sec_code: '',
            bill_addy: '',
            bill_city: '',
            bill_state: '',
            bill_zip: '',
            bill_cunt: ''            
            // del_city: this.props.destinations.deliverycity,
            // pu_city: this.props.destinations.pickupcity
        };
        //Note for above: PU => Pickup. Del => Delivery
        //specifying toggleNav is available to use and bound to 'this'
        // this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        //console.log(this.state);
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
          <CardsFooterPmt iteminfo={this.state.iteminfo}/>
        </div>
        
        </div>
      
    );
  }
}
export default Payment;
