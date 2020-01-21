import React, { Component } from 'react';
import Home from './HomeComponent';
import Order from './OrderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import CardsFooter from "components/Footers/CardsFooter.jsx";
import DemoNavbar from "./Navbars/DemoNavbar.jsx";

//state from redux store that is given as props to Main
// const mapStatetoProps = state => {
//     return {
//         dishes: state.dishes,
//         comments: state.comments,
//         promotions: state.promotions,
//         leaders: state.leaders
//     }
      
// }

//gets dispatch from store
// const mapDispatchToProps = dispatch => ({
//     postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
//     fetchDishes: () => { dispatch(fetchDishes())},
//     resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
//     fetchComments: () => dispatch(fetchComments()),
//     fetchPromos: () => dispatch(fetchPromos()),
//     fetchLeaders: () => { dispatch(fetchLeaders())},
//     postFeedback: (feedbackobject) => dispatch(postFeedback(feedbackobject))
//   });

class Main extends Component {

//   componentDidMount() {
//     this.props.fetchDishes();
//     this.props.fetchComments();
//     this.props.fetchPromos();
//     this.props.fetchLeaders();
//   }



  render() {
    
    const HomePage = () => {
        return(
          <Home 
            //   dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            //   dishesLoading={this.props.dishes.isLoading}
            //   dishesErrMess={this.props.dishes.errMess}
            //   promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
            //   promoLoading={this.props.promotions.isLoading}
            //   promoErrMess={this.props.promotions.errMess}
            //   leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
            //   leadersLoading={this.props.leaders.isLoading}
            //   leadersErrMess={this.props.leaders.errMess}
          />
        );
    }

    // const Orders = () => {
    //     return(
    //         <Order />
    //     );

    // };


    return (
      <div>
        <DemoNavbar />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
                <Route path="/order" component={() => <Order/>} />
                <Route path="/" component={HomePage} />
                {/* <Route path="/order" component={() => <Order/>} /> */}
                <Redirect to="/" component={HomePage} />
              </Switch>
            </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Main);
