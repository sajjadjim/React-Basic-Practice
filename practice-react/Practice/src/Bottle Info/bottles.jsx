import React, { use, useState } from 'react';
import './bottles.css'
import Bottle from './Bottle';
const Bottles = ({BottlesData}) => {
const BottlesAll = use(BottlesData)

const [cartBottle , getCartBottle] = useState([])

const BottleInCartId = (bottle) =>{
const newCart = [...cartBottle , bottle]
getCartBottle(newCart)
// console.log(newCart);
console.log('JIM Hlw')
}

    return (
        <div className='bottles'>
            <h1>Total Cart in Bottle :</h1>
            {
                BottlesAll.map(bottle=> <Bottle 
                    key={bottle.id}
                    // BottleInCartId = {BottleInCartId} 
                    bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;