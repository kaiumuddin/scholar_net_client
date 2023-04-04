import { MdVerifiedUser } from "@react-icons/all-files/md/MdVerifiedUser";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="max-w-full relative">
        <img
          className="w-full rounded-xl"
          src="https://wpkixx.com/html/socimo/images/resources/profile-banner.jpg"
          alt=""
        />
        <img
          className="absolute bottom-6 left-6 h-32 rounded-full border-4"
          src="https://wpkixx.com/html/socimo/images/resources/user.jpg"
          alt=""
        />
        <div className="flex items-center justify-center gap-2 absolute bottom-6 right-6 bg-white text-sm py-2 px-4 rounded-3xl">
          <MdVerifiedUser></MdVerifiedUser>
          <button className="">Follow</button>
        </div>
      </div>

      <div className="my-4 lg:flex justify-between items-center">
        <div>
          <h4 className="text-xl font-semibold">Name</h4>
          <p className="text-sm text-cyan-500 font-bold">@name</p>
        </div>

        <div className="lg:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold">Joined:</h4>
            <p className="text-sm text-gray-400 font-semibold">April 2020</p>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold">Follow:</h4>
            <p className="text-sm text-gray-400 font-semibold">55K</p>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold">Followers:</h4>
            <p className="text-sm text-gray-400 font-semibold">2.2K</p>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold">Posts:</h4>
            <p className="text-sm text-gray-400 font-semibold">22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
