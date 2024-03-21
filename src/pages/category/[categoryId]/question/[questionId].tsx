import React from "react";
import QuestionAnswer from "@/components/answer";
import { GetServerSideProps } from "next";

// fetch data from the server

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

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const questionResponse = await fetch(
			"http://localhost:8080/categories/1/questions/1"
		);
		if (!questionResponse.ok) {
			throw new Error("Failed to fetch question");
		}
		const question: Question = await questionResponse.json();

		const answerResponse = await fetch(
			"http://localhost:8080/categories/1/questions/1/answers"
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
