import React from 'react';
import { Container } from 'react-bootstrap';
import gallery1 from '../../../image/gallery/gallery1.png'
import gallery2 from '../../../image/gallery/gallery2.png'
import gallery3 from '../../../image/gallery/gallery3.png'
import gallery4 from '../../../image/gallery/gallery4.png'
import gallery5 from '../../../image/gallery/gallery5.png'
import gallery6 from '../../../image/gallery/gallery6.png'

const Gallery = () => {
    return (
        <div id='gallery' className='mt-5'>
            <h1 className='text-center mb-4'>Gallery</h1>
            <Container className='d-flex justify-content-center'>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <img className='img-fluid' src={gallery1} alt="" />                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <img className='img-fluid' src={gallery2} alt="" />                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <img className='img-fluid' src={gallery3} alt="" />                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <img className='img-fluid' src={gallery4} alt="" />                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <img className='img-fluid' src={gallery5} alt="" />                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <img className='img-fluid' src={gallery6} alt="" />                        
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Gallery;