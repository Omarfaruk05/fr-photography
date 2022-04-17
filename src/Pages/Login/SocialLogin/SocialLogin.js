import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='w-50 bg-dark'style={{height: '1px'}}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='w-50 bg-dark'style={{height: '1px'}}></div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle ()} className='px-5 btn btn-primary'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;