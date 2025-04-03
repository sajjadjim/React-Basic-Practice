import React from 'react';
const Bottle = ({bottle , BottleInCartId}) => {

const HandleCartBottle =()=>{
  BottleInCartId(bottle)
    }
    return (
        <div style={{display:'grid', gap:'10px', border:'2px solid green', margin:'5px', padding:'5px', borderRadius:'10px'}}>
            <h3>{bottle.name}</h3>
            <p>Price : {bottle.price}</p>
            <button onClick={HandleCartBottle}>Buy Now</button>
        </div>
    );
};

export default Bottle;