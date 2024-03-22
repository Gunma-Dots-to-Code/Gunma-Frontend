import Link from "next/link";

export type QuestionItemProps = {
	questionID: number;
	questionTitle: string;
	questionContent: string;
	categoryID: number;
};
const QuestionItem: React.FC<QuestionItemProps> = ({
	questionID,
	questionTitle,
	questionContent,
	categoryID,
}) => {
	return (
		<li
			key={questionID}
			className="truncate border px-5 py-5 rounded-md hover:bg-gray-100 transition duration-100 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg list-none"
		>
			<Link
				href={`/category/${categoryID}/question/${questionID}`}
				className="block hover:underline"
			>
				<h3 className="text-lg font-semibold">{questionTitle}</h3>
				<p className="text-gray-500 text-sm truncate">
					{questionContent.length > 40
						? `${questionContent.substring(0, 40)}...`
						: questionContent}
				</p>
			</Link>
		</li>
	);
};

export default QuestionItem;
