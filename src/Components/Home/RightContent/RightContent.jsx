import React from 'react';

import './RightContent.css';
import Group from '../../Shared/Groupe/Group';
import Suggestion from '../../Shared/Suggestion/Suggestion';
import AskQuestion from '../../Shared/AskQuestion/AskQuestion';
import EventExplore from '../../Shared/EventExplore/EventExplore';

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