import React, { Component, Fragment } from "react"; 
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const aboutContainer = {
  height: "110vh",
  backgroundColor: "#f6f6f6",
  paddingLeft: "70px",
  fontFamily: "courier"
};

const stepHeader = {
  fontSize: 30
}

class About extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="container-fluid about-container" style={aboutContainer}>
            <h1 style={{ padding: "15px", fontFamily: "courier" }}>About Us</h1>
            <div style={{ padding: "15px" }}>
              <p>FoodIt is the most reliable online food ordering system in Nigeria. Good Food equals Good Life</p>
              <p>Your taste is our priority, we always want yoy to have the very best as this is the little we can do to 
                contribute to your everyday life, so we bring your favorite dishes and food to you. 
              </p>
              <p>Get food on the go with 3 Easy Steps:</p>
              <p><span style={stepHeader}>Step One</span> - Input your location</p>
              <p><span style={stepHeader}>Step Two</span> - Make your order and payment</p>
              <p><span style={stepHeader}>Step Three</span> - Food is on your way to your door step</p>
              <br />
              <p>For more information, contact us via the <Link to="/contact">contact page</Link> or send a mail <a href="mailto: jemohkunle2007@gmail.com">here</a>.</p>
              {/* <br /> */}
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default About;