import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password );
        signInWithEmailAndPassword(email, password);
    };

    console.log(error)
    if(user){
        navigate(from, {replace: true});
    }

    const navigateRegister = event => {
        navigate('/login')
    }
    return (
        <div  style={{maxWidth:"500px"}} className='container mx-auto w-100 mt-5'>
            <h1 className='text-center mb-4'>Please login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-2 fs-5'name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  className='py-2 fs-5' name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='fs-5' type="checkbox" label="Accept all terms and conditions" />
                </Form.Group>
                <Button variant="primary w-100 mx-auto fs-5 mb-2 " type="submit">
                    Sign in
                </Button>
                </Form>
                <p>New to  <span className='fw-bold text-info'>FR PHOTOGRAPHY</span>? <Link className='text-danger pe-auto text-decoration-none' onClick={navigateRegister} to="/register">Please Register</Link> </p>
                <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;