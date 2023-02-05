import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://showpiece-zone-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return (
        <div className='mt-16'>
            <div className='text-center mb-12'>
                <h1 className='text-5xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>Our Service Area</h1>
                <p>Showpieces serve as decorative objects that are used to enhance the appearance of a room or space. They can add aesthetic appeal, create a focal point, and set the tone for the rest of the décor.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;