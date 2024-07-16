import React from 'react'

export default function AboutGoodzy() {
    return(
<>
<section className="w-full px-5 mt-[80px] mb-[100px]">
    <div
      className="container mx-auto flex items-center justify-around lg:flex-row md:flex-col md:gap-10 max-[770px]:flex-col max-[770px]:gap-y-10"
    >
      <div className="">
        <img src="img/icon_1.png" className="w-[60px] h-[60px]" alt="" />
        <h4 className="font-semibold my-4 text-2xl">500+ recipes</h4>
        <p>
          We've developed over 500 recipes. <br />
          Follow for some more!
        </p>
      </div>
      <div>
        <img src="img/icon_2.png" className="w-[60px] h-[60px]" alt="" />
        <h4 className="font-semibold my-4 text-2xl">10 Ingredients</h4>
        <p>
          All our recipes require not more than 10 <br />
          simple ingredients
        </p>
      </div>
      <div>
        <img src="img/icon_3.png" className="w-[60px] h-[60px]" alt="" />
        <h4 className="font-semibold my-4 text-2xl">Weekly updates</h4>
        <p>
          We post new recipes every week, stay <br />
          tuned for updates!
        </p>
      </div>
    </div>
  </section>


</>



    )

};
