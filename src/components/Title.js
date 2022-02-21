import React from 'react';
import banner from "../images/banner.jpg";
import { Link } from "react-router-dom";

function Title() {
    return (
        <div className="title">
            <div className="title__banner">
                <img src={banner} alt="banner" />

            </div>
            <div className="content">
                <h1 className="heading">Take Notes like a PRO</h1>
                <h3>Are you still taking notes the <strong>OLD</strong> way?</h3>
                <h4>Take notes using our speech-to-text Technology to take notes during your next meeting.</h4>
                <Link to="/speechconvert">
                    <button className="title__button">
                        GET STARTED
                    </button>
                </Link>

            </div>

        </div>
    );

}
export default Title;