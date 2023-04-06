import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

const Home = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
      <div className="col-span-2 md:mr-5">
        <LeftContent></LeftContent></div>
      <div className="hidden lg:block">
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default Home;
