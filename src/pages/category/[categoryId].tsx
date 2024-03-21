import Layout from "@/components/common/Layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

// fetch data from the server
const CategoriesPage: React.FC<CategoryQuestionsProps> = ({
	questions,
	error,
}) => {
	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<Layout>
			<h2>Category</h2>
			<ul className="grid gap-7 grid-cols-1">
				{questions.map((question) => (
					<li key={question.ID}>
						<Link href={`/category/1/question/1`}>
							{question.QuestionTitle}
							{question.QuestionContent}
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

// getServerSideProps関数
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await fetch("http://localhost:8080/questions");
		if (!response.ok) {
			throw new Error("Failed to fetch");
		}
		const questions: Question[] = await response.json();

		// Propsとしてページコンポーネントにカテゴリーを渡す
		return { props: { questions } };
	} catch (error: any) {
		// エラーが発生した場合は、errorプロパティをpropsとして渡す
		return { props: { questions: [], error: error.message } };
	}
};

export default CategoriesPage;
