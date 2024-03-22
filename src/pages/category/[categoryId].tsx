import BaseTitle from "@/components/common/BaseTitle";
import Layout from "@/components/common/Layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
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
			<ul className="grid gap-5 grid-cols-1 mt-16">
				{questions.map((question) => (
					<li
						key={question.ID}
						className="truncate border px-5 py-5 rounded-md hover:bg-gray-100 transition duration-100 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
					>
						<Link
							href={`/category/${question.CategoryID}/question/${question.ID}`}
							className="block hover:underline"
						>
							<h3 className="text-lg font-semibold">
								{question.QuestionTitle}
							</h3>
							<p className="text-gray-500 text-sm truncate">
								{question.QuestionContent.length > 40
									? `${question.QuestionContent.substring(
											0,
											40
									  )}...`
									: question.QuestionContent}
							</p>
						</Link>
					</li>
				))}
			</ul>
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
