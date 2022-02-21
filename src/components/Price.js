import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import priceImg from "../images/price.jpg";

function Price() {
    return (
        <div className="price">
            <h1>Price</h1>
            <div className="price__container">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={priceImg} />
                    <Card.Body>
                        <Card.Title>Basic</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>30 mins per day</li>
                                <li>100 notes per month</li>
                            </ul>

                        </Card.Text>
                        <Button variant="primary">Rs. 499/Month</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={priceImg} />
                    <Card.Body>
                        <Card.Title>Premium</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>90 mins per day</li>
                                <li>300 notes per month</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Rs. 999/Month</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={priceImg} />
                    <Card.Body>
                        <Card.Title>Ultimate</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>200 mins per day</li>
                                <li>unlimited notes</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Rs. 1249/Month</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
}

export default Price;