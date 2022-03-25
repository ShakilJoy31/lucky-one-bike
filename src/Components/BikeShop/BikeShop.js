import React, { useEffect, useState } from 'react';
import Products from './Products';
import './BikeShop.css'; 
import { Cart, CartButton } from './Cart';

const BikeShop = () => {
    const [bikes, setBike] = useState([]); 
    const [myCart, setMycart] = useState([]); 
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBike(data)); 
    },[]); 

    const addToCartButton = (getInto) =>{
        const stored = [...myCart, getInto]
        setMycart(stored); 
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
                   <Cart cart={myCart}></Cart>
               }
               <CartButton></CartButton>
           </div>
        </div>
    );
};
export default BikeShop;