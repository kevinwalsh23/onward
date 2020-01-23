import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'; 
//import { Loading } from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, } from 'react-animation-components'
import Form from 'react-bootstrap/Form';
import DemoNavbar from "./Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Order from './OrderComponent';
import { browserHistory } from 'react-router';
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
// function RenderCard({item, isLoading, errMess}) {
//     if (isLoading) {
//         return(
//             <Loading />
//         );
//     }
//     else if (errMess) {
//         return(
//             <h4>{errMess}</h4>
//         );
//     }
//     else 
//         return(
//             <FadeTransform in transformProps={{
//                 exitTransform: 'scale(0.5) translateY(-50%)'
//             }}>
//                 <Card>
//                     <CardImg src={baseUrl + item.image} alt={item.name} />
//                     <CardBody>
//                         <CardTitle>{item.name}</CardTitle>
//                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
//                         <CardText>{item.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </FadeTransform>
//         )
// } 
class Home extends Component {
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
    handleChange(e) {
        //navigate to order page        
        console.log(e);
        //console.log(this.props);
        // this.props.history.push("/order");
        // return <Redirect to="/order"/>;
        
        
    }
    render(){
    
    return(
        // <div className="container">
        //     <div className="row align-items-start">
        //         <div className="col-12 col-md m-1">
        //             <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
        //         </div>
        //         <div className="col-12 col-md m-1">
        //             <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
        //         </div>
        //         <div className="col-12 col-md m-1">
        //             <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/>
        //         </div>
        //     </div>
        // </div>
        <div>
            
          <div className="App">
          <DemoNavbar />

          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h1 className="homefont textmargin"><b>On Demand Home Delivery.</b></h1>
                <h5 className="subfont">Partnering with established delivery companies in the Denver area, Onward Delivery has access to trucks that are delivering product in Boulder, Colorado Springs, and Fort Collins on a weekly basis.</h5>
                <div className="">
                {/* <form className="form-inline formstyle" action="https://formspree.io/kevinwalsh23@gmail.com" method="POST">
                  <input type="email" name="_replyto" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name@company.com"/>              
                  <button type="submit" value="Send" className="btn btn-secondary rounded mb-2">Request Access</button>
                </form> */}



                <Card >
                <Form>
                  <Form.Group>
                  <Form.Row>
                  {/* <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group> */}

                    <Col style={{ width: '100%', height: '100%' }}>
                    <Form.Label>Pickup City</Form.Label>
                      <Form.Control size="lg" as="select" onChange={(e) => this.setState({pickupcity: e.target.value})}>
                        <option key='1' value='Boulder'>Boulder</option>
                        <option key='2' value='Colorado Springs'>Colorado Springs</option>
                        <option key='3' value='Denver'>Denver</option>
                        <option key='4' value='Fort Collins'>Fort Collins</option>                        
                      </Form.Control>
                    </Col>

                    <Col style={{ width: '100%', height: '100%'}}>
                    <Form.Label>Destination City</Form.Label>
                    <Form.Control size="lg" as="select" name="dest" defaultValue="Denver" id='asdf' onChange={(e) => this.setState({deliverycity: e.target.value})}>
                        <option key='5' value='Boulder'>Boulder</option>
                        <option key='6' value='Colorado Springs'>Colorado Springs</option>
                        <option key='7' value='Denver'>Denver</option>
                        <option key='8' value='Fort Collins'>Fort Collins</option>
                    </Form.Control>
                    </Col>

                    <Col style={{ width: '100%', height: '200%', alignSelf: 'center'}}>
                    <Link to={{ 
                        pathname: '/order',search: "?sort=name", state: { deliverycity: this.state.deliverycity, pickupcity: this.state.pickupcity  }
                        
                      }}>
                    <Button variant="primary" >
                      Submit
                    </Button>
                    </Link>                    
                    </Col>

                  </Form.Row>                  
                  
                  </Form.Group>                  
                </Form>
                </Card>

                </div>      
              </div>              
            </div>
          
          </div>
          
          <CardsFooter />
        </div>
        
        </div>
        
    );
}
}
export default Home;
