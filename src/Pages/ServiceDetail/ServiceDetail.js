import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ServicesContext } from '../Home/PricingTables/PricingTables';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const services = useContext(ServicesContext);
    console.log(services)
    return (
        <div style={{height:'80vh'}}>
            <h3>Service Details : {services}</h3>
            <Link to={'/checkout'}>
               <div className='text-center mt-5'>
                <button className='btn btn-primary'>Proceed Checkout</button>
               </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;