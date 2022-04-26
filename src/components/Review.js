import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import quotes from "../images/quotes.png";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";

function Review() {
    return (
        <div className="review">
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <div className="review__card">
                        <div className="review__imageContainer">
                            <img src={profile1} alt="profile1" />
                        </div>
                        <img className="review__commentImg" src={quotes} alt="quotes" />
                        <div className="review__comment">

                            <p>With Notes-PRO, everyone works towards a shared goal. This has enabled our product teams to ship new products faster and feel more confident in their decisions.</p>
                            <h2>Alex Jones</h2>
                            <h3>Manager</h3>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="review__card">
                        <div className="review__imageContainer">
                            <img src={profile2} alt="profile2" />
                        </div>
                        <img className="review__commentImg" src={quotes} alt="quotes" />
                        <div className="review__comment">

                            <p>One of the best product I have ever used in my life.</p>
                            <h2>Sansa Carnegie</h2>
                            <h3>Software Engineer</h3>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export default Review;