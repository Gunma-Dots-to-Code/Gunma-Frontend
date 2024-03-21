import Layout from "../common/Layout";
import QuestionForm from "./QuestionForm";

type CategoriesProps = {
	categories: Category[];
};

const QuestionPage: React.FC<CategoriesProps> = ({ categories }) => {
	return (
		<Layout>
			<h1 className="text-xl font-bold text-center my-8">
				相談内容を入力する
			</h1>
			<p className="my-4 text-left text-xs text-gray-700 tracking-wider leading-5">
				相談内容はどなたでもご覧になれますので、個人の特定につながるような入力内容には十分ご注意ください。
				<br />
				また、
				<span className="font-bold">
					投稿後の修正・削除はできません
				</span>
				のでご留意ください。
			</p>
			<QuestionForm categoryList={categories} />
		</Layout>
	);
};
export default QuestionPage;
