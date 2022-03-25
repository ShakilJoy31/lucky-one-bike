import React from 'react';
import './Products.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const Products = (props) => {
    const {name, img, price} = props.sendBike; 
    return (
        <div className='for-bike'>
            <div className='bike-info'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            </div>
            <div className='bike-button'>
                <button className='button-element' onClick={()=>props.addToCartButton(props.sendBike)}>
                    <p className='button-addToCart'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Products;