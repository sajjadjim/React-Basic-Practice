import { useState } from "react"
export default function NewCountButton (){
const [count , SetCount] = useState(0)
const ClickAddValue = ()=>{
// const Value = count+ 2;
SetCount(count + 2);
 }
 
 const ClickMinusValue = () =>{
   if(count > 0)
   {
    SetCount(count -2);
   }
   else{
    alert('Value Lower Than Zero')
   }
 }

 const ResetValue = () =>{
    SetCount(0);
 }
    return(
    <div style={{
        border:"2px dashed orange",
        padding:'20px',
        gap:'10px'
    }}>
        <h2>Count :{count}</h2>
        <button style={{color:'green'}} onClick={ClickAddValue}>Click Here+</button>
        <button style={{color:'red'}} onClick={ClickMinusValue}>Click Here -</button>
        <button style={{color:'yellow'}} onClick={ResetValue}>Reset</button>
    </div>
 )
}