import React from 'react';
import useData from '../../useData';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = useData('reviews.json');

    return (
       <div className="container">
           <h1 style={{color: '#31795c', fontWeight: '700'}} className='text-center my-4 pt-5'>Our Client Sayes.</h1>
            <div className='row'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
       </div>
    );
};

export default Reviews;