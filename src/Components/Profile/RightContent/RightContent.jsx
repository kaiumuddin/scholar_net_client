import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import FeaturesOption from "./FeaturesOption/FeaturesOption";

const RightContent = () => {
  return (
    <div>
        <Banner></Banner>
        <FeaturesOption></FeaturesOption>
        <About></About>
    </div>
  );
};

export default RightContent;
