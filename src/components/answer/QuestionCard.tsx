import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

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
				<div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
					<div className="w-full mx-auto">
						<h1 className="text-2xl mb-2 font-semibold">
							{question.QuestionTitle}
						</h1>
						<p className="mb-5">{formattedDate}</p>
						<p>{question.QuestionContent}</p>
					</div>
					<div className="flex justify-end">
						<UserCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Question;
