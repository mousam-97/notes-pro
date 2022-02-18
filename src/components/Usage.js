import React from 'react';
import zoom from "../images/Zoom_logo.svg";
import spotify from "../images/Spotify-Logo.jpg";
import instagram from "../images/instagram-1581266_1280.jpg";

function Usage() {
    return (
        <div className="usage">
            <h2>Companies that trust Notes-PRO</h2>
            <div className="usage__logo">
                <img src={zoom} alt="comp logo 1" />
                <img src={spotify} alt="comp logo 1" />
                <img src={instagram} alt="comp logo 1" />
            </div>

        </div>
    );
}

export default Usage;