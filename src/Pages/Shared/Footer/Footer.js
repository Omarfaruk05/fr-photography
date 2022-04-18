import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center fw-bold py-3' style={{backgroundColor:'#0f1e18', color:'white'}}>
            <div>
                <div className='d-flex justify-content-center align-items-center my-1'>
                    <div className='mx-2'>
                        <a href="https://github.com/Omarfaruk05" target="_blank"><img src="https://public-assets.envato-static.com/assets/header-footer/social/twitter-6ad889010d07b5b6caa1e8c40d71131641bb97d9605ef8ef62d8cfe8ace6a817.svg" className="global-footer-social__icon" alt="Twitter" title="Twitter" width="30" height="30" /></a>
                    </div>
                    <div className='mx-2'>
                        <a href="https://www.facebook.com/profile.php?id=100023919873768" target="_blank"><img src="https://public-assets.envato-static.com/assets/header-footer/social/facebook-e29111786aec8117c019d01a351887605c22c29dd9c363b355789c06436aaf2f.svg" className="dark global-footer-social__icon" alt="Facebook" title="Facebook" width="30" height="30" /></a>
                    </div>
                    <div className='mx-2'>
                        <a href="https://www.instagram.com/omarfaruk0005/" target="_blank"><img src="https://public-assets.envato-static.com/assets/header-footer/social/instagram-614e390114cada173d0094549cb1f260929b6432d3a1e6cff484302e4aabba09.svg" className="global-footer-social__icon" alt="Instagram" title="Instagram" width="30" height="30" /></a>
                    </div>
                </div>
            <small> Copyright  Ⓒ {year} </small>
            </div>
        </footer>
    );
};

export default Footer;