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
  UncontrolledTooltip
} from "reactstrap";

class CardsFooterTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iteminfo: this.props.iteminfo,
            cc_num: '',
            exp_date: '',
            sec_code: '',
            bill_addy: '',
            bill_city: '',
            bill_state: '',
            bill_zip: '',
            bill_cunt: ''     
            // del_city: this.props.destinations.deliverycity,
            // pu_city: this.props.destinations.pickupcity
        };
        //Note for above: PU => Pickup. Del => Delivery
        //specifying toggleNav is available to use and bound to 'this'
        // this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        console.log(this.props);
    }
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row>

              <Col className="mb-5 mb-lg-0" md="12">
                <Card className="card-lift shadow border-0">
                <Form style={{margin: "5%"}}>

                  {/* <Form.Group as={Row} controlId="formHorizontalCC">
                      <Form.Label column sm={2}>
                        Credit Card #
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="number" placeholder="#" onChange={(e) => this.setState({cc_num: e.target.value})}/>
                      </Col>
                    </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalExp">
                    <Form.Label column sm={2}>
                      Expiration Date
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="01/23" onChange={(e) => this.setState({exp_date: e.target.value})}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalSCode">
                    <Form.Label column sm={2}>
                      Security Code
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="420" onChange={(e) => this.setState({sec_code: e.target.value})}/>
                    </Col>
                  </Form.Group> */}

                  <Form.Group as={Row} controlId="formHorizontalBillAdd">
                      <Form.Label column sm={2}>
                        Order Number:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="#" onChange={(e) => this.setState({bill_addy: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    {/* <Form.Group as={Row} controlId="formHorizontalBillCity">
                    <Form.Label column sm={2}>
                      Billing City
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="Denver" onChange={(e) => this.setState({bill_city: e.target.value})}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalBillState">
                      <Form.Label column sm={2}>
                        Billing State
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="CO" onChange={(e) => this.setState({bill_state: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalBillZip">
                      <Form.Label column sm={2}>
                        Billing Zip Code
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="12345" onChange={(e) => this.setState({bill_zip: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalBillCunt">
                      <Form.Label column sm={2}>
                        Billing Country
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="United States" onChange={(e) => this.setState({bill_cunt: e.target.value})}/>
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

                  <Form.Group as={Row} style={{marginTop: "5%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Link to="/confirmation" >
                        <Button variant="primary" style={{backgroundColor: "#4C8FFB", color: "white"}}>
                          Track Your Order
                        </Button>
                      </Link>
                      {/* <Button type="submit">Continue to Payment</Button> */}
                    </Col>
                  </Form.Group>
                </Form>
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
                    //   href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                    //   href="http://blog.creative-tim.com?ref=adsr-footer"
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

export default CardsFooterTrack;
