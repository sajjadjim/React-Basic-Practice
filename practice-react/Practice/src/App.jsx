import { Suspense } from 'react'
import HightAndLow from './high and low number'
import './App.css'
import UsersInformation from './userInfor'
import Bottles from './Bottle Info/bottles'
function App() {

// Now Here Fetch API 
const UserInfo = async() =>{
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 return res.json()
  }

const BottlesInformation = async() =>{
  const res = await fetch('https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/bottle-data-all')
  return res.json()
}

const BottlesData = BottlesInformation()

// Call This Function For Working 
const UsersData = UserInfo();
 return (
    <>
<h2>React Js Practice File show here</h2>
<Suspense fallback='<h1>Data Is Loading.....</h1>'>
  <Bottles BottlesData={BottlesData}></Bottles>
</Suspense>

{/* <Suspense fallback={<h3>Loading All User Data.......</h3>}>
<UsersInformation sendUser={UsersData}></UsersInformation>  
</Suspense> */}

{/* Sort the Large And Small Number  */}
{/* {
  NumberAll.map(number=>(<HightAndLow numberAll={number}></HightAndLow>) )
} */}

<button className='my-3' onClick={getAlertMassage}>Click Here</button>
    </>
  )
}
// Add The Button Alert 
const getAlertMassage = ()=>{
  return(
    alert('Click The Button You !!!')
  )
}

const NumberAll = [1,4,-999,6,22,-7,55,66,767,88,-10,44,9,10,41,7,79,90,8,121]
export default App

