import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {name, price, description, img} = service;

    return (
            <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
                <div className="card" style={{ width: "18rem" }}>
                    <img style={{ height: "15rem" }} src={img} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4 className='card-title'>$ {price}</h4>
                        <p className="card-text">{description}</p>
                        <Link to="/checkout" className="btn btn-primary rounded-pill px-5 py-2">Appoinment</Link>
                    </div>
                </div>
            </div>
    );
};

export default Service;