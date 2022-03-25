import React from 'react';
import './Products.css'; 

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
                <button onClick={()=>props.addToCartButton(props.sendBike)}>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Products;