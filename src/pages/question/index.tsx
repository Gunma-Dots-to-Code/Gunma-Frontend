import QuestionPage from "@/components/question";
import { GetServerSideProps } from "next";

const QuestionForm: React.FC<CategoriesProps> = ({ categories, error }) => {
	if (error) {
		return <div>Error: {error}</div>;
	}
	return <QuestionPage categories={categories} />;
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

export default QuestionForm;
