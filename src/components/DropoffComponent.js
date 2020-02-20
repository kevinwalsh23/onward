import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterDropoff from "components/Footers/CardsFooterDropoff.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Dropoff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pickupcity: this.props.passprops.pickupcity,
        deliverycity: this.props.passprops.deliverycity
    };
    //specifying toggleNav is available to use and bound to 'this'
    // this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    //this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
}
    componentDidMount() {
      console.log(this.props);
      // this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
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
                <h1 className="homefont textmargin"><b>Complete Dropoff Info.</b></h1>
  
              </div>              
            </div>
          
          </div>
          <CardsFooterDropoff destinations={this.state}/>
        </div>
        
        </div>
      
    );
  }
}
export default Dropoff;
