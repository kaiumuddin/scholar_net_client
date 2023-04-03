import React from 'react';
import { FaGift } from 'react-icons/fa';

const EventExplore = () => {
    return (
        <div className='mb-10'>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <div className='flex items-center justify-between pb-5'>
                    <p className='font-semibold text-gray-600  text-xl'>Explor Events</p>
                    <p className='text-sky-400 hover:text-black cursor-pointer'>See All</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-center py-5 flex flex-col items-center justify-center gap-2 bg-purple-400 rounded'>
                        <FaGift className='text-center text-5xl text-white'/>
                        <p className='font-semibold px-2 text-xl text-white'>BZ University good night event in columbia</p>
                    </div>
                    <div className='text-center py-5 flex flex-col items-center justify-center gap-2 bg-sky-600 rounded'>
                        <FaGift className='text-center text-5xl text-white'/>
                        <p className='font-semibold text-xl px-2 text-white'>The 3rd International Conference 2020</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default EventExplore;