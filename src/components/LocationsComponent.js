import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterLocation from "components/Footers/CardsFooterLocation.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Locations extends React.Component {
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
          <CardsFooterLocation />
        </div>
        
        </div>
      
    );
  }
}
export default Locations;
