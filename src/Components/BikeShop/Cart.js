import React from 'react';
import { useState } from 'react';
import './Cart.css'; 

const Cart = (props) => {
    let name = ''; 
    let price = ''; 
    for(const information of props.cart){
        name = information.name; 
        price = information
        .price; 
    }
    
    return (
        <div className='clicked-bike'>
            <div className='cart-info'>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            </div>
            
        </div>
    );
};

const CartButton = () =>{
    return(
        <div>
            <div className='button-in-cart'>
                <button className='choose-button'>Choose For Me</button>
                <button className='again-button'>Choose Again</button>
            </div>
        </div>
    )
}

export {Cart, 
    CartButton
};