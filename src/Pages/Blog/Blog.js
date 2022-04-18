import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-primary'>Blog</h1>
            <Container className='mt-4'>
                <div className='mb-5'>
                    <h4 className='text-primary'>1. Difference between authorization and authentication?</h4>
                    <h5><b>Ans: &nbsp;</b>Authentication verifies who the user is where	Authorization determines what resources a user can access. <br />
                    Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user but Authorization works through settings that are implemented and maintained by the organization. <br />
                     Authentication is the first step of a good identity and access management process where Authorization always takes place after authentication. <br />
                        Authentication is visible to and partially changeable by the user.	Authorization isn’t visible to or changeable by the user </h5>
                </div>
                <div className='mb-5'>
                    <h4 className='text-primary'>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <h5><b>Ans: &nbsp;</b>Firebase Authentication required minimum configuration so implementing social account signup was easy and fast. User management feature provided in the console was excellent and we could easily implement our user auth system. <br />
                    Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints </h5>
                </div>
                <div className='mb-5'>
                    <h4 className='text-primary'>3. What other services does firebase provide other than authentication?</h4>
                    <h5><b>Ans: &nbsp;</b>
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li>Cloud Messaging.</li>
                    </ul>
                    </h5>
                </div>
            </Container>
        </div>
    );
};

export default Blog;