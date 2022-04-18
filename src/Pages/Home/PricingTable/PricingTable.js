import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PricingTable = ({service}) => {
    const {id, img, name, price, description} = service;
    const navigate = useNavigate();

    const navigateToServiceDetali = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='col-md-4' >
            <Card  className='rounded-2 m-4 shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h3 className="text-center" style={{color:'#ff6f60'}}>${price}</h3>
                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <button onClick={() => navigateToServiceDetali (id)} style={{backgroundColor:'#4b886f', fontWeight:'500'}} className='text-center text-white w-100 btn'>FOR HIRE</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default PricingTable;