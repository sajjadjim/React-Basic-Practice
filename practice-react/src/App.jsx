import CountButton from './count'
import './App.css'
import { Suspense } from 'react'
import Users from './All users'
import Numbers from './Higher AND lower Number'
import Bottles from './bottles AL/Bottles'
function App() {

  const InformationData = async() =>{
    const res = await fetch('https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/bottle-data-all')
    return res.json()
  }
const BottlesData = InformationData()
 return (
    <>
<h2>Information React Data</h2>
<Suspense fallback='<h2>Data Loading ....</h2>'>
<Bottles BottlesData={BottlesData}></Bottles>
</Suspense>
    </>
  )
}


export default App

