import React from 'react';
import logo from "../images/Notes-PRO-logos_white.png"

function Navbar() {
    return (
        <div className="navbar__1">
            <img className="logo" src={logo} alt="logo" />
            <ul className="items">
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </ul>
        </div>
    );
}

export default Navbar;