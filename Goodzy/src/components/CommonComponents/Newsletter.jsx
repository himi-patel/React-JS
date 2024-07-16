import React from 'react'

export default function Newsletter() {
  return (
   <>
     <section className="w-full py-[40px] my-[60px]">
        <div className="container mx-auto flex">
            <div className="w-1/2">
                <img
                  src="img/subscribe.jpg"
                  alt=""
                  className="h-[556px] w-full object-cover"
                />
              </div>
          <div
            className="w-1/2 bg-[#dcdbe1] flex flex-col justify-center items-center text-[#4f5666] gap-7 text-center"
          >
            <p className="font-semibold text-sm">NEWSLETTER
            </p>
            <h2 className="text-5xl font-bold font-[dmserif]">
                Subscribe To Our <br/> Weekly Updates!
             
            </h2>
            <span
              >This is some text inside of a div block.</span
            >
            <p className="w-1/2 bg-white py-2 px-4 flex items-center">
            <i className="ri-mail-fill text-[#4f5666] px-2 text-2xl"></i><input className="text-black bg-transparen outline-none" type="text" name="" id="" placeholder="Enter your Email"/></p>
            <button
              className="bg-[#4f5666] w-1/2 py-3 font-semibold text-white font-sans   duration-500 ease-out "
            >
      Subscribe
            </button>
          </div>
         
        </div>
      </section>
   </>
  )
}

