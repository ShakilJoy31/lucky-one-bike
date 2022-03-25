import React from 'react';
import { useState } from 'react';
import './Cart.css'; 
import ShowBikeInfo from './ShowBikeInfo';

const Cart = (props) => {
    const {name, price} = props.cart; 
    return (
        <div>
            <ShowBikeInfo name={name} price={price}></ShowBikeInfo>     
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