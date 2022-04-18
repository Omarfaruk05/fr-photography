import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5' style={{height:'70vh'}}>
            <div>
                <h2>1. Difference between authorization and authentication.</h2>
                <p className="fs-5"><u>Ans.</u> Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
            </div>
            <div>
                <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className="fs-5"><u>Ans.</u> Beacuse it mains google and google is the biggest company in internet techonology.For best security i am choosing firebase. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div>
                <h2>3. What other services does firebase provide other than authentication?</h2>
                <p className="fs-5"><u>Ans.</u> Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions,Cloud Messaging</p>
            </div>
        </div>
    );
};

export default Blogs;