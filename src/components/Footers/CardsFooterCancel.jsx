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
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
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
  CardBody,
  UncontrolledTooltip,
  Jumbotron
} from "reactstrap";

class CardsFooterCancel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderinfo: this.props.orderinfo
    }
  }    
  componentDidMount() {
    console.log(this.state);
    // console.log('hello')
  }
  
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row>

              <Col className="mb-5 mb-lg-0" md="12">
                <div>
                    <Jumbotron>
                        <h5 className="display-3">Cancellation Policy</h5>
                        {/* <p className="lead">Thank you for choosing Onward as your delivery service, we look forward to your business!</p> */}
                        <hr className="my-2" />
                        <p style={{fontSize: "12px"}}>
                        If you cancel any Request (a) before the Carrier arrives at the pickup address, you will not be charged and the hold will be lifted on your credit card. If you cancel any Request (b) after the Carrier arrives at the pickup location, but prior to the Carrier performing any of the Services, your credit card will be charged 50% of the Delivery Charges. If cancellation occurs (c) after the Carrier has begun to perform the Services, your credit card will be charged 100% of the Delivery Charges. In the instance (d) where the Carrier attempts to fulfill the Request but cannot do so for reasons outside the Drivers and/or Helpers control (for example an unsafe jobsite with debris, a blocked walkway, aggressive dog(s), inaccessible/locked gates, etc.), your credit card will be charged 50% of the applicable Delivery Charges. If the (e) Pickup Customer's order is picked up and the Drop off Customer is not available to accept the freight, the credit card will be charged 100% of the applicable Delivery Charges.
                            </p>                        
                        
                        <p className="lead">
                        {/* <Button disabled color="primary">Email Confirmation</Button> */}
                        </p>
                    </Jumbotron>
                </div>
                <Card className="card-lift shadow border-0">
                                    
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <h6 className="text-primary text-uppercase">
                          Reservation Confirmed
                          </h6>
                          <p className="description mt-3">
                          Full refund if you cancel before the driver arrives at the Pickup Address.
                          </p>
                          {/* <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div> */}
                          {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div> */}
                          <h6 className="text-success text-uppercase">
                          Cancel after the driver arrives at the pickup address
                          </h6>
                          <p className="description mt-3">
                          50% Refund, minus the service fee
                          </p>
                          {/* <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div> */}
                          <h6 className="text-warning text-uppercase">
                            Cancel after Pickup but before Delivery
                          </h6>
                          <p className="description mt-3">
                          0% Refund, minus the service fee
                          </p>
                          {/* <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
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
                    //   href="https://www.creative-tim.com?ref=adsr-footer"
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
    );
  }
}

export default CardsFooterCancel;
