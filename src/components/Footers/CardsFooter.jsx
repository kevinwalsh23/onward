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
// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardImg,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
          <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            1. Enter Pickup Information
                          </h6>
                          <p className="description mt-3">
                            Provide us with information about where we will be picking the item up, when you would like us to come, what the item is, and where it is being delivered.
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
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            2. Submit Payment Information
                          </h6>
                          <p className="description mt-3">
                            We partner with Stripe to ensure secure payments. Simply enter your payment information on our site, and Stripe takes care of the rest.
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
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            3. Item Picked Up and Delivered
                          </h6>
                          <p className="description mt-3">
                            Onward will send a team to come pickup your item, and drop it off at the provided destination. We will provide confirmation through the entire process.
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
            <Row className="row-grid align-items-center my-md">
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
                  href="https://twitter.com/DeliveryOnward"
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
                  href="https://www.facebook.com/onwarddelivers"
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
                  href="https://www.instagram.com/onward_delivery"
                  id="tooltip829810202"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                {/* <Button
                  className="btn-neutral btn-icon-only btn-round ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
                  id="tooltip495507257"
                  size="lg"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                </Button> */}
                {/* <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip> */}
              </Col>
            </Row>
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
                      href=""
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Blog
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

export default CardsFooter;
