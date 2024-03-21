import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const AnswerCard = ({ answers }: { answers: Answer[] }) => {
	const date = new Date();
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const formattedDate = date.toLocaleString("ja-JP", options);

	return (
		<section>
			<div className="border border-gray-300 rounded-2xl max-w-3xl mx-auto">
				<div className="flex flex-col items-start px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
						<div className="w-full mx-auto">
							<div className="flex justify-start">
								<UserCard />
							</div>
							<p className="mb-5">{formattedDate}</p>
							<p className="mb-5">
								{answers.map((answer) => (
									<li>{answer.AnswerContent}</li>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AnswerCard;
