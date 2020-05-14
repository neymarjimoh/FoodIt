import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class componentName extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();


    }

    render() {
        return (
            <div className="container-fluid newsletter-div">
                <div className="row">
                    <div className="col-md-8 newsletter-div-col-1">
                        <h1 className="newsletter-div-col-1-heading">Join Our NewsLetter</h1>
                        <h6 className="newsletter-div-col-1-text">Subcsribe to stay up to date with our latest updates, features and discount prices</h6>
                        <div className="subscribe-form">
                            <form 
                                action="https://gmail.us18.list-manage.com/subscribe/post?u=ffadc959838ecfa2cac50cd10&amp;id=36ceba5904" 
                                method="post" 
                                id="mc-embedded-subscribe-form" 
                                name="mc-embedded-subscribe-form" 
                                className="validate" 
                                target="_blank" 
                                novalidate
                            >
                                <input 
                                    className="subscribe-form-input" 
                                    type="email"
                                    name="email" 
                                    placeholder="Enter Email.." 
                                    onChange={this.handleChange}  
                                    value={this.state.email} 
                                    required 
                                />
                                <button className="subscribe-form-button">SUBSCRIBE &nbsp; <img src="../../images/send-icon.png" alt="hh" /></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 newsletter-div-col-2">
                        <p className="newsletter-div-col-2-address"><img src="https://img.icons8.com/color/24/000000/address.png" alt="locations-icon" /> Akure, Ondo, Ph, Lagos</p>
                        <p><img src="https://img.icons8.com/color/24/000000/phone.png" alt="call-icon" /> +(234)9070-822-819</p>
                        <p><img src="https://img.icons8.com/color/24/000000/gmail.png" alt="gmail-icon" /> jemohkunle2007@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

// componentName.propTypes = {

// }

export default componentName;
