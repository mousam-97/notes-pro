import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import priceImg from "../images/price.jpg";

function Price() {
    return (
        <div className="price">
            <h1>Price</h1>
            <div className="price__container">

                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card__image" variant="top" src={priceImg} />
                    <Card.Body>
                        <Card.Title>Basic</Card.Title>
                        <Card.Text>

                            <h6>30 mins per day</h6>
                            <h6>100 notes per month</h6>

                        </Card.Text>
                        <Button variant="primary">Rs. 499/Month</Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card__image" variant="top" src={priceImg} />
                    <Card.Body>
                        <Card.Title>Premium</Card.Title>
                        <Card.Text>
                            <h6>90 mins per day</h6>
                            <h6>300 notes per month</h6>
                        </Card.Text>
                        <Button variant="primary">Rs. 999/Month</Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="card__image" variant="top" src={priceImg} />
                    <Card.Body>
                        <Card.Title>Ultimate</Card.Title>
                        <Card.Text>
                            <h6>200 mins per day</h6>
                            <h6>unlimited notes</h6>
                        </Card.Text>
                        <Button variant="primary">Rs. 1249/Month</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
}

export default Price;