import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterPrivacy from "components/Footers/CardsFooterPrivacy.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   orderinfo: this.props.orderinfo.orderinfo
    }
  }    
  componentDidMount() {
    console.log(this.props);
    // console.log('hello')
  }
  render() {
    return (
      <div>
            
          <div className="App">
          <DemoNavbar />

          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                {/* <h1 className="homefont textmargin"><b>Your Order was Successfully Placed!</b></h1> */}
  
              </div>              
            </div>
          
          </div>
          <CardsFooterPrivacy/>          
        </div>
        
        </div>
      
    );
  }
}
export default Privacy;
