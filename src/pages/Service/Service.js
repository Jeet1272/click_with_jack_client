import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = ({ service }) => {
    const { _id, title, img, price, details } = service
    return (
        <div>
            <Card className='w-50 mx-auto my-3'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Price: ${price}</h5>
                    <Card.Text>
                        {details.slice(0, 5)}...
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;