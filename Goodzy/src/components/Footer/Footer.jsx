import React from 'react'

export default  function Footer() {
  return (
  <>

<footer className="w-full bg-black text-white ">
    <div className="container mx-auto bg-transparent ">
      <div className="flex items-center flex-col py-8">
      <div><h1 className="text-center font-semibold text-4xl font-[dmserif] my-4">GOODZY</h1>
      <p className="text-sm">Easy healthy recipes that make you feel good</p></div>
      <div className="my-5 flex justify-evenly gap-5 text-xl">
        <a href=""><i className="ri-facebook-circle-fill"></i></a>
        <a href=""><i className="ri-instagram-line"></i></a>
        <a href=""><i className="ri-twitter-fill"></i></a>
        <a href=""><i className="ri-pinterest-fill"></i></a>
      </div>
      <div className="flex justify-evenly items-center gap-7 text-sm my-5">
        <div>All Recipes</div>
      <div>About</div>
      <div>For Partners</div>
      <div>Recipe FAQ</div>
    </div>
<hr color="white" width="100%" height="50%"/>
    <div className="flex items-center justify-between gap-10 my-5 ">
      <div className="font-semibold">Webflow Admin:</div>
      <div>Licencing</div>
      <div>Changelog</div>
      <div>Style Guide</div>
      <div>404</div>
    </div>
    <hr color="white" width="100%" height="50%"/>
    <div className="my-5 text-sm">Copyright 2022 — Powered by <a href="" className="underline"> Webflow </a>— Developed by <a href="" className="underline"> Anastasiia G.</a></div>
    </div>
    </div>
  </footer>
  </>
  )
}

