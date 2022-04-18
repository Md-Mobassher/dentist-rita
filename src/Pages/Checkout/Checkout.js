import React, { useState } from 'react';


const Checkout = () => {
    const [message, setMessage] = useState('')

   const handleCheckout =() =>{
        setMessage('Thank you for your appoinment. You will get an email from us.')       
    }

    return (
        <div>
            <div className='w-50 p-4 mx-auto'>
                <h1 className='text-center'>Checkout</h1>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Age"/>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Write your problem here...' rows="2"></textarea>
                </div>
                <div className='text-primary fs-2 text-bold mb-3'>
                    {message}
                </div>
                <div>
                    <div onClick={handleCheckout} className="btn btn-primary rounded-pill px-5 py-2 "> Get Appoinment</div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;