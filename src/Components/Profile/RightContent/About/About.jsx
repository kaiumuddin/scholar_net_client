import React from "react";
import { GrTrophy } from "@react-icons/all-files/gr/GrTrophy";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";


const About = () => {
  return (
    <div>
      <div className="bg-gray-50 border-2 p-6 gap-12 rounded-md lg:flex">
        <div className="flex flex-col gap-4">
          <h2 className="text-md font-semibold">About Me!</h2>
          <p>
            Hi! My name is Georg Peeter but some people may know me as peeter! I
            have a Twitch channel where I stream, play and review all the newest
            games.
          </p>
          <div className="flex items-center gap-4 text-4xl">
            <GrTrophy></GrTrophy>
            <GrTrophy></GrTrophy>
            <GrTrophy></GrTrophy>
            <GrTrophy></GrTrophy>
          </div>
        </div>

        <div className="text-md font-semibold flex flex-col gap-3 mt-10 lg:mt-0">
          <h2>Share Profile</h2>
          <div className="flex items-center gap-3 text-4xl">
            <FaFacebook></FaFacebook>
            <AiFillTwitterCircle></AiFillTwitterCircle>
            <AiFillGithub></AiFillGithub>
            <AiFillInstagram></AiFillInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
