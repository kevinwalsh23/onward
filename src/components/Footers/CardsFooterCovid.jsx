/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import * as pricing from './pricing.json';
// console.log(pricing.default);
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooterCovid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        num_trucks: 0,
        date: '',
        comments: '',
        success: false                  
    };
        
}
    componentDidUpdate() {      
    }    
    componentDidMount() {
      // console.log(this.state.price)

    }
    SendInternalConfirmation = async () => {
        fetch('https://us-central1-onward-63d91.cloudfunctions.net/Covid', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'kevinwalsh23@gmail.com',
                displayName: 'Beast',
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                company: this.state.company,
                address: this.state.address,
                num_trucks: this.state.num_trucks,
                date: this.state.date,
                comments: this.state.comments
            })
          })

    } 
    handleSubmit = async (event) => {
        console.log(this.state);
        this.SendInternalConfirmation().then(this.setState({success: true}));
    }
  render() {
    if (this.state.success) {
        return(
            <Redirect to={{
                pathname: '/covidconfirm',
                state: { info: this.state }
            }}/>
        )
    }
    else {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row>

              <Col className="mb-5 mb-lg-0" md="12">
                <Card className="card-lift shadow border-0">
                <Form style={{margin: "5%"}}>

                  <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column sm={2}>
                        Company
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control required style={{width: "70%"}} type="text" placeholder="Your Company" onChange={(e) => this.setState({company: e.target.value})}/>                        
                      </Col>                                                                  
                    </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Company Address
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="text" placeholder="Address" onChange={(e) => this.setState({address: e.target.value})}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Name
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="text" placeholder="Your Name" onChange={(e) => this.setState({name: e.target.value})}/>
                    </Col>
                  </Form.Group> 

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="email" placeholder="youremail@gmail.com" onChange={(e) => this.setState({email: e.target.value})}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Phone
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="tel" placeholder="Your Number" onChange={(e) => this.setState({phone: e.target.value})}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Number of Outbound Trucks Required
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="number" placeholder="Number of Outbound Trucks Required" onChange={(e) => this.setState({num_trucks: e.target.value})}/>
                    </Col>
                  </Form.Group> 

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Date
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="text" placeholder="Requested Date of Service" onChange={(e) => this.setState({phone: e.target.value})}/>
                    </Col>
                  </Form.Group> 

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Comments/Additional Details
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control style={{width: "70%"}} type="text" placeholder="Comments/Additional Details" onChange={(e) => this.setState({comments: e.target.value})}/>
                    </Col>
                  </Form.Group>                                      

                  <Form.Group as={Row} style={{marginTop: "5%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    { this.state.name === '' || this.state.email === '' ? (
                      <div>
                        <Button disabled variant="primary" style={{backgroundColor: "grey", color: "white"}} onClick={() => console.log(this.state)}>
                          Add Pickup Information
                        </Button>
                        <br/>
                        <text style={{margin: '5px', color: 'red'}}>Must include name and email address.</text>                                              </div>                      
                     ) : 
                        <Button variant="primary" style={{backgroundColor: "#4C8FFB", color: "white"}} onClick={() => this.handleSubmit()}>
                          Submit
                        </Button>                      
                  }  
                      {/* <Link to={{ 
                        pathname: '/pickup', state: { pass_params: this.state  }                        
                      }}>
                        <Button variant="primary" style={{backgroundColor: "#4C8FFB", color: "white"}} onClick={() => console.log(this.state)}>
                          Add Pickup Information
                        </Button>
                      </Link> */}
                      {/* <Button type="submit">Continue to Payment</Button> */}
                    </Col>
                  </Form.Group>
                </Form>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>         
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    // href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Onward Delivery
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      // href="https://www.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Onward Delivery
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/cancellationpolicy"
                      target="_blank"
                    >
                      Cancel Policy
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/privacy"
                      target="_blank"
                    >
                      Privacy
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    
    )};
  }
}

export default CardsFooterCovid;
