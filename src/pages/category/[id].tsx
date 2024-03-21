import { GetServerSideProps } from "next";
import React from "react";

// fetch data from the server
const CategoriesPage: React.FC<CategoriesProps> = ({ categories, error }) => {
	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h2>Categories</h2>
			<ul>
				{categories.map((category) => (
					<li key={category.ID}>{category.CategoryName}</li>
				))}
			</ul>
		</div>
	);
};

// getServerSideProps関数
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await fetch("http://localhost:8080/categories");
		if (!response.ok) {
			throw new Error("Failed to fetch");
		}
		const categories: Category[] = await response.json();

		// Propsとしてページコンポーネントにカテゴリーを渡す
		return { props: { categories } };
	} catch (error: any) {
		// エラーが発生した場合は、errorプロパティをpropsとして渡す
		return { props: { categories: [], error: error.message } };
	}
};

export default CategoriesPage;
