import React from 'react'

export default function RecipeCard(props) {
  return (
    
    <>
  <div className="flex flex-col justify-center gap-3 items-center my-4">
    <div className="img" style={{ overflow: "hidden" }}>
      <img
        src={props.img}
        className="hover:scale-125 ease duration-1000"
        alt=""
      />
    </div>
    <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
    <span className="font-bold text-lg">Baked zucchini with tomatoes and onions</span>
  </div>
    </>
  )
}

