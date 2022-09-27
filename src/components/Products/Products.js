import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shopping from '../Shopping/Shopping';
import './Products.css'
import {addToDb, getLocalSd} from '../../utilities/fakedb'
const Products = () => {
    const [products,setProduct] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const getId = getLocalSd();
        for(const id in getId){
            const addedProducts = products.find(product => product.id === id)
            console.log(addedProducts);
        }
    },[])
    const cartHandler = (product) =>{
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='product-section'>
            <div className="products-container">
                {
                    products.map(product => <Cart key={product.id} product={product} cartHandler={cartHandler}></Cart>)
                }
            </div>
            <div className="cart-container">
                <Shopping cart={cart}></Shopping>
            </div>
        </div>
    );
};

export default Products;