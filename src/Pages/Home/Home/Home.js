import React from 'react';
import PricingTables from '../PricingTables/PricingTables';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PricingTables></PricingTables>
            <Reviews></Reviews>
        </>
    );
};

export default Home;