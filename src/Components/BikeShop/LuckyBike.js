import React from 'react';
import Products from './Products';

const LuckyBike = (props) => {

    props.cart.map(Product => {
        let bikeId = parseInt(Product.id); 
        let randomNumber = parseInt(props.randomNumber); 
        console.log(bikeId, randomNumber);
        console.log(typeof(randomNumber));  

        
        if(bikeId == props.randomNumber){
            console.log('inside in the if'); 
        }
        // const specificProduct = props.cart.find(selectedProduct => selectedProduct.id === props.randomNumber); 
        // console.log(specificProduct); 
    }); 

    


    return (
        <div>
            <h2>Bike id {props.randomNumber}</h2>
        </div>
    );
};

export default LuckyBike;