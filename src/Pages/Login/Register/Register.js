import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleRegister = event => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password , name)
    }

    const navigateLogin = event => {
        navigate('/register')
    }
    return (
        <div>
            <div  style={{maxWidth:"500px"}} className='container mx-auto w-100 mt-5'>
                <h1 className='text-center mb-4'>Please Register</h1>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='py-2 fs-5' ref={nameRef} type="name" placeholder="Your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='py-2 fs-5' ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='py-2 fs-5' ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className='fs-5' type="checkbox" label="Check me out" />
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