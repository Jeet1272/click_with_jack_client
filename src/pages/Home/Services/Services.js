import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://click-with-jack-server.vercel.app/services/limit')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div className='d-flex m-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='d-flex justify-content-end me-5'>
                <Button variant="primary"><Link className='text-white text-decoration-none' to='/services'>See All</Link></Button>
            </div>
        </div>
    );
};

export default Services;