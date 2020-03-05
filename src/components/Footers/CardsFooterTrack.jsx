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
            bill_cunt: '',
            item_id: null,
            item_stuff: null,
            item_exists: null,

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
    getOrderStatus = async () => {
      await fetch('https://us-central1-onward-63d91.cloudfunctions.net/getOrder', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({              
              orderinfo: {
                  item_id: this.state.item_id
              }
          })
        }).then((response) => {
          return response.json();
        })
        .then((myJson) => {
          // this.setState({order_id: myJson[0].id.substr(1)});
          // console.log(this.state);
          // let _id = myJson[0].id.substr(1);
          // console.log(_id);
          // this.setState({order_id: _id});
          try {
            if (typeof myJson.items.item) {
              // console.log("cannot find your order!")
              this.setState({item_exists: true, item_stuff: myJson.items.item })
              console.log(myJson.items.item);
  
            } 
            else {
              console.log("cannot find your order!")
              this.setState({item_exists: false})
            }

          }
          catch {
            console.log("cannot find your order!")
            this.setState({item_exists: false})
          }
          
          // if (typeof myJson.items.item === 'undefined') {
          //   console.log("cannot find your order!")
          //   // console.log(myJson.items.item);

          // } 
          // else {
          //   console.log("cannot find your order!")
          // }

          // let x = myJson.clientSecret;
          return myJson;
        })

  }
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row>
            { this.state.item_exists == true ? (
              <Col className="mb-5 mb-lg-0" md="12">
                <div>
                    <Jumbotron>
                        {/* <h1 className="display-3">Your order was successfully placed!</h1> */}
                        <p className="lead">Order Details</p>
                        <hr className="my-2" />
                        <p>Order ID: {this.state.item_id}</p>
                        <p>Pickup Address: {this.state.item_stuff.pickup_info.pu_address} {this.state.item_stuff.pickup_info.pu_floor}, {this.state.item_stuff.pickup_info.pu_state} {this.state.item_stuff.pickup_info.pu_city} {this.state.item_stuff.pickup_info.pu_zip} </p>
                        <p>Pickup Date and Time: Will be confirmed via email shortly.</p>
                        <p>Delivery Address: {this.state.item_stuff.delivery_info.del_address} {this.state.item_stuff.delivery_info.del_floor}, {this.state.item_stuff.delivery_info.del_city} {this.state.item_stuff.delivery_info.del_state} {this.state.item_stuff.delivery_info.del_zip} </p>
                        <p>Delivery Date and Time: Will be confirmed via email shortly.</p>
                        <p>Charged: ${this.state.item_stuff.price}</p>
                        
                        <p className="lead">
                        {/* <Button disabled color="primary">Email Confirmation</Button> */}
                        </p>
                    </Jumbotron>
                </div>
                <Card className="card-lift shadow border-0">
                                    
                </Card>
              </Col>) : null
                  }   
              <Col className="mb-5 mb-lg-0" md="12">
                <Card className="card-lift shadow border-0">
                <Form style={{margin: "5%"}}>                  

                  <Form.Group as={Row} controlId="formHorizontalBillAdd">
                      <Form.Label column sm={2}>
                        Order Number:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="#" onChange={(e) => this.setState({item_id: e.target.value})}/>
                      </Col>
                    </Form.Group>

                  <Form.Group as={Row} style={{marginTop: "5%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      {/* <Link to="/confirmation" > */}
                      { this.state.item_exists == false ? (                              
                        <p className="lead">Cannot find your order!</p>                                                            
                ) : null
                  } 
                        <Button variant="primary" style={{backgroundColor: "#4C8FFB", color: "white"}} onClick={() => this.getOrderStatus()}>
                          Track Your Order
                        </Button>
                      {/* </Link> */}
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
