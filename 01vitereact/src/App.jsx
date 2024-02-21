import { useState } from 'react'
import Prac  from './Prac'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Hello from React and Vite</h1>
    <Prac/>
    </>
  )
}

export default App
