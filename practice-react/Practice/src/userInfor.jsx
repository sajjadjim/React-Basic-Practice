import { use } from "react"
import User from './user'
export default function UsersInformation({sendUser}){
    // const UsersData = use(sendUser)
    const UserData_ALL = use(sendUser)

    return(
        <div style={{
            border:'5px solid green'
        }}>
            <h3>-------------- All Users Information -----------</h3>
            <p>Number Of User : {UserData_ALL.length}</p>
          <div className="grid md:grid-cols-4 grid-cols-1">
          {
             UserData_ALL.map(user=>(<User user={user}></User>))
          }
          </div>
        </div>
    )
}




// export default function UsersInformation({ sendUser }) {
//     const UserData_ALL = use(sendUser);
//     const [isVisible, setIsVisible] = useState(false);

//     return (
//         <div style={{ border: "5px solid green", padding: "10px" }}>
//             <h3>-------------- All Users Information -----------</h3>
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 {isVisible ? "Hide Users" : "Show Users"}
//             </button>
//             {isVisible && (
//                 <div>
//                     <p>Number Of Users: {UserData_ALL.length}</p>
//                     {UserData_ALL.map((user, index) => (
//                         <User key={index} user={user} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
