import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PricingTable = ({service}) => {
    const {id, img, name, price, description1, description2, description3, description4, description5, description6} = service;
    const navigate = useNavigate();

    const navigateToServiceDetali = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='col-md-6 col-lg-4' >
            <Card  className='rounded-2 m-4 shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title className='fs-3 text-center'>{name}</Card.Title>
                   <div>
                   <ul>
                       <li>{description1}</li>
                       <li>{description2}</li>
                       <li>{description3}</li>
                       <li>{description4}</li>
                       <li>{description5}</li>
                       <li>{description6}</li>
                   </ul>
                   </div>
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