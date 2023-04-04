import React from 'react';

import './RightContent.css';
import Group from '../../Shared/Groupe/Group';
import Suggestion from '../../Shared/Suggestion/Suggestion';
import AskQuestion from '../../Shared/AskQuestion/AskQuestion';
import EventExplore from '../../Shared/EventExplore/EventExplore';
import Sponsore from './Sponsore/Sponsore';
import Follow from './Follow/Follow';

const RightContent = () => {
    return (
        <div className='rightContentStyle'>
            <div>
                <Group />
                <Suggestion />
                <AskQuestion />
                <EventExplore />
                <Sponsore />
                <Follow/>
            </div>
        </div>
    );
};

export default RightContent;