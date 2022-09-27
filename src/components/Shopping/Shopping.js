import React from 'react';
import './Shopping.css'

const Shopping = (props) => {
    const {cart}=props;
    let price = 0;
    let shipping = 0;
    for(const product of cart){
        price = price + product.price
        shipping = shipping + product.shipping
    }
    const tax = (price * 0.1).toFixed(2)
    return (
        <div className='carts'>
            <h3>Order Summary</h3>
            <p>Your items : {cart.length}</p>
            <p>Total Price : ${price}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total :</h3>
        </div>
    );
};

export default Shopping;