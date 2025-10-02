import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed top-0 left-0 h-screen w-screen z-0">
        <Video />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-screen">
        <HomeBottomText />
        <HomeHeroText />
      </div>
    </div>
  );
};

export default Home;
