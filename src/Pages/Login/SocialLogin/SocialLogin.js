import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return <Loading></Loading>  
      }

    if(error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div  className='w-50'style={{height: '1px',backgroundColor:'#4b886f'}}></div>
                <p className='mt-2 px-2 fs-5'>or</p>
                <div className='w-50'style={{height: '1px', backgroundColor:'#4b886f'}}></div>
            </div>
            {errorElement}
            <div style={{ marginBottom:'230px'}} className='text-center'>
                <button style={{backgroundColor:'#4b886f', border:'none'}} onClick={() => signInWithGoogle ()} className='px-5 btn btn-primary'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;