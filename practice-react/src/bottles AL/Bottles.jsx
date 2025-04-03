import React, { use, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
const Bottles = ({BottlesData}) => {
 const Bottles = use(BottlesData) 
 
 const [cartBottle , setCartBottle] =useState([])
 const handleCartBottle = (bottle_id) =>{
    const newCartBottle =[...cartBottle , bottle_id]
    setCartBottle(newCartBottle)
 }
    return (
<div>
    <h2>Number of Total Bottle : {Bottles.length}</h2>
    <h3>Total Cart Product : {cartBottle.length}</h3>
<div className='bottles'>
    {
        Bottles.map(bottle_single=><Bottle 
            key={bottle_single.id} 
            handleCartBottle={handleCartBottle}
            bottle_single={bottle_single}></Bottle>)
    }
</div>
</div>
)};

export default Bottles;