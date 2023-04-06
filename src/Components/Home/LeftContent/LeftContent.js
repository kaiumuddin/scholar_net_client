import React from 'react';
import CreateNewPost from './CreateNewPost/CreateNewPost';
import RecentStories from './RecentStories/RecentStories';
import SuggestedUsers from './SuggestedUsers/SuggestedUsers';
import UsersPosts from './UsersPosts/UsersPosts';
const LeftContent = () => {
  return (
    <>
      <div className='p-0'>
        <CreateNewPost></CreateNewPost>
        {/* <RecentStories></RecentStories> */}
        <div className='hidden md:block'>
          <SuggestedUsers></SuggestedUsers>
        </div>
        <UsersPosts></UsersPosts>
      </div>
    </>
  );
};

export default LeftContent;