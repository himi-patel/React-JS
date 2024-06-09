import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {


  const [length,setlength]=useState(8)
  const[numberallowed,setnumberallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
  const[password,setPassword]=useState("")
  const Passwordref=useRef(null)

  const PasswordGenerator=useCallback(()=>
  {
    let pass=""
    let str="ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(charallowed) str+="!@#$%^&*()_.+-<>?{}~"
    if(numberallowed) str+="1234567890"

    for(let i=0; i<length; i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
    }

    setPassword(pass)
  },[setPassword,charallowed,numberallowed,length])

  const copyClipboard=useCallback(()=>
  {
    Passwordref.current?.select();
    Passwordref.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>
{
  PasswordGenerator()
},[PasswordGenerator,charallowed,numberallowed,length])


  return (
    <>
    <h1 className='text-center text-white'>Password Generator</h1>
    <div className='w-full shadow-md rounded-lg p-5 my-8  text-orange-500 bg-gray-700'>
      <div className='flex flex-col shadow m-auto rounded-lg overflow-hidden bg-white p-4 gap-3  '>
        <div className='flex items-center'>
  <input type="text" value={password} className='outline-none w-full py-1 px-4  bg-white text-black"' style={{width:"500px"}} placeholder="password" readOnly
           ref={Passwordref}/>
<button className='outline-none bg-blue-700 text-white px-4 py-2 shrink-0' onClick={copyClipboard}>Copy</button><br />
</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
  <label htmlFor="">Length:{length}</label>
</div>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"  defaultChecked={numberallowed}  id='numberInput' value={length} className='cursor-pointer'
   onChange={()=>{setnumberallowed((prev)=> !prev)}} />
  <label htmlFor="numberInput">Numbers</label>
      
</div>
<div className="flex items-center gap-x-1">
          <input
          className='cursor-pointer'
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setcharallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
  </div>
</div>
  

     </>
  )
}

export default App
