import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div style={{height:'80vh'}}>
            <h3>Service Details</h3>
            <Link to={'/checkout'}>
               <div className='text-center mt-5'>
                <button className='btn btn-primary'>Proceed Checkout</button>
               </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;