import { use } from "react"

export default function FriendsCount({friendData}){
    
 const Data = use(friendData) 
 console.log(Data)  
    return(
        <div style={{
            border:'3px dashed green',
            margin:'10px'
        }}>
            <p>Number Of Our friend</p>
            <h2>Friend : {Data.length}</h2>
        </div>
    )
}