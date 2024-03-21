import Layout from "../common/Layout";
import AnswerCard from "./AnswerCard";
import Question from "./QuestionCard";

const QuestionAnswer = ({
	question,
	answers,
}: {
	question: Question;
	answers: Answer[];
}) => {
	return (
		<Layout>
			<Question question={question} />
			<AnswerCard answers={answers} />
		</Layout>
	);
};

export default QuestionAnswer;
