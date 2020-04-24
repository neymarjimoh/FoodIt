import React, { Component } from "react"; 
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

class Home extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="carousel">
                <Carousel />
            </div>
            <Features />
        </React.Fragment>
    );
  }
}

export default Home;