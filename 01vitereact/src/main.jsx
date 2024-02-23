import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Appj() {

  
    return (
      <>
     <h1>Hello from React and Vite</h1>
      
      </>
    )
  }

// const reactelement=
// {
//     type:'a',
//     props:
//     {
//         href:"https://google.com",
//         target:"_blank",

//     },
//     children:"click me for results"
// }

const anotherelement=(
    <a href="https://google.com" target='_blank'>click</a>
)

let anothername="jiya"
const reactelement=React.createElement(
    'a',
    {href:"https://google.com", target:"_blank"},
    'click here',
    // anothername
)

ReactDOM.createRoot(document.getElementById('root')).render(

//    Appj()
// reactelement
 <App/> 
// reactelement

)
