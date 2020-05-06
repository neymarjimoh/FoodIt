import React from 'react';

function HowToOrder() {
    return (
        <div className="container-fluid how-to-order">
            <h2 className="order-header">HOW TO ORDER ?</h2>
            <div className="row">
                <div className="col-md-4">
                    <h1 className="order-number">1</h1>
                    <p className="order-text">Choose Location <img src="https://img.icons8.com/color/48/000000/place-marker.png" alt="location icon" /></p>
                </div>
                <div className="col-md-4">
                    <h1 className="order-number">2</h1>
                    <p className="order-text">Make Your Order <img src="https://img.icons8.com/color/48/000000/food.png" alt="food-icon" /></p>
                </div>
                <div className="col-md-4">
                    <h1 className="order-number">3</h1>
                    <p className="order-text">Food is on Your Way <img src="https://img.icons8.com/color/48/000000/running.png" alt="running-icon"/></p>
                </div>
            </div><br />
            <hr></hr><br />
            <div className="row">
                <div className="col">
                    <h5 className="orange">Payment Options <img src="https://img.icons8.com/color/48/000000/card-exchange.png" alt="icp" /></h5>
                    <div className="row">
                    <div className="col">
                        <p className="payment-text">
                            Master Card <img src="https://img.icons8.com/color/48/000000/bank-cards.png" alt="cardIcon" />
                            <span>  &nbsp; &nbsp; &nbsp; </span>
                            Stripe <img src="https://img.icons8.com/color/48/000000/stripe.png" alt="stripe-icon" />
                            <span>  &nbsp; &nbsp; &nbsp; </span>
                            Paypal <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal-icon" />
                        </p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default HowToOrder;
