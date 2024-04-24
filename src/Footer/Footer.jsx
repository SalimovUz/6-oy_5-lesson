import React from "react";
import Logo from "../images/logos/navbar-logo.svg";
import social from "../images/icons/social media.svg"

const Footer = () => {
  return (
    <div className=" bg-gray-200 mt-40 pt-16 pl-16 pb-12 pr-16">
      <footer className="container mx-auto">
        <div className="flex gap-36">
          <div className="line">
            <a href="#">
              <img src={Logo} alt="" />
            </a>

            <p className="mt-8 w-72 text-gray-400">
              Plan and book your perfect trip with expert advice, travel tips
              destination information from us
            </p>

            <p className="mt-10 text-gray-400 w-88">
              ©2020 Thousand Sunny. All rights reserved
            </p>
          </div>

          <div className="line flex flex-col gap-3">
            <h1 className="font-semibold text-md mb-4">Destinations</h1>

            <a className="text-gray-400" href="#">
              Africa
            </a>
            <a className="text-gray-400" href="#">
              Antarctica
            </a>
            <a className="text-gray-400" href="#">
              Asia
            </a>
            <a className="text-gray-400" href="#">
              Europe
            </a>
            <a className="text-gray-400" href="#">
              America
            </a>
          </div>

          <div className="line flex flex-col gap-3">
            <h1 className="font-semibold text-md mb-4">Shop</h1>

            <a className="text-gray-400" href="#">
              Destination Guides
            </a>
            <a className="text-gray-400" href="#">
              Pictorial & Gifts
            </a>
            <a className="text-gray-400" href="#">
              Special Offers
            </a>
            <a className="text-gray-400" href="#">
              Dilevery times
            </a>
            <a className="text-gray-400" href="#">
              FAQs
            </a>
          </div>

          <div className="line flex flex-col gap-3">
            <h1 className="font-semibold text-md mb-4">Interests</h1>

            <a className="text-gray-400" href="#">
              Adventure travels
            </a>
            <a className="text-gray-400" href="#">
              Art and culture
            </a>
            <a className="text-gray-400" href="#">
              Wildlife and adventure
            </a>
            <a className="text-gray-400" href="#">
              Family holidays
            </a>
            <a className="text-gray-400" href="#">
              Food and drink
            </a>
          </div>
        </div>

        <div className="line w-full bg-gray-400 h-[2px] mt-20"></div>

        <a href="#">
          <img className="justify-center mx-auto mt-10" src={social} alt="" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
