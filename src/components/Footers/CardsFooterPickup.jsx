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
import * as pricing from './pricing.json';
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

class CardsFooterPickup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pu_addy: '',
        pu_city: '',
        pu_state: '',
        pu_zip: '',
        pu_notes: '',
        del_addy: '',
        del_notes: '',
        floor: '1',        
        elevator: 'no',
        complications: '',
        add_info: '',
        other_prob: '',
        item_info: this.props.destinations.item_info,
        deliv_city: this.props.destinations.deliverycity,
        pickup_city: this.props.destinations.pickupcity,
        floor_price: 0,
        price: this.props.destinations.item_info.price
        
    };
    //Note for above: PU => Pickup. Del => Delivery
    //specifying toggleNav is available to use and bound to 'this'
    // this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    console.log(this.props);
}
componentDidUpdate() {
    console.log(this.state.price);
    console.log(this.state.floor_price);    
  }

  update_floor_price = async(value) => {
    console.log(value);
    await this.setState({floor_price: pricing.Pickup_Floor[value]});
    if (this.state.elevator == 'yes') {   
        console.log(this.state.price)         
        await this.setState({price: this.props.destinations.item_info.price, floor: value});
        // console.log(new_charge)
        console.log(this.state.price)
    }
    else {
        let new_charge = this.props.destinations.item_info.price + pricing.Pickup_Floor[value];
        console.log(new_charge + 'hello')
        console.log(this.state.price)
        await this.setState({price: new_charge, floor: value});
        console.log(this.state.price)
    }
    console.log(this.state);

}

update_elevator = async(value) => {
    await this.setState({elevator: value});
    if (value == 'yes') {
        // let new_charge = this.state.price - this.state.floor_price;
        console.log(this.state.price)
        await this.setState({price: this.props.destinations.item_info.price, elevator: value});
        console.log(this.state.price)
    }
    else {
        console.log(this.state.price)
        let new_charge = this.props.destinations.item_info.price + this.state.floor_price;            
        await this.setState({price: new_charge, elevator: value});
        console.log(this.state.price)

    }
    // console.log(this.state.price);

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
                
                    <Form.Group as={Row} controlId="formHorizontalPickup">
                      <Form.Label column sm={2}>
                        Pickup Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="999 Theranos St. Fl 2" onChange={(e) => this.setState({pu_addy: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPickup">
                      <Form.Label column sm={2}>
                        Pickup City
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Denver" onChange={(e) => this.setState({pu_city: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPickup">
                      <Form.Label column sm={2}>
                        Pickup State
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Colorado" onChange={(e) => this.setState({pu_state: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPickup">
                      <Form.Label column sm={2}>
                        Pickup Zip
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="80013" onChange={(e) => this.setState({pu_zip: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPUNotes">
                      <Form.Label column sm={2}>
                        Pickup Notes
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Security Code: 2342" onChange={(e) => this.setState({pu_notes: e.target.value})}/>
                      </Col>
                    </Form.Group>                    

                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Pickup Floor
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" onChange={(e) => this.update_floor_price(e.target.value)}>
                            <option key='1' value='1'>1</option>
                            <option key='2' value='2'>2 </option>
                            <option key='3' value='3'>3 </option>
                            <option key='4' value='4'>4 </option>
                            <option key='5' value='5'>5+ </option>
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Elevator Access
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" onChange={(e) => this.update_elevator(e.target.value)}>
                            <option key='7' value='no'>No</option>
                            <option key='6' value='yes'>Yes</option>
                                                        
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Select Complications
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" onChange={(e) => this.setState({complications: e.target.value})}>
                            <option key='14' value='none'>None</option>
                            <option key='8' value='Unpaved streets or driveway'>Unpaved streets or driveway</option>
                            <option key='9' value='Vehicle height or weight restrictions'>Vehicle height or weight restrictions</option>
                            <option key='10' value='Parking/Unloading restrictions'>Parking/Unloading restrictions</option>
                            <option key='11' value='Low hanging tree branches on your street'>Low hanging tree branches on your street</option>
                            <option key='12' value='Pickup location is not clear of debris'>Pickup location is not clear of debris</option>
                            <option key='13' value='Other'>Other</option>                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
                    { this.state.complications == 'Other' ? (
                  <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Describe Other:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Tell us more!" onChange={(e) => this.setState({other_prob: e.target.value})}/>
                      </Col>
                    </Form.Group> ) : null
                  }                

                  {/* <Form.Group as={Row} style={{marginTop: "5%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      Total Price: ${this.state.price}.00                      
                    </Col>
                  </Form.Group> */}
                  <Form.Group as={Row} style={{marginTop: "5%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    *If any of the information included above does not match what is reviewed by the driver onsite, you will be held responsible for the additional costs.*                      
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} style={{marginTop: "5%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Link to={{ 
                        pathname: '/dropoff', state: { pass_params: this.state  }                        
                      }}>
                        <Button variant="primary" style={{backgroundColor: "#4C8FFB", color: "white"}} onClick={() => console.log(this.state)}>
                          Add Dropoff Information
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

export default CardsFooterPickup;
