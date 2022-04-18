import React from 'react';
import { Button, Carousel, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../image/banner/banner1.png'
import banner2 from '../../../image/banner/banner2.png'
import banner3 from '../../../image/banner/banner3.png'
import banner4 from '../../../image/banner/banner4.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
        <Container>
            <Carousel className='banner'>
                <Carousel.Item>
                    <Row>
                        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                            <h1 className='banner-title text-center'>Welcome to the best Dental Service</h1>
                            <Button  as={Link} to='/login' className='px-5 py-3 mt-4 rounded-pill fs-5' variant="primary" type="submit">
                                 Appoinment
                            </Button>
                        </div>
                        <div className="col-6">
                            <img className='img-fluid' src={banner1} alt="" />
                        </div>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={banner2}
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={banner3}
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={banner4}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
            
        </div>
    );
};

export default Banner;