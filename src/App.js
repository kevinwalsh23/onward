import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import DemoNavbar from "./components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { ConfigureStore } from './redux/configureStore';
import { Grid, Row, Col, Button, Card } from 'react-bootstrap';
import Main from './components/MainComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const pickupCity = [ {name: "Denver", id: 1, key:"Key" }];
const deliveryCity = [ {name: "Denver", id: 1, key:"Key" }];
//const store = ConfigureStore();

class App extends Component {
  // constructor(props){
  //   super(props);
  //   //form submission will delete or update
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   }
    // componentWillMount() {
    //   this.initializeReactGA();
    // }
    //form for early access
    // handleSubmit(values) {
    //   console.log("values: " + values)

    //   console.log("Current State is: " + JSON.stringify(values));
    //   alert("Current State is: " + JSON.stringify(values));
    //   this.props.postFeedback(values);
    //   this.props.resetFeedbackForm();
    // }
    // initializeReactGA() {
    //   ReactGA.initialize('UA-116537882-2');
    //   ReactGA.pageview('/homepage');
    // }  
    render() {
      return (
        // <Provider store={store}>
        <BrowserRouter>>
          <div>
            <Main />
          </div>
        </BrowserRouter>
        // </Provider>
      );
    }
  }
  
  export default App;