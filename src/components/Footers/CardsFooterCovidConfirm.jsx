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

class CardsFooterCovidConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info
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
                        <h1 className="display-3">Thank you for reaching out, we will be in contact within 24 hours!</h1>
                        <p className="lead">Thank you for choosing Onward as your delivery service, we look forward to your business!</p>
                        <hr className="my-2" />
                        <p>Company: {this.state.info.company}</p>
                        <p>Name: {this.state.info.name}</p>                        
                        <p>Email: {this.state.info.email}</p>
                        <p>Phone: {this.state.info.phone}</p>
                        <p>Date: {this.state.info.date}</p>
                        <p>Number of Trucks: {this.state.info.num_trucks}</p>                                                
                        <p className="lead">
                        {/* <Button disabled color="primary">Email Confirmation</Button> */}
                        </p>
                    </Jumbotron>
                </div>
                <Card className="card-lift shadow border-0">
                                    
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

export default CardsFooterCovidConfirm;
