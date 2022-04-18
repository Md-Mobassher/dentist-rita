import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



const Checkout = () => {
    const [checkout, setCheckout] = useState('')


    const handleSubmit = e =>{
        e.preventDefault();
       
        setCheckout('Thank you for your request. We will send appoinment time to your email')
 
    }



    return (
    <>
        <div className='w-50 mx-auto mt-5 border border-1 border-info px-5 py-4 rounded-2'>
            <h1 className='text-center mt-0 mb-0 pb-3 text-primary'>Please Login</h1>
            <Form onSubmit={ handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control  type="text" placeholder="Enter your problem here" />
                </Form.Group>

                {checkout}
                
                <Button className='px-5' variant="primary" type="submit">
                    Login
                </Button>
               
            </Form>
        </div>
     </>

    );
};

export default Checkout;