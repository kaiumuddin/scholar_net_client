import React from 'react';

import './RightContent.css';
import Group from './Groupe/Group';
import Suggestion from './Suggestion/Suggestion';

const RightContent = () => {
    return (
        <div className=''>
            <div>
                <Group />
                <Suggestion/>
            </div>
        </div>
    );
};

export default RightContent;