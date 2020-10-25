import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            E-voting
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/register" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/adminPanel" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/adminPanel">
                  AdminPanel
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/adminvoter" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/adminvoter">
                  Admin Candidate
                </Link>
              </li>

              <li className="nav-item">
                    <a className="nav-link " to="#">Account :{props.Account}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
