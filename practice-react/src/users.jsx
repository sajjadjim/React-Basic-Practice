import { use } from "react"

export default function UsersInfo({fetchUsers}){
const users = use(fetchUsers)
console.log(users)
    return(
        <div style={{
            border:'2px solid red',
            borderRadius:'20px'
        }}>
            <p>" Information Users "</p>
            <h2>User Number :{users.length}</h2>
        </div>
    )
}