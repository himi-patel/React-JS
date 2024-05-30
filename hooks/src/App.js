import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios'

//useState with previous state
// function App() {
//   let [count,setcount]=useState(0)
//   let increment=()=>
//     {
//       for(let i=0;i<5;i++)
//         {
//           setcount(prev=>prev+1)
//         }
//     }
//   return (
//     <div className="App">
//       count:{count}
//       <br></br>   <br></br>
//    <button onClick={()=>setcount(0)}>reset</button>
//    <br></br>   <br></br>
//    <button onClick={()=>setcount(prev=>prev+1)}>increment</button>
//    <br></br>   <br></br>
//    <button onClick={()=>setcount(prev=>prev-1)}>decrement</button>
//    <br></br>   <br></br>
//    {/* <button onClick={()=>setcount(count+5)}>increment by 5</button> */}
//    <button onClick={increment}>increment by 5</button>
//     </div>
//   );
// }

// function App() {

//   let [name,setname]=useState({firstname:"",lastname:""})

// return(

//   <div class="App">
// <form>
//  first name: <input type="text" value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})}></input>
//  last name: <input type="text" value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})}></input>
//  <h2>first name :{name.firstname}</h2>
//  <h2>last name :{name.lastname}</h2>
// </form>
// </div>

// );

// }

// function App() {

//   let [items,setitems]=useState([])

//   const additem =()=>{
//     setitems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
//   }

// return(

//   <div class="App">
//     <button onClick={additem}>add number</button>
// <ul>
//   {items.map(item =>(
//     <li key={item.id}>{item.value}</li>))}

// </ul>
// </div>

// );

// }

//use effect hook

// function App() {

//   let [count,setcount]=useState(0)
//   let [name,setName]=useState('')

// useEffect(()=>{
//   console.log("Useeffect")
//   document.title= `you clicked ${count} times`
// },[count])

// return(

//   <div class="App">
//     <input type='text' value={name} onChange={e=> setName(e.target.value)}></input>
//     <button onClick={()=> setcount(count+1)}>click {count} times</button>

// </div>

// );

// }

// function App() {
//   let [x, setX] = useState(0);
//   let [y, setY] = useState(0);

//   let mouselog = (e) => {
//     console.log("mouse event");
//     setX(e.clientX);
//     setY(e.clientY);
//   };

//   useEffect(() => {
//     console.log("use effect updated");
//     window.addEventListener("mousemove", mouselog);

//     return () => {
//       console.log("unmounted");
//       window.removeEventListener("mousemove", mouselog);
//     };
//   }, []);

//   return (
//     <div class="App">
//       Hooks X-{x} Y-{y}
//     </div>
//   );
// }



// function App() {
//   let [count,setcount] = useState(0);


//   let time=()=>{
//     setcount(count+1)
//   }


//   useEffect(()=>{
//     let interval=setInterval(time,1000)

//     return()=>{
//       clearInterval(interval)
//     }
    
//   },[count])



//   return (
//     <div class="App">
//    {count}
//     </div>
//   );
// }

// function App() {
//   let [post, setpost] = useState({});
//   let [id,setid]=useState(1)
//   let[button,setbutton]=useState(1)

//   let clickhandler=()=>{
//     setbutton(id)
//   }


// useEffect(()=>{
//   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
//     console.log(res)
//     setpost(res.data)
//   }).catch((err) => {
//     console.log("error")
//   });
// },[button])

 
// return(
// <div className="App">

//   <input type="text" value={id} onChange={e=>setid(e.target.value)}></input>
//   <button onClick={clickhandler}>fetch post</button>
// <div>{post.title}</div>
// {/* <ul>
//   {
//     post.map((e)=>(<li key={e.id}>{e.title}</li>))
//   }
// </ul> */}


// </div>



// )

// }



//context

// function App() {
//   let [post, setpost] = useState({});
//   let [id,setid]=useState(1)
//   let[button,setbutton]=useState(1)

//   let clickhandler=()=>{
//     setbutton(id)
//   }


// useEffect(()=>{
//   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
//     console.log(res)
//     setpost(res.data)
//   }).catch((err) => {
//     console.log("error")
//   });
// },[button])

 
// return(
// <div className="App">

//   <input type="text" value={id} onChange={e=>setid(e.target.value)}></input>
//   <button onClick={clickhandler}>fetch post</button>
// <div>{post.title}</div>
// {/* <ul>
//   {
//     post.map((e)=>(<li key={e.id}>{e.title}</li>))
//   }
// </ul> */}


// </div>



// )

// }

//Callback 
function App() {
  let [post, setpost] = useState({});
  let [id,setid]=useState(1)
  let[button,setbutton]=useState(1)

  let clickhandler=()=>{
    setbutton(id)
  }


useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
    console.log(res)
    setpost(res.data)
  }).catch((err) => {
    console.log("error")
  });
},[button])

 
return(
<div className="App">

  <input type="text" value={id} onChange={e=>setid(e.target.value)}></input>
  <button onClick={clickhandler}>fetch post</button>
<div>{post.title}</div>
{/* <ul>
  {
    post.map((e)=>(<li key={e.id}>{e.title}</li>))
  }
</ul> */}


</div>



)

}




export default App;
