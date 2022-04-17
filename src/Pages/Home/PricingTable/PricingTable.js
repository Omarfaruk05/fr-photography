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
        <div className='col-md-4'>
            <Card className='rounded-2 m-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h3 className="text-muted">{price}</h3>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => navigateToServiceDetali (id)} className='text-center w-100 btn btn-primary'>HIRE ME</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default PricingTable;