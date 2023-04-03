import React from 'react';
import front_fuger2 from '../../../assets/iconImage/frnd-figure2.jpg';
import './Suggestion.css'

const Suggestion = () => {
    return (
        <div className='mb-10'>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <p className='font-semibold text-gray-600 pb-5 text-xl'>Suggested Group</p>
                <div className='bg-white border rounded-md'>
                    <div className='w-full suggestion rounded-md'>
                        <div className='pt-16 relative left-6 bottom-[-35px] z-10 flex justify-between items-center'>
                            <img className="w-20 rounded-full border-white border-2" src={front_fuger2} alt="Rounded avatar" />
                            <p className='flex justify-end text-gray-100 font-semibold pr-8 pb-7 '>Member 505k</p>
                        </div>
                    </div>
                    <div className='relative left-28 w-40'>
                        <p className='text-md font-semibold text-gray-500'>Social Group</p>
                        <p className='text-gray-400'>@biolabest</p>
                    </div>
                    <div className='flex justify-center my-5'>
                        <p className='text-sky-400 font-semibold border border-sky-400 w-full mx-5 py-2 rounded-full flex justify-center cursor-pointer hover:bg-sky-400 hover:text-white duration-300'>Join Comunity</p>
                    </div>
                </div>
                <div className='h-16'>
                    <div className='flex justify-center gap-1 items-center h-full'>
                        <div className='w-4 h-4 border-2 rounded-full border-sky-400'>
                            <span className='w-full h-full block rounded-full bg-sky-400 border-white border-2 cursor-pointer'></span>
                       </div>
                        <div className='w-4 h-4 border-2 rounded-full border-sky-400'>
                            <span className='w-full h-full block rounded-full bg-white border-white border-2 cursor-pointer'></span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;