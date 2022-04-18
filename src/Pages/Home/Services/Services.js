import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('data.json')
         .then(res => res.json())      
         .then(data => setServices(data));
    }, [])
    

    return (
        <>
            <Container id='services' className='mt-5'>
                <h1 className='text-center'>Services</h1>
               <div className="row">
                    {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                    }
               </div>
            </Container>
           
        </>
    );
};

export default Services;