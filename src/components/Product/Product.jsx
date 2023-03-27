import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, quantity, price, ratings } = props.product;

    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="single-product-info">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;