import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    </>
  )
}

export default App
