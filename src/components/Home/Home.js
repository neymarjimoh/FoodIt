import React, { Component } from "react"; 

class Home extends Component {
  render() {
    return (
     <div className="carousel">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?cs=srgb&dl=person-cooking-on-stainless-steel-cooking-pot-175753.jpg&fm=jpg" className="d-block w-100 image-height" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?cs=srgb&dl=close-up-of-salad-on-table-326281.jpg&fm=jpg" className="d-block w-100 image-height" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=blur-breakfast-chef-cooking-262978.jpg&fm=jpg" className="d-block w-100 image-height" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
    );
  }
}

export default Home;