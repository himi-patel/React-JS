import React from 'react'

export default function Peak_of_Week() {
  return (
<>
<section className="w-full mt-[40px] mb-[40px]">
    <div className="container mx-auto flex">
      <div
        className="w-1/2 bg-[#a76e63] flex flex-col justify-center items-center text-white gap-7 text-center"
      >
        <p className="font-semibold text-sm">PICK OF THE WEEK</p>
        <h2 className="text-5xl font-bold font-[dmserif]">
          Peanut Butter & <br />
          Berries Parfe
        </h2>
        <span
          >This nourishing recipe is perfect for all people of all<br />
          ages! It is quick and easy to make, but packed with <br />flavour
          and is sure to impress your guests.</span
        >
        <button
          className="border bg-transparent border-white px-5 py-2 font-semibold text-white font-sans hover:bg-white hover:text-black duration-500 ease-out"
        >
          View recipe<i className="ri-arrow-right-s-line hover:text-white"></i>
        </button>
      </div>
      <div className="w-1/2">
        <img
          src="img/PickOfWeek.jpg"
          alt=""
          className="h-[556px] w-full object-cover"
        />
      </div>
    </div>
  </section>
</>
  )
}



