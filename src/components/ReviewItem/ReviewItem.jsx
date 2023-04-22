import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({ product, handelRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p className='price'>Price: <span className='review-price'>${price}</span></p>
                <p className='quantity'>Quantity: <span className='review-price'>{quantity}</span></p>
            </div>
            <button className='btn-delete' onClick={() => handelRemoveFromCart(id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;