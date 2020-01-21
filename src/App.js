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
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
        // </Provider>
      );
    }
  }
  
  export default App;
//     render() {
//       return (
        // <div>
            
        //   <div className="App">
        //   <DemoNavbar />

        //   <div className="container">
        //     <div className="row">
        //       <div className="col-md m-1">
        //         <h1 className="homefont textmargin"><b>On Demand Home Delivery.</b></h1>
        //         <h5 className="subfont">Partnering with established delivery companies in the Denver area, Onward Delivery has access to trucks that are delivering product in Boulder, Colorado Springs, and Fort Collins on a weekly basis.</h5>
        //         <div className="">
        //         {/* <form className="form-inline formstyle" action="https://formspree.io/kevinwalsh23@gmail.com" method="POST">
        //           <input type="email" name="_replyto" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name@company.com"/>              
        //           <button type="submit" value="Send" className="btn btn-secondary rounded mb-2">Request Access</button>
        //         </form> */}



        //         <Card style={{ width: '100%', height: '100%' }}>
        //         <Form>
        //           <Form.Group>
        //           <Form.Row>
        //             <Col style={{ width: '100%', height: '100%' }}>
        //             <Form.Label>Pickup City</Form.Label>
        //               <Form.Control as="select">
        //                 <option>Boulder</option>
        //                 <option>Colorado Springs</option>
        //                 <option>Denver</option>
        //                 <option>Fort Collins</option>                        
        //               </Form.Control>
        //             </Col>
        //             <Col>
        //             <Form.Label>Destination City</Form.Label>
        //             <Form.Control as="select">
        //                 <option>Boulder</option>
        //                 <option>Colorado Springs</option>
        //                 <option selected>Denver</option>
        //                 <option>Fort Collins</option>
        //             </Form.Control>
        //             </Col>
        //             <Col>
        //             <Button variant="primary" type="submit">
        //             Submit
        //           </Button>
        //             </Col>
        //           </Form.Row>                  
                  
        //           </Form.Group>                  
        //         </Form>
        //         </Card>

        //         </div>      
        //       </div>              
        //     </div>
          
        //   </div>
        //   <CardsFooter />
        // </div>
        
        // </div>
//       );
//   }
// };
// export default App;
