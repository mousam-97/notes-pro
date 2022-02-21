import React from 'react';
import logo from "../images/Notes-PRO-logos_white.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar__1">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>

            <ul className="items">
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/pricing">
                    <li>Pricing</li>
                </Link>
               
                
            </ul>
        </div>
    );
}

export default Navbar;