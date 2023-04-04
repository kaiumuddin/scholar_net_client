import React from "react";
import { FiBookmark } from "@react-icons/all-files/fi/FiBookmark";

const PopularBooks = () => {
  return (
    <div className="mb-10 border border-gray-300 bg-gray-50 px-6 py-4 pb-10 rounded">
      <div className="mb-6">
        <h1 className="text-lg font-semibold mb-2">Popular Books</h1>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-5 items-center relative">
          <img
            className="h-36 w-28"
            src="https://wpkixx.com/html/socimo/images/resources/book10.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Vu.js 2 Basics</h3>
            <p className="text-sm text-cyan-600 font-sans">Author</p>
          </div>
          <FiBookmark className="absolute bottom-10 right-16 text-xl text-cyan-600"></FiBookmark>
        </div>
        <div className="flex gap-5 items-center relative">
          <img
            className="h-36 w-28"
            src="https://wpkixx.com/html/socimo/images/resources/book9.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Vu.js 2 Basics</h3>
            <p className="text-sm text-cyan-600 font-sans">Author</p>
          </div>
          <FiBookmark className="absolute bottom-10 right-16 text-xl text-cyan-600"></FiBookmark>
        </div>
        <div className="flex gap-5 items-center relative">
          <img
            className="h-36 w-28"
            src="https://wpkixx.com/html/socimo/images/resources/book5.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Vu.js 2 Basics</h3>
            <p className="text-sm text-cyan-600 font-sans">Author</p>
          </div>
          <FiBookmark className="absolute bottom-10 right-16 text-xl text-cyan-600"></FiBookmark>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
