import React from 'react';
import Button from 'react-bootstrap/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Card from 'react-bootstrap/Card';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, img, price, details } = service
    return (
        <div>
            <Card className='m-2 single-service'>
                <PhotoProvider>
                    <PhotoView src={img}><Card.Img variant="top" src={img} /></PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Price: ${price}</h5>
                    <Card.Text>
                        {details.slice(0, 89)}...
                    </Card.Text>
                    <Link to={`/services/${_id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;