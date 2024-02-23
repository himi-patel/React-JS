import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

let object={name:"himi"}

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <h1 className='bg-green-400 p-3 rounded-xl text-black mb-4'>Tailwind Test</h1>
    <Card channel="Himi" url="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
    <Card channel="Lily" url="https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg"/>
 

    
    </>
  )
}

export default App
