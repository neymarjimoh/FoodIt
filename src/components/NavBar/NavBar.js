import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './NavBar.module.css';


function NavLink({path, text, isActive, onClick}) {
    return(
        <li className={"nav-item " + (isActive ? "active": "")}>
            <Link className="nav-link" to={path} onClick={() => onClick()}>{text}</Link>
        </li>
    )
}


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {path: "/", text: "Home", isActive: false},
                {path: "/about", text: "About", isActive: false},
                {path: "/menu", text: "Menu", isActive: false},
                {path: "/contact", text: "Contact", isActive: false},
                {path: "/cart", text: <i className="fas fa-shopping-cart"></i>, isActive: false},
            ]
        }
    }

    handleClick(i) {
        const links = this.state.links.slice(); 
        for (const j in links) {
          links[j].isActive = i == j ;
        }
        this.setState({links: links});
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
                        {this.state.links.map((link, i) => 
                            <NavLink 
                            path={link.path} 
                            text={link.text} 
                            isActive={link.isActive}
                            key={link.path} 
                            onClick={() => this.handleClick(i)}
                            /> 
                        )}
                    </ul>
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
                </div>
            </nav>

        )
    }
}

NavLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default NavBar;