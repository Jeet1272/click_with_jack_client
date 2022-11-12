import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'

const Service = ({ service }) => {
    const { _id, title, img, price, details } = service
    return (
        <div>
            <Card className='m-2 single-service'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Price: ${price}</h5>
                    <Card.Text>
                        {details.slice(0, 89)}...
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;