import React from 'react'

export default function About() {
  return (
   <>
    
    <section className="w-full my-[100px] ">
     <div className="container mx-auto">
         <div className="flex flex-col justify-center items-center text-center gap-5">
         <h1 className="lg:text-6xl font-semibold font-[dmserif] sm:text-sm ">Welcome To GOODZY <br/> Cooking Blog!</h1>    
         <p className="font-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique.</p>
     </div>
 </div>
 <div className="my-[100px]">
     <img src="img/about_1.jpg" alt="" height="378px" width="100%" className="object-cover"/>
 </div>
 
    </section>


    <section className="w-full my-[100px]">
     <div className="container mx-auto">
         <div className="flex flex-col justify-center items-center text-center gap-5">
         <h1 className="text-6xl font-semibold font-[dmserif]">About GOODZY</h1>    
         <p className="font-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique.</p>
     </div>
 </div>
 
 
    </section>

    <section className="w-full my-[100px]">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2"><img src="img/aboutImg_1.jpg" alt=""  className="object-cover h-[510px] w-[680px]"/></div>
                <div className="w-1/2 flex flex-col justify-center items-start px-[5rem] "><h4 className="font-semibold text-3xl my-4 ">Original content only</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla, ut commodo diam libero vitae <br/> erat.</p></div>
            </div>
            </div>
    </section>

    <section className="w-full my-[100px] bg-[#f2ebe5] py-[80px]">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2 flex flex-col justify-center items-start gap-6 "><h4 className="font-semibold text-3xl my-4 ">New recipes every week</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla, ut commodo diam libero vitae <br/> erat.</p>
                   <p> <button
                    className="border border-black px-5 py-2 font-semibold text-black font-sans hover:bg-black hover:text-white duration-500 ease-out"
                  >
                   Subscribe to updates
                  </button></p>
                </div>
                <div className="w-1/2 "><img src="img/aboutImg_2.jpg" alt="" className='object-cover  h-[510px] w-[680px]'/></div>
           </div>
            </div>
    </section>

    <section className="w-full my-[100px]">
        <div className="container mx-auto">
            <div className="flex ">
                <div className="w-1/2"><img src="img/aboutImg_3.jpg" alt=""className="object-cover  h-[510px] w-[680px]"/></div>
                <div className="w-1/2 flex flex-col justify-center items-start px-[5rem] "><h4 className="font-semibold text-3xl my-4 ">Join our 10M+ community</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Suspendisse varius enim in eros elementum <br/> tristique. Duis cursus, mi quis viverra ornare, eros <br/> dolor interdum nulla, ut commodo diam libero vitae <br/> erat.</p>
                    <div className="my-5 flex justify-evenly gap-5 text-xl ">
                        <a href=""><i className="ri-facebook-circle-fill"></i></a>
                        <a href=""><i className="ri-instagram-line"></i></a>
                        <a href=""><i className="ri-twitter-fill"></i></a>
                        <a href=""><i className="ri-pinterest-fill"></i></a>
                      </div>
                    </div>
            </div>
            </div>
    </section>

    <section className="w-full my-[100px]">
        <div className="conainer mx-auto">
            <div className="w-1/2 mx-auto ">
        <div className="flex justify-center flex-col items-start gap-5"> <h1 className="text-3xl font-bold font-[dmserif] my-4">All Our Recipes Meet These 3 Simple Criteria:</h1> 
       
            <div className="flex flex-col gap-7 justify-center items-start px-10 text-left w-full bg-[#f2ebe5] text-[#a76e63] py-6">
                <div><p className="font-semibold text-xl">10 Ingredients</p>
                <span>All recipes require not more than 30 minutes to make</span></div>
                <div><p className="font-semibold text-xl">1 Bowl</p>
                <span>All recipes require not more than 30 minutes to make</span></div>
                <div><p className="font-semibold text-xl">30 Minutes</p>
                <span>All recipes require not more than 30 minutes to make</span></div>
                
        </div></div>
        <div className="flex flex-col items-start px-4 gap-4 my-4">
            <h1 className="text-3xl font-bold font-[dmserif] my-4">What’s A Rich Text Element?</h1>
            <p>The rich text element allows you to create and format headings, paragraphs, blockquotes,    <br/> images, and video all in one place instead of having to add and format them individually.    <br/> Just double-click and easily create content.</p>

                <h2 className="text-xl font-semibold" >Static and dynamic content editing</h2>
                <p>A rich text element can be used with static or dynamic content. For static content, just drop    <br/> it into any page and begin editing. For dynamic content, add a rich text field to any collection    <br/> and then connect a rich text element to that field in the settings panel. Voila!</p>

                <h2 className="text-xl font-semibold">How to customize formatting for each rich text</h2>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled    <br/> after a className is added to the rich text element using the "When inside of" nested selector    <br/> system.</p>
          
        </div>
        </div>
        </div>

    </section>

    <section className="w-full py-[40px] my-[100px]">
        <div className="container mx-auto flex">
            <div className="w-1/2">
                <img
                  src="img/aboutImg_2.jpg"
                  alt=""
                  className="h-[556px] w-full object-cover"
                />
              </div>
          <div
            className="w-1/2 bg-[#4f5666] flex flex-col justify-center items-center text-white gap-7 text-center"
          >
            <p className="font-semibold text-sm">COOKBOOK</p>
            <h2 className="text-5xl font-bold font-[dmserif]">
                Get Our Free Digital<br /> Cookbook 
             
            </h2>
            <span
              >This is some text inside of a div block.</span
            >
            <p className="w-1/2 bg-white py-2 px-4 flex items-center">
            <i className="ri-mail-fill text-[#4f5666] px-2 text-2xl"></i><input className="text-black bg-transparen outline-none" type="text" name="" id="" placeholder="Enter your Email"/></p>
            <button
              className="w-1/2 bg-[#23262e] px-5 py-3 font-semibold text-white font-sans duration-500 ease-out "
            >
       Download
            </button>
          </div>
         
        </div>
      </section>


      <section className="w-full py-[40px] my-[100px]">
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

