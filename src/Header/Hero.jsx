import React from "react";
import HeroPhoto from "../images/photos/hero-photo.svg";
import Button from "../Buttons/Buttton";

const Hero = () => {
  return (
    <div>
      <div className="hero mt-20 flex gap-36 items-center">
        <div className="hero__left">
          <h1 className="font-playfair font-bold text-5xl leading-80 text-left text-gray-900">
            Explore and Travel
          </h1>

          <div className="holiday">
            <h3 className="font-inter font-semibold text-base leading-tight text-left text-gray-900 mt-12 mb-2">
              Holiday finder
            </h3>

            <span>---</span>

            <div className="top flex mt-12 gap-4">
              <select
                className="w-44 h-12 border border-solid border-gray-300 rounded-md px-4 py-3"
                name=""
                id=""
              >
                <option value="">Location</option>
                <option value="">Regodev</option>
              </select>

              <select
                className="w-44 h-12 border border-solid border-gray-300 rounded-md px-4 py-3"
                name=""
                id=""
              >
                <option value="">Activity</option>
                <option value="">Regodev</option>
              </select>
            </div>

            <div className="bottom flex gap-4 mt-4">
              <select
                className="w-44 h-12 border border-solid border-gray-300 rounded-md px-4 py-3"
                name=""
                id=""
              >
                <option value="">Grade</option>
                <option value="">Regodev</option>
              </select>

              <select
                className="w-44 h-12 border border-solid border-gray-300 rounded-md px-4 py-3 mb-10"
                name=""
                id=""
              >
                <option value="">Date</option>
                <option value="">Regodev</option>
              </select>
            </div>

            <Button text="Explore" />
          </div>
        </div>

        <div className="hero__right">
          <img className="w-4/5 h-100" src={HeroPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
