import { useState } from "react"

export default function NewCountButton (){
 
    const [count , SetCount] = useState(0)
 const ClickButtonHanddler = ()=>{
    // console.log("JIM")
// const Value = count+ 2;
SetCount(count + 2);
 }
 
 const ClickHereValueMinus = () =>{
   if(count > 0)
   {
    SetCount(count -2);
   }
   else{
    alert('Value Lower Than Zero')
   }
 }

    return(
    <div style={{
        border:"2px dashed yellow",
        padding:'20px',
        gap:'10px'
    }}>
        <h2>Count :{count}</h2>
        <button onClick={ClickButtonHanddler}>Click Here+</button>
        <button onClick={ClickHereValueMinus}>Click Here -</button>
    </div>
 )
}