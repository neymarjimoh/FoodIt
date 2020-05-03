import React, { Component } from "react"; 
import { Link } from 'react-router-dom';

import Carousel from './Carousel';


function Features() {
    return(
        <div className="container-fluid features">
            <div className="row">
                <div className="col-xs-12 col-md-4 features-items">
                    <h5><i className="far fa-clock"></i><br /> 24/7 Delivery</h5>
                </div>
                <div className="col-xs-12 col-md-4 features-items">
                    <h5><i className="fas fa-bus-alt"></i><br />  Fast Delivery</h5>
                </div>
                <div className="col-xs-12 col-md-4 features-items">
                    <h5><i className="fab fa-cc-mastercard"></i><br />  Online Payment</h5>
                </div>
            </div>
        </div>
    )
}

function FoodCard ({ src, title, content }) {
    return(
        <div className="card food-card" style={{width: 15 + 'rem'}}>
            <img src={src} className="card-img-top" alt="food card" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <Link to="/menu" className="btn btn-primary">Click for more <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

function Button() {
    return(
        <Link to="/menu" >
            <button type="button" className="btn btn-outline-primary get-started-button">Discover All</button>
        </Link>
    )
}

function DisplaySmallMenu() {
    return(
        <div className="container-fluid display-menu">
            <div className="row display-header">
                <h4 className="col-md-12">Check out our Menu</h4>
            </div>
            <div className="row display-header">
                <h5 className="col-md-12">Over 2000 Dishes available to order from..</h5>
            </div>
            <div className="row">
                <div className="col-md-3 col-xs-12 col-sm-6">
                    <FoodCard 
                        src='../../images/fufu.jpg' 
                        title='Fufu and Egusi Soup' 
                        content="Your favourite Nigerian dish. Fufu and egusi soup to make up your day. At affordable prices."
                    />
                </div>
                <div className="col-md-3 col-xs-12 col-sm-6">
                    <FoodCard 
                        src='../../images/fried-rice.jpg' 
                        title='Fried Rice and Chicken' 
                        content="Your favourite Nigerian dish. Fried Rice and Chicken to make up your day. At affordable prices."
                    />
                </div>
                <div className="col-md-3 col-xs-12 col-sm-6">
                    <FoodCard 
                        src='../../images/pomo-sauce.jpg' 
                        title='Assorted Pomo' 
                        content="Your favourite Nigerian dish. Assorted Pomo to make up your day. At affordable prices."
                    />
                </div>
                <div className="col-md-3 col-xs-12 col-sm-6">
                    <FoodCard 
                        src='../../images/eggroll.jpg' 
                        title='Snacks(Egg roll)' 
                        content="Your favourite Nigerian dish. Snacks(Egg roll) to make up your day. At affordable prices."
                    />
                </div>
            </div><br />
            <div className="row">
                <div className="col-offset-6 mx-auto">
                    <p><span className="wb-title diff">Keep browsing our latest menu</span> <Button /></p>
                </div>
            </div>
        </div>
    )
}
class Home extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="carousel">
                <Carousel />
            </div>
            <Features />
            <DisplaySmallMenu />
        </React.Fragment>
    );
  }
}

export default Home;