import React from 'react';
import { Link } from 'react-router-dom';


function Button() {
    return(
        <Link to="/menu" >
            <button type="button" className="btn btn-outline-primary get-started-button">Get Started</button>
        </Link>
    )
}

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?cs=srgb&dl=person-cooking-on-stainless-steel-cooking-pot-175753.jpg&fm=jpg" className="d-block w-100 image-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>We get what you love</h2>
                            <p>Online payment is available. Get started here for your online food ordering.</p>
                            <Button />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?cs=srgb&dl=close-up-of-salad-on-table-326281.jpg&fm=jpg" className="d-block w-100 image-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Your taste, Our Concern</h2>
                            <p>Make the best out of it. Get started here for your online food ordering.</p>
                            <Button />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=blur-breakfast-chef-cooking-262978.jpg&fm=jpg" className="d-block w-100 image-height" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>We got you covered. We work 24/7.</h2>
                            <p>We deliver very swiftly. Get started here for your online food ordering.</p>
                            <Button />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;
