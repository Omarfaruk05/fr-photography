import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
        navigate(from, {replace: true});
    }

    if(loading || sending){
        return <Loading></Loading>  
      }

      if(signInError) {
        errorElement = <p className='text-danger'>Error: {signInError?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    };

    const navigateRegister = event => {
        navigate('/login')
    };

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email')
        }
        else{
            toast('Please enter your email address')
        }
    }
    return (
        <div  style={{maxWidth:"500px"}} className='container mx-auto w-100 mt-5'>
            <h1 className='text-center mb-4'>Please login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-2 fs-5'name='email' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  className='py-2 fs-5' name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                {errorElement}
                <Button variant="primary w-100 mx-auto fs-5 mb-2 " type="submit">
                    Sign in
                </Button>
                </Form>
                <p>New to  <span className='fw-bold text-info'>FR PHOTOGRAPHY</span>? <Link className='text-primary pe-auto text-decoration-none' onClick={navigateRegister} to="/register">Please Register</Link> </p>
                <p>Forget Password? <Link className='text-primary pe-auto text-decoration-none' onClick={resetPassword} to="/login">Reset Password</Link> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;