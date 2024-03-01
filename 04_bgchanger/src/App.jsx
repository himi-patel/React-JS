import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
   
        <div className='w-full h-screen duration-500 ' style={{backgroundColor: color}}>
      
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none rounded-3xl px-5 text-white' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none rounded-3xl px-5 text-white' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("pink")} className='outline-none rounded-3xl px-5 text-white' style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>setColor("aqua")} className='outline-none rounded-3xl px-5 text-white' style={{backgroundColor:"aqua"}}>aqua</button>
          <button onClick={()=>setColor("white")} className='border-black rounded-3xl px-5 text-black' style={{backgroundColor:"white"}}>white</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
