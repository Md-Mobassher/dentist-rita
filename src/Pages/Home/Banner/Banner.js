import React from 'react';
import { Button, Carousel, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../image/banner/banner1.png'
import banner2 from '../../../image/banner/banner2.png'
import banner3 from '../../../image/banner/banner3.png'
import banner4 from '../../../image/banner/banner4.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Container>
            <Carousel className='banner'>
                <Carousel.Item>
                    <div className='row first-banner'>
                        <div className="col-lg-6 col-md-5 col-sm-4 d-flex flex-column align-items-center justify-content-center">
                            <h1 className='banner-title text-center'>Welcome to the best Dental Service</h1>
                            <Button  as={Link} to='/checkout' className='px-5 py-2 mt-4 rounded-pill fs-5' variant="primary" type="submit">
                                 Appoinment
                            </Button>
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-8">
                            <img className='img-fluid' src={banner1} alt="" />
                        </div>
                    </div>
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
            
        </>
    );
};

export default Banner;