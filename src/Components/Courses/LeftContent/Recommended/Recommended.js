import React from "react";
import { Carousel } from "flowbite-react";

const Recommended = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 pb-10 my-8 rounded">
      <div className="mb-6 divide-y-2 divide-gray-200">
        <h1 className="text-xl font-semibold mb-2">Recommended Books</h1>
        <div></div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Recommended;
