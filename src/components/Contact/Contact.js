import React, { Component, Fragment } from "react"; 
import Footer from '../Footer/Footer';

class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       comments: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid contact-container bg-grey">
          <h2 className="text-center" style={{ marginBottom: '25px'}}>CONTACT</h2>
          <div className="row">
            <div className="col-sm-5" style={{ marginBottom: '15px'}}>
              <h6 style={{ marginBottom: '20px'}}>Contact us and we'll get back to you within 24 hours.</h6>
              <p><img src="https://img.icons8.com/color/24/000000/address.png" alt="locations-icon" />&nbsp; Akure, Ondo, Ph, Lagos</p>
              <p><img src="https://img.icons8.com/color/24/000000/phone.png" alt="call-icon" />&nbsp; +(234)9070-822-819</p>
              <p><img src="https://img.icons8.com/color/24/000000/gmail.png" alt="gmail-icon" />&nbsp; jemohkunle2007@gmail.com</p>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input 
                    className="form-control" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    id="name" 
                    name="name" 
                    placeholder="Name" 
                    type="text" 
                    required 
                  />
                </div>
                <div className="col-sm-6 form-group">
                  <input 
                    className="form-control" 
                    value={this.state.email}
                    onChange={this.handleChange} 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    type="email" 
                    required 
                  />
                </div>
              </div>
              <textarea 
                className="form-control" 
                value={this.state.comments} 
                onChange={this.handleChange}
                id="comments" 
                name="comments"
                placeholder="Comment" 
                rows="5">
              </textarea><br />
              <div className="row">
                <div className="col-sm-12 form-group">
                  <button 
                    className="btn contact-btn btn-default pull-right" 
                    type="submit" 
                    data-toggle="modal" 
                    data-target="#myModal"
                    onClick={this.handleClick}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
              <h4>Oops...</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <p>Hello {this.state.name}, Sorry this is not an actual contact form.</p>
                <p>Thanks for contacting us though @ {this.state.email} .</p>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                  Cancel
                </button>
                <p>&nbsp; &nbsp; <a href="/">Home</a></p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Contact;