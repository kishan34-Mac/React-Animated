import React from "react";
import Video from "../components/home/video";
import HomeHeroText from '../components/home/HomeBottomText'
import HomeText from '../components/home/HomeBottomText'
const HomeheroText = () => {
  return (
    <div className="h-screen w-screen fixed ">
     

      <div className="h-screen w-screen relative">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default HomeheroText;
