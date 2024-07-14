import React from 'react'
import {Link,NavLink} from 'react-router-dom'



export default function Header() {
  return (
    <>
    <nav
    class="w-full gap-7 container font-sans sticky mx-auto py-5 px-4 mt-3 flex flex-wrap flex-col md:flex-row items-center justify-between "
  >
    <ul class="flex gap-10">

<li>
    <NavLink to="/recipes" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block', width: '100px',textAlign:'center'  }}>Recipes</NavLink>
</li>
<li>
    <NavLink to="/about" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block', width: '100px',textAlign:'center'  }}>About</NavLink>
</li>

<li>
    <NavLink to="/for-partners" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'block',textAlign:'center'  }}>For Partners</NavLink>
</li>


    </ul>
    <Link to="/" className="flex items-center flex-col gap-2">
    <img src="logos/Goodzy.svg" className="font-light" alt="Goodzy Logo" style={{ marginRight: '10px' }} />
    <span>Easy & Healthy Recipes</span>
                    </Link>
    <div
      class="max-[1280px]:border-none lg:flex inline-flex border border-black pl-3 py-2 items-center rounded-3xl"
    >
      <input
        type="text"
        className="max-[1280px]:hidden outline-none pl-2 mr-4 pr-[160px]"
        placeholder="Want a dessert?"
      />
      <a href="" className="pr-4 max-[1280px]:text-xl"
        ><i className="ri-search-line"></i
      ></a>
    </div>
  </nav>

</>

  )
}

