import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const AllServices = () => {
    const services = useLoaderData()
    return (
        <div>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default AllServices;