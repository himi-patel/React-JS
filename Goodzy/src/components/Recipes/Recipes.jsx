import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Recipes() {
  return (
<>
<section className="w-full my-4">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-[dmserif] font-bold mt-8">Recipes</h1> </div>
                <hr style={{height:"1px",borderWidth:"0",color:"rgb(0, 0, 0)",backgroundColor:"gray",margin:"30px 0px"}} />
                <div>
                  <ul className="flex gap-4 justify-center items-center">
                <li>
    <NavLink to="" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block',textAlign:'center'  }}>All Recipes</NavLink>
</li>
<li>
    <NavLink to="" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block', width: '100px',textAlign:'center'  }}>Breakfast</NavLink>
</li>
<li>
    <NavLink to="" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block', width: '100px',textAlign:'center'  }}>Dessert</NavLink>
</li>
<li>
    <NavLink to="" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block', width: '100px',textAlign:'center'  }}>Drinks</NavLink>
</li>
<li>
    <NavLink to="" className={({isActive})=>`block py-2 px-4 duration-0 ${isActive ? "border-black rounded-full hover: bg-[#f2ebe5]":"text-black"} rounded-full lg:border-2 hover:font-bold border-none `}style={{ display: 'inline-block', width: '100px',textAlign:'center'  }}>Snacks</NavLink>
</li>
</ul>      
                
                </div>
                <hr style={{height:"1px",borderWidth:"0",color:"rgb(0, 0, 0)",backgroundColor:"gray",margin:"30px 0px"}} />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-3 grid-flow-row my-[100px] gap-4 items-center max-[640px]:w-full">
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/recipe_1.jpg"
        className="hover:scale-125 ease duration-1000"
        alt=""
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_2.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_3.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_4.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_5.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_6.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_7.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src="/img/Recipe_8.jpg"
        alt=""
        className="hover:scale-125 ease duration-1000"
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
</div>


        </div>

    </section>
</>
  )
}

