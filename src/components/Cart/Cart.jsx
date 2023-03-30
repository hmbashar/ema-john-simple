import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0 ;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1 ;
        total = total + product.price * product.quantity; // calculation total price for products in cart
        totalShipping = totalShipping + product.shipping; // calculation total Shipping cost for products in cart

        quantity = quantity + product.quantity;
    }

    const tax = total*7/100;

    const grandTOtal = total + totalShipping + tax ;
    
    return (
        <div className='cart'>
             <h4>Order Summery</h4>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p><strong>Grand Total: ${grandTOtal.toFixed(2)}</strong></p>
        </div>
    );
};

export default Cart;