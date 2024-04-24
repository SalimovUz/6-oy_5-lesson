import React from 'react'
import Testimionals from "../images/photos/testimionals.svg"
import star from "../images/icons/stars.svg"

const Client = () => {
  return (
    <div>
      <div className="client mt-40">
        <h1 className="font-playfair font-bold text-3xl leading-50 text-left text-black">
          Testimionals
        </h1>

        <div className="comment flex gap-28 items-center">
          <div className="left">
            <img className="mt-8" src={star} alt="" />

            <p className="w-[430px] mt-20 font-muli text-base font-semibold leading-36 text-left text-black">
              “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
              dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
              amet turpis nec”
            </p>

            <h1 className="font-inter font-bold text-base leading-48 text-left text-black mt-12">
              Salimov To'lqin
            </h1>

            <h3 className="mt-1 font-inter text-base font-normal leading-48 text-left text-black">
              Founder NakFreeUzBot
            </h3>
          </div>

          <div className="right">
            <img src={Testimionals} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client