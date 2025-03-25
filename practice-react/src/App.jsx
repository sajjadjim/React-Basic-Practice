import CountButton from './count'
import './App.css'
import { Suspense } from 'react'
import Users from './users'
import Friend from './fiends'
function App() {

  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const friendFile = async() =>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
return res.json()
}
// Call that teh function 
const friendData = friendFile();

 return (
    <>
{/* API Load Function Call Here  */}
<Suspense fallback={<h3>Loading Page ......</h3>}>
<Users fetchUsers={fetchUsers}></Users>
</Suspense>

<Suspense fallback={<h3>'Data Loading....'</h3>}>
  <Friend friendData={friendData}></Friend>
</Suspense>


{/* <CountButton></CountButton> */}
    <h2>React Practice File</h2>
    <button onClick={clickHandler}>Click Here</button>
    <button onClick={clickHandler2}>click Here 2</button>
    <button onClick={() =>{
      alert('click Here 3rd Time')
    }}>click here 3</button>
    <button onClick={() =>AddMoreNumber(5)}>Add 5 Result</button>
    <button onClick={() =>NameShow('Sajjad Hossain Jim')}>Name Show</button>
    </>
  )
}

function clickHandler(){
  alert('Click here 1 Time')
}

const clickHandler2 = () => {
alert('Click here 2')
}
const AddMoreNumber = (num) =>{
  const number = num + 10;
  alert("Added Number show "+number);
}

const NameShow = (Name) =>{
  alert('Name : '+Name)
}

export default App

