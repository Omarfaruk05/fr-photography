import { CardGroup } from 'react-bootstrap';
import useData from '../../useData';
import PricingTable from '../PricingTable/PricingTable';

const PricingTables = () => {
    const services = useData('pricingTablesData.json');
    return (
        <div id='services' className='container  mx-auto'>
            <h1  style={{color: '#31795c', fontWeight: '700'}}  className='text-center my-5'>PRICING TABLE</h1>
            <CardGroup className="">
                {
                    services.map(service => <PricingTable key={service.id} service={service}></PricingTable>)
                }
            </CardGroup>
        </div>
    );
};

export default PricingTables;