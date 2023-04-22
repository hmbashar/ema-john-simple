import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart]  = useState(SavedCart);

    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handelClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                <div className="order-page-heading">
                    <h2>Order Page {cart.length}</h2>
                </div>

                {
                    cart.map(product => <ReviewItem 
                        key={product.id} 
                        product={product}
                        handelRemoveFromCart={handelRemoveFromCart}
                        ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                    cart={cart}
                    handelClearCart = {handelClearCart}
                >
                    <Link to="/checkout">
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;