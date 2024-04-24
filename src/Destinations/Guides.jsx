import React from 'react'
import Guidess from "../images/photos/hero-guides.svg"
import Button from '../Buttons/Buttton';
import icon from "../images/icons/hero-icon.svg"

const Guides = () => {
  return (
    <div>
      <div className="aha flex items-center gap-20 mt-40">
        <div className="left">
          <img className='mb-12 ml-12' src={icon} alt="" />
          <h1 className="font-playfair font-bold text-3xl leading-50 text-left text-black mb-3 w-[430px]">
            Guides by Thousand Sunny
          </h1>

          <h3 className="font-mulish font-light text-base leading-30 text-left text-gray-700 mb-8 w-[430px]">
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
          </h3>

          <Button text="Download" />
        </div>
        <div className="right">
          <img src={Guidess} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Guides