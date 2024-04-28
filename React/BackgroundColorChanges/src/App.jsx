import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor: color}}>
        <div className=' fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 bg-slate-700'>
          <button className='text-red-700 mr-2' onClick={()=>setColor("red")}>Red</button>
          <button className='text-blue-700 mr-2' onClick={()=>setColor("blue")}>Blue</button>
          <button className='text-olive-700' onClick={()=>setColor("olive")}>Default</button>
        </div>
      </div>
    </>
  )
}

export default App
