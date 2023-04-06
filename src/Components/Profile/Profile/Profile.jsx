import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container max-w-screen-xl mx-auto px-5 my-12">
      <div>
        <LeftContent></LeftContent>
      </div>
      <div className="lg:col-span-2">
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default Profile;
