
import React,{useState} from "react";
import App from './App'


function MouseContainer()
{
    const [display,setdisplay]=useState(true)
    return(
        <div>
            <button onClick={()=>setdisplay(!display)}>Toggle</button>
            {display && <App/>}
        </div>
        

    )
}

export default MouseContainer;