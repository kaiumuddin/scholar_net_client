import React from 'react';
import PopularBooks from "../../Shared/PopularBooks/PopularBooks.jsx";
import AskQuestion from "../../Shared/AskQuestion/AskQuestion";
import EventExplore from "../../Shared/EventExplore/EventExplore";

const RightContent = () => {
    return (
        <div>
            <PopularBooks></PopularBooks>
            <AskQuestion></AskQuestion>
            <EventExplore></EventExplore>
        </div>
    );
};

export default RightContent;