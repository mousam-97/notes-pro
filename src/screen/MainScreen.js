import React from 'react';
// import Navbar from "../components/Navbar";
// import Main from "../components/Main";
import Title from "../components/Title.js";
import Usage from "../components/Usage.js";
import Review from "../components/Review.js";
import Price from "../components/Price.js";

function MainScreen() {
    return (
        <div className="mainscreen">
            {/* <Navbar />
    <Main /> */}
            <Title />
            <Usage />
            <Review />
            <Price />
        </div>
    );
}

export default MainScreen;