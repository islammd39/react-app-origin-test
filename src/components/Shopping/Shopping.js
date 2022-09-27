import React from 'react';
import './Shopping.css'

const Shopping = ({cart}) => {
    return (
        <div className='carts'>
            <h3>Order Summary</h3>
            <p>Your items : {cart.length}</p>
        </div>
    );
};

export default Shopping;