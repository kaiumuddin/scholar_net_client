import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

const Profile = () => {
<<<<<<< HEAD
    return (
        <div className='m-20'>
            <Link className='p-4 text-blue-600' to='/profilePrivacy'>Privacy Settings</Link>
        </div>
    );
=======
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
>>>>>>> 8e66191cf2f5f051895bf2ba3f8c396219129c3f
};

export default Profile;
