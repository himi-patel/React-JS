import { useState } from 'react'
import Prac  from './Prac'


function App() {
  const [count, setCount] = useState(0)

  let a="let's start"
  return (
    <>
   <h1>Hello!! {a} from React and Vite</h1>
    <Prac/>
    </>
  )
}

export default App
