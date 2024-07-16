import React from 'react'

export default function Author_Resources () {
    return(
        <>
 <section className="w-full ">
    <div className="container mx-auto">
      <h1
        className="font-[dmserif] text-5xl font-semibold text-left text-[#23262e] my-10 mb-[70px]"
      >
        Author Resources
      </h1>
      <div className="flex flex-col ">
        <div className=" flex justify-between" >
          <div className="flex items-center w-1/2 justify-between gap-5 ">
            <img src="img/Resource_1.jpg" alt="" width="160px " height="160px"/>
            <div className="flex flex-col gap-4.6">
              <h4 className="font-semibold text-2xl">Cookbook</h4>
              <p className="text-[#4f5666] text-sm my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a href="#" className="underline text-[#a76e63] font-semibold text-sm">Learn more</a>
            </div>
          </div>
          <div className="flex items-center w-1/2 m-4 gap-5">
            <img src="img/Resource_2.jpg" alt="" width="160px " height="160px" />
            <div className="flex flex-col gap-4.6">
              <h4 className="font-semibold text-2xl ">About</h4>
              <p className="text-[#4f5666] text-sm my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a href="#" className="underline text-[#a76e63] font-semibold text-sm">Learn more</a>
            </div>
          </div>
        </div>

        <hr style={{height:"1px",borderWidth:"0",color:"rgb(0, 0, 0)",backgroundColor:"gray",margin:"50px 0px"}} />
        <div className=" flex justify-between mb-10" >
          <div className="flex w-1/2 items-center justify-between gap-5 ">
            <img src="img/Resource_3.jpg" alt="" width="160px " height="160px" className="object-cover"/>
            <div className="flex flex-col gap-4.6">
              <h4 className="font-semibold text-2xl">Cookbook</h4>
              <p className="text-[#4f5666] text-sm my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a href="#" className="underline text-[#a76e63] font-semibold text-sm">Learn more</a>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-between m-4 gap-5">
            <img src="img/Resource_4.jpg" alt="" width="160px " height="160px"  />
            <div className="flex flex-col gap-4.6">
              <h4 className="font-semibold text-2xl ">About</h4>
              <p className="text-[#4f5666] text-sm my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <a href="#" className="underline text-[#a76e63] font-semibold text-sm">Learn more</a>
            </div>
          </div>
        </div>
       
    </div>
    </div>

  </section>
        </>
    )
}