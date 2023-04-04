import React from 'react';
import group1 from '../../../Assets/iconImage/your-group1.jpg';
import group2 from '../../../Assets/iconImage/your-group2.jpg';

const Group = () => {
    return (
        <div className='mb-10'>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <p className='font-semibold text-gray-600 pb-5 text-xl'>Your Groups</p>
                <div className='flex flex-col gap-4 '>
                    <div className='flex gap-5'>
                        <div>
                            <img className="max-w-[60px] max-h-[60px] rounded-full" src={group1} alt="Rounded avatar" />
                        </div>
                        <div>
                            <span className='font-semibold text-gray-600'>Good Group</span>
                            <p className='text-gray-400'>Notifications <span className='border border-red-500 text-red-500 rounded-md text-xs px-1'>13</span></p>
                            <p className='text-sky-400 underline cursor-pointer'>view feed</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full devider'></div>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <img className="max-w-[60px] max-h-[60px] rounded-full" src={group2} alt="Rounded avatar" />
                        </div>
                        <div>
                            <span className='font-semibold text-gray-600'>E-course Group</span>
                            <p className='text-gray-400'>Notifications <span className='border border-red-500 text-red-500 rounded-md text-xs px-1'>13</span></p>
                            <p className='text-sky-400 underline cursor-pointer'>view feed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Group;