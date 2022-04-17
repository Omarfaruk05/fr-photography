import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '80vh'}} className="d-flex align-items-center justify-content-center">
            <Spinner className='w-16' animation="border" variant="success" />
        </div>
    );
};

export default Loading;