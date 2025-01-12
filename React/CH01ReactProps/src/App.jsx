import { useState } from 'react'
import Card from './Card'
import Button from './Button'
function App() {

  const [count,setCount]= useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <>
      <h1 className='bg-blue-400'>Rittick Mondal</h1>
      <Card name="Rittick">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quidem!</p>
        <h1>This is trying</h1>
      </Card>
      
      <Button 
      handleClick={handleClick}
      text="Click Me"
      >
        <p>Count={count}</p>
      </Button>
    </>
  )
}

export default App
