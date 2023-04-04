import React from "react";
import Courses from "./Courses/Courses";
import Categories from "./Categories/Categories";
import Recommended from "./Recommended/Recommended";

const LeftContent = () => {
  return (
    <div>
        <Courses></Courses>
        <Categories></Categories>
        <Recommended></Recommended>
    </div>
  );
};

export default LeftContent;
