import { use } from "react"
import Friend from './user'
export default function FriendsCount({friendData}){
 const Friends = use(friendData) ;
//  console.log(Friends)
    return(
        <div style={{
            border:'3px dashed green',
            margin:'10px',
            display: "grid",
            gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
            <h3>Total Number of Friends : {Friends.length}</h3> 
            {
                Friends.map(Friend_single=><Friend key={Friend.id} Friend_All={Friend_single}></Friend>)
            }
        </div>
    )
}