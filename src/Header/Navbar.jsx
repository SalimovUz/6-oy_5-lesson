import React from "react";
import Logo from "../images/logos/navbar-logo.svg";
import Button from "../Buttons/Buttton";

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between">
        <div className="navbar__left">
          <img src={Logo} alt="" />
        </div>

        <ul className="navbar__right flex items-center gap-2">
          <li>
            <a
              className="text-base text-gray-800 font-inter font-medium p-4"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className=" transition-all duration-300 font-inter font-normal text-base leading-tight text-gray-300 hover:text-gray-800 hover:font-medium p-4"
              href="#"
            >
              Destinations
            </a>
          </li>
          <li>
            <a
              className="transition-all duration-300 font-inter font-normal text-base leading-tight text-gray-300 hover:text-gray-800 hover:font-medium p-4"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="transition-all duration-300 font-inter font-normal text-base leading-tight text-gray-300 hover:text-gray-800 hover:font-medium p-4"
              href="#"
            >
              Partner
            </a>
          </li>
          <button className="w-32 h-10 rounded-md border border-solid border-orange-400 text-orange-400 font-inter font-medium text-md leading-60 hover:bg-orange-400 hover:text-white transition-all duration-500">
            Login
          </button>
          <Button text="Registor" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
