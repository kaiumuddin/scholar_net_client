import React from 'react';
import pictureImage from  "../../../../Assets/iconImage/picImage.png"
import activitiesImage from "../../../../Assets/iconImage/feeling.png"
import liveStream from "../../../../Assets/iconImage/liveStreamImage.png"
import PostModal from '../Modals/PostModal/PostModal';
const CreateNewPost = () => {
    return (
        <>
         <div className="border rounded-lg py-4 px-5 commonBackgroundColor">
          <div>
          <label htmlFor="Create new post"> <p className='mb-5 '>Create new post</p></label>
            <button data-modal-target="PostModal" data-modal-toggle="PostModal" className='rounded-3xl border w-full py-2 mt-5 text-start' style={{border:"1px solid rgba(0, 0, 0, 0.2)"}}> 
            <p className='mx-8'>🖋️  <span className="mx-5"> Create new post</span></p>
            </button>
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-8 w-86 text-start">
          <div className='flex justify-around hover:bg-slate-100 rounded-3xl py-2 px-3 cursor-pointer'> <img src={pictureImage} alt="Photosvideos" className='h-5 w-5'/> <p className='mx-2'>Photos/videos</p> </div>
          <div className='flex justify-around hover:bg-slate-100 rounded-3xl py-2 px-3 cursor-pointer'> <img src={activitiesImage} alt="Feelings Activities" className='h-5 w-5'/>  <p className='mx-2'>Feelings/Activities</p> </div>
          <div className='flex justify-around hover:bg-slate-100 rounded-3xl py-2 px-3 cursor-pointer'> <img src={liveStream} alt="Live stream" className='h-5 w-7'/>  <p className='mx-2'> Live stream </p> </div>
          </div>
         </div>
         <PostModal></PostModal>
        </>
    );
};

export default CreateNewPost;