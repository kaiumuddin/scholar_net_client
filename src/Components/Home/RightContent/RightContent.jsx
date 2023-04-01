import React from 'react';

import './RightContent.css';
import Group from './Groupe/Group';
import Suggestion from './Suggestion/Suggestion';
import AskQuestion from './AskQuestion/AskQuestion';
import EventExplore from './EventExplore/EventExplore';

const RightContent = () => {
    return (
        <div className=''>
            <div>
                <Group />
                <Suggestion />
                <AskQuestion />
                <EventExplore/>
            </div>
        </div>
    );
};

export default RightContent;