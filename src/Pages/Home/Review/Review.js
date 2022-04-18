import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Review = ({review}) => {
    const {name, photo, comment, rating} = review;
    
    return (
        <div className="col-md-6 col-lg-4">
            <div className='m-4 p-2 shadow  rounded'>
            <div>
                <img className='img-fluid rounded' src={photo} alt="" />
            </div>
            <div>
                    <h2 className=''>{name}</h2>
                    <p>{comment}</p>
                    <div className=''>
                        <p>Rating:
                        <Rating 
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: '#fcaa15'}} icon={faStar} />}
                        readonly
                        ></Rating>
                        </p>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Review;