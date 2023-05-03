import { Button, Card } from "flowbite-react";
import React from "react";

const Categories = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 pb-10 my-8 rounded card">
      <div className="mb-6 divide-y-2 divide-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-2">Categories</h1>
          <Button className="mb-2" color="light">
            View All
          </Button>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center">
 {     [1,1,1,1,11,2].map((index) => 
 
 <Card className="card" key={index}>
 <img className="h-12 w-12 mx-auto" src="https://wpkixx.com/html/socimo/images/brand1.png" alt="" />
 <h5 className="text-md font-sans mx-auto font-semibold">
   HTML5 COURSES
 </h5>
 <div className="flex justify-between items-center text-sm">
   <p>6 Courses</p>
   <p>5 Bundles</p>
 </div>
</Card>

 )}
      </div>
    </div>
  );
};

export default Categories;
