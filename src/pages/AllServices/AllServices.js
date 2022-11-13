import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from '../Service/Service';

const AllServices = () => {
    useTitle('All Service')
    const services = useLoaderData()
    return (
        <div className='w-50 mx-auto my-3'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default AllServices;