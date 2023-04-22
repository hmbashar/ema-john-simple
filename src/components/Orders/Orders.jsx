import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-container'>
                <div className="order-page-heading">
                    <h2>Order Page {cart.length}</h2>
                </div>

                {
                    cart.map(product => <ReviewItem key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;