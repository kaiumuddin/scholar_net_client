import React from "react";
import AskQuestion from '../../Shared/AskQuestion/AskQuestion.jsx';
import PopularBooks from "../../Shared/PopularBooks/PopularBooks.jsx";

const RightContent = () => {
  return (
    <div>
      <PopularBooks></PopularBooks>
      <AskQuestion></AskQuestion>
    </div>
  );
};

export default RightContent;
