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

class CardsFooterTos extends React.Component {
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
                        <h5 className="display-3">Terms of Service</h5>
                        {/* <p className="lead">Thank you for choosing Onward as your delivery service, we look forward to your business!</p> */}
                        <hr className="my-2" />
                        <p style={{fontSize: "10px"}}>
                        This Onward Terms of Service Agreement is an agreement between Onward Delivery, LLC ("Onward," "we," "us," or
"our") and connects you (the “User,” “Customer,” “Shipper,” “Pickup Customer” or “Drop off Customer”) with Motor
Carriers (each, with a "Driver” and a “Helper”) who will transport your freight/household goods, if and only if it is within
one of the current Motor Carrier’s route availability.
Defined Terms
1. “Onward” or “Onward Delivery, LLC”,: Onward refers to the company that owns the technology used to arrange
your transportation services. Onward refers to the company's customer service representatives that you will speak to
during the booking process. Onward refers to the company handling all payments from you.
2. “Carrier”: Carrier refers to the company that Onward contracts with to complete the transportation of the users
freight/household goods. Carrier refers to the company that employs or contracts with the Driver and Helper handling
and/or transporting the user’s freight. Carrier refers to the company that owns or leases the physical assets needed to
complete the transportation and delivery. This equipment includes, without limitation, the below items:
a. Box Truck or Straight Truck
b. Pallet Jacks
c. Hand Trucks or Dollies
d. Lift Gate
e. Moving Straps
f. Moving blankets
3. “Driver”: Driver refers to the person operating the physical truck which transport’s the users freight/household goods.
Driver refers to the person that works for the Carrier. Driver refers to the person that will actually move and/or
transport the users freight/household goods. Driver refers to the person that will obtain any necessary signatures at the
time of delivery.
4. “Helper”: Helper refers to the person that works for the Carrier. Helper refers to the person that will actually assist in
the movement and/or transportation of the users freight/household goods. Helper refers to the person that will assist in
obtaining any necessary signatures at the time of delivery. Helper refers to the person that will be riding in the
passenger seat of the truck.
5. “User”, “Customer”, “Pickup Customer”, “Drop off Customer”, or “Shipper”: User refers to the party that is
using the Onward Platform to move their goods from the pickup location to the drop off location. User refers to the
party that is responsible for submitting payment for the services rendered by Onward, the Carrier, the Driver and/or the
Helper. User refers to the party responsible for filling in the necessary information on the Onward Platform. Pickup
Customer refers to the party responsible for physically being at the pickup location at the time of pickup. Drop off
Customer refers to the party responsible for physically being at the drop off location at the time of drop off.

These Terms of Service ("Terms") apply to your access and use of the mobile application (the "App"), website ("Site") and other
online products and services (collectively, the "Onward Platform") of Onward Delivery, LLC.

{/* Page 2 of 12 */}

Accepting these Terms
BY DOWNLOADING THE APP OR OTHERWISE ACCESSING OR USING THE ONWARD PLATFORM, YOU AGREE
TO BE BOUND BY ALL OF THE TERMS. Please read all of the Terms before you use the Onward Platform. If a term does
not make sense to you, please let us know. If you don't agree to all of the Terms you may not use the Onward Platform.
Modifications
We reserve the right to change these Terms from time to time. For example, we may need to change these Terms if we release a new Site or App
feature. If we make changes, we will notify you by revising the date at the top of the Terms and, in some cases, we will provide you with additional
notice (such as adding a statement to our Site or sending you an email notification). We encourage you to review these Terms periodically to stay
informed about them.
Whenever we make changes to these Terms, they are effective when the revised Terms are posted unless we notify you
otherwise. If you continue to use the Onward Platform after the revised Terms have been posted, then you will be deemed to
have accepted the changes to these Terms.
Privacy Policy
For information about how we collect, use and share information about users of the Onward Platform, please see our Privacy
Policy at http://www.onwarddelivery.com/privacy.
Description of the Onward Platform
Through the Onward Platform, you can submit a request (a "Request") for a Carrier to pick up the item(s) you specify (each, an
"Item") for loading, unloading, transportation, moving, hauling, or lifting (collectively, the "Services"). You will receive a
price quote for the fee that will apply to completing your Request (the "Delivery Charges "). Once you submit the payment
information for the Request, your Request will be sent out to our network of Carriers. You will receive a notification through the
Onward Platform when a Carrier has accepted your Request, and you will be able to communicate with the Carrier and/or the
Onward Customer Service Representative throughout the Service using the Onward Platform to confirm and coordinate
certain logistics involved with completing your Request. You acknowledge and agree that you are responsible for timely and
accurate transportation and delivery specifications and description of the cargo in connection with any Request, including, but not
limited to , dimensions, weight, and any special handling or security requirements.
You represent and warrant that the items related to any Request are your personal property and you have all right, title and
permission to request and allow the loading, unloading, transportation, moving, packing, or lifting of any such items, and that the
performance of the Services by a Carrier, Driver and/or Helper will not result in violation of any third party's ownership or
privacy rights.
The Services constitute a technology platform that enables users of Onward’s App or Site provided as part of the Services (each,
an "Application") to arrange and schedule moving, transportation and/or logistics services with third party providers of such
Services, including independent third party moving and transportation providers and third party logistics providers under

{/* Page 3 of 12 */}

agreement with Onward or certain of Onward's subsidiaries ("Third Party Providers"). Unless otherwise agreed by Onward in
a separate written agreement with you, the Services are made available solely for your personal use.
YOU ACKNOWLEDGE THAT ONWARD IS FEDERALLY LICENSED AND REGISTERED AS A BROKER OF
FREIGHT SERVICES, THAT ONWARD DOES NOT PROVIDE TRANSPORTATION OR MOVING SERVICES, AND
DOES NOT FUNCTION AS A MOTOR CARRIER OR FREIGHT FORWARDER AS DEFINED BY THE UNITED STATES
DEPARTMENT OF TRANSPORTATION OR FEDERAL MOTOR CARRIER SAFETY ADMINISTRATION. IT IS
ACKNOWLEDGED AND AGREED THAT ONWARD’S RESPONSIBILITY UNDER THESE TERMS SHALL BE
LIMITED TO ARRANGING FOR, BUT NOT ACTUALLY PERFORMING, TRANSPORTATION AND/OR MOVEMENT
OF YOUR FREIGHT/HOUSEHOLD GOODS. ONWARD'S SERVICES MAY BE USED BY YOU TO REQUEST AND
ARRANGE TRANSPORTATION, MOVING OR LOGISTICS SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU
AGREE THAT ONWARD HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY
TRANSPORTATION, MOVING OR LOGISTICS SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS
THROUGH THE USE OF THE APPLICATIONS AND/OR ONWARD PLATFORM OTHER THAN AS EXPRESSLY SET
FORTH IN THESE TERMS.
ONWARD DOES NOT GUARANTEE THE SUITABILITY, SAFETY OR ABILITY OF THIRD-PARTY PROVIDERS. IT IS
SOLELY YOUR RESPONSIBILITY TO DETERMINE IF A THIRD-PARTY PROVIDER WILL MEET YOUR NEEDS AND
EXPECTATIONS. ONWARD WILL NOT PARTICIPATE IN DISPUTES BETWEEN YOU AND A THIRD-PARTY
PROVIDER. BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU MAY BE EXPOSED TO SITUATIONS
INVOLVING THIRD PARTY PROVIDERS THAT ARE POTENTIALLY UNSAFE, OFFENSIVE, HARMFUL TO MINORS,
OR OTHERWISE OBJECTIONABLE, AND THAT USE OF THIRD PARTY PROVIDERS IS AT YOUR OWN RISK AND
JUDGMENT. ONWARD SHALL NOT HAVE ANY LIABILITY ARISING FROM OR IN ANY WAY RELATED TO YOUR
TRANSACTIONS OR RELATIONSHIP WITH THIRD PARTY PROVIDERS.
Creating Accounts
When you create an account, you must maintain the security of your password and accept all risk that someone may access your
account without your permission. If you discover or suspect any Onward Platform security breaches, please let us know as soon
as possible. You represent and warrant to us that all information that you provide in connection with your account is accurate,
truthful, current and complete. Onward reserves the right to deny any account at our discretion.
Payment for Services
You must provide credit card information to submit a Request. You are responsible for paying the applicable Delivery Charges,
which includes (a) the cost of the Delivery Fee (pickup and delivery of cargo) (b) any accessorial charges, if applicable, such
as charges for wait time, time on site, excessive stair carries, additional men required, and any other service provide outside
the normal scope of the delivery, and (c) the Services Fee (a fee that covers Onward Platform maintenance and any credit
card processing fees). Once you submit a Request, we will place a temporary hold on the credit card account you provided in an
amount equal to 100% of the applicable Delivery Charges. Once you and the Carrier have verified that the Services are complete
via a signed proof of delivery receipt or, in the case of a curbside delivery, a picture of the delivered goods at the final resting

{/* Page 4 of 12 */}

place, you will have the option of paying an additional gratuity (a "Tip") to the Carrier’s Driver and/or Helper, and your credit
card account will be charged for the sum of the Delivery Charges and any Tip.
You agree to make all payments through the Onward Platform and will not pay any Carrier, Driver and/ Helper in cash or
means other than directly through the Onward Platform.
Proof of Delivery
Upon the completion of the pickup, the Customer that is listed as the Pickup Customer on the web based form at the time of
booking will be responsible for signing the POD. Upon the completion of the drop off and/or final delivery, the Customer that is
listed as the Drop off Customer on the web-based form or App at the time of booking, will be responsible for signing the POD. If
the delivery is a curbside delivery, a picture taken by the Carrier of the final resting place of the cargo is considered a POD. In
the event that there’s a claim for cargo loss or damage between the User and Carrier, Onward will place a hold on the User’s
credit card for 100% of the Delivery Charges until such time that the dispute is resolved.
Canceling a Request
If you cancel any Request (a) before the Carrier arrives at the pickup address, you will not be charged and the hold will be lifted
on your credit card. If you cancel any Request (b) after the Carrier arrives at the pickup location, but prior to the Carrier
performing any of the Services, your credit card will be charged 50% of the Delivery Charges. If cancellation occurs (c) after the
Carrier has begun to perform the Services, your credit card will be charged 100% of the Delivery Charges.
In the instance (d) where the Carrier attempts to fulfill the Request but cannot do so for reasons outside the Drivers and/or
Helpers control (for example an unsafe jobsite with debris, a blocked walkway, aggressive dog(s), inaccessible/locked gates,
etc.), your credit card will be charged 50% of the applicable Delivery Charges. If the (e) Pickup Customer's order is picked up
and the Drop off Customer is not available to accept the freight, the credit card will be charged 100% of the applicable Delivery
Charges. If you have any questions regarding our cancelation policy, please see the friendly visual on
http://www.onwarddelivery.com/cancelationpolicy.
Right to Use the Onward Platform
On the condition that you fully comply with these Terms, Onward grants you a limited, nonexclusive, non-transferable and
revocable license to access and use the Onward Platform for your own personal use. However, the App may only be used on
mobile devices that you own or control. The terms of this license will also govern any upgrades provided by Onward that replace
and/or supplement the original App, unless the upgrade is accompanied by a separate license, in which case the terms of that
license will govern.
Except as expressly authorized by these Terms, you may not (a) modify, disclose, alter, translate or create derivative works of the
Onward Platform, (b) license, sublicense, resell, distribute, lease, rent, lend, transfer, assign or otherwise dispose of the Onward
Platform, (c) disassemble, decompile or reverse engineer any of the software components of the Onward Platform, (d) copy,
frame or mirror any part of the Onward Platform, (e) interfere with or disrupt the integrity or performance of the Onward
Platform, or (f) attempt to gain unauthorized access to the Onward Platform or its related systems or networks.
Prohibited Use of the Onward Platform

{/* Page 5 of 12 */}

You may not post or otherwise make available on or through the Onward Platform any of the following:
Private information of any other persons (including names, email addresses, phone numbers, Social Security numbers and
financial information);
Content that is libelous, defamatory, abusive, offensive or hateful;
Content that is obscene, pornographic, indecent or sexually explicit, depicts graphic, excessive or gratuitous violence;
Content that is illegal, harmful or offensive or that would encourage, solicit, foster, glorify or provide instructions for any
criminal or civil offense;
Content that may infringe, misappropriate or violate any intellectual property rights, rights of privacy, rights of publicity or any
other rights of others;
Viruses, corrupted data or other harmful, disruptive or destructive files or code;
Content that, in Onward’s judgment, is objectionable, may restrict or inhibit another from enjoying the Onward Platform or
may expose Onward or users of the Onward Platform to harm or liability of any type; and/or
Content that you are contractually or legally required to keep confidential.
Also, you may not do any of the following in connection with the Onward Platform or other users:
Use the Onward Platform in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully
enjoying the Onward Platform or that could damage, disable, overburden or impair the functioning of the Onward Platform;
Collect any personal information about other users;
Intimidate, threaten, stalk, bully or otherwise harass other users;
Post spam or commercial messages through the Onward Platform;
Create an account or submit a Request if you are not at least 18 years of age;
Use the Onward Platform for any illegal or unauthorized purpose or to engage in, encourage or promote any activity that is
unlawful or that violates these Terms; or
Circumvent or attempt to circumvent any filtering, security measures, rate limits or other features designed to protect the
Onward Platform, its users, or third parties.
Your use of the Onward Platform is at your own risk. Onward is not responsible or liable for the conduct of, or your
interactions with, any other users (whether online or offline) or for any related damage or harm. As a provider of interactive
services, Onward is not liable for the content of any Requests. Although we have no obligation to screen, edit or monitor
Requests, we reserve the right, and have the discretion, to screen, edit or remove any Requests at any time, for any reason and
without notice.
Disputes between You and a Carrier, Driver and/or Helper
The Onward Platform is merely a neutral means of connecting you with Carriers and their Drivers and/or Helpers. We do not
represent or warrant that any Carrier, Driver and/or Helper will meet your expectations or instructions in performing any
Services. Any dispute that you may have regarding the performance of any Services, including any dispute related to the time,
place, and manner of doing so, is between you and the applicable Carrier. Onward is not responsible for the replacement or
repair of any of your personal property that may be damaged by a Carrier, Driver and/or Helper while performing the Services.
Onward will place a hold on the User’s credit card until such time that the dispute is resolved.

{/* Page 6 of 12 */}

Please report any suspected illegal or unethical behavior by a Carrier, Driver and/or Helper during the performance of any
Services to: support@onwarddelivery.com.

Reporting and Removal
Onward users may report content to Onward that they think violates these Terms, and Onward may remove such content,
suspend or terminate the account of the user who posted or otherwise made available such content and/or take additional action to
enforce these Terms against such user.
Also, in accordance with the Digital Millennium Copyright Act (DMCA) and other applicable law, Onward has adopted a policy
of terminating, in appropriate circumstances and at Onward’s sole discretion, subscribers or account holders who are deemed to
be repeat infringers. Onward may also at its sole discretion limit access to the Onward Platform or terminate the accounts of any
users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
If you believe that anything on the Onward Platform infringes upon any copyright that you own or control, you may file a
notification with Onward’s Designated Agent as set forth below:
Designated Agent: Onward Delivery, LLC
Address of Designated Agent: 4350 Kearney Street, Unit A, Denver, CO 80216
Email Address of Designated Agent: copyright@onwarddelivery.com
Please see 17 U.S.C. § 512(c)(3) for the requirements of a proper notification. If you knowingly misrepresent in your notification
that the material or activity is infringing, you may be liable for any damages, including costs and attorneys' fees, incurred by
Onward or the alleged infringer as the result of Onward relying upon such misrepresentation in removing or disabling access to
the material or activity claimed to be infringing.
Onward’s Rights
As between you and Onward, all information, materials and content of the Onward Platform, including text, graphics, data,
formatting, graphs, designs, HTML, look and feel, photographs, music, sounds, images, software, videos, designs, typefaces,
source and object code, format, queries, algorithms and other content is owned by Onward or is used with permission. When you
create, share, link to, or otherwise make available any Requests, you grant us a nonexclusive, royalty-free, perpetual, irrevocable
and fully sub-licensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute,
perform and display such Requests throughout the world in any manner or media, on or off the Onward Platform. Onward
reserves all rights not expressly set forth in these Terms. You hereby irrevocably waive in favor of Onward any and all moral
rights that you may possess in or to any Requests.
Feedback
Any suggestions, comments or other feedback you give us about the Onward Platform (the "Feedback") will constitute our
confidential information. We are free to use, disclose, reproduce, license, distribute and exploit this Feedback as we see fit,
without compensation to you or any obligation or restriction because of any intellectual property rights or otherwise.

{/* Page 7 of 12 */}

Location Information
The Onward Platform collects location information and it will be used and disclosed as set forth in the Privacy Policy at
http://www.onwarddelivery.com/privacy.
By accepting these Terms or using the Site or App you affirmatively consent to Onward’s collection, use, disclosure and storage
of your location information. You may revoke your consent with respect to Onward’s collection, use, disclosure and storage of
your location information at any time by deleting the App from your mobile device, or by changing the privacy settings on your
mobile device. Please know that if you revoke your consent by doing one of the foregoing or you delete or deactivate your
account, we may retain certain information as required by law or for other legitimate business purposes. We may also retain
cached or archived copies of information about you for a certain period.
If you consent to our collection of location information and you do not subsequently stop the collection of this location
information, Onward will continue to collect this location information. If you consent to our collection of location information,
subsequently stop the collection of this location information and later consent to the collection of this location information,
Onward will resume the collection of location information.
Onward takes reasonable measures to protect your location information from loss, theft, misuse and unauthorized access,
disclosure, alteration and destruction.
Disclaimers
EXCEPT AS REQUIRED OTHERWISE OF ONWARD BY APPLICABLE LAW, THE ONWARD PLATFORM
AND ANY OTHER SERVICE AND CONTENT INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU
THROUGH THE ONWARD PLATFORM (INCLUDING REQUESTS) ARE PROVIDED TO YOU ON AN "AS IS," "AS
AVAILABLE" BASIS WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND. TO THE FULLEST
EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESSED OR IMPLIED,
REGARDING THE ONWARD PLATFORM AND ITS RELATED MATERIALS, INCLUDING THEIR FITNESS FOR A

PARTICULAR PURPOSE, THEIR QUALITY, THEIR MERCHANTABILITY, THEIR TITLE, OR THEIR NON-
INFRINGEMENT. ONWARD DOES NOT WARRANT THAT THE ONWARD PLATFORM IS COMPLETELY SECURE

OR IS FREE FROM BUGS, INTERRUPTIONS, ERRORS, OTHER PROGRAM LIMITATIONS, OR THAT THE ONWARD
PLATFORM WILL BE AVAILABLE CONSTANTLY AND IN AN UNINTERRUPTED MANNER AND ANY OTHER
IMPLIED WARRANTY ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE. ONWARD DOES
NOT WARRANT THAT THE APP OR SITE, OR THE ONWARD PLATFORM THAT MAKES THEM AVAILABLE, IS
FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU (AND NOT ONWARD) ASSUME THE ENTIRE COST
OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION OF PROBLEMS CAUSED BY VIRUSES OR OTHER
HARMFUL COMPONENTS. SOME STATES DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE
ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. IN THAT EVENT, ANY IMPLIED WARRANTIES ARE LIMITED IN
DURATION TO 60 DAYS FROM THE DATE OF CREATION OF AN ACCOUNT IN THE ONWARD PLATFORM.

{/* Page 8 of 12 */}

Limitation of Liability
TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT WILL ONWARD BE LIABLE TO YOU OR ANY THIRD
PARTY FOR ANY DIRECT, INCIDENTAL, SPECIAL, INDIRECT, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
DAMAGES WHATSOEVER INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROPERTY, PHYSICAL
LOSSES, DEATH OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO THESE TERMS, THE
ONWARD PLATFORM (INCLUDING THE APP AND ANY REQUEST), SERVICES PERFORMED BY THE CARRIER,
DRIVERS AND/OR HELPERS, AND/OR THIRD-PARTY SERVICES OR MATERIALS, HOWEVER CAUSED,
REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE,
WHETHER ACTIVE, PASSIVE OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY) AND
EVEN IF ONWARD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME STATES DO NOT
ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS
LIMITATION MAY NOT APPLY TO YOU.
ONWARD SHALL NOT BE LIABLE TO YOU FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR
CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY
DAMAGE, EVEN IF ONWARD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ONWARD SHALL
NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES INCURRED BY YOU ARISING OUT OF: (i) YOUR
USE OF OR RELIANCE ON THE SERVICES OR ONWARD PLATFORM OR YOUR INABILITY TO ACCESS OR USE
THE SERVICES OR ONWARD PLATFORM; OR (ii) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND
ANY THIRD PARTY PROVIDER, EVEN IF ONWARD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
DAMAGES. ONWARD SHALL NOT BE LIABLE FOR DELAY OR FAILURE IN PERFORMANCE OF THE ONWARD
PLATFORM OR SERVICES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED IN THESE
TERMS, IN NO EVENT SHALL ONWARD’S TOTAL LIABILITY TO YOU IN CONNECTION WITH THE ONWARD
PLATFORM OR REQUESTS MADE THEREUNDER FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION
EXCEED FIVE HUNDRED U.S. DOLLARS (US $500).
Damages
It is understood and agreed that Onward is a Broker and not a Carrier and, as a result, Onward shall not be held liable for loss,
damage or delay in the transportation or movement of User’s property. User is advised that there may be strict time limits within
which it must file any claims it has for cargo loss or damage with a Carrier. If User believes it has a cargo loss or damage claim
against Carrier User should promptly undertake efforts to ascertain any such time limits as well as the process associated with
asserting a claim against Carrier.
Indemnification
You will defend us from and against any actual or threatened suits, actions, proceedings (at law or in equity), and claims, and
indemnify us for any and all damages, payments, deficiencies, fines, judgments, settlements, liabilities, losses, costs, and
expenses (including reasonable attorneys' fees, costs, penalties, interest, and disbursements) arising from or related to any of your
conduct with respect to the Onward Platform or your violation (or alleged violation) of these Terms or the rights of any third
party by you or any person using your Onward account.

{/* Page 9 of 12 */}

Third Party Software
The App you download consists of a package of components, including certain third-party software provided under separate
third-party license terms. Your use of this third party software in conjunction with the App in a manner consistent with these
Terms is permitted.
Discontinuance of the Onward Platform
Onward reserves the right in our discretion to discontinue, temporarily or permanently, the Onward Platform and/or any
features, information, materials or content on the Onward Platform with or without providing notice to you. Onward will not be
liable to you or any third party for any changes or discontinuance of the Onward Platform or any part of the Onward Platform.
Consent to Electronic Communications
By using the Onward Platform, you agree that we may communicate with you electronically via email or App push notifications
regarding your use of the Onward Platform and that any notices, agreements, disclosures or other communications that we send
to you electronically via email or App push notifications will satisfy any legal communication requirements, including that the
communications be in writing. To withdraw your consent from receiving electronic notice via email, please notify us at
support@onwarddelivery.com.
Suspension and Termination
Onward may suspend or terminate your rights to access or use the Onward Platform (including the App) for any reason or for
no reason at all and with or without notice at Onward’s discretion. Suspension or termination may include restricting access to
and use of the App. All of these Terms (excluding the license grant) will survive any termination or suspension.
Governing Law; Arbitration
PLEASE READ THE FOLLOWING PARAGRAPHS CAREFULLY BECAUSE THEY REQUIRE YOU TO ARBITRATE
DISPUTES WITH ONWARD AND LIMIT THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM ONWARD.
These Terms shall be governed by and construed in accordance with the laws of the State of Colorado and, as applicable, the
United States of America, without resort to any conflict of law provisions.
In the event of any controversy or claim arising out of or relating in any way to these Terms or the Onward Platform, you and
Onward agree to consult and negotiate with each other and, recognizing your mutual interests, try to reach a solution satisfactory
to both parties. If we do not reach settlement within a period of 60 days, then either of us may, by notice to the other demand
mediation under the mediation rules of the American Arbitration Association’s regional office in Denver, Colorado. We both
give up our right to litigate our disputes and may not proceed to arbitration without first trying mediation provided, however, you
and Onward are NOT required to arbitrate any dispute in which either party seeks equitable and other relief from the alleged
unlawful use of copyrights, trademarks, trade names, logos, trade secrets or patents. Whether the dispute is heard in arbitration or
in court, you and Onward will not commence against the other a class action, class arbitration or other representative action or
proceeding.

{/* Page 10 of 12 */}

If settlement is not reached within 60 days after service of a written demand for mediation, any unresolved controversy or claim
will be resolved by arbitration in accordance with the rules of the American Arbitration Association’s regional office in Denver,
Colorado. The language of all proceedings and filings will be English. The arbitrator will render a written opinion including
findings of fact and law and the award and/or determination of the arbitrator will be binding on the parties, and their respective
administrators and assigns, and will not be subject to appeal. Judgment may be entered upon the award of the arbitrator in any
court of competent jurisdiction. The expenses of the arbitration will be shared equally by the parties unless the arbitrator
determines that the expenses will be otherwise assessed, and the prevailing party may be awarded its attorneys' fees and expenses
by the arbitrator. It is the intent of the parties that, barring extraordinary circumstances, arbitration proceedings will be concluded
within 90 days from the date the arbitrator is appointed. The arbitrator may extend this time limit only if failure to do so would
unduly prejudice the rights of the parties. Failure to adhere to this time limit will not constitute a basis for challenging the award.
Consistent with the expedited nature of arbitration, pre-hearing information exchange will be limited to the reasonable production
of relevant, non-privileged documents, carried out expeditiously.
For any disputes that are not handled by arbitration, you and Onward agree that any action at law or in equity arising out of or
relating to these Terms shall be filed only in the state and federal courts located in the City and County of Denver, Colorado and
you and Onward hereby irrevocably and unconditionally consent and submit to the exclusive jurisdiction of such courts over any
suit, action or proceeding arising out of these Terms or the use of the Onward Platform.
General
Failure to enforce any part of these Terms in one or more instances does not constitute a waiver of Onward’s right to enforce the
same or other parts of these Terms in other instances. If any provision of these Terms is or becomes unlawful, void or otherwise
unenforceable (including the warranty disclaimers and liability limitations above), then that provision will be deemed superseded
by a valid, enforceable provision that most closely matches the intent of the original provision, and the remaining provisions of
these Terms will continue in full force and effect. The section headings of these Terms are for reference purposes only and will
not affect the meaning or interpretation of these Terms.
These Terms (and the other policies and terms referred to above) make up the entire agreement between you and us regarding the
Onward Platform and the Services, and they supersede any prior agreements that may have been made.
Text Messaging
By creating an account, you agree that Onward may send you informational text (SMS) messages as part of the normal business
operation of your use of the Onward Platform. You acknowledge that opting out of receiving text (SMS) messages may impact
your use of the Onward Platform.
Promotional Codes
Onward may, in Onward's sole discretion, create promotional codes that may be redeemed for account credit or other features
or benefits related to the Onward Platform and/or a Third Party Provider's Services, subject to terms that Onward establishes on
a per promotional code basis ("Promo Codes"). You agree that Promo Codes: (i) must be used for the intended audience and
purpose, and in a lawful manner; (ii) may not be duplicated, sold or transferred in any manner, or made available to the general
public, unless expressly permitted by Onward; (iii) may be disabled by Onward at any time for any reason and without liability;

{/* Page 11 of 12 */}

(iv) may only be used pursuant to the specific terms that Onward establishes for such Promo Code; (v) are not valid for cash;
and (vi) may expire prior to your use. Onward reserves the right to withhold or deduct credits or other features or benefits
obtained through the use of Promo Codes by you or any other user in the event that Onward determines or believes that the use
or redemption of the Promo Code was in error, fraudulent, illegal, or in violation of the applicable Promo Code terms or these
Terms.
Network Access and Devices
You are responsible for obtaining the data network access necessary to use the Onward Platform. Your mobile network's data and
messaging rates and fees may apply if you access or use the Onward Platform from a wireless-enabled device. You are
responsible for acquiring and updating compatible hardware or devices necessary to access and use the Onward Platform and
Applications and any updates thereto. Onward does not guarantee that the Onward Platform, or any portion thereof, will function
on any particular hardware or devices. In addition, the Onward Platform may be subject to malfunctions and delays inherent in
the use of the Internet and electronic communications.
Service Restrictions
User will not use Onward’s Platform to have Carrier’s transport or move weapons, prescription drugs, illegal drugs, alcohol,
tobacco, hazardous materials, food, animals or people, or other items prohibited by law or not allowed by the Carrier’s
DOT/FMCSA operating authority.
Users are required to be onsite at the time of pickup and delivery. Users are required to sign the POD at the time of pickup and
delivery. If a User is not onsite during the pickup or delivery, and the delivery was not specified as a curbside delivery, the User
is subject to being charged a cancellation fee.
Contact Us
If you have any questions about these Terms, please email us at support@onwarddelivery.com or send a letter to:
Onward Delivery, LLC.
4350 Kearney Street, Unit A
Denver, CO 80216
Notice Regarding Apple
Apple, Inc. and Other Third-Party Beneficiaries. You acknowledge and agree that Apple, Inc. ("Apple") and its subsidiaries are
third-party beneficiaries of these Terms and further that (a) upon your acceptance of these Terms, Apple will have the right (and
will be deemed to have accepted the right) to enforce these Terms against you as a third-party; (b) this Agreement is between you
and Onward only, and not Apple; (c) Onward , and not Apple, is solely responsible for the App and the content thereof; (d)
Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (e) to the maximum
extent permitted by applicable law, Apple will have no warranty obligation with respect to the App; and Onward, not Apple, will
be responsible for any claims, losses, liabilities, damages, costs or expenses attributable to any failure of the App to conform to
any applicable warranty; (f) in the event of any third party claim that the App or your possession and use of that App infringes
that third party's intellectual property rights, Apple will not be responsible for the investigation, defense, settlement and discharge
of any such intellectual property infringement claim; and (g) Apple will not be responsible for addressing any of your claims or

{/* Page 12 of 12 */}

any third party claims relating to the App or your possession and/or use of the App, including, but not limited to: (i) product
liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims
arising under consumer protection or similar legislation.
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

export default CardsFooterTos;
