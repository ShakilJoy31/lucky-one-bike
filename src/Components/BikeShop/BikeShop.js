import React, { useEffect, useState } from 'react';
import Products from './Products';
import './BikeShop.css'; 
import { Cart, CartButton } from './Cart';

const BikeShop = () => {
    const [bikes, setBike] = useState([]); 
    const [myCart, setMycart] = useState([]); 
    const [randomNumber, setRandomNumber] = useState([]); 
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBike(data)); 
    },[]); 


    // Add to cart button.
    const addToCartButton = (getInto) =>{
        const stored = [...myCart, getInto]
        setMycart(stored); 
    }

    const chooseOneButton = (props) =>{
        let getOnlyId = [];  
        for(const id of props){
            let getId = parseInt(id.id); 
            getOnlyId = [...getOnlyId, getId]; 
        } 

        const checkId = ()=>{
            const randomNumber = Math.floor(Math.random() * 13); 
            const id = getOnlyId.find(id => id === randomNumber)
            if(id === randomNumber){
                return id; 
            }
            else{
                checkId()
            }
        }
        const id = checkId();
        setRandomNumber(id); 
        
    }
    console.log(randomNumber); 
   


    // Choose again button. 

    const chooseAgainButton = () =>{
        setMycart([]); 
    }


    return (
        <div className='container-bike'>
           <div className='show-bike'>
               {
                   bikes.map(bike => <Products sendBike ={bike} key={bike.id} addToCartButton={addToCartButton}></Products>)
               }

           </div>
           <div className='cart-bike'>
               <h1>Bike, You Selected: </h1>
               {
                   myCart.map(product => <Cart cart={product} key={product.id}></Cart>)
               }

               <CartButton product={myCart}  chooseOneButton={chooseOneButton} chooseAgainButton={chooseAgainButton}></CartButton>  

           </div>
        </div>
    );
};
export default BikeShop;