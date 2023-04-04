import React from 'react';
import Groupe from '../../Shared/Groupe/Group';
import Suggestion from '../../Shared/Suggestion/Suggestion';
import AskQuestion from '../../Shared/AskQuestion/AskQuestion';
import EventExplore from '../../Shared/EventExplore/EventExplore';

const LeftContent = () => {
    return (
        <div>
            <Groupe></Groupe>
            <Suggestion></Suggestion>
            <AskQuestion></AskQuestion>
            <EventExplore></EventExplore>
        </div>
    );
};

export default LeftContent;