import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Status from "../common/Status";

const Question = ({ question }: { question: Question }) => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // TODO: この部分を修正して、質問の日付を表示する
  const formattedDate = date.toLocaleString("ja-JP", options);

  return (
    <section>
      <div className="flex flex-col items-start px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-5">
        <div className="w-full max-w-2xl mx-auto prose text-left prose-blue">
          <div className="w-full mb-8 mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl mb-2 font-semibold">
                {question.QuestionTitle}
              </h1>
              <p className="text-xs text-gray-400">相談日: {formattedDate}</p>
            </div>
            <Status questionID={question.ID} /> {/* questionIDを渡す */}
          </div>
          <p>{question.QuestionContent}</p>
          <div className="flex justify-end">
            <UserCard userName={question.User.Username} isQuestioner={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
