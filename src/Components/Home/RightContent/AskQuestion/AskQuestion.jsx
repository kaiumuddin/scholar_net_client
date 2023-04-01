import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";

const AskQuestion = () => {
    return (
        <div className='mb-10'>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <p className='font-semibold text-gray-600 pb-5 text-xl'>Ask Research Question?</p>
                <div className='flex gap-4 items-center'>
                    <div>
                        <FaQuestionCircle className='text-4xl text-sky-400' />
                    </div>
                    <div className='flex justify-center '>
                        <p className=''>Ask questions in Q&A to get help <br />from experts in your field.</p>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    <p className='text-sky-400 font-semibold border border-sky-400 w-full mx-5 py-2 rounded-full flex justify-center cursor-pointer hover:bg-sky-400 hover:text-white duration-300'>Ask a Question</p>
                </div>
            </div>
        </div>
    );
};

export default AskQuestion;