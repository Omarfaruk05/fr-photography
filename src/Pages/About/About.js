import React from 'react';
import photo from '../../Images/about/about.jpg'

const About = () => {
    return (
        <div className='container mb-5'>
            <div className='row justify-contert-center align-items-center'>
                <div className=' p-5 col-md-6'>
                    <img className='img-fluid rounded' src={photo} alt="" />
                </div>
                <div className='col-md-6 p-5'>
                    <h1>My name is <span className='text-sucess'>Md. Omar Faruk</span></h1>
                    <p className='fs-5'>I am a webdeveloper. I learnt webdeveloping from 2021. I am know HTML, CSS, Bootstrap, Tailwindcss, Javascript, React. Next six month, my target is to become a profetional webdeveloper. In this day i want to be an expert frontend developer. For this purpas i want to know more about Javascript and react. I want to be an expert in react. Then i want to move backend development. I know something about mobile app develpment. I want to learn more about mobile app development. </p>
                </div>
            </div>
        </div>
    );
};

export default About;