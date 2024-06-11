import React,{useEffect} from 'react'
import { useState} from 'react'



function Github() {

const [data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/himi-patel").then((res)=>res.json()).then((res)=>setdata(res))
    },[])
  return (
    <>
    
    
   <div className='text-center m-4 p-4 bg-gray-600 text-3xl text-white'>Github Followers: {data.followers}
   <img className='text-center m-4 mx-auto' src={data.avatar_url} alt='Github picture'></img> </div>

   </>
  )
}

export default Github
