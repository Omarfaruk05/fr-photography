import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }

    // console.log(user)

    const navigateLogin = () => {
        navigate('/login')
    }
   
    console.log(error)
    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div  style={{maxWidth:"500px"}} className='container mx-auto w-100 mt-5'>
                <h1 className='text-center mb-4'>Please Register</h1>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control className='py-2 fs-5' name="name" type="text" placeholder="Your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='py-2 fs-5' name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='py-2 fs-5'name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className='fs-5' type="checkbox" label="Accept all terms and conditions" />
                        </Form.Group>
                        <Button variant="primary w-100 fs-5 mb-2" type="submit">
                            Register
                        </Button>
                    </Form>
                        <p>Already have an account? <Link className='text-danger pe-auto text-decoration-none' onClick={navigateLogin} to="/login">Please Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;