import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, quantity, price, ratings, id } = props.product;
    const handelAddtToCard = props.handelAddtToCard;
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="single-product-info">
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handelAddtToCard (props.product)} className='btn-cart'>
                Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;