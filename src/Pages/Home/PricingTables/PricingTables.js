import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import PricingTable from '../PricingTable/PricingTable';

const PricingTables = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('pricingTablesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
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