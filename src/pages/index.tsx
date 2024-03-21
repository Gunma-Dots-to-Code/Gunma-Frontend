import Layout from "@/components/common/Layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

// fetch data from the server
const CategoriesPage: React.FC<CategoriesProps> = ({ categories, error }) => {
	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<Layout>
			<ul className="grid grid-cols-2 gap-7">
				{categories.map((category) => (
					<li key={category.ID}>
						<Link href={`/category/${category.ID}`}>
							{category.CategoryName}
						</Link>
					</li>
				))}
			</ul>
			<div className="flex items-center justify-center mt-20">
				<Link href="/question">
					<button
						type="button"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						質問を作成する
					</button>
				</Link>
			</div>
		</Layout>
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
