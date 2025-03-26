import CountButton from './count'
import './App.css'
import { Suspense } from 'react'
import Users from './All users'
import Numbers from './Higher AND lower Number'
function App() {

const UserInformation = async() =>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
return res.json()
}
const UserInfo = UserInformation()

const friendFile = async() =>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
return res.json()
}
// Call that teh function 
const friendData = friendFile();

 return (
    <>
{/* API Load Function Call Here  */}
<Suspense fallback={<h3>Data Loading Here .......</h3>}>
  <Users user={UserInfo}></Users>
</Suspense>


<Suspense fallback={<h3>'Data Loading Friend Data....'</h3>}>
  <Friend friendData={friendData}></Friend>
</Suspense>
<CountButton></CountButton>
    <h2>React Practice File</h2>
    <button onClick={() =>{
      alert('click Here 3rd Time')
    }}>click here 3</button>
    <button onClick={() =>NameShow('Sajjad Hossain Jim')}>Name Show</button>

    {
      Numbers_value.map(numbers => <Numbers key={numbers} value={numbers}></Numbers>)
    }
    </>
  )
}

const Numbers_value =[1,2,3,4,12,65,77,12,34,5,99,55]

const NameShow = (Name) =>{
  alert('Name : '+Name)
}

export default App

