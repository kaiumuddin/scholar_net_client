import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-12 container mx-auto max-w-screen-lg my-12">
        <div className="col-span-2">
          <LeftContent></LeftContent></div>
        <div className="">
          <RightContent></RightContent>
        </div>
      </div>
    </>
  );
};

export default Home;
