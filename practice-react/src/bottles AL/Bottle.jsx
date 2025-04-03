import React from 'react';
import './bottle.css'
const Bottle = ({bottle_single ,handleCartBottle}) => {
    return (
        <div className='bottle'>
        <h3>Name :{bottle_single.name}</h3>
        <p>Price :{bottle_single.price}</p>
        <button onClick={()=>handleCartBottle(bottle_single)}>Buy Now</button>
        </div>
    );
};

export default Bottle;