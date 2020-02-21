import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterPickup from "components/Footers/CardsFooterPickup.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class Pickup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        item_info: this.props.passprops.location.state.pass_params,
        pickupcity: this.props.passprops.location.state.pass_params.pu_city,
        deliverycity: this.props.passprops.location.state.pass_params.del_city
    };
    //specifying toggleNav is available to use and bound to 'this'
    // this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    //this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
}
    componentDidMount() {
    //   console.log(this.props.passprops.location.state.pass_params);
      // this.setState({pickupcity: this.props.passprops.pickupcity, deliverycity: this.props.passprops.deliverycity  });
    //   console.log(this.state);
    }
  render() {
    return (
      <div>
            
          <div className="App">
          <DemoNavbar />

          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h1 className="homefont textmargin"><b>Complete Pickup Info.</b></h1>
  
              </div>              
            </div>
          
          </div>
          <CardsFooterPickup destinations={this.state}/>
        </div>
        
        </div>
      
    );
  }
}
export default Pickup;
