import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterNew from "components/Footers/CardsFooterNew.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pickupcity: 'Boulder',
        deliverycity: 'Denver'
    };
    //specifying toggleNav is available to use and bound to 'this'
    // this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    
}
    componentDidMount() {
      console.log(this.props);
      console.log(this.state);
    }
  render() {
    return (
      <div>
            
          <div className="App">
          <DemoNavbar />

          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h1 className="homefont textmargin"><b>Complete Order Form.</b></h1>
  
              </div>              
            </div>
          
          </div>
          <CardsFooterNew />
        </div>
        
        </div>
      
    );
  }
}
export default Order;
