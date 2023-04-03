import React from "react";
import { Card } from "flowbite-react";
import { MdSlowMotionVideo } from "@react-icons/all-files/md/MdSlowMotionVideo";
import { BiTime } from "@react-icons/all-files/bi/BiTime";
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

const Courses = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 pb-10 rounded">
      <div className="mb-6 divide-y-2 divide-gray-200">
        <h1 className="text-xl font-semibold mb-2">Courses</h1>
        <div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8">
        <Card
          className="relative"
          imgSrc="https://wpkixx.com/html/socimo/images/resources/course-5.jpg"
        >
          <div className="absolute top-4 left-0 text-white bg-cyan-600 px-2 py-1 text-md font-semibold shadow-2xl">
            <p>Best Seller</p>
          </div>

          <div class="absolute bottom-48 left-4 bg-amber-400 text-white h-5 rounded-2xl flex gap-1 items-center p-3 justify-center">
            <AiFillStar></AiFillStar>
            <p>4.5</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="h-8 rounded-3xl bg-slate-200 p-1"
                  src="https://t4.ftcdn.net/jpg/05/09/59/75/240_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">By: Sarah K</p>
                <p className="text-xs text-sky-600">HTML</p>
              </div>
            </div>
            <div className="flex gap-1 items-center text-gray-400 font-semibold">
              <GiShoppingCart className="text-xl"></GiShoppingCart>
              <p className="text-xl">$29</p>
            </div>
          </div>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Wordpress Advanced
          </h5>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <MdSlowMotionVideo></MdSlowMotionVideo>
              <p>20 Lectures</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiTime></BiTime>
              <p>20 Hrs</p>
            </div>
          </div>
        </Card>

        <Card
          className="relative"
          imgSrc="https://wpkixx.com/html/socimo/images/resources/course-2.png"
        >
          <div className="absolute top-4 left-0 text-white bg-cyan-600 px-2 py-1 text-md font-semibold shadow-2xl">
            <p>Best Seller</p>
          </div>

          <div class="absolute bottom-48 left-4 bg-amber-400 text-white h-5 rounded-2xl flex gap-1 items-center p-3 justify-center">
            <AiFillStar></AiFillStar>
            <p>4.5</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="h-8 rounded-3xl bg-slate-200 p-1"
                  src="https://t4.ftcdn.net/jpg/05/09/59/75/240_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">By: Sarah K</p>
                <p className="text-xs text-sky-600">HTML</p>
              </div>
            </div>
            <div className="flex gap-1 items-center text-gray-400 font-semibold">
              <GiShoppingCart className="text-xl"></GiShoppingCart>
              <p className="text-xl">$29</p>
            </div>
          </div>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Wordpress Advanced
          </h5>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <MdSlowMotionVideo></MdSlowMotionVideo>
              <p>20 Lectures</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiTime></BiTime>
              <p>20 Hrs</p>
            </div>
          </div>
        </Card>

        <Card
          className="relative"
          imgSrc="https://wpkixx.com/html/socimo/images/resources/course-3.jpg"
        >
          <div className="absolute top-4 left-0 text-white bg-cyan-600 px-2 py-1 text-md font-semibold shadow-2xl">
            <p>Best Seller</p>
          </div>

          <div class="absolute bottom-48 left-4 bg-amber-400 text-white h-5 rounded-2xl flex gap-1 items-center p-3 justify-center">
            <AiFillStar></AiFillStar>
            <p>4.5</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="h-8 rounded-3xl bg-slate-200 p-1"
                  src="https://t4.ftcdn.net/jpg/05/09/59/75/240_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">By: Sarah K</p>
                <p className="text-xs text-sky-600">HTML</p>
              </div>
            </div>
            <div className="flex gap-1 items-center text-gray-400 font-semibold">
              <GiShoppingCart className="text-xl"></GiShoppingCart>
              <p className="text-xl">$29</p>
            </div>
          </div>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Wordpress Advanced
          </h5>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <MdSlowMotionVideo></MdSlowMotionVideo>
              <p>20 Lectures</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiTime></BiTime>
              <p>20 Hrs</p>
            </div>
          </div>
        </Card>

        <Card
          className="relative"
          imgSrc="https://wpkixx.com/html/socimo/images/resources/course-4.jpg"
        >
          <div className="absolute top-4 left-0 text-white bg-cyan-600 px-2 py-1 text-md font-semibold shadow-2xl">
            <p>Best Seller</p>
          </div>

          <div class="absolute bottom-48 left-4 bg-amber-400 text-white h-5 rounded-2xl flex gap-1 items-center p-3 justify-center">
            <AiFillStar></AiFillStar>
            <p>4.5</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="h-8 rounded-3xl bg-slate-200 p-1"
                  src="https://t4.ftcdn.net/jpg/05/09/59/75/240_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500">By: Sarah K</p>
                <p className="text-xs text-sky-600">HTML</p>
              </div>
            </div>
            <div className="flex gap-1 items-center text-gray-400 font-semibold">
              <GiShoppingCart className="text-xl"></GiShoppingCart>
              <p className="text-xl">$29</p>
            </div>
          </div>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Wordpress Advanced
          </h5>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <MdSlowMotionVideo></MdSlowMotionVideo>
              <p>20 Lectures</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiTime></BiTime>
              <p>20 Hrs</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
