import React from 'react';

const LuckyBike = (props) => {
    let getOnlyId = []; 
    let randomId; 
    for(const id of props.product){
        let getId = parseInt(id.id); 
        getOnlyId = [...getOnlyId, getId]; 
        randomId = getOnlyId[Math.floor(Math.random())]; 
    } 
    console.log(getOnlyId); 
    
    console.log(randomId%3); 
    return (
        <div>
            <h2>This is lucky bike for you.</h2>
        </div>
    );
};

export default LuckyBike;