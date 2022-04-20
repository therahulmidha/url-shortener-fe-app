import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { faShoppingCart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
export const Navbar: React.FC = (props) => {
  return (
    <React.Fragment>
      <div className="navbar">
        {/* <Link to="/">URL Shortener</Link> */}
        <div className="nav-header">URL Shortener</div>
        <div className="nav-links">
          <div className="icon-links">
            <Link to=""><FontAwesomeIcon icon={faQuestionCircle} color="#fff" /></Link>
            <Link to=""><FontAwesomeIcon icon={faShoppingCart} color="#fff"/></Link>
          </div>
          <div className="text-links">
            <Link to="">My URLs</Link>
            <Link to="">Plans</Link>
            <Link to="">Features</Link>
            <Link to="">Sign Up</Link>
            <Link to="">Sign In</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
