import React from "react";
import { Helmet } from "react-helmet";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

const Home = () => {
  return (
   <>
   <Helmet><title> Home page </title></Helmet>
    <div className="grid grid-cols-3 gap-4 container max-w-screen-xl mx-auto px-5 my-12">
      <div className="col-span-2"><LeftContent></LeftContent></div>
      <div><RightContent></RightContent></div>
    </div>
    </>
  );
};

export default Home;
