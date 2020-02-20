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

class CardsFooterNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        phone: '',
        item_count: 1,
        pu_location_type: '',
        pickup_other: '',
        drop_location_type: '',
        drop_other: '',
        one_weight: '',
        one_height: '',
        one_length: '',
        one_width: '',
        one_desc: '',
        two_weight: '',
        two_height: '',
        two_length: '',
        two_width: '',
        two_desc: '',
        three_weight: '',
        three_height: '',
        three_length: '',
        three_width: '',
        three_desc: '',
        four_weight: '',
        four_height: '',
        four_length: '',
        four_width: '',
        four_desc: '',
        five_weight: '',
        five_height: '',
        five_length: '',
        five_width: '',
        five_desc: '',
        pu_addy: '',
        pu_notes: '',
        del_addy: '',
        del_notes: '',
        del_city: this.props.destinations.deliverycity,
        pu_city: this.props.destinations.pickupcity
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

                  <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column sm={2}>
                        Name
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Elizabeth Holmes" onChange={(e) => this.setState({name: e.target.value})}/>
                      </Col>
                    </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                      Phone
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="number" placeholder="Phone Number" onChange={(e) => this.setState({phone: e.target.value})}/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Pickup Info
                      </Form.Label>
                      <Col sm={10}>
                      <Form.Control size="md" as="select" name="dest" defaultValue="Residence" id='asdf' onChange={(e) => this.setState({pu_location_type: e.target.value})}>
                        <option key='1' value='Residence'>Residence</option>
                        <option key='2' value='Business - no dock'>Business - no dock</option>
                        <option key='3' value='Business -dock'>Business -dock</option>
                        <option key='4' value='Convention Center Pickup'>Convention Center Pickup</option>
                        <option key='5' value='Hospital Pickup'>Hospital Pickup</option>
                        <option key='6' value='Mall Pickup'>Mall Pickup</option>
                        <option key='7' value='Hotel Pickup'>Hotel Pickup</option>
                        <option key='8' value='School/University'>School/University</option>
                        <option key='9' value='Military Base Pickup'>Military Base Pickup</option>
                        <option key='10' value='Donation Delivery'>Donation Delivery</option>
                        <option key='11' value='Junk Removal'>Junk Removal</option>
                        <option key='12' value='Other'>Other</option>
                    </Form.Control>
                        {/* <Form.Control type="text" placeholder="Residential/Business/Etc." onChange={(e) => this.setState({item: e.target.value})}/> */}
                      </Col>
                    </Form.Group>
                    { this.state.pu_location_type == 'Other' ? (
                    <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Describe Other:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Tell us more!" onChange={(e) => this.setState({pickup_other: e.target.value})}/>
                      </Col>
                    </Form.Group> ) : null
                  }                       
                    {/* <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Describe Other:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Tell us more!" onChange={(e) => this.setState({pickup_other: e.target.value})}/>
                      </Col>
                    </Form.Group> */}
                  <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Dropoff Info
                      </Form.Label>
                      <Col sm={10}>
                      <Form.Control size="md" as="select" name="dest" defaultValue="Residence" id='asdf' onChange={(e) => this.setState({drop_location_type: e.target.value})}>
                        <option key='111' value='Residence'>Residence</option>
                        <option key='211' value='Business - no dock'>Business - no dock</option>
                        <option key='311' value='Business -dock'>Business -dock</option>
                        <option key='411' value='Convention Center Pickup'>Convention Center Pickup</option>
                        <option key='511' value='Hospital Pickup'>Hospital Pickup</option>
                        <option key='611' value='Mall Pickup'>Mall Pickup</option>
                        <option key='711' value='Hotel Pickup'>Hotel Pickup</option>
                        <option key='811' value='School/University'>School/University</option>
                        <option key='911' value='Military Base Pickup'>Military Base Pickup</option>
                        <option key='101' value='Donation Delivery'>Donation Delivery</option>
                        <option key='111' value='Junk Removal'>Junk Removal</option>
                        <option key='121' value='Other'>Other</option>
                    </Form.Control>
                        {/* <Form.Control type="text" placeholder="Residential/Business/Etc." onChange={(e) => this.setState({item: e.target.value})}/> */}
                      </Col>
                    </Form.Group>
                  { this.state.drop_location_type == 'Other' ? (
                  <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Describe Other:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Tell us more!" onChange={(e) => this.setState({drop_other: e.target.value})}/>
                      </Col>
                    </Form.Group> ) : null
                  }      
                  {/* <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Describe Other:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Tell us more!" onChange={(e) => this.setState({drop_other: e.target.value})}/>
                      </Col>
                    </Form.Group> */}
                  <Form.Group as={Row} controlId="formHorizontalItem">
                      <Form.Label column sm={2}>
                        Item Count
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="What are we picking up?" onChange={(e) => this.setState({item: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" defaultValue="Residence" id='asdf' onChange={(e) => this.setState({item_count: e.target.value})}>
                          <option key='1121' value='1'>1</option>
                          <option key='2121' value='2'>2</option>
                          <option key='3211' value='3'>3</option>
                          <option key='4121' value='4'>4</option>
                          <option key='5121' value='5'>5</option>                          
                        </Form.Control>
                      </Col>
                    </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalWeight">
                    <Form.Label column sm={2}>
                      Item 1 Weight
                    </Form.Label>
                    <Col sm={10}>
                      {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                      <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({one_weight: e.target.value})}>
                          <option key='11321' value='1-50lbs'>1-50lbs</option>
                          <option key='21321' value='50-100 lbs'>50-100 lbs</option>
                          <option key='32131' value='100-150 lbs'>100-150 lbs</option>
                          <option key='41231' value='100-150 lbs'>100-150 lbs</option>
                                                   
                        </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalWeight">
                    <Form.Label column sm={2}>
                      Item 1 Length
                    </Form.Label>
                    <Col sm={10}>
                      {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                      <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({one_length: e.target.value})}>
                          <option key='1131321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                          <option key='2133211' value='50-100 lbs'>37-72" (3-6 ft)</option>
                          <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                          <option key='1133211' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                          <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                          <option key='3231311' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                        
                        </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalWeight">
                    <Form.Label column sm={2}>
                      Item 1 Width
                    </Form.Label>
                    <Col sm={10}>
                      {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                      <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({one_width: e.target.value})}>
                          <option key='11113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                          <option key='2113321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                          <option key='3213131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                          <option key='1113321' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                          <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                          <option key='3213131' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                       
                        </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalWeight">
                    <Form.Label column sm={2}>
                      Item 1 Height
                    </Form.Label>
                    <Col sm={10}>
                      {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                      <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({one_height: e.target.value})}>
                          <option key='113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                          <option key='213321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                          <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option>                          
                                                   
                        </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalDesc">
                      <Form.Label column sm={2}>
                        Item 1 Info
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Big Couch" onChange={(e) => this.setState({one_desc: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    { this.state.item_count > 1 ? (
                      <div>
                      <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 2 Weight
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({two_weight: e.target.value})}>
                            <option key='11321' value='1-50lbs'>1-50lbs</option>
                            <option key='21321' value='50-100 lbs'>50-100 lbs</option>
                            <option key='32131' value='100-150 lbs'>100-150 lbs</option>
                            <option key='41231' value='100-150 lbs'>100-150 lbs</option>
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 2 Length
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({two_length: e.target.value})}>
                            <option key='1131321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2133211' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1133211' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3231311' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                        
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 2 Width
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({two_width: e.target.value})}>
                            <option key='11113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2113321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='3213131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1113321' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3213131' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                       
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 2 Height
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({two_height: e.target.value})}>
                            <option key='113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='213321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option>                          
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                          Item 2 Info
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text" placeholder="Big Couch" onChange={(e) => this.setState({two_desc: e.target.value})}/>
                        </Col>
                      </Form.Group>
                      </div>
                    ) : null
                  }     


                    { this.state.item_count > 2 ? (
                      <div>
                      <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 3 Weight
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({three_weight: e.target.value})}>
                            <option key='11321' value='1-50lbs'>1-50lbs</option>
                            <option key='21321' value='50-100 lbs'>50-100 lbs</option>
                            <option key='32131' value='100-150 lbs'>100-150 lbs</option>
                            <option key='41231' value='100-150 lbs'>100-150 lbs</option>
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 3 Length
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({three_length: e.target.value})}>
                            <option key='1131321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2133211' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1133211' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3231311' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                        
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 3 Width
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({three_width: e.target.value})}>
                            <option key='11113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2113321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='3213131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1113321' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3213131' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                       
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 3 Height
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({three_height: e.target.value})}>
                            <option key='113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='213321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option>                          
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                          Item 3 Info
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text" placeholder="Big Couch" onChange={(e) => this.setState({three_desc: e.target.value})}/>
                        </Col>
                      </Form.Group>
                      </div>
                    ) : null
                  }     
                    { this.state.item_count > 3 ? (
                      <div>
                      <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 4 Weight
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({four_weight: e.target.value})}>
                            <option key='11321' value='1-50lbs'>1-50lbs</option>
                            <option key='21321' value='50-100 lbs'>50-100 lbs</option>
                            <option key='32131' value='100-150 lbs'>100-150 lbs</option>
                            <option key='41231' value='100-150 lbs'>100-150 lbs</option>
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 4 Length
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({four_length: e.target.value})}>
                            <option key='1131321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2133211' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1133211' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3231311' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                        
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 4 Width
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({four_width: e.target.value})}>
                            <option key='11113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2113321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='3213131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1113321' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3213131' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                       
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 4 Height
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({four_height: e.target.value})}>
                            <option key='113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='213321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option>                          
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                          Item 4 Info
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text" placeholder="Big Couch" onChange={(e) => this.setState({four_desc: e.target.value})}/>
                        </Col>
                      </Form.Group>
                      </div>
                    ) : null
                  }   
                  { this.state.item_count > 4 ? (
                      <div>
                      <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 5 Weight
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({five_weight: e.target.value})}>
                            <option key='11321' value='1-50lbs'>1-50lbs</option>
                            <option key='21321' value='50-100 lbs'>50-100 lbs</option>
                            <option key='32131' value='100-150 lbs'>100-150 lbs</option>
                            <option key='41231' value='100-150 lbs'>100-150 lbs</option>
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 5 Length
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({five_length: e.target.value})}>
                            <option key='1131321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2133211' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1133211' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3231311' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                        
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 5 Width
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({five_width: e.target.value})}>
                            <option key='11113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='2113321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='3213131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option> 
                            <option key='1113321' value='109-144" (9-12 ft)'>109-144" (9-12 ft)</option>
                            <option key='2113321' value='145-180" (12-15 ft)'>145-180" (12-15 ft)</option>
                            <option key='3213131' value='> 180" (> 15 ft)'>> 180" (> 15 ft)</option>                       
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalWeight">
                      <Form.Label column sm={2}>
                        Item 5 Height
                      </Form.Label>
                      <Col sm={10}>
                        {/* <Form.Control type="text" placeholder="100 lbs" onChange={(e) => this.setState({weight: e.target.value})}/> */}
                        <Form.Control size="md" as="select" name="dest" id='asdf' onChange={(e) => this.setState({five_height: e.target.value})}>
                            <option key='113321' value='0-36" (0-3 ft)'>0-36" (0-3 ft)</option>
                            <option key='213321' value='50-100 lbs'>37-72" (3-6 ft)</option>
                            <option key='323131' value='73-108" (6-9 ft)'>73-108" (6-9 ft)</option>                          
                                                     
                          </Form.Control>
                      </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                          Item 5 Info
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text" placeholder="Big Couch" onChange={(e) => this.setState({five_desc: e.target.value})}/>
                        </Col>
                      </Form.Group>
                      </div>
                    ) : null
                  }                       












































                    <Form.Group as={Row} controlId="formHorizontalPickup">
                      <Form.Label column sm={2}>
                        Pickup Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="999 Theranos St., Denver CO 80013" onChange={(e) => this.setState({pu_addy: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPUNotes">
                      <Form.Label column sm={2}>
                        Pickup Notes
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Very Delicate Furniture, be careful!" onChange={(e) => this.setState({pu_notes: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDest">
                      <Form.Label column sm={2}>
                        Delivery Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="1122 Enron Ave., Colorado Springs CO 80011" onChange={(e) => this.setState({del_addy: e.target.value})}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDNotes">
                      <Form.Label column sm={2}>
                        Delivery Notes
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="The couch is quite large!" onChange={(e) => this.setState({del_notes: e.target.value})}/>
                      </Col>
                    </Form.Group>
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
                      <Link to={{ 
                        pathname: '/payment', state: { pass_params: this.state  }                        
                      }}>
                        <Button variant="primary" style={{backgroundColor: "#4C8FFB", color: "white"}} onClick={() => console.log(this.state)}>
                          Continue to Payment
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

export default CardsFooterNew;
