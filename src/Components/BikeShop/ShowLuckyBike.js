import React from 'react';
import './ShowLuckyBike.css'; 

const ShowLuckyBike = (props) => {
    console.log(props.bike); 
    return (
        <div>
            <h1>Hey, want to know the luckiest One for You?</h1>
            <h2>Click the 'Choose For Me' Button.</h2>
            <div className='lucky-product'>
            <img className='lucky-bike' src={props.bike.img} alt="" />
            <p>Name: {props.bike.name}</p>
            <h3>Price: {props.bike.price}</h3>
            </div>
        </div>
    );
};

export default ShowLuckyBike;