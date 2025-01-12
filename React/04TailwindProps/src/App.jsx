import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    name:"Rittick",
    age: 23
  };
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Rittick</h1>
      <Card username="Dravgot" obj={myObj}/> 
      {/* use of props to re-use an component, Card is an component we are passing some prop to use that inside card */}
      {/* we passed myObj as an final evaluated expression  */}
    </>
  )
}

export default App
