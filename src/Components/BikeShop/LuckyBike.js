import React from 'react';
import Products from './Products';
import { useState } from 'react';
import ShowLuckyBike from './ShowLuckyBike';

const LuckyBike = (props) => { 
    let luckyOne = []; 
    props.cart.find(product => {
        let id = parseInt(product.id);
        if(id === props.random){
            luckyOne = product;  
        }  
    }); 
    return (
        <div>
            <ShowLuckyBike bike={luckyOne}></ShowLuckyBike>
        </div>
    );
};

export default LuckyBike;