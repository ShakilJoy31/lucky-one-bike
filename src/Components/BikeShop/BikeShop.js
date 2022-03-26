import React, { useEffect, useState } from 'react';
import Products from './Products';
import './BikeShop.css'; 
import { Cart, CartButton } from './Cart';
import LuckyBike from './LuckyBike';
import QuestionAnswer from './QuestionAnswer/QuestionAnswer';

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


    // Choose One Button
    const chooseOneButton = (props) =>{
        let getOnlyId = [];  
        for(const id of props){
            let getId = parseInt(id.id); 
            getOnlyId = [...getOnlyId, getId]; 
        } 

        const checkId = ()=>{
            let randomNumber = getOnlyId[Math.floor(Math.random() * getOnlyId.length)]; 
            const id = getOnlyId.find(id => id === randomNumber); 
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
   
    let keepRandomNumber = [randomNumber]; 
    const getRandomNumber = parseInt(randomNumber); 
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

               {
                   keepRandomNumber.map(number => <LuckyBike random={getRandomNumber} key={number} cart={myCart}></LuckyBike>)
               }

           </div>

           <div>
               <QuestionAnswer></QuestionAnswer>
           </div>
        </div>
    );
};
export default BikeShop;