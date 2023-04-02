import React from 'react';
import { NavLink } from 'react-router-dom';
import "./RecentStories.css";
import AddStoryModal from '../Modals/AddStoryModal/AddStroyModal';
const RecentStories = () => {

    return (

        <>

            <div className="my-12">
                <div className="flex justify-between mt-8 px-4">
                    <h2> Recent stories </h2>
                    <NavLink to="/see-all" className="text-blue-600">See all</NavLink>
                </div>

                <div className="flex justify-center">
                    <div className="flex">
                        {/* add stories */}
                        <div className='mt-11'>
                            <div className="my-3 hidden md:block">
                                <div className="addUserStoryImageBackground">

                                </div>
                                <div className="userStoryImageLogo">
                                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg" alt="user_logo" className='h-12 w-12 rounded-full border-2 border-white ms-5 ' />
                                    <div>
                                        <button data-modal-target="AddStoryModal" data-modal-toggle="AddStoryModal">
                                            <i className="fa-solid fa-plus text-white text-xl font-bold -ms-1 addStoriesIcon rounded-full f border-2 border-white p-4 bg-blue-500 hover:cursor-pointer"></i>
                                        </button>

                                    </div>
                                    <p className='text-white py-2 text-sm bg-gray-400 w-42 addUserImageTextOfStories'>Add Your Story </p>
                                </div>
                            </div>
                        </div>
                        {/* stories images  */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                            {
                                [0, 1, 2].map((index) =>

                                    <div className='mt-11' key={index}>
                                        <div className="my-3">
                                            <div className="UserStoryImageBackground" style={{ backgroundImage: `url(${'https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg'})` }}>
                                            </div>
                                            <div className="userStoryImageLogo">
                                                <img src="https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg" alt="user_logo" className='h-12 w-12 rounded-full border-2 border-white ms-5 ' />
                                                <p className='text-white py-2 text-sm bg-gray-400 w-42 userImageTextOfStories'> Natural hd picture </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    </div>
                </div>
            <AddStoryModal></AddStoryModal>
        </>
    );
};

export default RecentStories;