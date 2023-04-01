import React from 'react';
import front_fuger2 from '../../../../Assets/frnd-figure2.jpg';

const Suggestion = () => {
    return (
        <div>
            <div className='p-5 border-gray-300 bg-gray-50 rounded-md border'>
                <p className='font-semibold text-gray-600 pb-5 text-xl'>Suggested Group</p>
                <div>
                    <div>
                        <img class="w-20 rounded-full" src={front_fuger2} alt="Rounded avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;