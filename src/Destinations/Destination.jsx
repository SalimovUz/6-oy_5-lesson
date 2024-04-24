import React from 'react'
import img1 from "../images/photos/hero1.svg"
import img2 from "../images/photos/hero2.svg"
import img3 from "../images/photos/hero3.svg"
import img4 from "../images/photos/hero4.svg"
import icon from "../images/icons/hero-icon.svg"
import vector from "../images/icons/vectoruz.svg";


const Destination = () => {
  return (
    <div>
      <main className="mt-44">
        <div className="top flex justify-between">
          <div className="left">
            <h1 className="font-playfair font-bold text-3xl leading-50 text-left text-black">
              Featured destinations
            </h1>
          </div>
          <div className="right">
            <button className="flex items-center gap-2 font-inter font-semibold text-base leading-60 text-left text-yellow-500">
              View all
<img src={vector} alt="" />
            </button>
          </div>
        </div>

        <div className="bottom flex gap-7 mt-12">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <img className="mt-6 justify-center mx-auto" src={icon} alt="" />
      </main>
    </div>
  );
}

export default Destination