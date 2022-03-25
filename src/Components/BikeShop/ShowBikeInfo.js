import React from 'react';

const ShowBikeInfo = (props) => {
    const {name, price} = props
    // console.log(props); 
    return (
        <div>
            <div className='clicked-bike'>
            <div className='cart-info'>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            </div>
        </div>
        </div>
    );
};

export default ShowBikeInfo;