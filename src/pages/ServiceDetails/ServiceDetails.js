import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Card from 'react-bootstrap/Card';

const ServiceDetails = () => {

    const service = useLoaderData()
    const { _id, title, img, price, details } = service

    return (
        <div className='d-flex'>
            <Card className='m-2 w-50'>
                <PhotoProvider>
                    <PhotoView src={img}><Card.Img variant="top" src={img} /></PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Price: ${price}</h5>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='m-2 w-50 text-center'>
                <h3 className='text-warning'>Reviews</h3>
            </div>
        </div>
    );
};

export default ServiceDetails;