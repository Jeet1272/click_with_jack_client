import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData()

    return (
        <div>
            <h2>{service.title}</h2>
        </div>
    );
};

export default ServiceDetails;