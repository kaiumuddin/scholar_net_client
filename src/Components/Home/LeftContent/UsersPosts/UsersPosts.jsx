import ScaleLoader from "react-spinners/ScaleLoader";
import EditPostModal from '../Modals/EditPost/EditPost';
import ReportModal from '../Modals/ReportModal/ReportModal';
import SinglePost from "./SinglePost";
const UsersPosts = () => {
  //toggle message  and share 


  return (
    <>
    {
      [0,1,2,3,4,5,6,7,8,9].map((index) => 
      <SinglePost key={index}></SinglePost>
      )
    }
      <div className='mt-12'>
        <div className='flex  justify-center my-4'> <ScaleLoader color="#36d7b7" /> </div>
        <div className="flex  justify-center mb-8 mt-3">
          <div>  <button type="button" className="text-white w-72 bg-gradient-to-r  mt-2 from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-5 "> Load more... </button></div>
        </div>
      </div>
      <EditPostModal></EditPostModal>
      <ReportModal></ReportModal>
    </>
  );
      }
  export default UsersPosts ;