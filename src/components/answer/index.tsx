import { useState } from "react";
import Layout from "../common/Layout";
import AnswerCard from "./AnswerCard";
import Question from "./QuestionCard";
import CreateAnswerCard from "./CreateAnswerModal";

const QuestionAnswer = ({
	question,
	answers,
}: {
	question: Question;
	answers: Answer[];
}) => {
	const [showAnswerForm, setShowAnswerForm] = useState(false);

	const handleAnswerClick = () => {
		setShowAnswerForm(true);
	};
	return (
		<Layout>
			<Question question={question} />
			<div className="text-center my-8">
				<button
					onClick={handleAnswerClick}
					className="bg-primaryBlue text-white px-6 py-2 rounded hover:bg-primary-dark font-semibold"
				>
					質問に回答する
				</button>
				{showAnswerForm && (
					<CreateAnswerCard
						questionId={question.ID}
						questionTitle={question.QuestionTitle}
						questionContent={question.QuestionContent}
						categoryId={question.CategoryID}
						onClose={() => setShowAnswerForm(false)}
					/>
				)}
			</div>
			<AnswerCard answers={answers} />
		</Layout>
	);
};

export default QuestionAnswer;
