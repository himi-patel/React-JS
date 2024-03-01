import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter=15

let[counter,setcounter]=useState(15)

const addvalue=()=>
{
  if(counter== 20)
  {
    counter-=1
    alert("not more to add");
    
  }
  counter=counter+1
  // counter=counter+1
  // counter=counter+1
  // counter=counter+1
  setcounter(counter=>counter+1)
  setcounter(counter=>counter+1)
  setcounter(counter=>counter+1)
  setcounter(counter=>counter+1)
console.log("Clicked",counter)
}

const removevalue=()=>
{
  if(counter== 0)
  {
    counter+=1
    console.log("Clicked",counter)
    alert("not more to remove");
    
  }
  setcounter(counter-1)
console.log("Clicked",counter)
}

  return (
    <>

    <h1>React</h1>
    <h2>count: {counter}</h2>
    <button onClick={addvalue}>add value: {counter}</button>
    <button onClick={removevalue}>remove value: {counter}</button>
    <p>footer: {counter}</p>
     
    </>
  )
}

export default App
