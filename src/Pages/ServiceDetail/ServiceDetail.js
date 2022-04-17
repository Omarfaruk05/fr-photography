import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h3>this is service detail: {serviceId}</h3>
            <Link to={'/checkout'}>
               <div className='text-center mt-5'>
                <button className='btn btn-primary'>Proceed Checkout</button>
               </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;