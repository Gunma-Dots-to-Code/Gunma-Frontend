import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const QuestionButton: React.FC<{}> = () => {
	return (
		<Link
			href="/question"
			passHref
			className="bg-primaryBlue hover:bg-blue-700 text-white font-medium py-3 font-sans px-5 rounded-lg inline-flex items-center focus:outline-none focus:shadow-outline ml-4"
		>
			<span>質問する</span>
			<IoIosArrowDroprightCircle className="ml-2" />{" "}
		</Link>
	);
};

export default QuestionButton;
