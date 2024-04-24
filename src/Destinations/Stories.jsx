import React from 'react'
import vector from "../images/icons/vectoruz.svg";
import mask1 from "../images/photos/mask1.svg"
import mask2 from "../images/photos/mask2.svg"
import mask3 from "../images/photos/mask3.svg"
import mask4 from "../images/photos/mask4.svg";



const Stories = () => {
  return (
    <div>
      <div className="stories mt-40">
        <div className="top flex justify-between">
          <div className="left">
            <h1 className="font-playfair font-bold text-3xl leading-50 text-left text-black">
              Trending stories
            </h1>
          </div>
          <div className="right">
            <button className="flex items-center gap-2 font-inter font-semibold text-base leading-60 text-left text-yellow-500">
              View all
              <img src={vector} alt="" />
            </button>
          </div>
        </div>

        <div className="bottom flex gap-6 mt-12">
          <div className="card">
            <img className="mb-[-20px]" src={mask1} alt="" />

            <h1 className="font-inter font-bold text-base leading-60 text-left w-56 text-black">
              The many benefits of taking a healing holiday
            </h1>

            <p className="font-inter text-sm font-normal leading-26 text-left w-64 text-gray-400 mt-2 mb-4">
              ‘Helaing holidays’ are on the rise tohelp maximise your health and
              happines...
            </p>

            <a
              className="text-orange-400 font-inter font-semibold text-sm leading-28 text-left"
              href="#"
            >
              Read more
            </a>
          </div>

          <div className="card">
            <img className="w-[350px] h-[360px] mb-[-90px] mt-2" src={mask2} alt="" />

            <h1 className="font-inter font-bold text-base leading-60 text-left w-56 text-black">
              The many benefits of taking a healing holiday
            </h1>

            <p className="font-inter text-sm font-normal leading-26 text-left w-64 text-gray-400 mt-2 mb-4">
              ‘Helaing holidays’ are on the rise tohelp maximise your health and
              happines...
            </p>

            <a
              className="text-orange-400 font-inter font-semibold text-sm leading-28 text-left"
              href="#"
            >
              Read more
            </a>
          </div>

          <div className="card">
            <img
              className="w-[270px] h-[290px] mt-[-23px]"
              src={mask3}
              alt=""
            />

            <h1 className="font-inter font-bold text-base leading-60 text-left w-56 text-black">
              The many benefits of taking a healing holiday
            </h1>

            <p className="font-inter text-sm font-normal leading-26 text-left w-64 text-gray-400 mt-2 mb-4">
              ‘Helaing holidays’ are on the rise tohelp maximise your health and
              happines...
            </p>

            <a
              className="text-orange-400 font-inter font-semibold text-sm leading-28 text-left"
              href="#"
            >
              Read more
            </a>
          </div>

          <div className="card">
            <img
              className=" w-[260px] h-[270px] mt-[-10px]"
              src={mask4}
              alt=""
            />

            <h1 className="font-inter font-bold text-base leading-60 text-left w-56 text-black">
              The many benefits of taking a healing holiday
            </h1>

            <p className="font-inter text-sm font-normal leading-26 text-left w-64 text-gray-400 mt-2 mb-4">
              ‘Helaing holidays’ are on the rise tohelp maximise your health and
              happines...
            </p>

            <a
              className="text-orange-400 font-inter font-semibold text-sm leading-28 text-left"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories