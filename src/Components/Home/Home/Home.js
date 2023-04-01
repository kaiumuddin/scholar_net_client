import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";
import "./Home.css";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 container max-w-screen-xl mx-auto px-5 my-12">
      <div className="lg:col-span-2"><LeftContent></LeftContent></div>
      <div><RightContent></RightContent></div>
    </div>
  );
};

export default Home;
