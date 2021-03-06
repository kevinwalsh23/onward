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
  UncontrolledTooltip,
  Jumbotron
} from "reactstrap";

class CardsFooterLocation extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row>

              <Col className="mb-5 mb-lg-0" md="12">
                <div>
                    <Jumbotron>
                        <h3 className="display-3">We operate in the following cities:</h3>
                        {/* <p className="lead">Thank you for choosing Onward as your delivery service, we look forward to your business!</p> */}
                        <hr className="my-2" />
                        <li>Boulder</li>
                        <br/>
                        <li>Colorado Springs</li>                        
                        <br/>
                        <li>Denver</li>                        
                        <br/>
                        <li>Fort Collins</li>                        
                        <p className="lead">                        
                        </p>
                    </Jumbotron>
                </div>
                <Card className="card-lift shadow border-0">
                    
                {/* <Form styles="margin: 50px"> */}

                  {/* <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Credit Card #
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Steve Jobs" />
                      </Col>
                    </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Expiration Date
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Security Code
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="Phone Number" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Billing Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="What are we picking up?" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Billing City
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="100 lbs" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Billing State
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Big Couch" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Billing Zip Code
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Big Couch" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Billing Country
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Big Couch" />
                      </Col>
                    </Form.Group> */}

                    {/* <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Delivery Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Big Couch" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Delivery Notes
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Big Couch" />
                      </Col>
                    </Form.Group> */}
                  {/* <fieldset>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={2}>
                        Radios
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="first radio"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="second radio"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                        <Form.Check
                          type="radio"
                          label="third radio"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios3"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset> */}
                  {/* <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Form.Check label="Remember me" />
                    </Col>
                  </Form.Group> */}

                  {/* <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Link to="/payment" >
                        <Button variant="primary" >
                          Confirm Your Order
                        </Button>
                      </Link>
                      <Button type="submit">Continue to Payment</Button>
                    </Col>
                  </Form.Group> */}
                {/* </Form> */}
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            {/* <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://twitter.com/creativetim"
                  id="tooltip475038074"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip837440414"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="dribbble"
                  href="https://dribbble.com/creativetim"
                  id="tooltip829810202"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
                  id="tooltip495507257"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row> */}
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

export default CardsFooterLocation;
