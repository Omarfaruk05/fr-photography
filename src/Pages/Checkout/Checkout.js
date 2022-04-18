import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const checkoutId = useParams();
    return (
        <div className='container' style={{height:'80vh', maxWidth:"500px"}}>
            <h4 className='text-center my-4 mb-5'>Please fill up this form and submit for pay.</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control className='py-2 fs-5' name="name" type="text" placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control className='py-2 fs-5' name="name" type="text" placeholder="Your district" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control className='py-2 fs-5' name="name" type="text" placeholder="Your police station" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control className='py-2 fs-5' name="name" type="text" placeholder="Your post office and village" required />
                </Form.Group>
                        
                            
                <Button style={{backgroundColor:'#4b886f', border:'none'}}variant="primary w-100 fs-5 mb-2" type="submit">
                        Submit
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;