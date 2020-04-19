import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterCovid from "components/Footers/CardsFooterCovid.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Covid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // pickupcity: this.props.passprops.pickupcity,
        // deliverycity: this.props.passprops.deliverycity
    };
    //specifying toggleNav is available to use and bound to 'this'
    // this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    //this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
}
    componentDidMount() {
      // console.log(this.props);
      // this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
      // console.log(this.state);
    }
  render() {
    return (
      <div>
            
          <div className="App">
          <DemoNavbar />

          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h5 className="homefont textmargin"><b>ONWARD DELIVERY, LLC: COVID-19 RESPONSE</b></h5>
                <p className="homefont">IS YOUR TEAM LOOKING FOR EXPERIENCED BOX TRUCK DELIVERY TEAMS TO HELP WITH YOUR OUTBOUND CAPACITY?</p>
                <p className="homefont">If your team is in need of supplemental resources in the form of Trucks and Drivers, please let us know!  Onward is a Freight Brokerage based in Denver, CO. We have connections with Final Mile Delivery companies that specialize in White Glove Delivery. If your team is experiencing capacity peaks, we can help provide delivery resources to help your team through these unusual times.</p>
                <p className="homefont">If you are interested or would like to discuss in more detail, please fill in the below form AND WE WILL REACH OUT TO YOU WITHIN 24 HOURS!!</p>
  
              </div>              
            </div>
          
          </div>
          <CardsFooterCovid destinations={this.state}/>
        </div>
        
        </div>
      
    );
  }
}
export default Covid;
