import BaseTitle from "@/components/common/BaseTitle";
import Header from "@/components/common/Header";
import QuestionButton from "@/components/common/QuestionButton";
import QuestionItem, {
	QuestionItemProps,
} from "@/components/common/QuestionItem";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

const CategoriesPage: React.FC<CategoriesProps> = ({ categories, error }) => {
	const PopularQuestionDummyData: QuestionItemProps[] = [
		{
			questionID: 1,
			questionTitle: "キャンペーンの作成方法について",
			questionContent:
				"期間限定のキャンペーンを作成したいのですが、管理画面からどのように設定できますか？",
			categoryID: 1,
		},
		{
			questionID: 2,
			questionTitle: "在庫の確認方法について",
			questionContent:
				"作成した商品の在庫を確認する方法を教えてください。",
			categoryID: 1,
		},
		{
			questionID: 3,
			questionTitle: "現在契約中のプランの確認方法",
			questionContent:
				"契約したプランを確認したいのですが、管理画面のどのページから確認できるでしょうか？また、プランを変更するにはどこにアクセスすればよいでしょうか？",
			categoryID: 2,
		},
		{
			questionID: 4,
			questionTitle: "請求書の確認方法について",
			questionContent:
				"請求書の確認方法を教えてください。また、請求書のダウンロード方法についても教えていただけますか？",
			categoryID: 2,
		},
		{
			questionID: 5,
			questionTitle: "商品の登録方法について",
			questionContent: "商品の登録方法を教えてください。",
			categoryID: 3,
		},
	];

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="flex flex-col h-screen justify-between mb-auto">
			<Header />
			<div className="bg-white pt-5">
				<div className="max-w-2xl mx-auto">
					<BaseTitle title="❓ よくある質問" />
					<div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10">
						{PopularQuestionDummyData.map((question) => (
							<QuestionItem
								questionID={question.questionID}
								questionTitle={question.questionTitle}
								questionContent={question.questionContent}
								categoryID={question.categoryID}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="bg-blue-50 py-6">
				<div className="max-w-2xl mx-auto">
					<BaseTitle title="🧩 カテゴリー選択" />
					<ul className="grid grid-cols-2 gap-4 mb-10 mt-4">
						{categories.map((category) => (
							<Link
								href={`/category/${category.ID}`}
								key={category.ID}
							>
								<li
									key={category.ID}
									className="font-bold border px-6 py-4 rounded-md hover:bg-gray-100 transition duration-100 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white"
								>
									{category.CategoryName}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
			<div className="flex items-center justify-center my-10">
				<div className="mb-10">
					<QuestionButton />
				</div>
			</div>
		</div>
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
