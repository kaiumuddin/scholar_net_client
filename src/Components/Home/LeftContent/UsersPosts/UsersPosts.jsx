import React from 'react';
import { Card, Dropdown, Avatar } from "flowbite-react";
import { NavLink } from 'react-router-dom';
import like from "../../../../assets/iconImage/like.png";
import heart from "../../../../assets/iconImage/heart.png";
import sad from "../../../../assets/iconImage/sad.png";
import sad2 from "../../../../assets/iconImage/sad2.png";
import ScaleLoader from "react-spinners/ScaleLoader";
const UsersPosts = () => {
  return (
    <>
   {[0,1,2,3,4,5,6,7,8,9].map((index) => 
   
   <div className="w-full md:max-w-2xl   ms-52 md:ms-10 my-5" key={index}>
   <Card>
     <div className="flex justify-between flex-col md:flex-row my-2">
       <div className="flex font-bold  my-5">
         <img src="https://i.ibb.co/nfGfPs0/dipika.webp" alt="user profile" className='h-12 w-12 rounded-full border-2 border-green-500' />
         <div className="flex flex-col mx-2">
           <p className='text-lg text-blue-600'> Susmita sen  <span className='text-gray-400 text-sm'>Create this post</span> </p>
           <p className='text-md mt-1 mx-1 text-gray-400'> <i className="fa-solid fa-globe"></i> Published Sep, 12, 2022</p>
         </div>
       </div>
       <Dropdown
         inline={true}
         label=""
       >
         <Dropdown.Item>
           <NavLink to="/"
             href="#"
             className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
           >
             <span>   <i className="fa-solid fa-pen-to-square mx-2"></i>    Edit post</span>
           </NavLink>
         </Dropdown.Item>
         <Dropdown.Item>
           <NavLink to="/"
             href="#"
             className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
           >
             <span> <i className="fa-solid fa-trash-can mx-2"></i>  Delete post</span>
           </NavLink>
         </Dropdown.Item>

         <Dropdown.Item>
           <NavLink to="/"
             href="#"
             className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
           >
             <span>  <i className="fa-solid fa-eye-slash mx-2"></i>  Hide post</span>
           </NavLink>
         </Dropdown.Item>

         <Dropdown.Item>
           <NavLink to="/"
             href="#"
             className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
           >
             <span> <i className="fa-solid fa-flag-checkered mx-2"></i>   Report post</span>
           </NavLink>
         </Dropdown.Item>
       </Dropdown>

     </div>

     <div className="flex flex-col items-center my-2 pb-10">
       <img
         className="mb-3 h-auto w-auto shadow-lg rounded-lg"
         src="https://i.ibb.co/9qJF3hJ/study.jpg"
         alt="Bonnie"
       />
       <p className="mb-1 text-md  my-2 font-medium text-start text-gray-600">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </p>

       <p className='text-md text-gray-400 my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magni totam, saepe a atque, porro laudantium repellendus veniam ad minus ut optio facilis beatae nemo vel! Odit suscipit commodi laudantium quaerat, cupiditate dolore, accusamus ullam quibusdam eos impedit aliquam adipisci!</p>
       <hr className='bg-gray-400 border w-full my-4 clear-both' />
       <div className="flex justify-between flex-col md:flex-row">
         <div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 invisible	md:visible	 justify-around  my-10">
             <div className='mx-4'><i className="fa-solid fa-eye text-green-500"></i>  <p className='-mt-10 ms-5 text-sm text-gray-500'>560</p></div>
             <div className='mx-4'> <i className="fa-regular fa-message text-green-500"></i> <p className='-mt-10 ms-5 text-sm text-gray-500'>200</p></div>
             <div className='mx-4'> <i className="fa-regular fa-star text-green-500"></i>  <p className='-mt-10 ms-5 text-sm text-gray-500'>230</p></div>
             <div className='mx-4'> <i className="fa-solid fa-share-nodes text-green-500"></i> <p className='-mt-10 ms-5 text-sm text-gray-500'>110</p></div>
           </div>
           <div className="mt-4 flex flex-col md:flex-row space-x-3 lg:mt-6">
             <button
               className="inline-flex items-center my-2 rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
             >
               <span><i className="fa-regular fa-thumbs-up mx-2 text-lg"></i>   Like</span>
             </button>

             <button
               className="inline-flex items-center my-2 rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
             >
               <span>Comment <i className="fa-solid fa-comment-dots mx-2 text-lg"></i></span>
             </button>
             <button
               className="inline-flex items-center my-2 rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
             >
               <span> Share <i className="fa-solid fa-share-from-square  mx-2 text-lg"></i></span>
             </button>

           </div>
         </div>

         <div className='mx-8'>
           <div className='ms-10 -ms-5 md:ms-0 mt-8'>  Replay <i className="fa-solid fa-reply-all mx-2 mb-12 text-lg"></i></div>
           <div className="flex justify-center">
             <div className="hover:cursor-pointer">
               <React.Fragment>
                 <div className="flex justify-between ms-7 -mt-8 hidden md:block">
                   <Avatar.Group>
                     <Avatar
                       img={like}
                       rounded={true}
                     />
                     <Avatar
                       img={heart}
                       rounded={true}
                     />
                     <Avatar
                       img={sad}
                       rounded={true}
                     />
                     <Avatar
                       img={sad2}
                       rounded={true}
                     />
                   </Avatar.Group>
                   <p className='mx-3 mt-2 text-gray-600'> 30+ </p>
                 </div>

               </React.Fragment>
             </div>
           </div>
         </div>
       </div>
     </div>
   </Card>
 </div>
   )}


<div className='mt-12'>
<div className='flex  justify-center my-4'> <ScaleLoader color="#36d7b7" /> </div>
<div className="flex  justify-center mb-8 mt-3">
   <div>  <button type="button" className="text-white w-72 bg-gradient-to-r  mt-2 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-5 "> Load more... </button></div>
     </div>
</div>
    </>
  );
};

export default UsersPosts;