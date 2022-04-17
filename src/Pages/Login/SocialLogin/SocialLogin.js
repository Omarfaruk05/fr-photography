import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='w-50 bg-dark'style={{height: '1px'}}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='w-50 bg-dark'style={{height: '1px'}}></div>
            </div>
            <div className='text-center'>
                <button className='px-5 btn btn-primary'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;