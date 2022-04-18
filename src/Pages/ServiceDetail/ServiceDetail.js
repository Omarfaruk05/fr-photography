import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
    let choice;
    if(serviceId === '1'){
         choice = <h1 className='text-center'>You choose Basic card for hire</h1>;
    }
    if(serviceId === '2'){
         choice = <h1>You choose Standard card for hire</h1>;
    }
    if(serviceId === '3'){
         choice = <h1>You choose Premium card for hire</h1>;
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'81vh'}} >
           <div>
                {choice}
                <Link to={'/checkout'}>
                <div className='text-center mt-5'>
                    <button style={{backgroundColor:'#4b886f', fontWeight:'400'}} className='btn btn-primary'>Proceed Checkout</button>
                </div>
                </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;