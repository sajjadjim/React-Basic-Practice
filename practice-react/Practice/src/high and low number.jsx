export default function NumberSorted({numberAll}){
console.log(numberAll)
    if(numberAll >10){
        return(
            <div style={{color:'red'}}>
                <p>Higher Number : {numberAll}</p>
            </div>
        )
    }
    if(numberAll <=10 && numberAll>0){
        return(
            <div style={{color:"green"}}>
                <p>Lower Number : {numberAll}</p>
            </div>
        )
    }
    else{
        return(
            <div style={{color:"yellow"}}>
                <p>Negative Number : {numberAll}</p>
            </div>
        )
    }
}