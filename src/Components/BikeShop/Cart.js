import React from 'react';
import { useState } from 'react';
import './Cart.css'; 
import ShowBikeInfo from './ShowBikeInfo';
import Products from './Products';
import LuckyBike from './LuckyBike';

const Cart = (props) => {
    const {name, price} = props.cart; 
    return (
        <div>
            <ShowBikeInfo name={name} price={price}></ShowBikeInfo>     
        </div>
        
    );
};

const CartButton = (props) =>{
    console.log(props.product);
    return(
        <div>
            <div className='button-in-cart'>
                <button onClick={()=>props.chooseOneButton(props.product)} className='choose-button'>Choose For Me</button>
                <button onClick={()=>props.chooseAgainButton()} className='again-button'>Choose Again</button>
            </div>
        </div>
    )
}

export {Cart, 
    CartButton
};