import React from 'react'
import {Author_Resources, Logoholder,Peak_of_Week,AboutGoodzy} from '../CommonComponents/index'
export default function Home() {
  return (
    <>
    
  <section
    className="text-[#23262e] w-full h-[550px] bg-cover bg-center bg-no-repeat relative"
    style={{backgroundImage:`url('img/main.jpg')`}}
  >
    <div className="container mt-[100px] absolute ml-[124px]">
      <h1 className="text-6xl leading-[4.5rem] font-semibold mb-4 font-[dmserif]">
        Over 500 Easy <br />Healthy Meal <br />
        Preparation Recipes
      </h1>
      <p className="font-light font-sans mb-8">
        Get your family excited about meals again with easy <br />and healthy
        recipes from GOODZY cooking blog.
      </p>
      <button
        className="border border-black px-5 py-2 font-semibold text-black font-sans hover:bg-black hover:text-white duration-500 ease-out"
      >
        View All Recipes<i className="ri-arrow-right-s-line hover:text-white"></i>
      </button>
    </div>
  </section>

  <AboutGoodzy/>

  <section className="w-full my-[100px]">
    <div className="container mx-auto">
      <h1
        className="font-[dmserif] text-5xl font-semibold text-center text-[#23262e] my-10 mb-[70px]"
      >
        Featured Recipes
      </h1>
      <div className="flex justify-between gap-8 my-8">
        <div className="flex flex-col justify-center gap-3 items-center">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="img/fimg_1.jpg"
              className="hover:scale-125 ease duration-1000"
              alt=""
            />
          </div>
          <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
          <span className="font-bold text-lg"
            >Baked zucchini with tomatoes and onions</span
          >
        </div>
        <div className="flex flex-col justify-center gap-3 items-center">
          <div className="img" style={{overflow: "hidden"}}>

                  <img
              src="img/fimg_2.jpg"
              alt=""
              className="hover:scale-125 ease duration-1000"
            />
          </div>
          <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
          <span className="font-bold text-lg"
            >Baked zucchini with tomatoes and onions</span
          >
        </div>
        <div className="flex flex-col justify-center gap-3 items-center">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="img/fimg_3.jpg"
              alt=""
              className="hover:scale-125 ease duration-1000"
            />
          </div>
          <p className="text-[#a76e63] font-semibold text-sm mt-3">FEATURED</p>
          <span className="font-bold text-lg"
            >Baked zucchini with tomatoes and onions</span
          >
        </div>
      </div>
      <p className="text-center">
        <button
          className="border border-black px-5 py-2 font-semibold text-black font-sans hover:bg-black hover:text-white duration-500 ease-out"
        >
          View All Recipes<i
            className="ri-arrow-right-s-line hover:text-white"
          ></i>
        </button>
      </p>
    </div>
  </section>


  <Peak_of_Week/>


  <section className="w-full my-[100px]">
    <div className="container mx-auto">
      <h1
        className="font-[dmserif] text-5xl font-semibold text-center text-[#23262e] my-10 mb-[70px]"
      >
        Popular Categories
      </h1>

      <div
        className="flex justify-between items-center text-center mb-[70px] md:container md:flex-wrap sm:flex-wrap sm:gap-3 sm:justify-around max-w-[630px]:flex-wrap max-w-[630px]:gap:4"
      >
        <div className="flex gap-7 flex-col">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="img/Popular_1.jpg"
              alt=""
              className="hover:scale-110 ease duration-500"
            />
          </div>
          <p className="font-bold text-xl">Breakfast</p>
        </div>
        <div className="flex gap-7 flex-col">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="./img/Popular_2.jpg"
              alt=""
              className="hover:scale-110 ease duration-500"
            />
          </div>
          <p className="font-bold text-xl">Dessert</p>
        </div>
        <div className="flex gap-7 flex-col">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="img/Popular_3.jpg"
              alt=""
              className="hover:scale-110 ease duration-500"
            />
          </div>
          <p className="font-bold text-xl">Drinks</p>
        </div>
        <div className="flex gap-7 flex-col">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="img/Popular_4.jpg"
              alt=""
              className="hover:scale-110 ease duration-500"
            />
          </div>
          <p className="font-bold text-xl">Main Course</p>
        </div>
        <div className="flex gap-7 flex-col">
          <div className="img" style={{overflow: "hidden"}}>
            <img
              src="img/Popular_5.jpg"
              alt=""
              className="hover:scale-110 ease duration-500"
            />
          </div>
          <p className="font-bold text-xl">Snacks</p>
        </div>
      </div>

      <p className="text-center">
        <button
          className="border border-black px-5 py-2 font-semibold text-black font-sans hover:bg-black hover:text-white duration-500 ease-out"
        >
          View All Recipes<i
            className="ri-arrow-right-s-line hover:text-white"
          ></i>
        </button>
      </p>
    </div>
  </section>

  <section className="w-full bg-[#f2ebe5] py-10 text-center my-[100px]">
    <div className="container mx-auto font-semibold">
      Have questions about a recipe?
      <a href="#" target="_self " className="text-[#a76e63] underline">
        Check our recipe FAQ</a
      >
    </div>
  </section>

 <Author_Resources/>



  <section className="w-full my-[100px]">
  <div className="container mx-auto">
    <div className="w-full flex">
      <img
        src="/img/Idea_img.jpg" 
        width="720px"
        height="625px"
        className="w-1/2"
        alt="Idea Behind GOODZY"
      />
      <div className="w-1/2 bg-[#f2ebe5] text-[#a76e63] pl-[100px] py-[100px]">
        <h2 className="text-5xl font-semibold  text-left mb-10 font-[dmserif] pl-[-10px]">
          Idea Behind GOODZY
        </h2>
        <div className="mb-6 ">
          <p className="font-semibold text-xl">10 Ingredients</p>
          <span>All recipes require not more than 30 minutes to make</span>
        </div>
        <div className="mb-6">
          <p className="font-semibold text-xl">1 Bowl</p>
          <span>All recipes require not more than 30 minutes to make</span>
        </div>
        <div className="mb-6">
          <p className="font-semibold text-xl">30 Minutes</p>
          <span>All recipes require not more than 30 minutes to make</span>
        </div>
        <button className="mt-5 border border-black px-5 py-2 font-semibold bg-transparent text-black font-sans hover:bg-black hover:text-white duration-500 ease-out">
          Learn more
          <i className="ri-arrow-right-s-line ml-1"></i>
        </button>
      </div>
    </div>
  </div>
</section>


  <Logoholder/>

</>
  )
}

