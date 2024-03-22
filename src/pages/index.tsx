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
			<div className="flex items-center justify-center my-20">
				<Link href="/question">
					<button
						type="button"
						className="bg-[#448cea] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						質問する
					</button>
				</Link>
			</div>
			<ul className="grid grid-cols-2 gap-7">
				{categories.map((category) => (
					<Link href={`/category/${category.ID}`} key={category.ID}>
						<li
							key={category.ID}
							className="font-bold border px-6 py-4 rounded-md hover:bg-gray-100 transition duration-100 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
						>
							{category.CategoryName}
						</li>
					</Link>
				))}
			</ul>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await fetch("http://localhost:8080/categories");
		if (!response.ok) {
			throw new Error("Failed to fetch");
		}
		const categories: Category[] = await response.json();

		return { props: { categories } };
	} catch (error: any) {
		return { props: { categories: [], error: error.message } };
	}
};

export default CategoriesPage;
