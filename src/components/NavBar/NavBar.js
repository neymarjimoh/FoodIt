import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Style from './NavBar.module.css';


function NavLink() {
    return(
        <li className="nav-item" >
            <Link className="nav-link" to={this.props.path}>{this.props.text}</Link>
        </li>
    )
}


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' className="navbar-brand"><span className="wb-title">Food</span>It</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></Link>
                        </li>
                    </ul>
                    {/* <li className="nav-item">
                            <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></Link>
                    </li> */}
                    <li className="nav-item dropdown dopdown-media">
                        <Link className="nav-link dropdown-toggle drop-me" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className={Style.user}>User </span><i className="fa fa-user-circle food-title-color" aria-hidden="true"></i>
                        </Link>
                        <div className="dropdown-menu hover-drop-user" aria-labelledby="navbarDropdown">
                            <Link to="/register" className="dropdown-item hover-user">Register <i className="fa fa-user-plus food-title-color" aria-hidden="true"></i></Link>
                            <Link to="/login" className="dropdown-item hover-user">Login <i className="fa fa-user-o food-title-color" aria-hidden="true"></i></Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/" className="dropdown-item hover-user">Log Out <i className="fas fa-user-slash food-title-color"></i></Link>
                        </div>
                    </li>
                    {/* <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>

        )
    }
}

NavBar.propTypes = {

}

export default NavBar;