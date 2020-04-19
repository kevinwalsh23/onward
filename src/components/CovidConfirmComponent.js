import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooterCovidConfirm from "components/Footers/CardsFooterCovidConfirm.jsx";
import Home from './HomeComponent';


import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class CovidConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info.info
    }
  }    
  componentDidMount() {
    // console.log(this.props);
    console.log(this.state);
    // console.log('hello')
  }
  componentWillMount(){
    //   console.log(this.props);
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
          <CardsFooterCovidConfirm info={this.state.info}/>          
        </div>
        
        </div>
      
    );
  }
}
export default CovidConfirm;
