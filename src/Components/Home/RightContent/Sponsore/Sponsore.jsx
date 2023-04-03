import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import IQoption from '../../../../Assets/sponsor.jpg';
import IQoption2 from '../../../../Assets/sponsor2.jpg';

const Sponsore = () => {
    return (
        <div className='mb-10'>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <p className='font-semibold text-gray-600 pb-5  flex items-center gap-3'><FaGlobe /> Sponsored</p>
                <div>
                    <div className='flex items-center gap-3 mb-5'>
                        <div><img className='rounded-md' src={IQoption} alt="" /></div>
                        <div>
                            <p className='text-[18px] font-semibold text-gray-600'>IQ Options Broker</p>
                            <p className='text-gray-400'>www.iqvie.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div><img className='rounded-md' src={IQoption2} alt="" /></div>
                        <div>
                            <p className='text-[18px] font-semibold text-gray-600'>BM Fashion Designer</p>
                            <p className='text-gray-400'>www.abcd.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsore;