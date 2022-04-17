import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password )
    }

    const navigateRegister = event => {
        navigate('/login')
    }
    return (
        <div  style={{maxWidth:"500px"}} className='container mx-auto w-100 mt-5'>
            <h1 className='text-center mb-4'>Please login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-2 fs-5' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control  className='py-2 fs-5' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='fs-5' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-100 mx-auto fs-5 mb-2 " type="submit">
                    Sign in
                </Button>
                </Form>
                <p>New to  <span className='fw-bold text-info'>FR PHOTOGRAPHY</span>? <Link className='text-danger pe-auto text-decoration-none' onClick={navigateRegister} to="/register">Please Register</Link> </p>
        </div>
    );
};

export default Login;