import BaseTitle from "@/components/common/BaseTitle";
import Layout from "@/components/common/Layout";
import QuestionItem from "@/components/common/QuestionItem";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

const CategoriesPage: React.FC<CategoryQuestionsProps> = ({
	questions,
	error,
}) => {
	const categoryName = questions[0]?.Category.CategoryName || "";
	if (error) {
		return <div>Error: {error}</div>;
	}
	return (
		<Layout>
			<BaseTitle title={categoryName} />
			{questions.length === 0 ? (
				<div>
					<BaseTitle title={categoryName} />
					<p>まだ質問がありません</p>
				</div>
			) : (
				<ul className="grid gap-5 grid-cols-1 mt-16">
					{questions.map((question) => (
						<QuestionItem
							questionID={question.ID}
							questionTitle={question.QuestionTitle}
							questionContent={question.QuestionContent}
							categoryID={question.CategoryID}
						/>
					))}
				</ul>
			)}
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { categoryId } = context.params || {};
		const response = await fetch(
			`http://localhost:8080/categories/${categoryId}/questions`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch");
		}
		const questions: Question[] = await response.json();

		return { props: { questions } };
	} catch (error: any) {
		return { props: { questions: [], error: error.message } };
	}
};

export default CategoriesPage;
