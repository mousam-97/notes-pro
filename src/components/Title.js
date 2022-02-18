import React from 'react';
import banner from "../images/banner.jpg";

function Title() {
    return (
        <div className="title">
            <div className="title__banner">
                <img src={banner} alt="banner" />

            </div>
            <div className="content">
                <h1 className="heading">Take Notes like a PRO</h1>
                <h3>Are you still taking notes the OLD way?</h3>
                <h4>Take notes using our speech to text AI technology to take notes during your team meetings.</h4>
                <button className="button">
                    GET STARTED
                </button>
            </div>

        </div>
    );

}
export default Title;