import React from 'react';
import { Container } from 'react-bootstrap';
import myPic from '../../image/about/mobassher.png'

const About = () => {
    return (
        <div>
             <Container className='my-4'>
                 <h1 className='text-center '>About <span className='fw-bold text-info'> Mobassher</span></h1>
                <div className="row d-flex  justify-content-start  align-items-center h-100">
                    <div className="col-lg-7 col-md-6 col-sm-12  ">
                        <h3 className='mb-3'>NAME: Md Mobassher Hossain</h3>
                        <h5 className='mb-4'>GOAL: My goal is become a full stack developer. After completing my  graduation in 2021 at Textile Engineering field, I found that when I left job I become an Unemployed again. Then I search the way to develope skill. After somedays I found Jhanker mahbub courses to become a web developer. Then I enroll his course at batch-5. </h5>
                        <h5  className='mb-4'>TO ACHIEVE THE GOAL: After enrolled the course I practice 8 to 10 hours per day and continue it regularly. Take notes everyday of my courses. When I do not understand any topic then search another resources to google or youttube.   </h5>
                    </div>
        
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <img src={myPic} alt="" />
                    </div>
                </div>
             </Container>
        </div>
    );
};

export default About;