import React, { useEffect, useState } from 'react';


const Services = () => {
    const [services, setServices] = useState({})

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h2>Service limit 3</h2>
        </div>
    );
};

export default Services;