import React from "react";
import BooksSlider from "../../../Shared/BooksSlider/BooksSlider";

const Categories = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 pb-10 rounded my-12">
      <div className="mb-6 divide-y-2 divide-gray-200">
        <h1 className="text-xl font-semibold mb-2">Categories</h1>
        <div></div>
      </div>

      <BooksSlider></BooksSlider>
    </div>
  );
};

export default Categories;
