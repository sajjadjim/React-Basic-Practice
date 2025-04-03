export default function User({user}){
    return(
        <div style={{
            border:'2px dashed red',
            margin:'19px',
            borderRadius:'20px',
            padding:'10px'
        }}>
            <h3 style={{color:'yellowgreen'}}>Name user : {user.name}</h3>
            <p>User Email : {user.email}</p>
            <p>Phone = {user.phone}</p>
            <h5>City : {user.address.city}</h5>
            <h2 style={{color:'goldenRod'}}>username :{user.username}</h2>
        </div>
    )
}