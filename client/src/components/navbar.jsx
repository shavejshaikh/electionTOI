import React, { Component } from 'react';
// import { BrowserRouter as Router,Route, Switch , Link , Redirect } from 'react-router-dom';
import { BrowserRouter as Router,Link } from 'react-router-dom';

class Navbar extends Component {
    // state = {  }
    render() { 
        return ( 
        // <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">E-Voting</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/adminpanel">Admin Panel</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link " to="#">Account :{this.props.Account}</a>
                </li>
                </ul>
            </div>
        </nav> 
        // </Router>
        );
    }
}
 
export default Navbar;