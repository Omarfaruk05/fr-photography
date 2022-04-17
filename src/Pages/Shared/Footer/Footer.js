import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center my-4 fw-bold'>
            <small> Copyright  Ⓒ {year} </small>
        </footer>
    );
};

export default Footer;