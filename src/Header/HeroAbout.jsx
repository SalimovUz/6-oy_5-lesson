import React from "react";
import heroImg from "../images/photos/hero2-photo.svg";
import Button from "../Buttons/Buttton";

const HeroAbout = () => {
  return (
    <div>
      <div className="hero flex mt-32 gap-16 items-center">
        <div className="hero__left">
          <img src={heroImg} alt="" />
        </div>

        <div className="hero__right">
          <h1 className="font-playfair font-bold text-3xl leading-50 text-left text-black mb-3 w-[430px]">
            A new way to explore the world
          </h1>

          <h3 className="font-mulish font-light text-base leading-30 text-left text-gray-700 mb-8 w-[430px]">
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </h3>

          <Button text="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
