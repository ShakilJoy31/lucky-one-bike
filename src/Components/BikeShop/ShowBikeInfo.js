import React from 'react';
import LuckyBike from './LuckyBike';
import './ShowBikeInfo.css'; 

const ShowBikeInfo = (props) => {
    const {name, price, image} = props; 
    return (
        <div>
            <div className='clicked-bike'>
            <div className='cart-info'>
            <div className='img-in-cart'>
                <img src={image} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            </div>
        </div>
        </div>
    );
};

export default ShowBikeInfo;