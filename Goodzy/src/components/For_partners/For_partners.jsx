import React from 'react'

export default function For_partners() {
  return (
   <>
    <section className="w-full my-[100px]">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2 flex flex-col justify-center items-start "><h4 className="font-bold text-6xl my-4 font-[dmserif] mb-4 ">Learn More About <br/> Our Partnership <br/> Program</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique</p>
                    <button
                    className="border border-black px-8 py-2 mt-4 font-semibold text-black font-sans hover:bg-black hover:text-white duration-500 ease-out"
                  >
                   Apply to become partner
                  </button></div>
                <div className="w-1/2"><img src="img/Partners_1.jpg" alt="" height="552px" width="720px" className="object-cover"/></div>
            </div>
            </div>
    </section>

    <section className="w-full py-4 my-[100px]">
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col gap-2 text-center ">
                <h1 className="text-5xl font-bold font-[dmserif] my-4">What Our Partners Get</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique</p>
            </div>
        </div>
    </section>

    <section className="w-full my-[100px]">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2"><img src="/img/Partners_2.jpg" alt="" height="510px" width="680px" className="object-cover"/></div>
                <div className="w-1/2 flex flex-col justify-center items-center "><h4 className="font-semibold text-3xl my-4 ">Promote your products to a <br/> 10M+ community</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla.</p></div>
            </div>
            </div>
    </section>

    <section className="w-full my-[100px]">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2 flex flex-col justify-center items-start gap-2 "><h4 className="font-semibold text-3xl my-4 ">Get 50% off to products <br/> and services from our <br/> partners</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla.</p></div>
                <div className="w-1/2"><img src="/img/Partners_3.jpg" alt="" height="510px" width="680px" className="object-cover"/
                ></div>
            </div>
            </div>
    </section>

    <section className="w-full my-[100px] ">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2"><img src="/img/Partners_4.jpg" alt="" height="510px" width="680px" className="object-cover"/></div>
                <div className="w-1/2 flex flex-col justify-center items-center "><h4 className="font-semibold text-3xl my-4 ">Get support from our teamy</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla.</p></div>
            </div>
            </div>
    </section>

    <section className="w-full bg-[#f2ebe5] p-[100px] mt-[100px]">
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
                <b className="text-sm font-[1rem] text-[#4f5666] my-4">PARTNER APPLICATION</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla, ut commodo diam libero vitae <br/> erat.</p>
                <div className="w-1/2 mx-auto py-2 px-4 flex flex-col  justify-center gap-4 my-[20px]">
                    <div className="flex  gap-4 ">
                        <p className="bg-white py-2 px-4 flex items-center self-start w-1/2">
                    <i className="ri-user-fill text-black px-2 text-2xl"></i><input className="text-black bg-transparen outline-none" type="text" name="" id="" placeholder="First name"/></p>
                    <p className="bg-white py-2 px-4 flex items-center self-start w-1/2">
                    <i className="ri-user-fill text-black px-2 text-2xl"></i><input className="text-black bg-transparen outline-none" type="text" name="" id="" placeholder="Last name"/></p>
                    </div>
                  <div className= " bg-white py-2 px-4 flex items-center self-start w-full"> 
                    <i className="ri-mail-fill text-black px-2 text-2xl"></i><input className="text-black bg-transparen outline-none" type="text" name="" id="" placeholder="Enter your Email"/></div>
                    <div className="bg-white py-2 px-4 flex items-center self-start w-full">
                    <i className="ri-message-fill text-black px-2 text-2xl"></i><input className="text-black bg-transparen outline-none" type="text" name="" id="" placeholder="Example Text"/></div>
                    <button
                    className="border bg-black border-black px-5 py-2 font-semibold text-white font-sans hover:bg-white hover:text-black duration-500 ease-out "
                  >
            Submit application
                  </button>

                </div>
            </div>
        </div>
    </section>
</>
  )
}
