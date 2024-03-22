import React from "react";
import QuestionAnswer from "@/components/answer";
import { GetServerSideProps } from "next";

type QuestionProps = {
	question: Question;
	answers: Answer[];
	error: string;
};

const QuestionAnswerPage: React.FC<QuestionProps> = ({
	question,
	answers,
	error,
}) => {
	if (error) {
		return <div>Error: {error}</div>;
	}
	return <QuestionAnswer question={question} answers={answers} />;
};

export const getServerSideProps: GetServerSideProps = async (content) => {
	const { categoryId, questionId } = content.params || {};
	try {
		const questionResponse = await fetch(
			`http://localhost:8080/categories/${categoryId}/questions/${questionId}`
		);
		if (!questionResponse.ok) {
			throw new Error("Failed to fetch question");
		}
		const question: Question = await questionResponse.json();

		const answerResponse = await fetch(
			`http://localhost:8080/categories/${categoryId}}/questions/${questionId}/answers`
		);
		if (!answerResponse.ok) {
			throw new Error("Failed to fetch answer");
		}
		const answers: Answer[] = await answerResponse.json();

		return { props: { question, answers } };
	} catch (error: any) {
		return { props: { question: {}, error: error.message } };
	}
};

export default QuestionAnswerPage;
