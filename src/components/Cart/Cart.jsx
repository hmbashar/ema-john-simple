import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0 ;
    for (const product of cart) {
        total = total + product.price; // calculation total price for products in cart
        totalShipping = totalShipping + product.shipping; // calculation total Shipping cost for products in cart
    }

    const tax = total*7/100;

    const grandTOtal = total + totalShipping + tax ;

    return (
        <div className='cart'>
             <h4>Order Summery</h4>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping} </p>
                <p>Tax: ${tax}</p>
                <p><strong>Grand Total: ${grandTOtal}</strong></p>
        </div>
    );
};

export default Cart;